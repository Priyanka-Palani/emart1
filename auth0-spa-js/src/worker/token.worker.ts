import { MissingRefreshTokenError } from '../errors';
import { createQueryParams } from '../utils';
import { WorkerRefreshTokenMessage } from './worker.types';

let refreshTokens: Record<string, string> = {};

const cacheKey = (audience: string, scope: string) => `${audience}|${scope}`;

const getRefreshToken = (audience: string, scope: string) =>
  refreshTokens[cacheKey(audience, scope)];

const setRefreshToken = (
  refreshToken: string,
  audience: string,
  scope: string
) => (refreshTokens[cacheKey(audience, scope)] = refreshToken);

const deleteRefreshToken = (audience: string, scope: string) =>
  delete refreshTokens[cacheKey(audience, scope)];

const wait = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

const formDataToObject = (formData: string): Record<string, any> => {
  const queryParams = new URLSearchParams(formData);
  const parsedQuery: any = {};

  queryParams.forEach((val, key) => {
    parsedQuery[key] = val;
  });

  return parsedQuery;
};

const messageHandler = async ({
  data: { timeout, auth, fetchUrl, fetchOptions, useFormData },
  ports: [port]
}: MessageEvent<WorkerRefreshTokenMessage>) => {
  let json: {
    refresh_token?: string;
  };

  const { audience, scope } = auth || {};

  try {
    const body = useFormData
      ? formDataToObject(fetchOptions.body as string)
      : JSON.parse(fetchOptions.body as string);

    if (!body.refresh_token && body.grant_type === 'refresh_token') {
      const refreshToken = getRefreshToken(audience, scope);

      if (!refreshToken) {
        throw new MissingRefreshTokenError(audience, scope);
      }

      fetchOptions.body = useFormData
        ? createQueryParams({
            ...body,
            refresh_token: refreshToken
          })
        : JSON.stringify({
            ...body,
            refresh_token: refreshToken
          });
    }

    let abortController: AbortController | undefined;

    if (typeof AbortController === 'function') {
      abortController = new AbortController();
      fetchOptions.signal = abortController.signal;
    }

    let response: any;

    try {
      response = await Promise.race([
        wait(timeout),
        fetch(fetchUrl, { ...fetchOptions })
      ]);
    } catch (error) {
      // fetch error, reject `sendMessage` using `error` key so that we retry.
      port.postMessage({
        error: error.message
      });

      return;
    }

    if (!response) {
      // If the request times out, abort it and let `switchFetch` raise the error.
      if (abortController) abortController.abort();

      port.postMessage({
        error: "Timeout when executing 'fetch'"
      });

      return;
    }

    json = await response.json();

    if (json.refresh_token) {
      setRefreshToken(json.refresh_token, audience, scope);
      delete json.refresh_token;
    } else {
      deleteRefreshToken(audience, scope);
    }

    port.postMessage({
      ok: response.ok,
      json
    });
  } catch (error) {
    port.postMessage({
      ok: false,
      json: {
        error: error.error,
        error_description: error.message
      }
    });
  }
};

// Don't run `addEventListener` in our tests (this is replaced in rollup)
if (process.env.NODE_ENV === 'test') {
  module.exports = { messageHandler };
  /* c8 ignore next 4  */
} else {
  // @ts-ignore
  addEventListener('message', messageHandler);
}
