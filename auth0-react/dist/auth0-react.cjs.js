'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function e(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]]);}return i}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}var n=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,i){var o=e.locked.get(t);void 0===o?void 0===i?e.locked.set(t,[]):e.locked.set(t,[i]):void 0!==i&&(o.unshift(i),e.locked.set(t,o));},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(i,o){e.isLocked(t)?e.addToLocked(t,i):(e.addToLocked(t),i());}))},this.unlock=function(t){var i=e.locked.get(t);if(void 0!==i&&0!==i.length){var o=i.pop();e.locked.set(t,i),void 0!==o&&setTimeout(o,0);}else e.locked.delete(t);};}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();t.default=function(){return i.getInstance()};}));i(n);var a=i(o((function(e,i){var o=t&&t.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(n,a){function s(e){try{c(o.next(e));}catch(e){a(e);}}function r(e){try{c(o.throw(e));}catch(e){a(e);}}function c(e){e.done?n(e.value):new i((function(t){t(e.value);})).then(s,r);}c((o=o.apply(e,t||[])).next());}))},a=t&&t.__generator||function(e,t){var i,o,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s);}catch(e){a=[6,e],o=0;}finally{i=n=0;}if(5&a[0])throw a[1];return {value:a[0]?a[1]:void 0,done:!0}}([a,r])}}};Object.defineProperty(i,"__esModule",{value:!0});var s="browser-tabs-lock-key";function r(e){return new Promise((function(t){return setTimeout(t,e)}))}function c(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",i="",o=0;o<e;o++){i+=t[Math.floor(Math.random()*t.length)];}return i}var d=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+c(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[]);}return e.prototype.acquireLock=function(t,i){return void 0===i&&(i=5e3),o(this,void 0,void 0,(function(){var o,n,d,u,l,h;return a(this,(function(a){switch(a.label){case 0:o=Date.now()+c(4),n=Date.now()+i,d=s+"-"+t,u=window.localStorage,a.label=1;case 1:return Date.now()<n?[4,r(30)]:[3,8];case 2:return a.sent(),null!==u.getItem(d)?[3,5]:(l=this.id+"-"+t+"-"+o,[4,r(Math.floor(25*Math.random()))]);case 3:return a.sent(),u.setItem(d,JSON.stringify({id:this.id,iat:o,timeoutKey:l,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,r(30)];case 4:return a.sent(),null!==(h=u.getItem(d))&&(h=JSON.parse(h)).id===this.id&&h.iat===o?(this.acquiredIatSet.add(o),this.refreshLockWhileAcquired(d,o),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(n)];case 6:a.sent(),a.label=7;case 7:return o=Date.now()+c(4),[3,1];case 8:return [2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return o(this,void 0,void 0,(function(){var i=this;return a(this,(function(s){return setTimeout((function(){return o(i,void 0,void 0,(function(){var i,o;return a(this,(function(a){switch(a.label){case 0:return [4,n.default().lock(t)];case 1:return a.sent(),this.acquiredIatSet.has(t)?(i=window.localStorage,null===(o=i.getItem(e))?(n.default().unlock(t),[2]):((o=JSON.parse(o)).timeRefreshed=Date.now(),i.setItem(e,JSON.stringify(o)),n.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(n.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(i){switch(i.label){case 0:return [4,new Promise((function(i){var o=!1,n=Date.now(),a=!1;function s(){if(a||(window.removeEventListener("storage",s),e.removeFromWaiting(s),clearTimeout(r),a=!0),!o){o=!0;var t=50-(Date.now()-n);t>0?setTimeout(i,t):i();}}window.addEventListener("storage",s),e.addToWaiting(s);var r=setTimeout(s,Math.max(0,t-Date.now()));}))];case 1:return i.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t);},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})));},e.notifyWaiters=function(){void 0!==e.waiters&&e.waiters.slice().forEach((function(e){return e()}));},e.prototype.releaseLock=function(e){return o(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return [4,this.releaseLock__private__(e)];case 1:return [2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return o(this,void 0,void 0,(function(){var i,o,r;return a(this,(function(a){switch(a.label){case 0:return i=window.localStorage,o=s+"-"+t,null===(r=i.getItem(o))?[2]:(r=JSON.parse(r)).id!==this.id?[3,2]:[4,n.default().lock(r.iat)];case 1:a.sent(),this.acquiredIatSet.delete(r.iat),i.removeItem(o),n.default().unlock(r.iat),e.notifyWaiters(),a.label=2;case 2:return [2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,i=window.localStorage,o=Object.keys(i),n=!1,a=0;a<o.length;a++){var r=o[a];if(r.includes(s)){var c=i.getItem(r);null!==c&&(void 0===(c=JSON.parse(c)).timeRefreshed&&c.timeAcquired<t||void 0!==c.timeRefreshed&&c.timeRefreshed<t)&&(i.removeItem(r),n=!0);}}n&&e.notifyWaiters();},e.waiters=void 0,e}();i.default=d;})));const s={timeoutInSeconds:60},r={name:"auth0-spa-js",version:"2.1.2"},c=()=>Date.now();class d extends Error{constructor(e,t){super(t),this.error=e,this.error_description=t,Object.setPrototypeOf(this,d.prototype);}static fromPayload({error:e,error_description:t}){return new d(e,t)}}class u extends d{constructor(e,t,i,o=null){super(e,t),this.state=i,this.appState=o,Object.setPrototypeOf(this,u.prototype);}}class l extends d{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,l.prototype);}}class h extends l{constructor(e){super(),this.popup=e,Object.setPrototypeOf(this,h.prototype);}}class p extends d{constructor(e){super("cancelled","Popup closed"),this.popup=e,Object.setPrototypeOf(this,p.prototype);}}class m extends d{constructor(e,t,i){super(e,t),this.mfa_token=i,Object.setPrototypeOf(this,m.prototype);}}class f extends d{constructor(e,t){super("missing_refresh_token",`Missing Refresh Token (audience: '${g(e,["default"])}', scope: '${g(t)}')`),this.audience=e,this.scope=t,Object.setPrototypeOf(this,f.prototype);}}function g(e,t=[]){return e&&!t.includes(e)?e:""}const w=()=>window.crypto,y=()=>{const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";let t="";return Array.from(w().getRandomValues(new Uint8Array(43))).forEach((i=>t+=e[i%e.length])),t},k=e=>btoa(e),b=t=>{var{clientId:i}=t,o=e(t,["clientId"]);return new URLSearchParams((e=>Object.keys(e).filter((t=>void 0!==e[t])).reduce(((t,i)=>Object.assign(Object.assign({},t),{[i]:e[i]})),{}))(Object.assign({client_id:i},o))).toString()},v=e=>(e=>decodeURIComponent(atob(e).split("").map((e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2))).join("")))(e.replace(/_/g,"/").replace(/-/g,"+")),_=async(e,t)=>{const i=await fetch(e,t);return {ok:i.ok,json:await i.json()}},I=async(e,t,i)=>{const o=new AbortController;let n;return t.signal=o.signal,Promise.race([_(e,t),new Promise(((e,t)=>{n=setTimeout((()=>{o.abort(),t(new Error("Timeout when executing 'fetch'"));}),i);}))]).finally((()=>{clearTimeout(n);}))},S=async(e,t,i,o,n,a,s)=>{return r={auth:{audience:t,scope:i},timeout:n,fetchUrl:e,fetchOptions:o,useFormData:s},c=a,new Promise((function(e,t){const i=new MessageChannel;i.port1.onmessage=function(o){o.data.error?t(new Error(o.data.error)):e(o.data),i.port1.close();},c.postMessage(r,[i.port2]);}));var r,c;},T=async(e,t,i,o,n,a,s=1e4)=>n?S(e,t,i,o,s,n,a):I(e,o,s);async function O(t,i){var{baseUrl:o,timeout:n,audience:a,scope:s,auth0Client:c,useFormData:u}=t,l=e(t,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);const h=u?b(l):JSON.stringify(l);return await async function(t,i,o,n,a,s,r){let c,u=null;for(let e=0;e<3;e++)try{c=await T(t,o,n,a,s,r,i),u=null;break}catch(e){u=e;}if(u)throw u;const l=c.json,{error:h,error_description:p}=l,g=e(l,["error","error_description"]),{ok:w}=c;if(!w){const e=p||`HTTP error. Unable to fetch ${t}`;if("mfa_required"===h)throw new m(h,e,g.mfa_token);if("missing_refresh_token"===h)throw new f(o,n);throw new d(h||"request_error",e)}return g}(`${o}/oauth/token`,n,a||"default",s,{method:"POST",body:h,headers:{"Content-Type":u?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(c||r))}},i,u)}const j=(...e)=>{return (t=e.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(t))).join(" ");var t;};class C{constructor(e,t="@@auth0spajs@@",i){this.prefix=t,this.suffix=i,this.clientId=e.clientId,this.scope=e.scope,this.audience=e.audience;}toKey(){return [this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(e){const[t,i,o,n]=e.split("::");return new C({clientId:i,scope:n,audience:o},t)}static fromCacheEntry(e){const{scope:t,audience:i,client_id:o}=e;return new C({scope:t,audience:i,clientId:o})}}class z{set(e,t){localStorage.setItem(e,JSON.stringify(t));}get(e){const t=window.localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){return}}remove(e){localStorage.removeItem(e);}allKeys(){return Object.keys(window.localStorage).filter((e=>e.startsWith("@@auth0spajs@@")))}}class x{constructor(){this.enclosedCache=function(){let e={};return {set(t,i){e[t]=i;},get(t){const i=e[t];if(i)return i},remove(t){delete e[t];},allKeys:()=>Object.keys(e)}}();}}class P{constructor(e,t,i){this.cache=e,this.keyManifest=t,this.nowProvider=i||c;}async setIdToken(e,t,i){var o;const n=this.getIdTokenCacheKey(e);await this.cache.set(n,{id_token:t,decodedToken:i}),await(null===(o=this.keyManifest)||void 0===o?void 0:o.add(n));}async getIdToken(e){const t=await this.cache.get(this.getIdTokenCacheKey(e.clientId));if(!t&&e.scope&&e.audience){const t=await this.get(e);if(!t)return;if(!t.id_token||!t.decodedToken)return;return {id_token:t.id_token,decodedToken:t.decodedToken}}if(t)return {id_token:t.id_token,decodedToken:t.decodedToken}}async get(e,t=0){var i;let o=await this.cache.get(e.toKey());if(!o){const t=await this.getCacheKeys();if(!t)return;const i=this.matchExistingCacheKey(e,t);i&&(o=await this.cache.get(i));}if(!o)return;const n=await this.nowProvider(),a=Math.floor(n/1e3);return o.expiresAt-t<a?o.body.refresh_token?(o.body={refresh_token:o.body.refresh_token},await this.cache.set(e.toKey(),o),o.body):(await this.cache.remove(e.toKey()),void await(null===(i=this.keyManifest)||void 0===i?void 0:i.remove(e.toKey()))):o.body}async set(e){var t;const i=new C({clientId:e.client_id,scope:e.scope,audience:e.audience}),o=await this.wrapCacheEntry(e);await this.cache.set(i.toKey(),o),await(null===(t=this.keyManifest)||void 0===t?void 0:t.add(i.toKey()));}async clear(e){var t;const i=await this.getCacheKeys();i&&(await i.filter((t=>!e||t.includes(e))).reduce((async(e,t)=>{await e,await this.cache.remove(t);}),Promise.resolve()),await(null===(t=this.keyManifest)||void 0===t?void 0:t.clear()));}async wrapCacheEntry(e){const t=await this.nowProvider();return {body:e,expiresAt:Math.floor(t/1e3)+e.expires_in}}async getCacheKeys(){var e;return this.keyManifest?null===(e=await this.keyManifest.get())||void 0===e?void 0:e.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(e){return new C({clientId:e},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(e,t){return t.filter((t=>{var i;const o=C.fromKey(t),n=new Set(o.scope&&o.scope.split(" ")),a=(null===(i=e.scope)||void 0===i?void 0:i.split(" "))||[],s=o.scope&&a.reduce(((e,t)=>e&&n.has(t)),!0);return "@@auth0spajs@@"===o.prefix&&o.clientId===e.clientId&&o.audience===e.audience&&s}))[0]}}class Z{constructor(e,t,i){this.storage=e,this.clientId=t,this.cookieDomain=i,this.storageKey=`a0.spajs.txs.${this.clientId}`;}create(e){this.storage.save(this.storageKey,e,{daysUntilExpire:1,cookieDomain:this.cookieDomain});}get(){return this.storage.get(this.storageKey)}remove(){this.storage.remove(this.storageKey,{cookieDomain:this.cookieDomain});}}const K=e=>"number"==typeof e,L=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],E=e=>{if(!e.id_token)throw new Error("ID token is required but missing");const t=(e=>{const t=e.split("."),[i,o,n]=t;if(3!==t.length||!i||!o||!n)throw new Error("ID token could not be decoded");const a=JSON.parse(v(o)),s={__raw:e},r={};return Object.keys(a).forEach((e=>{s[e]=a[e],L.includes(e)||(r[e]=a[e]);})),{encoded:{header:i,payload:o,signature:n},header:JSON.parse(v(i)),claims:s,user:r}})(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`);if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if("RS256"!==t.header.alg)throw new Error(`Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!t.claims.aud||"string"!=typeof t.claims.aud&&!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but was not one of "${t.claims.aud.join(", ")}"`);if(t.claims.aud.length>1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`)}}else if(t.claims.aud!==e.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`);if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`)}if(e.max_age&&!K(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(null==t.claims.exp||!K(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!K(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");const i=e.leeway||60,o=new Date(e.now||Date.now()),n=new Date(0);if(n.setUTCSeconds(t.claims.exp+i),o>n)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o}) is after expiration time (${n})`);if(null!=t.claims.nbf&&K(t.claims.nbf)){const e=new Date(0);if(e.setUTCSeconds(t.claims.nbf-i),o<e)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o}) is before ${e}`)}if(null!=t.claims.auth_time&&K(t.claims.auth_time)){const n=new Date(0);if(n.setUTCSeconds(parseInt(t.claims.auth_time)+e.max_age+i),o>n)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o}) is after last auth at ${n}`)}if(e.organization){const i=e.organization.trim();if(i.startsWith("org_")){const e=i;if(!t.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(e!==t.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e}", found "${t.claims.org_id}"`)}else {const e=i.toLowerCase();if(!t.claims.org_name)throw new Error("Organization Name (org_name) claim must be a string present in the ID token");if(e!==t.claims.org_name)throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${e}", found "${t.claims.org_name}"`)}}return t};var U=o((function(e,i){var o=t&&t.__assign||function(){return o=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};function n(e,t){if(!t)return "";var i="; "+e;return !0===t?i:i+"="+t}function a(e,t,i){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t;}return n("Expires",e.expires?e.expires.toUTCString():"")+n("Domain",e.domain)+n("Path",e.path)+n("Secure",e.secure)+n("SameSite",e.sameSite)}(i)}function s(e){for(var t={},i=e?e.split("; "):[],o=/(%[\dA-F]{2})+/gi,n=0;n<i.length;n++){var a=i[n].split("="),s=a.slice(1).join("=");'"'===s.charAt(0)&&(s=s.slice(1,-1));try{t[a[0].replace(o,decodeURIComponent)]=s.replace(o,decodeURIComponent);}catch(e){}}return t}function r(){return s(document.cookie)}function c(e,t,i){document.cookie=a(e,t,o({path:"/"},i));}i.__esModule=!0,i.encode=a,i.parse=s,i.getAll=r,i.get=function(e){return r()[e]},i.set=c,i.remove=function(e,t){c(e,"",o(o({},t),{expires:-1}));};}));i(U),U.encode,U.parse,U.getAll;var W=U.get,D=U.set,N=U.remove;const X={get(e){const t=W(e);if(void 0!==t)return JSON.parse(t)},save(e,t,i){let o={};"https:"===window.location.protocol&&(o={secure:!0,sameSite:"none"}),(null==i?void 0:i.daysUntilExpire)&&(o.expires=i.daysUntilExpire),(null==i?void 0:i.cookieDomain)&&(o.domain=i.cookieDomain),D(e,JSON.stringify(t),o);},remove(e,t){let i={};(null==t?void 0:t.cookieDomain)&&(i.domain=t.cookieDomain),N(e,i);}},R={get(e){const t=X.get(e);return t||X.get(`_legacy_${e}`)},save(e,t,i){let o={};"https:"===window.location.protocol&&(o={secure:!0}),(null==i?void 0:i.daysUntilExpire)&&(o.expires=i.daysUntilExpire),(null==i?void 0:i.cookieDomain)&&(o.domain=i.cookieDomain),D(`_legacy_${e}`,JSON.stringify(t),o),X.save(e,t,i);},remove(e,t){let i={};(null==t?void 0:t.cookieDomain)&&(i.domain=t.cookieDomain),N(e,i),X.remove(e,t),X.remove(`_legacy_${e}`,t);}},V={get(e){if("undefined"==typeof sessionStorage)return;const t=sessionStorage.getItem(e);return null!=t?JSON.parse(t):void 0},save(e,t){sessionStorage.setItem(e,JSON.stringify(t));},remove(e){sessionStorage.removeItem(e);}};function J(e,t,i){var o=void 0===t?null:t,n=function(e,t){var i=atob(e);if(t){for(var o=new Uint8Array(i.length),n=0,a=i.length;n<a;++n)o[n]=i.charCodeAt(n);return String.fromCharCode.apply(null,new Uint16Array(o.buffer))}return i}(e,void 0!==i&&i),a=n.indexOf("\n",10)+1,s=n.substring(a)+(o?"//# sourceMappingURL="+o:""),r=new Blob([s],{type:"application/javascript"});return URL.createObjectURL(r)}var F,H,G,M,A=(F="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==",H=null,G=!1,function(e){return M=M||J(F,H,G),new Worker(M,e)});const Y={};class ${constructor(e,t){this.cache=e,this.clientId=t,this.manifestKey=this.createManifestKeyFrom(this.clientId);}async add(e){var t;const i=new Set((null===(t=await this.cache.get(this.manifestKey))||void 0===t?void 0:t.keys)||[]);i.add(e),await this.cache.set(this.manifestKey,{keys:[...i]});}async remove(e){const t=await this.cache.get(this.manifestKey);if(t){const i=new Set(t.keys);return i.delete(e),i.size>0?await this.cache.set(this.manifestKey,{keys:[...i]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(e){return `@@auth0spajs@@::${e}`}}const B={memory:()=>(new x).enclosedCache,localstorage:()=>new z},q=e=>B[e],Q=t=>{const{openUrl:i,onRedirect:o}=t,n=e(t,["openUrl","onRedirect"]);return Object.assign(Object.assign({},n),{openUrl:!1===i||i?i:o})},ee=new a;class te{constructor(e){let t,i;if(this.userCache=(new x).enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await ee.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide);},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),e),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),e.authorizationParams)}),"undefined"!=typeof window&&(()=>{if(!w())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(void 0===w().subtle)throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ")})(),e.cache&&e.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),e.cache)i=e.cache;else {if(t=e.cacheLocation||"memory",!q(t))throw new Error(`Invalid cache location "${t}"`);i=q(t)();}this.httpTimeoutMs=e.httpTimeoutInSeconds?1e3*e.httpTimeoutInSeconds:1e4,this.cookieStorage=!1===e.legacySameSiteCookie?X:R,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(e=>`auth0.${e}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=e.sessionCheckExpiryDays||1;const o=e.useCookiesForTransactions?this.cookieStorage:V;var n;this.scope=j("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new Z(o,this.options.clientId,this.options.cookieDomain),this.nowProvider=this.options.nowProvider||c,this.cacheManager=new P(i,i.allKeys?void 0:new $(i,this.options.clientId),this.nowProvider),this.domainUrl=(n=this.options.domain,/^https?:\/\//.test(n)?n:`https://${n}`),this.tokenIssuer=((e,t)=>e?e.startsWith("https://")?e:`https://${e}/`:`${t}/`)(this.options.issuer,this.domainUrl),"undefined"!=typeof window&&window.Worker&&this.options.useRefreshTokens&&"memory"===t&&(this.worker=new A);}_url(e){const t=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||r)));return `${this.domainUrl}${e}&auth0Client=${t}`}_authorizeUrl(e){return this._url(`/authorize?${b(e)}`)}async _verifyIdToken(e,t,i){const o=await this.nowProvider();return E({iss:this.tokenIssuer,aud:this.options.clientId,id_token:e,nonce:t,organization:i,leeway:this.options.leeway,max_age:(n=this.options.authorizationParams.max_age,"string"!=typeof n?n:parseInt(n,10)||void 0),now:o});var n;}_processOrgHint(e){e?this.cookieStorage.save(this.orgHintCookieName,e,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain});}async _prepareAuthorizeUrl(e,t,i){const o=k(y()),n=k(y()),a=y(),s=(e=>{const t=new Uint8Array(e);return (e=>{const t={"+":"-","/":"_","=":""};return e.replace(/[+/=]/g,(e=>t[e]))})(window.btoa(String.fromCharCode(...Array.from(t))))})(await(async e=>{const t=w().subtle.digest({name:"SHA-256"},(new TextEncoder).encode(e));return await t})(a)),r=((e,t,i,o,n,a,s,r)=>Object.assign(Object.assign(Object.assign({client_id:e.clientId},e.authorizationParams),i),{scope:j(t,i.scope),response_type:"code",response_mode:r||"query",state:o,nonce:n,redirect_uri:s||e.authorizationParams.redirect_uri,code_challenge:a,code_challenge_method:"S256"}))(this.options,this.scope,e,o,n,s,e.redirect_uri||this.options.authorizationParams.redirect_uri||i,null==t?void 0:t.response_mode),c=this._authorizeUrl(r);return {nonce:n,code_verifier:a,scope:r.scope,audience:r.audience||"default",redirect_uri:r.redirect_uri,state:o,url:c}}async loginWithPopup(e,t){var i;if(e=e||{},!(t=t||{}).popup&&(t.popup=(e=>{const t=window.screenX+(window.innerWidth-400)/2,i=window.screenY+(window.innerHeight-600)/2;return window.open(e,"auth0:authorize:popup",`left=${t},top=${i},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!t.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");const o=await this._prepareAuthorizeUrl(e.authorizationParams||{},{response_mode:"web_message"},window.location.origin);t.popup.location.href=o.url;const n=await(e=>new Promise(((t,i)=>{let o;const n=setInterval((()=>{e.popup&&e.popup.closed&&(clearInterval(n),clearTimeout(a),window.removeEventListener("message",o,!1),i(new p(e.popup)));}),1e3),a=setTimeout((()=>{clearInterval(n),i(new h(e.popup)),window.removeEventListener("message",o,!1);}),1e3*(e.timeoutInSeconds||60));o=function(s){if(s.data&&"authorization_response"===s.data.type){if(clearTimeout(a),clearInterval(n),window.removeEventListener("message",o,!1),e.popup.close(),s.data.response.error)return i(d.fromPayload(s.data.response));t(s.data.response);}},window.addEventListener("message",o);})))(Object.assign(Object.assign({},t),{timeoutInSeconds:t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(o.state!==n.state)throw new d("state_mismatch","Invalid state");const a=(null===(i=e.authorizationParams)||void 0===i?void 0:i.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:o.audience,scope:o.scope,code_verifier:o.code_verifier,grant_type:"authorization_code",code:n.code,redirect_uri:o.redirect_uri},{nonceIn:o.nonce,organization:a});}async getUser(){var e;const t=await this._getIdTokenFromCache();return null===(e=null==t?void 0:t.decodedToken)||void 0===e?void 0:e.user}async getIdTokenClaims(){var e;const t=await this._getIdTokenFromCache();return null===(e=null==t?void 0:t.decodedToken)||void 0===e?void 0:e.claims}async loginWithRedirect(t={}){var i;const o=Q(t),{openUrl:n,fragment:a,appState:s}=o,r=e(o,["openUrl","fragment","appState"]),c=(null===(i=r.authorizationParams)||void 0===i?void 0:i.organization)||this.options.authorizationParams.organization,d=await this._prepareAuthorizeUrl(r.authorizationParams||{}),{url:u}=d,l=e(d,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},l),{appState:s}),c&&{organization:c}));const h=a?`${u}#${a}`:u;n?await n(h):window.location.assign(h);}async handleRedirectCallback(e=window.location.href){const t=e.split("?").slice(1);if(0===t.length)throw new Error("There are no query params available for parsing.");const{state:i,code:o,error:n,error_description:a}=(e=>{e.indexOf("#")>-1&&(e=e.substring(0,e.indexOf("#")));const t=new URLSearchParams(e);return {state:t.get("state"),code:t.get("code")||void 0,error:t.get("error")||void 0,error_description:t.get("error_description")||void 0}})(t.join("")),s=this.transactionManager.get();if(!s)throw new d("missing_transaction","Invalid state");if(this.transactionManager.remove(),n)throw new u(n,a||n,i,s.appState);if(!s.code_verifier||s.state&&s.state!==i)throw new d("state_mismatch","Invalid state");const r=s.organization,c=s.nonce,l=s.redirect_uri;return await this._requestToken(Object.assign({audience:s.audience,scope:s.scope,code_verifier:s.code_verifier,grant_type:"authorization_code",code:o},l?{redirect_uri:l}:{}),{nonceIn:c,organization:r}),{appState:s.appState}}async checkSession(e){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated");}try{await this.getTokenSilently(e);}catch(e){}}async getTokenSilently(e={}){var t;const i=Object.assign(Object.assign({cacheMode:"on"},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:j(this.scope,null===(t=e.authorizationParams)||void 0===t?void 0:t.scope)})}),o=await((e,t)=>{let i=Y[t];return i||(i=e().finally((()=>{delete Y[t],i=null;})),Y[t]=i),i})((()=>this._getTokenSilently(i)),`${this.options.clientId}::${i.authorizationParams.audience}::${i.authorizationParams.scope}`);return e.detailedResponse?o:null==o?void 0:o.access_token}async _getTokenSilently(t){const{cacheMode:i}=t,o=e(t,["cacheMode"]);if("off"!==i){const e=await this._getEntryFromCache({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId});if(e)return e}if("cache-only"!==i){if(!await(async(e,t=3)=>{for(let i=0;i<t;i++)if(await e())return !0;return !1})((()=>ee.acquireLock("auth0.lock.getTokenSilently",5e3)),10))throw new l;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),"off"!==i){const e=await this._getEntryFromCache({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId});if(e)return e}const e=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(o):await this._getTokenFromIFrame(o),{id_token:t,access_token:n,oauthTokenScope:a,expires_in:s}=e;return Object.assign(Object.assign({id_token:t,access_token:n},a?{scope:a}:null),{expires_in:s})}finally{await ee.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide);}}}async getTokenWithPopup(e={},t={}){var i;const o=Object.assign(Object.assign({},e),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),e.authorizationParams),{scope:j(this.scope,null===(i=e.authorizationParams)||void 0===i?void 0:i.scope)})});t=Object.assign(Object.assign({},s),t),await this.loginWithPopup(o,t);return (await this.cacheManager.get(new C({scope:o.authorizationParams.scope,audience:o.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return !!await this.getUser()}_buildLogoutUrl(t){null!==t.clientId?t.clientId=t.clientId||this.options.clientId:delete t.clientId;const i=t.logoutParams||{},{federated:o}=i,n=e(i,["federated"]),a=o?"&federated":"";return this._url(`/v2/logout?${b(Object.assign({clientId:t.clientId},n))}`)+a}async logout(t={}){const i=Q(t),{openUrl:o}=i,n=e(i,["openUrl"]);null===t.clientId?await this.cacheManager.clear():await this.cacheManager.clear(t.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");const a=this._buildLogoutUrl(n);o?await o(a):!1!==o&&window.location.assign(a);}async _getTokenFromIFrame(e){const t=Object.assign(Object.assign({},e.authorizationParams),{prompt:"none"}),i=this.cookieStorage.get(this.orgHintCookieName);i&&!t.organization&&(t.organization=i);const{url:o,state:n,nonce:a,code_verifier:s,redirect_uri:r,scope:c,audience:u}=await this._prepareAuthorizeUrl(t,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new d("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");const i=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,h=await((e,t,i=60)=>new Promise(((o,n)=>{const a=window.document.createElement("iframe");a.setAttribute("width","0"),a.setAttribute("height","0"),a.style.display="none";const s=()=>{window.document.body.contains(a)&&(window.document.body.removeChild(a),window.removeEventListener("message",r,!1));};let r;const c=setTimeout((()=>{n(new l),s();}),1e3*i);r=function(e){if(e.origin!=t)return;if(!e.data||"authorization_response"!==e.data.type)return;const i=e.source;i&&i.close(),e.data.response.error?n(d.fromPayload(e.data.response)):o(e.data.response),clearTimeout(c),window.removeEventListener("message",r,!1),setTimeout(s,2e3);},window.addEventListener("message",r,!1),window.document.body.appendChild(a),a.setAttribute("src",e);})))(o,this.domainUrl,i);if(n!==h.state)throw new d("state_mismatch","Invalid state");const p=await this._requestToken(Object.assign(Object.assign({},e.authorizationParams),{code_verifier:s,code:h.code,grant_type:"authorization_code",redirect_uri:r,timeout:e.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:a,organization:t.organization});return Object.assign(Object.assign({},p),{scope:c,oauthTokenScope:p.scope,audience:u})}catch(e){throw "login_required"===e.error&&this.logout({openUrl:!1}),e}}async _getTokenUsingRefreshToken(e){const t=await this.cacheManager.get(new C({scope:e.authorizationParams.scope,audience:e.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(t&&t.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw new f(e.authorizationParams.audience||"default",e.authorizationParams.scope)}const i=e.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,o="number"==typeof e.timeoutInSeconds?1e3*e.timeoutInSeconds:null;try{const n=await this._requestToken(Object.assign(Object.assign(Object.assign({},e.authorizationParams),{grant_type:"refresh_token",refresh_token:t&&t.refresh_token,redirect_uri:i}),o&&{timeout:o}));return Object.assign(Object.assign({},n),{scope:e.authorizationParams.scope,oauthTokenScope:n.scope,audience:e.authorizationParams.audience||"default"})}catch(t){if((t.message.indexOf("Missing Refresh Token")>-1||t.message&&t.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(e);throw t}}async _saveEntryInCache(t){const{id_token:i,decodedToken:o}=t,n=e(t,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:i,decodedToken:o}),await this.cacheManager.setIdToken(this.options.clientId,t.id_token,t.decodedToken),await this.cacheManager.set(n);}async _getIdTokenFromCache(){const e=this.options.authorizationParams.audience||"default",t=await this.cacheManager.getIdToken(new C({clientId:this.options.clientId,audience:e,scope:this.scope})),i=this.userCache.get("@@user@@");return t&&t.id_token===(null==i?void 0:i.id_token)?i:(this.userCache.set("@@user@@",t),t)}async _getEntryFromCache({scope:e,audience:t,clientId:i}){const o=await this.cacheManager.get(new C({scope:e,audience:t,clientId:i}),60);if(o&&o.access_token){const{access_token:e,oauthTokenScope:t,expires_in:i}=o,n=await this._getIdTokenFromCache();return n&&Object.assign(Object.assign({id_token:n.id_token,access_token:e},t?{scope:t}:null),{expires_in:i})}}async _requestToken(e,t){const{nonceIn:i,organization:o}=t||{},n=await O(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},e),this.worker),a=await this._verifyIdToken(n.id_token,i,o);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},n),{decodedToken:a,scope:e.scope,audience:e.audience||"default"}),n.scope?{oauthTokenScope:n.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgHint(o||a.claims.org_id),Object.assign(Object.assign({},n),{decodedToken:a})}}class ie{}

/**
 * The initial auth state.
 */
var initialAuthState = {
    isAuthenticated: false,
    isLoading: true,
};

/**
 * @ignore
 */
var stub = function () {
    throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */
var initialContext = __assign(__assign({}, initialAuthState), { buildAuthorizeUrl: stub, buildLogoutUrl: stub, getAccessTokenSilently: stub, getAccessTokenWithPopup: stub, getIdTokenClaims: stub, loginWithRedirect: stub, loginWithPopup: stub, logout: stub, handleRedirectCallback: stub });
/**
 * The Auth0 Context
 */
var Auth0Context = React.createContext(initialContext);

/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */
var OAuthError = /** @class */ (function (_super) {
    __extends(OAuthError, _super);
    function OAuthError(error, error_description) {
        var _this = _super.call(this, error_description || error) || this;
        _this.error = error;
        _this.error_description = error_description;
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, OAuthError.prototype);
        return _this;
    }
    return OAuthError;
}(Error));

var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function (searchParams) {
    if (searchParams === void 0) { searchParams = window.location.search; }
    return (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) &&
        STATE_RE.test(searchParams);
};
var normalizeErrorFn = function (fallbackMessage) {
    return function (error) {
        if (error instanceof Error) {
            return error;
        }
        // try to check errors of the following form: {error: string; error_description?: string}
        if (error !== null &&
            typeof error === 'object' &&
            'error' in error &&
            typeof error.error === 'string') {
            if ('error_description' in error &&
                typeof error.error_description === 'string') {
                return new OAuthError(error.error, error.error_description);
            }
            return new OAuthError(error.error);
        }
        return new Error(fallbackMessage);
    };
};
var loginError = normalizeErrorFn('Login failed');
var tokenError = normalizeErrorFn('Get access token failed');
/**
 * @ignore
 * Helper function to map the v1 `redirectUri` option to the v2 `authorizationParams.redirect_uri`
 * and log a warning.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var deprecateRedirectUri = function (options) {
    var _a;
    if (options === null || options === void 0 ? void 0 : options.redirectUri) {
        console.warn('Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version');
        options.authorizationParams = options.authorizationParams || {};
        options.authorizationParams.redirect_uri = options.redirectUri;
        delete options.redirectUri;
    }
    if ((_a = options === null || options === void 0 ? void 0 : options.authorizationParams) === null || _a === void 0 ? void 0 : _a.redirectUri) {
        console.warn('Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version');
        options.authorizationParams.redirect_uri =
            options.authorizationParams.redirectUri;
        delete options.authorizationParams.redirectUri;
    }
};

/**
 * Handles how that state changes in the `useAuth0` hook.
 */
var reducer = function (state, action) {
    switch (action.type) {
        case 'LOGIN_POPUP_STARTED':
            return __assign(__assign({}, state), { isLoading: true });
        case 'LOGIN_POPUP_COMPLETE':
        case 'INITIALISED':
            return __assign(__assign({}, state), { isAuthenticated: !!action.user, user: action.user, isLoading: false, error: undefined });
        case 'HANDLE_REDIRECT_COMPLETE':
        case 'GET_ACCESS_TOKEN_COMPLETE':
            if (state.user === action.user) {
                return state;
            }
            return __assign(__assign({}, state), { isAuthenticated: !!action.user, user: action.user });
        case 'LOGOUT':
            return __assign(__assign({}, state), { isAuthenticated: false, user: undefined });
        case 'ERROR':
            return __assign(__assign({}, state), { isLoading: false, error: action.error });
    }
};

/**
 * @ignore
 */
var toAuth0ClientOptions = function (opts) {
    deprecateRedirectUri(opts);
    return __assign(__assign({}, opts), { auth0Client: {
            name: 'auth0-react',
            version: '2.2.3',
        } });
};
/**
 * @ignore
 */
var defaultOnRedirectCallback = function (appState) {
    window.history.replaceState({}, document.title, (appState === null || appState === void 0 ? void 0 : appState.returnTo) || window.location.pathname);
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   authorizationParams={{ redirect_uri: window.location.origin }}}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
var Auth0Provider = function (opts) {
    var children = opts.children, skipRedirectCallback = opts.skipRedirectCallback, _a = opts.onRedirectCallback, onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a, _b = opts.context, context = _b === void 0 ? Auth0Context : _b, clientOpts = __rest(opts, ["children", "skipRedirectCallback", "onRedirectCallback", "context"]);
    var client = React.useState(function () { return new te(toAuth0ClientOptions(clientOpts)); })[0];
    var _c = React.useReducer(reducer, initialAuthState), state = _c[0], dispatch = _c[1];
    var didInitialise = React.useRef(false);
    React.useEffect(function () {
        if (didInitialise.current) {
            return;
        }
        didInitialise.current = true;
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var user, appState, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        user = void 0;
                        if (!(hasAuthParams() && !skipRedirectCallback)) return [3 /*break*/, 3];
                        return [4 /*yield*/, client.handleRedirectCallback()];
                    case 1:
                        appState = (_a.sent()).appState;
                        return [4 /*yield*/, client.getUser()];
                    case 2:
                        user = _a.sent();
                        onRedirectCallback(appState, user);
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, client.checkSession()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, client.getUser()];
                    case 5:
                        user = _a.sent();
                        _a.label = 6;
                    case 6:
                        dispatch({ type: 'INITIALISED', user: user });
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        dispatch({ type: 'ERROR', error: loginError(error_1) });
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); })();
    }, [client, onRedirectCallback, skipRedirectCallback]);
    var loginWithRedirect = React.useCallback(function (opts) {
        deprecateRedirectUri(opts);
        return client.loginWithRedirect(opts);
    }, [client]);
    var loginWithPopup = React.useCallback(function (options, config) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch({ type: 'LOGIN_POPUP_STARTED' });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, client.loginWithPopup(options, config)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    dispatch({ type: 'ERROR', error: loginError(error_2) });
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, client.getUser()];
                case 5:
                    user = _a.sent();
                    dispatch({ type: 'LOGIN_POPUP_COMPLETE', user: user });
                    return [2 /*return*/];
            }
        });
    }); }, [client]);
    var logout = React.useCallback(function (opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.logout(opts)];
                    case 1:
                        _a.sent();
                        if (opts.openUrl || opts.openUrl === false) {
                            dispatch({ type: 'LOGOUT' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    }, [client]);
    var getAccessTokenSilently = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (opts) { return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, 3, 5]);
                    return [4 /*yield*/, client.getTokenSilently(opts)];
                case 1:
                    token = _c.sent();
                    return [3 /*break*/, 5];
                case 2:
                    error_3 = _c.sent();
                    throw tokenError(error_3);
                case 3:
                    _a = dispatch;
                    _b = {
                        type: 'GET_ACCESS_TOKEN_COMPLETE'
                    };
                    return [4 /*yield*/, client.getUser()];
                case 4:
                    _a.apply(void 0, [(_b.user = _c.sent(),
                            _b)]);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/, token];
            }
        });
    }); }, [client]);
    var getAccessTokenWithPopup = React.useCallback(function (opts, config) { return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, 3, 5]);
                    return [4 /*yield*/, client.getTokenWithPopup(opts, config)];
                case 1:
                    token = _c.sent();
                    return [3 /*break*/, 5];
                case 2:
                    error_4 = _c.sent();
                    throw tokenError(error_4);
                case 3:
                    _a = dispatch;
                    _b = {
                        type: 'GET_ACCESS_TOKEN_COMPLETE'
                    };
                    return [4 /*yield*/, client.getUser()];
                case 4:
                    _a.apply(void 0, [(_b.user = _c.sent(),
                            _b)]);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/, token];
            }
        });
    }); }, [client]);
    var getIdTokenClaims = React.useCallback(function () { return client.getIdTokenClaims(); }, [client]);
    var handleRedirectCallback = React.useCallback(function (url) { return __awaiter(void 0, void 0, void 0, function () {
        var error_5, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, 3, 5]);
                    return [4 /*yield*/, client.handleRedirectCallback(url)];
                case 1: return [2 /*return*/, _c.sent()];
                case 2:
                    error_5 = _c.sent();
                    throw tokenError(error_5);
                case 3:
                    _a = dispatch;
                    _b = {
                        type: 'HANDLE_REDIRECT_COMPLETE'
                    };
                    return [4 /*yield*/, client.getUser()];
                case 4:
                    _a.apply(void 0, [(_b.user = _c.sent(),
                            _b)]);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [client]);
    var contextValue = React.useMemo(function () {
        return __assign(__assign({}, state), { getAccessTokenSilently: getAccessTokenSilently, getAccessTokenWithPopup: getAccessTokenWithPopup, getIdTokenClaims: getIdTokenClaims, loginWithRedirect: loginWithRedirect, loginWithPopup: loginWithPopup, logout: logout, handleRedirectCallback: handleRedirectCallback });
    }, [
        state,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        getIdTokenClaims,
        loginWithRedirect,
        loginWithPopup,
        logout,
        handleRedirectCallback,
    ]);
    return React.createElement(context.Provider, { value: contextValue }, children);
};

/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0<TUser>();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 *
 * TUser is an optional type param to provide a type to the `user` field.
 */
var useAuth0 = function (context) {
    if (context === void 0) { context = Auth0Context; }
    return React.useContext(context);
};

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the Auth0Context.
 *
 * Providing a context as the second argument allows you to configure the Auth0Provider the Auth0Context
 * should come from f you have multiple within your application.
 */
var withAuth0 = function (Component, context) {
    if (context === void 0) { context = Auth0Context; }
    return function WithAuth(props) {
        return (React.createElement(context.Consumer, null, function (auth) { return (React.createElement(Component, __assign({}, props, { auth0: auth }))); }));
    };
};

/**
 * @ignore
 */
var defaultOnRedirecting = function () { return React.createElement(React.Fragment, null); };
/**
* @ignore
*/
var defaultOnBeforeAuthentication = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };
/**
 * @ignore
 */
var defaultReturnTo = function () {
    return "".concat(window.location.pathname).concat(window.location.search);
};
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page; after login they will be returned to the page they were redirected from.
 */
var withAuthenticationRequired = function (Component, options) {
    if (options === void 0) { options = {}; }
    return function WithAuthenticationRequired(props) {
        var _this = this;
        var _a = options.returnTo, returnTo = _a === void 0 ? defaultReturnTo : _a, _b = options.onRedirecting, onRedirecting = _b === void 0 ? defaultOnRedirecting : _b, _c = options.onBeforeAuthentication, onBeforeAuthentication = _c === void 0 ? defaultOnBeforeAuthentication : _c, loginOptions = options.loginOptions, _d = options.context, context = _d === void 0 ? Auth0Context : _d;
        var _e = useAuth0(context), isAuthenticated = _e.isAuthenticated, isLoading = _e.isLoading, loginWithRedirect = _e.loginWithRedirect;
        React.useEffect(function () {
            if (isLoading || isAuthenticated) {
                return;
            }
            var opts = __assign(__assign({}, loginOptions), { appState: __assign(__assign({}, (loginOptions && loginOptions.appState)), { returnTo: typeof returnTo === 'function' ? returnTo() : returnTo }) });
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, onBeforeAuthentication()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, loginWithRedirect(opts)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })();
        }, [
            isLoading,
            isAuthenticated,
            loginWithRedirect,
            onBeforeAuthentication,
            loginOptions,
            returnTo,
        ]);
        return isAuthenticated ? React.createElement(Component, __assign({}, props)) : onRedirecting();
    };
};

exports.Auth0Context = Auth0Context;
exports.Auth0Provider = Auth0Provider;
exports.AuthenticationError = u;
exports.GenericError = d;
exports.InMemoryCache = x;
exports.LocalStorageCache = z;
exports.MfaRequiredError = m;
exports.MissingRefreshTokenError = f;
exports.OAuthError = OAuthError;
exports.PopupCancelledError = p;
exports.PopupTimeoutError = h;
exports.TimeoutError = l;
exports.User = ie;
exports.initialContext = initialContext;
exports.useAuth0 = useAuth0;
exports.withAuth0 = withAuth0;
exports.withAuthenticationRequired = withAuthenticationRequired;
//# sourceMappingURL=auth0-react.cjs.js.map
