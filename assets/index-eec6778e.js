var ru=Object.defineProperty;var iu=(r,e,t)=>e in r?ru(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var kt=(r,e,t)=>(iu(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function gn(r,e){const t=Object.create(null),i=r.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Ce={},Qi=[],It=()=>{},su=()=>!1,au=/^on[^a-z]/,ca=r=>au.test(r),_n=r=>r.startsWith("onUpdate:"),Ye=Object.assign,vn=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},nu=Object.prototype.hasOwnProperty,ce=(r,e)=>nu.call(r,e),re=Array.isArray,Ji=r=>da(r)==="[object Map]",ou=r=>da(r)==="[object Set]",se=r=>typeof r=="function",je=r=>typeof r=="string",xn=r=>typeof r=="symbol",Be=r=>r!==null&&typeof r=="object",Ch=r=>Be(r)&&se(r.then)&&se(r.catch),hu=Object.prototype.toString,da=r=>hu.call(r),lu=r=>da(r).slice(8,-1),uu=r=>da(r)==="[object Object]",yn=r=>je(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,As=gn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},cu=/-(\w)/g,_i=fa(r=>r.replace(cu,(e,t)=>t?t.toUpperCase():"")),du=/\B([A-Z])/g,Pi=fa(r=>r.replace(du,"-$1").toLowerCase()),Eh=fa(r=>r.charAt(0).toUpperCase()+r.slice(1)),Pa=fa(r=>r?`on${Eh(r)}`:""),Ws=(r,e)=>!Object.is(r,e),Ra=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ks=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},fu=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let uo;const za=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bn(r){if(re(r)){const e={};for(let t=0;t<r.length;t++){const i=r[t],s=je(i)?_u(i):bn(i);if(s)for(const a in s)e[a]=s[a]}return e}else{if(je(r))return r;if(Be(r))return r}}const pu=/;(?![^(]*\))/g,mu=/:([^]+)/,gu=new RegExp("\\/\\*.*?\\*\\/","gs");function _u(r){const e={};return r.replace(gu,"").split(pu).forEach(t=>{if(t){const i=t.split(mu);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wn(r){let e="";if(je(r))e=r;else if(re(r))for(let t=0;t<r.length;t++){const i=wn(r[t]);i&&(e+=i+" ")}else if(Be(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const vu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xu=gn(vu);function Mh(r){return!!r||r===""}let Et;class yu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Et;try{return Et=this,e()}finally{Et=t}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bu(r,e=Et){e&&e.active&&e.effects.push(r)}function wu(){return Et}const Sn=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Ph=r=>(r.w&yr)>0,Rh=r=>(r.n&yr)>0,Su=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=yr},Tu=r=>{const{deps:e}=r;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Ph(s)&&!Rh(s)?s.delete(r):e[t++]=s,s.w&=~yr,s.n&=~yr}e.length=t}},Ga=new WeakMap;let Gi=0,yr=1;const Va=30;let Pt;const zr=Symbol(""),Ha=Symbol("");class Tn{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,bu(this,i)}run(){if(!this.active)return this.fn();let e=Pt,t=pr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,pr=!0,yr=1<<++Gi,Gi<=Va?Su(this):co(this),this.fn()}finally{Gi<=Va&&Tu(this),yr=1<<--Gi,Pt=this.parent,pr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(co(this),this.onStop&&this.onStop(),this.active=!1)}}function co(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let pr=!0;const Dh=[];function Ri(){Dh.push(pr),pr=!1}function Di(){const r=Dh.pop();pr=r===void 0?!0:r}function ht(r,e,t){if(pr&&Pt){let i=Ga.get(r);i||Ga.set(r,i=new Map);let s=i.get(t);s||i.set(t,s=Sn()),Lh(s)}}function Lh(r,e){let t=!1;Gi<=Va?Rh(r)||(r.n|=yr,t=!Ph(r)):t=!r.has(Pt),t&&(r.add(Pt),Pt.deps.push(r))}function rr(r,e,t,i,s,a){const n=Ga.get(r);if(!n)return;let h=[];if(e==="clear")h=[...n.values()];else if(t==="length"&&re(r)){const l=Number(i);n.forEach((u,c)=>{(c==="length"||c>=l)&&h.push(u)})}else switch(t!==void 0&&h.push(n.get(t)),e){case"add":re(r)?yn(t)&&h.push(n.get("length")):(h.push(n.get(zr)),Ji(r)&&h.push(n.get(Ha)));break;case"delete":re(r)||(h.push(n.get(zr)),Ji(r)&&h.push(n.get(Ha)));break;case"set":Ji(r)&&h.push(n.get(zr));break}if(h.length===1)h[0]&&Xa(h[0]);else{const l=[];for(const u of h)u&&l.push(...u);Xa(Sn(l))}}function Xa(r,e){const t=re(r)?r:[...r];for(const i of t)i.computed&&fo(i);for(const i of t)i.computed||fo(i)}function fo(r,e){(r!==Pt||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const Cu=gn("__proto__,__v_isRef,__isVue"),Ih=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(xn)),Eu=Cn(),Mu=Cn(!1,!0),Pu=Cn(!0),po=Ru();function Ru(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const i=ve(this);for(let a=0,n=this.length;a<n;a++)ht(i,"get",a+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(ve)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){Ri();const i=ve(this)[e].apply(this,t);return Di(),i}}),r}function Du(r){const e=ve(this);return ht(e,"has",r),e.hasOwnProperty(r)}function Cn(r=!1,e=!1){return function(i,s,a){if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&a===(r?e?Ku:kh:e?Bh:Uh).get(i))return i;const n=re(i);if(!r){if(n&&ce(po,s))return Reflect.get(po,s,a);if(s==="hasOwnProperty")return Du}const h=Reflect.get(i,s,a);return(xn(s)?Ih.has(s):Cu(s))||(r||ht(i,"get",s),e)?h:it(h)?n&&yn(s)?h:h.value:Be(h)?r?Nh(h):Pn(h):h}}const Lu=Ah(),Iu=Ah(!0);function Ah(r=!1){return function(t,i,s,a){let n=t[i];if(ns(n)&&it(n)&&!it(s))return!1;if(!r&&(!Wa(s)&&!ns(s)&&(n=ve(n),s=ve(s)),!re(t)&&it(n)&&!it(s)))return n.value=s,!0;const h=re(t)&&yn(i)?Number(i)<t.length:ce(t,i),l=Reflect.set(t,i,s,a);return t===ve(a)&&(h?Ws(s,n)&&rr(t,"set",i,s):rr(t,"add",i,s)),l}}function Au(r,e){const t=ce(r,e);r[e];const i=Reflect.deleteProperty(r,e);return i&&t&&rr(r,"delete",e,void 0),i}function Ou(r,e){const t=Reflect.has(r,e);return(!xn(e)||!Ih.has(e))&&ht(r,"has",e),t}function Uu(r){return ht(r,"iterate",re(r)?"length":zr),Reflect.ownKeys(r)}const Oh={get:Eu,set:Lu,deleteProperty:Au,has:Ou,ownKeys:Uu},Bu={get:Pu,set(r,e){return!0},deleteProperty(r,e){return!0}},ku=Ye({},Oh,{get:Mu,set:Iu}),En=r=>r,pa=r=>Reflect.getPrototypeOf(r);function _s(r,e,t=!1,i=!1){r=r.__v_raw;const s=ve(r),a=ve(e);t||(e!==a&&ht(s,"get",e),ht(s,"get",a));const{has:n}=pa(s),h=i?En:t?Ln:Dn;if(n.call(s,e))return h(r.get(e));if(n.call(s,a))return h(r.get(a));r!==s&&r.get(e)}function vs(r,e=!1){const t=this.__v_raw,i=ve(t),s=ve(r);return e||(r!==s&&ht(i,"has",r),ht(i,"has",s)),r===s?t.has(r):t.has(r)||t.has(s)}function xs(r,e=!1){return r=r.__v_raw,!e&&ht(ve(r),"iterate",zr),Reflect.get(r,"size",r)}function mo(r){r=ve(r);const e=ve(this);return pa(e).has.call(e,r)||(e.add(r),rr(e,"add",r,r)),this}function go(r,e){e=ve(e);const t=ve(this),{has:i,get:s}=pa(t);let a=i.call(t,r);a||(r=ve(r),a=i.call(t,r));const n=s.call(t,r);return t.set(r,e),a?Ws(e,n)&&rr(t,"set",r,e):rr(t,"add",r,e),this}function _o(r){const e=ve(this),{has:t,get:i}=pa(e);let s=t.call(e,r);s||(r=ve(r),s=t.call(e,r)),i&&i.call(e,r);const a=e.delete(r);return s&&rr(e,"delete",r,void 0),a}function vo(){const r=ve(this),e=r.size!==0,t=r.clear();return e&&rr(r,"clear",void 0,void 0),t}function ys(r,e){return function(i,s){const a=this,n=a.__v_raw,h=ve(n),l=e?En:r?Ln:Dn;return!r&&ht(h,"iterate",zr),n.forEach((u,c)=>i.call(s,l(u),l(c),a))}}function bs(r,e,t){return function(...i){const s=this.__v_raw,a=ve(s),n=Ji(a),h=r==="entries"||r===Symbol.iterator&&n,l=r==="keys"&&n,u=s[r](...i),c=t?En:e?Ln:Dn;return!e&&ht(a,"iterate",l?Ha:zr),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:h?[c(d[0]),c(d[1])]:c(d),done:f}},[Symbol.iterator](){return this}}}}function or(r){return function(...e){return r==="delete"?!1:this}}function Nu(){const r={get(a){return _s(this,a)},get size(){return xs(this)},has:vs,add:mo,set:go,delete:_o,clear:vo,forEach:ys(!1,!1)},e={get(a){return _s(this,a,!1,!0)},get size(){return xs(this)},has:vs,add:mo,set:go,delete:_o,clear:vo,forEach:ys(!1,!0)},t={get(a){return _s(this,a,!0)},get size(){return xs(this,!0)},has(a){return vs.call(this,a,!0)},add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear"),forEach:ys(!0,!1)},i={get(a){return _s(this,a,!0,!0)},get size(){return xs(this,!0)},has(a){return vs.call(this,a,!0)},add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear"),forEach:ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{r[a]=bs(a,!1,!1),t[a]=bs(a,!0,!1),e[a]=bs(a,!1,!0),i[a]=bs(a,!0,!0)}),[r,t,e,i]}const[Fu,zu,Gu,Vu]=Nu();function Mn(r,e){const t=e?r?Vu:Gu:r?zu:Fu;return(i,s,a)=>s==="__v_isReactive"?!r:s==="__v_isReadonly"?r:s==="__v_raw"?i:Reflect.get(ce(t,s)&&s in i?t:i,s,a)}const Hu={get:Mn(!1,!1)},Xu={get:Mn(!1,!0)},Wu={get:Mn(!0,!1)},Uh=new WeakMap,Bh=new WeakMap,kh=new WeakMap,Ku=new WeakMap;function Yu(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ju(r){return r.__v_skip||!Object.isExtensible(r)?0:Yu(lu(r))}function Pn(r){return ns(r)?r:Rn(r,!1,Oh,Hu,Uh)}function qu(r){return Rn(r,!1,ku,Xu,Bh)}function Nh(r){return Rn(r,!0,Bu,Wu,kh)}function Rn(r,e,t,i,s){if(!Be(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const a=s.get(r);if(a)return a;const n=ju(r);if(n===0)return r;const h=new Proxy(r,n===2?i:t);return s.set(r,h),h}function ui(r){return ns(r)?ui(r.__v_raw):!!(r&&r.__v_isReactive)}function ns(r){return!!(r&&r.__v_isReadonly)}function Wa(r){return!!(r&&r.__v_isShallow)}function Fh(r){return ui(r)||ns(r)}function ve(r){const e=r&&r.__v_raw;return e?ve(e):r}function zh(r){return Ks(r,"__v_skip",!0),r}const Dn=r=>Be(r)?Pn(r):r,Ln=r=>Be(r)?Nh(r):r;function $u(r){pr&&Pt&&(r=ve(r),Lh(r.dep||(r.dep=Sn())))}function Zu(r,e){r=ve(r);const t=r.dep;t&&Xa(t)}function it(r){return!!(r&&r.__v_isRef===!0)}function Qu(r){return it(r)?r.value:r}const Ju={get:(r,e,t)=>Qu(Reflect.get(r,e,t)),set:(r,e,t,i)=>{const s=r[e];return it(s)&&!it(t)?(s.value=t,!0):Reflect.set(r,e,t,i)}};function Gh(r){return ui(r)?r:new Proxy(r,Ju)}class ec{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Tn(e,()=>{this._dirty||(this._dirty=!0,Zu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ve(this);return $u(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function tc(r,e,t=!1){let i,s;const a=se(r);return a?(i=r,s=It):(i=r.get,s=r.set),new ec(i,s,a||!s,t)}function mr(r,e,t,i){let s;try{s=i?r(...i):r()}catch(a){ma(a,e,t)}return s}function At(r,e,t,i){if(se(r)){const a=mr(r,e,t,i);return a&&Ch(a)&&a.catch(n=>{ma(n,e,t)}),a}const s=[];for(let a=0;a<r.length;a++)s.push(At(r[a],e,t,i));return s}function ma(r,e,t,i=!0){const s=e?e.vnode:null;if(e){let a=e.parent;const n=e.proxy,h=t;for(;a;){const u=a.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](r,n,h)===!1)return}a=a.parent}const l=e.appContext.config.errorHandler;if(l){mr(l,null,10,[r,n,h]);return}}rc(r,t,s,i)}function rc(r,e,t,i=!0){console.error(r)}let os=!1,Ka=!1;const $e=[];let Wt=0;const ci=[];let Qt=null,Nr=0;const Vh=Promise.resolve();let In=null;function ic(r){const e=In||Vh;return r?e.then(this?r.bind(this):r):e}function sc(r){let e=Wt+1,t=$e.length;for(;e<t;){const i=e+t>>>1;hs($e[i])<r?e=i+1:t=i}return e}function An(r){(!$e.length||!$e.includes(r,os&&r.allowRecurse?Wt+1:Wt))&&(r.id==null?$e.push(r):$e.splice(sc(r.id),0,r),Hh())}function Hh(){!os&&!Ka&&(Ka=!0,In=Vh.then(Wh))}function ac(r){const e=$e.indexOf(r);e>Wt&&$e.splice(e,1)}function nc(r){re(r)?ci.push(...r):(!Qt||!Qt.includes(r,r.allowRecurse?Nr+1:Nr))&&ci.push(r),Hh()}function xo(r,e=os?Wt+1:0){for(;e<$e.length;e++){const t=$e[e];t&&t.pre&&($e.splice(e,1),e--,t())}}function Xh(r){if(ci.length){const e=[...new Set(ci)];if(ci.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((t,i)=>hs(t)-hs(i)),Nr=0;Nr<Qt.length;Nr++)Qt[Nr]();Qt=null,Nr=0}}const hs=r=>r.id==null?1/0:r.id,oc=(r,e)=>{const t=hs(r)-hs(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function Wh(r){Ka=!1,os=!0,$e.sort(oc);const e=It;try{for(Wt=0;Wt<$e.length;Wt++){const t=$e[Wt];t&&t.active!==!1&&mr(t,null,14)}}finally{Wt=0,$e.length=0,Xh(),os=!1,In=null,($e.length||ci.length)&&Wh()}}function hc(r,e,...t){if(r.isUnmounted)return;const i=r.vnode.props||Ce;let s=t;const a=e.startsWith("update:"),n=a&&e.slice(7);if(n&&n in i){const c=`${n==="modelValue"?"model":n}Modifiers`,{number:d,trim:f}=i[c]||Ce;f&&(s=t.map(m=>je(m)?m.trim():m)),d&&(s=t.map(fu))}let h,l=i[h=Pa(e)]||i[h=Pa(_i(e))];!l&&a&&(l=i[h=Pa(Pi(e))]),l&&At(l,r,6,s);const u=i[h+"Once"];if(u){if(!r.emitted)r.emitted={};else if(r.emitted[h])return;r.emitted[h]=!0,At(u,r,6,s)}}function Kh(r,e,t=!1){const i=e.emitsCache,s=i.get(r);if(s!==void 0)return s;const a=r.emits;let n={},h=!1;if(!se(r)){const l=u=>{const c=Kh(u,e,!0);c&&(h=!0,Ye(n,c))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!a&&!h?(Be(r)&&i.set(r,null),null):(re(a)?a.forEach(l=>n[l]=null):Ye(n,a),Be(r)&&i.set(r,n),n)}function ga(r,e){return!r||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(r,e[0].toLowerCase()+e.slice(1))||ce(r,Pi(e))||ce(r,e))}let Yt=null,Yh=null;function Ys(r){const e=Yt;return Yt=r,Yh=r&&r.type.__scopeId||null,e}function lc(r,e=Yt,t){if(!e||r._n)return r;const i=(...s)=>{i._d&&Ro(-1);const a=Ys(e);let n;try{n=r(...s)}finally{Ys(a),i._d&&Ro(1)}return n};return i._n=!0,i._c=!0,i._d=!0,i}function Da(r){const{type:e,vnode:t,proxy:i,withProxy:s,props:a,propsOptions:[n],slots:h,attrs:l,emit:u,render:c,renderCache:d,data:f,setupState:m,ctx:_,inheritAttrs:g}=r;let w,C;const b=Ys(r);try{if(t.shapeFlag&4){const I=s||i;w=Vt(c.call(I,I,d,a,m,f,_)),C=l}else{const I=e;w=Vt(I.length>1?I(a,{attrs:l,slots:h,emit:u}):I(a,null)),C=e.props?l:uc(l)}}catch(I){ma(I,r,1),w=Gr(ls)}let E=w;if(C&&g!==!1){const I=Object.keys(C),{shapeFlag:N}=E;I.length&&N&7&&(n&&I.some(_n)&&(C=cc(C,n)),E=vi(E,C))}return t.dirs&&(E=vi(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),w=E,Ys(b),w}const uc=r=>{let e;for(const t in r)(t==="class"||t==="style"||ca(t))&&((e||(e={}))[t]=r[t]);return e},cc=(r,e)=>{const t={};for(const i in r)(!_n(i)||!(i.slice(9)in e))&&(t[i]=r[i]);return t};function dc(r,e,t){const{props:i,children:s,component:a}=r,{props:n,children:h,patchFlag:l}=e,u=a.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?yo(i,n,u):!!n;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(n[f]!==i[f]&&!ga(u,f))return!0}}}else return(s||h)&&(!h||!h.$stable)?!0:i===n?!1:i?n?yo(i,n,u):!0:!!n;return!1}function yo(r,e,t){const i=Object.keys(e);if(i.length!==Object.keys(r).length)return!0;for(let s=0;s<i.length;s++){const a=i[s];if(e[a]!==r[a]&&!ga(t,a))return!0}return!1}function fc({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const pc=r=>r.__isSuspense;function mc(r,e){e&&e.pendingBranch?re(r)?e.effects.push(...r):e.effects.push(r):nc(r)}const ws={};function La(r,e,t){return jh(r,e,t)}function jh(r,e,{immediate:t,deep:i,flush:s,onTrack:a,onTrigger:n}=Ce){var h;const l=wu()===((h=Ze)==null?void 0:h.scope)?Ze:null;let u,c=!1,d=!1;if(it(r)?(u=()=>r.value,c=Wa(r)):ui(r)?(u=()=>r,i=!0):re(r)?(d=!0,c=r.some(I=>ui(I)||Wa(I)),u=()=>r.map(I=>{if(it(I))return I.value;if(ui(I))return ni(I);if(se(I))return mr(I,l,2)})):se(r)?e?u=()=>mr(r,l,2):u=()=>{if(!(l&&l.isUnmounted))return f&&f(),At(r,l,3,[m])}:u=It,e&&i){const I=u;u=()=>ni(I())}let f,m=I=>{f=b.onStop=()=>{mr(I,l,4)}},_;if(us)if(m=It,e?t&&At(e,l,3,[u(),d?[]:void 0,m]):u(),s==="sync"){const I=ud();_=I.__watcherHandles||(I.__watcherHandles=[])}else return It;let g=d?new Array(r.length).fill(ws):ws;const w=()=>{if(b.active)if(e){const I=b.run();(i||c||(d?I.some((N,V)=>Ws(N,g[V])):Ws(I,g)))&&(f&&f(),At(e,l,3,[I,g===ws?void 0:d&&g[0]===ws?[]:g,m]),g=I)}else b.run()};w.allowRecurse=!!e;let C;s==="sync"?C=w:s==="post"?C=()=>nt(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),C=()=>An(w));const b=new Tn(u,C);e?t?w():g=b.run():s==="post"?nt(b.run.bind(b),l&&l.suspense):b.run();const E=()=>{b.stop(),l&&l.scope&&vn(l.scope.effects,b)};return _&&_.push(E),E}function gc(r,e,t){const i=this.proxy,s=je(r)?r.includes(".")?qh(i,r):()=>i[r]:r.bind(i,i);let a;se(e)?a=e:(a=e.handler,t=e);const n=Ze;xi(this);const h=jh(s,a.bind(i),t);return n?xi(n):Vr(),h}function qh(r,e){const t=e.split(".");return()=>{let i=r;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ni(r,e){if(!Be(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),it(r))ni(r.value,e);else if(re(r))for(let t=0;t<r.length;t++)ni(r[t],e);else if(ou(r)||Ji(r))r.forEach(t=>{ni(t,e)});else if(uu(r))for(const t in r)ni(r[t],e);return r}function Ar(r,e,t,i){const s=r.dirs,a=e&&e.dirs;for(let n=0;n<s.length;n++){const h=s[n];a&&(h.oldValue=a[n].value);let l=h.dir[i];l&&(Ri(),At(l,t,8,[r.el,h,r,e]),Di())}}function _c(r,e){return se(r)?(()=>Ye({name:r.name},e,{setup:r}))():r}const Os=r=>!!r.type.__asyncLoader,$h=r=>r.type.__isKeepAlive;function vc(r,e){Zh(r,"a",e)}function xc(r,e){Zh(r,"da",e)}function Zh(r,e,t=Ze){const i=r.__wdc||(r.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return r()});if(_a(e,i,t),t){let s=t.parent;for(;s&&s.parent;)$h(s.parent.vnode)&&yc(i,e,t,s),s=s.parent}}function yc(r,e,t,i){const s=_a(e,r,i,!0);Jh(()=>{vn(i[e],s)},t)}function _a(r,e,t=Ze,i=!1){if(t){const s=t[r]||(t[r]=[]),a=e.__weh||(e.__weh=(...n)=>{if(t.isUnmounted)return;Ri(),xi(t);const h=At(e,t,r,n);return Vr(),Di(),h});return i?s.unshift(a):s.push(a),a}}const sr=r=>(e,t=Ze)=>(!us||r==="sp")&&_a(r,(...i)=>e(...i),t),bc=sr("bm"),Qh=sr("m"),wc=sr("bu"),Sc=sr("u"),Tc=sr("bum"),Jh=sr("um"),Cc=sr("sp"),Ec=sr("rtg"),Mc=sr("rtc");function Pc(r,e=Ze){_a("ec",r,e)}const Rc=Symbol.for("v-ndc"),Ya=r=>r?ll(r)?Fn(r)||r.proxy:Ya(r.parent):null,es=Ye(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Ya(r.parent),$root:r=>Ya(r.root),$emit:r=>r.emit,$options:r=>On(r),$forceUpdate:r=>r.f||(r.f=()=>An(r.update)),$nextTick:r=>r.n||(r.n=ic.bind(r.proxy)),$watch:r=>gc.bind(r)}),Ia=(r,e)=>r!==Ce&&!r.__isScriptSetup&&ce(r,e),Dc={get({_:r},e){const{ctx:t,setupState:i,data:s,props:a,accessCache:n,type:h,appContext:l}=r;let u;if(e[0]!=="$"){const m=n[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return a[e]}else{if(Ia(i,e))return n[e]=1,i[e];if(s!==Ce&&ce(s,e))return n[e]=2,s[e];if((u=r.propsOptions[0])&&ce(u,e))return n[e]=3,a[e];if(t!==Ce&&ce(t,e))return n[e]=4,t[e];ja&&(n[e]=0)}}const c=es[e];let d,f;if(c)return e==="$attrs"&&ht(r,"get",e),c(r);if((d=h.__cssModules)&&(d=d[e]))return d;if(t!==Ce&&ce(t,e))return n[e]=4,t[e];if(f=l.config.globalProperties,ce(f,e))return f[e]},set({_:r},e,t){const{data:i,setupState:s,ctx:a}=r;return Ia(s,e)?(s[e]=t,!0):i!==Ce&&ce(i,e)?(i[e]=t,!0):ce(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(a[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:a}},n){let h;return!!t[n]||r!==Ce&&ce(r,n)||Ia(e,n)||(h=a[0])&&ce(h,n)||ce(i,n)||ce(es,n)||ce(s.config.globalProperties,n)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:ce(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};function bo(r){return re(r)?r.reduce((e,t)=>(e[t]=null,e),{}):r}let ja=!0;function Lc(r){const e=On(r),t=r.proxy,i=r.ctx;ja=!1,e.beforeCreate&&wo(e.beforeCreate,r,"bc");const{data:s,computed:a,methods:n,watch:h,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:m,updated:_,activated:g,deactivated:w,beforeDestroy:C,beforeUnmount:b,destroyed:E,unmounted:I,render:N,renderTracked:V,renderTriggered:W,errorCaptured:Q,serverPrefetch:ue,expose:ye,inheritAttrs:oe,components:ie,directives:me,filters:Ve}=e;if(u&&Ic(u,i,null),n)for(const X in n){const j=n[X];se(j)&&(i[X]=j.bind(t))}if(s){const X=s.call(t,t);Be(X)&&(r.data=Pn(X))}if(ja=!0,a)for(const X in a){const j=a[X],at=se(j)?j.bind(t,t):se(j.get)?j.get.bind(t,t):It,ke=!se(j)&&se(j.set)?j.set.bind(t):It,He=hd({get:at,set:ke});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>He.value,set:Qe=>He.value=Qe})}if(h)for(const X in h)el(h[X],i,t,X);if(l){const X=se(l)?l.call(t):l;Reflect.ownKeys(X).forEach(j=>{Nc(j,X[j])})}c&&wo(c,r,"c");function fe(X,j){re(j)?j.forEach(at=>X(at.bind(t))):j&&X(j.bind(t))}if(fe(bc,d),fe(Qh,f),fe(wc,m),fe(Sc,_),fe(vc,g),fe(xc,w),fe(Pc,Q),fe(Mc,V),fe(Ec,W),fe(Tc,b),fe(Jh,I),fe(Cc,ue),re(ye))if(ye.length){const X=r.exposed||(r.exposed={});ye.forEach(j=>{Object.defineProperty(X,j,{get:()=>t[j],set:at=>t[j]=at})})}else r.exposed||(r.exposed={});N&&r.render===It&&(r.render=N),oe!=null&&(r.inheritAttrs=oe),ie&&(r.components=ie),me&&(r.directives=me)}function Ic(r,e,t=It){re(r)&&(r=qa(r));for(const i in r){const s=r[i];let a;Be(s)?"default"in s?a=Us(s.from||i,s.default,!0):a=Us(s.from||i):a=Us(s),it(a)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:n=>a.value=n}):e[i]=a}}function wo(r,e,t){At(re(r)?r.map(i=>i.bind(e.proxy)):r.bind(e.proxy),e,t)}function el(r,e,t,i){const s=i.includes(".")?qh(t,i):()=>t[i];if(je(r)){const a=e[r];se(a)&&La(s,a)}else if(se(r))La(s,r.bind(t));else if(Be(r))if(re(r))r.forEach(a=>el(a,e,t,i));else{const a=se(r.handler)?r.handler.bind(t):e[r.handler];se(a)&&La(s,a,r)}}function On(r){const e=r.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:a,config:{optionMergeStrategies:n}}=r.appContext,h=a.get(e);let l;return h?l=h:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>js(l,u,n,!0)),js(l,e,n)),Be(e)&&a.set(e,l),l}function js(r,e,t,i=!1){const{mixins:s,extends:a}=e;a&&js(r,a,t,!0),s&&s.forEach(n=>js(r,n,t,!0));for(const n in e)if(!(i&&n==="expose")){const h=Ac[n]||t&&t[n];r[n]=h?h(r[n],e[n]):e[n]}return r}const Ac={data:So,props:To,emits:To,methods:Vi,computed:Vi,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Vi,directives:Vi,watch:Uc,provide:So,inject:Oc};function So(r,e){return e?r?function(){return Ye(se(r)?r.call(this,this):r,se(e)?e.call(this,this):e)}:e:r}function Oc(r,e){return Vi(qa(r),qa(e))}function qa(r){if(re(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Je(r,e){return r?[...new Set([].concat(r,e))]:e}function Vi(r,e){return r?Ye(Object.create(null),r,e):e}function To(r,e){return r?re(r)&&re(e)?[...new Set([...r,...e])]:Ye(Object.create(null),bo(r),bo(e??{})):e}function Uc(r,e){if(!r)return e;if(!e)return r;const t=Ye(Object.create(null),r);for(const i in e)t[i]=Je(r[i],e[i]);return t}function tl(){return{app:null,config:{isNativeTag:su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function kc(r,e){return function(i,s=null){se(i)||(i=Ye({},i)),s!=null&&!Be(s)&&(s=null);const a=tl(),n=new Set;let h=!1;const l=a.app={_uid:Bc++,_component:i,_props:s,_container:null,_context:a,_instance:null,version:cd,get config(){return a.config},set config(u){},use(u,...c){return n.has(u)||(u&&se(u.install)?(n.add(u),u.install(l,...c)):se(u)&&(n.add(u),u(l,...c))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,c){return c?(a.components[u]=c,l):a.components[u]},directive(u,c){return c?(a.directives[u]=c,l):a.directives[u]},mount(u,c,d){if(!h){const f=Gr(i,s);return f.appContext=a,c&&e?e(f,u):r(f,u,d),h=!0,l._container=u,u.__vue_app__=l,Fn(f.component)||f.component.proxy}},unmount(){h&&(r(null,l._container),delete l._container.__vue_app__)},provide(u,c){return a.provides[u]=c,l},runWithContext(u){qs=l;try{return u()}finally{qs=null}}};return l}}let qs=null;function Nc(r,e){if(Ze){let t=Ze.provides;const i=Ze.parent&&Ze.parent.provides;i===t&&(t=Ze.provides=Object.create(i)),t[r]=e}}function Us(r,e,t=!1){const i=Ze||Yt;if(i||qs){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:qs._context.provides;if(s&&r in s)return s[r];if(arguments.length>1)return t&&se(e)?e.call(i&&i.proxy):e}}function Fc(r,e,t,i=!1){const s={},a={};Ks(a,xa,1),r.propsDefaults=Object.create(null),rl(r,e,s,a);for(const n in r.propsOptions[0])n in s||(s[n]=void 0);t?r.props=i?s:qu(s):r.type.props?r.props=s:r.props=a,r.attrs=a}function zc(r,e,t,i){const{props:s,attrs:a,vnode:{patchFlag:n}}=r,h=ve(s),[l]=r.propsOptions;let u=!1;if((i||n>0)&&!(n&16)){if(n&8){const c=r.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(ga(r.emitsOptions,f))continue;const m=e[f];if(l)if(ce(a,f))m!==a[f]&&(a[f]=m,u=!0);else{const _=_i(f);s[_]=$a(l,h,_,m,r,!1)}else m!==a[f]&&(a[f]=m,u=!0)}}}else{rl(r,e,s,a)&&(u=!0);let c;for(const d in h)(!e||!ce(e,d)&&((c=Pi(d))===d||!ce(e,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(s[d]=$a(l,h,d,void 0,r,!0)):delete s[d]);if(a!==h)for(const d in a)(!e||!ce(e,d))&&(delete a[d],u=!0)}u&&rr(r,"set","$attrs")}function rl(r,e,t,i){const[s,a]=r.propsOptions;let n=!1,h;if(e)for(let l in e){if(As(l))continue;const u=e[l];let c;s&&ce(s,c=_i(l))?!a||!a.includes(c)?t[c]=u:(h||(h={}))[c]=u:ga(r.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,n=!0)}if(a){const l=ve(t),u=h||Ce;for(let c=0;c<a.length;c++){const d=a[c];t[d]=$a(s,l,d,u[d],r,!ce(u,d))}}return n}function $a(r,e,t,i,s,a){const n=r[t];if(n!=null){const h=ce(n,"default");if(h&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&se(l)){const{propsDefaults:u}=s;t in u?i=u[t]:(xi(s),i=u[t]=l.call(null,e),Vr())}else i=l}n[0]&&(a&&!h?i=!1:n[1]&&(i===""||i===Pi(t))&&(i=!0))}return i}function il(r,e,t=!1){const i=e.propsCache,s=i.get(r);if(s)return s;const a=r.props,n={},h=[];let l=!1;if(!se(r)){const c=d=>{l=!0;const[f,m]=il(d,e,!0);Ye(n,f),m&&h.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}if(!a&&!l)return Be(r)&&i.set(r,Qi),Qi;if(re(a))for(let c=0;c<a.length;c++){const d=_i(a[c]);Co(d)&&(n[d]=Ce)}else if(a)for(const c in a){const d=_i(c);if(Co(d)){const f=a[c],m=n[d]=re(f)||se(f)?{type:f}:Ye({},f);if(m){const _=Po(Boolean,m.type),g=Po(String,m.type);m[0]=_>-1,m[1]=g<0||_<g,(_>-1||ce(m,"default"))&&h.push(d)}}}const u=[n,h];return Be(r)&&i.set(r,u),u}function Co(r){return r[0]!=="$"}function Eo(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function Mo(r,e){return Eo(r)===Eo(e)}function Po(r,e){return re(e)?e.findIndex(t=>Mo(t,r)):se(e)&&Mo(e,r)?0:-1}const sl=r=>r[0]==="_"||r==="$stable",Un=r=>re(r)?r.map(Vt):[Vt(r)],Gc=(r,e,t)=>{if(e._n)return e;const i=lc((...s)=>Un(e(...s)),t);return i._c=!1,i},al=(r,e,t)=>{const i=r._ctx;for(const s in r){if(sl(s))continue;const a=r[s];if(se(a))e[s]=Gc(s,a,i);else if(a!=null){const n=Un(a);e[s]=()=>n}}},nl=(r,e)=>{const t=Un(e);r.slots.default=()=>t},Vc=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=ve(e),Ks(e,"_",t)):al(e,r.slots={})}else r.slots={},e&&nl(r,e);Ks(r.slots,xa,1)},Hc=(r,e,t)=>{const{vnode:i,slots:s}=r;let a=!0,n=Ce;if(i.shapeFlag&32){const h=e._;h?t&&h===1?a=!1:(Ye(s,e),!t&&h===1&&delete s._):(a=!e.$stable,al(e,s)),n=e}else e&&(nl(r,e),n={default:1});if(a)for(const h in s)!sl(h)&&!(h in n)&&delete s[h]};function Za(r,e,t,i,s=!1){if(re(r)){r.forEach((f,m)=>Za(f,e&&(re(e)?e[m]:e),t,i,s));return}if(Os(i)&&!s)return;const a=i.shapeFlag&4?Fn(i.component)||i.component.proxy:i.el,n=s?null:a,{i:h,r:l}=r,u=e&&e.r,c=h.refs===Ce?h.refs={}:h.refs,d=h.setupState;if(u!=null&&u!==l&&(je(u)?(c[u]=null,ce(d,u)&&(d[u]=null)):it(u)&&(u.value=null)),se(l))mr(l,h,12,[n,c]);else{const f=je(l),m=it(l);if(f||m){const _=()=>{if(r.f){const g=f?ce(d,l)?d[l]:c[l]:l.value;s?re(g)&&vn(g,a):re(g)?g.includes(a)||g.push(a):f?(c[l]=[a],ce(d,l)&&(d[l]=c[l])):(l.value=[a],r.k&&(c[r.k]=l.value))}else f?(c[l]=n,ce(d,l)&&(d[l]=n)):m&&(l.value=n,r.k&&(c[r.k]=n))};n?(_.id=-1,nt(_,t)):_()}}}const nt=mc;function Xc(r){return Wc(r)}function Wc(r,e){const t=za();t.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:n,createText:h,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:m=It,insertStaticContent:_}=r,g=(x,S,R,O=null,A=null,k=null,H=!1,B=null,F=!!S.dynamicChildren)=>{if(x===S)return;x&&!Bi(x,S)&&(O=gs(x),Qe(x,A,k,!0),x=null),S.patchFlag===-2&&(F=!1,S.dynamicChildren=null);const{type:U,ref:$,shapeFlag:Y}=S;switch(U){case va:w(x,S,R,O);break;case ls:C(x,S,R,O);break;case Aa:x==null&&b(S,R,O,H);break;case Jt:ie(x,S,R,O,A,k,H,B,F);break;default:Y&1?N(x,S,R,O,A,k,H,B,F):Y&6?me(x,S,R,O,A,k,H,B,F):(Y&64||Y&128)&&U.process(x,S,R,O,A,k,H,B,F,$r)}$!=null&&A&&Za($,x&&x.ref,k,S||x,!S)},w=(x,S,R,O)=>{if(x==null)i(S.el=h(S.children),R,O);else{const A=S.el=x.el;S.children!==x.children&&u(A,S.children)}},C=(x,S,R,O)=>{x==null?i(S.el=l(S.children||""),R,O):S.el=x.el},b=(x,S,R,O)=>{[x.el,x.anchor]=_(x.children,S,R,O,x.el,x.anchor)},E=({el:x,anchor:S},R,O)=>{let A;for(;x&&x!==S;)A=f(x),i(x,R,O),x=A;i(S,R,O)},I=({el:x,anchor:S})=>{let R;for(;x&&x!==S;)R=f(x),s(x),x=R;s(S)},N=(x,S,R,O,A,k,H,B,F)=>{H=H||S.type==="svg",x==null?V(S,R,O,A,k,H,B,F):ue(x,S,A,k,H,B,F)},V=(x,S,R,O,A,k,H,B)=>{let F,U;const{type:$,props:Y,shapeFlag:Z,transition:ee,dirs:he}=x;if(F=x.el=n(x.type,k,Y&&Y.is,Y),Z&8?c(F,x.children):Z&16&&Q(x.children,F,null,O,A,k&&$!=="foreignObject",H,B),he&&Ar(x,null,O,"created"),W(F,x,x.scopeId,H,O),Y){for(const xe in Y)xe!=="value"&&!As(xe)&&a(F,xe,null,Y[xe],k,x.children,O,A,gt);"value"in Y&&a(F,"value",null,Y.value),(U=Y.onVnodeBeforeMount)&&Nt(U,O,x)}he&&Ar(x,null,O,"beforeMount");const be=(!A||A&&!A.pendingBranch)&&ee&&!ee.persisted;be&&ee.beforeEnter(F),i(F,S,R),((U=Y&&Y.onVnodeMounted)||be||he)&&nt(()=>{U&&Nt(U,O,x),be&&ee.enter(F),he&&Ar(x,null,O,"mounted")},A)},W=(x,S,R,O,A)=>{if(R&&m(x,R),O)for(let k=0;k<O.length;k++)m(x,O[k]);if(A){let k=A.subTree;if(S===k){const H=A.vnode;W(x,H,H.scopeId,H.slotScopeIds,A.parent)}}},Q=(x,S,R,O,A,k,H,B,F=0)=>{for(let U=F;U<x.length;U++){const $=x[U]=B?cr(x[U]):Vt(x[U]);g(null,$,S,R,O,A,k,H,B)}},ue=(x,S,R,O,A,k,H)=>{const B=S.el=x.el;let{patchFlag:F,dynamicChildren:U,dirs:$}=S;F|=x.patchFlag&16;const Y=x.props||Ce,Z=S.props||Ce;let ee;R&&Or(R,!1),(ee=Z.onVnodeBeforeUpdate)&&Nt(ee,R,S,x),$&&Ar(S,x,R,"beforeUpdate"),R&&Or(R,!0);const he=A&&S.type!=="foreignObject";if(U?ye(x.dynamicChildren,U,B,R,O,he,k):H||j(x,S,B,null,R,O,he,k,!1),F>0){if(F&16)oe(B,S,Y,Z,R,O,A);else if(F&2&&Y.class!==Z.class&&a(B,"class",null,Z.class,A),F&4&&a(B,"style",Y.style,Z.style,A),F&8){const be=S.dynamicProps;for(let xe=0;xe<be.length;xe++){const Oe=be[xe],Ct=Y[Oe],Zr=Z[Oe];(Zr!==Ct||Oe==="value")&&a(B,Oe,Ct,Zr,A,x.children,R,O,gt)}}F&1&&x.children!==S.children&&c(B,S.children)}else!H&&U==null&&oe(B,S,Y,Z,R,O,A);((ee=Z.onVnodeUpdated)||$)&&nt(()=>{ee&&Nt(ee,R,S,x),$&&Ar(S,x,R,"updated")},O)},ye=(x,S,R,O,A,k,H)=>{for(let B=0;B<S.length;B++){const F=x[B],U=S[B],$=F.el&&(F.type===Jt||!Bi(F,U)||F.shapeFlag&70)?d(F.el):R;g(F,U,$,null,O,A,k,H,!0)}},oe=(x,S,R,O,A,k,H)=>{if(R!==O){if(R!==Ce)for(const B in R)!As(B)&&!(B in O)&&a(x,B,R[B],null,H,S.children,A,k,gt);for(const B in O){if(As(B))continue;const F=O[B],U=R[B];F!==U&&B!=="value"&&a(x,B,U,F,H,S.children,A,k,gt)}"value"in O&&a(x,"value",R.value,O.value)}},ie=(x,S,R,O,A,k,H,B,F)=>{const U=S.el=x?x.el:h(""),$=S.anchor=x?x.anchor:h("");let{patchFlag:Y,dynamicChildren:Z,slotScopeIds:ee}=S;ee&&(B=B?B.concat(ee):ee),x==null?(i(U,R,O),i($,R,O),Q(S.children,R,$,A,k,H,B,F)):Y>0&&Y&64&&Z&&x.dynamicChildren?(ye(x.dynamicChildren,Z,R,A,k,H,B),(S.key!=null||A&&S===A.subTree)&&ol(x,S,!0)):j(x,S,R,$,A,k,H,B,F)},me=(x,S,R,O,A,k,H,B,F)=>{S.slotScopeIds=B,x==null?S.shapeFlag&512?A.ctx.activate(S,R,O,H,F):Ve(S,R,O,A,k,H,F):Ae(x,S,F)},Ve=(x,S,R,O,A,k,H)=>{const B=x.component=rd(x,O,A);if($h(x)&&(B.ctx.renderer=$r),id(B),B.asyncDep){if(A&&A.registerDep(B,fe),!x.el){const F=B.subTree=Gr(ls);C(null,F,S,R)}return}fe(B,x,S,R,A,k,H)},Ae=(x,S,R)=>{const O=S.component=x.component;if(dc(x,S,R))if(O.asyncDep&&!O.asyncResolved){X(O,S,R);return}else O.next=S,ac(O.update),O.update();else S.el=x.el,O.vnode=S},fe=(x,S,R,O,A,k,H)=>{const B=()=>{if(x.isMounted){let{next:$,bu:Y,u:Z,parent:ee,vnode:he}=x,be=$,xe;Or(x,!1),$?($.el=he.el,X(x,$,H)):$=he,Y&&Ra(Y),(xe=$.props&&$.props.onVnodeBeforeUpdate)&&Nt(xe,ee,$,he),Or(x,!0);const Oe=Da(x),Ct=x.subTree;x.subTree=Oe,g(Ct,Oe,d(Ct.el),gs(Ct),x,A,k),$.el=Oe.el,be===null&&fc(x,Oe.el),Z&&nt(Z,A),(xe=$.props&&$.props.onVnodeUpdated)&&nt(()=>Nt(xe,ee,$,he),A)}else{let $;const{el:Y,props:Z}=S,{bm:ee,m:he,parent:be}=x,xe=Os(S);if(Or(x,!1),ee&&Ra(ee),!xe&&($=Z&&Z.onVnodeBeforeMount)&&Nt($,be,S),Or(x,!0),Y&&Ma){const Oe=()=>{x.subTree=Da(x),Ma(Y,x.subTree,x,A,null)};xe?S.type.__asyncLoader().then(()=>!x.isUnmounted&&Oe()):Oe()}else{const Oe=x.subTree=Da(x);g(null,Oe,R,O,x,A,k),S.el=Oe.el}if(he&&nt(he,A),!xe&&($=Z&&Z.onVnodeMounted)){const Oe=S;nt(()=>Nt($,be,Oe),A)}(S.shapeFlag&256||be&&Os(be.vnode)&&be.vnode.shapeFlag&256)&&x.a&&nt(x.a,A),x.isMounted=!0,S=R=O=null}},F=x.effect=new Tn(B,()=>An(U),x.scope),U=x.update=()=>F.run();U.id=x.uid,Or(x,!0),U()},X=(x,S,R)=>{S.component=x;const O=x.vnode.props;x.vnode=S,x.next=null,zc(x,S.props,O,R),Hc(x,S.children,R),Ri(),xo(),Di()},j=(x,S,R,O,A,k,H,B,F=!1)=>{const U=x&&x.children,$=x?x.shapeFlag:0,Y=S.children,{patchFlag:Z,shapeFlag:ee}=S;if(Z>0){if(Z&128){ke(U,Y,R,O,A,k,H,B,F);return}else if(Z&256){at(U,Y,R,O,A,k,H,B,F);return}}ee&8?($&16&&gt(U,A,k),Y!==U&&c(R,Y)):$&16?ee&16?ke(U,Y,R,O,A,k,H,B,F):gt(U,A,k,!0):($&8&&c(R,""),ee&16&&Q(Y,R,O,A,k,H,B,F))},at=(x,S,R,O,A,k,H,B,F)=>{x=x||Qi,S=S||Qi;const U=x.length,$=S.length,Y=Math.min(U,$);let Z;for(Z=0;Z<Y;Z++){const ee=S[Z]=F?cr(S[Z]):Vt(S[Z]);g(x[Z],ee,R,null,A,k,H,B,F)}U>$?gt(x,A,k,!0,!1,Y):Q(S,R,O,A,k,H,B,F,Y)},ke=(x,S,R,O,A,k,H,B,F)=>{let U=0;const $=S.length;let Y=x.length-1,Z=$-1;for(;U<=Y&&U<=Z;){const ee=x[U],he=S[U]=F?cr(S[U]):Vt(S[U]);if(Bi(ee,he))g(ee,he,R,null,A,k,H,B,F);else break;U++}for(;U<=Y&&U<=Z;){const ee=x[Y],he=S[Z]=F?cr(S[Z]):Vt(S[Z]);if(Bi(ee,he))g(ee,he,R,null,A,k,H,B,F);else break;Y--,Z--}if(U>Y){if(U<=Z){const ee=Z+1,he=ee<$?S[ee].el:O;for(;U<=Z;)g(null,S[U]=F?cr(S[U]):Vt(S[U]),R,he,A,k,H,B,F),U++}}else if(U>Z)for(;U<=Y;)Qe(x[U],A,k,!0),U++;else{const ee=U,he=U,be=new Map;for(U=he;U<=Z;U++){const lt=S[U]=F?cr(S[U]):Vt(S[U]);lt.key!=null&&be.set(lt.key,U)}let xe,Oe=0;const Ct=Z-he+1;let Zr=!1,oo=0;const Ui=new Array(Ct);for(U=0;U<Ct;U++)Ui[U]=0;for(U=ee;U<=Y;U++){const lt=x[U];if(Oe>=Ct){Qe(lt,A,k,!0);continue}let Bt;if(lt.key!=null)Bt=be.get(lt.key);else for(xe=he;xe<=Z;xe++)if(Ui[xe-he]===0&&Bi(lt,S[xe])){Bt=xe;break}Bt===void 0?Qe(lt,A,k,!0):(Ui[Bt-he]=U+1,Bt>=oo?oo=Bt:Zr=!0,g(lt,S[Bt],R,null,A,k,H,B,F),Oe++)}const ho=Zr?Kc(Ui):Qi;for(xe=ho.length-1,U=Ct-1;U>=0;U--){const lt=he+U,Bt=S[lt],lo=lt+1<$?S[lt+1].el:O;Ui[U]===0?g(null,Bt,R,lo,A,k,H,B,F):Zr&&(xe<0||U!==ho[xe]?He(Bt,R,lo,2):xe--)}}},He=(x,S,R,O,A=null)=>{const{el:k,type:H,transition:B,children:F,shapeFlag:U}=x;if(U&6){He(x.component.subTree,S,R,O);return}if(U&128){x.suspense.move(S,R,O);return}if(U&64){H.move(x,S,R,$r);return}if(H===Jt){i(k,S,R);for(let Y=0;Y<F.length;Y++)He(F[Y],S,R,O);i(x.anchor,S,R);return}if(H===Aa){E(x,S,R);return}if(O!==2&&U&1&&B)if(O===0)B.beforeEnter(k),i(k,S,R),nt(()=>B.enter(k),A);else{const{leave:Y,delayLeave:Z,afterLeave:ee}=B,he=()=>i(k,S,R),be=()=>{Y(k,()=>{he(),ee&&ee()})};Z?Z(k,he,be):be()}else i(k,S,R)},Qe=(x,S,R,O=!1,A=!1)=>{const{type:k,props:H,ref:B,children:F,dynamicChildren:U,shapeFlag:$,patchFlag:Y,dirs:Z}=x;if(B!=null&&Za(B,null,R,x,!0),$&256){S.ctx.deactivate(x);return}const ee=$&1&&Z,he=!Os(x);let be;if(he&&(be=H&&H.onVnodeBeforeUnmount)&&Nt(be,S,x),$&6)Ir(x.component,R,O);else{if($&128){x.suspense.unmount(R,O);return}ee&&Ar(x,null,S,"beforeUnmount"),$&64?x.type.remove(x,S,R,A,$r,O):U&&(k!==Jt||Y>0&&Y&64)?gt(U,S,R,!1,!0):(k===Jt&&Y&384||!A&&$&16)&&gt(F,S,R),O&&Dr(x)}(he&&(be=H&&H.onVnodeUnmounted)||ee)&&nt(()=>{be&&Nt(be,S,x),ee&&Ar(x,null,S,"unmounted")},R)},Dr=x=>{const{type:S,el:R,anchor:O,transition:A}=x;if(S===Jt){Lr(R,O);return}if(S===Aa){I(x);return}const k=()=>{s(R),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(x.shapeFlag&1&&A&&!A.persisted){const{leave:H,delayLeave:B}=A,F=()=>H(R,k);B?B(x.el,k,F):F()}else k()},Lr=(x,S)=>{let R;for(;x!==S;)R=f(x),s(x),x=R;s(S)},Ir=(x,S,R)=>{const{bum:O,scope:A,update:k,subTree:H,um:B}=x;O&&Ra(O),A.stop(),k&&(k.active=!1,Qe(H,x,S,R)),B&&nt(B,S),nt(()=>{x.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},gt=(x,S,R,O=!1,A=!1,k=0)=>{for(let H=k;H<x.length;H++)Qe(x[H],S,R,O,A)},gs=x=>x.shapeFlag&6?gs(x.component.subTree):x.shapeFlag&128?x.suspense.next():f(x.anchor||x.el),no=(x,S,R)=>{x==null?S._vnode&&Qe(S._vnode,null,null,!0):g(S._vnode||null,x,S,null,null,null,R),xo(),Xh(),S._vnode=x},$r={p:g,um:Qe,m:He,r:Dr,mt:Ve,mc:Q,pc:j,pbc:ye,n:gs,o:r};let Ea,Ma;return e&&([Ea,Ma]=e($r)),{render:no,hydrate:Ea,createApp:kc(no,Ea)}}function Or({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function ol(r,e,t=!1){const i=r.children,s=e.children;if(re(i)&&re(s))for(let a=0;a<i.length;a++){const n=i[a];let h=s[a];h.shapeFlag&1&&!h.dynamicChildren&&((h.patchFlag<=0||h.patchFlag===32)&&(h=s[a]=cr(s[a]),h.el=n.el),t||ol(n,h)),h.type===va&&(h.el=n.el)}}function Kc(r){const e=r.slice(),t=[0];let i,s,a,n,h;const l=r.length;for(i=0;i<l;i++){const u=r[i];if(u!==0){if(s=t[t.length-1],r[s]<u){e[i]=s,t.push(i);continue}for(a=0,n=t.length-1;a<n;)h=a+n>>1,r[t[h]]<u?a=h+1:n=h;u<r[t[a]]&&(a>0&&(e[i]=t[a-1]),t[a]=i)}}for(a=t.length,n=t[a-1];a-- >0;)t[a]=n,n=e[n];return t}const Yc=r=>r.__isTeleport,Jt=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),ls=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc");let oi=null,Bn=1;function Ro(r){Bn+=r}function jc(r){return r?r.__v_isVNode===!0:!1}function Bi(r,e){return r.type===e.type&&r.key===e.key}const xa="__vInternal",hl=({key:r})=>r??null,Bs=({ref:r,ref_key:e,ref_for:t})=>(typeof r=="number"&&(r=""+r),r!=null?je(r)||it(r)||se(r)?{i:Yt,r,k:e,f:!!t}:r:null);function qc(r,e=null,t=null,i=0,s=null,a=r===Jt?0:1,n=!1,h=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&hl(e),ref:e&&Bs(e),scopeId:Yh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Yt};return h?(kn(l,t),a&128&&r.normalize(l)):t&&(l.shapeFlag|=je(t)?8:16),Bn>0&&!n&&oi&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&oi.push(l),l}const Gr=$c;function $c(r,e=null,t=null,i=0,s=null,a=!1){if((!r||r===Rc)&&(r=ls),jc(r)){const h=vi(r,e,!0);return t&&kn(h,t),Bn>0&&!a&&oi&&(h.shapeFlag&6?oi[oi.indexOf(r)]=h:oi.push(h)),h.patchFlag|=-2,h}if(od(r)&&(r=r.__vccOpts),e){e=Zc(e);let{class:h,style:l}=e;h&&!je(h)&&(e.class=wn(h)),Be(l)&&(Fh(l)&&!re(l)&&(l=Ye({},l)),e.style=bn(l))}const n=je(r)?1:pc(r)?128:Yc(r)?64:Be(r)?4:se(r)?2:0;return qc(r,e,t,i,s,n,a,!0)}function Zc(r){return r?Fh(r)||xa in r?Ye({},r):r:null}function vi(r,e,t=!1){const{props:i,ref:s,patchFlag:a,children:n}=r,h=e?Jc(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:h,key:h&&hl(h),ref:e&&e.ref?t&&s?re(s)?s.concat(Bs(e)):[s,Bs(e)]:Bs(e):s,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:n,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==Jt?a===-1?16:a|16:a,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&vi(r.ssContent),ssFallback:r.ssFallback&&vi(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function Qc(r=" ",e=0){return Gr(va,null,r,e)}function Vt(r){return r==null||typeof r=="boolean"?Gr(ls):re(r)?Gr(Jt,null,r.slice()):typeof r=="object"?cr(r):Gr(va,null,String(r))}function cr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:vi(r)}function kn(r,e){let t=0;const{shapeFlag:i}=r;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),kn(r,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(xa in e)?e._ctx=Yt:s===3&&Yt&&(Yt.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Yt},t=32):(e=String(e),i&64?(t=16,e=[Qc(e)]):t=8);r.children=e,r.shapeFlag|=t}function Jc(...r){const e={};for(let t=0;t<r.length;t++){const i=r[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wn([e.class,i.class]));else if(s==="style")e.style=bn([e.style,i.style]);else if(ca(s)){const a=e[s],n=i[s];n&&a!==n&&!(re(a)&&a.includes(n))&&(e[s]=a?[].concat(a,n):n)}else s!==""&&(e[s]=i[s])}return e}function Nt(r,e,t,i=null){At(r,e,7,[t,i])}const ed=tl();let td=0;function rd(r,e,t){const i=r.type,s=(e?e.appContext:r.appContext)||ed,a={uid:td++,vnode:r,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:il(i,s),emitsOptions:Kh(i,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:i.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=hc.bind(null,a),r.ce&&r.ce(a),a}let Ze=null,Nn,Qr,Do="__VUE_INSTANCE_SETTERS__";(Qr=za()[Do])||(Qr=za()[Do]=[]),Qr.push(r=>Ze=r),Nn=r=>{Qr.length>1?Qr.forEach(e=>e(r)):Qr[0](r)};const xi=r=>{Nn(r),r.scope.on()},Vr=()=>{Ze&&Ze.scope.off(),Nn(null)};function ll(r){return r.vnode.shapeFlag&4}let us=!1;function id(r,e=!1){us=e;const{props:t,children:i}=r.vnode,s=ll(r);Fc(r,t,s,e),Vc(r,i);const a=s?sd(r,e):void 0;return us=!1,a}function sd(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=zh(new Proxy(r.ctx,Dc));const{setup:i}=t;if(i){const s=r.setupContext=i.length>1?nd(r):null;xi(r),Ri();const a=mr(i,r,0,[r.props,s]);if(Di(),Vr(),Ch(a)){if(a.then(Vr,Vr),e)return a.then(n=>{Lo(r,n,e)}).catch(n=>{ma(n,r,0)});r.asyncDep=a}else Lo(r,a,e)}else ul(r,e)}function Lo(r,e,t){se(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Be(e)&&(r.setupState=Gh(e)),ul(r,t)}let Io;function ul(r,e,t){const i=r.type;if(!r.render){if(!e&&Io&&!i.render){const s=i.template||On(r).template;if(s){const{isCustomElement:a,compilerOptions:n}=r.appContext.config,{delimiters:h,compilerOptions:l}=i,u=Ye(Ye({isCustomElement:a,delimiters:h},n),l);i.render=Io(s,u)}}r.render=i.render||It}xi(r),Ri(),Lc(r),Di(),Vr()}function ad(r){return r.attrsProxy||(r.attrsProxy=new Proxy(r.attrs,{get(e,t){return ht(r,"get","$attrs"),e[t]}}))}function nd(r){const e=t=>{r.exposed=t||{}};return{get attrs(){return ad(r)},slots:r.slots,emit:r.emit,expose:e}}function Fn(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Gh(zh(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in es)return es[t](r)},has(e,t){return t in e||t in es}}))}function od(r){return se(r)&&"__vccOpts"in r}const hd=(r,e)=>tc(r,e,us),ld=Symbol.for("v-scx"),ud=()=>Us(ld),cd="3.3.1",dd="http://www.w3.org/2000/svg",Fr=typeof document<"u"?document:null,Ao=Fr&&Fr.createElement("template"),fd={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,i)=>{const s=e?Fr.createElementNS(dd,r):Fr.createElement(r,t?{is:t}:void 0);return r==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:r=>Fr.createTextNode(r),createComment:r=>Fr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Fr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,i,s,a){const n=t?t.previousSibling:e.lastChild;if(s&&(s===a||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===a||!(s=s.nextSibling)););else{Ao.innerHTML=i?`<svg>${r}</svg>`:r;const h=Ao.content;if(i){const l=h.firstChild;for(;l.firstChild;)h.appendChild(l.firstChild);h.removeChild(l)}e.insertBefore(h,t)}return[n?n.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function pd(r,e,t){const i=r._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function md(r,e,t){const i=r.style,s=je(t);if(t&&!s){if(e&&!je(e))for(const a in e)t[a]==null&&Qa(i,a,"");for(const a in t)Qa(i,a,t[a])}else{const a=i.display;s?e!==t&&(i.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(i.display=a)}}const Oo=/\s*!important$/;function Qa(r,e,t){if(re(t))t.forEach(i=>Qa(r,e,i));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const i=gd(r,e);Oo.test(t)?r.setProperty(Pi(i),t.replace(Oo,""),"important"):r[i]=t}}const Uo=["Webkit","Moz","ms"],Oa={};function gd(r,e){const t=Oa[e];if(t)return t;let i=_i(e);if(i!=="filter"&&i in r)return Oa[e]=i;i=Eh(i);for(let s=0;s<Uo.length;s++){const a=Uo[s]+i;if(a in r)return Oa[e]=a}return e}const Bo="http://www.w3.org/1999/xlink";function _d(r,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Bo,e.slice(6,e.length)):r.setAttributeNS(Bo,e,t);else{const a=xu(e);t==null||a&&!Mh(t)?r.removeAttribute(e):r.setAttribute(e,a?"":t)}}function vd(r,e,t,i,s,a,n){if(e==="innerHTML"||e==="textContent"){i&&n(i,s,a),r[e]=t??"";return}const h=r.tagName;if(e==="value"&&h!=="PROGRESS"&&!h.includes("-")){r._value=t;const u=h==="OPTION"?r.getAttribute("value"):r.value,c=t??"";u!==c&&(r.value=c),t==null&&r.removeAttribute(e);return}let l=!1;if(t===""||t==null){const u=typeof r[e];u==="boolean"?t=Mh(t):t==null&&u==="string"?(t="",l=!0):u==="number"&&(t=0,l=!0)}try{r[e]=t}catch{}l&&r.removeAttribute(e)}function xd(r,e,t,i){r.addEventListener(e,t,i)}function yd(r,e,t,i){r.removeEventListener(e,t,i)}function bd(r,e,t,i,s=null){const a=r._vei||(r._vei={}),n=a[e];if(i&&n)n.value=i;else{const[h,l]=wd(e);if(i){const u=a[e]=Cd(i,s);xd(r,h,u,l)}else n&&(yd(r,h,n,l),a[e]=void 0)}}const ko=/(?:Once|Passive|Capture)$/;function wd(r){let e;if(ko.test(r)){e={};let i;for(;i=r.match(ko);)r=r.slice(0,r.length-i[0].length),e[i[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Pi(r.slice(2)),e]}let Ua=0;const Sd=Promise.resolve(),Td=()=>Ua||(Sd.then(()=>Ua=0),Ua=Date.now());function Cd(r,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;At(Ed(i,t.value),e,5,[i])};return t.value=r,t.attached=Td(),t}function Ed(r,e){if(re(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const No=/^on[a-z]/,Md=(r,e,t,i,s=!1,a,n,h,l)=>{e==="class"?pd(r,i,s):e==="style"?md(r,t,i):ca(e)?_n(e)||bd(r,e,t,i,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pd(r,e,i,s))?vd(r,e,i,a,n,h,l):(e==="true-value"?r._trueValue=i:e==="false-value"&&(r._falseValue=i),_d(r,e,i,s))};function Pd(r,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in r&&No.test(e)&&se(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||No.test(e)&&je(t)?!1:e in r}const Rd=Ye({patchProp:Md},fd);let Fo;function Dd(){return Fo||(Fo=Xc(Rd))}const Ld=(...r)=>{const e=Dd().createApp(...r),{mount:t}=e;return e.mount=i=>{const s=Id(i);if(!s)return;const a=e._component;!se(a)&&!a.render&&!a.template&&(a.template=s.innerHTML),s.innerHTML="";const n=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),n},e};function Id(r){return je(r)?document.querySelector(r):r}var Ad=Object.defineProperty,Od=(r,e,t)=>e in r?Ad(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,o=(r,e,t)=>(Od(r,typeof e!="symbol"?e+"":e,t),t);const Ue=class{constructor(r=1,e=1,t=1,i=1){o(this,"r",0),o(this,"g",0),o(this,"b",0),o(this,"a",0),this.setTo(r,e,t,i)}convertToHDRRGB(){return this.r=this.r*Math.pow(2.4,this.a),this.g=this.g*Math.pow(2.4,this.a),this.b=this.b*Math.pow(2.4,this.a),this}unSerialized(r){return this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this}hexToRGB(r){this.r=(r>>16&255)/255,this.g=(r>>8&255)/255,this.b=(255&r)/255}hexToRGBA(r){this.a=(r>>24&255)/255,this.r=(r>>16&255)/255,this.g=(r>>8&255)/255,this.b=(255&r)/255}static random(r=1){var e=new Ue;return e.a=r,e.r=r*Math.random(),e.g=r*Math.random(),e.b=r*Math.random(),e}setTo(r,e,t,i){this.r=Math.max(r,0),this.g=Math.max(e,0),this.b=Math.max(t,0),this.a=Math.max(i,0)}setHex(s){if(typeof s!="string"||Ue.NON_HEX_CHARS.test(s)||!Ue.VALID_HEX_SIZE.test(s))throw new TypeError("Expected a valid hex string");let e=1;(s=s.replace(/^#/,"")).length===8&&(e=Number.parseInt(s.slice(6,8),16)/255,s=s.slice(0,6)),s.length===4&&(e=Number.parseInt(s.slice(3,4).repeat(2),16)/255,s=s.slice(0,3)),s.length===3&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]);var s=Number.parseInt(s,16),t=s>>16,i=s>>8&255,s=255&s,a=e;this.a=a,this.r=t/255,this.g=i/255,this.b=s/255}getHex(){var r=e=>{let t=(e*=255).toString(16);return t=t.length===1?"0"+t:t};return r(this.r)+r(this.g)+r(this.b)+r(this.a)}get rgb(){return[255*this.r>>>0,255*this.g>>>0,255*this.b>>>0]}set rgb(r){this.setTo(r[0]/255,r[1]/255,r[2]/255,this.a)}get rgba(){return[255*this.r>>>0,255*this.g>>>0,255*this.b>>>0,255*this.a>>>0]}set rgba(r){this.setTo(r[0]/255,r[1]/255,r[2]/255,r[3]/255)}clone(){return new Ue().copyForm(this)}copyForm(r){return this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this}copyFormArray(r,e=255){return this.r=r[0]/e,this.g=r[1]/e,this.b=r[2]/e,this.a=r[3]/e,this}static hexRGBColor(r,e=null){return(e=e||new Ue).hexToRGB(r),e}};let y=Ue;o(y,"COLOR_RED",new Ue(1,0,0,1)),o(y,"COLOR_GREEN",new Ue(0,1,0,1)),o(y,"COLOR_BLUE",new Ue(0,0,1,1)),o(y,"COLOR_WHITE",new Ue(1,1,1,1)),o(y,"COLOR_0",new Ue),o(y,"COLOR_1",new Ue),o(y,"COLOR_2",new Ue),o(y,"HEX_CHARACTERS","a-f\\d"),o(y,"MATCH_3OR4_HEX",`#?[${Ue.HEX_CHARACTERS}]{3}[${Ue.HEX_CHARACTERS}]?`),o(y,"MATCH_6OR8_HEX",`#?[${Ue.HEX_CHARACTERS}]{6}([${Ue.HEX_CHARACTERS}]{2})?`),o(y,"NON_HEX_CHARS",new RegExp(`[^#${Ue.HEX_CHARACTERS}]`,"gi")),o(y,"VALID_HEX_SIZE",new RegExp(`^${Ue.MATCH_3OR4_HEX}$|^${Ue.MATCH_6OR8_HEX}$`,"i")),o(y,"PRIMARY",4149685),o(y,"PRIMARYDARK",3162015),o(y,"ACCENT",16728193),o(y,"WHITE",16777215),o(y,"IVORY",16777200),o(y,"LIGHTYELLOW",16777184),o(y,"YELLOW",16776960),o(y,"SNOW",16775930),o(y,"FLORALWHITE",16775920),o(y,"LEMONCHIFFON",16775885),o(y,"CORNSILK",16775388),o(y,"SEASHELL",16774638),o(y,"LAVENDERBLUSH",16773365),o(y,"PAPAYAWHIP",16773077),o(y,"BLANCHEDALMOND",16772045),o(y,"MISTYROSE",16770273),o(y,"BISQUE",16770244),o(y,"MOCCASIN",16770229),o(y,"NAVAJOWHITE",16768685),o(y,"PEACHPUFF",16767673),o(y,"GOLD",16766720),o(y,"PINK",16761035),o(y,"LIGHTPINK",16758465),o(y,"ORANGE",16753920),o(y,"LIGHTSALMON",16752762),o(y,"DARKORANGE",16747520),o(y,"CORAL",16744272),o(y,"HOTPINK",16738740),o(y,"TOMATO",16737095),o(y,"ORANGERED",16729344),o(y,"DEEPPINK",16716947),o(y,"FUCHSIA",16711935),o(y,"MAGENTA",16711935),o(y,"RED",16711680),o(y,"OLDLACE",16643558),o(y,"LIGHTGOLDENRODYELLOW",16448210),o(y,"LINEN",16445670),o(y,"ANTIQUEWHITE",16444375),o(y,"SALMON",16416882),o(y,"GHOSTWHITE",16316671),o(y,"MINTCREAM",16121850),o(y,"WHITESMOKE",16119285),o(y,"BEIGE",16119260),o(y,"WHEAT",16113331),o(y,"SANDYBROWN",16032864),o(y,"AZURE",15794175),o(y,"HONEYDEW",15794160),o(y,"ALICEBLUE",15792383),o(y,"KHAKI",15787660),o(y,"LIGHTCORAL",15761536),o(y,"PALEGOLDENROD",15657130),o(y,"VIOLET",15631086),o(y,"DARKSALMON",15308410),o(y,"LAVENDER",15132410),o(y,"LIGHTCYAN",14745599),o(y,"BURLYWOOD",14596231),o(y,"PLUM",14524637),o(y,"GAINSBORO",14474460),o(y,"CRIMSON",14423100),o(y,"PALEVIOLETRED",14381203),o(y,"GOLDENROD",14329120),o(y,"ORCHID",14315734),o(y,"THISTLE",14204888),o(y,"LIGHTGREY",13882323),o(y,"TAN",13808780),o(y,"CHOCOLATE",13789470),o(y,"PERU",13468991),o(y,"INDIANRED",13458524),o(y,"MEDIUMVIOLETRED",13047173),o(y,"SILVER",12632256),o(y,"DARKKHAKI",12433259),o(y,"ROSYBROWN",12357519),o(y,"MEDIUMORCHID",12211667),o(y,"DARKGOLDENROD",12092939),o(y,"FIREBRICK",11674146),o(y,"POWDERBLUE",11591910),o(y,"LIGHTSTEELBLUE",11584734),o(y,"PALETURQUOISE",11529966),o(y,"GREENYELLOW",11403055),o(y,"LIGHTBLUE",11393254),o(y,"DARKGRAY",11119017),o(y,"BROWN",10824234),o(y,"SIENNA",10506797),o(y,"DARKORCHID",10040012),o(y,"PALEGREEN",10025880),o(y,"DARKVIOLET",9699539),o(y,"MEDIUMPURPLE",9662683),o(y,"LIGHTGREEN",9498256),o(y,"DARKSEAGREEN",9419919),o(y,"SADDLEBROWN",9127187),o(y,"DARKMAGENTA",9109643),o(y,"DARKRED",9109504),o(y,"BLUEVIOLET",9055202),o(y,"LIGHTSKYBLUE",8900346),o(y,"SKYBLUE",8900331),o(y,"GRAY",8421504),o(y,"OLIVE",8421376),o(y,"PURPLE",8388736),o(y,"MAROON",8388608),o(y,"AQUAMARINE",8388564),o(y,"CHARTREUSE",8388352),o(y,"LAWNGREEN",8190976),o(y,"MEDIUMSLATEBLUE",8087790),o(y,"LIGHTSLATEGRAY",7833753),o(y,"SLATEGRAY",7372944),o(y,"OLIVEDRAB",7048739),o(y,"SLATEBLUE",6970061),o(y,"DIMGRAY",6908265),o(y,"MEDIUMAQUAMARINE",6737322),o(y,"CORNFLOWERBLUE",6591981),o(y,"CADETBLUE",6266528),o(y,"DARKOLIVEGREEN",5597999),o(y,"INDIGO",4915330),o(y,"MEDIUMTURQUOISE",4772300),o(y,"DARKSLATEBLUE",4734347),o(y,"STEELBLUE",4620980),o(y,"ROYALBLUE",4286945),o(y,"TURQUOISE",4251856),o(y,"MEDIUMSEAGREEN",3978097),o(y,"LIMEGREEN",3329330),o(y,"DARKSLATEGRAY",3100495),o(y,"SEAGREEN",3050327),o(y,"FORESTGREEN",2263842),o(y,"LIGHTSEAGREEN",2142890),o(y,"DODGERBLUE",2003199),o(y,"MIDNIGHTBLUE",1644912),o(y,"AQUA",65535),o(y,"CYAN",65535),o(y,"SPRINGGREEN",65407),o(y,"LIME",65280),o(y,"MEDIUMSPRINGGREEN",64154),o(y,"DARKTURQUOISE",52945),o(y,"DEEPSKYBLUE",49151),o(y,"DARKCYAN",35723),o(y,"TEAL",32896),o(y,"GREEN",32768),o(y,"DARKGREEN",25600),o(y,"BLUE",255),o(y,"MEDIUMBLUE",205),o(y,"DARKBLUE",139),o(y,"NAVY",128),o(y,"BLACK",0);class ze{static start(e){this._startTime=performance.now(),this._timeLabel=e}static end(){console.log(this._timeLabel,performance.now()-this._startTime)}}o(ze,"time",0),o(ze,"frame",0),o(ze,"delta",0),o(ze,"_startTime",0),o(ze,"_timeLabel","");class wt{constructor(e=null,t=null){o(this,"target"),o(this,"currentTarget"),o(this,"type"),o(this,"data"),o(this,"param"),o(this,"time",0),o(this,"delay",0),o(this,"mouseCode",0),o(this,"ctrlKey"),o(this,"altKey"),o(this,"shiftKey"),o(this,"targetTouches"),o(this,"changedTouches"),o(this,"touches"),o(this,"_stopImmediatePropagation",!1),o(this,"view"),this.type=e,this.data=t}stopImmediatePropagation(){this._stopImmediatePropagation=!0}reset(){this._stopImmediatePropagation=!1}get isStopImmediatePropagation(){return this._stopImmediatePropagation}}class $s{constructor(e=null,t=null,i=null,s=null,a=0){o(this,"id",0),o(this,"current"),this.type=e,this.thisObject=t,this.handler=i,this.param=s,this.priority=a}equalCurrentListener(e,t,i,s){return this.type==e&&this.thisObject==i&&this.handler==t&&this.param==s}dispose(){this.handler=null,this.thisObject=null,this.param=null,this.priority=0}}o($s,"event_id_count",0);class Li{constructor(){o(this,"listeners",{}),o(this,"data")}dispatchEvent(e){if((t=this.listeners[e.type])!=null)for(var t=t.slice(),i=0;i<t.length;i++){var s=t[i];if(s.handler){try{e.param=s.param,(e.currentTarget=s).thisObject,s.handler.call(s.thisObject,e)}catch{}if(e.isStopImmediatePropagation)break}}}dispose(){for(var e in this.listeners)for(var t=this.listeners[e];0<t.length;){var i=t[0];i.handler=null,i.thisObject=null,t.splice(0,1)}}addEventListener(e,t,i,s=null,a=0){if(this.listeners[e]==null&&(this.listeners[e]=[]),!this.hasEventListener(e,t,i))return(a=new $s(e,i,t,s,a)).id=++$s.event_id_count,(a.current=this).listeners[e].push(a),this.listeners[e].sort(function(h,l){return l.priority-h.priority}),a.id;for(let h=0;h<this.listeners[e].length;h++){var n=this.listeners[e][h];if(n.equalCurrentListener(e,t,i,s))return n.id}return 0}removeEventListener(e,t,i){if(this.hasEventListener(e,t,i))for(var s=0;s<this.listeners[e].length;s++){var a=this.listeners[e][s];if(a.equalCurrentListener(e,t,i,a.param))return a.handler=null,a.thisObject=null,void this.listeners[e].splice(s,1)}}removeEventListenerAt(e){for(var t in this.listeners)for(var i=0;i<this.listeners[t].length;i++){var s=this.listeners[t][i];if(s.id==e)return s.handler=null,s.thisObject=null,this.listeners[t].splice(i,1),!0}return!1}removeAllEventListener(e=null){if(e){if(this.listeners[e]){for(var t=0;t<this.listeners[e].length;t++)this.listeners[e][t].dispose(),this.listeners[e].splice(t,1);delete this.listeners[e]}}else for(var i in this.listeners){for(t=0;t<this.listeners[i].length;t++)this.listeners[i][t].dispose(),this.listeners[i].splice(t,1);delete this.listeners[i]}}containEventListener(e){return this.listeners[e]!=null&&0<this.listeners[e].length}hasEventListener(e,t=null,i=null){if(this.listeners[e]!=null&&i&&t)for(var s=0;s<this.listeners[e].length;s++){var a=this.listeners[e][s];if(a.equalCurrentListener(e,t,i,a.param))return!0}return!1}}class Hr extends wt{constructor(){super(...arguments),o(this,"keyCode",0)}}o(Hr,"KEY_DOWN","onKeyDown"),o(Hr,"KEY_UP","onKeyUp");class K extends wt{constructor(){super(...arguments),o(this,"pointerId"),o(this,"pointerType"),o(this,"isPrimary"),o(this,"pressure"),o(this,"mouseX"),o(this,"mouseY"),o(this,"movementX"),o(this,"movementY"),o(this,"deltaX"),o(this,"deltaY"),o(this,"deltaZ")}reset(){super.reset(),this.mouseX=0,this.mouseY=0,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,this.deltaZ=0}}o(K,"PICK_OVER","onPickOver"),o(K,"PICK_OVER_GUI","onPickOverGUI"),o(K,"PICK_CLICK","onPickClick"),o(K,"PICK_CLICK_GUI","onPickClickGUI"),o(K,"PICK_OUT","onPickOut"),o(K,"PICK_OUT_GUI","onPickOutGUI"),o(K,"PICK_MOVE","onPickMove"),o(K,"PICK_UP","onPickUp"),o(K,"PICK_UP_GUI","onPickUpGUI"),o(K,"PICK_DOWN","onPickDown"),o(K,"PICK_DOWN_GUI","onPickDownGUI"),o(K,"POINTER_RIGHT_CLICK","onPointerRightClick"),o(K,"POINTER_MID_UP","onPointerMidUp"),o(K,"POINTER_MID_DOWN","onPointerMidDown"),o(K,"POINTER_CLICK","onPointerClick"),o(K,"POINTER_MOVE","onPointerMove"),o(K,"POINTER_DOWN","onPointerDown"),o(K,"POINTER_UP","onPointerUp"),o(K,"POINTER_OUT","onPointerOut"),o(K,"POINTER_OVER","onPointerOver"),o(K,"POINTER_WHEEL","onPointerWheel");const J=class{constructor(r=0,e=0,t=0,i=0){o(this,"x",0),o(this,"y",0),o(this,"z",0),o(this,"w",1),o(this,"index",0),this.set(r,e,t,i),this.index=J._index++}static get ZERO(){return new J(0,0,0)}static get ONE(){return new J(1,1,1)}static get LEFT(){return new J(-1,0,0)}static get RIGHT(){return new J(1,0,0)}static get UP(){return new J(0,1,0)}static get DOWN(){return new J(0,-1,0)}static get BACK(){return new J(0,0,-1)}static get FORWARD(){return new J(0,0,1)}set a(r){this.w=r}set r(r){this.x=r}set g(r){this.y=r}set b(r){this.z=r}get a(){return this.w}get r(){return this.x}get g(){return this.y}get b(){return this.z}get length(){return Math.sqrt(this.lengthSquared)}get lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}get position(){return this}static getTowPointbyDir(r,e,t,i,s){s==J.Z_AXIS?(e.x=r.y,e.y=-r.x,t.x=-r.y,t.y=r.x,e.scaleBy(.5*i),t.scaleBy(.5*i)):s==J.Y_AXIS&&(e.x=r.z,e.z=-r.x,t.x=-r.z,t.z=r.x,e.scaleBy(.5*i),t.scaleBy(.5*i))}static pointToLine(r,e,t){let i=0,s,a,n;return s=J.distance(r,e),a=J.distance(r,t),(n=J.distance(e,t))<=1e-6||a<=1e-6?i=0:i=s<=1e-6||s*s+a*a<=n*n?a:s*s+n*n<=a*a?n:(r=(s+a+n)/2,2*Math.sqrt(r*(r-s)*(r-a)*(r-n))/s),i}static cross(r,e,t=null){return(t=t||new J).x=r.y*e.z-r.z*e.y,t.y=r.z*e.x-r.x*e.z,t.z=r.x*e.y-r.y*e.x,t.w=1,t}static dot(r,e){return r.x*e.x+r.y*e.y+r.z*e.z}static getPoints(r,e){var t=[];for(let s=0;s<r;s++){var i=new J(Math.random()*e-.5*e,Math.random()*e-.5*e,Math.random()*e-.5*e);t.push(i)}return t}static getPointNumbers(r,e){var t=[];for(let i=0;i<r;i++)t.push(Math.random()*e-.5*e,Math.random()*e-.5*e,Math.random()*e-.5*e);return t}static getAngle(r,e){return r=r.dotProduct(e)/(r.length*e.length),180*Math.acos(r)/Math.PI}static sqrMagnitude(r){return r.x*r.x+r.y*r.y+r.z*r.z}static getZYAngle(r,e){return this.calAngle(r.y,r.z,e.y,e.z)}static sub(r,e,t=null){return(t=t||new J).x=r.x-e.x,t.y=r.y-e.y,t.z=r.z-e.z,t}static add(r,e,t=null){return(t=t||new J).x=r.x+e.x,t.y=r.y+e.y,t.z=r.z+e.z,t}static smoothDamp(r,e,t,i,s,a){return null}static distance(s,e){var t=s.x-e.x,i=s.y-e.y,s=s.z-e.z;return Math.sqrt(t*t+i*i+s*s)}static distanceXZ(i,e){var t=i.x-e.x,i=i.z-e.z;return Math.sqrt(t*t+0+i*i)}set(r,e,t,i=1){return this.x=r,this.y=e,this.z=t,this.w=i,this}add(u,e=null){e=e||new J;var t=this.x,i=this.y,s=this.z,a=this.w,n=u.x,h=u.y,l=u.z,u=u.w;return e.setTo(t+n,i+h,s+l,a+u),e}addXYZW(r,e,t,i,s=null){s=s||new J;var a=this.x,n=this.y,h=this.z,l=this.w;return s.setTo(a+r,n+e,h+t,l+i),s}clone(){return new J(this.x,this.y,this.z,this.w)}copyFrom(r){var e=this;return e.x=r.x,e.y=r.y,e.z=r.z,e.w=r.w,e}crossProduct(r,e=null){return(e=e||new J).x=this.y*r.z-this.z*r.y,e.y=this.z*r.x-this.x*r.z,e.z=this.x*r.y-this.y*r.x,e.w=1,e}decrementBy(r){this.x-=r.x,this.y-=r.y,this.z-=r.z}dotProduct(r){return this.x*r.x+this.y*r.y+this.z*r.z}equals(r,e=!1){return this.x==r.x&&this.y==r.y&&this.z==r.z&&(!e||this.w==r.w)}incrementBy(r){this.x+=r.x,this.y+=r.y,this.z+=r.z}divide(r){return r instanceof J?new J(this.x/r.x,this.y/r.y,this.z/r.z):(this.x=this.x/r,this.y=this.y/r,this.z=this.z/r,this)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}normalize(r=1){return this.length!=0&&(r=r/this.length,this.x*=r,this.y*=r,this.z*=r),this}applyQuaternion(n){var c=this.x,e=this.y,t=this.z,i=n.x,s=n.y,a=n.z,n=n.w,h=n*c+s*t-a*e,l=n*e+a*c-i*t,u=n*t+i*e-s*c,c=-i*c-s*e-a*t;return this.x=h*n+c*-i+l*-a-u*-s,this.y=l*n+c*-s+u*-i-h*-a,this.z=u*n+c*-a+h*-s-l*-i,this}scaleBy(r){return this.x*=r,this.y*=r,this.z*=r,this}mul(r){var e=new J;return e.x=this.x*r,e.y=this.y*r,e.z=this.z*r,e}scale(r){return this.x*=r.x,this.y*=r.y,this.z*=r.z,this}scaleToRef(r,e){return(e=e||new J).x=this.x*r,e.y=this.y*r,e.z=this.z*r,e}setTo(r,e,t,i=1){this.x=r,this.y=e,this.z=t,this.w=i}copy(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w,this}subtract(r,e=null){return(e=e||new J).setTo(this.x-r.x,this.y-r.y,this.z-r.z),e}multiply(h,e=null){e=e||new J;var t=this.x,i=this.y,s=this.z,a=h.x,n=h.y,h=h.z;return e.setTo(t*a,i*n,s*h),e}divided(h,e=null){e=e||new J;var t=this.x,i=this.y,s=this.z,a=h.x,n=h.y,h=h.z;return e.setTo(t/a,i/n,s/h),e}div(r,e){e=e||new J;var t=this.x,i=this.y,s=this.z,a=this.w;return e.setTo(t/r,i/r,s/r,a/r),e}lerp(n,c,t){var i=n.x,s=n.y,a=n.z,n=n.w,h=c.x,l=c.y,u=c.z,c=c.w;this.x=(h-i)*t+i,this.y=(l-s)*t+s,this.z=(u-a)*t+a,this.w=(c-n)*t+n}clamp(r,e){return this.x=Math.max(r.x,Math.min(e.x,this.x)),this.y=Math.max(r.y,Math.min(e.y,this.y)),this.z=Math.max(r.z,Math.min(e.z,this.z)),this}toString(){return"<"+this.x+", "+this.y+", "+this.z+">"}normalizeToWay2D_XY(){var r=Math.abs(this.x);Math.abs(this.y)<r?0<this.x?this.copyFrom(J.RIGHT):this.copyFrom(J.LEFT):0<this.y?this.copyFrom(J.DOWN):this.copyFrom(J.UP)}toArray(){return[this.x,this.y,this.z]}copyToBytes(r){r.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this.x,!0),r.setFloat32(+Float32Array.BYTES_PER_ELEMENT,this.y,!0),r.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,this.z,!0)}cross(r,e=null){return(e=e||new J).x=this.y*r.z-this.z*r.y,e.y=this.z*r.x-this.x*r.z,e.z=this.x*r.y-this.y*r.x,e.w=1,e}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this}setFromArray(r,e=0){this.x=r[e],this.y=r[e+1],this.z=r[e+2]}divideScalar(r){return this.multiplyScalar(1/r)}clampLength(r,e){var t=this.length;return this.divideScalar(t||1).multiplyScalar(Math.max(r,Math.min(e,t)))}setScalar(r){return this.x=r,this.y=r,this.z=r,this}static calAngle(r,e,t,i){i=function(a,n,h,l){return a=[a-h,n-l],function(f,c){var d=f[0]*c[0]+f[1]*c[1],f=Math.sqrt(f[0]*f[0]+f[1]*f[1])*Math.sqrt(c[0]*c[0]+c[1]*c[1]);return d/f}(a,[0,-1])}(t,i,r,e);let s=180*Math.acos(i)/Math.PI;return s=t<r?-s:s}};let p=J;o(p,"MAX",new J(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)),o(p,"MIN",new J(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE)),o(p,"SAFE_MAX",new J(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),o(p,"SAFE_MIN",new J(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)),o(p,"X_AXIS",new J(1,0,0)),o(p,"neg_X_AXIS",new J(-1,0,0)),o(p,"Y_AXIS",new J(0,1,0)),o(p,"Z_AXIS",new J(0,0,1)),o(p,"HELP_0",new J),o(p,"HELP_1",new J),o(p,"HELP_2",new J),o(p,"EPSILON",1e-5),o(p,"HELP_3",new J),o(p,"HELP_4",new J),o(p,"HELP_5",new J),o(p,"HELP_6",new J),o(p,"_index",0);class Ud{constructor(e){o(this,"canvasX"),o(this,"canvasY"),o(this,"identifier"),o(this,"clientX"),o(this,"clientY"),o(this,"pageX"),o(this,"pageY"),o(this,"screenX"),o(this,"screenY"),this.canvasX=e.clientX,this.canvasY=e.clientY,this.identifier=e.identifier,this.clientX=e.clientX,this.clientY=e.clientY,this.pageX=e.pageX,this.pageY=e.pageY,this.screenX=e.screenX,this.screenY=e.screenY}}class Bd extends Li{constructor(){super(...arguments),o(this,"canvasX",0),o(this,"canvasY",0),o(this,"isMouseDown",!1),o(this,"isRightMouseDown",!1),o(this,"canvas"),o(this,"mouseX",0),o(this,"mouseY",0),o(this,"wheelDelta",0),o(this,"mouseOffsetX",0),o(this,"mouseOffsetY",0),o(this,"mouseLastX",0),o(this,"mouseLastY",0),o(this,"_time",0),o(this,"_keyStatus"),o(this,"_mouseStatus"),o(this,"_isTouchStart"),o(this,"_keyEvent3d"),o(this,"_pointerEvent3D"),o(this,"_windowsEvent3d"),o(this,"_gp",!1),o(this,"_oldPosition1",null),o(this,"_oldPosition2",null),o(this,"_downTime",0)}initCanvas(e){(this.canvas=e).onpointerdown=t=>{t.button==0?this.mouseStart(t):t.button==1?this.middleDown(t):t.button==2&&this.mouseStart(t)},e.onpointerup=t=>{t.button==0?this.mouseEnd(t):t.button==1?this.middleUp(t):t.button==2&&this.mouseEnd(t)},e.onpointerenter=t=>{this.mouseOver(t)},e.onpointermove=t=>{this.mouseMove(t)},e.onpointercancel=t=>{this.mouseEnd(t)},e.onpointerleave=t=>{this.mouseEnd(t)},e.onpointerout=t=>{this.mouseEnd(t)},e.addEventListener("click",t=>{t.button==2?(this.isRightMouseDown=!1,this.rightClick(t)):t.button==0&&(this.isMouseDown=!1,this.mouseClick(t))},!0),e.addEventListener("wheel",t=>this.mouseWheel(t),{passive:!1}),window.addEventListener("keydown",t=>this.keyDown(t),!0),window.addEventListener("keyup",t=>this.keyUp(t),!0),e.oncontextmenu=function(){return!1},e=this.canvas.getBoundingClientRect(),this.canvasX=e.left,this.canvasY=e.top,this._keyStatus={},this._mouseStatus={},this._isTouchStart=!1,this._keyEvent3d=new Hr,this._pointerEvent3D=new K,this._windowsEvent3d=new wt}onPinch(e,t,i,s){this._oldPosition1=new p(e,t),this._oldPosition2=new p(i,s)}onSwipe(e,t){this.mouseX=e,this.mouseY=t,this._oldPosition1=null,this._oldPosition2=null,this._time=new Date().getTime()}GetTargetTouches(e){for(var t=new Array,i=0;i<e.length;i++){var s=new Ud(e[i]);t.push(s)}return t}rightClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=K.POINTER_RIGHT_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}middleDown(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=K.POINTER_MID_DOWN,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}middleUp(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=K.POINTER_MID_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}mouseClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=K.POINTER_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}mouseEnd(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._mouseStatus[this._pointerEvent3D.mouseCode]=!1,this._pointerEvent3D.type=K.POINTER_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseStart(e){this.isMouseDown=!0,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.type=K.POINTER_DOWN,this.dispatchEvent(this._pointerEvent3D)}mouseMove(e){this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=K.POINTER_MOVE,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.movementX=e.movementX,this._pointerEvent3D.movementY=e.movementY,this.dispatchEvent(this._pointerEvent3D)}mouseOver(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=K.POINTER_OVER,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseWheel(e){e.preventDefault(),this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,"wheelDelta"in e?(this._pointerEvent3D.delay=e.wheelDelta,this.wheelDelta=e.wheelDelta):"delta"in e&&(this.wheelDelta=e.delta),this._pointerEvent3D.reset(),this._pointerEvent3D.type=K.POINTER_WHEEL,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.deltaX=e.deltaX,this._pointerEvent3D.deltaY=e.deltaY,this._pointerEvent3D.deltaZ=e.deltaZ,this.dispatchEvent(this._pointerEvent3D)}keyDown(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyEvent3d.ctrlKey=e.ctrlKey,this._keyEvent3d.altKey=e.altKey,this._keyEvent3d.shiftKey=e.shiftKey,this._keyStatus[e.keyCode]||(this._keyStatus[e.keyCode]=!0,this._keyEvent3d.type=Hr.KEY_DOWN,this.dispatchEvent(this._keyEvent3d))}keyUp(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyStatus[e.keyCode]=!1,this._keyEvent3d.type=Hr.KEY_UP,this.dispatchEvent(this._keyEvent3d)}GetSlideAngle(e,t){return 180*Math.atan2(t,e)/Math.PI}GetSlideDirection(e,t,i,s){return t-=s,s=i-e,i=0,Math.abs(s)<2&&Math.abs(t)<2||(-45<=(e=this.GetSlideAngle(s,t))&&e<45?i=4:45<=e&&e<135?i=1:-135<=e&&e<-45?i=2:(135<=e&&e<=180||-180<=e&&e<-135)&&(i=3)),i}}const kd="0.6.1";class Nd{constructor(){o(this,"adapter"),o(this,"device"),o(this,"context"),o(this,"aspect"),o(this,"presentationSize",[0,0]),o(this,"presentationFormat"),o(this,"canvas"),o(this,"windowWidth"),o(this,"windowHeight"),o(this,"sourceWidth"),o(this,"sourceHeight"),o(this,"canvasConfig"),o(this,"super",1)}get pixelRatio(){var e;return((e=this.canvasConfig)==null?void 0:e.devicePixelRatio)||window.devicePixelRatio||1}async init(e){if((this.canvasConfig=e)&&e.canvas){if(this.canvas=e.canvas,this.canvas===null)throw new Error("no Canvas")}else this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0px",this.canvas.style.left="0px",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.zIndex=e!=null&&e.zIndex?e.zIndex.toString():"0",document.body.appendChild(this.canvas);this.resize(this.canvas.clientWidth,this.canvas.clientHeight),e&&e.backgroundImage?(this.canvas.style.background=`url(${e.backgroundImage})`,this.canvas.style["background-size"]="cover",this.canvas.style["background-position"]="center"):this.canvas.style.background="transparent",this.canvas.style["touch-action"]="none",this.canvas.style["object-fit"]="cover",this.context=this.canvas.getContext("webgpu"),this.sourceWidth=Math.floor(this.canvas.clientWidth*this.pixelRatio*this.super),this.sourceHeight=Math.floor(this.canvas.clientHeight*this.pixelRatio*this.super),this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"}),this.adapter,this.device=await this.adapter.requestDevice({requiredFeatures:["texture-compression-bc"],requiredLimits:{minUniformBufferOffsetAlignment:256,maxStorageBufferBindingSize:this.adapter.limits.maxStorageBufferBindingSize}}),this.device,this.device.label="device",this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.presentationFormat,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"premultiplied",colorSpace:"display-p3"}),this.resize(this.canvas.clientWidth,this.canvas.clientHeight);let t;return new ResizeObserver(()=>{clearTimeout(t),t=setTimeout(()=>{this.resize(this.canvas.clientWidth,this.canvas.clientHeight)},50)}).observe(this.canvas),!0}resize(e,t){this.canvas.width=this.windowWidth=Math.floor(e*this.pixelRatio*this.super),this.canvas.height=this.windowHeight=Math.floor(t*this.pixelRatio*this.super),this.presentationSize[0]=this.windowWidth,this.presentationSize[1]=this.windowHeight,this.aspect=this.windowWidth/this.windowHeight}}let D=new Nd;class di{}o(di,"Bloom_Brightness_frag_wgsl",`
    struct uniformData {
        luminosityThreshold: f32
    };

    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;
    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn Brightness(c: vec3<f32>) -> f32 {
        var c1: vec3<f32>;

        c1 = c;
        let e8: vec3<f32> = c1;
        let e10: vec3<f32> = c1;
        let e12: vec3<f32> = c1;
        let e14: vec3<f32> = c1;
        let e17: vec3<f32> = c1;
        let e19: vec3<f32> = c1;
        let e21: vec3<f32> = c1;
        let e23: vec3<f32> = c1;
        let e25: vec3<f32> = c1;
        let e28: vec3<f32> = c1;
        return max(max(e23.x, e25.y), e28.z);
    }

    fn main1() {
        var uv: vec2<f32>;
        var LinearColor: vec4<f32>;
        var TotalLuminance: f32;
        var BloomLuminance: f32;
        var BloomAmount: f32;

        let e6: vec2<f32> = fragUV1;
        uv = e6.xy;
        let e11: vec2<f32> = uv;
        uv.y = (1.0 - e11.y);
        let e15: vec2<f32> = uv;
        let e16: vec4<f32> = textureSample(baseMap, baseMapSampler, e15);
        LinearColor = e16;
        let e18: vec4<f32> = LinearColor;
        let e27: vec4<f32> = LinearColor;
        let e36: vec4<f32> = LinearColor;
        let e38: vec3<f32> = min(vec3<f32>(f32(65000), f32(65000), f32(65000)), e36.xyz);
        LinearColor.x = e38.x;
        LinearColor.y = e38.y;
        LinearColor.z = e38.z;
        let e45: vec4<f32> = LinearColor;
        let e47: vec4<f32> = LinearColor;
        let e49: f32 = Brightness(e47.xyz);
        TotalLuminance = e49;
        let e51: f32 = TotalLuminance;
        let e52: f32 = global.luminosityThreshold;
        BloomLuminance = (e51 - e52);
        let e55: f32 = BloomLuminance;
        let e60: f32 = BloomLuminance;
        BloomAmount = clamp((e60 * 0.5), 0.0, 1.0);
        let e67: f32 = BloomAmount;
        let e68: vec4<f32> = LinearColor;
        o_Target = vec4<f32>((e67 * e68.xyz), f32(0));
        return;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        fragUV1 = fragUV;
        main1();
        let e13: vec4<f32> = o_Target;
        return FragmentOutput(e13);
    }
    `),o(di,"Bloom_blur_frag_wgsl",`
      struct uniformData {
          texSize: vec2<f32>,
          hScale: f32,
          vScale: f32,
          horizontal: f32
      };

      struct FragmentOutput {
          @location(0) o_Target: vec4<f32>
      };

      var<private> fragUV1: vec2<f32>;
      var<private> o_Target: vec4<f32>;
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
      @group(2) @binding(0)
      var<uniform> global: uniformData;

      fn main1() {
          var uv: vec2<f32>;
          var tex_offset: vec2<f32>;
          var result: vec3<f32>;
          var i: i32 = 1;
          var local: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var local1: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var j: i32 = 1;
          var local2: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var local3: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);

          let e13: vec2<f32> = fragUV1;
          uv = e13.xy;
          let e18: vec2<f32> = uv;
          uv.y = (1.0 - e18.y);
          let e22: vec2<f32> = global.texSize;
          tex_offset = (vec2<f32>(1.0) / vec2<f32>(e22));
          let e28: vec2<f32> = uv;
          let e29: vec4<f32> = textureSample(baseMap, baseMapSampler, e28);
          result = (e29.xyz * array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464)[0]);
          let e35: f32 = global.horizontal;
          if ((e35 > 1.0)) {
              {
                  loop {
                      let e40: i32 = i;
                      if (!((e40 < 5))) {
                          break;
                      }
                      {
                          let e47: vec3<f32> = result;
                          let e48: vec2<f32> = uv;
                          let e49: vec2<f32> = tex_offset;
                          let e51: i32 = i;
                          let e54: f32 = global.hScale;
                          let e59: vec2<f32> = uv;
                          let e60: vec2<f32> = tex_offset;
                          let e62: i32 = i;
                          let e65: f32 = global.hScale;
                          let e70: vec4<f32> = textureSample(baseMap, baseMapSampler, (e59 + vec2<f32>(((e60.x * f32(e62)) * e65), 0.0)));
                          let e72: i32 = i;
                          let e75: f32 = local[e72];
                          result = (e47 + (e70.xyz * e75));
                          let e78: vec3<f32> = result;
                          let e79: vec2<f32> = uv;
                          let e80: vec2<f32> = tex_offset;
                          let e82: i32 = i;
                          let e85: f32 = global.hScale;
                          let e90: vec2<f32> = uv;
                          let e91: vec2<f32> = tex_offset;
                          let e93: i32 = i;
                          let e96: f32 = global.hScale;
                          let e101: vec4<f32> = textureSample(baseMap, baseMapSampler, (e90 - vec2<f32>(((e91.x * f32(e93)) * e96), 0.0)));
                          let e103: i32 = i;
                          let e106: f32 = local1[e103];
                          result = (e78 + (e101.xyz * e106));
                      }
                      continuing {
                          let e44: i32 = i;
                          i = (e44 + 1);
                      }
                  }
              }
          }
          let e109: f32 = global.horizontal;
          if ((e109 < 1.0)) {
              {
                  loop {
                      let e114: i32 = j;
                      if (!((e114 < 5))) {
                          break;
                      }
                      {
                          let e121: vec3<f32> = result;
                          let e122: vec2<f32> = uv;
                          let e124: vec2<f32> = tex_offset;
                          let e126: i32 = j;
                          let e129: f32 = global.vScale;
                          let e133: vec2<f32> = uv;
                          let e135: vec2<f32> = tex_offset;
                          let e137: i32 = j;
                          let e140: f32 = global.vScale;
                          let e144: vec4<f32> = textureSample(baseMap, baseMapSampler, (e133 + vec2<f32>(0.0, ((e135.y * f32(e137)) * e140))));
                          let e146: i32 = j;
                          let e149: f32 = local2[e146];
                          result = (e121 + (e144.xyz * e149));
                          let e152: vec3<f32> = result;
                          let e153: vec2<f32> = uv;
                          let e155: vec2<f32> = tex_offset;
                          let e157: i32 = j;
                          let e160: f32 = global.vScale;
                          let e164: vec2<f32> = uv;
                          let e166: vec2<f32> = tex_offset;
                          let e168: i32 = j;
                          let e171: f32 = global.vScale;
                          let e175: vec4<f32> = textureSample(baseMap, baseMapSampler, (e164 - vec2<f32>(0.0, ((e166.y * f32(e168)) * e171))));
                          let e177: i32 = j;
                          let e180: f32 = local3[e177];
                          result = (e152 + (e175.xyz * e180));
                      }
                      continuing {
                          let e118: i32 = j;
                          j = (e118 + 1);
                      }
                  }
              }
          }
          let e183: vec3<f32> = result;
          o_Target = vec4<f32>(e183, 1.0);
          return;
      }

      @fragment
      fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
          fragUV1 = fragUV;
          main1();
          let e27: vec4<f32> = o_Target;
          return FragmentOutput(e27);
      }
      `),o(di,"Bloom_composite_frag_wgsl",`
      struct uniformData {
          bloomStrength: f32,
          bloomRadius: f32
      };

      struct FragmentOutput {
          @location(0) o_Target: vec4<f32>
      };

      var<private> fragUV1: vec2<f32>;
      var<private> o_Target: vec4<f32>;
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
      @group(1) @binding(2)
      var blurTex1Sampler: sampler;
      @group(1) @binding(3)
      var blurTex1: texture_2d<f32>;
      @group(1) @binding(4)
      var blurTex2Sampler: sampler;
      @group(1) @binding(5)
      var blurTex2: texture_2d<f32>;
      @group(1) @binding(6)
      var blurTex3Sampler: sampler;
      @group(1) @binding(7)
      var blurTex3: texture_2d<f32>;
      @group(1) @binding(8)
      var blurTex4Sampler: sampler;
      @group(1) @binding(9)
      var blurTex4: texture_2d<f32>;
      @group(1) @binding(10)
      var blurTex5Sampler: sampler;
      @group(1) @binding(11)
      var blurTex5: texture_2d<f32>;
      @group(2) @binding(0)
      var<uniform> global: uniformData;

      fn lerpBloomFactor(factor: f32) -> f32 {
          var factor1: f32;
          var mirrorFactor: f32;

          factor1 = factor;
          let e23: f32 = factor1;
          mirrorFactor = (1.2000000476837158 - e23);
          let e29: f32 = factor1;
          let e30: f32 = mirrorFactor;
          let e31: f32 = global.bloomRadius;
          return mix(e29, e30, e31);
      }

      fn main1() {
          var uv: vec2<f32>;
          var source: vec4<f32>;

          let e20: vec2<f32> = fragUV1;
          uv = e20.xy;
          let e25: vec2<f32> = uv;
          uv.y = (1.0 - e25.y);
          let e29: vec2<f32> = uv;
          let e30: vec4<f32> = textureSample(baseMap, baseMapSampler, e29);
          source = e30;
          let e32: vec4<f32> = source;
          let e33: f32 = global.bloomStrength;
          let e38: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[0]);
          let e45: vec2<f32> = uv;
          let e46: vec4<f32> = textureSample(blurTex1, blurTex1Sampler, e45);
          let e52: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[1]);
          let e59: vec2<f32> = uv;
          let e60: vec4<f32> = textureSample(blurTex2, blurTex2Sampler, e59);
          let e67: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[2]);
          let e74: vec2<f32> = uv;
          let e75: vec4<f32> = textureSample(blurTex3, blurTex3Sampler, e74);
          let e82: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[3]);
          let e89: vec2<f32> = uv;
          let e90: vec4<f32> = textureSample(blurTex4, blurTex4Sampler, e89);
          let e97: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[4]);
          let e104: vec2<f32> = uv;
          let e105: vec4<f32> = textureSample(blurTex5, blurTex5Sampler, e104);
          o_Target = (e32 + (e33 * ((((((e38 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[0], 1.0)) * e46) + ((e52 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[1], 1.0)) * e60)) + ((e67 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[2], 1.0)) * e75)) + ((e82 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[3], 1.0)) * e90)) + ((e97 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[4], 1.0)) * e105))));
          o_Target.a = e30.a ;
          return;
      } 

      @fragment
      fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
          fragUV1 = fragUV;
          main1();
        //   let e81: vec4<f32> = pow(o_Target,vec4<f32>(vec3<f32>(2.2),o_Target.w));
          return FragmentOutput(o_Target);
      }
      `);let Fd=`
        var<private> colorSet : array<vec3<f32>, 9> = array<vec3<f32>, 9>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(1.0, 0.5, 0.0),
            vec3<f32>(0.5, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.5),
            vec3<f32>(0.0, 0.5, 1.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(0.5, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.5)
        );

        #if DEBUG_CLUSTER
        fn debugCluster(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              var tile : vec3<u32> = getTile(fragCoord);
              let clusterDebug = vec4<f32>(colorSet[u32(tile.z) % 9u], 1.0);
              ORI_FragmentOutput.color = clusterDebug ;
              // ORI_FragmentOutput.color = vec4<f32>(0.5,0.5,0.0,1.0); 
            #endif
          }
      
          fn debugClusterBox(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              let clusterIndex : u32 = getClusterIndex(fragCoord);
              let cluster = clusterBuffer[clusterIndex];
        
              let midPoint : vec3<f32> = (cluster.maxPoint.xyz - cluster.minPoint.xyz) / vec3<f32>(2.0, 2.0, 2.0);
              let center : vec3<f32> = cluster.minPoint.xyz + midPoint;
              let radius : f32 = length(midPoint) ;
        
              let fragToBoundsCenter : vec3<f32> = ORI_VertexVarying.viewPosition.xyz - center;
              let distToBoundsCenter : f32 = length(fragToBoundsCenter);
              let normDist : f32 = distToBoundsCenter / radius;
              ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(normDist,normDist,normDist)  , 1.0);
            #endif
          }
      
          fn debugClusterLightCount(fragCoord:vec4<f32>){
            #if USE_LIGHT
              let clusterIndex : u32 = getClusterIndex(fragCoord);
              let lightCount : u32 = u32(assignTable[clusterIndex].count);
              let lightFactor : f32 = f32(lightCount) / f32(32.0);
              ORI_FragmentOutput.color =  mix(vec4<f32>(0.0, 0.0, 1.0, 1.0), vec4<f32>(1.0, 0.0, 0.0, 1.0), vec4<f32>(lightFactor, lightFactor, lightFactor, lightFactor));
            #endif
          }
          #endif
    `;class Zs{}o(Zs,"sky_vs_frag_wgsl",`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
      @location(0) fragUV: vec2<f32>,
      @location(1) vWorldPos: vec4<f32>,
      @location(2) vWorldNormal: vec3<f32>,
      @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    @vertex
    fn main( 
      @builtin(instance_index) index : u32,
      @location(0) position: vec3<f32>,
      @location(1) normal: vec3<f32>,
      @location(2) uv: vec2<f32>
    ) -> VertexOutput {
      ORI_VertexOut.fragUV = uv;
      let modelMat = models.matrix[u32(index)];
      let vm = globalUniform.viewMat * modelMat;
      let normalMatrix = mat3x3<f32>(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	    ORI_VertexOut.vWorldNormal = normalize( normalMatrix * normal );
      ORI_VertexOut.vWorldPos = modelMat * vec4<f32>(position.xyz,1.0) ;

      var fixProjMat = globalUniform.projMat ;
      fixProjMat[2].z = 1.0 ;//99999.0 / (99999.0 - 1.0) ;
      fixProjMat[3].z = -1.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;

      var fixViewMat = globalUniform.viewMat ;
      fixViewMat[3].x = 0.0 ;
      fixViewMat[3].y = 0.0 ;
      fixViewMat[3].z = 0.0 ;

      var clipPos = fixProjMat * fixViewMat * ORI_VertexOut.vWorldPos;
      ORI_VertexOut.member = clipPos;
      return ORI_VertexOut;
    }
  `),o(Zs,"sky_fs_frag_wgsl",`
    #include "GlobalUniform"

    struct uniformData {
        exposure: f32,
        roughness: f32
    };

    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>,
        #if USE_WORLDPOS
          @location(1) o_Position: vec4<f32>,
        #endif
        #if USEGBUFFER
          @location(2) o_Normal: vec4<f32>,
          @location(3) o_Material: vec4<f32>
        #endif
    };

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_cube<f32>;

    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
      var linRGB1 = max(linRGB, vec3<f32>(0.0));
      linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
      return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>, @location(1) vWorldPos: vec4<f32>, @location(2) vWorldNormal: vec3<f32>) -> FragmentOutput {
        let maxLevel: u32 = textureNumLevels(baseMap);
        let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
        let o_Target: vec4<f32> = vec4<f32>(LinearToGammaSpace(textureColor),1.0) * globalUniform.skyExposure ;
        var normal_rgba8unorm = (vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));

        return FragmentOutput(
          o_Target,
          #if USE_WORLDPOS
              vWorldPos,
          #endif
          #if USEGBUFFER
              vec4<f32>(normal_rgba8unorm,0.0),
              vec4<f32>(0.0,1.0,0.0,0.0)
          #endif
        );
    }
    `);let zd=`
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox{
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex
    {
        count:f32,
        start:f32,
        empty0:f32,
        empty1:f32,
    };

    struct ClustersUniform{
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform : ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable : array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer : array<ClusterBox>;
    #endif

    fn getLight( index:i32 ) -> LightData{
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData ;
    }

    fn linear01Depth(depth : f32) -> f32 {
        return globalUniform.far * globalUniform.near / fma(depth, globalUniform.near-globalUniform.far, globalUniform.far);
    }

    fn getTile(fragCoord : vec4<f32>) -> vec3<u32> {
        var coord = fragCoord ; 
        coord.z = linear01Depth(coord.z) ; 

        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(coord.z) * sliceScale + sliceBias, 0.0));
        return vec3<u32>(u32(coord.x / (clustersUniform.screenWidth / f32(clustersUniform.clusterTileX))),
                        u32(coord.y / (clustersUniform.screenHeight / f32(clustersUniform.clusterTileY))),
                        zTile);
    }

    fn getCluster(fragCoord : vec4<f32>) -> LightIndex {
    let tile = getTile(fragCoord);
    let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
    return assignTable[id];
    }

    #if DEBUG_CLUSTER
        fn getClusterIndex(fragCoord : vec4<f32>) -> u32 {
            let tile = getTile(fragCoord);
            let id = tile.x +
                tile.y * u32(clustersUniform.clusterTileX) +
                tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
            return id;
            // return 0u ;
        }
    #endif
`,Gd=`
#include "BRDF_frag"
#include "LightStruct"
#include "ShadowMapping_frag"

#if USE_IES_PROFILE
  #include "IESProfiles_frag"
#endif



const LUMEN = 10.764;



fn calcAttenuation( d : f32 ,  falloffStart : f32 ,  falloffEnd : f32)-> f32
{
    // Linear falloff.
    return saturate((falloffEnd-d) / (falloffEnd - falloffStart));
}

fn directLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    #if USE_LIGHT
      var L = -normalize(light.direction.xyz) ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var att = light.intensity / LUMEN ;
      if(light.castShadow>=0){
          #if USE_SHADOWMAPING
            att *= shadowStrut.directShadowVisibility[light.castShadow] ; 
          #endif
      }

      #if USE_LAMBERT
        color = vec3<f32>(1.0,0.5,1.0) ;
      #endif 

      #if USE_BRDF
        color = simpleBRDF(albedo,N,V,L,att,lightColor,fragData.Roughness) ;
      #endif 
    #endif 
    return color ;
}

fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , light:LightData ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir);
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    if( abs(dist) < light.range ){
        var L = dir ;
        var atten = 1.0 ;
        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.001) * light.intensity / LUMEN;
        if( light.castShadow >= 0 )
        {
            atten *= shadowStrut.pointShadows[light.castShadow] ;
        }

        #if USE_IES_PROFILE
          atten *= getLightIESProfileAtt(WP,light);
        #endif

        var lightColor = light.lightColor.rgb  ;
        lightColor = getHDRColor(lightColor , light.linear )  ;
        // lightColor = LinearToSrgbBranchless(lightColor.rgb) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,fragData.Roughness))  ;
        #endif 
    } 
    return color ;
}

fn getDistanceAtten(  light:LightData , dist : f32 ) -> f32 {
  return 1.0 - smoothstep(0.0,light.range,dist) ;
}

fn spotLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , light:LightData ) -> vec3<f32> {
    let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir) ;
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    var color = vec3<f32>(0.0) ;
    if( abs(dist) < light.range * 2.0 ){
        var L = dir ;
        let theta = dot(-L, normalize(light.direction));
        let angle = acos(theta) ;
        var atten = 1.0 ;
        var lightColor = light.lightColor.rgb  ;

        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.1) * light.intensity / LUMEN;
        if(angle < light.outerCutOff){
          if(angle > light.innerCutOff){
            atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
          
          
          }
        }else{
          atten = 0.0 ;
        }

        if( light.castShadow >= 0 )
        {
            atten *= shadowStrut.pointShadows[light.castShadow] ;
        }

        #if USE_IES_PROFILE
            atten *= getLightIESProfileAtt(WP,light);
        #endif

        lightColor = getHDRColor(lightColor , light.linear ) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,fragData.Roughness)) ;
        #endif 
    }
    return  color ;
}
`,Vd=`
var<private> PI: f32 = 3.14159265359;


fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
  let x:f32 = position.x;
  let y:f32 = position.y;
  let z:f32 = position.z;

  let qx:f32 = q.x;
  let qy:f32 = q.y;
  let qz:f32 = q.z;
  let qw:f32 = q.w;

  let ix:f32 = qw * x + qy * z - qz * y;
  let iy:f32 = qw * y + qz * x - qx * z;
  let iz:f32 = qw * z + qx * y - qy * x;
  let iw:f32 = -qx * x - qy * y - qz * z;

  var ret: vec3<f32>;
  ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return ret;
}

fn inverse( m:mat3x3<f32>) -> mat3x3<f32>{
  var a00 = m[0][0];
  var a01 = m[0][1];
  var a02 = m[0][2];
  var a10 = m[1][0];
  var a11 = m[1][1];
  var a12 = m[1][2];
  var a20 = m[2][0];
  var a21 = m[2][1];
  var a22 = m[2][2];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  var det = a00 * b01 + a01 * b11 + a02 * b21 ;
  return mat3x3<f32>(
      vec3<f32>(b01/ det, (-a22 * a01 + a02 * a21)/ det, (a12 * a01 - a02 * a11)/ det),
      vec3<f32>(b11/ det, (a22 * a00 - a02 * a20)/ det, (-a12 * a00 + a02 * a10)/ det),
      vec3<f32>(b21/ det, (-a21 * a00 + a01 * a20)/ det, (a11 * a00 - a01 * a10)/ det)
  );
}

fn dir_to_faceId(pt:vec3<f32>) -> i32 {
    //**** nx px ny py nz pz
    var abs_x = abs(pt.x);
    var abs_y = abs(pt.y);
    var abs_z = abs(pt.z);
    var coord = max(max(abs_x, abs_y), abs_z);
    if(coord == -pt.x){  return 0;}
    if(coord == pt.x) { return 1;}

    if(coord == -pt.y){  return 2;}
    if(coord == pt.y) { return 3;}

    if(coord == -pt.z) { return 4;}
    return 5;
  }

  fn convert_xyz_to_cube_uv(x:f32, y:f32, z:f32 ) -> vec2<f32>
  {
    var dir = vec3<f32>(x, y, z);
    var absX = abs(dir.x);
    var absY = abs(dir.y);
    var absZ = abs(dir.z);

    var isXPositive = 0;
    if(dir.x > 0.0){isXPositive = 1;}
    var isYPositive = 0;
    if(dir.y > 0.0){isYPositive = 1;}
    var isZPositive = 0;
    if(dir.z > 0.0){isZPositive = 1;}

    var maxAxis:f32 = 0.0;
    var uc:f32 = 0.0;
    var vc:f32 = 0.0;

    // POSITIVE X
    if (isXPositive == 1 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from +z to -z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = -z;
      vc = y;
    }
    // NEGATIVE X
    if (isXPositive ==0 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from -z to +z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = z;
      vc = y;
    }
    // POSITIVE Y
    if (isYPositive==1 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from +z to -z
      maxAxis = absY;
      uc = x;
      vc = -z;
    }
    // NEGATIVE Y
    if (isYPositive ==0 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -z to +z
      maxAxis = absY;
      uc = x;
      vc = z;
    }
    // POSITIVE Z
    if (isZPositive == 1&& absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = x;
      vc = y;
    }
    // NEGATIVE Z
    if (isZPositive ==0 && absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from +x to -x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = -x;
      vc = y;
    }

    // Convert range from -1 to 1 to 0 to 1
    var u = 0.5f * (uc / maxAxis + 1.0f);
    var v = 0.5f * (vc / maxAxis + 1.0f);

    return vec2(u, v);
  }

    // Returns ±1
    fn signNotZero( v1:vec2<f32>) -> vec2<f32> {
        var v:vec2<f32> = v1;
        if(v.x >= 0.0){
            v.x = 1.0;
        }else{
            v.x = -1.0;
        }
        if(v.y >= 0.0){
            v.y = 1.0;
        }else{
            v.y= -1.0;
        }
        return v;
    }

    fn octEncode( v:vec3<f32> ) -> vec2<f32> {
        var l1norm = abs(v.x) + abs(v.y) + abs(v.z);
        var result = v.xy * (1.0 / l1norm);
        if (v.z < 0.0) {
            result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
        }
        return result;
    }

    // Returns a unit vector. Argument o is an octahedral vector packed via octEncode,on the [-1, +1] square*/
    fn octDecode( o:vec2<f32> ) -> vec3<f32> {
        var v = vec3<f32>(o.x, o.y, 1.0 - abs(o.x) - abs(o.y));
        if (v.z < 0.0) {
            var tmp = (1.0 - abs(v.yx)) * signNotZero(v.xy);
            v.x = tmp.x;
            v.y = tmp.y;
        }
        return normalize(v);
    }

    fn Linear01Depth(z:f32,near:f32,far:f32)-> f32{
        let ZBufferZ = (-1.0+(far/near)) / far;
        let ZBufferW = near /far ;
        return 1.0 / (ZBufferZ * z + ZBufferW) ;
    }

    
    fn LinearizeDepth( depth:f32 , nearPlane:f32 , farPlane:f32 )-> f32 {
      var z = depth * 2.0 - 1.0;
      return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - z * (farPlane - nearPlane));
    }

    fn QuaternionToMatrix(q: vec4<f32>) -> mat4x4<f32> {
      // If q is guaranteed to be a unit quaternion, s will always
      // be 1.  In that case, this calculation can be optimized out.
      //float norm = GetNorm (q);
      //float s = (norm > 0.0) ? 2.0/norm : 0;

      var result: mat4x4<f32>;
  
      // Precalculate coordinate products
      let x = q.x * 2.0;
      let y = q.y * 2.0;
      let z = q.z * 2.0;
      let xx = q.x * x;
      let yy = q.y * y;
      let zz = q.z * z;
      let xy = q.x * y;
      let xz = q.x * z;
      let yz = q.y * z;
      let wx = q.w * x;
      let wy = q.w * y;
      let wz = q.w * z;
  
      // Calculate 3x3 matrix from orthonormal basis
      result[0][0] = 1.0 - (yy + zz);
      result[0][1] = xy + wz;
      result[0][2] = xz - wy;
      result[0][3] = 0.0;
  
      result[1][0] = xy - wz;
      result[1][1] = 1.0 - (xx + zz);
      result[1][2] = yz + wx;
      result[1][3] = 0.0;
  
      result[2][0] = xz + wy;
      result[2][1] = yz - wx;
      result[2][2] = 1.0 - (xx + yy);
      result[2][3] = 0.0;
  
      result[3][0] = 0.0;
      result[3][1] = 0.0;
      result[3][2] = 0.0;
      result[3][3] = 1.0;

      return result;
    }

    fn MakeScaleMatrix(scale: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          scale.x, 0.0, 0.0, 0.0,
          0.0, scale.y, 0.0, 0.0,
          0.0, 0.0, scale.z, 0.0,
          0.0, 0.0, 0.0, 1.0,
        );
    }

    fn MakeRotationMatrix(rotationQuaternion: vec4<f32>) -> mat4x4<f32> {
        return QuaternionToMatrix(rotationQuaternion);
    }

    fn MakeTranslationMatrix(translation: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          translation.x, translation.y, translation.z, 1.0,
        );
    }

    fn MakeMatrix4x4(scale: vec3<f32>, rotationQuaternion: vec4<f32>, translation: vec3<f32>) -> mat4x4<f32> {
        var scaleMat: mat4x4<f32> = MakeScaleMatrix(scale);
        var rotationMat: mat4x4<f32> = MakeRotationMatrix(rotationQuaternion);
        var translationMat: mat4x4<f32> = MakeTranslationMatrix(translation);
        return translationMat * scaleMat * rotationMat;
    }

    fn mixMatrix4x4(a: mat4x4<f32>, b: mat4x4<f32>, t:f32) -> mat4x4<f32> {
      return a * (1.0 - t) + b * t;
      // return mat4x4<f32>(
      //   mix(a[0], b[0], t),
      //   mix(a[1], b[1], t),
      //   mix(a[2], b[2], t),
      //   mix(a[3], b[3], t)
      // );
    }

    fn decodeDepth( color:vec4<f32> ) -> f32{
      var depth = 0.0 ;
      const bitShifts = vec4<f32>(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0); 
      depth = dot(color, bitShifts);
      return depth;
    }

    fn encodeDepth( depth:f32 ) -> vec4<f32>{
      const bitSh  = vec4<f32>(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
      const bitMsk = vec4<f32>(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
      var comp:vec4<f32>;
      comp  = depth * bitSh;
      comp  = fract(comp);
      comp -= comp.xxyz * bitMsk;
      return comp;
    }
`,Hd=`
        struct MaterialUniform {
          transformUV1:vec4<f32>,
          transformUV2:vec4<f32>,

          baseColor: vec4<f32>,
          emissiveColor: vec4<f32>,
          materialF0: vec4<f32>,
          envIntensity: f32,
          normalScale: f32,
          roughness: f32,
          metallic: f32,
          ao: f32,

          roughness_min: f32,
          roughness_max: f32,
          metallic_min: f32,
          metallic_max: f32,
          emissiveIntensity: f32,
          alphaCutoff: f32,
          ior: f32,
          clearcoatColor: vec4<f32>,
          clearcoatWeight: f32,
          clearcoatFactor: f32,
          clearcoatRoughnessFactor: f32,
        };
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;
      `,Xd=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,Wd=`
    #include "Common_frag"
    #include "GlobalUniform"

    fn UnLit(){
        
        let alpha = ORI_ShadingInput.BaseColor.a ;
        ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.BaseColor.rgb * alpha , alpha) ;

        #if USE_WORLDPOS
            ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
        #endif

        #if USEGBUFFER
            var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
            normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
            ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
            ORI_FragmentOutput.material = vec4<f32>(1.0,1.0,0.0,1.0);
        #endif
    }

    fn debugFragmentOut(){

    }
`;class ya{static groupBindingAndFunctions(e,t){return`
            struct JointsMatrix {
                matrix : array<mat4x4<f32>>
            };

            @group(${e}) @binding(${t})
            var<storage, read> jointsMatrixIndexTable: array<f32>;

            @group(${e}) @binding(${t+1})
            var<storage, read> jointsInverseMatrix: JointsMatrix;

            @group(${e}) @binding(${t+2})
            var<storage, read> jointsIndexMapingTable: array<f32>;

            const MAX_JOINT_NUM = 8;
            fn getSkeletonWorldMatrix(joints: array<f32, MAX_JOINT_NUM>, weights: array<f32, MAX_JOINT_NUM>, num: u32) -> mat4x4<f32> {
                var result: mat4x4<f32>;
                for(var i: u32 = 0; i < num; i = i + 1) {
                    let jointId = i32(joints[i]);
                    let jointIndex = u32(jointsIndexMapingTable[jointId]);
                    let jointMatrixIndex = u32(jointsMatrixIndexTable[jointIndex]);
                    let joint = models.matrix[jointMatrixIndex] * jointsInverseMatrix.matrix[jointId] * weights[i];
                    result += joint;
                }
                return result;
            }

            fn getSkeletonWorldMatrix_4(joints: vec4<f32>, weights: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints.x, joints.y, joints.z, joints.w,
                    0, 0, 0, 0,
                ), array<f32, MAX_JOINT_NUM>(
                    weights.x, weights.y, weights.z, weights.w,
                    0, 0, 0, 0,
                ), 4);
            }
    
            fn getSkeletonWorldMatrix_8(joints0: vec4<f32>, weights0: vec4<f32>, joints1: vec4<f32>, weights1: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints0.x, joints0.y, joints0.z, joints0.w,
                    joints1.x, joints1.y, joints1.z, joints1.w,
                ), array<f32, MAX_JOINT_NUM>(
                    weights0.x, weights0.y, weights0.z, weights0.w,
                    weights1.x, weights1.y, weights1.z, weights1.w,
                ), 8);
            }
        `}}class We{static getMorphTargetShaderBinding(e,t){return`
            fn blendMorphTargetPosition(vertexID:i32, posIn:vec3<f32>) -> vec3<f32>{
                let offset:i32 = vertexID * 3;
                var pos = posIn * morphTargetConfig.morphBaseInfluence;
                pos += vec3<f32>(morphTargetOpPositions[offset], morphTargetOpPositions[offset + 1], morphTargetOpPositions[offset + 2]);
                return pos;
            }

            #if USE_MORPHNORMALS
                fn blendMorphTargetNormal(vertexID:i32, normalIn:vec3<f32>) -> vec3<f32>{
                    let offset:i32 = vertexID * 3;
                    var normal = normalIn * morphTargetConfig.morphBaseInfluence;
                    normal += vec3<f32>(morphTargetOpNormals[offset], morphTargetOpNormals[offset + 1], morphTargetOpNormals[offset + 2]);
                    return normal;
                }
            #endif

            struct MorphTargetConfigData {
                morphBaseInfluence:f32,
                morphTargetCount:f32,
                totalVertexCount:f32,
                computeWorkGroupXY:f32,
            };
            
            @group(${e}) @binding(${t})
            var<uniform> morphTargetConfig: MorphTargetConfigData;
            
            @group(${e}) @binding(${t+1})
            var<storage,read> morphTargetOpPositions: array<f32>;

            #if USE_MORPHNORMALS
                @group(${e}) @binding(${t+2})
                var<storage,read> morphTargetOpNormals: array<f32>;
            #endif
`}static getMorphTargetAttr(e){return`@location(${e}) vIndex: f32,`}static getMorphTargetCalcVertex(){return`
            vertexPosition = blendMorphTargetPosition(i32(vertex.vIndex), vertexPosition);

            #if USE_MORPHNORMALS
                vertexNormal = blendMorphTargetNormal(i32(vertex.vIndex), vertexNormal);
            #endif
        `}}o(We,"CsMain",`
        struct MorphTargetConfigData {
            morphBaseInfluence:f32,
            morphTargetCount:f32,
            totalVertexCount:f32,
            computeWorkGroupXY:f32,
        };

        @group(0) @binding(0) var<uniform> morphTargetConfig: MorphTargetConfigData;
        @group(0) @binding(1) var<storage, read> morphTargetInfluence : array<f32>;
        @group(0) @binding(2) var<storage, read> morphTargetPositions : array<f32>;
        @group(0) @binding(3) var<storage, read_write> morphTargetOpPositions : array<f32>;
        
        #if USE_MORPHNORMALS
            @group(0) @binding(4) var<storage, read> morphTargetNormals : array<f32>;
            @group(0) @binding(5) var<storage, read_write> morphTargetOpNormals : array<f32>;
        #endif
        
        @compute @workgroup_size( 8 , 8 , 1 )
        fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
        {
            let vertexIndex:i32 = i32(globalInvocation_id.y) * i32(morphTargetConfig.computeWorkGroupXY) + i32(globalInvocation_id.x);
        
            let morphTargetCount:i32 = i32(morphTargetConfig.morphTargetCount);
            let totalVertexCount:i32 = i32(morphTargetConfig.totalVertexCount);
            var vertexPosition:vec3<f32> = vec3<f32>(0.0);
            var vertexNormal:vec3<f32> = vec3<f32>(0.0);
            if(vertexIndex < totalVertexCount)
            {
                for(var i:i32 = 0; i < morphTargetCount; i ++){
                    let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                    let morphPosition = vec3<f32>(morphTargetPositions[offset], morphTargetPositions[offset + 1], morphTargetPositions[offset + 2]);
                    vertexPosition += morphTargetInfluence[i] * morphPosition;
                }

                var writeOffset = vertexIndex * 3;
                //op position
                morphTargetOpPositions[writeOffset] = vertexPosition.x;
                morphTargetOpPositions[writeOffset + 1] = vertexPosition.y;
                morphTargetOpPositions[writeOffset + 2] = vertexPosition.z;

                #if USE_MORPHNORMALS
                    for(var i:i32 = 0; i < morphTargetCount; i ++){
                        let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                        let morphNormal = vec3<f32>(morphTargetNormals[offset], morphTargetNormals[offset + 1], morphTargetNormals[offset + 2]);
                        vertexNormal += morphTargetInfluence[i] * morphNormal;
                    }

                    //op normal
                    morphTargetOpNormals[writeOffset] = vertexNormal.x;
                    morphTargetOpNormals[writeOffset + 1] = vertexNormal.y;
                    morphTargetOpNormals[writeOffset + 2] = vertexNormal.z;
                #endif
            }
        }
`);let Kd=`
    #if USE_MORPHTARGETS
    ${We.getMorphTargetShaderBinding(3,0)}
    #endif

    #if USE_SKELETON
    ${ya.groupBindingAndFunctions(3,0)} 
    #endif

    struct VertexAttributes{
    @builtin(instance_index) index : u32,
    @location(0) position: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
    @location(3) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(4) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(5) joints0: vec4<f32>,
            @location(6) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
            @location(7) joints1: vec4<f32>,
            @location(8) weights1: vec4<f32>,
        #endif
        #elseif USE_MORPHTARGETS
            ${We.getMorphTargetAttr(5)}
        #endif
    #elseif USE_SKELETON
        @location(4) joints0: vec4<f32>,
        @location(5) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
        @location(6) joints1: vec4<f32>,
        @location(7) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        ${We.getMorphTargetAttr(4)}
    #endif
    }

    struct VertexOutput {
    @location(0) varying_UV0: vec2<f32>,
    @location(1) varying_UV1: vec2<f32>,
    @location(2) varying_ViewPos: vec4<f32>,
    @location(3) varying_Clip: vec4<f32>,
    @location(4) varying_WPos: vec4<f32>,
    @location(5) varying_WNormal: vec3<f32>,
    @location(6) varying_Color: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(7) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(8) varying_Tangent: vec4<f32>,
    #endif

    @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    fn ORI_Vert(vertex:VertexAttributes){
    var vertexPosition = vertex.position;
    var vertexNormal = vertex.normal;

    #if USE_MORPHTARGETS
    ${We.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
            ORI_MATRIX_M *= skeletonNormal ;
        #else
            let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
            ORI_MATRIX_M *= skeletonNormal ;
        #endif
    #endif

    #if USE_TANGENT
        ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
    #endif

    ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));

    var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
    var viewPosition = ORI_MATRIX_V * worldPos;
    var clipPosition = ORI_MATRIX_P * viewPosition ;

    ORI_CameraWorldDir = normalize(ORI_CAMERAMATRIX[3].xyz - worldPos.xyz) ;

    ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
    ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
    ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
    ORI_VertexOut.varying_Clip = clipPosition ;
    ORI_VertexOut.varying_WPos = worldPos ;
    ORI_VertexOut.varying_WPos.w = f32(vertex.index);
    ORI_VertexOut.varying_WNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;
    ORI_VertexOut.member = clipPosition ;
    }
`,Yd=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  rectClip: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,jd=`
    struct IrradianceVolumeData {
        //0
        orientationIndex:f32,
            hysteresis:f32,
            OctRTSideSize:f32,
            OctRTMaxSize:f32,

            //1
            startX:f32,
            startY:f32,
            startZ:f32,
            ProbeSpace:f32,

            //2
            gridXCount:f32,
            gridYCount:f32,
            gridZCount:f32,
            maxDistance:f32,

            //3
            depthSharpness:f32,
            ProbeSourceTextureSize:f32,
            ProbeSize:f32,
            bounceIntensity:f32,

            //4
            probeRoughness:f32,
            normalBias:f32,
            irradianceChebyshevBias:f32,
            rayNumber:f32,

            //5
            irradianceDistanceBias:f32,
            indirectIntensity:f32,
            ddgiGamma:f32,
            lerpHysteresis:f32,
            //6

            debugX:f32,
            debugY:f32,
            debugZ:f32,
            slot0:f32,

            //..
            v7:vec4<f32>,
    }
`,qd=`
    #include "MathShader"
    #include "FastMathShader"
    #include "InstanceUniform"

    var<private> ORI_MATRIX_P: mat4x4<f32>;
    var<private> ORI_MATRIX_V: mat4x4<f32>;
    var<private> ORI_MATRIX_M: mat4x4<f32>;
    var<private> ORI_MATRIX_PV: mat4x4<f32>;
    var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
    var<private> ORI_MATRIX_World: mat4x4<f32>;
    var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
    var<private> ORI_NORMALMATRIX: mat3x3<f32>;
    var<private> ORI_CameraWorldDir: vec3<f32>;

    var<private> TIME: vec4<f32>;
    var<private> MOUSE: vec4<f32>;
    var<private> SCREEN: vec4<f32>;

    var<private> ProjectionParams: vec4<f32>;

    fn vertex_inline(vertex:VertexAttributes){
        TIME.x = globalUniform.frame;
        TIME.y = globalUniform.time;
        TIME.z = globalUniform.delta;

        MOUSE.x = globalUniform.mouseX;
        MOUSE.y = globalUniform.mouseY;

        SCREEN.x = globalUniform.windowWidth;
        SCREEN.y = globalUniform.windowHeight;

        ProjectionParams.x = globalUniform.near;
        ProjectionParams.y = globalUniform.far;
        ProjectionParams.z = 1.0 + 1.0 / globalUniform.far;

        ORI_MATRIX_P = globalUniform.projMat ;
        ORI_MATRIX_V = globalUniform.viewMat ;
        ORI_MATRIX_PV = ORI_MATRIX_P * ORI_MATRIX_V ;
        ORI_MATRIX_PVInv = globalUniform.pvMatrixInv ;
        ORI_CAMERAMATRIX = globalUniform.cameraWorldMatrix ;

        ORI_MATRIX_M = models.matrix[u32(vertex.index)];
            
        #if USE_INSTANCEDRAW
            let modelID = instanceDrawID.matrixIDs[vertex.index];
            ORI_MATRIX_M = models.matrix[modelID];
        #endif
    }
`,$d=`
  #include "GlobalUniform"
  #include "FragmentVarying"
  #include "ColorPassFragmentOutput"
  #include "ShadingInput"

  var<private> ORI_FragmentOutput: FragmentOutput;
  var<private> ORI_VertexVarying: FragmentVarying;
  var<private> ORI_ShadingInput: ShadingInput;
  @fragment
  fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
    #if USE_WORLDPOS
      ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
    #endif
    #if USEGBUFFER
      ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_ShadingInput.Normal.rgb ,1.0); 
      ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
    #endif
    frag();
    #if USE_DEBUG
      debugFragmentOut();
    #endif

    return ORI_FragmentOutput ;
  }
`,Zd=`
    #include "WorldMatrixUniform"
    #include "VertexAttributes_vert"
    #include "GlobalUniform"
    #include "Inline_vert"
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }
`,Qd=`
    @group(1) @binding(auto)
    var brdflutMapSampler: sampler;
    @group(1) @binding(auto)
    var brdflutMap: texture_2d<f32>;
`,Jd=`
    @group(1) @binding(auto)
    var prefilterMapSampler: sampler;
    @group(1) @binding(auto)
    var prefilterMap: texture_cube<f32>;
    @group(1) @binding(auto)
    var envMapSampler: sampler;
    @group(1) @binding(auto)
    var envMap: texture_cube<f32>;
`,ef=`
  struct GlobalUniform {
    projMat: mat4x4<f32>,
    viewMat: mat4x4<f32>,
    cameraWorldMatrix: mat4x4<f32>,
    pvMatrixInv : mat4x4<f32>,
    shadowMatrix: array<mat4x4<f32>,8>,
    CameraPos: vec3<f32>,
    
    frame: f32,
    time: f32,
    delta: f32,
    shadowBias: f32,
    skyExposure: f32,
    renderPassState:f32,
    quadScale: f32,
    hdrExposure: f32,
  
    renderState_left: i32,
    renderState_right: i32,
    renderState_split: f32,

    mouseX: f32,
    mouseY: f32,
    windowWidth: f32,
    windowHeight: f32,

    near: f32,
    far: f32,

    pointShadowBias: f32,
    shadowMapSize: f32,
    shadowSoft: f32,
  };

  @group(0) @binding(0)
  var<uniform> globalUniform: GlobalUniform;
`,tf=`
    #if USE_INSTANCEDRAW
        struct InstanceUniform {
            matrixIDs : array<i32>
        };
        @group(2) @binding(7)
        var<storage, read> instanceDrawID : InstanceUniform;
    #endif
`,rf=`
    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;
`,sf=`
  fn Pow3(  x : f32 ) -> f32
  {
      var xx = x*x;
      return x * xx;
  }

  fn Pow4(  x : f32 ) -> f32
  {
      var xx = x*x;
      return xx * xx;
  }

  fn pow5(x: f32) -> f32 {
      var x2 = x * x;
      return x2 * x2 * x;
  }

  fn rcp( x:f32 ) -> f32
  {
      return 1.0 / x;
  }

  fn rsqrt3( a : vec3<f32> ) -> vec3<f32>
  {
    return pow(a, vec3<f32>(-0.5));
  }

  fn rsqrt( a : f32 ) -> f32
  {
    return pow(a, -0.5);
  }
`,af=`
    fn perturbNormal(  worldPos:vec3<f32>,  surf_norm:vec3<f32>,  mapN:vec3<f32> , normalScale:f32 , face:f32 ) -> vec3<f32> {
        var q0 = vec3<f32>( dpdx( worldPos.x ), dpdx( worldPos.y ), dpdx( worldPos.z ) );
        var q1 = vec3<f32>( dpdy( worldPos.x ), dpdy( worldPos.y ), dpdy( worldPos.z ) );
        var st0 = dpdx( ORI_VertexVarying.fragUV0.xy );
        var st1 = dpdy( ORI_VertexVarying.fragUV0.xy );
        var N = surf_norm;
        var q1perp = cross( q1, N );
        var q0perp = cross( N, q0 );
        var T = q1perp * st0.x + q0perp * st1.x;
        var B = q1perp * st0.y + q0perp * st1.y;

        var det = max( dot( T, T ), dot( B, B ) );
        var scale = 1.0 ;
        if( det != 0.0 ){
            scale = inverseSqrt( det ) ;
        }
        scale *= normalScale;
        return normalize( (T * ( -mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z ) * face ) ;
    }

    fn unpackNormalMap( normal : vec3<f32> ) -> vec3<f32>
    {
        var normalTex = vec3<f32>( normal.xyz * 2.0 - 1.0 ) ;
        return normalize(normalTex);
    }

    fn unPackNormal(normal : vec3<f32> , height:f32 ) -> vec3<f32>{
        var face = 1.0 ;
        if(ORI_VertexVarying.face){
            face = 1.0 ;
        }else{
            face = -1.0 ;
        }

        #if USE_RGNORMAL
            return unPackRGNormal(normal,height,face);
        #else
            var n = normal ;
            #if USE_NORMALFILPY
            n.y = 1.0 - n.y ; 
            #endif
            
            var mapNormal: vec3<f32> = unpackNormalMap(n) ;
            return perturbNormal(ORI_VertexVarying.vWorldPos.xyz , ORI_VertexVarying.vWorldNormal.xyz , mapNormal , height , face  ) ;
        #endif
    }

    fn unPackRGNormal(normal : vec3<f32> , height:f32 , face:f32) -> vec3<f32> {
        var d = normal.rg * 2.0 - 1.0 ;
        var l = 1.0 - saturate(dot(d,d));
        var s = sqrt(l);
        var rg = d * height ; 
        var mapNormal = vec3<f32>(rg,s);
        var outN = perturbNormal(ORI_VertexVarying.vWorldPos.xyz,ORI_VertexVarying.vWorldNormal,mapNormal,1.0,face) ;
        return outN ;
    }
`,nf=`
    struct FragmentVarying {
        @location(0) fragUV0: vec2<f32>,
        @location(1) fragUV1: vec2<f32>,
        @location(2) viewPosition: vec4<f32>,
        @location(3) fragPosition: vec4<f32>,
        @location(4) vWorldPos: vec4<f32>,
        @location(5) vWorldNormal: vec3<f32>,
        @location(6) vColor: vec4<f32>,

        #if USE_SHADOWMAPING
            @location(7) vShadowPos: vec4<f32>,
        #endif

        #if USE_TANGENT
            @location(8) TANGENT: vec4<f32>,
        #endif
        
        @builtin(front_facing) face: bool,
        @builtin(position) fragCoord : vec4<f32>
    };
`,of=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>,
        #endif
        // @builtin(frag_depth) out_depth: f32
    };
`,hf=`
    struct ShadingInput{
        BaseColor:vec4<f32>,
        Roughness:f32,
        Metallic:f32,
        Specular:f32,
        EmissiveColor:vec4<f32>,
        SurfaceColor:vec4<f32>,
        Normal:vec3<f32>,
        Tangent:vec4<f32>,
        WorldPositionOffset:vec3<f32>,
        AmbientOcclusion:f32,
        PixelDepthOffset:f32,

        Opacity:f32,
        OpacityMask:f32,

        Refraction:f32,
    }
`,lf=`
    #if USE_IES_PROFILE 
        @group(1) @binding(auto)
        var iesTextureArrayMapSampler : sampler;
        @group(1) @binding(auto)
        var iesTextureArrayMap: texture_2d_array<f32> ;
    #endif

    fn getLightIESProfileAtt( wPos : vec3<f32> , light:LightData ) -> f32
    {
        #if USE_IES_PROFILE 
            let tangent = vec3<f32>(1.0,0.0,0.0);
            let lightBitangent = normalize( cross( tangent, light.direction ) );
            let lightMatrix = mat4x4( vec4<f32>(light.direction.xyz, 0.0), vec4<f32>(lightBitangent.xyz, 0.0), vec4<f32>(tangent.xyz, 0.0), vec4<f32>(0.0, 0.0, 0.0, 1.0) );
            let lightMatrixInv = transpose(lightMatrix);
            let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
            let l = lightPos - wPos; 
            let toLight = normalize(l);
            let localToLight = (vec4<f32>(toLight.xyz, 0.0) * lightMatrixInv).xyz;
            let dotProd = dot(toLight, light.direction);
            let angle = asin(dotProd);
            let normAngle = (angle / PI) + 0.5 ;
            let tangentAngle = atan2( -localToLight.z, -localToLight.x ); 
            let normTangentAngle = tangentAngle / (PI * 2.0) + 0.5 ;
            if(light.ies >= 0.0){
                return textureSampleLevel(iesTextureArrayMap, iesTextureArrayMapSampler, vec2<f32>(normAngle , normTangentAngle) , i32(light.ies) , 0.0).r ;
            }else{
                return 1.0;
            }
        #else 
            return 1.0;
        #endif
    }

`,uf=`
    #if USE_SHADOWMAPING
    @group(1) @binding(auto) var shadowMapSampler: sampler_comparison;
    @group(1) @binding(auto) var shadowMap: texture_depth_2d_array;
    #endif

    @group(1) @binding(auto) var pointShadowMapSampler: sampler;
    @group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array;

            struct ShadowStruct{
      directShadowVisibility: array<f32, 8>,
        pointShadows: array<f32, 8>,
            }

    var<private>shadowStrut: ShadowStruct;

            fn directShadowMaping(shadowBias: f32)  {
      for (var i: i32 = i32(0); i < i32(clustersUniform.numLights); i = i + 1) {
        var light = lightBuffer[i];
        var shadowIndex = i32(light.castShadow);
        shadowStrut.directShadowVisibility[shadowIndex] = 1.0;
        #if USE_SHADOWMAPING


        if (shadowIndex < 0 && light.lightType != DirectLightType) {
          continue;
        }

        var shadowPosTmp = globalUniform.shadowMatrix[shadowIndex] * vec4<f32>(ORI_VertexVarying.vWorldPos.xyz, 1.0);
        var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
        var varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
        var bias = max(shadowBias * (1.0 - dot(ORI_ShadingInput.Normal, light.direction)), 0.000005);

        // if(varying_shadowUV.y>=1.0) {
        //     shadowStrut.directShadowVisibility[shadowIndex] = 2.0 ;
        //     continue;
        // }
        if (varying_shadowUV.x <= 1.0 && varying_shadowUV.x >= 0.0 && varying_shadowUV.y <= 1.0 && varying_shadowUV.y >= 0.0 && shadowPosTmp.z <= 1.0) {
          var texelSize = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
          var oneOverShadowDepthTextureSize = texelSize;
          var size = 1;
          var sizeBlock = size * 2 + 1;
          var sizeBlockA = sizeBlock * sizeBlock;
          var visibility = 0.0;
          for (var y = -size; y <= size; y++) {
            for (var x = -size; x <= size; x++) {
              var offset = vec2<f32>(f32(x), f32(y)) * oneOverShadowDepthTextureSize / f32(sizeBlock);
              visibility += textureSampleCompare(
                shadowMap,
                shadowMapSampler,
                varying_shadowUV + offset,
                shadowIndex,
                shadowPos.z - bias
              );
            }
          }
          visibility /= f32(sizeBlockA);
          shadowStrut.directShadowVisibility[shadowIndex] = visibility + 0.001;
        }
        #endif
      }
    }

            fn pointShadowMapCompare(shadowBias: f32){
      let worldPos = ORI_VertexVarying.vWorldPos.xyz;
      let offset = 0.1;
      let lightIndex = getCluster(ORI_VertexVarying.fragCoord);
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count, 0.0);
      for (var i: i32 = i32(start); i < i32(end); i = i + 1) {
        let light = getLight(i);
        shadowStrut.pointShadows[light.castShadow] = 1.0;

        #if USE_SHADOWMAPING
        if (light.castShadow < 0 || light.lightType == DirectLightType) {
          continue;
        }
        let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
        var shadow = 0.0;
        let frgToLight = worldPos - lightPos.xyz;
        var dir: vec3<f32> = normalize(frgToLight);
        var len = length(frgToLight);
        var bias = max(shadowBias * globalUniform.far * (1.0 - dot(ORI_ShadingInput.Normal, dir)), 0.005);

        #if USE_PCF_SHADOW
        let samples = 4.0;
        for (var x: f32 = -offset; x < offset; x += offset / (samples * 0.5)) {
          for (var y: f32 = -offset; y < offset; y += offset / (samples * 0.5)) {
            for (var z: f32 = -offset; z < offset; z += offset / (samples * 0.5)) {
              let offsetDir = normalize(dir.xyz + vec3<f32>(x, y, z));
              var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
              depth *= globalUniform.far;
              if ((len - bias) > depth) {
                shadow += 1.0 * dot(offsetDir, dir.xyz);
              }
            }
          }
        }
        shadow = min(max(shadow / (samples * samples * samples), 0.0), 1.0);
        #endif

        #if USE_SOFT_SHADOW
        let vDis = length(globalUniform.CameraPos.xyz - worldPos.xyz);
        let sampleRadies = globalUniform.shadowSoft;
        let samples = 20;
        for (var j: i32 = 0; j < samples; j += 1) {
          let offsetDir = normalize(dir.xyz + sampleOffetDir[j] * sampleRadies);
          var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
          depth *= globalUniform.far;
          if ((len - bias) > depth) {
            shadow += 1.0 * dot(offsetDir, dir.xyz);
          }
        }
        shadow = min(max(shadow / f32(samples), 0.0), 1.0);
        #endif

        #if USE_HARD_SHADOW
        var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, dir.xyz, light.castShadow, 0);
        depth *= globalUniform.far;
        if ((len - bias) > depth) {
          shadow = 1.0;
        }
        #endif

        shadowStrut.pointShadows[light.castShadow] = 1.0 - shadow;
        #endif
      }
    }

    #if USE_SOFT_SHADOW
    var<private>sampleOffetDir : array<vec3<f32>, 20> = array<vec3<f32>, 20>(
      vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, -1.0, 1.0), vec3<f32>(-1.0, -1.0, 1.0), vec3<f32>(-1.0, 1.0, 1.0),
      vec3<f32>(1.0, 1.0, -1.0), vec3<f32>(1.0, -1.0, -1.0), vec3<f32>(-1.0, -1.0, -1.0), vec3<f32>(-1.0, 1.0, -1.0),
      vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, -1.0, 0.0), vec3<f32>(-1.0, -1.0, 0.0), vec3<f32>(-1.0, 1.0, 0.0),
      vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(-1.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, -1.0), vec3<f32>(-1.0, 0.0, -1.0),
      vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(0.0, -1.0, 1.0), vec3<f32>(0.0, -1.0, -1.0), vec3<f32>(0.0, 1.0, -1.0),
    );
    #endif
`,cf=`
#include "IrradianceVolumeData_frag"
    fn pow3(  x : f32 ) -> f32
    {
        var xx = x*x;
        return x * xx;
    }

    struct IrradianceField {
        probeStartPosition: vec4<f32>,
        probeCounts:vec4<f32>,
        probeStep:f32,
        irradianceTextureWidth:f32,
        irradianceTextureHeight:f32,
        irradianceProbeSideLength:f32,
    };

    @group(1) @binding(auto)
    var irradianceMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceMap: texture_2d<f32>;
    @group(1) @binding(auto)
    var irradianceDepthMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceDepthMap: texture_2d<f32>;

    @group(2) @binding(6)
    var<storage,read> irradianceData : IrradianceVolumeData ;

    var<private> irradianceFieldSurface: IrradianceField;
    var<private> energyPreservation: f32 = 0.85;
    var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

    fn getIrradianceFieldSurface() -> IrradianceField{
        let data = irradianceData ;
        irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
        irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
        irradianceFieldSurface.probeStep = data.ProbeSpace;
        irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
        return irradianceFieldSurface;
    }

    fn rotateDir(n:vec3<f32>) -> vec3<f32>{
       return normalize(applyQuaternion(-n, quaternion));
    }

    fn square1f(v:f32) -> f32 {
        return v * v ;
     }

   fn square(v:vec3<f32>) -> vec3<f32>{
      return v*v;
   }

    fn getIrradiance() -> vec4<f32>{
        var irradiance = sampleIrradianceField();
        var outerVolumeFactor:f32 = getOuterVolume(irradianceFieldSurface, ORI_VertexVarying.vWorldPos.xyz);
        irradiance *= outerVolumeFactor;
        return irradiance ;
    }
    
    fn debugProbe(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0);
        return probeIrradiance;
    }
    
    fn debugProbeDepth(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);
        
        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV ,0.0);
        probeIrradiance.x = probeIrradiance.x / irradianceData.maxDistance;
        probeIrradiance.y = 0.0;
        probeIrradiance.z = 0.0;
        probeIrradiance.w = 1.0;
        return probeIrradiance;
    }
    
    fn getOuterVolume(L:IrradianceField, position:vec3<f32>) -> f32{
        let halfWidth:vec3<f32> = 0.5 * (L.probeCounts.xyz - 1.0) * L.probeStep;
        let edgeWidth:vec3<f32> = halfWidth + L.probeStep;
        let centerPosition:vec3<f32> = halfWidth + L.probeStartPosition.xyz;
        let clampPos = min(edgeWidth, abs(position - centerPosition));
        
        let factorX = getOuterAxis(clampPos.x, edgeWidth.x, L.probeStep);
        let factorY = getOuterAxis(clampPos.y, edgeWidth.y, L.probeStep);
        let factorZ = getOuterAxis(clampPos.z, edgeWidth.z, L.probeStep);
        return factorX * factorY * factorZ;
    }
    
    fn getOuterAxis(current:f32, edge:f32, space:f32) -> f32{
        return clamp((edge - current) / space, 0.0, 1.0);
    }

    fn getBaseGridCoord(L:IrradianceField, X:vec3<f32>) -> vec3<i32> {
        var offsetIndex = (X - L.probeStartPosition.xyz) / irradianceFieldSurface.probeStep;
        return clamp(vec3<i32>(offsetIndex.xyz), vec3<i32>(0), vec3<i32>(L.probeCounts.xyz) - 1);
    }

    fn gridCoordToProbeIndex(L:IrradianceField, grid:vec3<i32>) -> i32
    {
        return grid.x + i32(L.probeCounts.x) * grid.z + grid.y * i32(L.probeCounts.z * L.probeCounts.x);
    }

    fn gridCoordToPosition(L:IrradianceField, grid:vec3<i32>) -> vec3<f32>
    {
        var pos:vec3<f32> = vec3<f32>(grid.xyz) * L.probeStep + L.probeStartPosition.xyz;
        return pos;
    }

    fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
    {
        var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
        uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
        uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
        return uv ;
    }

    fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
    {
        var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
        var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetZ = probeID / blockCount ;

        var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

        var blockOffset = vec2<f32>(0.0);
        blockOffset.x = f32(offsetX) * size;
        blockOffset.y = f32(offsetY) * size + f32(offsetZ) * irradianceFieldSurface.probeCounts.z * size;

        let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
        var probeCounts:vec3<f32> = irradianceFieldSurface.probeCounts.xyz;

        var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
        var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

        pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

        return pixelCoord + 1.0 ;
    }

    fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
    {
      var pixelCoord = pixelCoord0;
      let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
      let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
      let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
      let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
      let col:i32 = pixelCoord.y / pixelCountYMax;
      pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
      pixelCoord.y = pixelCoord.y % pixelCountYMax;
      return pixelCoord;
    }

    var<private> wpNormal:vec3<f32> ;
    fn sampleIrradianceField() -> vec4<f32>{
        wpNormal = ORI_ShadingInput.Normal.xyz ;
        var wo:vec3<f32> = ORI_CameraWorldDir ;
        var wsN:vec3<f32> = normalize(wpNormal);
        var direction:vec3<f32> = wpNormal;
        var worldPosition: vec3<f32> = ORI_VertexVarying.vWorldPos.xyz;
   
        getIrradianceFieldSurface();

        let surfaceBias = (wsN + 3.0 * wo) * irradianceData.normalBias ;

        var irradiance = vec3<f32>(0.0, 0.0, 0.0);
        var accumulatedWeights = 0.0;
        var biasedWorldPosition = (worldPosition + surfaceBias);

        var baseProbeCoords: vec3<i32> = getBaseGridCoord(irradianceFieldSurface, worldPosition);
        
        var baseProbeWorldPosition: vec3<f32> = gridCoordToPosition(irradianceFieldSurface, baseProbeCoords) ;
        
        var gridSpaceDistance = (biasedWorldPosition - baseProbeWorldPosition);

        // alpha is how far from the floor(currentVertex) position. on [0, 1] for each axis.
        var alpha: vec3<f32> = clamp(gridSpaceDistance / (irradianceFieldSurface.probeStep), vec3<f32>(0.0), vec3<f32>(1.0));
        // let irradianceDir = rotateDir(wsN.xyz);
        // Iterate over adjacent probe cage
        for (var i:i32 = 0; i < 8; i = i + 1) {
            var adjacentProbeOffset : vec3<i32> = vec3<i32>(i, i32(f32(i) * 0.5), i32(f32(i) * 0.25)) & vec3<i32>(1);
            var adjacentProbeCoords: vec3<i32> = clamp(baseProbeCoords + adjacentProbeOffset, vec3<i32>(0),  vec3<i32>(irradianceFieldSurface.probeCounts.xyz) - 1) ;
            
            var adjacentProbeIndex :i32 = gridCoordToProbeIndex(irradianceFieldSurface, adjacentProbeCoords);
            var adjacentProbeWorldPosition :vec3<f32> = gridCoordToPosition(irradianceFieldSurface, adjacentProbeCoords) ;//+ (wsN + 3.0 * w_o) * globalUniform.normalBias;
         
            var worldPosToAdjProbe = normalize(adjacentProbeWorldPosition - worldPosition);
            var biasedPosToAdjProbe = normalize(adjacentProbeWorldPosition - biasedWorldPosition);
            var biasedPosToAdjProbeDist = length(adjacentProbeWorldPosition - biasedWorldPosition);

            let trilinear = max(vec3<f32>(0.001), mix(1.0 - alpha, alpha, vec3<f32>(adjacentProbeOffset)));
            let trilinearWeight = (trilinear.x * trilinear.y * trilinear.z);
            var weight = 1.0;

            var wrapShading = (dot(worldPosToAdjProbe, direction) + 1.0) * 0.5;
            weight *= (wrapShading * wrapShading) + 0.2;

            var depthDir = -biasedPosToAdjProbe;//probe - world
            depthDir = applyQuaternion(depthDir, quaternion);
            var probeTextureUV : vec2<f32> = textureCoordFromDirection(depthDir.xyz,
                adjacentProbeIndex,
                irradianceFieldSurface.irradianceTextureWidth,
                irradianceFieldSurface.irradianceTextureHeight,
                irradianceFieldSurface.irradianceProbeSideLength);

            var filteredDistance : vec2<f32> = 2.0 * textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV,0.0).rg ;
           
            var variance = abs((filteredDistance.x * filteredDistance.x) - filteredDistance.y);

            var chebyshevWeight = 1.0;
            if(biasedPosToAdjProbeDist > filteredDistance.x ) // occluded
            {
                var v = biasedPosToAdjProbeDist - filteredDistance.x ;
                chebyshevWeight = variance / (variance + (v * v));
                // Increase the contrast in the weight
                chebyshevWeight = max((chebyshevWeight * chebyshevWeight * chebyshevWeight), 0.0);
            }

            weight *= max(0.05, chebyshevWeight);
            weight = max(0.000001, weight);

            let crushThreshold = 0.2;
            if (weight < crushThreshold)
            {
                weight *= (weight * weight) * (1.0 / (crushThreshold * crushThreshold));
            }

            weight *= trilinearWeight;
            
            //worldPosToAdjProbe
            let rotateDir = applyQuaternion(-direction, quaternion);
            probeTextureUV = textureCoordFromDirection((rotateDir),
            adjacentProbeIndex,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

            var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0).xyz;

            var exponent =  irradianceData.ddgiGamma * 0.5;
            probeIrradiance = pow(probeIrradiance, vec3<f32>(exponent));
            
            irradiance += (weight * probeIrradiance);
            accumulatedWeights += weight;
        }

        if(accumulatedWeights == 0.0){
            return vec4<f32>(0.0, 0.0, 0.0,1.0);
        }

        irradiance *= (1.0 / accumulatedWeights);   
        irradiance *= irradiance;                   

        irradiance *= 6.2831853071795864;     
        irradiance *= irradianceData.indirectIntensity;
        return vec4<f32>(irradiance,1.0) ;
    }

`,df=`
#include "Clearcoat_frag"
    #include "EnvMap_frag"
    #include "BrdfLut_frag"

    struct FragData {
        Ao: f32,
        Metallic: f32,
        Roughness: f32,

        Albedo: vec4<f32>,
        Emissive: vec3<f32>,

        N: vec3<f32>,
        V: vec3<f32>,
        R: vec3<f32>,

        F0: vec3<f32>,
        F: vec3<f32>,
        KS: vec3<f32>,
        KD: vec3<f32>,
        Shadow: f32,
        Indirect: f32,
        Reflectance: f32,

        NoV: f32,
        FaceDirection:f32,

        DiffuseColor: vec3<f32>,
        SpecularColor: vec3<f32>,
        ClearcoatRoughness:f32,
        EnvColor: vec3<f32>,
        Irradiance: vec3<f32>,
    };

    var<private> fragData: FragData;

    struct BxDFContext
    {
        NoV : f32 ,
        NoL : f32 ,
        VoL : f32 ,
        NoH : f32 ,
        VoH : f32
    };

    fn getContext( N:vec3<f32>, V:vec3<f32>, H:vec3<f32>, L:vec3<f32> ) -> BxDFContext
    {
        var Context:BxDFContext ;
        Context.NoL = saturate(dot(N, L))  ;
        Context.NoV = saturate(dot(N, V))  ;
        Context.VoL = saturate(dot(V, L)) ;
        Context.NoH = saturate(dot(N, H));
        Context.VoH = saturate(dot(V, H));

        // Context.NoL = max(dot(N, L),0.0);
        // Context.NoV = max(dot(N, V),0.0);
        // Context.VoL = max(dot(V, L),0.0) ;
        // Context.NoH = saturate(dot(N, H));
        // Context.VoH = max(dot(V, H),0.0);
        return Context ;
    }

    // convert roughness to mipmapLevel
    fn roughnessToMipmapLevel( roughness: f32 , mipmapCount:i32 ) -> f32{
        let level = roughness * (1.7 - 0.7 * roughness );
        return level * f32(mipmapCount);
    }

    fn Fd90( NoL:f32, roughness:f32) -> f32
    {
        return (2.0 * NoL * roughness) + 0.4;
    }

    fn KDisneyTerm( NoL:f32, NoV:f32 , roughness:f32) -> f32
    {
        return (1.0 + Fd90(NoL, roughness) * pow(1.0 - NoL, 5.0)) * (1.0 + Fd90(NoV, roughness) * pow(1.0 - NoV, 5.0));
    }

    fn FresnelSchlick( NoV:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(1.0 - NoV, 5.0);
    }

    fn FresnelSchlickRoughness( NoV:f32,  F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(1.0 - NoV, 5.0);
    }

    fn DistributionGGX( NdotH:f32 ,  roughness:f32 ) -> f32
    {
        let alpha = roughness * roughness;
        let alpha2 = roughness * roughness;

        let NdotH2 = NdotH * NdotH;

        let nom   = alpha2;
        var denom = (NdotH2 * (alpha2 - 1.0) + 1.0);
        denom = PI * denom * denom;

        return nom / denom;
    }

    // [Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"]
    fn Vis_SmithJoint( NoV : f32 ,  NoL : f32 ,  a2 : f32) -> f32
    {
        var Vis_SmithV = NoL * sqrt(NoV * (NoV - NoV * a2) + a2);
        var Vis_SmithL = NoV * sqrt(NoL * (NoL - NoL * a2) + a2);
        return 0.5 * rcp(Vis_SmithV + Vis_SmithL);
    }

    fn GeometrySchlickGGX( NdotV : f32 , roughness : f32 ) -> f32
    {
        //roughness compute ks
        let r = (roughness + 1.0);
        let k = (r*r) / 8.0;

        let nom   = NdotV;
        let denom = NdotV * (1.0 - k) + k;
        
        return nom / denom;
    }
    
    fn GeometrySmith( NdotV:f32 , NdotL:f32 , roughness : f32) -> f32
    {
        // let NdotV = max(dot(N, V), 0.0);
        // let NdotL = max(dot(N, L), 0.0);
        let ggx1 = GeometrySchlickGGX(NdotV, roughness);
        let ggx2 = GeometrySchlickGGX(NdotL, roughness);
        return ggx1 * ggx2;
    }

    fn GeometryAttenuationGGXSmith( NdotL:f32,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn colorLinear( colorVector:vec3<f32> ) -> vec3<f32>
    {
        var linearColor = pow(colorVector.rgb, vec3<f32>(2.2));
        return linearColor;
    }

    fn computeFresnelSchlick( NoV:f32 , F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - NoV,0.0,1.0), 5.0);
    }

    fn computeFresnelSchlickRoughness(NoV:f32 , F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - fragData.NoV,0.0,1.0), 5.0);
    }

    fn computeDistributionGGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32) -> f32
    {
        var alpha = roughness * roughness;
        var alpha2 = alpha * alpha; 

        var NdotH = saturate(dot(N, H));
        var NdotH2 = NdotH * NdotH;

        return (alpha2) / (PI * (NdotH2 * (alpha2 - 1.0) + 1.0) * (NdotH2 * (alpha2 - 1.0) + 1.0));
    }

    fn D_GGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32 ) -> f32
    {
        var NoH = saturate(dot(N, H));
        var d = ( NoH * roughness - NoH ) * NoH + 1.0;	// 2 mad
        return roughness / ( PI*d*d );					// 4 mul, 1 rcp
    }

    fn computeGeometryAttenuationGGXSmith( NdotL:f32 ,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn Vis_Smith(  NoL:f32 ,  NoV:f32,  a2:f32 )-> f32
    {
        var Vis_SmithV = NoV + sqrt( NoV * (NoV - NoV * a2) + a2 );
        var Vis_SmithL = NoL + sqrt( NoL * (NoL - NoL * a2) + a2 );
        return rcp( Vis_SmithV * Vis_SmithL );
    }

    fn simpleBRDF( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,L:vec3<f32>,att:f32,lightColor:vec3<f32>,roughness:f32 )-> vec3<f32>{
        let H = normalize(V + L);
        let Context:BxDFContext = getContext(N,V,H,L);

        let D = DistributionGGX( Context.NoH , roughness);
        let G = GeometrySmith(Context.NoV,Context.NoL, roughness );
        let F = FresnelSchlick(Context.VoH, vec3<f32>(fragData.F0));
        let specular = ( D * G * F ) / (4.0 * Context.NoV * Context.NoL + 0.001);
        let kS = F;
        var kd = 1.0 - kS ;
        kd *= 1.0 - fragData.Metallic ;
        var diffuse = kd * (albedo.rgb / PI ) ;
        let ambient = specular.rgb ;

        fragData.KD += kd;
        fragData.KS += F;

        var col = (diffuse + ambient) * Context.NoL * lightColor * att ;
        // var col = (diffuse + ambient) * Context.NoL * lightColor ;
        return (col.rgb ) ;
    }

    fn getSpecularDominantDir (  N : vec3<f32> , R : vec3<f32> , roughness : f32 ) -> vec3<f32>
    {
        var smoothness = saturate (1.0 - roughness );
        var lerpFactor = smoothness * ( sqrt ( smoothness ) + roughness );
        // The result is not normalized as we fetch in a cubemap
        return mix (N, R, lerpFactor );
    }

    fn approximateSpecularIBL( specularColor:vec3<f32> , roughness:f32 , R:vec3<f32>) -> vec3<f32> {
        let NoV = fragData.NoV ;
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        var prefilteredColor: vec3<f32> = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        prefilteredColor = globalUniform.skyExposure * LinearToGammaSpace(prefilteredColor);
        var envBRDF = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2<f32>(NoV, roughness) , 0.0 ) ;
        return prefilteredColor * (specularColor.rgb * envBRDF.x + saturate( 50.0 * specularColor.g ) * envBRDF.y) ;
    }

    fn fresnel_coat(n:vec3<f32>,v:vec3<f32>,ior:f32) -> f32 {
        var f0 = (1.0-ior)/(1.0+ior);
        f0 = f0 * f0  ;
        let fr = pow((f0 + (1.0 - f0)*(1.0 - abs( max(dot(n,v),0.0) ))) , 5.0 ) ;  
        return fr ;
    }

    fn reflectEnvMap(n:vec3<f32> , v:vec3<f32> , roughness:f32) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(envMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var prefilteredColor: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(envMap, envMapSampler, R , mip ).rgb);
        prefilteredColor = LinearToGammaSpace(prefilteredColor);
        return prefilteredColor ;
    }

    fn Specular_D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        let a2 = roughness * roughness ;
        let f = (NoH * a2 - NoH) * NoH + 1.0;
        return a2 / (PI * f * f) ;
    }

    fn V_Kelemen( LoH : f32 ) -> f32 {
        return 0.25 / (LoH * LoH);
    }

    fn F_Schlick( f0:vec3<f32> ,  f90 : f32 ,  VoH : f32 ) -> vec3<f32> {
        return f0 + (f90 - f0) * pow(1.0 - VoH,5.0);
    }

    //https://google.github.io/filament/Filament.html materialsystem/clearcoatmodel/clearcoatparameterization
    fn CoatSpecular_brdf( f:vec3<f32>, s:vec3<f32>, n:vec3<f32> , v:vec3<f32> , l:vec3<f32> , att:f32 , layer :vec3<f32>) -> vec3<f32> {
        let H = normalize(v + l); 
        let VdotNc = max(dot(v,n),0.0);
        let LdotNc = max(dot(l,n),0.0);
        let NoH = max(dot(n,H),0.0);
        let LoH = clamp(dot(l,H),0.0,1.0);
        let NoL = max(dot(n,l),0.0);

        let Fd = f ; 
        let Fr = s ; 

        let clearcoatRoughnessFactor = clamp(materialUniform.clearcoatRoughnessFactor,0.089,1.0);
        let clearCoatRoughness = clearcoatRoughnessFactor * clearcoatRoughnessFactor ;

        let Dc = Specular_D_GGX( NoH , clearCoatRoughness ) ;
        let Vc = V_Kelemen( LoH ) ;
        let Fc = F_Schlick(vec3<f32>(0.04), clearCoatRoughness , pow(LoH,2.0)); 
        let Frc = (Dc * Vc) * Fc ;
        // return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) ;//* NoL;
        return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) * ( 0.5 + NoL * 0.5 ) ;
    }

    fn approximate_coating(base:vec3<f32> , clearColor: vec3<f32>, n:vec3<f32> , v:vec3<f32> , light:LightData ) -> vec3<f32> {
        let clearcoatRoughnessFactor = clamp(materialUniform.clearcoatRoughnessFactor,0.084,1.0);
        var clearcoatAlpha = clearcoatRoughnessFactor * clearcoatRoughnessFactor + fragData.ClearcoatRoughness;

        // var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
        var att = light.intensity ;
        let l = light.direction ;
   
        let NdotV = max(dot(n,v),0.0);
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(clearcoatAlpha,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var envIBL: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, R ,mip ).rgb) ;
        envIBL = LinearToGammaSpace(envIBL);

        let clearCoat = materialUniform.clearcoatFactor ;
        let f = FresnelSchlickRoughness( max(dot(n,v),0.0) , vec3<f32>(0.0) , clearcoatAlpha ) ;
        let clearcoat_brdf = (f * envIBL) + CoatSpecular_brdf( clearColor , vec3<f32>( clearCoat ) , n , v , -l , att , envIBL ) ;

        // return clearcoat_brdf;+ fragData.ClearcoatRoughness 
        return mix(base,clearcoat_brdf,materialUniform.clearcoatWeight ) ;
    }
`,ff=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = ORI_ShadingInput.AmbientOcclusion ; 
      fragData.Roughness = max(ORI_ShadingInput.Roughness,0.003) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      fragData.V = normalize(globalUniform.cameraWorldMatrix[3].xyz - ORI_VertexVarying.vWorldPos.xyz) ;

      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R;//reflect( fragData.V , -fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(0.04), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.DiffuseColor = fragData.Albedo.rgb * (1.0 - fragData.Metallic);
      fragData.SpecularColor = mix(vec3<f32>(1.0), fragData.Albedo.rgb, fragData.Metallic);

      fragData.ClearcoatRoughness = 0.0 ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughnees() ;
      #endif
  }

  fn BxDFShading(){
      initFragData();

      var color = vec3<f32>(0.0);

      let lightIndex = getCluster(ORI_VertexVarying.fragCoord);
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
        let light = getLight(i32(i));

        switch (light.lightType) {
          case PointLightType: {
              color += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
          }
          case DirectLightType: {
            color += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness , light , globalUniform.shadowBias) ;
          }
          case SpotLightType: {
            color += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
          }
          default: {
          }
        }
      }

      var kS = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness );
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      kD = max(vec3<f32>(0.04),kD) ;

      let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
      var diffuseIrradiance: vec3<f32> = vec3<f32>(0.0);//

      #if USE_SKYLIGHT
          var prefilterTex: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 8.0 ).rgb);
          prefilterTex = LinearToGammaSpace(prefilterTex);
          var skyLight = kD * fragData.Albedo.xyz * prefilterTex;
          // color += skyLight ;
      #endif

      var envRef = kS * approximateSpecularIBL( fragData.SpecularColor , fragData.Roughness , fragData.R ) ;//* (materialUniform.ior - 1.0) ;
      
      var irradiance = diffuseIrradiance ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          irradiance += LinearToGammaSpace(globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif

      fragData.Irradiance = irradiance;


      var diffuseIBL = fragData.Albedo.rgb * irradiance.rgb ;
      // var ambientIBL = kD * fragData.Albedo.rgb * fragData.Ao;
      fragData.EnvColor = materialUniform.envIntensity * envRef  ;

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      #if USE_CLEARCOAT
          for(var i:i32 = i32(start) ; i < i32(end); i = i + 1 )
          {
              let light = getLight(i);
              switch (light.lightType) {
                  case PointLightType: {
                      color += pointLighting(fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
                  }
                  case DirectLightType: {
                      color += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness , light , globalUniform.shadowBias) ;
                  }
                  case SpotLightType: {
                      color += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
                  }
                  default: {
                  }
              }
          }
      #endif
    
      // // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
      #endif
      
      // ORI_FragmentOutput.color = vec4<f32>(ORI_FragmentOutput.color.xyz,fragData.Albedo.a) ;
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
      #endif

      #if USEGBUFFER
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      // color = pow(color.rgb,vec3<f32>(2.0));

      color += diffuseIBL ;
      // color += ambientIBL ;
      color += fragData.EnvColor * fragData.Ao ;
      color += fragData.Emissive.xyz ;

      //-1 1
      // color = diffuseIBL ;
      ORI_FragmentOutput.color = vec4<f32>(color.rgb,fragData.Albedo.a) ;

      // let gamma = 2.0 ;
      // ORI_FragmentOutput.color = pow(ORI_FragmentOutput.color,vec4(gamma,gamma,gamma,1.0));
  }
  `,pf=`
    #if USE_CLEARCOAT_ROUGHNESS
    @group(1) @binding(auto)
    var clearCoatRoughnessMapSampler: sampler;
    @group(1) @binding(auto)
    var clearCoatRoughnessMap: texture_2d<f32>;

                fn getClearcoatRoughnees() -> f32{
        let clearcoatRoughness = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).r;
        return clearcoatRoughness;
    }
    #else
                fn getClearcoatRoughnees() -> f32{
        return 0.0;
    }
    #endif
`,mf=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = materialUniform.roughness  ;
        ORI_ShadingInput.Metallic = materialUniform.metallic ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = materialUniform.ao ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

        BxDFShading();
    }
`,gf=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    #if USE_ARMC
    @group(1) @binding(auto)
    var maskMapSampler: sampler;
    @group(1) @binding(auto)
    var maskMap: texture_2d<f32>;
    #endif

    #if USE_AOTEX
    @group(1) @binding(auto)
    var aoMapSampler: sampler;
    @group(1) @binding(auto)
    var aomapMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv ) * materialUniform.baseColor ;
    
        // #if USE_ALPHACUT
            // ORI_ShadingInput.BaseColor.a = clamp(ORI_ShadingInput.BaseColor.a, 0.001 , 1.0 );
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                discard;
            }
        // #endif

        #if USE_SHADOWMAPING
            directShadowMaping(globalUniform.shadowBias);
            pointShadowMapCompare(globalUniform.pointShadowBias);
        #endif


        // ORI_ShadingInput.BaseColor = vec4<f32>(sRGBToLinear(ORI_ShadingInput.BaseColor.xyz),ORI_ShadingInput.BaseColor.w);
    
        #if USE_ARMC
            var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;

            ORI_ShadingInput.AmbientOcclusion = maskTex.r * materialUniform.ao ; 

            #if USE_AOTEX
                var aoMap = textureSample(aomapMap, aoMapSampler, uv );
                ORI_ShadingInput.AmbientOcclusion = mix(0.0,aoMap.r,materialUniform.ao) ;
            #endif

            ORI_ShadingInput.Roughness = maskTex.g * materialUniform.roughness ;
            ORI_ShadingInput.Metallic =  maskTex.b * materialUniform.metallic ;

        #else
            ORI_ShadingInput.Roughness = materialUniform.roughness ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.AmbientOcclusion =  materialUniform.ao ;
            #if USE_AOTEX
                var aoMap = textureSample(aomapMap, aoMapSampler, ORI_VertexVarying.fragUV0.xy );
                ORI_ShadingInput.AmbientOcclusion = mix(0.0,aoMap.r,materialUniform.ao) ;
            #endif
        #endif

        ORI_ShadingInput.Roughness = clamp(ORI_ShadingInput.Roughness,0.084,1.0);
        ORI_ShadingInput.Specular = 0.5 ;

        var emissiveColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(materialUniform.emissiveColor.rgb * emissiveColor.rgb * materialUniform.emissiveIntensity,1.0);

        var Normal = textureSample(normalMap,normalMapSampler,ORI_VertexVarying.fragUV0).rgb ;
        // Normal.y = 1.0 - Normal.y ;
        // let normal = unPackNormal(Normal,1.0,materialUniform.normalScale) ;
        let normal = unPackNormal(Normal,materialUniform.normalScale) ;  
        ORI_ShadingInput.Normal = normal ;

        BxDFShading();
    }
`,_f=`
#include "ClusterDebug_frag" 

        fn debugPosition(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,1.0);
        }

        fn debugNormal(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.Normal.xyz,1.0);
        }

        fn debugUV(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.fragUV0.xy,0.0,1.0);
        }

        fn debugColor(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Albedo.rgb,1.0);
        }

        fn debugDiffuse(){
            ORI_FragmentOutput.color = vec4<f32>(1.0/3.1415926 * fragData.Albedo.rgb,1.0);
            // ORI_FragmentOutput.color = vec4<f32>(0.2,0.2,0.2,1.0);
        }

        fn debugAmbient(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Irradiance * fragData.Albedo.rgb,1.0);
        }
        
        fn debugEmissive(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Emissive.rgb,1.0);
        }

        fn debugEnvment(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.EnvColor.rgb,1.0);
        }

        fn debugAo(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Ao),1.0);
        }

        fn debugRoughness(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Roughness),1.0);
        }

        fn debugMetallic(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Metallic),1.0);
        }

        fn debugIrradiance(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Irradiance),1.0);
        }

        fn debugFragmentOut(){
            if(ORI_VertexVarying.fragCoord.x > globalUniform.renderState_split) {
                switch (globalUniform.renderState_right)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugDiffuse();
                  }
                  case 5: {
                    // debugAmbient();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugPosition();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              } else {
                switch (globalUniform.renderState_left)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugDiffuse();
                  }
                  case 5: {
                    // debugAmbient();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugPosition();
                  }
                  case 14: {
                    // debugCluster( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  case 15: {
                    // debugClusterBox( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  case 16: {
                    // debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  default: {
                  }
                }
              }
        }
`,vf=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
    x:f32,
    y:f32,
    width:f32,
    height:f32,
    };

    struct VertexOutput {
        @location(0) fragUV: vec2<f32>,
        @builtin(position) position: vec4<f32>
    };

    @vertex
    fn main(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) index : u32 ) -> VertexOutput {
        const pos = array(
        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
        vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
        );
        const uv = array(
        vec2(1.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0), 
        vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, 0.0),
        );
        let id = u32(index) ;
        var output : VertexOutput;
        output.fragUV = uv[vertexIndex] ;
        output.position = vec4<f32>(pos[vertexIndex] , 0.0, 1.0) ;
        return output ;
    }
`,xf=`
#include "WorldMatrixUniform"
      #include "GlobalUniform"
   
      struct MaterialUniform {
        x:f32,
        y:f32,
        width:f32,
        height:f32,
      };

      struct VertexOutput {
          @location(0) fragUV: vec2<f32>,
          @builtin(position) member: vec4<f32>
      };

      @vertex
      fn main(@builtin(instance_index) index : u32,@location(0) position: vec3<f32>, @location(1) TEXCOORD_1: vec2<f32>) -> VertexOutput {
          let id = u32(index) ;
          let worldMatrix = models.matrix[id];

          let windowSize = vec2<f32>(globalUniform.windowWidth,globalUniform.windowHeight) ;

        //   let pos = worldMatrix[3].xy ;

          let size = vec2<f32>(worldMatrix[0].x,worldMatrix[1].y) / windowSize ;

          let uv = vec2(((TEXCOORD_1.xy * 2.0) - vec2<f32>(1.0)))  ;// / windowSize * size - offset ;

          return VertexOutput(TEXCOORD_1, vec4<f32>(uv, 0.0, 1.0));
      }
`,yf=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var color: vec4<f32> = textureSample(baseMap, baseMapSampler, uv );

        return FragmentOutput(color);
    }
`,bf=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    }; 

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_2d ;

    fn Linear01Depth(  z : f32 ) -> f32
    {
        return 1.0 / (1.0 * z + 5000.0);
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var depth = textureSample(baseMap, baseMapSampler, uv , vec2<i32>(0) ) ;
        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,wf=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_cube ;

    fn uvToXYZ( face : i32 ,  uv : vec2<f32> ) -> vec3<f32>
    {
        var out : vec3<f32> ;
        if(face == 0){
            out = vec3<f32>( 1.0, uv.y, -uv.x);
        }else if(face == 1){
            out = vec3<f32>( -1.0, uv.y, uv.x);
        }else if(face == 2){
            out = vec3<f32>( uv.x, -1.0, uv.y);
        }else if(face == 3){
            out = vec3<f32>( uv.x,  1.0, -uv.y);
        }else if(face == 4){
            out = vec3<f32>( uv.x, uv.y, 1.0);
        }else{	
            out = vec3<f32>( -uv.x, uv.y, -1.0);
        }
        return out ;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var ii = 0.16 ;
        var ouv = vec3<f32>(0.0);
        if(uv.x < ii * 6.0){
            ouv = uvToXYZ(5,uv/ii);
        }
        if(uv.x < ii * 5.0){
            ouv = uvToXYZ(4,uv/ii);
        }
        if(uv.x < ii * 4.0){
            ouv = uvToXYZ(3,uv/ii);
        } 
        if(uv.x < ii * 3.0){
            ouv = uvToXYZ(2,uv/ii);
        }
        if(uv.x < ii * 2.0){
            ouv = uvToXYZ(1,uv/ii);
        }
        if(uv.x < ii * 1.0){
            ouv = uvToXYZ(0,uv/ii);
        }
        var depth = textureSample(baseMap, baseMapSampler, ouv ) ;
        depth = 1.0 - depth; 

        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,zo=`
    fn getHDRColor(color: vec3<f32>, exposure: f32) -> vec3 < f32 > {
        // var newColor = color * (  1.0 / 255.0 ) ;
        return color * pow(2.4, exposure) ;
    }

    fn lambda2rgb(lambda : f32) -> vec3 < f32 > {
        let ultraviolet = 400.0;
        let infrared = 700.0;

        var a = (lambda - ultraviolet) / (infrared - ultraviolet);
        let c = 10.0;
        var b = vec3<f32>(a) - vec3<f32>(0.75, 0.5, 0.25);
        return max((1.0 - c * b * b), vec3<f32>(0.0));
    }

    fn CEToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        return 1.0 - exp(-adapted_lum * color);
    }

    fn ACESToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        let A = 2.51;
        let B = 0.03;
        let C = 2.43;
        let D = 0.59;
        let E = 0.14;

        var color2 = color * adapted_lum;
        color2 = (color2 * (A * color2 + B)) / (color2 * (C * color2 + D) + E);
        return color2;
    }

    fn gammaToLiner(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 2.4;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma4(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 1.0 / 2.4;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma3(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 1.0 / 2.4;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3 < f32 > {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r, 0.416666667);
        linRGB.g = pow(linRGB.g, 0.416666667);
        linRGB.b = pow(linRGB.b, 0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    var<private>sRGB_2_LMS_MAT: mat3x3<f32> = mat3x3<f32>(
        17.8824, 43.5161, 4.1193,
        3.4557, 27.1554, 3.8671,
        0.02996, 0.18431, 1.4670,
    );

    var<private>LMS_2_sRGB_MAT: mat3x3<f32> = mat3x3<f32>(
        0.0809, -0.1305, 0.1167,
        -0.0102, 0.0540, -0.1136,
        -0.0003, -0.0041, 0.6935,
    );

    fn sRGB_2_LMS(RGB: vec3<f32>) -> vec3<f32>
    {
        return sRGB_2_LMS_MAT * RGB;
    }

    fn LMS_2_sRGB(LMS: vec3<f32>) -> vec3<f32>
    {
        return LMS_2_sRGB_MAT * LMS;
    }

    fn LinearToSrgbBranchless(lin: vec3<f32>) -> vec3<f32>
    {
        var lin2 = max(vec3<f32>(6.10352e-5), lin);
        return min(lin2 * 12.92, pow(max(lin2, vec3<f32>(0.00313067)), vec3<f32>(1.0 / 2.4)) * vec3<f32>(1.055) - vec3<f32>(0.055));
    }

    fn sRGBToLinear(color : vec3<f32>) -> vec3<f32>
    {
        let color2 = max(vec3<f32>(6.10352e-5), color);
        let c = 0.04045;
        if (color2.r > c && color2.g > c && color2.b > c) {
            return pow(color2 * (1.0 / 1.055) + 0.0521327, vec3<f32>(2.4));
        } else {
            return color2 * (1.0 / 12.92);
        }
    }
`,Sf=`
    fn madfrac(A:f32, B:f32)-> f32 {
        return A*B-floor(A*B) ;
    }

    fn sampleRandomDir(count:u32,SAMPLE_COUNT:u32) -> vec3<f32>{
    var ray_dir = sphericalFibonacci(f32((count)), f32(SAMPLE_COUNT) );
    return normalize(ray_dir) ;
    }

    fn sphericalFibonacci( i : f32 ,  n : f32 ) -> vec3<f32>{
        const PHI = sqrt(5.0) * 0.5 + 0.5;
        let phi = 2.0 * PI * madfrac(i, PHI - 1);
        let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);
        let sinTheta = sqrt(saturate(1.0 - cosTheta*cosTheta));

        return vec3<f32>(
            cos(phi) * sinTheta,
            sin(phi) * sinTheta,
            cosTheta);

    }
`;class G{static init(){G.register("MathShader",Vd),G.register("FastMathShader",sf),G.register("GlobalUniform",ef),G.register("WorldMatrixUniform",rf),G.register("NormalMap_frag",af),G.register("LightingFunction_frag",Gd),G.register("PhysicMaterialUniform_frag",Hd),G.register("UnLitMaterialUniform_frag",Xd),G.register("VideoUniform_frag",Yd),G.register("InstanceUniform",tf),G.register("Inline_vert",qd),G.register("VertexAttributes_vert",Kd),G.register("Common_vert",Zd),G.register("Common_frag",$d),G.register("FragmentVarying",nf),G.register("ColorPassFragmentOutput",of),G.register("LightStruct",zd),G.register("ShadingInput",hf),G.register("IESProfiles_frag",lf),G.register("ShadowMapping_frag",uf),G.register("Irradiance_frag",cf),G.register("IrradianceVolumeData_frag",jd),G.register("BrdfLut_frag",Qd),G.register("EnvMap_frag",Jd),G.register("ColorUtil_frag",zo),G.register("ColorUtil",zo),G.register("BRDF_frag",df),G.register("BxDF_frag",ff),G.register("UnLit_frag",Wd),G.register("Clearcoat_frag",pf),G.register("LitShader",mf),G.register("PBRLItShader",gf),G.register("ClusterDebug_frag",Fd),G.register("BxdfDebug_frag",_f),G.register("GenerayRandomDir",Sf),G.register("Quad_vert_wgsl",xf),G.register("Quad_frag_wgsl",yf),G.register("Quad_depth2d_frag_wgsl",bf),G.register("Quad_depthCube_frag_wgsl",wf),G.register("sky_vs_frag_wgsl",Zs.sky_vs_frag_wgsl),G.register("sky_fs_frag_wgsl",Zs.sky_fs_frag_wgsl),G.register("Bloom_Brightness_frag_wgsl",di.Bloom_Brightness_frag_wgsl),G.register("Bloom_blur_frag_wgsl",di.Bloom_blur_frag_wgsl),G.register("Bloom_composite_frag_wgsl",di.Bloom_composite_frag_wgsl)}static register(e,t){G[e.toLowerCase()]||(G[e.toLowerCase()]=t)}static getShader(e){return G[e.toLowerCase()],G[e.toLowerCase()]}}const Me=class{constructor(r=0,e=0){o(this,"x",0),o(this,"y",0),this.x=r,this.y=e}static getAngle(r,e){return Math.atan2(e.y-r.y,e.x-r.x)}static slerp(r,e,t){let i=new Me,s=r.dot(e);var a,n,h;return s<0&&(e.x=-e.x,e.y=-e.y,s=-s),.9995<s?(i.x=r.x+t*(e.x-r.x),i.y=r.y+t*(e.y-r.y)):(a=Math.acos(s),n=Math.sin(a),h=Math.sin((1-t)*a)/n,t=Math.sin(t*a)/n,i.x=h*r.x+t*e.x,i.y=h*r.y+t*e.y),i}static lerp(r,e,t){return Me.HELP_0.copyFrom(r),Me.HELP_1.copyFrom(e),Me.HELP_0.scale(t),Me.HELP_1.scale(1-t),new Me(Me.HELP_0.x+Me.HELP_1.x,Me.HELP_0.y+Me.HELP_1.y)}set(r=0,e=0){this.x=r,this.y=e}distance(r){return Math.sqrt(Math.pow(this.x-r.x,2)+Math.pow(this.y-r.y,2))}add(r,e){return(e=e||new Me).x=this.x+r.x,e.y=this.y+r.y,e}sub(r,e){return(e=e||new Me).x=this.x-r.x,e.y=this.y-r.y,e}scale(r){this.x=this.x*r,this.y=this.y*r}multiply(r,e){return(e=e||new Me).x=this.x*r,e.y=this.y*r,e}divide(r,e){return(e=e||new Me).x=this.x/r,e.y=this.y/r,e}neg(r){return(r=r||new Me).x=-r.x,r.y=-r.y,r}abs(){return Math.sqrt(this.x*this.x+this.y*this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}getAngle(r){return Math.atan2(r.y-this.y,r.x-this.x)}unt(r){r=r||new Me;var e=this.abs();return r.x=this.x/e,r.y=this.y/e,r}angleTo(t){var e=t.x-this.x,t=t.y-this.y;return Math.atan2(t,e)}equals(r){return Math.abs(this.x-r.x)<1e-6&&Math.abs(this.y-r.y)<1e-6}pal(t){var e=this.unt(),t=t.unt();return e.equals(t)?1:e.equals(t.neg())?-1:0}clone(){return new Me(this.x,this.y)}copyFrom(r){return this.x=r.x,this.y=r.y,this}dot(r){return this.x*r.x+this.y*r.y}normalize(){var r=this.abs();this.x=this.x/r,this.y=this.y/r}addInPlace(r){return this.x+=r.x,this.y+=r.y,this}addScalar(r){return this.x+=r,this.y+=r,this}clampScalar(r,e){return this.x=Math.max(r,Math.min(e,this.x)),this.y=Math.max(r,Math.min(e,this.y)),this}};let Ge=Me;o(Ge,"HELP_0",new Me),o(Ge,"HELP_1",new Me),o(Ge,"ZERO",new Me(0,0)),o(Ge,"SAFE_MAX",new Me(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),o(Ge,"SAFE_MIN",new Me(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER));const De=class{constructor(r=0,e=0,t=0,i=0){o(this,"x",0),o(this,"y",0),o(this,"z",0),o(this,"w",1),this.x=r,this.y=e,this.z=t,this.w=i}get width(){return this.z}get height(){return this.w}static crossVectors(a,l,t){t=t||new De;var i=a.x,s=a.y,a=a.z,n=l.x,h=l.y,l=l.z;return t.x=s*l-a*h,t.y=a*n-i*l,t.z=i*h-s*n,t}static distance(a,e){var t=a.x-e.x,i=a.y-e.y,s=a.z-e.z,a=a.w-e.w;return Math.sqrt(t*t+i*i+s*s+a*a)}set(r,e,t,i){return this.x=r,this.y=e,this.z=t,this.w=i,this}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this.w*=r,this}copyFrom(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w,this}clone(){return new De(this.x,this.y,this.z,this.w)}};let de=De;o(de,"X_AXIS",new De(1,0,0)),o(de,"Y_AXIS",new De(0,1,0)),o(de,"Z_AXIS",new De(0,0,1)),o(de,"HELP_0",new De),o(de,"HELP_1",new De),o(de,"HELP_2",new De),o(de,"EPSILON",1e-5),o(de,"HELP_3",new De),o(de,"HELP_4",new De),o(de,"HELP_5",new De),o(de,"HELP_6",new De),o(de,"ZERO",new De),o(de,"ONE",new De(1,1,1,1)),o(de,"LEFT",new De(-1,0,0)),o(de,"RIGHT",new De(1,0,0)),o(de,"UP",new De(0,-1,0)),o(de,"DOWN",new De(0,1,0)),o(de,"BACK",new De(0,0,-1)),o(de,"FORWARD",new De(0,0,1));var et=(r=>(r[r.Number=0]="Number",r[r.Vector2=1]="Vector2",r[r.Vector3=2]="Vector3",r[r.Vector4=3]="Vector4",r[r.Color=4]="Color",r[r.Float32Array=5]="Float32Array",r))(et||{});class er{constructor(e){o(this,"size"),o(this,"memoryInfo"),o(this,"bindOnChange"),o(this,"_data"),o(this,"_type",et.Number),this.data=e}get data(){return this._data}set data(e){this._data=e,this._type=et.Number,e instanceof Ge?(this.size=2,this._type=et.Vector2):e instanceof p?(this.size=3,this._type=et.Vector3):e instanceof de?(this.size=4,this._type=et.Vector4):e instanceof y?(this.size=4,this._type=et.Color):e instanceof Float32Array?(this.size=e.length,this._type=et.Float32Array):(this.size=1,this._type=et.Number)}get color(){return new y(this._data.r,this._data.g,this._data.b,this._data.a)}set color(e){this._data.r==e.r&&this._data.g==e.g&&this._data.b==e.b&&this._data.a==e.a||(this._data.r=e.r,this._data.g=e.g,this._data.b=e.b,this._data.a=e.a,this.onChange())}get value(){return this._data}set value(e){this._data!=e&&(this._data=e,this.onChange())}get vector2(){return new Ge(this._data.x,this._data.y)}set vector2(e){this._data.x==e.x&&this._data.y==e.y||(this._data.x=e.x,this._data.y=e.y,this.onChange())}get vector3(){return new p(this._data.x,this._data.y,this._data.z)}set vector3(e){this._data.x==e.x&&this._data.y==e.y&&this._data.z==e.z||(this._data.x=e.x,this._data.y=e.y,this._data.z=e.z,this.onChange())}get vector4(){return new de(this._data.x,this._data.y,this._data.z,this._data.w)}set vector4(e){this._data.x==e.x&&this._data.y==e.y&&this._data.z==e.z&&this._data.w==e.w||(this._data.x=e.x,this._data.y=e.y,this._data.z=e.z,this._data.w=e.w,this.onChange())}onChange(){this.bindOnChange&&this.bindOnChange()}float32Array(e){this._data.set(e),this.onChange()}update(){switch(this._type){case et.Number:this.memoryInfo.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this._data,!0);break;case et.Vector2:this.memoryInfo.setVector2(0,this._data);break;case et.Vector3:this.memoryInfo.setVector3(0,this._data);break;case et.Vector4:this.memoryInfo.setVector4(0,this._data);break;case et.Color:this.memoryInfo.setColor(0,this._data);break;case et.Float32Array:this.memoryInfo.setFloat32Array(0,this._data)}}}let qt={clamp_to_edge:"clamp-to-edge",repeat:"repeat",mirror_repeat:"mirror-repeat"},fs={never:"never",less:"less",equal:"equal",less_equal:"less-equal",greater:"greater",not_equal:"not-equal",greater_equal:"greater-equal",always:"always"},yi={none:"none",front:"front",back:"back"},Qs={nearest:"nearest",linear:"linear"},zn={point_list:"point-list",line_list:"line-list",line_strip:"line-strip",triangle_list:"triangle-list",triangle_strip:"triangle-strip"},ae={r8unorm:"r8unorm",r8snorm:"r8snorm",r8uint:"r8uint",r8sint:"r8sint",r16uint:"r16uint",r16sint:"r16sint",r16float:"r16float",rg8unorm:"rg8unorm",rg8snorm:"rg8snorm",rg8uint:"rg8uint",rg8sint:"rg8sint",r32uint:"r32uint",r32sint:"r32sint",r32float:"r32float",rg16uint:"rg16uint",rg16sint:"rg16sint",rg16float:"rg16float",rgba8unorm:"rgba8unorm",rgba8unorm_srgb:"rgba8unorm-srgb",rgba8snorm:"rgba8snorm",rgba8uint:"rgba8uint",rgba8sint:"rgba8sint",bgra8unorm:"bgra8unorm",bgra8unorm_srgb:"bgra8unorm-srgb",rgb9e5ufloat:"rgb9e5ufloat",rgb10a2unorm:"rgb10a2unorm",rg11b10ufloat:"rg11b10ufloat",rg32uint:"rg32uint",rg32sint:"rg32sint",rg32float:"rg32float",rgba16uint:"rgba16uint",rgba16sint:"rgba16sint",rgba16float:"rgba16float",rgba32uint:"rgba32uint",rgba32sint:"rgba32sint",rgba32float:"rgba32float",stencil8:"stencil8",depth16unorm:"depth16unorm",depth24plus:"depth24plus",depth24plus_stencil8:"depth24plus-stencil8",depth32float:"depth32float",bc1_rgba_unorm:"bc1-rgba-unorm",bc1_rgba_unorm_srgb:"bc1-rgba-unorm-srgb",bc2_rgba_unorm:"bc2-rgba-unorm",bc2_rgba_unorm_srgb:"bc2-rgba-unorm-srgb",bc3_rgba_unorm:"bc3-rgba-unorm",bc3_rgba_unorm_srgb:"bc3-rgba-unorm-srgb",bc4_r_unorm:"bc4-r-unorm",bc4_r_snorm:"bc4-r-snorm",bc5_rg_unorm:"bc5-rg-unorm",bc5_rg_snorm:"bc5-rg-snorm",bc6h_rgb_ufloat:"bc6h-rgb-ufloat",bc6h_rgb_float:"bc6h-rgb-float",bc7_rgba_unorm:"bc7-rgba-unorm",bc7_rgba_unorm_srgb:"bc7-rgba-unorm-srgb",depth24unorm_stencil8:"depth24unorm-stencil8",depth32float_stencil8:"depth32float-stencil8"},Ss={uint8x2:"uint8x2",uint8x4:"uint8x4",sint8x2:"sint8x2",sint8x4:"sint8x4",unorm8x2:"unorm8x2",unorm8x4:"unorm8x4",snorm8x2:"snorm8x2",snorm8x4:"snorm8x4",uint16x2:"uint16x2",uint16x4:"uint16x4",sint16x2:"sint16x2",sint16x4:"sint16x4",unorm16x2:"unorm16x2",unorm16x4:"unorm16x4",snorm16x2:"snorm16x2",snorm16x4:"snorm16x4",float16x2:"float16x2",float16x4:"float16x4",float32:"float32",float32x2:"float32x2",float32x3:"float32x3",float32x4:"float32x4",uint32:"uint32",uint32x2:"uint32x2",uint32x3:"uint32x3",uint32x4:"uint32x4",sint32:"sint32",sint32x2:"sint32x2",sint32x3:"sint32x3",sint32x4:"sint32x4"};class Ne{}o(Ne,"colorBufferTex_NAME","colorBufferTex"),o(Ne,"positionBufferTex_NAME","positionBufferTex"),o(Ne,"normalBufferTex_NAME","normalBufferTex"),o(Ne,"materialBufferTex_NAME","materialBufferTex"),o(Ne,"zBufferTexture_NAME","zBufferTexture"),o(Ne,"zPreDepthTexture_NAME","zPreDepthTexture"),o(Ne,"outTex_NAME","outTex");let Tf=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
        @location(0) fragUV: vec2<f32>,
            @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main(@builtin(instance_index) index : u32, @location(0) position: vec3<f32>, @location(1) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let id = u32(index);
        let worldMatrix = models.matrix[id];

        let screenPos = vec2(((TEXCOORD_1 * 2.0) - vec2<f32>(1.0))) * 0.5 ; 
        return VertexOutput(TEXCOORD_1, vec4<f32>(screenPos, 0.0, 1.0));
    }
`,Cf=`
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix;
    mat4 pvMatrixInv;
    float frame;
    float time;
    float detail;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;

};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;
layout(set = 3, binding = 0) uniform MaterialDataUniform {
    vec4 color;
};

void main() {
        vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
        vec4 colorTexture = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale) * color;
    o_Target = vec4(colorTexture.rgb, colorTexture.a);

    if (o_Target.r <= 0.5 && o_Target.g <= 0.5 && o_Target.b <= 0.5) {
        discard;
    }
    // float gamma     = 2.2;
    // float exposure  = 1.0;
    // float pureWhite = 1.0;

    // float luminance = dot(colorTexture.rgb, vec3(0.2126, 0.7152, 0.0722));
    // float mappedLuminance = (luminance * (1.0 + luminance/(pureWhite*pureWhite))) / (1.0 + luminance);

    // // Scale color by ratio of average luminances.
    // vec3 mappedColor = (mappedLuminance / luminance) * colorTexture.rgb;

    // // Gamma correction.
    // o_Target = vec4(pow(o_Target.rgb, vec3(1.0/gamma)), 1.0);
};
`;var ot=(r=>(r[r.Default=1]="Default",r[r.IgnoreDepthPass=2]="IgnoreDepthPass",r[r.Sky=6]="Sky",r[r.Particle=10]="Particle",r[r.SkinnedMesh=16]="SkinnedMesh",r[r.MorphTarget=32]="MorphTarget",r[r.Terrain=64]="Terrain",r[r.UI=128]="UI",r))(ot||{});class tr{static addMask(e,t){return e|t}static removeMask(e,t){return e&~t}static hasMask(e,t){return(e&t)==t}}const Hi=class{constructor(){o(this,"__refection"),o(this,"__size",0)}getValueType(){if(!this.__refection){var r;this.__refection=[];for(const e in this)e.includes("__")||(r=this[e],r={name:e,type:r.constructor.name},this.__refection.push(r))}return this.__refection}static getValueSize(r){switch(r.constructor.name){case"Boolean":case"Number":case"f32":case"i32":case"u32":return 4;case"Float32Array":return 4*r.byteLength;case"Vector2":return 8;case"Vector3":case"Vector4":case"Color":return 16;case"Array":let e=0;for(let t=0,i=r.length;t<i;t++)e+=Hi.getValueSize(r[t]);return e}return 0}static Ref(r){return this.Get(r).getValueType()}static Get(r){let e=Hi.__cacheStruct.get(r.prototype);return e||(e=new r,Hi.__cacheStruct.set(r.prototype,e)),e}static GetSize(r){var e,t=this.Get(r);if(t.__size==0){for(const i in t)i.indexOf("__")==-1&&(e=t[i],t.__size+=Hi.getValueSize(e));4<t.__size&&(t.__size=4*Math.ceil(t.__size/4))}return t.__size}};let ts=Hi;o(ts,"__cacheStruct",new Map);class Ef{constructor(){o(this,"byteOffset"),o(this,"byteSize"),o(this,"offset",0),o(this,"dataBytes")}get x(){return this.dataBytes.getFloat32(0*Float32Array.BYTES_PER_ELEMENT,!0)}set x(e){this.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,e,!0)}get y(){return this.dataBytes.getFloat32(+Float32Array.BYTES_PER_ELEMENT,!0)}set y(e){this.dataBytes.setFloat32(+Float32Array.BYTES_PER_ELEMENT,e,!0)}get z(){return this.dataBytes.getFloat32(2*Float32Array.BYTES_PER_ELEMENT,!0)}set z(e){this.dataBytes.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,e,!0)}get w(){return this.dataBytes.getFloat32(3*Float32Array.BYTES_PER_ELEMENT,!0)}set w(e){this.dataBytes.setFloat32(3*Float32Array.BYTES_PER_ELEMENT,e,!0)}setX(e){this.x=e}setXY(e,t){this.x=e,this.y=t}setXYZ(e,t,i){this.x=e,this.y=t,this.z=i}setXYZW(e,t,i,s){this.x=e,this.y=t,this.z=i,this.w=s}setVector2Array(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((2*i+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((2*i+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0)}}setVector3Array(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((3*i+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((3*i+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((3*i+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0)}}setVector4Array(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((4*i+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((4*i+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((4*i+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0),this.dataBytes.setFloat32((4*i+3)*Float32Array.BYTES_PER_ELEMENT,t.w,!0)}}setColorArray(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((4*i+0)*Float32Array.BYTES_PER_ELEMENT,t.r,!0),this.dataBytes.setFloat32((4*i+1)*Float32Array.BYTES_PER_ELEMENT,t.g,!0),this.dataBytes.setFloat32((4*i+2)*Float32Array.BYTES_PER_ELEMENT,t.b,!0),this.dataBytes.setFloat32((4*i+3)*Float32Array.BYTES_PER_ELEMENT,t.a,!0)}}setInt8(e,t=0){this.dataBytes.setInt8(t*Int8Array.BYTES_PER_ELEMENT,e)}getInt8(e=0){return this.dataBytes.getInt8(e*Int8Array.BYTES_PER_ELEMENT)}setInt16(e,t=0){this.dataBytes.setInt16(t*Int16Array.BYTES_PER_ELEMENT,e,!0)}getInt16(e=0){return this.dataBytes.getInt16(e*Int16Array.BYTES_PER_ELEMENT,!0)}setInt32(e,t=0){this.dataBytes.setInt32(t*Int32Array.BYTES_PER_ELEMENT,e,!0)}getInt32(e=0){return this.dataBytes.getInt32(e*Int32Array.BYTES_PER_ELEMENT,!0)}setFloat(e,t=0){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e,!0)}getFloat(e=0){return this.dataBytes.getFloat32(e*Float32Array.BYTES_PER_ELEMENT,!0)}setUint8(e,t=0){this.dataBytes.setUint8(t*Uint8Array.BYTES_PER_ELEMENT,e)}getUint8(e=0){return this.dataBytes.getUint8(e*Uint8Array.BYTES_PER_ELEMENT)}setUint16(e,t=0){this.dataBytes.setUint16(t*Uint16Array.BYTES_PER_ELEMENT,e,!0)}getUint16(e=0){return this.dataBytes.getUint16(e*Uint16Array.BYTES_PER_ELEMENT,!0)}setUint32(e,t=0){this.dataBytes.setUint32(t*Uint32Array.BYTES_PER_ELEMENT,e,!0)}getUint32(e=0){return this.dataBytes.getUint32(e*Uint32Array.BYTES_PER_ELEMENT,!0)}setArray(e,t){for(let s=0;s<t.length;s++){var i=t[s];this.dataBytes.setFloat32((e+s)*Float32Array.BYTES_PER_ELEMENT,i,!0)}}setFloat32Array(e,t){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Float32Array.BYTES_PER_ELEMENT).set(t)}setArrayBuffer(e,t){t instanceof Uint8Array?this.setUint8Array(e,t):t instanceof Uint16Array?this.setUint16Array(e,t):t instanceof Uint32Array?this.setUint32Array(e,t):t instanceof Int8Array?this.setInt8Array(e,t):t instanceof Int16Array?this.setInt16Array(e,t):t instanceof Int32Array?this.setInt32Array(e,t):t instanceof Float32Array&&this.setFloat32Array(e,t)}setInt8Array(e,t){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int8Array.BYTES_PER_ELEMENT).set(t)}setInt16Array(e,t){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int16Array.BYTES_PER_ELEMENT).set(t)}setInt32Array(e,t){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int32Array.BYTES_PER_ELEMENT).set(t)}setUint8Array(e,t){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint8Array.BYTES_PER_ELEMENT).set(t)}setUint16Array(e,t){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint16Array.BYTES_PER_ELEMENT).set(t)}setUint32Array(e,t){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint32Array.BYTES_PER_ELEMENT).set(t)}setData(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t,!0)}setVector2(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0)}setVector3(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0)}setVector4(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0),this.dataBytes.setFloat32((e+3)*Float32Array.BYTES_PER_ELEMENT,t.w,!0)}setColor(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.r,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.g,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.b,!0),this.dataBytes.setFloat32((e+3)*Float32Array.BYTES_PER_ELEMENT,t.a,!0)}getData(e){return this.dataBytes.getFloat32(e*Float32Array.BYTES_PER_ELEMENT,!0)}writeFloat(e){this.dataBytes.setFloat32(this.offset,e,!0),this.offset+=Float32Array.BYTES_PER_ELEMENT}writeInt8(e){this.dataBytes.setInt8(this.offset,e),this.offset+=Int8Array.BYTES_PER_ELEMENT}writeInt16(e){this.dataBytes.setInt16(this.offset,e,!0),this.offset+=Int16Array.BYTES_PER_ELEMENT}writeInt32(e){this.dataBytes.setInt32(this.offset,e,!0),this.offset+=Int32Array.BYTES_PER_ELEMENT}writeUint8(e){this.dataBytes.setUint8(this.offset,e),this.offset+=Uint8Array.BYTES_PER_ELEMENT}writeUint16(e){this.dataBytes.setUint16(this.offset,e,!0),this.offset+=Uint16Array.BYTES_PER_ELEMENT}writeUint32(e){this.dataBytes.setUint32(this.offset,e,!0),this.offset+=Uint32Array.BYTES_PER_ELEMENT}writeVector2(e){this.writeFloat(e.x),this.writeFloat(e.y)}writeVector3(e){this.writeFloat(e.x),this.writeFloat(e.y),this.writeFloat(e.z)}writeVector4(e){this.writeFloat(e.x),this.writeFloat(e.y),this.writeFloat(e.z),this.writeFloat(e.w)}writeRGBColor(e){this.writeFloat(e.r),this.writeFloat(e.g),this.writeFloat(e.b)}writeArray(e){for(let i=0;i<e.length;i++){var t=e[i];this.writeFloat(t)}}writeFloat32Array(e){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt8Array(e){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt16Array(e){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt32Array(e){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint8Array(e){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint16Array(e){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint32Array(e){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}reset(){this.offset=0}}class Mf{constructor(){o(this,"shareDataBuffer"),o(this,"_byteOffset",0)}allocation(e){this.shareDataBuffer&&this.shareDataBuffer.byteLength<e?this._byteOffset=0:this.shareDataBuffer=new ArrayBuffer(e)}allocation_node(e){var t;return this._byteOffset+e>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,e,this.shareDataBuffer.byteLength),null):((t=new Ef).byteOffset=this._byteOffset,t.byteSize=e,t.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,t.byteSize),this._byteOffset+=t.byteSize,t)}allocation_memory(e){return this._byteOffset+e.byteSize>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,e.byteSize,this.shareDataBuffer.byteLength),null):(e.byteOffset=this._byteOffset,e.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,e.byteSize),this._byteOffset+=e.byteSize,e)}reset(){this._byteOffset=0}destroy(){this.shareDataBuffer=null,this._byteOffset=0}}class Ii{constructor(){o(this,"bufferType"),o(this,"buffer"),o(this,"memory"),o(this,"memoryNodes"),o(this,"seek"),o(this,"outFloat32Array"),o(this,"byteSize"),o(this,"usage"),o(this,"visibility",GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE),o(this,"_readBuffer"),o(this,"_readFlag",!1),this.memory=new Mf,this.memoryNodes=new Map}debug(){}reset(e=!1,t=0,i){this.seek=0,this.memory.reset(),e&&this.createBuffer(this.usage,t,i)}setBoolean(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setX(t?1:0)}setFloat(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setX(t)}setInt8(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(1),this.memoryNodes.set(e,i)),i.setInt8(t)}setInt16(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(2),this.memoryNodes.set(e,i)),i.setInt16(t)}setInt32(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setInt32(t)}setUint8(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(1),this.memoryNodes.set(e,i)),i.setUint8(t)}setUint16(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(2),this.memoryNodes.set(e,i)),i.setUint16(t)}setUint32(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setUint32(t)}setVector2(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(8),this.memoryNodes.set(e,i)),i.setXY(t.x,t.y)}setVector3(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(12),this.memoryNodes.set(e,i)),i.setXYZ(t.x,t.y,t.z)}setVector4(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16),this.memoryNodes.set(e,i)),i.setXYZW(t.x,t.y,t.z,t.w)}setVector4Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16*t.length),this.memoryNodes.set(e,i)),i.setVector4Array(t)}setColor(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16),this.memoryNodes.set(e,i)),i.setXYZW(t.r,t.g,t.b,t.a)}setColorArray(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16*t.length),this.memoryNodes.set(e,i)),i.setColorArray(t)}setMatrix(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(64),this.memoryNodes.set(e,i)),i.setFloat32Array(0,t.rawData)}setMatrixArray(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(64*t.length),this.memoryNodes.set(e,i));for(let a=0;a<t.length;a++){var s=t[a];i.setFloat32Array(16*a,s.rawData)}}setArray(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setArray(0,t)}setFloat32Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setFloat32Array(0,t)}setInt32Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setInt32Array(0,t)}setStruct(n,t,i,s){var a=ts.Ref(n),n=(ts.GetSize(n),t),h=this.memoryNodes.get(n);h.reset();let l=i;s&&(l=l[s]);for(let d=0;d<a.length;d++){var u=a[d],c=l[u.name];switch(u.type){case"Boolean":case"Number":h.writeFloat(c);break;case"Float32Array":h.writeFloat32Array(c);break;case"Vector2":h.writeVector2(c);break;case"Vector3":h.writeVector3(c);break;case"Vector4":h.writeVector4(c);break;case"Color":h.writeRGBColor(c);break;case"Array":h.writeArray(c)}}}setStructArray(e,t,i){var s=t.length;for(let n=0;n<s;n++){var a=t[n];this.setStruct(e,n,a,i)}}apply(){D.device.queue.writeBuffer(this.buffer,0,this.memory.shareDataBuffer)}destroy(){this.outFloat32Array=null,this.buffer.destroy(),this.memory.destroy()}createBuffer(e,t,i){var s=D.device;this.byteSize=4*t,this.usage=e,this.buffer&&this.destroy(),this.buffer=s.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),i&&(this.memory.allocation_node(4*i.length).setArrayBuffer(0,i),this.apply()),this.outFloat32Array=new Float32Array(t)}createBufferByStruct(e,a,i){var s=ts.GetSize(a),a=s*i,n=D.device;this.buffer=n.createBuffer({size:a,usage:e,mappedAtCreation:!1}),this.memory.allocation(a);for(let u=0;u<i;u++){var h,l=u;this.memoryNodes.get(l)||(h=this.memory.allocation_node(s),this.memoryNodes.set(l,h))}}readBuffer(){return this._readBuffer||(this._readBuffer=D.device.createBuffer({size:this.memory.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1})),this._readFlag||this.read(),this.outFloat32Array}async read(){this._readFlag=!0;var e=D.device.createCommandEncoder(),e=(e.copyBufferToBuffer(this.buffer,0,this._readBuffer,0,this.memory.shareDataBuffer.byteLength),D.device.queue.submit([e.finish()]),await this._readBuffer.mapAsync(GPUMapMode.READ),this._readBuffer.getMappedRange());this.outFloat32Array.set(new Float32Array(e),0),this._readBuffer.unmap(),this._readFlag=!1}}var Er=(r=>(r[r.IndicesGPUBuffer=0]="IndicesGPUBuffer",r[r.VertexGPUBuffer=1]="VertexGPUBuffer",r[r.UniformGPUBuffer=2]="UniformGPUBuffer",r[r.StorageGPUBuffer=3]="StorageGPUBuffer",r[r.ComputeGPUBuffer=4]="ComputeGPUBuffer",r[r.MaterialDataUniformGPUBuffer=5]="MaterialDataUniformGPUBuffer",r[r.StructStorageGPUBuffer=6]="StructStorageGPUBuffer",r))(Er||{});class ir extends Ii{constructor(e,t=0,i){super(),this.bufferType=Er.StorageGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|t,e,i)}}class ba extends Ii{constructor(e,t){super(),this.bufferType=Er.UniformGPUBuffer,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,e,t)}genUniformNodes(){}}let mt=function(r=16,e=16){var t,i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),a=[];if(e=e||s.length,r)for(t=0;t<r;t++)a[t]=s[0|Math.random()*e];else for(a[8]=a[13]=a[18]=a[23]="-",a[14]="4",t=0;t<36;t++)a[t]||(i=0|16*Math.random(),a[t]=s[t==19?3&i|8:i]);return a.join("")};class cl{constructor(){o(this,"instanceID"),o(this,"shaderVariant"),o(this,"vsEntryPoint","main"),o(this,"fsEntryPoint","main"),o(this,"bindGroups"),o(this,"shaderReflection"),o(this,"defineValue"),o(this,"constValues"),o(this,"uniforms"),o(this,"_bufferDic"),o(this,"_shaderChange",!1),o(this,"_stateChange",!1),this.instanceID=mt(),this.defineValue={},this.constValues={},this.uniforms={},this._bufferDic=new Map}noticeShaderChange(){this._shaderChange=!0}noticeStateChange(){this._stateChange=!0}setStorageBuffer(e,t){this._bufferDic.has(e)||this._bufferDic.set(e,t)}setStructStorageBuffer(e,t){this._bufferDic.has(e)||this._bufferDic.set(e,t)}setUniformBuffer(e,t){this._bufferDic.has(e)||this._bufferDic.set(e,t)}setDefine(e,t){this.defineValue[e]=t,this.noticeShaderChange()}hasDefine(e){return this.defineValue[e]!=null}deleteDefine(e){delete this.defineValue[e],this.noticeShaderChange()}setUniformFloat(e,t){this.uniforms[e]?this.uniforms[e].value=t:(this.uniforms[e]=new er(t),this.noticeStateChange())}setUniformVector2(e,t){this.uniforms[e]?this.uniforms[e].vector2=t:this.uniforms[e]=new er(t)}setUniformVector3(e,t){this.uniforms[e]?this.uniforms[e].vector3=t:this.uniforms[e]=new er(t)}setUniformVector4(e,t){this.uniforms[e]?this.uniforms[e].vector4=t:this.uniforms[e]=new er(t)}setUniformColor(e,t){this.uniforms[e]?this.uniforms[e].color=t:this.uniforms[e]=new er(t)}setUniformArray(e,t){this.uniforms[e]?this.uniforms[e].float32Array(t):this.uniforms[e]=new er(t)}destroy(){}}var fi=(r=>(r[r.u32=1]="u32",r[r.f32=1]="f32",r[r["vec2<f32>"]=2]="vec2<f32>",r[r["vec3<f32>"]=3]="vec3<f32>",r[r["vec4<f32>"]=4]="vec4<f32>",r[r.float32=1]="float32",r[r.float32x2=2]="float32x2",r[r.float32x3=3]="float32x3",r[r.float32x4=4]="float32x4",r))(fi||{});let Pf=[null,Ss.float32,Ss.float32x2,Ss.float32x3,Ss.float32x4];class yt{static parse(e,t){return e=this.filterComment(e),e=this.parsePreprocess(new Go,e,t),e=this.parseAutoBindingForGroupX(e,1)}static parseComputeShader(e,t){return e=this.filterComment(e),e=this.parsePreprocess(new Go,e,t)}static parsePreprocess(e,t,i){var s,a,n=t.indexOf("#");return n==-1?t:(s=t.substring(0,n),a=t.indexOf(`
`,t.lastIndexOf("#")),n=t.substring(n,a),t=t.substring(a),s+this.parsePreprocessCommand(e,n,i)+t)}static parseAutoBindingForGroupX(e,t){let i=0,s="",a=new Map;for(;i<e.length;){if((l=e.indexOf("@group(",i))==-1){s+=e.substring(i);break}var n,u=e.indexOf(")",l),h=Number.parseInt(e.substring(l+7,u)),l=e.indexOf("@binding(",u),u=e.indexOf(")",l);s+=e.substring(i,l),h==t?a.has(h)?(n=a.get(h)+1,s+=`@binding(${n})`,a.set(h,n)):(s+="@binding(0)",a.set(h,0)):s+=e.substring(l,u+1),i=u+1}return s}static parsePreprocessCommand(e,t,i){let s="",a=t.split(`
`),n=[!1],h=[!1];for(let d=0;d<a.length;d++){let f=a[d],m=n[n.length-1];if(f.trim().indexOf("#")!=0)m||(s+=f+`
`);else{var l,u=f.trim();if(u.indexOf("#if")!=-1)m&&1<n.length?n.push(m):(l=u.substring(3).trim(),m=!this.parseCondition(l,i),n.push(m),h.push(!m));else if(u.indexOf("#elseif")!=-1||u.indexOf("#else")!=-1&&u.indexOf(" if")!=-1)h[h.length-1]?(n.pop(),m=!0,n.push(m)):(n.pop(),(m=n[n.length-1])&&1<n.length?n.push(m):((l=u.substring(u.indexOf("if")+2).trim())==""&&console.error("preprocess command error, conditions missing: "+u),m=!this.parseCondition(l,i),n.push(m),h.push(!m)));else if(u.indexOf("#else")!=-1)n.pop(),m&&1<n.length&&n[n.length-1]?n.push(m):n.push(!m);else if(u.indexOf("#endif")!=-1)n.pop(),h.pop();else if(u.indexOf("#include")!=-1){let _="",g=u.charAt(u.length-1);if(_=g==">"?this.extract(u,"<",">"):this.extract(u,g,g),!e.includeMap.has(_)){e.includeMap.set(_,!0);var c=G.getShader(_);if(!c)throw`${u} error: '${_}' not found`;c=this.filterComment(c),c=this.parsePreprocess(e,c,i),s+=c+`\r
`}}else{if(u.indexOf("#define ")==-1)throw"nonsupport: "+u;{let _=u.substring(u.indexOf("#define ")+8).trim(),g=_.indexOf(" "),w=_,C="";g!=-1&&(w=_.substring(0,g).trim(),C=_.substring(g+1).trim()),i[w]=C}}}}return s}static parseCondition(e,t){return t=t[e],t!=null&&(t==1||t!=0)}static filterComment(e){let t="",i=!0,s=!0;for(let a=0;a<e.length;){let n=i?e.indexOf("//",a):-1,h=s?e.indexOf("/*",a):-1;if(n==-1&&h==-1){t+=e.substring(a);break}i=n!=-1,s=h!=-1,n!=-1&&h!=-1&&(n<h?h=-1:n=-1),n!=-1?(h=e.indexOf(`
`,n),t+=e.substring(a,n),a=h!=-1?h:e.length):h!=-1&&(n=e.indexOf("*/",h),t+=e.substring(a,h),a=n+2)}return t}static extract(e,t,i){return t=e.indexOf(t)+t.length,i=e.indexOf(i,t),e.substring(t,i).trim()}}class Go{constructor(){o(this,"includeMap",new Map)}}const ks=class{constructor(){o(this,"attributes",[]),o(this,"vs_variables",[]),o(this,"fs_variables",[]),o(this,"cs_variables",[]),o(this,"groups",[]),o(this,"variables",{}),o(this,"useSplit",!1)}static parser(r,e){e.shaderReflection||(e.shaderReflection=new ks),r.indexOf("@vertex")!=-1?(e.shaderReflection.attributes=this.parserVertexOld(r),e.shaderReflection.vs_variables=this.parserVariables(r)):r.indexOf("@fragment")!=-1?e.shaderReflection.fs_variables=this.parserVariables(r):r.indexOf("@compute")!=-1&&(e.shaderReflection.cs_variables=this.parserVariables(r))}static parser2(r,e){e.shaderReflection||(e.shaderReflection=new ks);var t=e.shaderReflection;r.indexOf("@vertex")!=-1?(t.attributes=this.parserVertex(e.vsEntryPoint,r),t.vs_variables=this.parserVariables(r)):r.indexOf("@fragment")!=-1?t.fs_variables=this.parserVariables(r):r.indexOf("@compute")!=-1&&(t.cs_variables=this.parserVariables(r)),r.indexOf("splitTexture")!=-1&&(t.useSplit=!0)}static combineShaderReflectionVarInfo(r,e){for(const a of e){r.groups[a.group]||(r.groups[a.group]=[]);var t=a;if(r.groups[a.group][a.binding]){var i=r.groups[a.group][a.binding],s=a;if(i.varName!=s.varName&&console.warn(`shader reflection var not match! var name vs : ${i.varName} , fs : `+s.varName),i.varType!=s.varType&&console.error(`shader reflection varType not match! var varType vs : ${i.varType} , fs : `+s.varType),i.dataType!=s.dataType&&console.warn(`shader reflection dataType not match! var dataType vs : ${i.dataType} , fs : `+s.dataType),i.dataIsBuiltinType!=s.dataIsBuiltinType&&console.error(`shader reflection dataIsBuiltinType not match! var dataIsBuiltinType vs : ${i.dataIsBuiltinType} , fs : `+s.dataType),i.dataFields&&s.dataFields||console.warn(`shader reflection dataFields is empty! var dataFields vs : ${i.dataFields} , fs : `+s.dataFields),i.dataFields)for(let n=0;n<i.dataFields.length;n++)i.dataFields[n];if(s.dataFields)for(let n=0;n<s.dataFields.length;n++)s.dataFields[n]}r.groups[a.group][a.binding]=t,r.variables[a.varName]=t}}static final(r){var e=r.shaderReflection;this._shaderReflectionMap.set(r.shaderVariant,e),this.combineShaderReflectionVarInfo(e,e.vs_variables),this.combineShaderReflectionVarInfo(e,e.fs_variables)}static getShaderReflection2(r,e){e.shaderVariant!=null&&(r=yt.parse(r,e.defineValue),ks.parser2(r,e))}static poolGetReflection(r){return this._shaderReflectionMap.get(r)}static genShaderVar(r){let e=""+r.vs+r.fs+r.compute;e+="|";for(const t in r.uniforms)e+=t+":";e+="|";for(const t in r.constValues)e+=t+":",e+=r.constValues[t];e+="|";for(const t in r.defines)e+=t+":",e+=r.defines[t];e+="|";for(const t in r.shaderState)e+=t+":",e+=r.shaderState[t]+";";return e}static genShaderVariant(r){let e="";for(const t in r.uniforms)e+=t+":";e+="|";for(const t in r.constValues)e+=t+":",e+=r.constValues[t];e+="|";for(const t in r.defineValue)e+=t+":",e+=r.defineValue[t];return e}static genRenderShaderVariant(r){let e=`RenderShader(${r.vsName},${r.fsName})`;e=(e+="|")+this.genShaderVariant(r)+"|";for(const t in r.shaderState)e+=t+":",e+=r.shaderState[t]+";";return e}static genComputeShaderVariant(r){var e=`ComputeShader(${r.instanceID})`;return(e+="|")+this.genShaderVariant(r)}combine(r){var e=r.shaderReflection,t=r.defines,i={};for(let l=0;l<this.attributes.length;l++){var s=this.attributes[l];t[s.name]&&(i[s.name]=s)}var a=e.attributes.length;for(let l=0;l<a;l++){var n,h=e.attributes[l];i[h.name]?(n=i[h.name]).location==h.location&&n.name!=h.name&&console.log("location must same!"):this.attributes.push(h)}}static parserVariables(r){let e=0,t=[];for(;e<r.length;){var i=r.indexOf("@group(",e);if(i<0)break;var s=r.indexOf(";",i);e=s;let a=r.substring(i,s),n=this.extract(a,"@group(",")"),h=this.extract(a,"@binding(",")"),l="",u="var";a.indexOf("var<")!=-1?(l=this.extract(a,">",":"),u=this.extract(a,"var<",">").replace(",","-").replaceAll(" ","")):l=this.extract(a,"var",":"),i=a.substring(a.lastIndexOf(":")+1).trim(),s={group:0,binding:0,varType:"",varName:"",dataType:"",dataIsBuiltinType:!0,dataFields:null},s.group=Number.parseInt(n),s.binding=Number.parseInt(h),s.varType=u,s.varName=l,s.dataType=i,s.dataIsBuiltinType=this.isBuiltinTypes(s.dataType),s.dataIsBuiltinType||(s.dataFields=this.parserStructFields(r,s.dataType)),t.push(s)}return t}static extract(r,e,t){return e=r.indexOf(e)+e.length,t=r.indexOf(t,e),r.substring(e,t).trim()}static isBuiltinTypes(r){switch(r){case"i32":case"u32":case"f32":return!0;default:var e=r.indexOf("<");if(e!=-1)switch(r.substring(0,e)){case"vec2":case"vec3":case"vec4":case"mat3":case"mat4":return!0;case"array":return this.isBuiltinTypes(r.substring(e+1,r.lastIndexOf(">")))}}return!1}static parserStructFields(r,e){let t=[],i=0;for(;i<r.length&&!((n=r.indexOf("struct ",i))<0);){var s=r.indexOf("{",n);if(i=s,r.substring(n+6,s).trim()===e){var a,n=r.indexOf("{",n),s=r.indexOf("}",n);for(a of r.substring(n+1,s).split(",")){var h=a.indexOf(":");h!=-1&&(h={name:a.substring(0,h).trim(),type:a.substring(h+1).trim()},t.push(h))}break}}return t}static parserVertexOld(r){let e=[],t=r.split("fn main(")[1].split("->")[0],i=t.split("@");if(i&&1<i.length)for(let n=1;n<i.length;n++){let h=i[n].replace(/\s*$/g,"");h=(h=(h=h.replaceAll(",","")).replaceAll(`
`,"")).replaceAll("  "," "),this.parserAttribute(h,e)}else{var s=t.split(":")[1],r=(s=(s=(s=s.replaceAll("  ","")).replaceAll(" ","")).replaceAll(")",""),(s=r.split("struct "+s)[1]).indexOf("{")),a=s.indexOf("}");s=s.slice(r,a),i=s.split("@");for(let h=1;h<i.length;h++){let l=i[h].replace(/\s*$/g,"");l=(l=(l=l.replaceAll(`
`,"")).split(",")[0]).replaceAll("  "," "),this.parserAttribute(l,e)}}return e}static parserVertex(r,e){let t=[],i=e.split(`fn ${r}(`)[1].split("->")[0],s=i.split("@");if(s&&1<s.length)for(let n=1;n<s.length;n++){let h=s[n].replace(/\s*$/g,"");h=(h=(h=h.replaceAll(",","")).replaceAll(`
`,"")).replaceAll("  "," "),this.parserAttribute(h,t)}else{var r=i.split(":")[1],e=(r=(r=(r=r.replaceAll("  ","")).replaceAll(" ","")).replaceAll(")",""),(r=e.split("struct "+r)[1]).indexOf("{")),a=r.indexOf("}");r=r.slice(e,a),s=r.split("@");for(let l=1;l<s.length;l++){let u=s[l].replace(/\s*$/g,"");u=(u=(u=u.replaceAll(`
`,"")).split(",")[0]).replaceAll("  "," "),this.parserAttribute(u,t)}}return t}static parserAttribute(r,e){var t,i,s={name:"",group:0,location:0,type:"",valueType:"",value:0,size:0,format:"float32"};r.indexOf("builtin")!=-1?(s.type="builtin",t=r.match(/\((.+?)\)/g)[0],t=(t=(t=r.match(/\((.+?)\)/g)[0]).replace("(","")).replaceAll(")",""),s.location=parseInt(t),i=r.split(":"),s.name=i[0].split(" ")[1],s.name=s.name.replaceAll("  "," "),s.name=s.name.replaceAll(" ",""),s.valueType=i[1],s.valueType=s.valueType.replaceAll("  "," "),s.valueType=s.valueType.replaceAll(" ",""),s.valueType=s.valueType.replaceAll("\r",""),s.valueType=s.valueType.replaceAll(")",""),s.valueType=s.valueType.replaceAll(")",""),s.size=fi[s.valueType],e.push(s)):r.indexOf("location")!=-1&&(s.type="location",t=r.match(/\((.+?)\)/g)[0],t=(t=(t=r.match(/\((.+?)\)/g)[0]).replace("(","")).replaceAll(")",""),s.location=parseInt(t),i=r.split(":"),s.name=i[0].split(" ")[1],s.name=s.name.replaceAll("  "," "),s.name=s.name.replaceAll(" ",""),s.valueType=i[1],s.valueType=s.valueType.replaceAll("  "," "),s.valueType=s.valueType.replaceAll(" ",""),s.valueType=s.valueType.replaceAll("\r",""),s.valueType=s.valueType.replaceAll(")",""),s.valueType=s.valueType.replaceAll(")",""),s.size=fi[s.valueType],e.push(s)),s.format=Pf[fi[s.valueType]]}};let Rt=ks;o(Rt,"_shaderReflectionMap",new Map);class bi extends cl{constructor(e){super(),o(this,"entryPoint","CsMain"),o(this,"workerSizeX",1),o(this,"workerSizeY",0),o(this,"workerSizeZ",0),o(this,"_computePipeline"),o(this,"_csShaderModule"),o(this,"_destCS"),o(this,"_sourceCS"),o(this,"_storageTextureDic"),o(this,"_sampleTextureDic"),o(this,"_groupsShaderReflectionVarInfos"),this._sourceCS=e,Rt.getShaderReflection2(e,this),this._storageTextureDic=new Map,this._sampleTextureDic=new Map}setStorageTexture(e,t){this._storageTextureDic.has(e)||this._storageTextureDic.set(e,t)}setSamplerTexture(e,t){this._sampleTextureDic.set(e,t)}compute(e){this._computePipeline||this.genComputePipeline(),e.setPipeline(this._computePipeline);for(let t=0;t<this.bindGroups.length;++t)e.setBindGroup(t,this.bindGroups[t]);this.workerSizeX&&this.workerSizeY&&this.workerSizeZ?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY,this.workerSizeZ):this.workerSizeX&&this.workerSizeY?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY):e.dispatchWorkgroups(this.workerSizeX)}readHeap(){}genGroups(e,t,i=!1){if(!this.bindGroups[e]||i){var s=t[e],a=[];for(let m=0;m<s.length;++m){var n,h,l,u,c=s[m];if(c)switch(c.varType){case"uniform":var f=this._bufferDic.get(c.varName);f?(f={binding:c.binding,resource:{buffer:f.buffer,offset:0,size:f.memory.shareDataBuffer.byteLength}},a.push(f)):console.error(`ComputeShader(${this.instanceID})`,`buffer ${c.varName} is missing!`);break;case"storage-read":case"storage-read_write":var d,f=this._bufferDic.get(c.varName);f?(d={binding:c.binding,resource:{buffer:f.buffer,offset:0,size:f.memory.shareDataBuffer.byteLength}},a.push(d)):console.error(`ComputeShader(${this.instanceID})`,`buffer ${c.varName} is missing!`);break;case"var":c.dataType=="sampler"?(d=c.varName.replace("Sampler",""),(n=this._sampleTextureDic.get(d))?(n={binding:c.binding,resource:n.gpuSampler},a.push(n)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `)):c.dataType=="sampler_comparison"?(n=c.varName.replace("Sampler",""),(h=this._sampleTextureDic.get(n))?(h={binding:c.binding,resource:h.gpuSampler_comparison},a.push(h)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `)):c.dataType.indexOf("texture_storage")!=-1?(h=this._storageTextureDic.get(c.varName))?(l={binding:c.binding,resource:h.getGPUView()},a.push(l)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `):c.dataType.indexOf("texture")!=-1&&((l=this._sampleTextureDic.get(c.varName))?(u={binding:c.binding,resource:l.getGPUView()},a.push(u)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `));break;default:console.error("unprocessed type:",c.varType)}}i=D.device.createBindGroup({layout:this._computePipeline.getBindGroupLayout(e),entries:a}),this.bindGroups[e]=i}}genComputePipeline(){this.preCompileShader(this._sourceCS),this.genReflection(),this._computePipeline=D.device.createComputePipeline({layout:"auto",compute:{module:this.compileShader(),entryPoint:this.entryPoint}}),this._groupsShaderReflectionVarInfos=[];var e=this.shaderReflection;this.bindGroups=[];for(let i=0;i<e.groups.length;++i){var t=e.groups[i];this._groupsShaderReflectionVarInfos[i]=t,this.genGroups(i,this._groupsShaderReflectionVarInfos)}}preCompileShader(e){for(const i in this.constValues){var t;Object.prototype.hasOwnProperty.call(this.constValues,i)&&(t=this.constValues[i],e=e.replaceAll("&"+i,t.toString()))}this._destCS=yt.parseComputeShader(e,this.defineValue)}compileShader(){var e=D.device.createShaderModule({label:`ComputeShader(${this.instanceID})`,code:this._destCS});return e.getCompilationInfo().then(t=>{0<t.messages.length&&console.log(this._destCS)}),this._csShaderModule=e}genReflection(){this.shaderVariant+=Rt.genComputeShaderVariant(this);var e=Rt.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(Rt.getShaderReflection2(this._destCS,this),Rt.combineShaderReflectionVarInfo(this.shaderReflection,this.shaderReflection.cs_variables))}}class Ht{static start(e){let t=this.profilerLabelMap.get(e);t||(t={lable:e,start:0,end:0,total:0,count:0,child:new Map},this.profilerLabelMap.set(e,t)),t.start=performance.now(),t.end=performance.now(),t.count=0,t.child.clear()}static end(e){e=this.profilerLabelMap.get(e),e&&(e.end=performance.now(),e.total=e.end-e.start)}static countStart(e,t=""){if(e=this.profilerLabelMap.get(e),e&&(e.count++,t!="")){let i=e.child.get(t);(i=i||{lable:t,start:0,end:0,total:0,count:0}).start=performance.now(),i.end=performance.now(),i.count=0,e.child.set(t,i)}}static countEnd(e,t){if(e=this.profilerLabelMap.get(e),e&&t!=""){let i=e.child.get(t);(i=i||{lable:t,start:0,end:0,total:0,count:0}).end=performance.now(),i.total=i.end-i.start,i.count++}}static print(e){var t=this.profilerLabelMap.get(e);t&&console.log("performance",e,t.total+" ms")}}o(Ht,"profilerLabelMap",new Map);class $t{}o($t,"AXIS_ANGLE","axisAngle"),o($t,"EULER_ANGLES","eulerAngles"),o($t,"QUATERNION","quaternion");const dt=class{constructor(r=0,e=0,t=0,i=1){o(this,"x",0),o(this,"y",0),o(this,"z",0),o(this,"w",1),this.x=r,this.y=e,this.z=t,this.w=i}static identity(){return dt._zero}static quaternionToMatrix(d,e){var u=2*d.x,c=2*d.y,t=2*d.z,i=d.x*u,s=d.y*c,a=d.z*t,n=d.x*c,h=d.x*t,l=d.y*t,u=d.w*u,c=d.w*c,d=d.w*t;e.rawData[0]=1-(s+a),e.rawData[1]=n+d,e.rawData[2]=h-c,e.rawData[3]=0,e.rawData[4]=n-d,e.rawData[5]=1-(i+a),e.rawData[6]=l+u,e.rawData[7]=0,e.rawData[8]=h+c,e.rawData[9]=l-u,e.rawData[10]=1-(i+s),e.rawData[11]=0,e.rawData[12]=0,e.rawData[13]=0,e.rawData[14]=0,e.rawData[15]=1}get magnitude(){return Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z)}set(r=0,e=0,t=0,i=1){this.x=r,this.y=e,this.z=t,this.w=i}divide(r){return r instanceof dt?new dt(this.x/r.x,this.y/r.y,this.z/r.z):(this.x=this.x/r,this.y=this.y/r,this.z=this.z/r,this)}setFromArray(r){return this.x=r[0],this.y=r[1],this.z=r[2],this.w=r[3],this}multiply(a,u){var t=a.w,i=a.x,s=a.y,a=a.z,n=u.w,h=u.x,l=u.y,u=u.z;this.w=t*n-i*h-s*l-a*u,this.x=t*h+i*n+s*u-a*l,this.y=t*l-i*u+s*n+a*h,this.z=t*u+i*l-s*h+a*n}multiplyVector(s,e=null){e=e||new dt;var t=s.x,i=s.y,s=s.z;return e.w=-this.x*t-this.y*i-this.z*s,e.x=this.w*t+this.y*s-this.z*i,e.y=this.w*i-this.x*s+this.z*t,e.z=this.w*s+this.x*i-this.y*t,e}fromAxisAngle(r,t){var t=.5*(t*=Math.PI/180),i=Math.sin(t);this.w=Math.cos(t),this.x=r.x*i,this.y=r.y*i,this.z=r.z*i,this.normalize()}toAxisAngle(r){var e=this.x*this.x+this.y*this.y+this.z*this.z,t=0;return 0<e?(t=2*Math.acos(this.w),e=1/Math.sqrt(e),r.x=this.x*e,r.y=this.y*e,r.z=this.z*e):(t=0,r.x=1,r.y=0,r.z=0),t}slerp(l,f,t){var i,s,a=l.w,n=l.x,h=l.y,l=l.z,u=f.w,c=f.x,d=f.y,f=f.z,m=a*u+n*c+h*d+l*f;m<0&&(m=-m,u=-u,c=-c,d=-d,f=-f),m<.95?(m=Math.acos(m),s=1/Math.sin(m),i=Math.sin(m*(1-t))*s,m=Math.sin(m*t)*s,this.w=a*i+u*m,this.x=n*i+c*m,this.y=h*i+d*m,this.z=l*i+f*m):(this.w=a+t*(u-a),this.x=n+t*(c-n),this.y=h+t*(d-h),this.z=l+t*(f-l),s=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=s,this.x*=s,this.y*=s,this.z*=s)}lerp(n,c,t){var i=n.w,s=n.x,a=n.y,n=n.z,h=c.w,l=c.x,u=c.y,c=c.z;i*h+s*l+a*u+n*c<0&&(h=-h,l=-l,u=-u,c=-c),this.w=i+t*(h-i),this.x=s+t*(l-s),this.y=a+t*(u-a),this.z=n+t*(c-n),h=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=h,this.x*=h,this.y*=h,this.z*=h}fromEulerAngles(s,n,l){var s=.5*(s*=Ee),n=.5*(n*=Ee),l=.5*(l*=Ee),i=Math.cos(s),s=Math.sin(s),a=Math.cos(n),n=Math.sin(n),h=Math.cos(l),l=Math.sin(l);return this.w=i*a*h+s*n*l,this.x=s*a*h-i*n*l,this.y=i*n*h+s*a*l,this.z=i*a*l-s*n*h,this}toEulerAngles(r=null){(r=r||new p).x=Math.atan2(2*(this.w*this.x+this.y*this.z),1-2*(this.x*this.x+this.y*this.y));var e=2*(this.w*this.y-this.z*this.x),e=this.clampf(e,-1,1);return r.y=Math.asin(e),r.z=Math.atan2(2*(this.w*this.z+this.x*this.y),1-2*(this.y*this.y+this.z*this.z)),r.x/=Ee,r.y/=Ee,r.z/=Ee,r}setFromRotationMatrix(u){var u=u.rawData,e=u[0],t=u[4],i=u[8],s=u[1],a=u[5],n=u[9],h=u[2],l=u[6],u=u[10],c=e+a+u;return 0<c?(c=.5/Math.sqrt(c+1),this.w=.25/c,this.x=(l-n)*c,this.y=(i-h)*c,this.z=(s-t)*c):a<e&&u<e?(c=2*Math.sqrt(1+e-a-u),this.w=(l-n)/c,this.x=.25*c,this.y=(t+s)/c,this.z=(i+h)/c):u<a?(c=2*Math.sqrt(1+a-e-u),this.w=(i-h)/c,this.x=(t+s)/c,this.y=.25*c,this.z=(n+l)/c):(c=2*Math.sqrt(1+u-e-a),this.w=(s-t)/c,this.x=(i+h)/c,this.y=(n+l)/c,this.z=.25*c),this}getEulerAngles(r){var e,t,i,s,a,n,h;return r=r===void 0?new p:r,i=this.x,s=this.y,a=this.z,h=(h=2*((n=this.w)*s-i*a))<=-.99999?(e=2*Math.atan2(i,n),t=-Math.PI/2,0):.99999<=h?(e=2*Math.atan2(i,n),t=Math.PI/2,0):(e=Math.atan2(2*(n*i+s*a),1-2*(i*i+s*s)),t=Math.asin(h),Math.atan2(2*(n*a+i*s),1-2*(s*s+a*a))),r.set(e,t,h).scaleBy(ps)}normalize(r=1){r/=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w),this.x*=r,this.y*=r,this.z*=r,this.w*=r}toString(){return"{x:"+this.x+" y:"+this.y+" z:"+this.z+" w:"+this.w+"}"}fromMatrix(r){r=r.decompose($t.QUATERNION)[1],this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w}inverse(r=null){r=r||new dt;var e=this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z;return 0<e&&(r.w=this.w*(e=1/e),r.x=-this.x*e,r.y=-this.y*e,r.z=-this.z*e),r}clone(){return new dt(this.x,this.y,this.z,this.w)}transformVector(h,e=null){var t,i,s,a=h.x,n=h.y,h=h.z;return e=e||new p,s=-this.x*a-this.y*n-this.z*h,t=this.w*a+this.y*h-this.z*n,i=this.w*n-this.x*h+this.z*a,h=this.w*h+this.x*n-this.y*a,e.x=-s*this.x+t*this.w-i*this.z+h*this.y,e.y=-s*this.y+t*this.z+i*this.w-h*this.x,e.z=-s*this.z-t*this.y+i*this.x+h*this.w,e}copyFrom(r){this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w}mul(r,e,t){return t=t||new dt,t.x=r.w*e.x+r.x*e.w+r.y*e.z-r.z*e.y,t.y=r.w*e.y+r.y*e.w+r.z*e.x-r.x*e.z,t.z=r.w*e.z+r.z*e.w+r.x*e.y-r.y*e.x,t.w=r.w*e.w-r.x*e.x-r.y*e.y-r.z*e.z,t}clampf(r,e,t){var i;return t<e&&(i=e,e=t,t=i),r<e?e:r<t?r:t}};let _e=dt;o(_e,"HELP_0",new dt),o(_e,"HELP_1",new dt),o(_e,"HELP_2",new dt),o(_e,"_zero",new dt(0,0,0,1)),o(_e,"CALCULATION_QUATERNION",new dt);let ps=180/Math.PI,Ee=Math.PI/180;function ft(r,e,t){return Math.max(e,Math.min(t,r))}class gr{static gaussFunction(e,t,i,s){return e=Math.pow(e-i,2),i=2*Math.pow(s,2),s=Math.pow(Math.E,e/i*-1),Math.round(s*t)}static computeGaussian(e,t){return 1/Math.sqrt(2*Math.PI*t)*Math.exp(-e*e/(2*t*t))}static gaussCoef(s){s<.5&&(s=.5);var s=Math.exp(.527076)/s,n=Math.exp(-s),h=Math.exp(-2*s),t=(1-n)*(1-n)/(1+2*s*n-h),i=t*(s-1)*n,s=t*(1+s)*n,a=-t*h,n=2*n,h=-h;return new Float32Array([t,i,s,a,n,h,(t+i)/(1-n-h),(s+a)/(1-n-h)])}static clampf(e,t,i){var s;return i<t&&(s=t,t=i,i=s),e<t?t:e<i?e:i}static normalizeAngle(e){for(;180<e;)e-=360;for(;e<-180;)e+=360;return e}static fract(e){return e-Math.floor(e)}static getRandDirXZ(t){var t=t*Math.random(),i=360*Math.random()*Ee;return{x:Math.cos(i)*t,z:Math.sin(i)*t}}static getRandDirXYZ(t){var t=t*Math.random(),a=360*Math.random()*Ee,i=Math.cos(a)*t,s=Math.tan(a)*t,a=Math.sin(a)*t;return new p(i,s,a)}static getCycleXYZ(s){var t=s*Math.random(),a=360*Math.random()*Ee,i=Math.cos(a)*t,s=s*Math.random()-.5*s,a=Math.sin(a)*t;return new p(i,s,a)}static angle(e,t){var i=Ge.HELP_0,s=Ge.HELP_1;return i.set(e.x,e.z),s.set(t.x,t.z),Math.acos((i.x*s.x+i.y*s.y)/(i.abs()*s.abs()))}static angle_360(e,t){var i=p.HELP_0;return e.cross(t,i),0<i.z?gr.angle(e,t):360-gr.angle(e,t)}getRotationY(e){return gr.normalizeAngle(Math.atan2(e.z,e.x)*ps)}static fromToRotation(e,t,i=null){i=i||new _e;var s=new q;return q.fromToRotation(e,t,s),i.fromMatrix(s),i}static getEularDir_yUp(e){var t=_e.HELP_0;return t.fromEulerAngles(0,e,0),t.transformVector(p.Z_AXIS,p.HELP_5),p.HELP_5}static transformVector(E,V,i=null){i=i||new p;var E=E.rawData,s=E[0],a=E[1],n=E[2],h=E[3],l=E[4],u=E[5],c=E[6],d=E[7],f=E[8],m=E[9],_=E[10],g=E[11],w=E[12],C=E[13],b=E[14],E=E[15],I=V.x,N=V.y,V=V.z;return i.x=s*I+l*N+f*V+w,i.y=a*I+u*N+m*V+C,i.z=n*I+c*N+_*V+b,i.w=h*I+d*N+g*V+E,i}}function xt(r,e){return r instanceof p&&e instanceof p||r instanceof _e&&e instanceof _e?r.x*e.x+r.y*e.y+r.z*e.z:r.x*e.x+r.y*e.y}function Rf(r){return xt(r,r)}function dl(r,e){return r-Math.floor(r/e)*e}const z=class{constructor(r=0){o(this,"index",0),o(this,"offset",0),o(this,"rawData"),o(this,"_position"),z.useCount>=z.allocCount&&z.allocMatrix(z.allocCount+1e3),this.index=z.useCount,this.offset=z.useCount*z.blockBytes+z.wasmMatrixPtr,z.globalMatrixRef[this.index]=this,z.useCount++,this.rawData=new Float32Array(z.matrixBytes.buffer,this.offset,16),this._position=new p,this.identity()}static allocMatrix(r){this.allocCount=r,z.matrixBytes=new Float32Array(16*r),z.buffer=z.matrixBytes.buffer,z.wasmMatrixPtr=0,this.globalMatrixRef||(this.globalMatrixRef=[]),this.globalMatrixRef.forEach(e=>{var t=e.rawData;e.rawData=new Float32Array(z.matrixBytes.buffer,e.offset,16);for(let i=0;i<t.length;i++)e.rawData[i]=t[i]}),z.help_matrix_0||(z.help_matrix_0=new z),z.help_matrix_1||(z.help_matrix_1=new z),z.help_matrix_2||(z.help_matrix_2=new z),z.helpMatrix||(z.helpMatrix=new z),z.helpMatrix2||(z.helpMatrix2=new z),z._getEulerMatrix||(z._getEulerMatrix=new z),z._getEulerMatrix.identity()}static fromToRotation(r,e,t){return(t=t||new z).transformDir(r,e),t}static getAxisRotation(r,e,t,h){var s,a=new z,h=h*(Math.PI/180),n=Math.cos(h),h=Math.sin(h),l=1-n;return a.rawData[0]=n+r*r*l,a.rawData[5]=n+e*e*l,a.rawData[10]=n+t*t*l,a.rawData[1]=(n=r*e*l)+(s=t*h),a.rawData[4]=n-s,a.rawData[8]=(n=r*t*l)+(s=e*h),a.rawData[2]=n-s,a.rawData[9]=(n=e*t*l)-(s=r*h),a.rawData[6]=n+s,a}static sanitizeEuler(r){z.makePositive(r)}static makePositive(r){var e=2*Math.PI-1e-4;r.x<-1e-4?r.x+=2*Math.PI:r.x>e&&(r.x-=2*Math.PI),r.y<-1e-4?r.y+=2*Math.PI:r.y>e&&(r.y-=2*Math.PI),r.z<-1e-4?r.z+=2*Math.PI:r.z>e&&(r.z-=2*Math.PI)}static matrixToEuler(r,e){return r.get(1,2)<.999?-.999<r.get(1,2)?(e.x=Math.asin(-r.get(1,2)),e.y=Math.atan2(r.get(0,2),r.get(2,2)),e.z=Math.atan2(r.get(1,0),r.get(1,1)),z.sanitizeEuler(e),!0):(e.x=.5*Math.PI,e.y=Math.atan2(r.get(0,1),r.get(0,0)),e.z=0,z.sanitizeEuler(e),!1):(e.x=.5*-Math.PI,e.y=Math.atan2(-r.get(0,1),r.get(0,0)),e.z=0,z.sanitizeEuler(e),!1)}static matrixMultiply(r,e,t){z.wasm.Matrix_Multiply(r.index,e.index,t.index)}static matrixAppend(r,e,t){z.wasm.Matrix_Append(r.index,e.index,t.index)}static matrixRotateY(r,e){z.wasm.Matrix_Append(r,e.index)}static matrixRotate(r,e,t){z.wasm.Matrix_Rotate(r,e,t.index)}lookAt(r,s,n=p.Y_AXIS){var i=this.rawData,s=(s.subtract(r,p.HELP_0),p.HELP_0),a=(s.length<1e-4&&(s.z=1),s.normalize(),n.crossProduct(s,p.HELP_1)),n=(a.length<1e-4&&(.9999<Math.abs(n.z)?s.x+=1e-4:s.z+=1e-4),s.normalize(),n.cross(s,a),a.normalize(),s.crossProduct(a,p.HELP_2));i[0]=a.x,i[1]=n.x,i[2]=s.x,i[3]=0,i[4]=a.y,i[5]=n.y,i[6]=s.y,i[7]=0,i[8]=a.z,i[9]=n.z,i[10]=s.z,i[11]=0,i[12]=-a.dotProduct(r),i[13]=-n.dotProduct(r),i[14]=-s.dotProduct(r),i[15]=1}multiply(t){var e=this.rawData,t=t.rawData,i=z.float32Array;i[0]=e[0]*t[0]+e[1]*t[4]+e[2]*t[8]+e[3]*t[12],i[1]=e[0]*t[1]+e[1]*t[5]+e[2]*t[9]+e[3]*t[13],i[2]=e[0]*t[2]+e[1]*t[6]+e[2]*t[10]+e[3]*t[14],i[3]=e[0]*t[3]+e[1]*t[7]+e[2]*t[11]+e[3]*t[15],i[4]=e[4]*t[0]+e[5]*t[4]+e[6]*t[8]+e[7]*t[12],i[5]=e[4]*t[1]+e[5]*t[5]+e[6]*t[9]+e[7]*t[13],i[6]=e[4]*t[2]+e[5]*t[6]+e[6]*t[10]+e[7]*t[14],i[7]=e[4]*t[3]+e[5]*t[7]+e[6]*t[11]+e[7]*t[15],i[8]=e[8]*t[0]+e[9]*t[4]+e[10]*t[8]+e[11]*t[12],i[9]=e[8]*t[1]+e[9]*t[5]+e[10]*t[9]+e[11]*t[13],i[10]=e[8]*t[2]+e[9]*t[6]+e[10]*t[10]+e[11]*t[14],i[11]=e[8]*t[3]+e[9]*t[7]+e[10]*t[11]+e[11]*t[15],i[12]=e[12]*t[0]+e[13]*t[4]+e[14]*t[8]+e[15]*t[12],i[13]=e[12]*t[1]+e[13]*t[5]+e[14]*t[9]+e[15]*t[13],i[14]=e[12]*t[2]+e[13]*t[6]+e[14]*t[10]+e[15]*t[14],i[15]=e[12]*t[3]+e[13]*t[7]+e[14]*t[11]+e[15]*t[15],e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15]}multiplyMatrices(b,j){var b=b.rawData,j=j.rawData,t=this.rawData,i=b[0],s=b[4],a=b[8],n=b[12],h=b[1],l=b[5],u=b[9],c=b[13],d=b[2],f=b[6],m=b[10],_=b[14],g=b[3],w=b[7],C=b[11],b=b[15],E=j[0],I=j[4],N=j[8],V=j[12],W=j[1],Q=j[5],ue=j[9],ye=j[13],oe=j[2],ie=j[6],me=j[10],Ve=j[14],Ae=j[3],fe=j[7],X=j[11],j=j[15];return t[0]=i*E+s*W+a*oe+n*Ae,t[4]=i*I+s*Q+a*ie+n*fe,t[8]=i*N+s*ue+a*me+n*X,t[12]=i*V+s*ye+a*Ve+n*j,t[1]=h*E+l*W+u*oe+c*Ae,t[5]=h*I+l*Q+u*ie+c*fe,t[9]=h*N+l*ue+u*me+c*X,t[13]=h*V+l*ye+u*Ve+c*j,t[2]=d*E+f*W+m*oe+_*Ae,t[6]=d*I+f*Q+m*ie+_*fe,t[10]=d*N+f*ue+m*me+_*X,t[14]=d*V+f*ye+m*Ve+_*j,t[3]=g*E+w*W+C*oe+b*Ae,t[7]=g*I+w*Q+C*ie+b*fe,t[11]=g*N+w*ue+C*me+b*X,t[15]=g*V+w*ye+C*Ve+b*j,this}multiplyPoint3(r,e){e=e||new p;var t=this.rawData;return e.x=t[0]*r.x+t[4]*r.y+t[8]*r.z+t[12],e.y=t[1]*r.x+t[5]*r.y+t[9]*r.z+t[13],e.z=t[2]*r.x+t[6]*r.y+t[10]*r.z+t[14],e}multiplyVector4(a,e){e=e||new p;var t=this.rawData,i=a.x,s=a.y,a=a.z,n=t[3]*i+t[7]*s+t[11]*a+t[15];return e.x=(t[0]*i+t[4]*s+t[8]*a+t[12])/(n=n||1),e.y=(t[1]*i+t[5]*s+t[9]*a+t[13])/n,e.z=(t[2]*i+t[6]*s+t[10]*a+t[14])/n,e.w=1,e}perspectiveB(r,e,t,i){return r=Math.tan(r*Math.PI/360)*t,e*=r,this.frustum(-e,e,-r,r,t,i)}transformVector4(n,e){var t=this.rawData,i=(e=e||new p,n.x),s=n.y,a=n.z,n=n.w;return e.x=i*t[0]+s*t[4]+a*t[8]+n*t[12],e.y=i*t[1]+s*t[5]+a*t[9]+n*t[13],e.z=i*t[2]+s*t[6]+a*t[10]+n*t[14],e.w=i*t[3]+s*t[7]+a*t[11]+n*t[15],e}perspectiveMultiplyPoint3(r,e){var t=p.HELP_2,i=this.rawData;return t.x=i[0]*r.x+i[4]*r.y+i[8]*r.z+i[12],t.y=i[1]*r.x+i[5]*r.y+i[9]*r.z+i[13],t.z=i[2]*r.x+i[6]*r.y+i[10]*r.z+i[14],r=i[3]*r.x+i[7]*r.y+i[11]*r.z+i[15],1e-7<Math.abs(r)?(e.x=t.x*(i=1/r),e.y=t.y*i,e.z=t.z*i,!0):(e.x=0,e.y=0,e.z=0,!1)}perspective(a,e,t,i){var s=this.rawData,a=a*Ee/2,a=Math.cos(a)/Math.sin(a);s[0]=-a/e,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=a,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=i/(i-t),s[11]=1,s[12]=0,s[13]=0,s[14]=-t*i/(i-t),s[15]=0}ortho(r,e,t,i){var s=this.rawData;return s[0]=2/r,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=2/e,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1/(i-t),s[11]=0,s[12]=0,s[13]=0,s[14]=t/(t-i),s[15]=1,this}orthoZO(r,e,t,i,s,u){var n=this.rawData,h=1/(r-e),l=1/(t-i),u=1/(s-u);return n[0]=-2*h,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=-2*l,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=u,n[11]=0,n[12]=(r+e)*h,n[13]=(i+t)*l,n[14]=s*u,n[15]=1,this}orthoOffCenter(r,e,t,i,s,a){var n=this.rawData;n[0]=2/(e-r),n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2/(i-t),n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1/(a-s),n[11]=0,n[12]=(r+e)/(r-e),n[13]=(i+t)/(t-i),n[14]=s/(s-a),n[15]=1}transformDir(r,u){var t,i,s,a,n,h=this.rawData,l=p.HELP_0,u=(u.crossProduct(r,l),u.dotProduct(r));1-1e-6<u?this.identity():(t=(r=(1-u)/l.dotProduct(l))*l.x,i=r*l.z,s=t*l.y,a=t*l.z,n=i*l.y,h[0]=u+t*l.x,h[1]=s-l.z,h[2]=a+l.y,h[4]=s+l.z,h[5]=u+r*l.y*l.y,h[6]=n-l.x,h[8]=a-l.y,h[9]=n+l.x,h[10]=u+i*l.z,h[3]=0,h[7]=0,h[11]=0,h[15]=1)}append(r){var e=this.rawData,t=e[0],i=e[4],s=e[8],a=e[12],n=e[1],h=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],w=e[11],C=e[15];e[0]=t*r.rawData[0]+n*r.rawData[4]+c*r.rawData[8]+_*r.rawData[12],e[1]=t*r.rawData[1]+n*r.rawData[5]+c*r.rawData[9]+_*r.rawData[13],e[2]=t*r.rawData[2]+n*r.rawData[6]+c*r.rawData[10]+_*r.rawData[14],e[3]=t*r.rawData[3]+n*r.rawData[7]+c*r.rawData[11]+_*r.rawData[15],e[4]=i*r.rawData[0]+h*r.rawData[4]+d*r.rawData[8]+g*r.rawData[12],e[5]=i*r.rawData[1]+h*r.rawData[5]+d*r.rawData[9]+g*r.rawData[13],e[6]=i*r.rawData[2]+h*r.rawData[6]+d*r.rawData[10]+g*r.rawData[14],e[7]=i*r.rawData[3]+h*r.rawData[7]+d*r.rawData[11]+g*r.rawData[15],e[8]=s*r.rawData[0]+l*r.rawData[4]+f*r.rawData[8]+w*r.rawData[12],e[9]=s*r.rawData[1]+l*r.rawData[5]+f*r.rawData[9]+w*r.rawData[13],e[10]=s*r.rawData[2]+l*r.rawData[6]+f*r.rawData[10]+w*r.rawData[14],e[11]=s*r.rawData[3]+l*r.rawData[7]+f*r.rawData[11]+w*r.rawData[15],e[12]=a*r.rawData[0]+u*r.rawData[4]+m*r.rawData[8]+C*r.rawData[12],e[13]=a*r.rawData[1]+u*r.rawData[5]+m*r.rawData[9]+C*r.rawData[13],e[14]=a*r.rawData[2]+u*r.rawData[6]+m*r.rawData[10]+C*r.rawData[14],e[15]=a*r.rawData[3]+u*r.rawData[7]+m*r.rawData[11]+C*r.rawData[15]}add(X){var e=this.rawData,t=e[0],i=e[4],s=e[8],a=e[12],n=e[1],h=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],w=e[11],C=e[15],b=X.rawData[0],E=X.rawData[4],I=X.rawData[8],N=X.rawData[12],V=X.rawData[1],W=X.rawData[5],Q=X.rawData[9],ue=X.rawData[13],ye=X.rawData[2],oe=X.rawData[6],ie=X.rawData[10],me=X.rawData[14],Ve=X.rawData[3],Ae=X.rawData[7],fe=X.rawData[11],X=X.rawData[15];return e[0]=t+b,e[1]=n+V,e[2]=c+ye,e[3]=_+Ve,e[4]=i+E,e[5]=h+W,e[6]=d+oe,e[7]=g+Ae,e[8]=s+I,e[9]=l+Q,e[10]=f+ie,e[11]=w+fe,e[12]=a+N,e[13]=u+ue,e[14]=m+me,e[15]=C+X,this}sub(X){var e=this.rawData,t=e[0],i=e[4],s=e[8],a=e[12],n=e[1],h=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],w=e[11],C=e[15],b=X.rawData[0],E=X.rawData[4],I=X.rawData[8],N=X.rawData[12],V=X.rawData[1],W=X.rawData[5],Q=X.rawData[9],ue=X.rawData[13],ye=X.rawData[2],oe=X.rawData[6],ie=X.rawData[10],me=X.rawData[14],Ve=X.rawData[3],Ae=X.rawData[7],fe=X.rawData[11],X=X.rawData[15];return e[0]=t-b,e[1]=n-V,e[2]=c-ye,e[3]=_-Ve,e[4]=i-E,e[5]=h-W,e[6]=d-oe,e[7]=g-Ae,e[8]=s-I,e[9]=l-Q,e[10]=f-ie,e[11]=w-fe,e[12]=a-N,e[13]=u-ue,e[14]=m-me,e[15]=C-X,this}mult(r){var e=this.rawData;return e[0]*=r,e[1]*=r,e[2]*=r,e[3]*=r,e[4]*=r,e[5]*=r,e[6]*=r,e[7]*=r,e[8]*=r,e[9]*=r,e[10]*=r,e[11]*=r,e[12]*=r,e[13]*=r,e[14]*=r,e[15]*=r,this}appendRotation(r,e){e=z.getAxisRotation(e.x,e.y,e.z,r),this.append(e)}createByRotation(s,e){var t=z.helpMatrix,s=s*Ee,i=Math.sin(s),s=Math.cos(s);e.x==1&&(t.rawData[0]=1,t.rawData[1]=0,t.rawData[2]=0,t.rawData[3]=0,t.rawData[4]=0,t.rawData[5]=s,t.rawData[6]=i,t.rawData[7]=0,t.rawData[8]=0,t.rawData[9]=-i,t.rawData[10]=s,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),e.y==1&&(t.rawData[0]=s,t.rawData[1]=0,t.rawData[2]=-i,t.rawData[3]=0,t.rawData[4]=0,t.rawData[5]=1,t.rawData[6]=0,t.rawData[7]=0,t.rawData[8]=i,t.rawData[9]=0,t.rawData[10]=s,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),e.z==1&&(t.rawData[0]=s,t.rawData[1]=i,t.rawData[2]=0,t.rawData[3]=0,t.rawData[4]=-i,t.rawData[5]=s,t.rawData[6]=0,t.rawData[7]=0,t.rawData[8]=0,t.rawData[9]=0,t.rawData[10]=1,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),this.append(t)}appendScale(r,e,t){z.helpMatrix.createByScale(r,e,t),this.append(z.helpMatrix)}createByScale(r,e,t){var i=this.rawData;i[0]=r,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=t,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1}appendTranslation(r,e,t){var i=this.rawData;i[12]+=r,i[13]+=e,i[14]+=t}clone(){var r=new z;return r.copyFrom(this),r}copyRowFrom(r,e){var t=this.rawData;switch(r){case 0:t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w;break;case 1:t[4]=e.x,t[5]=e.y,t[6]=e.z,t[7]=e.w;break;case 2:t[8]=e.x,t[9]=e.y,t[10]=e.z,t[11]=e.w;break;case 3:t[12]=e.x,t[13]=e.y,t[14]=e.z,t[15]=e.w}}copyRowTo(r,e){var t=this.rawData;switch(r){case 0:e.x=t[0],e.y=t[1],e.z=t[2],e.w=t[3];break;case 1:e.x=t[4],e.y=t[5],e.z=t[6],e.w=t[7];break;case 2:e.x=t[8],e.y=t[9],e.z=t[10],e.w=t[11];break;case 3:e.x=t[12],e.y=t[13],e.z=t[14],e.w=t[15]}}copyFrom(r){var e=this.rawData;return e[0]=r.rawData[0],e[1]=r.rawData[1],e[2]=r.rawData[2],e[3]=r.rawData[3],e[4]=r.rawData[4],e[5]=r.rawData[5],e[6]=r.rawData[6],e[7]=r.rawData[7],e[8]=r.rawData[8],e[9]=r.rawData[9],e[10]=r.rawData[10],e[11]=r.rawData[11],e[12]=r.rawData[12],e[13]=r.rawData[13],e[14]=r.rawData[14],e[15]=r.rawData[15],this}copyRawDataTo(r,e=0,t){var i=this.rawData;r[0+e]=i[0],r[1+e]=i[1],r[2+e]=i[2],r[3+e]=i[3],r[4+e]=i[4],r[5+e]=i[5],r[6+e]=i[6],r[7+e]=i[7],r[8+e]=i[8],r[9+e]=i[9],r[10+e]=i[10],r[11+e]=i[11],r[12+e]=i[12],r[13+e]=i[13],r[14+e]=i[14],r[15+e]=i[15]}copyColFrom(r,e){var t=this.rawData;switch(r){case 0:t[0]=e.x,t[4]=e.y,t[8]=e.z,t[12]=e.w;break;case 1:t[1]=e.x,t[5]=e.y,t[9]=e.z,t[13]=e.w;break;case 2:t[2]=e.x,t[6]=e.y,t[10]=e.z,t[14]=e.w;break;case 3:t[3]=e.x,t[7]=e.y,t[11]=e.z,t[15]=e.w}}copyColTo(r,e){var t=this.rawData;switch(r){case 0:e.x=t[0],e.y=t[4],e.z=t[8],e.w=t[12];break;case 1:e.x=t[1],e.y=t[5],e.z=t[9],e.w=t[13];break;case 2:e.x=t[2],e.y=t[6],e.z=t[10],e.w=t[14];break;case 3:e.x=t[3],e.y=t[7],e.z=t[11],e.w=t[15]}}copyToMatrix3D(r){r.rawData=this.rawData.slice(0)}makeRotationFromQuaternion(r){return this.compose(z._zero,r,z._one),this}decompose(r="eulerAngles",i){var t=_e.CALCULATION_QUATERNION,i=i||z._prs,s=(this.copyRawDataTo(z.helpMatrix.rawData),z.helpMatrix.rawData),a=i[0],n=(a.x=s[12],a.y=s[13],a.z=s[14],s[12]=0,s[13]=0,s[14]=0,i[2]),h=(n.x=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),n.y=Math.sqrt(s[4]*s[4]+s[5]*s[5]+s[6]*s[6]),n.z=Math.sqrt(s[8]*s[8]+s[9]*s[9]+s[10]*s[10]),s[0]*(s[5]*s[10]-s[6]*s[9])-s[1]*(s[4]*s[10]-s[6]*s[8])+s[2]*(s[4]*s[9]-s[5]*s[8])<0&&(n.z=-n.z),s[0]/=n.x,s[1]/=n.x,s[2]/=n.x,s[4]/=n.y,s[5]/=n.y,s[6]/=n.y,s[8]/=n.z,s[9]/=n.z,s[10]/=n.z,i[1]);switch(r){case $t.AXIS_ANGLE:h.w=Math.acos((s[0]+s[5]+s[10]-1)/2);var l=Math.sqrt((s[6]-s[9])*(s[6]-s[9])+(s[8]-s[2])*(s[8]-s[2])+(s[1]-s[4])*(s[1]-s[4]));h.x=(s[6]-s[9])/l,h.y=(s[8]-s[2])/l,h.z=(s[1]-s[4])/l;break;case $t.QUATERNION:let u=s[0]+s[5]+s[10];0<u?(h.w=Math.sqrt(1+u)/2,h.x=(s[6]-s[9])/(4*h.w),h.y=(s[8]-s[2])/(4*h.w),h.z=(s[1]-s[4])/(4*h.w)):s[0]>s[5]&&s[0]>s[10]?(h.x=Math.sqrt(1+s[0]-s[5]-s[10])/2,h.w=(s[6]-s[9])/(4*h.x),h.y=(s[1]+s[4])/(4*h.x),h.z=(s[8]+s[2])/(4*h.x)):s[5]>s[10]?(h.y=Math.sqrt(1+s[5]-s[0]-s[10])/2,h.x=(s[1]+s[4])/(4*h.y),h.w=(s[8]-s[2])/(4*h.y),h.z=(s[6]+s[9])/(4*h.y)):(h.z=Math.sqrt(1+s[10]-s[0]-s[5])/2,h.x=(s[8]+s[2])/(4*h.z),h.y=(s[6]+s[9])/(4*h.z),h.w=(s[1]-s[4])/(4*h.z));break;case $t.EULER_ANGLES:0<(u=s[0]+s[5]+s[10])?(t.w=Math.sqrt(1+u)/2,t.x=(s[6]-s[9])/(4*t.w),t.y=(s[8]-s[2])/(4*t.w),t.z=(s[1]-s[4])/(4*t.w)):s[0]>s[5]&&s[0]>s[10]?(t.x=Math.sqrt(1+s[0]-s[5]-s[10])/2,t.w=(s[6]-s[9])/(4*t.x),t.y=(s[1]+s[4])/(4*t.x),t.z=(s[8]+s[2])/(4*t.x)):s[5]>s[10]?(h.y=Math.sqrt(1+s[5]-s[0]-s[10])/2,t.x=(s[1]+s[4])/(4*t.y),t.w=(s[8]-s[2])/(4*t.y),t.z=(s[6]+s[9])/(4*t.y)):(t.z=Math.sqrt(1+s[10]-s[0]-s[5])/2,t.x=(s[8]+s[2])/(4*t.z),t.y=(s[6]+s[9])/(4*t.z),t.w=(s[1]-s[4])/(4*t.z)),t.toEulerAngles(h)}return i[0]=a,i[1]=h,i[2]=n,i}static getEuler(r,e,t=!0,i){return r=r||new p,z._getEulerMatrix.makeRotationFromQuaternion(e).makeEuler(r,t,i),r}compose(r,f,g){var i=this.rawData,n=f.x,l=f.y,u=f.z,f=f.w,c=n+n,d=l+l,m=u+u,s=n*c,a=n*d,n=n*m,h=l*d,l=l*m,u=u*m,c=f*c,d=f*d,f=f*m,m=g.x,_=g.y,g=g.z;return i[0]=(1-(h+u))*m,i[1]=(a+f)*m,i[2]=(n-d)*m,i[3]=0,i[4]=(a-f)*_,i[5]=(1-(s+u))*_,i[6]=(l+c)*_,i[7]=0,i[8]=(n+d)*g,i[9]=(l-c)*g,i[10]=(1-(s+h))*g,i[11]=0,i[12]=r.x,i[13]=r.y,i[14]=r.z,i[15]=1,this}deltaTransformVector(a,e){e=e||new p;var t=this.rawData,i=a.x,s=a.y,a=a.z;return e.x=i*t[0]+s*t[4]+a*t[8],e.y=i*t[1]+s*t[5]+a*t[9],e.z=i*t[2]+s*t[6]+a*t[10],e.w=i*t[3]+s*t[7]+a*t[11],e}identity(){var r=this.rawData;return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}fill(r){var e=this.rawData;e[1]=r,e[2]=r,e[3]=r,e[4]=r,e[6]=r,e[7]=r,e[8]=r,e[9]=r,e[11]=r,e[12]=r,e[13]=r,e[14]=r,e[0]=r,e[5]=r,e[10]=r,e[15]=r}invers33(){var r=this.rawData,e=r[5]*r[10]-r[9]*r[6],t=r[8]*r[6]-r[4]*r[10],i=r[4]*r[9]-r[8]*r[5],s=r[9]*r[2]-r[1]*r[10],a=r[0]*r[10]-r[8]*r[2],n=r[8]*r[1]-r[0]*r[9],h=r[1]*r[6]-r[5]*r[2],l=r[4]*r[2]-r[0]*r[6],u=r[0]*r[5]-r[4]*r[1],c=r[0]*e+r[4]*s+r[8]*h;1e-11<Math.abs(c)&&(r[0]=(c=1/c)*e,r[4]=c*t,r[8]=c*i,r[1]=c*s,r[5]=c*a,r[9]=c*n,r[2]=c*h,r[6]=c*l,r[10]=c*u)}invert(){var r,e,t,i,s,a,n,h,l,u,c,d,f,m,_,g,w=this.determinant,C=1e-11<Math.abs(w),b=this.rawData;return C&&(r=b[0],e=b[4],t=b[8],i=b[12],s=b[1],a=b[5],n=b[9],h=b[13],l=b[2],u=b[6],c=b[10],d=b[14],f=b[3],m=b[7],_=b[11],g=b[15],b[0]=(w=1/w)*(a*(c*g-d*_)-n*(u*g-d*m)+h*(u*_-c*m)),b[1]=-w*(s*(c*g-d*_)-n*(l*g-d*f)+h*(l*_-c*f)),b[2]=w*(s*(u*g-d*m)-a*(l*g-d*f)+h*(l*m-u*f)),b[3]=-w*(s*(u*_-c*m)-a*(l*_-c*f)+n*(l*m-u*f)),b[4]=-w*(e*(c*g-d*_)-t*(u*g-d*m)+i*(u*_-c*m)),b[5]=w*(r*(c*g-d*_)-t*(l*g-d*f)+i*(l*_-c*f)),b[6]=-w*(r*(u*g-d*m)-e*(l*g-d*f)+i*(l*m-u*f)),b[7]=w*(r*(u*_-c*m)-e*(l*_-c*f)+t*(l*m-u*f)),b[8]=w*(e*(n*g-h*_)-t*(a*g-h*m)+i*(a*_-n*m)),b[9]=-w*(r*(n*g-h*_)-t*(s*g-h*f)+i*(s*_-n*f)),b[10]=w*(r*(a*g-h*m)-e*(s*g-h*f)+i*(s*m-a*f)),b[11]=-w*(r*(a*_-n*m)-e*(s*_-n*f)+t*(s*m-a*f)),b[12]=-w*(e*(n*d-h*c)-t*(a*d-h*u)+i*(a*c-n*u)),b[13]=w*(r*(n*d-h*c)-t*(s*d-h*l)+i*(s*c-n*l)),b[14]=-w*(r*(a*d-h*u)-e*(s*d-h*l)+i*(s*u-a*l)),b[15]=w*(r*(a*c-n*u)-e*(s*c-n*l)+t*(s*u-a*l))),C}transformPoint(a,e){var t=this.rawData,i=(e=e||new p,a.x),s=a.y,a=a.z;return e.x=i*t[0]+s*t[4]+a*t[8]+t[12],e.y=i*t[1]+s*t[5]+a*t[9]+t[13],e.z=i*t[2]+s*t[6]+a*t[10]+t[14],e}transformVector(a,e){var t=this.rawData,i=(e=e||new p,a.x),s=a.y,a=a.z;return e.x=i*t[0]+s*t[4]+a*t[8],e.y=i*t[1]+s*t[5]+a*t[9],e.z=i*t[2]+s*t[6]+a*t[10],e}transpose(){var r=this.rawData;for(let e=0;e<z.helpMatrix.rawData.length;e++)z.helpMatrix.rawData[e]=r[e];r[1]=z.helpMatrix.rawData[4],r[2]=z.helpMatrix.rawData[8],r[3]=z.helpMatrix.rawData[12],r[4]=z.helpMatrix.rawData[1],r[6]=z.helpMatrix.rawData[9],r[7]=z.helpMatrix.rawData[13],r[8]=z.helpMatrix.rawData[2],r[9]=z.helpMatrix.rawData[6],r[11]=z.helpMatrix.rawData[14],r[12]=z.helpMatrix.rawData[3],r[13]=z.helpMatrix.rawData[7],r[14]=z.helpMatrix.rawData[11]}get determinant(){var r=this.rawData;return(r[0]*r[5]-r[4]*r[1])*(r[10]*r[15]-r[14]*r[11])-(r[0]*r[9]-r[8]*r[1])*(r[6]*r[15]-r[14]*r[7])+(r[0]*r[13]-r[12]*r[1])*(r[6]*r[11]-r[10]*r[7])+(r[4]*r[9]-r[8]*r[5])*(r[2]*r[15]-r[14]*r[3])-(r[4]*r[13]-r[12]*r[5])*(r[2]*r[11]-r[10]*r[3])+(r[8]*r[13]-r[12]*r[9])*(r[2]*r[7]-r[6]*r[3])}getPosition(r){r=r||new p;var e=this.rawData;return r.x=e[12],r.y=e[13],r.z=e[14],r}get position(){return this._position.set(this.rawData[12],this.rawData[13],this.rawData[14]),this._position}set position(r){var e=this.rawData;e[12]=r.x,e[13]=r.y,e[14]=r.z}get scale(){var r=this.rawData;return new p(r[0],r[5],r[10])}set scale(r){var e=this.rawData;e[0]=r.x,e[5]=r.y,e[10]=r.z}toString(){var r=this.rawData;return"matrix3d("+Math.round(1e3*r[0])/1e3+","+Math.round(1e3*r[1])/1e3+","+Math.round(1e3*r[2])/1e3+","+Math.round(1e3*r[3])/1e3+","+Math.round(1e3*r[4])/1e3+","+Math.round(1e3*r[5])/1e3+","+Math.round(1e3*r[6])/1e3+","+Math.round(1e3*r[7])/1e3+","+Math.round(1e3*r[8])/1e3+","+Math.round(1e3*r[9])/1e3+","+Math.round(1e3*r[10])/1e3+","+Math.round(1e3*r[11])/1e3+","+Math.round(1e3*r[12])/1e3+","+Math.round(1e3*r[13])/1e3+","+Math.round(1e3*r[14])/1e3+","+Math.round(1e3*r[15])/1e3+")"}lerp(r,e,t){this.copyFrom(e).sub(r).mult(t).add(r)}get(r,e){return this.rawData[r+4*e]}set(r,e,t){this.rawData[r+4*e]=t}getMaxScaleOnAxis(){var t=this.rawData,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],t=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,e,t))}translate(s){var e=this.get(0,0)*s.x+this.get(0,1)*s.y+this.get(0,2)*s.z+this.get(0,3),t=this.get(1,0)*s.x+this.get(1,1)*s.y+this.get(1,2)*s.z+this.get(1,3),i=this.get(2,0)*s.x+this.get(2,1)*s.y+this.get(2,2)*s.z+this.get(2,3),s=this.get(3,0)*s.x+this.get(3,1)*s.y+this.get(3,2)*s.z+this.get(3,3);return this.set(0,3,e),this.set(1,3,t),this.set(2,3,i),this.set(3,3,s),this}setTRInverse(r,e){e=e.inverse(),_e.quaternionToMatrix(e,this),this.translate(new p(-r.x,-r.y,-r.z))}setScale(r){return this.set(0,0,r.x),this.set(0,1,0),this.set(0,2,0),this.set(0,3,0),this.set(1,0,0),this.set(1,1,r.y),this.set(1,2,0),this.set(1,3,0),this.set(2,0,0),this.set(2,1,0),this.set(2,2,r.z),this.set(2,3,0),this.set(3,0,0),this.set(3,1,0),this.set(3,2,0),this.set(3,3,1),this}makeBasis(r,e,t){return this.setElements(r.x,e.x,t.x,0,r.y,e.y,t.y,0,r.z,e.z,t.z,0,0,0,0,1),this}makeRotationAxis(h,i){var t=Math.cos(i),i=Math.sin(i),s=1-t,a=h.x,n=h.y,h=h.z,l=s*a,u=s*n;return this.setElements(l*a+t,l*n-i*h,l*h+i*n,0,l*n+i*h,u*n+t,u*h-i*a,0,l*h-i*n,u*h+i*a,s*h*h+t,0,0,0,0,1),this}static transpose(t,e){e=e||new z;var t=t.rawData,i=e.rawData;return i[0]=t[0],i[1]=t[4],i[2]=t[8],i[3]=t[12],i[4]=t[1],i[5]=t[5],i[6]=t[9],i[7]=t[13],i[8]=t[2],i[9]=t[6],i[10]=t[10],i[11]=t[14],i[12]=t[3],i[13]=t[7],i[14]=t[11],i[15]=t[15],e}static inverse(t,e){e=e||new z;var t=t.rawData,i=e.rawData,s=(i[0]=t[5]*t[10]*t[15]-t[5]*t[14]*t[11]-t[6]*t[9]*t[15]+t[6]*t[13]*t[11]+t[7]*t[9]*t[14]-t[7]*t[13]*t[10],i[1]=-t[1]*t[10]*t[15]+t[1]*t[14]*t[11]+t[2]*t[9]*t[15]-t[2]*t[13]*t[11]-t[3]*t[9]*t[14]+t[3]*t[13]*t[10],i[2]=t[1]*t[6]*t[15]-t[1]*t[14]*t[7]-t[2]*t[5]*t[15]+t[2]*t[13]*t[7]+t[3]*t[5]*t[14]-t[3]*t[13]*t[6],i[3]=-t[1]*t[6]*t[11]+t[1]*t[10]*t[7]+t[2]*t[5]*t[11]-t[2]*t[9]*t[7]-t[3]*t[5]*t[10]+t[3]*t[9]*t[6],i[4]=-t[4]*t[10]*t[15]+t[4]*t[14]*t[11]+t[6]*t[8]*t[15]-t[6]*t[12]*t[11]-t[7]*t[8]*t[14]+t[7]*t[12]*t[10],i[5]=t[0]*t[10]*t[15]-t[0]*t[14]*t[11]-t[2]*t[8]*t[15]+t[2]*t[12]*t[11]+t[3]*t[8]*t[14]-t[3]*t[12]*t[10],i[6]=-t[0]*t[6]*t[15]+t[0]*t[14]*t[7]+t[2]*t[4]*t[15]-t[2]*t[12]*t[7]-t[3]*t[4]*t[14]+t[3]*t[12]*t[6],i[7]=t[0]*t[6]*t[11]-t[0]*t[10]*t[7]-t[2]*t[4]*t[11]+t[2]*t[8]*t[7]+t[3]*t[4]*t[10]-t[3]*t[8]*t[6],i[8]=t[4]*t[9]*t[15]-t[4]*t[13]*t[11]-t[5]*t[8]*t[15]+t[5]*t[12]*t[11]+t[7]*t[8]*t[13]-t[7]*t[12]*t[9],i[9]=-t[0]*t[9]*t[15]+t[0]*t[13]*t[11]+t[1]*t[8]*t[15]-t[1]*t[12]*t[11]-t[3]*t[8]*t[13]+t[3]*t[12]*t[9],i[10]=t[0]*t[5]*t[15]-t[0]*t[13]*t[7]-t[1]*t[4]*t[15]+t[1]*t[12]*t[7]+t[3]*t[4]*t[13]-t[3]*t[12]*t[5],i[11]=-t[0]*t[5]*t[11]+t[0]*t[9]*t[7]+t[1]*t[4]*t[11]-t[1]*t[8]*t[7]-t[3]*t[4]*t[9]+t[3]*t[8]*t[5],i[12]=-t[4]*t[9]*t[14]+t[4]*t[13]*t[10]+t[5]*t[8]*t[14]-t[5]*t[12]*t[10]-t[6]*t[8]*t[13]+t[6]*t[12]*t[9],i[13]=t[0]*t[9]*t[14]-t[0]*t[13]*t[10]-t[1]*t[8]*t[14]+t[1]*t[12]*t[10]+t[2]*t[8]*t[13]-t[2]*t[12]*t[9],i[14]=-t[0]*t[5]*t[14]+t[0]*t[13]*t[6]+t[1]*t[4]*t[14]-t[1]*t[12]*t[6]-t[2]*t[4]*t[13]+t[2]*t[12]*t[5],i[15]=t[0]*t[5]*t[10]-t[0]*t[9]*t[6]-t[1]*t[4]*t[10]+t[1]*t[8]*t[6]+t[2]*t[4]*t[9]-t[2]*t[8]*t[5],t[0]*i[0]+t[1]*i[4]+t[2]*i[8]+t[3]*i[12]);for(let a=0;a<16;a++)i[a]/=s;return e}makeEuler(r,e,t="XYZ"){var i=this.rawData,s=i[0],a=i[4],n=i[8],h=i[1],l=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(t){case"XYZ":r.y=Math.asin(ft(n,-1,1)),Math.abs(n)<.9999999?(r.x=Math.atan2(-u,f),r.z=Math.atan2(-a,s)):(r.x=Math.atan2(d,l),r.z=0);break;case"YXZ":r.x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(r.y=Math.atan2(n,f),r.z=Math.atan2(h,l)):(r.y=Math.atan2(-c,s),r.z=0);break;case"ZXY":r.x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(r.y=Math.atan2(-c,f),r.z=Math.atan2(-a,l)):(r.y=0,r.z=Math.atan2(h,s));break;case"ZYX":r.y=Math.asin(-ft(c,-1,1)),Math.abs(c)<.9999999?(r.x=Math.atan2(d,f),r.z=Math.atan2(h,s)):(r.x=0,r.z=Math.atan2(-a,l));break;case"YZX":r.z=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(r.x=Math.atan2(-u,l),r.y=Math.atan2(-c,s)):(r.x=0,r.y=Math.atan2(n,f));break;case"XZY":r.z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(r.x=Math.atan2(d,l),r.y=Math.atan2(n,s)):(r.x=Math.atan2(-u,f),r.y=0)}return e&&r.multiplyScalar(ps),r}frustum(r,e,t,i,s,a){var n=this.rawData;return n[0]=2*s/(e-r),n[1]=0,n[2]=(e+r)/(e-r),n[3]=0,n[4]=0,n[5]=2*s/(i-t),n[6]=(i+t)/(i-t),n[7]=0,n[8]=0,n[9]=0,n[10]=-(a+s)/(a-s),n[11]=-2*a*s/(a-s),n[12]=0,n[13]=0,n[14]=-1,n[15]=0,this}setElements(r,e,t,i,s,a,n,h,l,u,c,d,f,m,_,g){var w=this.rawData;return w[0]=r,w[4]=e,w[8]=t,w[12]=i,w[1]=s,w[5]=a,w[9]=n,w[13]=h,w[2]=l,w[6]=u,w[10]=c,w[14]=d,w[3]=f,w[7]=m,w[11]=_,w[15]=g,this}makeMatrix44ByQuaternion(r,e,t){this.identity(),_e.quaternionToMatrix(t,this),this.appendTranslation(r.x,r.y,r.z),this.appendScale(e.x,e.y,e.z)}};let q=z;function Df(r,e,t){for(let i=0;i<4;i++)t.rawData[i]=r.rawData[i]*e.rawData[0]+r.rawData[i+4]*e.rawData[1]+r.rawData[i+8]*e.rawData[2]+r.rawData[i+12]*e.rawData[3],t.rawData[i+4]=r.rawData[i]*e.rawData[4]+r.rawData[i+4]*e.rawData[5]+r.rawData[i+8]*e.rawData[6]+r.rawData[i+12]*e.rawData[7],t.rawData[i+8]=r.rawData[i]*e.rawData[8]+r.rawData[i+4]*e.rawData[9]+r.rawData[i+8]*e.rawData[10]+r.rawData[i+12]*e.rawData[11],t.rawData[i+12]=r.rawData[i]*e.rawData[12]+r.rawData[i+4]*e.rawData[13]+r.rawData[i+8]*e.rawData[14]+r.rawData[i+12]*e.rawData[15]}function Ja(b,e,t,s){var s=s.rawData,w=.5*(b.x*Ee),C=.5*(b.y*Ee),b=.5*(b.z*Ee),a=Math.cos(w),w=Math.sin(w),_=Math.cos(C),C=Math.sin(C),g=Math.cos(b),b=Math.sin(b),E=(c=w*_*g-a*C*b)+c,n=(f=a*C*g+w*_*b)+f,h=(m=a*_*b-w*C*g)+m,l=c*E,u=c*n,c=c*h,d=f*n,f=f*h,m=m*h,_=(a=a*_*g+w*C*b)*E,g=a*n,w=a*h,C=t.x,b=t.y,E=t.z;s[0]=(1-(d+m))*C,s[1]=(u+w)*C,s[2]=(c-g)*C,s[3]=0,s[4]=(u-w)*b,s[5]=(1-(l+m))*b,s[6]=(f+_)*b,s[7]=0,s[8]=(c+g)*E,s[9]=(f-_)*E,s[10]=(1-(l+d))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1}function Lf(E,e,i){var E=E.rawData,i=i.rawData,s=E[0],a=E[4],n=E[8],h=E[12],l=E[1],u=E[5],c=E[9],d=E[13],f=E[2],m=E[6],_=E[10],g=E[14],w=E[3],C=E[7],b=E[11],E=E[15];i[0]=s*e.rawData[0]+l*e.rawData[4]+f*e.rawData[8]+w*e.rawData[12],i[1]=s*e.rawData[1]+l*e.rawData[5]+f*e.rawData[9]+w*e.rawData[13],i[2]=s*e.rawData[2]+l*e.rawData[6]+f*e.rawData[10]+w*e.rawData[14],i[3]=s*e.rawData[3]+l*e.rawData[7]+f*e.rawData[11]+w*e.rawData[15],i[4]=a*e.rawData[0]+u*e.rawData[4]+m*e.rawData[8]+C*e.rawData[12],i[5]=a*e.rawData[1]+u*e.rawData[5]+m*e.rawData[9]+C*e.rawData[13],i[6]=a*e.rawData[2]+u*e.rawData[6]+m*e.rawData[10]+C*e.rawData[14],i[7]=a*e.rawData[3]+u*e.rawData[7]+m*e.rawData[11]+C*e.rawData[15],i[8]=n*e.rawData[0]+c*e.rawData[4]+_*e.rawData[8]+b*e.rawData[12],i[9]=n*e.rawData[1]+c*e.rawData[5]+_*e.rawData[9]+b*e.rawData[13],i[10]=n*e.rawData[2]+c*e.rawData[6]+_*e.rawData[10]+b*e.rawData[14],i[11]=n*e.rawData[3]+c*e.rawData[7]+_*e.rawData[11]+b*e.rawData[15],i[12]=h*e.rawData[0]+d*e.rawData[4]+g*e.rawData[8]+E*e.rawData[12],i[13]=h*e.rawData[1]+d*e.rawData[5]+g*e.rawData[9]+E*e.rawData[13],i[14]=h*e.rawData[2]+d*e.rawData[6]+g*e.rawData[10]+E*e.rawData[14],i[15]=h*e.rawData[3]+d*e.rawData[7]+g*e.rawData[11]+E*e.rawData[15]}function Vo(b,E,I){var b=b.rawData,i=b[0],s=b[1],a=b[2],n=b[3],h=b[4],l=b[5],u=b[6],c=b[7],d=b[8],f=b[9],m=b[10],_=b[11],g=b[12],w=b[13],C=b[14],b=b[15],E=E.rawData,I=I.rawData,N=E[0],V=E[1],W=E[2],Q=E[3];return I[0]=N*i+V*h+W*d+Q*g,I[1]=N*s+V*l+W*f+Q*w,I[2]=N*a+V*u+W*m+Q*C,I[3]=N*n+V*c+W*_+Q*b,N=E[4],V=E[5],W=E[6],Q=E[7],I[4]=N*i+V*h+W*d+Q*g,I[5]=N*s+V*l+W*f+Q*w,I[6]=N*a+V*u+W*m+Q*C,I[7]=N*n+V*c+W*_+Q*b,N=E[8],V=E[9],W=E[10],Q=E[11],I[8]=N*i+V*h+W*d+Q*g,I[9]=N*s+V*l+W*f+Q*w,I[10]=N*a+V*u+W*m+Q*C,I[11]=N*n+V*c+W*_+Q*b,N=E[12],V=E[13],W=E[14],Q=E[15],I[12]=N*i+V*h+W*d+Q*g,I[13]=N*s+V*l+W*f+Q*w,I[14]=N*a+V*u+W*m+Q*C,I[15]=N*n+V*c+W*_+Q*b,I}o(q,"blockBytes",64),o(q,"block",16),o(q,"allocCount",0),o(q,"maxCount",2e5),o(q,"useCount",0),o(q,"buffer"),o(q,"wasmMatrixPtr",0),o(q,"matrixBytes"),o(q,"globalMatrixRef"),o(q,"wasm"),o(q,"help_matrix_0"),o(q,"help_matrix_1"),o(q,"help_matrix_2"),o(q,"helpMatrix"),o(q,"helpMatrix2"),o(q,"_getEulerMatrix"),o(q,"_zero",new p(0,0,0)),o(q,"_one",new p(1,1,1)),o(q,"_prs",[new p,new p,new p]),o(q,"float32Array",new Float32Array(16).fill(0));var Xe=(r=>(r[r.None=0]="None",r[r.PointLight=1]="PointLight",r[r.DirectionLight=2]="DirectionLight",r[r.SpotLight=3]="SpotLight",r[r.SkyLight=4]="SkyLight",r))(Xe||{});class Js extends ts{constructor(){super(...arguments),o(this,"index",-1),o(this,"lightType",-1),o(this,"radius",.5),o(this,"linear",1),o(this,"lightPosition",new p),o(this,"lightMatrixIndex",-1),o(this,"direction",new p),o(this,"quadratic",.032),o(this,"lightColor",new y(1,1,1,1)),o(this,"intensity",1),o(this,"innerAngle",0),o(this,"outerAngle",1),o(this,"range",100),o(this,"castShadowIndex",-1),o(this,"lightTangent",p.FORWARD),o(this,"iesIndex",-1)}}o(Js,"lightSize",24);const Re=class{static init(){Re.componentsUpdateList=new Map,Re.componentsLateUpdateList=new Map,Re.componentsBeforeUpdateList=new Map,Re.componentsComputeList=new Map,Re.graphicComponent=new Map,Re.waitStartComponent=new Map}static bindUpdate(r,e,t){let i=Re.componentsUpdateList.get(r);i||(i=new Map,Re.componentsUpdateList.set(r,i)),i.set(e,t)}static unBindUpdate(r,e){r=Re.componentsUpdateList.get(r),r&&r.delete(e)}static bindLateUpdate(r,e,t){let i=Re.componentsLateUpdateList.get(r);i||(i=new Map,Re.componentsLateUpdateList.set(r,i)),i.set(e,t)}static unBindLateUpdate(r,e){r=Re.componentsLateUpdateList.get(r),r&&r.delete(e)}static bindBeforeUpdate(r,e,t){let i=Re.componentsBeforeUpdateList.get(r);i||(i=new Map,Re.componentsBeforeUpdateList.set(r,i)),i.set(e,t)}static unBindBeforeUpdate(r,e){r=Re.componentsBeforeUpdateList.get(r),r&&r.delete(e)}static bindCompute(r,e,t){let i=Re.componentsComputeList.get(r);i||(i=new Map,Re.componentsComputeList.set(r,i)),i.set(e,t)}static unBindCompute(r,e){r=Re.componentsComputeList.get(r),r&&r.delete(e)}static bindGraphic(r,e,t){let i=Re.graphicComponent.get(r);i||(i=new Map,Re.graphicComponent.set(r,i)),i.set(e,t)}static unBindGraphic(r,e){r=Re.graphicComponent.get(r),r&&r.delete(e)}};let Te=Re;o(Te,"componentsUpdateList"),o(Te,"componentsLateUpdateList"),o(Te,"componentsBeforeUpdateList"),o(Te,"componentsComputeList"),o(Te,"graphicComponent"),o(Te,"waitStartComponent");class Mr{constructor(){o(this,"object3D",null),o(this,"eventDispatcher"),o(this,"_enable",!0),o(this,"__isStart",!1),this.eventDispatcher=new Li}get transform(){return this.object3D.transform}set enable(e){this._enable!=e&&(this._enable=e,this._enable?this.onEnable&&this.onEnable():this.onDisable&&this.onDisable())}get enable(){return this._enable}__init(e){this.init(e)}__start(){this.start&&this.transform&&this.transform.scene3D&&this.__isStart==0&&(this.start(),this.__isStart=!0),this.onEnable&&this.transform&&this.transform.scene3D&&this.onEnable(),this.onUpdate&&this._onUpdate(this.onUpdate.bind(this)),this.onLateUpdate&&this._onLateUpdate(this.onLateUpdate.bind(this)),this.onBeforeUpdate&&this._onBeforeUpdate(this.onBeforeUpdate.bind(this)),this.onCompute&&this._onCompute(this.onCompute.bind(this)),this.onGraphic&&this._onGraphic(this.onGraphic.bind(this))}__stop(){this.transform&&this.transform.scene3D&&this.onDisable&&this.onDisable(),this._onUpdate(null),this._onLateUpdate(null),this._onBeforeUpdate(null),this._onCompute(null),this._onGraphic(null)}init(e){}start(){}stop(){}cloneTo(e){}_onUpdate(e){e!=null?Te.bindUpdate(this.transform.view3D,this,e):Te.unBindUpdate(this.transform.view3D,this)}_onLateUpdate(e){e!=null?Te.bindLateUpdate(this.transform.view3D,this,e):Te.unBindLateUpdate(this.transform.view3D,this)}_onBeforeUpdate(e){e!=null?Te.bindLateUpdate(this.transform.view3D,this,e):Te.unBindLateUpdate(this.transform.view3D,this)}_onCompute(e){e!=null?Te.bindCompute(this.transform.view3D,this,e):Te.unBindCompute(this.transform.view3D,this)}_onGraphic(e){e!=null?Te.bindGraphic(this.transform.view3D,this,e):Te.unBindGraphic(this.transform.view3D,this)}destroy(){this.enable=!1,this.stop(),this._onBeforeUpdate(null),this._onUpdate(null),this._onLateUpdate(null),this.onEnable=null,this.onDisable=null,this.onUpdate=null,this.onLateUpdate=null,this.onBeforeUpdate=null,this.onCompute=null,this.onGraphic=null}}class Ba{constructor(){o(this,"value",0),o(this,"inv_base",0)}static get(e,t){let i=0,s=1/t;for(;0<e;)i+=e%t*s,e/=t,s/=t;return i}getBase(e,t){let i=this.inv_base=1/t;for(;0<e;)this.value+=i*(e%t),e/=t,i*=this.inv_base}next(){var e=1-this.value-1e-7;if(this.inv_base<e)this.value+=this.inv_base;else{let t=this.inv_base,i;for(;i=t,(t*=this.inv_base)>=e;);this.value+=i+t-1}}get(){return this.value}}const ei=class{constructor(r,e){o(this,"origin",new p),o(this,"length",Number.MAX_VALUE),o(this,"_vector",new p),o(this,"_dir",new p),o(this,"_v0",new p),o(this,"_v1",new p),o(this,"_v2",new p),o(this,"_E1",new p),o(this,"_E2",new p),o(this,"_P",new p),o(this,"_T",new p),o(this,"_Q",new p),this.origin.copyFrom(r||new p),this._dir.copyFrom(e||new p),this._dir.normalize()}get direction(){return this._dir}set direction(r){this._dir.copyFrom(r),this._dir.normalize()}clone(){return new ei(this.origin,this.direction)}intersectsBox(r){return this.intersectBox(r,this._vector)!==null}intersectBox(r,e){let t,i,s,a,n,h;var l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return i=0<=l?(t=(r.min.x-d.x)*l,(r.max.x-d.x)*l):(t=(r.max.x-d.x)*l,(r.min.x-d.x)*l),a=0<=u?(s=(r.min.y-d.y)*u,(r.max.y-d.y)*u):(s=(r.max.y-d.y)*u,(r.min.y-d.y)*u),t>a||s>i||((s>t||t!=t)&&(t=s),(a<i||i!=i)&&(i=a),h=0<=c?(n=(r.min.z-d.z)*c,(r.max.z-d.z)*c):(n=(r.max.z-d.z)*c,(r.min.z-d.z)*c),t>h)||n>i||((n>t||t!=t)&&(t=n),(i=h<i||i!=i?h:i)<0)?null:this.at(0<=t?t:i,e)}at(r,e){return e||(console.warn("at() target is now required"),e=new p),e.copy(this.direction).multiplyScalar(r).add(this.origin)}copy(r){return this.origin.copy(r.origin),this.direction.copy(r.direction),this._dir.copy(r._dir),this.length=r.length,this}setApproxDirection(r){this._dir=r.normalize()}setOrigin(r){this.origin.copyFrom(r)}getOrigin(){return this.origin}getPoint(r){return this._dir.scaleBy(r),this.origin.add(this._dir)}sqrDistToPoint(r){var e=this._dir,t=xt(r.subtract(this.origin),e),e=xt(e,e),t=this.getPoint(t/e);return Rf(r.subtract(t))}applyMatrix(r){this.origin=r.transformPoint(this.origin),this._dir=r.transformVector(this._dir)}pointInTriangle(n,c,a,s){var h=this._v0,l=this._v1,u=this._v2,s=(s.subtract(c,h),a.subtract(c,l),n.subtract(c,u),p.dot(h,h)),a=p.dot(h,l),n=p.dot(h,u),c=p.dot(l,l),h=p.dot(l,u),l=1/(s*c-a*a),u=(c*n-a*h)*l,c=(s*h-a*n)*l;return 0<=u&&0<=c&&u+c<1}intersectTriangle(r,e,t){var i=t.v1,s=t.v2,a=t.v3;s.subtract(i,this._E1),a.subtract(i,this._E2),e.cross(this._E2,this._P);let n=this._E1.dotProduct(this._P);return 0<n?r.subtract(i,this._T):(i.subtract(r,this._T),n=-n),n<1e-4||(t.u=this._T.dotProduct(this._P),t.u<0)||t.u>n||(this._T.cross(this._E1,this._Q),t.v=e.dotProduct(this._Q),t.v<0)||t.u+t.v>n?null:(s=new p,t.t0=t.t=this._E2.dotProduct(this._Q),a=1/n,t.t*=a,t.u*=a,t.v*=a,s.x=r.x+t.t*e.x,s.y=r.y+t.t*e.y,s.z=r.z+t.t*e.z,s)}intersectSphere(r,e,n,h){var n=r.subtract(n),s=p.dot(e,e),a=2*p.dot(n,e),n=a*a-4*s*(p.dot(n,n)-h*h),h=p.HELP_3;return n<0||(a=(-a-Math.sqrt(n))/(2*s))<0?null:(h.x=r.x+a*e.x,h.y=r.y+a*e.y,h.z=r.z+a*e.z,h)}intersectionSegment(r,e,t){var i,s,g=this.origin,a=p.HELP_0,l=p.HELP_1,n=p.HELP_2,h=p.HELP_3,l=(e.subtract(r,a),this._dir.scaleToRef(ei._rayl,n),g.add(n,l),r.subtract(g,h),p.dot(a,a)),g=p.dot(a,n),m=p.dot(n,n),_=p.dot(a,h),u=p.dot(n,h),c=l*m-g*g,d=c,f=c,m=(c<ei._smallnum?(i=0,d=1,s=u,f=m):(s=l*u-g*_,(i=g*u-m*_)<0?(i=0,s=u,f=m):d<i&&(i=d,s=u+g,f=m)),s<0?-_<(s=0)?i=0:l<-_?i=d:(i=-_,d=l):f<s&&(s=f,-_+g<0?i=0:l<-_+g?i=d:(i=-_+g,d=l)),c=Math.abs(i)<ei._smallnum?0:i/d,u=Math.abs(s)<ei._smallnum?0:s/f,p.HELP_4),_=(n.scaleToRef(u,m),p.HELP_5),g=(a.scaleToRef(c,_),_.add(h,_),p.HELP_6);return _.subtract(m,g),0<u&&u<=this._dir.length&&g.lengthSquared<t*t?((l=new p).copyFrom(e.subtract(r)),l.scaleBy(c),l.add(r,l),{out:l,length:_.length}):{out:null,length:-1}}get_vec(r,e){var t=p.HELP_1;return t.x=r.x-e.x,t.y=r.y-e.y,t.z=r.z-e.z,t}};let wi=ei;o(wi,"_rayl",1e9),o(wi,"_smallnum",1e-8);class ea{constructor(e=0,t=0,i=0,s=0){o(this,"x"),o(this,"y"),o(this,"w"),o(this,"h"),this.x=e,this.y=t,this.w=i,this.h=s}get width(){return this.w}set width(e){this.w=e}get height(){return this.h}set height(e){this.h=e}static pointInRect(e,t,i,s,a,n){return!(e<i||a<e||t<s||n<t)}clone(){return new ea(this.x,this.y,this.w,this.h)}copyFrom(e){this.x=e.x,this.y=e.y,this.w=e.w,this.h=e.h}copyTo(e){e.copyFrom(this)}inner(e,t){return!(e<this.x||e>this.x+this.width||t<this.y||t>this.y+this.height)}equal(e){return!(this.x!=e.x||this.y!=e.y||this.width!=e.width||this.height!=e.height)}equalArea(e,t,i,s){return!(this.x!=e||this.y!=t||this.width!=i||this.height!=s)}equalInnerArea(u){var t=this.x,i=this.y,s=this.x+this.width,a=this.y+this.height,n=u.x,h=u.y,l=u.x+u.width,u=u.y+u.height;return Math.max(t,n)<=Math.min(s,l)&&Math.max(i,h)<=Math.min(a,u)}innerArea(c,t){t=t||new ea;var i=this.x,h=this.y,s=this.x+this.width,u=this.y+this.height,a=c.x,l=c.y,n=c.x+c.width,c=c.y+c.height,h=Math.max(h,l),l=Math.min(u,c),u=Math.max(i,a),c=Math.min(n,s);return 0<=h&&0<=l&&0<=l-h&&0<c-u?(t.x=u,t.y=h,t.width=c-u,t.height=l-h):(t.x=0,t.y=0,t.width=0,t.height=0),t}setTo(e,t,i,s){this.x=e,this.y=t,this.width=i,this.height=s}}class If{constructor(){o(this,"viewProj",new q),o(this,"planes"),o(this,"corners"),o(this,"_centerSize"),this._centerSize=new p,this.planes=[],this.corners=[];for(var e=0;e<6;e++)this.planes[e]=new p;for(e=0;e<8;e++)this.corners[e]=new p}genBox(e){let t=0,i=9999999,s=9999999,a=9999999,n=-9999999,h=-9999999,l=-9999999;for(let c=0;c<2;++c)for(let d=0;d<2;++d)for(let f=0;f<2;++f){var u=this.corners[t];u.set(2*c-1,2*d-1,f,1),e.transformVector4(u,u),u.div(u.w,u),t++,i=Math.min(u.x,i),s=Math.min(u.y,s),a=Math.min(u.z,a),n=Math.max(u.x,n),h=Math.max(u.y,h),l=Math.max(u.z,l)}return this._centerSize.x=n-i,this._centerSize.y=h-s,this._centerSize.x=l-a,{minX:i,minY:s,minZ:a,maxX:n,maxY:h,maxZ:l}}setFrustumCorners(e){let t=0;for(let s=0;s<2;++s)for(let a=0;a<2;++a)for(let n=0;n<2;++n){var i=this.corners[t];i.set(2*s-1,2*a-1,n,1),e.transformVector4(i,i),i.div(i.w,i),t++}}update(t){var t=t.rawData,i=(this.planes[0].x=t[3]-t[0],this.planes[0].y=t[7]-t[4],this.planes[0].z=t[11]-t[8],this.planes[0].w=t[15]-t[12],Math.sqrt(this.planes[0].x*this.planes[0].x+this.planes[0].y*this.planes[0].y+this.planes[0].z*this.planes[0].z));this.planes[0].x/=i,this.planes[0].y/=i,this.planes[0].z/=i,this.planes[0].w/=i,this.planes[1].x=t[3]+t[0],this.planes[1].y=t[7]+t[4],this.planes[1].z=t[11]+t[8],this.planes[1].w=t[15]+t[12],i=Math.sqrt(this.planes[1].x*this.planes[1].x+this.planes[1].y*this.planes[1].y+this.planes[1].z*this.planes[1].z),this.planes[1].x/=i,this.planes[1].y/=i,this.planes[1].z/=i,this.planes[1].w/=i,this.planes[2].x=t[3]+t[1],this.planes[2].y=t[7]+t[5],this.planes[2].z=t[11]+t[9],this.planes[2].w=t[15]+t[13],i=Math.sqrt(this.planes[2].x*this.planes[2].x+this.planes[2].y*this.planes[2].y+this.planes[2].z*this.planes[2].z),this.planes[2].x/=i,this.planes[2].y/=i,this.planes[2].z/=i,this.planes[2].w/=i,this.planes[3].x=t[3]-t[1],this.planes[3].y=t[7]-t[5],this.planes[3].z=t[11]-t[9],this.planes[3].w=t[15]-t[13],i=Math.sqrt(this.planes[3].x*this.planes[3].x+this.planes[3].y*this.planes[3].y+this.planes[3].z*this.planes[3].z),this.planes[3].x/=i,this.planes[3].y/=i,this.planes[3].z/=i,this.planes[3].w/=i,this.planes[4].x=t[3]-t[2],this.planes[4].y=t[7]-t[6],this.planes[4].z=t[11]-t[10],this.planes[4].w=t[15]-t[14],i=Math.sqrt(this.planes[4].x*this.planes[4].x+this.planes[4].y*this.planes[4].y+this.planes[4].z*this.planes[4].z),this.planes[4].x/=i,this.planes[4].y/=i,this.planes[4].z/=i,this.planes[4].w/=i,this.planes[5].x=t[3]+t[2],this.planes[5].y=t[7]+t[6],this.planes[5].z=t[11]+t[10],this.planes[5].w=t[15]+t[14],i=Math.sqrt(this.planes[5].x*this.planes[5].x+this.planes[5].y*this.planes[5].y+this.planes[5].z*this.planes[5].z),this.planes[5].x/=i,this.planes[5].y/=i,this.planes[5].z/=i,this.planes[5].w/=i}containsPoint(e){for(var t=0;t<6;t++)if(this.planes[t].x*e.x+this.planes[t].y*e.y+this.planes[t].z*e.z+this.planes[t].w<=0)return!1;return!0}containsSphere(e){let t=e.bound,i=0,s,a,n=e.transform.worldPosition,h=t.radius,l=t.center.x+n.x,u=t.center.y+n.y,c=t.center.z+n.z,d=this.planes,f;for(a=0;a<6;a++){if((s=(f=d[a]).x*l+f.y*u+f.z*c+f.w)<=-h)return 0;h<s&&i++}return i===6?2:1}containsBox(e){let t=e.bound,i=0,s,a,n=e.transform.worldPosition,h=Math.max(t.size.x*e.transform.scaleX,t.size.y*e.transform.scaleY,t.size.z*e.transform.scaleZ),l=t.center.x+n.x,u=t.center.y+n.y,c=t.center.z+n.z,d=this.planes,f;for(a=0;a<6;a++){if((s=(f=d[a]).x*l+f.y*u+f.z*c+f.w)<=-h)return 0;h<s&&i++}return i===6?2:1}}var tt=(r=>(r[r.ortho=0]="ortho",r[r.perspective=1]="perspective",r[r.shadow=2]="shadow",r))(tt||{});class Gn extends Mr{constructor(){super(),o(this,"fov",1),o(this,"name"),o(this,"aspect",1),o(this,"near",1),o(this,"far",5e3),o(this,"viewPort",new ea),o(this,"frustum"),o(this,"isShadowCamera",!1),o(this,"_projectionMatrixInv",new q),o(this,"_projectionMatrix",new q),o(this,"_viewMatrix",new q),o(this,"_unprojection",new q),o(this,"_pvMatrixInv",new q),o(this,"_pvMatrix",new q),o(this,"_halfw"),o(this,"_halfh"),o(this,"_ray"),o(this,"lookTarget"),o(this,"type",tt.perspective),o(this,"cubeShadowCameras",[]),o(this,"_haltonSeq"),o(this,"_jitterOffsetList"),o(this,"_useJitterProjection",!1),o(this,"_jitterFrameIndex",0),o(this,"_sampleIndex",0),o(this,"_jitterX",0),o(this,"_jitterY",0)}get projectionMatrix(){return this._projectionMatrix}init(){super.init(),this._ray=new wi,this.frustum=new If,this.viewPort.x=0,this.viewPort.y=0,this.viewPort.w=D.presentationSize[0],this.viewPort.h=D.presentationSize[1],this.lookTarget=new p(0,0,0)}perspective(e,t,i,s){this.fov=e,this.aspect=t,this.near=i,this.far=s,this._projectionMatrix.perspective(e,t,i,s),this.type=tt.perspective}ortho(e,t,i,s){this.near=Math.max(i,.1),this.far=s,this._projectionMatrix.ortho(e,t,i,s),this.type=tt.ortho}orthoOffCenter(e,t,i,s,a,n){this.near=Math.max(a,.01),this.far=n,this._projectionMatrix.orthoOffCenter(e,t,i,s,a,n),this.type=tt.ortho}orthoZo(e,t,i,s,a,n){this.near=Math.max(a,.01),this.far=n,this._projectionMatrix.orthoZO(e,t,i,s,a,n),this.type=tt.ortho}get viewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.invert(),this._viewMatrix}get shadowViewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.appendScale(1,1,1),this._viewMatrix.invert(),this._viewMatrix}object3DToScreenRay(e,t=null){return t=t||new p(0,0,0,1),this._halfw=.5*this.viewPort.width,this._halfh=.5*this.viewPort.height,gr.transformVector(this.viewMatrix,e,t),this.project(t,t),t.x=this._halfw+t.x*this._halfw,t.y=this.viewPort.height-(this._halfh-t.y*this._halfh),t}screenRayToObject3D(e,t=null){t=t||new p,this._halfw=.5*this.viewPort.width,this._halfh=.5*this.viewPort.height;var i=e.x,s=e.y;return t.x=i/this.viewPort.width-.25,t.y=s/this.viewPort.height-.25,this.unProject(t.x,t.y,e.z,t),t}get pvMatrix(){return Vo(this._projectionMatrix,this.viewMatrix,this._pvMatrix),this._pvMatrix}get pvMatrix2(){return Vo(this._projectionMatrix,this.transform.worldMatrix,this._pvMatrix),this._pvMatrix}get pvMatrixInv(){var e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get projectionMatrixInv(){return this._projectionMatrixInv.copyFrom(this._projectionMatrix),this._projectionMatrixInv.invert(),this._projectionMatrixInv}unProject(e,t,i,s){return(s=s||new p).x=e,s.y=-t,s.z=i,s.w=1,s.x*=i,s.y*=i,this._unprojection.copyFrom(this._projectionMatrix),this._unprojection.invert(),gr.transformVector(this._unprojection,s,s),s.z=i,s}project(e,t){return this._projectionMatrix.perspectiveMultiplyPoint3(e,t),t.x=t.x/t.w,t.y=-t.y/t.w,t.z=e.z,t}screenPointToRay(e,t){let i=this._ray,s=Mt.UnProjection(e,t,.01,this),a=Mt.UnProjection(e,t,1,this);return a=a.subtract(s).normalize(),i.origin.copyFrom(s),i.direction=a,i}screenPointToWorld(e,t,i){return Mt.UnProjection(e,t,i,this)}worldToScreenPoint(e,t){return Mt.Projection(e,this,t)}lookAt(e,t,i=p.Y_AXIS){this.transform.lookAt(e,t,i),t&&this.lookTarget.copyFrom(t)}resetProjectMatrix(){this.perspective(this.fov,this.aspect,this.near,this.far)}onUpdate(){this.type==tt.perspective&&(this.aspect=D.aspect,this.resetProjectMatrix()),this._useJitterProjection&&this.getJitteredProjectionMatrix(),this.frustum.update(this.pvMatrix)}get jitterFrameIndex(){return this._jitterFrameIndex}get jitterX(){return this._jitterX}get jitterY(){return this._jitterY}enableJitterProjection(e){this._jitterFrameIndex=0,this._useJitterProjection=e,this._haltonSeq||(this._haltonSeq=new Ba),this._jitterOffsetList=[];for(let i=0;i<8;i++){var t=this.generateRandomOffset();this._jitterOffsetList.push(t)}this._jitterOffsetList.reverse()}generateRandomOffset(){var e=new Ge(Ba.get(1+(1023&this._sampleIndex),2)-.5,Ba.get(1+(1023&this._sampleIndex),3)-.5);return 8<=++this._sampleIndex&&(this._sampleIndex=0),e}getJitteredProjectionMatrix(){var i=T.setting.render.postProcessing.taa,e=this._projectionMatrix,s=i.temporalJitterScale,i=this._jitterFrameIndex%i.jitterSeedCount,t=this._jitterOffsetList[i].x*s,i=this._jitterOffsetList[i].y*s,s=e.get(0,2),a=e.get(1,2);this._jitterX=t/this.viewPort.width,this._jitterY=i/this.viewPort.height,s+=this._jitterX,a+=this._jitterY,e.set(0,2,s),e.set(1,2,a),this._jitterFrameIndex++}getCastShadowLightSpaceMatrix(e,t){var i=this.frustum,a=this.projectionMatrixInv,s=this.transform.worldMatrix,a=(q.helpMatrix.copyFrom(a),q.helpMatrix.multiply(s),i.setFrustumCorners(q.helpMatrix),i.corners),n=p.HELP_6;n.set(0,0,0);for(const m of a)n.add(m,n);n.div(a.length,n),s=p.HELP_5,s.copyFrom(n),p.HELP_0.copyFrom(t),s.add(p.HELP_0,s),e.lookAt(s,n,p.UP);let h=Number.MAX_VALUE,l=-Number.MAX_VALUE,u=Number.MAX_VALUE,c=-Number.MAX_VALUE,d=Number.MAX_VALUE,f=-Number.MAX_VALUE;for(const m of a)h=Math.min(h,m.x),l=Math.max(l,m.x),u=Math.min(u,m.y),c=Math.max(c,m.y),d=Math.min(d,m.z),f=Math.max(f,m.z);i=T.setting.shadow.shadowQuality,d<0?d*=i:d/=i,f<0?f/=i:f*=i,e.orthoOffCenter(h,l,u,c,d,f)}getWorldDirection(e){e=e||new p,this.transform.updateWorldMatrix();var t=this.transform._worldMatrix.rawData;return e.set(-t[8],-t[9],-t[10]).normalize()}}const Ns=class extends Mr{constructor(){super(),o(this,"eventPositionChange",new wt(Ns.POSITION_ONCHANGE)),o(this,"eventRotationChange",new wt(Ns.ROTATION_ONCHANGE)),o(this,"eventScaleChange",new wt(Ns.SCALE_ONCHANGE)),o(this,"onPositionChange"),o(this,"onRotationChange"),o(this,"onScaleChange"),o(this,"_scene3d"),o(this,"_parent"),o(this,"_localPos"),o(this,"_localRot"),o(this,"_localRotQuat"),o(this,"_localScale"),o(this,"_forward",new p),o(this,"_back",new p),o(this,"_right",new p),o(this,"_left",new p),o(this,"_up",new p),o(this,"_down",new p),o(this,"_worldMatrix"),o(this,"_localChange",!0),o(this,"_targetPos"),this._worldMatrix=new q(!0),this._localPos=new p,this._localRot=new p,this._localRotQuat=new _e,this._localScale=new p(1,1,1)}get targetPos(){return this._targetPos}set targetPos(r){this._targetPos=r}get parent(){return this._parent}set parent(r){r=(this._parent=r)?r.scene3D:null,r?(this._scene3d=r,this.object3D.components.forEach(e=>{this.object3D.appendLateStart(e)})):this.object3D.components.forEach(e=>{e.__stop()}),this.object3D.entityChildren.forEach(e=>{e.transform.parent=this})}set enable(r){this.transform._scene3d&&r?super.enable=!0:super.enable=!1,this.object3D.entityChildren.forEach(e=>{e.transform.enable=r})}get enable(){return this._enable}get scene3D(){return this._scene3d}set scene3D(r){this._scene3d=r}get view3D(){return this._scene3d&&this._scene3d.view?this._scene3d.view:null}awake(){}start(){}stop(){}notifyLocalChange(){this._localChange=!0;var r=this.object3D.entityChildren;for(let e=0,t=r.length;e<t;e++)r[e].transform.notifyLocalChange()}get up(){return this.worldMatrix.transformVector(p.UP,this._up),this._up}set up(r){this._up.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get down(){return this.worldMatrix.transformVector(p.DOWN,this._down),this._down}set down(r){this._down.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get forward(){return this.worldMatrix.transformVector(p.FORWARD,this._forward),this._forward}set forward(r){this._forward.copyFrom(r),gr.fromToRotation(p.FORWARD,this._forward,_e.HELP_0),this.transform.localRotQuat=_e.HELP_0,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get back(){return this.worldMatrix.transformVector(p.BACK,this._back),this._back}set back(r){this._back.copyFrom(r),gr.fromToRotation(p.BACK,this._back,_e.HELP_0),this.transform.localRotQuat=_e.HELP_0,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get left(){return this.worldMatrix.transformVector(p.neg_X_AXIS,this._left),this._left}set left(r){this._left.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get right(){return this.worldMatrix.transformVector(p.X_AXIS,this._right),this._right}set right(r){this._right.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotQuat(){return this._localRotQuat}set localRotQuat(r){this._localRotQuat=r,this._localRotQuat.getEulerAngles(this._localRot),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}notifyChange(){this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get worldMatrix(){return this.updateWorldMatrix(),this._worldMatrix}updateWorldMatrix(r=!1){(this._localChange||r)&&(this.parent?(Ja(this._localRot,this._localPos,this.localScale,this._worldMatrix),Lf(this._worldMatrix,this.parent.worldMatrix,this._worldMatrix)):Ja(this._localRot,this._localPos,this.localScale,this._worldMatrix),this._localChange=!1)}lookTarget(r,e=p.UP){var t=this.transform.worldPosition;this.lookAt(t,r,e)}lookAt(r,e,t=p.UP){this._targetPos=e.clone(),this._localPos.copyFrom(r),this.notifyLocalChange(),q.helpMatrix.lookAt(r,e,t),q.helpMatrix.invert(),r=q.helpMatrix.decompose($t.QUATERNION),_e.CALCULATION_QUATERNION.x=r[1].x,_e.CALCULATION_QUATERNION.y=r[1].y,_e.CALCULATION_QUATERNION.z=r[1].z,_e.CALCULATION_QUATERNION.w=r[1].w,_e.CALCULATION_QUATERNION.toEulerAngles(this._localRot),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.onPositionChange&&this.onPositionChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}destroy(){this.parent&&this.parent.object3D&&(this.parent.object3D.removeChild(this.object3D),this.scene3D=null,this.localPosition=null,this.localRotQuat=null,this.localRotation=null,this.localScale=null),super.destroy()}decomposeFromMatrix(r,e="eulerAngles"){return r=r.decompose(e),e=this.transform,e.localRotQuat.copyFrom(r[1]),e.localRotQuat=e.localRotQuat,e.localPosition.copyFrom(r[0]),e.localPosition=e.localPosition,e.localScale.copyFrom(r[2]),e.localScale=e.localScale,this.updateWorldMatrix(),this}cloneTo(r){r.transform.localPosition.copyFrom(this.localPosition),r.transform.localRotation.copyFrom(this.localRotation),r.transform.localScale.copyFrom(this.localScale)}set x(r){this._localPos.x!=r&&(this._localPos.x=r,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get x(){return this._localPos.x}set y(r){this._localPos.y!=r&&(this._localPos.y=r,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get y(){return this._localPos.y}set z(r){this._localPos.z!=r&&(this._localPos.z=r,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get z(){return this._localPos.z}set scaleX(r){this._localScale.x!=r&&(this._localScale.x=r,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleX(){return this._localScale.x}set scaleY(r){this._localScale.y!=r&&(this._localScale.y=r,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleY(){return this._localScale.y}set scaleZ(r){this._localScale.z!=r&&(this._localScale.z=r,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleZ(){return this._localScale.z}set rotationX(r){this._localRot.x!=r&&(this._localRot.x=r,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationX(){return this._localRot.x}set rotationY(r){this._localRot.y!=r&&(this._localRot.y=r,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationY(){return this._localRot.y}set rotationZ(r){this._localRot.z!=r&&(this._localRot.z=r,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationZ(){return this._localRot.z}get worldPosition(){return this._localChange&&this.updateWorldMatrix(),this._worldMatrix.position}set localPosition(r){this.x=r.x,this.y=r.y,this.z=r.z,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get localPosition(){return this._localPos}set localRotation(r){this.rotationX=r.x,this.rotationY=r.y,this.rotationZ=r.z,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotation(){return this._localRot}set localScale(r){this.scaleX=r.x,this.scaleY=r.y,this.scaleZ=r.z,this.notifyLocalChange(),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get localScale(){return this._localScale}};let ct=Ns;o(ct,"LIMIT",1),o(ct,"COMPONENT_NAME","UUTransform"),o(ct,"COMPONENT_TYPE","Transform"),o(ct,"POSITION_ONCHANGE","POSITION_ONCHANGE"),o(ct,"ROTATION_ONCHANGE","ROTATION_ONCHANGE"),o(ct,"SCALE_ONCHANGE","SCALE_ONCHANGE"),o(ct,"PARENT_ONCHANGE","PARENT_ONCHANGE"),o(ct,"CHILDREN_ONCHANGE","CHILDREN_ONCHANGE"),o(ct,"ADD_ONCHANGE","ADD_ONCHANGE");var ta=(r=>(r[r.None=2]="None",r[r.StaticBatch=4]="StaticBatch",r[r.DynamicBatch=8]="DynamicBatch",r))(ta||{});class Ho{static addMask(e,t){return e|t}static removeMask(e,t){return e&~t}static hasMask(e,t){return(e&t)!=0}}class pt{constructor(e,t){o(this,"center"),o(this,"extents"),o(this,"max"),o(this,"min"),o(this,"size"),this.center=e,this.extents=new p(t.x/2,t.y/2,t.z/2),this.size=t,this.max=this.center.add(this.extents),this.min=this.center.subtract(this.extents)}setFromMinMax(e,t){this.size=t.subtract(e),this.center=this.size.div(2).add(e),this.extents=new p(this.size.x/2,this.size.y/2,this.size.z/2),this.min=e,this.max=t}setFromCenterAndSize(e,t){this.size=t,this.center=e,this.extents=new p(this.size.x/2,this.size.y/2,this.size.z/2),this.min=new p(this.center.x+-this.extents.x,this.center.y+-this.extents.y,this.center.z+-this.extents.z),this.max=new p(this.center.x+this.extents.x,this.center.y+this.extents.y,this.center.z+this.extents.z)}containsFrustum(e,t){return t.containsBox(e)}merge(e){e.min.x<this.min.x&&(this.min.x=e.min.x),e.min.y<this.min.y&&(this.min.y=e.min.y),e.min.z<this.min.z&&(this.min.z=e.min.z),e.max.x>this.max.x&&(this.max.x=e.max.x),e.max.y>this.max.y&&(this.max.y=e.max.y),e.max.z>this.max.z&&(this.max.z=e.max.z),this.size.x=e.max.x-e.min.x,this.size.y=e.max.y-e.min.y,this.size.z=e.max.z-e.min.z,this.extents.x=.5*this.size.x,this.extents.y=.5*this.size.y,this.extents.z=.5*this.size.z,this.center.x=this.extents.x+e.min.x,this.center.y=this.extents.y+e.min.y,this.center.z=this.extents.z+e.min.z}intersects(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}intersectsSphere(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}intersectsBox(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}static intersectRay(e,t){let i=0,s=Number.MAX_VALUE,a=1/e.direction.x,n=1/e.direction.y,h=1/e.direction.z,l=e.origin,u=e.direction.x,c=e.direction.y,d=e.direction.z,f=t.min,m=t.max,_,g;return g=0<=u?(_=(f.x-l.x)*a,(m.x-l.x)*a):(_=(m.x-l.x)*a,(f.x-l.x)*a),_>i&&(i=_),g<s&&(s=g),g=0<=c?(_=(f.y-l.y)*n,(m.y-l.y)*n):(_=(m.y-l.y)*n,(f.y-l.y)*n),_>i&&(i=_),g<s&&(s=g),g=0<=d?(_=(f.z-l.z)*h,(m.z-l.z)*h):(_=(m.z-l.z)*h,(f.z-l.z)*h),_>i&&(i=_),(s=g<s?g:s)>=i}equals(e){return this.center.equals(e.center)&&this.extents.equals(e.extents)}expandByPoint(e){e.x<this.min.x&&(this.min.x=e.x),e.x>this.max.x&&(this.max.x=e.x),e.y<this.min.y&&(this.min.y=e.y),e.y>this.max.y&&(this.max.y=e.y),e.z<this.min.z&&(this.min.z=e.z),e.z>this.max.z&&(this.max.z=e.z)}static fromPoints(e){for(var t=new pt(new p,new p),i=0;i<e.length;i++)t.expandByPoint(e[i]);return t}calculateTransform(e){}clone(){return new pt(this.center.clone(),this.size.clone())}intersectsRay(e,t){throw new Error("Method not implemented.")}containsPoint(e){return this.min.x<=e.x&&this.max.x>=e.x&&this.min.y<=e.y&&this.max.y>=e.y&&this.min.z<=e.z&&this.max.z>=e.z}getBoundVertex(){var e=new p(this.min.x,this.min.y,this.min.z),t=new p(this.max.x,this.min.y,this.min.z),i=new p(this.max.x,this.min.y,this.max.z),s=new p(this.min.x,this.min.y,this.max.z),a=new p(this.min.x,this.max.y,this.min.z),n=new p(this.max.x,this.max.y,this.min.z),h=new p(this.max.x,this.max.y,this.max.z),l=new p(this.min.x,this.max.y,this.max.z);return[i.x,i.y,i.z,1,s.x,s.y,s.z,1,e.x,e.y,e.z,1,t.x,t.y,t.z,1,i.x,i.y,i.z,1,e.x,e.y,e.z,1,h.x,h.y,h.z,1,i.x,i.y,i.z,1,t.x,t.y,t.z,1,n.x,n.y,n.z,1,h.x,h.y,h.z,1,t.x,t.y,t.z,1,l.x,l.y,l.z,1,h.x,h.y,h.z,1,n.x,n.y,n.z,1,a.x,a.y,a.z,1,l.x,l.y,l.z,1,n.x,n.y,n.z,1,s.x,s.y,s.z,1,l.x,l.y,l.z,1,a.x,a.y,a.z,1,e.x,e.y,e.z,1,s.x,s.y,s.z,1,a.x,a.y,a.z,1,h.x,h.y,h.z,1,l.x,l.y,l.z,1,s.x,s.y,s.z,1,s.x,s.y,s.z,1,i.x,i.y,i.z,1,h.x,h.y,h.z,1,t.x,t.y,t.z,1,e.x,e.y,e.z,1,a.x,a.y,a.z,1,n.x,n.y,n.z,1,t.x,t.y,t.z,1,a.x,a.y,a.z,1]}}class Af extends Li{constructor(){super(),o(this,"name",""),o(this,"_uuid",""),o(this,"_renderLayer",ta.None),o(this,"transform"),o(this,"renderNode"),o(this,"entityChildren"),o(this,"components"),o(this,"_bound"),o(this,"waitDisposeComponents"),o(this,"_dispose",!1),this.entityChildren=[],this.components=new Map,this.waitDisposeComponents=[],this._uuid=mt()}get uuid(){return this._uuid}get renderLayer(){return this._renderLayer}set renderLayer(e){for(let t=0;t<this.entityChildren.length;t++)this.entityChildren[t].renderLayer=e;this._renderLayer=e}getObjectByName(e){if(0<=e.indexOf("/")){let i=e.split("/"),s=this;for(;0<i.length&&s;){var t=i.shift();if(!(s=s.getChildByName(t,!1)))return null}return s}return this.getChildByName(e,!1)}get numChildren(){return this.entityChildren.length}addChild(e){return e==null?new console.error("child is null!"):e===this?new console.error("child is self!"):this.entityChildren.indexOf(e)==-1?(e.transform.parent&&e.transform.parent.object3D.removeChild(e),e.transform.parent=this.transform,this.entityChildren.push(e),e.transform.notifyLocalChange(),e):null}removeChild(e){var t;return e===null?new console.error("remove child is null!"):e===this?new console.error("add child is self!"):void((t=this.entityChildren.indexOf(e))!=-1&&(this.entityChildren.splice(t,1),e.transform.parent=null))}removeAllChild(){for(;0<this.numChildren;)this.removeChild(this.entityChildren[0])}removeSelf(){return this.removeFromParent()}removeChildByIndex(e){0<=e&&e<this.entityChildren.length?this.removeChild(this.entityChildren[e]):console.error("remove child by index , index out of range")}hasChild(e){return this.entityChildren.indexOf(e)!=-1}removeFromParent(){var e=this.transform.parent;return e&&e.object3D&&e.object3D.removeChild(this),this}getChildByIndex(e){let t=null;return t=e<this.entityChildren.length?this.entityChildren[e]:t}getChildByName(e,t=!0){let i=null;for(const s of this.entityChildren){if(s.name==e)return i=s;if(t&&(i=s.getChildByName(e,t)))return i}return i}update(){}dispose(){this._dispose=!0}instantiate(){return null}waitUpdate(){this._dispose?(this.transform.parent&&this.transform.parent.object3D.removeChild(this),this.components.forEach((e,t)=>{e.enable=!1,e.destroy()}),this.components.clear()):Te.waitStartComponent.forEach((e,t)=>{e.forEach(i=>{i.__start()}),Te.waitStartComponent.delete(t)})}get bound(){return this._bound||this.genBounds(),this._bound}set bound(e){this._bound=e}genBounds(){this._bound||(this._bound=new pt(p.ZERO.clone(),p.ONE.clone()));for(const e of this.entityChildren)e._bound&&this._bound.merge(e._bound);return this._bound}destroy(){this.transform.parent=null,this.components.forEach(e=>{e.destroy()}),this.components.clear()}}class pe extends Af{constructor(){super(),o(this,"_isScene3D"),o(this,"prefabRef"),this.transform=this.addComponent(ct)}get isScene3D(){return this._isScene3D}forChild(e){this.entityChildren.forEach(t=>{e(t),t.forChild(e)})}addComponent(e,t){var i=e.name;return this.components.has(i)?null:((e=new e).object3D=this,e.__init(t),this.components.set(i,e),this.appendLateStart(e),e)}appendLateStart(e){var t=Te.waitStartComponent.get(this);t?t.indexOf(e)==-1&&t.push(e):Te.waitStartComponent.set(this,[e])}getOrAddComponent(e){let t=e.name,i=this.components.get(t);return i=i||this.addComponent(e)}removeComponent(i){var t,i=i.name;this.components.has(i)&&(t=this.components.get(i),this.components.delete(i),t.__stop(),t.destroy())}hasComponent(e){return e=e.name,this.components.has(e)}getComponent(e){return e=e.name,this.components.get(e)}getComponentFromParent(e){return this.parent?this.parent.object3D.getComponent(e)||this.parent.object3D.getComponentFromParent(e):null}getComponentsInChild(e){var t=[],i=e.name,i=this.components.get(i);i&&t.push(i);for(let a=0;a<this.entityChildren.length;a++){var s=this.entityChildren[a].getComponentsInChild(e);t.push(...s)}return t}getComponents(e,t,i){t=t||[];var s=this.getComponent(e);s&&(s.enable||i)&&t.push(s);for(let n=0,h=this.entityChildren.length;n<h;n++){var a=this.entityChildren[n];a&&a instanceof pe&&a.getComponents(e,t,i)}return t}getComponentsExt(e,t,i){t=t||[];var s=e.name,s=this.components.get(s);if(s&&(s.enable||i))t.push(s);else for(const a of this.entityChildren)a instanceof pe&&a.getComponentsExt(e,t,i);return t}clone(){return this.instantiate()}instantiate(){let e=new pe;return e.name=this.name+"_clone",this.entityChildren.forEach((t,i)=>{t=t.instantiate(),e.addChild(t)}),this.components.forEach((t,i)=>{t.cloneTo(e)}),e}get localPosition(){return this.transform.localPosition}set localPosition(e){this.transform.localPosition=e}get localRotation(){return this.transform.localRotation}set localRotation(e){this.transform.localRotation=e}get localScale(){return this.transform.localScale}set localScale(e){this.transform.localScale=e}get localQuaternion(){return this.transform.localRotQuat}set localQuaternion(e){this.transform.localRotQuat=e}notifyChange(){this.transform.notifyChange()}get parent(){return this.transform.parent}get parentObject(){return this.transform.parent.object3D}set x(e){this.transform.x=e}get x(){return this.transform.x}set y(e){this.transform.y=e}get y(){return this.transform.y}set z(e){this.transform.z=e}get z(){return this.transform.z}set scaleX(e){this.transform.scaleX=e}get scaleX(){return this.transform.scaleX}set scaleY(e){this.transform.scaleY=e}get scaleY(){return this.transform.scaleY}set scaleZ(e){this.transform.scaleZ=e}get scaleZ(){return this.transform.scaleZ}set rotationX(e){this.transform.rotationX=e}get rotationX(){return this.transform.rotationX}set rotationY(e){this.transform.rotationY=e}get rotationY(){return this.transform.rotationY}set rotationZ(e){this.transform.rotationZ=e}get rotationZ(){return this.transform.rotationZ}fixedUpdate(){}lateUpdate(){}traverse(e){e(this);for(let i=0,s=this.entityChildren.length;i<s;i++){var t=this.entityChildren[i];t instanceof pe&&t.traverse(e)}}destroy(){super.destroy()}}class Mt{static createCamera3DObject(e,t){return this.createCamera3D(null,e,t)}static createCamera3D(e,t,i){return e=e||new pe,t&&t.addChild(e),i&&(e.name=i),e.getOrAddComponent(Gn)}static UnProjection(c,a,i=1,s){var c=new p(c,a,0),a=p.HELP_0,l=D.canvas.offsetLeft,n=D.canvas.offsetTop,u=D.canvas.clientWidth,h=D.canvas.clientHeight,l=(a.x=2*((c.x-l)/u-.5),a.y=2*-((c.y-n)/h-.5),a.z=i,new p(0,0,0)),u=q.helpMatrix2,c=(u.copyFrom(s.projectionMatrix),u.invert(),q.helpMatrix);return c.identity(),c.multiply(u),c.multiply(s.transform.worldMatrix),c.perspectiveMultiplyPoint3(a,l),l}static Projection(e,a,s){var s=s||new p(0,0,0),n=q.helpMatrix,a=(n.copyFrom(a.viewMatrix),n.multiply(a.projectionMatrix),n.perspectiveMultiplyPoint3(e,s),D.canvas.clientWidth/2),n=D.canvas.clientHeight/2;return s.x=s.x*a+a,s.y=n-s.y*n,s}static UnProjection2(e,t,i,l,n){var n=n||new p(0,0,0),h=q.helpMatrix,l=(h.copyFrom(l.pvMatrixInv),D.canvas.clientWidth/2),u=D.canvas.clientHeight/2;return n.x=(e-l)/l,n.y=(u-t)/u,n.z=i,h.perspectiveMultiplyPoint3(n,n),n}}class br{static init(){this.directionLightList=new Map,this.pointLightList=new Map}static getShadowLightList(e){if(!e.transform.view3D)return null;if(e.lightData.lightType==Xe.DirectionLight){let t=this.directionLightList.get(e.transform.view3D.scene);return t||(t=[],this.directionLightList.set(e.transform.view3D.scene,t)),t}if(e.lightData.lightType==Xe.PointLight){let t=this.pointLightList.get(e.transform.view3D.scene);return t||(t=[],this.pointLightList.set(e.transform.view3D.scene,t)),t}if(e.lightData.lightType==Xe.SpotLight){let t=this.pointLightList.get(e.transform.view3D.scene);return t||(t=[],this.pointLightList.set(e.transform.view3D.scene,t)),t}}static getShadowLightWhichScene(e,t){if(t==Xe.DirectionLight){let i=this.directionLightList.get(e);return i||(i=[],this.directionLightList.set(e,i)),i}if(t==Xe.PointLight){let i=this.pointLightList.get(e);return i||(i=[],this.pointLightList.set(e,i)),i}}static getDirectShadowLightWhichScene(e){let t=this.directionLightList.get(e);return t||(t=[],this.directionLightList.set(e,t)),t}static getPointShadowLightWhichScene(e){let t=this.pointLightList.get(e);return t||(t=[],this.pointLightList.set(e,t)),t}static addShadowLight(e){if(!e.transform.view3D)return null;if(e.lightData.lightType==Xe.DirectionLight){let t=this.directionLightList.get(e.transform.view3D.scene);return t||(t=[],this.directionLightList.set(e.transform.view3D.scene,t)),e.lightData.lightType!=Xe.DirectionLight||e.shadowCamera||(e.shadowCamera=Mt.createCamera3DObject(null,"shadowCamera"),e.shadowCamera.name=mt(),e.shadowCamera.isShadowCamera=!0,e.shadowCamera.orthoOffCenter(T.setting.shadow.shadowBound,-T.setting.shadow.shadowBound,T.setting.shadow.shadowBound,-T.setting.shadow.shadowBound,1,5e4)),t.indexOf(e)==-1&&(t.length<8&&(e.lightData.castShadowIndex=t.length),t.push(e)),t}if(e.lightData.lightType==Xe.PointLight){let t=this.pointLightList.get(e.transform.view3D.scene);return t||(t=[],this.pointLightList.set(e.transform.view3D.scene,t)),t.indexOf(e)==-1&&(t.length<8&&(e.lightData.castShadowIndex=t.length),t.push(e)),t}if(e.lightData.lightType==Xe.SpotLight){let t=this.pointLightList.get(e.transform.view3D.scene);return t||(t=[],this.pointLightList.set(e.transform.view3D.scene,t)),t.indexOf(e)==-1&&(t.length<8&&(e.lightData.castShadowIndex=t.length),t.push(e)),t}}static removeShadowLight(e){var t,i;return e.transform.view3D?e.lightData.lightType==Xe.DirectionLight?((i=this.directionLightList.get(e.transform.view3D.scene))&&(t=i.indexOf(e))!=-1&&i.splice(t,1),i):e.lightData.lightType==Xe.PointLight?((t=this.pointLightList.get(e.transform.view3D.scene))&&(i=t.indexOf(e))!=-1&&t.splice(i,1),t):void 0:null}}o(br,"directionLightList"),o(br,"pointLightList");class wa{static getGlobalDataBindGroupLayout(){var e;return this._globalDataBindGroupLayout||((e=[]).push({binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}),e.push({binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),this._globalDataBindGroupLayout=D.device.createBindGroupLayout({entries:e})),this._globalDataBindGroupLayout}}o(wa,"_globalDataBindGroupLayout");class Of{constructor(e){o(this,"uuid"),o(this,"usage"),o(this,"globalBindGroup"),o(this,"uniformGPUBuffer"),o(this,"matrixBindGroup"),o(this,"uniformByteLength"),o(this,"matrixesByteLength"),this.uuid=mt(),this.usage=GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.uniformGPUBuffer=new ba(688),this.uniformGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBindGroup=e,this.createBindGroup()}createBindGroup(){this.uniformByteLength=this.uniformGPUBuffer.memory.shareDataBuffer.byteLength,this.matrixesByteLength=q.blockBytes*q.maxCount,this.globalBindGroup=D.device.createBindGroup({label:"global_bindGroupLayout",layout:wa.getGlobalDataBindGroupLayout(),entries:[{binding:0,resource:{buffer:this.uniformGPUBuffer.buffer,offset:0,size:this.uniformByteLength}},{binding:1,resource:{buffer:this.matrixBindGroup.matrixBufferDst.buffer,offset:0,size:this.matrixesByteLength}}]})}setCamera(e){e.transform.updateWorldMatrix(!0),this.uniformGPUBuffer.setMatrix("_projectionMatrix",e.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",e.viewMatrix),this.uniformGPUBuffer.setMatrix("_cameraWorldMatrix",e.transform.worldMatrix),this.uniformGPUBuffer.setMatrix("_projectionMatrixInv",e.projectionMatrixInv);var t=new Float32Array(128);for(let n=0;n<8;n++){var i=br.getDirectShadowLightWhichScene(e.transform.scene3D);n<i.length?(i=i[n].shadowCamera.pvMatrix.rawData,t.set(i,16*n)):t.set(e.transform.worldMatrix.rawData,16*n)}this.uniformGPUBuffer.setFloat32Array("_shadowCamera",t),this.uniformGPUBuffer.setVector3("CameraPos",e.transform.worldPosition),this.uniformGPUBuffer.setFloat("Time.frame",ze.frame),this.uniformGPUBuffer.setFloat("Time.time",ze.frame),this.uniformGPUBuffer.setFloat("Time.detail",ze.delta),this.uniformGPUBuffer.setFloat("EngineSetting.Shadow.shadowBias",T.setting.shadow.shadowBias),this.uniformGPUBuffer.setFloat("skyExposure",T.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("EngineSetting.Render.renderPassState",T.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("EngineSetting.Render.quadScale",T.setting.render.quadScale),this.uniformGPUBuffer.setFloat("EngineSetting.Render.hdrExposure",T.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",T.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",T.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",T.setting.render.renderState_split);var s=T.inputSystem.mouseX*D.pixelRatio*D.super,a=T.inputSystem.mouseY*D.pixelRatio*D.super;this.uniformGPUBuffer.setFloat("mouseX",s),this.uniformGPUBuffer.setFloat("mouseY",a),this.uniformGPUBuffer.setFloat("windowWidth",D.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",D.windowHeight),this.uniformGPUBuffer.setFloat("near",e.near),this.uniformGPUBuffer.setFloat("far",e.far),this.uniformGPUBuffer.setFloat("EngineSetting.Shadow.pointShadowBias",T.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",T.setting.shadow.shadowSize),this.uniformGPUBuffer.setFloat("shadowSoft",T.setting.shadow.shadowSoft),this.uniformGPUBuffer.apply()}setShadowCamera(e){e.transform.updateWorldMatrix(!0),this.uniformGPUBuffer.setMatrix("_projectionMatrix",e.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",e.viewMatrix),this.uniformGPUBuffer.setMatrix("_pvMatrix",e.pvMatrix),this.uniformGPUBuffer.apply()}addUniformNode(){}}class Uf{constructor(){o(this,"debugX",0),o(this,"debugY",0),o(this,"debugZ",0),o(this,"probesBufferData"),o(this,"probesBuffer"),o(this,"isVolumeFrameChange",!0),o(this,"irradianceVolumeBuffer"),this.irradianceVolumeBuffer=new ir(80),this.fillIrradianceData()}fillIrradianceData(){this.irradianceVolumeBuffer.setFloat("orientationIndex",0),this.irradianceVolumeBuffer.setFloat("hysteresis",0),this.irradianceVolumeBuffer.setFloat("OctRTSideSize",0),this.irradianceVolumeBuffer.setFloat("OctRTMaxSize",0),this.irradianceVolumeBuffer.setFloat("startX",0),this.irradianceVolumeBuffer.setFloat("startY",0),this.irradianceVolumeBuffer.setFloat("startZ",0),this.irradianceVolumeBuffer.setFloat("ProbeSpace",0),this.irradianceVolumeBuffer.setFloat("probeXCount",0),this.irradianceVolumeBuffer.setFloat("probeYCount",0),this.irradianceVolumeBuffer.setFloat("probeZCount",0),this.irradianceVolumeBuffer.setFloat("maxDistance",0),this.irradianceVolumeBuffer.setFloat("depthSharpness",0),this.irradianceVolumeBuffer.setFloat("ProbeSourceTextureSize",0),this.irradianceVolumeBuffer.setFloat("ProbeSize",0),this.irradianceVolumeBuffer.setFloat("bounceIntensity",0),this.irradianceVolumeBuffer.setFloat("probeRoughness",0),this.irradianceVolumeBuffer.setFloat("normalBias",0),this.irradianceVolumeBuffer.setFloat("irradianceChebyshevBias",0),this.irradianceVolumeBuffer.setFloat("rayNumber",0),this.irradianceVolumeBuffer.setFloat("irradianceDistanceBias",0),this.irradianceVolumeBuffer.setFloat("indirectIntensity",0),this.irradianceVolumeBuffer.setFloat("ddgiGamma",0),this.irradianceVolumeBuffer.setFloat("lerpHysteresis",0),this.irradianceVolumeBuffer.setFloat("debugX",this.debugX),this.irradianceVolumeBuffer.setFloat("debugY",this.debugY),this.irradianceVolumeBuffer.setFloat("debugZ",this.debugZ),this.irradianceVolumeBuffer.apply()}}let Bf=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(0) fragUV: vec2<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${We.getMorphTargetShaderBinding(2,1)}
#endif

#if USE_SKELETON
    ${ya.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
  @location(2) uv: vec2<f32>,
  @location(3) TEXCOORD_1: vec2<f32>,

  #if USE_TANGENT
      @location(4) TANGENT: vec4<f32>,
      #if USE_SKELETON
          @location(5) joints0: vec4<f32>,
          @location(6) weights0: vec4<f32>,
          #if USE_JOINT_VEC8
          @location(7) joints1: vec4<f32>,
          @location(8) weights1: vec4<f32>,
      #endif
      #elseif USE_MORPHTARGETS
          ${We.getMorphTargetAttr(5)}
      #endif
  #elseif USE_SKELETON
      @location(4) joints0: vec4<f32>,
      @location(5) weights0: vec4<f32>,
      #if USE_JOINT_VEC8
      @location(6) joints1: vec4<f32>,
      @location(7) weights1: vec4<f32>,
      #endif
  #elseif USE_MORPHTARGETS
     ${We.getMorphTargetAttr(4)}
  #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;
    var vertexNormal = vertex.normal.xyz;

    #if USE_MORPHTARGETS
     ${We.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, vPos );  
}
`,kf=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(0) fragUV: vec2<f32>,
    @location(1) worldPos: vec3<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${We.getMorphTargetShaderBinding(2,1)}
##endif
 
#if USE_SKELETON
    ${ya.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
  @location(2) uv: vec2<f32>,
  @location(3) TEXCOORD_1: vec2<f32>,

  #if USE_TANGENT
      @location(4) TANGENT: vec4<f32>,
      #if USE_SKELETON
          @location(5) joints0: vec4<f32>,
          @location(6) weights0: vec4<f32>,
          #if USE_JOINT_VEC8
          @location(7) joints1: vec4<f32>,
          @location(8) weights1: vec4<f32>,
      #endif
      #elseif USE_MORPHTARGETS
         ${We.getMorphTargetAttr(5)}
      #endif
  #elseif USE_SKELETON
      @location(4) joints0: vec4<f32>,
      @location(5) weights0: vec4<f32>,
      #if USE_JOINT_VEC8
      @location(6) joints1: vec4<f32>,
      @location(7) weights1: vec4<f32>,
      #endif
  #elseif USE_MORPHTARGETS
      ${We.getMorphTargetAttr(4)}
  #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;

    #if USE_MORPHTARGETS
        ${We.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, worldPos.xyz , vPos ); 
}
`,fl=`
#if USE_ALPHACUT
@group(1) @binding(0)
var baseMapSampler: sampler;
@group(1) @binding(1)
var baseMap: texture_2d<f32>;
#endif

struct FragmentOutput {
  @location(0) o_Target: vec4<f32>,
  @builtin(frag_depth) out_depth: f32
};

struct MaterialUniform {
lightWorldPos: vec3<f32>,
cameraFar: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@fragment
fn main(@location(0) fragUV: vec2<f32> , @location(1) worldPos:vec3<f32> ) -> FragmentOutput {
var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
distance = distance / materialUniform.cameraFar ;

#if USE_ALPHACUT
  let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
  var fragOut:FragmentOutput; 
  if(Albedo.w > 0.5){
    fragOut = FragmentOutput(vec4<f32>(0.0),distance);
  }
//   if(Albedo.w > 0.5){
//     fragOut = FragmentOutput(vec4<f32>(0.0),distance);
//   }else{
//     discard;
//   }
  return fragOut ;
#else
    fragOut = FragmentOutput(vec4<f32>(0.0),distance);
#endif
}
`;const hr=class{static getMipmapPipeline(r){let e=r.format,t=D.device,i=hr.pipelineCache[r.format],s;return i||(s=t.createShaderModule({code:hr.mipmapShader}),r=t.createBindGroupLayout({entries:[{binding:0,visibility:r.visibility,sampler:r.samplerBindingLayout},{binding:1,visibility:r.visibility,texture:r.textureBindingLayout}]}),r=D.device.createPipelineLayout({bindGroupLayouts:[r]}),i=P.createPipeline({layout:r,vertex:{module:s,entryPoint:"vertexMain"},fragment:{module:s,entryPoint:"fragmentMain",targets:[{format:e}]}}),hr.pipelineCache[e]=i),i}static webGPUGenerateMipmap(r){var e,t=D.device,i=r.textureDescriptor;hr.pipeline||(e=t.createShaderModule({code:`
        var<private> pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0));

        struct VertexOutput {
          @builtin(position) position : vec4<f32>,
          @location(0) texCoord : vec2<f32>
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
          var output : VertexOutput;
          output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
          output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
          return output;
        }

        @binding(0) @group(0) var imgSampler : sampler;
        @binding(1) @group(0) var img : texture_2d<f32>;

        @fragment
        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
          var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
          return outColor;
        }
      `}),hr.pipeline=t.createRenderPipeline({layout:"auto",vertex:{module:e,entryPoint:"vertexMain"},fragment:{module:e,entryPoint:"fragmentMain",targets:[{format:i.format}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"}}));let s,a=(s=r.format=="rgba16float"?t.createSampler({minFilter:"nearest",magFilter:"linear"}):t.createSampler({minFilter:"linear",magFilter:"linear"}),r.getGPUTexture().createView({baseMipLevel:0,mipLevelCount:1}));var n=P.beginCommandEncoder();for(let c=1;c<i.mipLevelCount;++c){var h=r.getGPUTexture().createView({baseMipLevel:c,mipLevelCount:1}),l=n.beginRenderPass({colorAttachments:[{view:h,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"}]}),u=t.createBindGroup({layout:hr.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:s},{binding:1,resource:a}]});l.setPipeline(hr.pipeline),l.setBindGroup(0,u),l.draw(4),l.end(),a=h}P.endCommandEncoder(n)}};let Xr=hr;o(Xr,"mipmapShader",`
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
      struct VertexOutput {
        @builtin(position) position : vec4<f32>;
        @location(0) texCoord : vec2<f32>;
      };
      @vertex
      fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var output : VertexOutput;
        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        return output;
      }
      @binding(0) @group(0) var imgSampler : sampler;
      @binding(1) @group(0) var img : texture_2d<f32>;
      @fragment
      fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
        var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
        return outColor ;
      }`),o(Xr,"pipelineCache",{}),o(Xr,"pipeline");class Zt{constructor(e=32,t=32,i=1){o(this,"name"),o(this,"url"),o(this,"gpuTexture"),o(this,"pid"),o(this,"view"),o(this,"gpuSampler"),o(this,"gpuSampler_comparison"),o(this,"format"),o(this,"usage"),o(this,"width",4),o(this,"height",4),o(this,"depthOrArrayLayers",1),o(this,"numberLayer",1),o(this,"viewDescriptor"),o(this,"textureDescriptor"),o(this,"visibility",GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT),o(this,"textureBindingLayout",{viewDimension:"2d",multisampled:!1}),o(this,"samplerBindingLayout",{type:"filtering"}),o(this,"sampler_comparisonBindingLayout",{type:"comparison"}),o(this,"flipY"),o(this,"isVideoTexture"),o(this,"_useMipmap",!1),o(this,"_textureChange",!1),o(this,"_sourceImageData"),o(this,"mipmapCount",1),o(this,"_stateChangeRef",new Map),o(this,"_addressModeU"),o(this,"_addressModeV"),o(this,"_addressModeW"),o(this,"_magFilter"),o(this,"_minFilter"),o(this,"_mipmapFilter"),o(this,"_lodMinClamp"),o(this,"_lodMaxClamp"),o(this,"_compare"),o(this,"_maxAnisotropy"),this.width=e,this.height=t,this.numberLayer=i,this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.addressModeU=qt.repeat,this.addressModeV=qt.repeat,this.visibility=GPUShaderStage.FRAGMENT}init(){var e=this;return e.internalCreateBindingLayoutDesc&&e.internalCreateBindingLayoutDesc(),e.internalCreateTexture&&e.internalCreateTexture(),e.internalCreateView&&e.internalCreateView(),e.internalCreateSampler&&e.internalCreateSampler(),this}createTextureDescriptor(e,t,i,s,a=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING,n=1,h=0){this.width=e,this.height=t,this.format=s,this.usage=a,this.textureDescriptor={size:[e,t,n],mipLevelCount:i,format:s,usage:a,label:""+(this.name+this.width+this.height+this.format)},0<h&&(this.textureDescriptor.sampleCount=h),this.viewDescriptor=1<n?{dimension:"2d-array"}:{dimension:this.textureBindingLayout.viewDimension}}generate(e){let t=32,i=32;"width"in e&&(t=e.width,i=e.height),(t<32||i<32)&&console.log(e.name+"Size must be greater than 32!"),this.width=t,this.height=i,this.visibility=GPUShaderStage.FRAGMENT,this.createTexture(e)}createTexture(e){this._sourceImageData=e,this.updateTextureDescription(),this.updateGPUTexture(),e=D.device,this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),this.useMipmap&&Xr.webGPUGenerateMipmap(this)}get useMipmap(){return this._useMipmap}set useMipmap(e){var t;e?(this.samplerBindingLayout.type="filtering",this._useMipmap==0&&this._sourceImageData&&(this._useMipmap=!0,this.updateTextureDescription(),this.updateGPUTexture(),t=D.device,this.gpuTexture instanceof GPUTexture&&t.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),Xr.webGPUGenerateMipmap(this))):(this.samplerBindingLayout.type="non-filtering",this._useMipmap==1&&this._sourceImageData&&(this._useMipmap=!1,this.updateTextureDescription(),this.updateGPUTexture(),t=D.device,this.gpuTexture instanceof GPUTexture)&&t.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height])),this._textureChange=!0,this._useMipmap=e,this.noticeChange()}updateTextureDescription(){this.mipmapCount=Math.floor(this.useMipmap?Math.log2(Math.min(this.width,this.height)):1),this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format)}updateGPUTexture(){this.gpuTexture&&this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this.gpuTexture=null,this.view=null,this.gpuTexture=this.getGPUTexture()}getGPUTexture(){return this.gpuTexture||(this.gpuTexture=D.device.createTexture(this.textureDescriptor)),this.gpuTexture}getGPUView(e=0){return this.view||(this.gpuTexture=this.getGPUTexture(),this.gpuTexture instanceof GPUTexture&&(this.view=this.gpuTexture.createView(this.viewDescriptor))),this.view}bindStateChange(e,t){this._stateChangeRef.set(t,e)}unBindStateChange(e){this._stateChangeRef.delete(e)}noticeChange(){this.gpuSampler=D.device.createSampler(this),this._stateChangeRef.forEach((e,t)=>{e()})}destoryView(){return this.view=null,this}destroy(){this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this._stateChangeRef.clear()}get addressModeU(){return this._addressModeU}set addressModeU(e){this._addressModeU!=e&&(this._addressModeU=e,this.noticeChange())}get addressModeV(){return this._addressModeV}set addressModeV(e){this._addressModeV!=e&&(this._addressModeV=e,this.noticeChange())}get addressModeW(){return this._addressModeW}set addressModeW(e){this._addressModeW!=e&&(this._addressModeW=e,this.noticeChange())}get magFilter(){return this._magFilter}set magFilter(e){this._magFilter!=e&&(this._magFilter=e,this.noticeChange())}get minFilter(){return this._minFilter}set minFilter(e){this._minFilter!=e&&(this._minFilter=e,this.noticeChange())}get mipmapFilter(){return this._mipmapFilter}set mipmapFilter(e){this._mipmapFilter!=e&&(this._mipmapFilter=e,this.noticeChange())}get lodMinClamp(){return this._lodMinClamp}set lodMinClamp(e){this._lodMinClamp!=e&&(this._lodMinClamp=e,this.noticeChange())}get lodMaxClamp(){return this._lodMaxClamp}set lodMaxClamp(e){this._lodMaxClamp!=e&&(this._lodMaxClamp=e,this.noticeChange())}get compare(){return this._compare}set compare(e){this._compare!=e&&(this._compare=e,this.noticeChange())}get maxAnisotropy(){return this._maxAnisotropy}set maxAnisotropy(e){this._maxAnisotropy!=e&&(this._maxAnisotropy=e,this.noticeChange())}}class Nf extends Zt{constructor(e,t,i){super(e,t,i),o(this,"_bitmapTextures"),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=ae.rgba8unorm,this.mipmapCount=1,this._bitmapTextures=[],this.init()}setTextures(e){for(let i=this._bitmapTextures.length=0;i<e.length;i++){var t=e[i];this.addTexture(t)}}addTexture(e){e.width==this.width&&e.height==this.height||console.error("bitmap texture muse match bitmapTextureArray size!"),this._bitmapTextures.indexOf(e)==-1&&(e.pid=this._bitmapTextures.length,this._bitmapTextures.push(e),this.updateTexture())}removeTexture(e){if(e=this._bitmapTextures.indexOf(e),e!=-1){this._bitmapTextures.splice(e,1);for(let t=0;t<this._bitmapTextures.length;t++)this._bitmapTextures[t].pid=t}}updateTexture(){var e=P.beginCommandEncoder();for(let i=0;i<this._bitmapTextures.length;i++){var t=this._bitmapTextures[i];e.copyTextureToTexture({texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:i}},{width:this.width,height:this.height,depthOrArrayLayers:1})}P.endCommandEncoder(e)}internalCreateBindingLayoutDesc(){this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.minFilter=Qs.linear,this.magFilter=Qs.linear}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=D.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=D.device.createSampler(this)}}const Br=class{constructor(){o(this,"_iesTexture"),o(this,"index",0)}generateIES(r){}set IESTexture(r){(this._iesTexture=r).addressModeU=qt.repeat,r.addressModeV=qt.repeat,r.addressModeW=qt.repeat,Br.ies_list.indexOf(this)==-1&&(this.index=Br.ies_list.length,Br.ies_list.push(this),Br.iesTexture||Br.create(r.width,r.height),Br.iesTexture.addTexture(r))}get IESTexture(){return this._iesTexture}static create(r,e){this.iesTexture=new Nf(r,e,48)}};let pi=Br;o(pi,"use",!1),o(pi,"iesTexture"),o(pi,"ies_list",[]);var ne=(r=>(r.position="position",r.normal="normal",r.uv="uv",r.TANGENT="TANGENT",r.TEXCOORD_1="TEXCOORD_1",r.TEXCOORD_2="TEXCOORD_2",r.color="color",r.joints0="joints0",r.joints1="joints1",r.weights0="weights0",r.weights1="weights1",r.indices="indices",r.vIndex="vIndex",r.a_morphPositions_0="a_morphPositions_0",r))(ne||{}),Le=(r=>(r[r.NONE=0]="NONE",r[r.ABOVE=1]="ABOVE",r[r.ALPHA=2]="ALPHA",r[r.NORMAL=3]="NORMAL",r[r.ADD=4]="ADD",r[r.BELOW=5]="BELOW",r[r.ERASE=6]="ERASE",r[r.MUL=7]="MUL",r[r.SCREEN=8]="SCREEN",r[r.DIVD=9]="DIVD",r[r.SOFT_ADD=10]="SOFT_ADD",r))(Le||{}),Ff=(r=>(r[r.src_a=0]="src_a",r[r.dest_a=1]="dest_a",r))(Ff||{});class pl{static getBlend(e){var t={color:{srcFactor:"src-alpha",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}};switch(e){case 0:t.color.srcFactor="one",t.color.dstFactor="zero",t.color.operation="add";break;case 1:t.color.srcFactor="one-minus-src-alpha",t.color.dstFactor="dst-alpha",t.color.operation="add";break;case 4:t.color.srcFactor="one",t.color.dstFactor="one",t.color.operation="add",t.alpha.srcFactor="one",t.alpha.dstFactor="one",t.alpha.operation="add";break;case 2:t.color.srcFactor="src-alpha",t.color.dstFactor="one-minus-src-alpha";break;case 5:t.color.srcFactor="one-minus-src-alpha",t.color.dstFactor="one",t.color.operation="add";break;case 6:t.color.srcFactor="zero",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 7:t.color.srcFactor="dst",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 3:t.color.srcFactor="one",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 10:t.color.srcFactor="one",t.color.dstFactor="one",t.color.operation="max",t.alpha.srcFactor="one",t.alpha.dstFactor="one",t.alpha.operation="add";break;case 8:t.color.srcFactor="one",t.color.dstFactor="one-minus-src",t.color.operation="add"}return t}}class Ts{constructor(e=0,t="\0"){o(this,"Type",0),o(this,"Line",0),o(this,"Colume",0),o(this,"Literal",""),this.Type=e,this.Literal=t}isTypeEqual(e){return this.Type==e}isLiteralEqual(e){return this.Literal==e}isBuiltinType(){return 33<this.Type&&this.Type<101}isDataType(){return this.Type==1||this.isBuiltinType()}isOperation(){return 102<this.Type&&this.Type<127}isAssignOperation(){return 128<this.Type&&this.Type<133}get nOperationPriorityLevel(){switch(this.Type){case 26:case 27:return 1;case 125:return 2;case 110:case 114:return 3;case 105:case 106:return 4;case 103:case 104:return 5;case 115:case 116:return 6;case 119:case 120:case 122:case 123:return 7;case 121:case 124:return 8;case 111:return 9;case 113:return 10;case 112:return 11;case 107:return 12;case 109:return 13;case 108:return 14;case 24:return 15;case 126:case 129:case 130:case 131:case 132:return 16}return 99}}var v=(r=>(r[r.EOF=0]="EOF",r[r.IDENT=1]="IDENT",r[r.VOID=2]="VOID",r[r.CONST=3]="CONST",r[r.LAYOUT=4]="LAYOUT",r[r.PRECISION=5]="PRECISION",r[r.ATTRIBUTE=6]="ATTRIBUTE",r[r.UNIFORM=7]="UNIFORM",r[r.VARYING=8]="VARYING",r[r.INVARIANT=9]="INVARIANT",r[r.IN=10]="IN",r[r.OUT=11]="OUT",r[r.INOUT=12]="INOUT",r[r.IF=13]="IF",r[r.ELSE=14]="ELSE",r[r.FOR=15]="FOR",r[r.WHILE=16]="WHILE",r[r.DO=17]="DO",r[r.BREAK=18]="BREAK",r[r.RETURN=19]="RETURN",r[r.CONTINUE=20]="CONTINUE",r[r.STRUCT=21]="STRUCT",r[r.COMMA=22]="COMMA",r[r.COLON=23]="COLON",r[r.QUEMARK=24]="QUEMARK",r[r.SEMICOLON=25]="SEMICOLON",r[r.LEFTSAMLL=26]="LEFTSAMLL",r[r.RIGHTSAMLL=27]="RIGHTSAMLL",r[r.LEFTMEDI=28]="LEFTMEDI",r[r.RIGHTMEDI=29]="RIGHTMEDI",r[r.LEFTBIG=30]="LEFTBIG",r[r.RIGHTBIG=31]="RIGHTBIG",r[r.LITERAL=32]="LITERAL",r[r.BeginBuiltinType=33]="BeginBuiltinType",r[r.INT=34]="INT",r[r.INT_ARRAY=35]="INT_ARRAY",r[r.UINT=36]="UINT",r[r.UINT_ARRAY=37]="UINT_ARRAY",r[r.BOOL=38]="BOOL",r[r.BOOL_ARRAY=39]="BOOL_ARRAY",r[r.FLOAT=40]="FLOAT",r[r.FLOAT_ARRAY=41]="FLOAT_ARRAY",r[r.DOUBLE=42]="DOUBLE",r[r.DOUBLE_ARRAY=43]="DOUBLE_ARRAY",r[r.VEC2=44]="VEC2",r[r.VEC2_ARRAY=45]="VEC2_ARRAY",r[r.VEC3=46]="VEC3",r[r.VEC3_ARRAY=47]="VEC3_ARRAY",r[r.VEC4=48]="VEC4",r[r.VEC4_ARRAY=49]="VEC4_ARRAY",r[r.BVEC2=50]="BVEC2",r[r.BVEC2_ARRAY=51]="BVEC2_ARRAY",r[r.BVEC3=52]="BVEC3",r[r.BVEC3_ARRAY=53]="BVEC3_ARRAY",r[r.BVEC4=54]="BVEC4",r[r.BVEC4_ARRAY=55]="BVEC4_ARRAY",r[r.IVEC2=56]="IVEC2",r[r.IVEC2_ARRAY=57]="IVEC2_ARRAY",r[r.IVEC3=58]="IVEC3",r[r.IVEC3_ARRAY=59]="IVEC3_ARRAY",r[r.IVEC4=60]="IVEC4",r[r.IVEC4_ARRAY=61]="IVEC4_ARRAY",r[r.UVEC2=62]="UVEC2",r[r.UVEC2_ARRAY=63]="UVEC2_ARRAY",r[r.UVEC3=64]="UVEC3",r[r.UVEC3_ARRAY=65]="UVEC3_ARRAY",r[r.UVEC4=66]="UVEC4",r[r.UVEC4_ARRAY=67]="UVEC4_ARRAY",r[r.MAT2x2=68]="MAT2x2",r[r.MAT2x2_ARRAY=69]="MAT2x2_ARRAY",r[r.MAT2x3=70]="MAT2x3",r[r.MAT2x3_ARRAY=71]="MAT2x3_ARRAY",r[r.MAT2x4=72]="MAT2x4",r[r.MAT2x4_ARRAY=73]="MAT2x4_ARRAY",r[r.MAT3x2=74]="MAT3x2",r[r.MAT3x2_ARRAY=75]="MAT3x2_ARRAY",r[r.MAT3x3=76]="MAT3x3",r[r.MAT3x3_ARRAY=77]="MAT3x3_ARRAY",r[r.MAT3x4=78]="MAT3x4",r[r.MAT3x4_ARRAY=79]="MAT3x4_ARRAY",r[r.MAT4x2=80]="MAT4x2",r[r.MAT4x2_ARRAY=81]="MAT4x2_ARRAY",r[r.MAT4x3=82]="MAT4x3",r[r.MAT4x3_ARRAY=83]="MAT4x3_ARRAY",r[r.MAT4x4=84]="MAT4x4",r[r.MAT4x4_ARRAY=85]="MAT4x4_ARRAY",r[r.SAMPLER=86]="SAMPLER",r[r.SAMPLER_1D=87]="SAMPLER_1D",r[r.SAMPLER_2D=88]="SAMPLER_2D",r[r.SAMPLER_3D=89]="SAMPLER_3D",r[r.SAMPLER_CUBE=90]="SAMPLER_CUBE",r[r.SAMPLER_SHADOW=91]="SAMPLER_SHADOW",r[r.SAMPLER_1D_SHADOW=92]="SAMPLER_1D_SHADOW",r[r.SAMPLER_2D_SHADOW=93]="SAMPLER_2D_SHADOW",r[r.TEXTURE_1D=94]="TEXTURE_1D",r[r.TEXTURE_1D_ARRAY=95]="TEXTURE_1D_ARRAY",r[r.TEXTURE_2D=96]="TEXTURE_2D",r[r.TEXTURE_2D_ARRAY=97]="TEXTURE_2D_ARRAY",r[r.TEXTURE_3D=98]="TEXTURE_3D",r[r.TEXTURE_CUBE=99]="TEXTURE_CUBE",r[r.TEXTURE_CUBE_ARRAY=100]="TEXTURE_CUBE_ARRAY",r[r.EndBuiltinType=101]="EndBuiltinType",r[r.BeginOperation=102]="BeginOperation",r[r.ADD=103]="ADD",r[r.SUB=104]="SUB",r[r.MUL=105]="MUL",r[r.DIV=106]="DIV",r[r.AND=107]="AND",r[r.OR=108]="OR",r[r.XOR=109]="XOR",r[r.NOT=110]="NOT",r[r.BITAND=111]="BITAND",r[r.BITOR=112]="BITOR",r[r.BITXOR=113]="BITXOR",r[r.BITNOT=114]="BITNOT",r[r.BITSHIFT_L=115]="BITSHIFT_L",r[r.BITSHIFT_R=116]="BITSHIFT_R",r[r.INC=117]="INC",r[r.DEC=118]="DEC",r[r.GREATER=119]="GREATER",r[r.GREATEREQUAL=120]="GREATEREQUAL",r[r.EQUAL=121]="EQUAL",r[r.LESS=122]="LESS",r[r.LESSEQUAL=123]="LESSEQUAL",r[r.NOTEQUAL=124]="NOTEQUAL",r[r.DOT=125]="DOT",r[r.ASSIGN=126]="ASSIGN",r[r.EndOperation=127]="EndOperation",r[r.BeginAssignOperation=128]="BeginAssignOperation",r[r.ADDASSIGN=129]="ADDASSIGN",r[r.SUBASSIGN=130]="SUBASSIGN",r[r.MULASSIGN=131]="MULASSIGN",r[r.DIVASSIGN=132]="DIVASSIGN",r[r.EndAssignOperation=133]="EndAssignOperation",r))(v||{});class rs{constructor(e){o(this,"_char"),o(this,"_line"),o(this,"_column"),o(this,"_source"),o(this,"_currPosition"),o(this,"_nextPosition"),this.reset(e)}reset(e){this._char="",this._line=0,this._column=0,this._source=e,this._currPosition=0,this._nextPosition=0}get source(){return this._source}getChar(){return this._char}get currPosition(){return this._currPosition}peekChar(){return this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition]}readChar(){this._char=this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition],this._char!==`
`?this._column++:(this._line++,this._column=0),this._currPosition=this._nextPosition,this._nextPosition++}readCharAndSkipWhitespace(){this.readChar(),this.skipWhitespace()}readIdentifier(){for(var e=this._currPosition;this.isIdentifier(this._char);)this.readChar();return this._source.substring(e,this._currPosition)}isIdentifier(e){return e=e.charCodeAt(0),97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57||e==95}skipWhitespace(){for(;this.IsWhitespace(this._char);)this.readChar()}IsWhitespace(e){return e===" "||e==="	"||e==="\r"||e===`
`}skipComment(){for(;this._char!==`
`&&this._char!=="\0";)this.readChar();this.skipWhitespace()}skipMultilineComment(){if(this._char==="/"||this.peekChar()==="*"){this.readChar(),this.readChar();for(let e=1;0<e&&this._char!=="\0";){if(this.readChar(),this._char==="/"&&this.peekChar()==="*"){e++,this.readChar();continue}if(this._char==="*"&&this.peekChar()==="/"){e--,this.readChar();continue}}this.readChar(),this.readChar(),this.skipWhitespace()}}isDigit(e){return e=e.charCodeAt(0),48<=e&&e<=57}readNumber(){for(var e=this._currPosition;this.isDigit(this._char);)this.readChar();if(this._char===".")for(this.readChar();this.isDigit(this._char);)this.readChar();return this._source.substring(e,this._currPosition)}readValue(){return this.isDigit(this._char)?this.readNumber():this.readIdentifier()}readLine(){var e=this._currPosition,t=this._source.indexOf(`
`,this._currPosition);return t==-1&&(t=this._source.length),this._line++,this._column=0,this._currPosition=t,this._nextPosition=t+1,this._source.substring(e,t+1)}}class zf extends rs{constructor(e){super(e.source),o(this,"_tokenPosition",0),o(this,"_tokens",[]),this.parse()}skipToken(e){this._tokenPosition+=e}peekToken(e){return this._tokenPosition+e>=this._tokens.length?new Ts(v.EOF,"\0"):this._tokens[this._tokenPosition+e]}GetNextToken(){var e;return this._tokenPosition>=this._tokens.length?new Ts(v.EOF,"\0"):(e=this._tokens[this._tokenPosition],this._tokenPosition++,e)}get currTokenPosition(){return this._tokenPosition}parse(){var e;for(this.readChar(),this._tokens=new Array;e=this.nextToken(),this._tokens.push(e),e.Type!=v.EOF;);}nextToken(){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/")return this.skipComment(),this.nextToken();if(this.peekChar()==="*")return this.skipMultilineComment(),this.nextToken()}var e=new Ts;switch(e.Line=this._line,e.Colume=this._column,this._char){case"\0":e.Type=v.EOF,e.Literal="EOF";break;case".":e.Type=v.DOT,e.Literal=".";break;case",":e.Type=v.COMMA,e.Literal=",";break;case":":e.Type=v.COLON,e.Literal=":";break;case"?":e.Type=v.QUEMARK,e.Literal="?";break;case";":e.Type=v.SEMICOLON,e.Literal=";";break;case"(":e.Type=v.LEFTSAMLL,e.Literal="(";break;case")":e.Type=v.RIGHTSAMLL,e.Literal=")";break;case"[":e.Type=v.LEFTMEDI,e.Literal="[";break;case"]":e.Type=v.RIGHTMEDI,e.Literal="]";break;case"{":e.Type=v.LEFTBIG,e.Literal="{";break;case"}":e.Type=v.RIGHTBIG,e.Literal="}";break;case"+":this.peekChar()==="+"?(this.readChar(),e.Type=v.INC,e.Literal="++"):this.peekChar()==="="?(this.readChar(),e.Type=v.ADDASSIGN,e.Literal="+="):(e.Type=v.ADD,e.Literal="+");break;case"-":this.peekChar()==="-"?(this.readChar(),e.Type=v.DEC,e.Literal="--"):this.peekChar()==="="?(this.readChar(),e.Type=v.SUBASSIGN,e.Literal="-="):(e.Type=v.SUB,e.Literal="-");break;case"*":this.peekChar()==="="?(this.readChar(),e.Type=v.MULASSIGN,e.Literal="*="):(e.Type=v.MUL,e.Literal="*");break;case"/":this.peekChar()==="="?(this.readChar(),e.Type=v.DIVASSIGN,e.Literal="/="):(e.Type=v.DIV,e.Literal="/");break;case"&":this.peekChar()==="&"?(this.readChar(),e.Type=v.AND,e.Literal="&&"):(e.Type=v.BITAND,e.Literal="&");break;case"|":this.peekChar()==="|"?(this.readChar(),e.Type=v.OR,e.Literal="||"):(e.Type=v.BITOR,e.Literal="&");break;case"^":e.Type=v.BITXOR,e.Literal="^";break;case"!":this.peekChar()==="="?(this.readChar(),e.Type=v.NOTEQUAL,e.Literal="!="):(e.Type=v.NOT,e.Literal="!");break;case">":this.peekChar()==="="?(this.readChar(),e.Type=v.GREATEREQUAL,e.Literal=">="):this.peekChar()===">"?(this.readChar(),e.Type=v.BITSHIFT_R,e.Literal=">>"):(e.Type=v.GREATER,e.Literal=">");break;case"=":this.peekChar()==="="?(this.readChar(),e.Type=v.EQUAL,e.Literal="=="):(e.Type=v.ASSIGN,e.Literal="=");break;case"<":this.peekChar()==="="?(this.readChar(),e.Type=v.LESSEQUAL,e.Literal="<="):this.peekChar()==="<"?(this.readChar(),e.Type=v.BITSHIFT_L,e.Literal="<<"):(e.Type=v.LESS,e.Literal="<");break;default:return this.isDigit(this._char)?this.readDecimal():(e.Literal=this.readIdentifier(),e.Type=this.lookupIdentifier(e.Literal),this.getChar()=="["&&this.peekChar()=="]"&&e.isBuiltinType()&&(e.Type++,e.Literal+="[]",this.readChar(),this.readChar()),e)}return this.readChar(),e}readDecimal(){var e=new Ts,t=(e.Line=this._line,e.Colume=this._column,e.Type=v.LITERAL,this.readNumber());return this._char==="e"?(e.Literal=t+this._char,this.readChar(),e.Literal+=this._char,this.readChar(),e.Literal+=this.readNumber(),e.Type=v.LITERAL):this._char==="u"?(this.readChar(),e.Type=v.LITERAL,e.Literal=t+"u"):this._char==="f"?(this.readChar(),e.Type=v.LITERAL,e.Literal=t+"f"):(e.Type=v.LITERAL,e.Literal=t),e}lookupIdentifier(e){switch(e){case"void":return v.VOID;case"int":return v.INT;case"uint":return v.UINT;case"bool":case"true":case"false":return v.BOOL;case"float":return v.FLOAT;case"vec2":return v.VEC2;case"vec3":return v.VEC3;case"vec4":return v.VEC4;case"bvec2":return v.BVEC2;case"bvec3":return v.BVEC3;case"bvec4":return v.BVEC4;case"ivec2":return v.IVEC2;case"ivec3":return v.IVEC3;case"ivec4":return v.IVEC4;case"uvec2":return v.UVEC2;case"uvec3":return v.UVEC3;case"uvec4":return v.UVEC4;case"mat2":case"mat2x2":return v.MAT2x2;case"mat2x3":return v.MAT2x3;case"mat2x4":return v.MAT2x4;case"mat3":return v.MAT3x3;case"mat3x2":return v.MAT3x2;case"mat3x3":return v.MAT3x3;case"mat3x4":return v.MAT3x4;case"mat4":return v.MAT4x4;case"mat4x2":return v.MAT4x2;case"mat4x3":return v.MAT4x3;case"mat4x4":return v.MAT4x4;case"sampler":return v.SAMPLER;case"sampler1D":return v.SAMPLER_1D;case"sampler2D":return v.SAMPLER_2D;case"sampler3D":return v.SAMPLER_3D;case"samplerCube":return v.SAMPLER_CUBE;case"samplerShadow":return v.SAMPLER_SHADOW;case"sampler1DShadow":return v.SAMPLER_1D_SHADOW;case"sampler2DShadow":return v.SAMPLER_2D_SHADOW;case"texture1D":return v.TEXTURE_1D;case"texture2D":return v.TEXTURE_2D;case"texture3D":return v.TEXTURE_3D;case"textureCube":return v.TEXTURE_CUBE;case"texture1DArray":return v.TEXTURE_1D_ARRAY;case"texture2DArray":return v.TEXTURE_2D_ARRAY;case"textureCubeArray":return v.TEXTURE_CUBE_ARRAY;case"const":return v.CONST;case"layout":return v.LAYOUT;case"precision":return v.PRECISION;case"attribute":return v.ATTRIBUTE;case"uniform":return v.UNIFORM;case"varying":return v.VARYING;case"invariant":return v.INVARIANT;case"in":return v.IN;case"out":return v.OUT;case"inout":return v.INOUT;case"if":return v.IF;case"else":return v.ELSE;case"for":return v.FOR;case"while":return v.WHILE;case"do":return v.DO;case"break":return v.BREAK;case"return":return v.RETURN;case"continue":return v.CONTINUE;case"struct":return v.STRUCT}return v.IDENT}}class Gf{constructor(){o(this,"name",""),o(this,"value",""),o(this,"args",[])}}class Vf extends rs{constructor(e){super(e),o(this,"_result"),o(this,"_skipLine"),o(this,"_definitionTables"),this._result="",this._skipLine=!1,this._definitionTables=new Map,this.parse()}parse(){for(this.readChar();this._char!=="\0";){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/"){this.skipComment();continue}if(this.peekChar()==="*"){this.skipMultilineComment();continue}}if(this._char==="#"){this.readCharAndSkipWhitespace();var e=this.readIdentifier();switch(e){case"version":this.readLine().trim();break;case"define":this.readCharAndSkipWhitespace();var t=this.readIdentifier();if(this.getChar()==="("){var i=new Gf;if(this.readCharAndSkipWhitespace(),this.getChar()!==")")do var s=this.readIdentifier();while(i.args.push(s),this.skipWhitespace(),this.getChar()===","&&this.readCharAndSkipWhitespace(),this.getChar()!==")");this.readCharAndSkipWhitespace(),i.name=t,i.value=this.readLine().trim(),this._definitionTables.set(t,i),this.readCharAndSkipWhitespace()}else{let f=this.readLine().trim();f[0]=="="&&(f=f.substring(1)),this._definitionTables.set(t,f)}break;case"if":t=this.readLine().trim(),t=="0"||t=="false"?this._skipLine=!0:!this._definitionTables.has(t)||(t=this._definitionTables.get(t))!="0"&&t!="false"||(this._skipLine=!0);break;case"ifdef":this.readCharAndSkipWhitespace();var a=this.readIdentifier();this._skipLine=!this._definitionTables.has(a);break;case"else":this._skipLine=!this._skipLine;break;case"endif":this._skipLine=!1;break;default:throw"Unknown preprocessing command:"+e}}else{var n=this.readLine();if(!this._skipLine){for(var h of this._definitionTables.keys()){var l=n.indexOf(h);if(l!=-1){var u=this._definitionTables.get(h);if(typeof u=="string")n=n.replace(h,u);else{var c=u,d=new rs(n.substring(l+h.length));if(d.readCharAndSkipWhitespace(),d.getChar()==="("){d.readCharAndSkipWhitespace();for(let f=1;d.getChar()!=="\0"&&0<f;){switch(d.getChar()){case"(":f++;break;case")":f--}d.readCharAndSkipWhitespace()}}if(u=l+h.length+d.currPosition,h=n.substring(l,u).trim(),0<c.args.length){let f=[],m=h.substring(h.indexOf("(")+1,h.lastIndexOf(")")).trim(),_=(0<m.length&&(f=this.parseArgs(m)),c.value.substring(c.value.indexOf("(")));for(let g=0;g<c.args.length;g++)_=_.replace(c.args[g],f[g]);_=c.value.substring(0,c.value.indexOf("("))+_,n=n.replace(h,_)}else n=n.replace(h,c.value)}}}this._result+=n}this.readChar()}}}get source(){return this._result}parseArgs(e){let t=[],i=0,s=new rs(e),a=s.currPosition;if(s.readCharAndSkipWhitespace(),s.getChar()!=="\0")for(s.readCharAndSkipWhitespace();s.getChar()!=="\0";){switch(s.getChar()){case"(":i++;break;case")":i--;break;case",":var n;i==0&&(n=e.substring(a,s.currPosition),t.push(n),a=s.currPosition+1)}s.readCharAndSkipWhitespace()}var h;return a<s.currPosition&&(h=e.substring(a,s.currPosition),t.push(h)),t}}class Hf{constructor(e){o(this,"result"),o(this,"ASTRoot"),o(this,"_syntax"),this.result="",this._syntax=e,this.ASTRoot=e.ASTRoot}generateWGSL(){var e,t,i,s,a,n,h=new ml,l=new Yf,u=[],c=[],d=[];for(e of this.ASTRoot.nodes)if(e instanceof Ta)if(e.scope=="in")if(e.nodes[0]instanceof Ie){h.layoutsIn.push(e);var f=new Wo;f.name=e.nodes[0].name,f.type=e.nodes[0].type,f.locationID=Number.parseInt(e.qualifier.get("location")),l.inputAttribute.push(f)}else{if(!e.qualifier.has("local_size_x"))throw"not impl";h.workGroupSize=e}else if(e.scope=="out"){if(h.layoutsOut.push(e),!(e.nodes[0]instanceof Ie))throw"not impl";f=new Wo,f.name=e.nodes[0].name,f.type=e.nodes[0].type,f.locationID=Number.parseInt(e.qualifier.get("location")),l.outputAttribute.push(f)}else if(e.scope=="uniform")if(c.push(e),e.nodes[0]instanceof Ie){var m=new Xo;m.name=e.nodes[0].name,m.type=e.nodes[0].type,m.setID=Number.parseInt(e.qualifier.get("set")),m.bindingID=Number.parseInt(e.qualifier.get("binding")),l.uniformInfo.push(m)}else{if(!(e.nodes[0]instanceof _r))throw"not impl";m=new Xo,m.name="unif"+l.uniformInfo.length.toString(),m.type=e.nodes[0].name,m.setID=Number.parseInt(e.qualifier.get("set")),m.bindingID=Number.parseInt(e.qualifier.get("binding")),l.uniformInfo.push(m)}else e.scope=="buffer"&&u.push(e);else d.push(e);h.stage="fragment";let _=0,g=new rs(""),w=this._syntax.lexer.source,C=new Map;for(;(_=w.indexOf("gl_",_))!=-1;){g.reset(w.substring(_,_+32)),g.readChar();var b=g.readIdentifier();if(_+=b.length,!C.has(b))switch(C.set(b,b),b){case"gl_InstanceID":h.stage="vertex",h.builtinIn.push("@builtin(instance_index) gl_InstanceID: u32");break;case"gl_Position":h.stage="vertex",h.builtinOut.push("@builtin(position) gl_Position: vec4<f32>"),h.addIdentifier("gl_Position","stout.gl_Position");break;case"gl_VertexIndex":h.stage="vertex",h.builtinIn.push("@builtin(vertex_index) gl_VertexIndex: u32");break;case"gl_FrontFacing":h.stage="fragment",h.builtinIn.push("@builtin(front_facing) gl_FrontFacing: bool");break;case"gl_FragDepth":h.stage="fragment",h.builtinOut.push("@builtin(frag_depth) gl_FragDepth: f32"),h.addIdentifier("gl_FragDepth","stout.gl_FragDepth");break;case"gl_WorkGroupID":h.stage="compute",h.builtinIn.push("@builtin(workgroup_id) gl_WorkGroupID: vec3<u32>");break;case"gl_NumWorkGroups":h.stage="compute",h.builtinIn.push("@builtin(num_workgroups) gl_NumWorkGroups: vec3<u32>");break;case"gl_LocalInvocationID":h.stage="compute",h.builtinIn.push("@builtin(local_invocation_id) gl_LocalInvocationID: vec3<u32>");break;case"gl_LocalInvocationIndex":h.stage="compute",h.builtinIn.push("@builtin(local_invocation_index) gl_LocalInvocationIndex: u32");break;case"gl_GlobalInvocationID":h.stage="compute",h.builtinIn.push("@builtin(global_invocation_id) gl_GlobalInvocationID: vec3<u32>");break;default:throw"Unprocessed built-in variables: "+b}}for(t of c)t.nodes[0]instanceof _r&&(l.sourceCode+=t.nodes[0].formatToWGSL(h,0),l.sourceCode+=`\r
`);for(i of c)l.sourceCode+=i.formatToWGSL(h,0);l.sourceCode+=`\r
`;for(s of u)s.nodes[0]instanceof _r&&(l.sourceCode+=s.nodes[0].formatToWGSL(h,0),l.sourceCode+=`\r
`);for(a of u)l.sourceCode+=a.formatToWGSL(h,0);l.sourceCode+=`\r
`;for(n of d)l.sourceCode+=n.formatToWGSL(h,0),n instanceof Ie&&(l.sourceCode+=`;\r
`);return l}}class ml{constructor(e){o(this,"_stage","fragment"),o(this,"_builtinIn",[]),o(this,"_builtinOut",[]),o(this,"_layoutsIn",[]),o(this,"_layoutsOut",[]),o(this,"_layoutUniformCount",0),o(this,"_workGroupSize"),o(this,"_parentContext"),o(this,"_identifierEnv",new Map),this._parentContext=e}get stage(){return this.parentContext!=null?this.parentContext.stage:this._stage}set stage(e){this.parentContext!=null&&(this.parentContext.stage=e),this._stage=e}get builtinIn(){return this.parentContext!=null?this.parentContext.builtinIn:this._builtinIn}get builtinOut(){return this.parentContext!=null?this.parentContext.builtinOut:this._builtinOut}get layoutsIn(){return this.parentContext!=null?this.parentContext.layoutsIn:this._layoutsIn}get layoutsOut(){return this.parentContext!=null?this.parentContext.layoutsOut:this._layoutsOut}get layoutUniformCount(){return this.parentContext!=null?this.parentContext.layoutUniformCount:this._layoutUniformCount}set layoutUniformCount(e){this.parentContext!=null?this.parentContext.layoutUniformCount=e:this._layoutUniformCount=e}get workGroupSize(){return this.parentContext!=null?this.parentContext.workGroupSize:this._workGroupSize}set workGroupSize(e){this.parentContext!=null&&(this.parentContext.workGroupSize=e),this._workGroupSize=e}get parentContext(){return this._parentContext}findIdentifier(e){return this._identifierEnv.has(e)?this._identifierEnv.get(e):this._parentContext!=null?this._parentContext.findIdentifier(e):e}addIdentifier(e,t){this._identifierEnv.set(e,t)}hasIdentifier(e){return this._identifierEnv.has(e)}}class Pe{constructor(){o(this,"nodes",[])}addNode(e){this.nodes.push(e)}formatToWGSL(e,t){return""}}class _r extends Pe{constructor(e){super(),o(this,"name",""),o(this,"fields",[]),this.name=e}static parse(e){if(e.peekToken(0).Type!=v.IDENT||e.peekToken(1).Type!=v.LEFTBIG)throw"Error parsing structure: Unexpected character";var t=new _r(e.peekToken(0).Literal);for(e.skipToken(2);e.peekToken(0).Type!=v.RIGHTBIG;){var i=Ie.parse(e);t.fields.push(i)}return e.peekToken(0).Type==v.RIGHTBIG&&e.skipToken(1),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1),t}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);i+=s+"struct "+this.name+` {\r
`;for(var a of this.fields)a.arraySize.nodes.length<=0?i+=s+"  "+a.name+": "+bt(a.type)+`,\r
`:a.arraySize.nodes[0]instanceof Sr?i+=s+"  "+a.name+": array<"+bt(a.type)+", "+a.arraySize.nodes[0].value+`>,\r
`:i+=s+"  "+a.name+": array<"+bt(a.type)+", "+a.arraySize.nodes[0].formatToWGSL(e,0)+`>,\r
`;return i+=s+`};\r
`}}class Vn extends Pe{constructor(e,t,i,s){super(),o(this,"name"),o(this,"args"),o(this,"body"),o(this,"returnType"),this.name=e,this.args=t,this.body=i,this.returnType=s}static parse(e){if(!e.peekToken(0).isBuiltinType()&&e.peekToken(0).Type!=v.VOID||e.peekToken(1).Type!=v.IDENT||e.peekToken(2).Type!=v.LEFTSAMLL)throw"Error parsing function: Unexpected character";var t=e.peekToken(0).Literal,i=e.peekToken(1).Literal,s=(e.skipToken(2),new Array);if(e.peekToken(0).Type!=v.LEFTSAMLL)throw"Error parsing function parameter list: Unexpected character";for(e.skipToken(1);e.peekToken(0).Type!=v.EOF;){if(e.peekToken(0).Type==v.RIGHTSAMLL){e.skipToken(1);break}e.peekToken(0).Type!=v.INOUT&&e.peekToken(0).Type!=v.IN&&e.peekToken(0).Type!=v.OUT||e.skipToken(1);var a=Ie.parse(e);s.push(a),e.peekToken(0).Type==v.COMMA&&e.skipToken(1)}var n=jt.parse(e);return new Vn(i,s,n,t)}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t),a,n=0<e.layoutsOut.length||0<e.builtinOut.length;switch(e.stage){case"compute":a="ComputeOutput";break;case"vertex":a="VertexOutput";break;case"fragment":a="FragmentOutput";break;default:a="StructOutput"}if(this.name=="main"&&n){i+="struct "+a+` {\r
`;for(var h of e.layoutsOut){var l;h.nodes[0]instanceof Ie&&(l=h.nodes[0],h.qualifier.size==1&&h.qualifier.has("location")&&(i+="  @location("+h.qualifier.get("location")+") "),i+=l.name+": "+bt(l.type)+`,\r
`,e.addIdentifier(l.name,"stout."+l.name))}var u;for(u of e.builtinOut)i+="  "+u+`,\r
`;i+=`};\r
\r
`}let c="";if(this.name=="main"&&(e.workGroupSize!=null?c+="@"+e.stage+" "+e.workGroupSize.formatToWGSL(e,0)+` \r
`:c+="@"+e.stage+`\r
`),e=new ml(e),c+=s+"fn "+this.name+"(",this.name!="main"){for(let b=0;b<this.args.length;b++){var d=this.args[b];0<b&&(c+=", "),c+=d.name+": "+bt(d.type),e.addIdentifier(d.name,d.name)}c+=") -> "+bt(this.returnType)}else{var f,m=e.layoutsIn;for(let b=0;b<m.length;b++){var _,g=m[b];0<b?c+=`,\r
    `:c+=`\r
    `,g.nodes[0]instanceof Ie&&(_=g.nodes[0],g.qualifier.size==1&&g.qualifier.has("location")&&(c+="@location("+g.qualifier.get("location")+") "),c+=_.name+": "+bt(_.type),e.addIdentifier(_.name,_.name))}0<m.length&&(c+=`,\r
    `);for(f of e.builtinIn)c+=f+`,\r
    `;c+=n?") -> "+a:") "}let w="";this.name=="main"&&n&&(w+="    var stout: "+a+` ;\r
`);for(var C of this.body.nodes)w+=C.formatToWGSL(e,t+1),C instanceof Ai||C instanceof Ci||C instanceof Ti||(w+=`;\r
`);return this.name=="main"&&n&&(w+=`    return stout;\r
`),i=(i=(i+=c+` {\r
`)+w)+(s+`}\r
`)+`\r
`}}class Hn extends Pe{constructor(){super(),o(this,"args",[])}static parse(e){if(e.peekToken(0).Type!=v.LEFTSAMLL)throw"Error parsing function argument table: Unexpected character";e.skipToken(1);for(var t=new Hn;e.peekToken(0).Type!=v.EOF;){if(e.peekToken(0).Type==v.RIGHTSAMLL){e.skipToken(1);break}var i=le.parse(e);t.args.push(i),e.peekToken(0).Type==v.COMMA&&e.skipToken(1)}return t}}class Si extends Pe{constructor(e,t){super(),o(this,"name"),o(this,"args"),this.name=e,this.args=t}static parse(e){var t;if(e.peekToken(0).isDataType()&&e.peekToken(1).Type==v.LEFTSAMLL)return t=e.peekToken(0).Literal,e.skipToken(1),e=Hn.parse(e),new Si(t,e);throw"Error parsing function argument table: Unexpected character"}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);if(this.name=="texture"&&this.args.args[0].nodes[0]instanceof Si){var a=this.args.args[0].nodes[0];if(a.name=="sampler2D"){i+=s+"textureSample(";for(let u=0;u<a.args.args.length;u++){var n=a.args.args[u];0<u&&(i+=", "),i+=n.formatToWGSL(e,0)}for(let u=1;u<this.args.args.length;u++){var h=this.args.args[u];0<u&&(i+=", "),i+=h.formatToWGSL(e,0)}return i+=")"}}i+=s+bt(this.name)+"(";for(let u=0;u<this.args.args.length;u++){var l=this.args.args[u];0<u&&(i+=", "),i+=l.formatToWGSL(e,0)}return i+=")"}}class Ie extends Pe{constructor(e,t,i=new le){super(),o(this,"type"),o(this,"name"),o(this,"arraySize"),o(this,"hasIn"),o(this,"hasOut"),o(this,"hasConst"),this.type=e,this.name=t,this.hasIn=!1,this.hasOut=!1,this.hasConst=!1,this.arraySize=i}static parse(e){let t=new Ie("",""),i=e.peekToken(0);if(i.Type==v.CONST)e.skipToken(1),t.hasConst=!0;else if(i.Type==v.IN)e.skipToken(1),t.hasIn=!0;else if(i.Type==v.OUT)e.skipToken(1),t.hasOut=!0;else if(i.Type==v.INOUT)e.skipToken(1),t.hasIn=!0,t.hasOut=!0;else if(!i.isDataType())throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";if((i=e.peekToken(0)).isDataType()&&e.peekToken(1).Type==v.LEFTMEDI){if(t.type=i.Literal,e.skipToken(2),t.arraySize=le.parse(e),e.peekToken(0).Type==v.RIGHTMEDI&&e.skipToken(1),e.peekToken(0).Type!=v.IDENT)throw"Unexpected";t.name=e.peekToken(0).Literal,e.skipToken(1)}else if(i.isDataType()&&e.peekToken(1).Type==v.IDENT&&e.peekToken(2).Type==v.LEFTMEDI)t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(3),e.peekToken(0).Type!=v.RIGHTMEDI&&(t.arraySize=le.parse(e),e.peekToken(0).Type!=v.RIGHTMEDI)||e.skipToken(1);else{if(!i.isDataType()||e.peekToken(1).Type!=v.IDENT)throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(2)}var s,a,n;if((i=e.peekToken(0)).Type==v.SEMICOLON)e.skipToken(1);else if(i.Type!=v.RIGHTSAMLL)if(i.Type==v.ASSIGN)s=e.peekToken(0),e.skipToken(1),a=new wr(t.name),n=le.parse(e),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1),t.addNode(new Wr(s,a,n));else{if(i.Type!=v.COMMA)throw"Error parsing declaration expression: Unexpected character("+e.peekToken(0).Literal+")";for(;e.peekToken(0).Type==v.COMMA&&e.peekToken(1).Type==v.IDENT;){var h=new Ie(t.type,e.peekToken(1).Literal);t.addNode(h),e.skipToken(2),e.peekToken(0).Type==v.ASSIGN&&(e.skipToken(-1),h.addNode(le.parse(e)))}}return t}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);if(this.hasConst?i+=s+"let ":i+=s+"var ",e.addIdentifier(this.name,this.name),this.arraySize.nodes.length<=0?i+=this.name+": "+bt(this.type):this.arraySize.nodes[0]instanceof Sr?i+=this.name+": array<"+bt(this.type)+", "+this.arraySize.nodes[0].value+">":i+=this.name+": array<"+bt(this.type)+", "+this.arraySize.nodes[0].formatToWGSL(e,0)+">",0<this.nodes.length&&this.nodes[0]instanceof Wr)i+=" = "+this.nodes[0].rightValue.formatToWGSL(e,0);else if(0<this.nodes.length&&this.nodes[0]instanceof le&&this.nodes[0].nodes[0]instanceof Wr)i+=" = "+this.nodes[0].nodes[0].rightValue.formatToWGSL(e,0);else if(0<this.nodes.length&&this.nodes[0]instanceof Ie){i+=`;\r
`;for(var a of this.nodes)i+=a.formatToWGSL(e,t)+`;\r
`}else i+=`;\r
`;return i}}class Ti extends Pe{constructor(e,t,i,s){super(),o(this,"expression1"),o(this,"condition"),o(this,"expression2"),o(this,"loopBody"),this.expression1=e,this.condition=t,this.expression2=i,this.loopBody=s}static parse(e){if(e.peekToken(0).Type!=v.FOR||e.peekToken(1).Type!=v.LEFTSAMLL)throw"Error parsing for loop: Unexpected character";{e.skipToken(2);let t;e.peekToken(0).Type==v.SEMICOLON?(e.skipToken(1),t=new le):(e.peekToken(0).isDataType()&&e.peekToken(1).Type==v.IDENT&&e.peekToken(2).Type==v.ASSIGN?(t=new Ie(e.peekToken(0).Literal,e.peekToken(1).Literal),e.skipToken(1),t.addNode(le.parse(e))):t=le.parse(e),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1));let i;e.peekToken(0).Type==v.SEMICOLON?(e.skipToken(1),i=new le):(i=le.parse(e),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1));let s;e.peekToken(0).Type==v.SEMICOLON?(e.skipToken(1),s=new le):(s=le.parse(e),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1)),e.peekToken(0).Type==v.RIGHTSAMLL&&e.skipToken(1);let a;return a=e.peekToken(0).Type==v.LEFTBIG?jt.parse(e):new jt,new Ti(t,i,s,a)}}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);i=(i=(i=(i+=s+"for (")+this.expression1.formatToWGSL(e,0)+"; ")+this.condition.formatToWGSL(e,0)+"; ")+this.expression2.formatToWGSL(e,0)+`) { \r
`;for(var a of this.loopBody.nodes)i+=a.formatToWGSL(e,t+1),a instanceof Ai||a instanceof Ci||a instanceof Ti||(i+=`;\r
`);return i+=s+`} \r
`}}class Ci extends Pe{constructor(e,t){super(),o(this,"conditionExpr"),o(this,"loopBody"),this.conditionExpr=e,this.loopBody=t}static parse(e){var t;if(e.peekToken(0).Type==v.WHILE)return e.skipToken(1),e.peekToken(0).Type==v.LEFTSAMLL&&e.skipToken(1),t=le.parse(e),e.peekToken(0).Type==v.RIGHTSAMLL&&e.skipToken(1),e=jt.parse(e),new Ci(t,e);throw"Error parsing while loop: Unexpected character"}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);i=(i+=s+`loop {\r
`)+s+"    if ("+this.conditionExpr.formatToWGSL(e,0)+`) { break; }\r
\r
`;for(var a of this.loopBody.nodes)i+=a.formatToWGSL(e,t+1),a instanceof Ai||a instanceof Ci||a instanceof Ti||(i+=`;\r
`);return i+=s+`}\r
`}}class Ai extends Pe{constructor(e,t,i){super(),o(this,"conditionExpr"),o(this,"trueBranch"),o(this,"falseBranch"),this.conditionExpr=e,this.trueBranch=t,this.falseBranch=i}static parse(e){if(e.peekToken(0).Type!=v.IF)throw"Error parsing IF branch statement: Unexpected character";{e.skipToken(1),e.peekToken(0).Type==v.LEFTSAMLL&&e.skipToken(1);let t=le.parse(e),i,s=new jt;if(e.peekToken(0).Type==v.RIGHTSAMLL&&e.skipToken(1),e.peekToken(0).Type==v.LEFTBIG?i=jt.parse(e):(i=new jt,e.peekToken(0).Type==v.RETURN?i.addNode(Sa.parse(e)):i.addNode(le.parse(e))),e.peekToken(0).Type==v.ELSE){if(e.skipToken(1),e.peekToken(0).Type!=v.LEFTBIG)throw"not impl";s=jt.parse(e)}return new Ai(t,i,s)}}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);i+=s+"if ("+this.conditionExpr.formatToWGSL(e,0)+`) {\r
`;for(var a of this.trueBranch.nodes)i+=a.formatToWGSL(e,t+1)+`;\r
`;if(0<this.falseBranch.nodes.length){i+=s+`} else {\r
`;for(var n of this.falseBranch.nodes)i+=n.formatToWGSL(e,t+1)+`;\r
`}return i+=s+`}\r
`}}class le extends Pe{constructor(){super()}static parse(e){let t=new Array,i=new Array,s=0;for(;e.peekToken(0).Type!=v.EOF;){var a,n,h,l=e.peekToken(0);if(l.Type==v.SEMICOLON||l.Type==v.RIGHTMEDI||l.Type==v.COMMA||l.Type==v.COLON||l.Type==v.RIGHTBIG)break;if(l.isOperation())l.isOperation()&&(l.Type==v.INC||l.Type==v.DEC?(a=l,e.skipToken(1),n=le.parse(e),i.push(new Xi(a,void 0,n))):(0<t.length&&(t[t.length-1].nOperationPriorityLevel<=l.nOperationPriorityLevel?le.unionOperation(t,i):0<t.length&&t[t.length-1].Literal=="-"&&(a=t.pop(),n=i.pop(),i.push(new Xi(a,void 0,n)))),t.push(l),e.skipToken(1)));else if(l.Type==v.LITERAL)i.push(new Sr(l.Literal)),e.skipToken(1);else if(l.Type==v.LEFTSAMLL)s++,t.push(l),e.skipToken(1);else if(l.Type==v.RIGHTSAMLL){if(s<=0)break;for(s--;le.unionOperation(t,i););t[t.length-1].Type==v.LEFTSAMLL&&(t.pop(),(h=new Xf).addNode(i.pop()),i.push(h)),e.skipToken(1)}else if(l.Type==v.IDENT)e.peekToken(1).Type==v.INC||e.peekToken(1).Type==v.DEC?(h=e.peekToken(1),u=new wr(l.Literal),i.push(new Xi(h,u,void 0)),e.skipToken(2)):e.peekToken(1).Type==v.LEFTSAMLL?i.push(Si.parse(e)):e.peekToken(1).Type==v.DOT?i.push(ia.parse(e)):e.peekToken(1).Type!=v.LEFTMEDI?(i.push(new wr(l.Literal)),e.skipToken(1)):i.push(Ei.parse(e));else if(l.isBuiltinType()&&e.peekToken(1).Type==v.LEFTSAMLL)i.push(Si.parse(e));else if(l.isAssignOperation()){var u=l,c=(e.skipToken(1),i.pop()),d=le.parse(e);i.push(new Wr(u,c,d))}else if(l.Type==v.LEFTBIG&&(e.peekToken(1).Type==v.LITERAL||e.peekToken(1).Type==v.SUB&&e.peekToken(2).Type==v.LITERAL))i.push(ra.parse(e));else if(l.Type==v.QUEMARK){0<t.length&&t[t.length-1].nOperationPriorityLevel<=l.nOperationPriorityLevel&&le.unionOperation(t,i),e.skipToken(1);var c=i.pop(),d=le.parse(e),f=(e.peekToken(0).Type==v.COLON&&e.skipToken(1),le.parse(e));if(i.push(new Wf(c,d,f)),e.peekToken(-1).Type==v.SEMICOLON)break}else{if(l.Type!=v.LEFTMEDI)throw"An unexpected character";e.skipToken(1),f=le.parse(e),l=(e.peekToken(0).Type==v.RIGHTMEDI&&e.skipToken(1),i.pop()),i.push(new Ei(l,f))}}for(;0<t.length&&le.unionOperation(t,i););var m;if(t.length<=0&&i.length==1)return(m=new le).addNode(i.pop()),m;throw"Error parsing expression: Unexpected character("+e.peekToken(0).Literal+")"}formatToWGSL(e,t){return this.nodes[0].formatToWGSL(e,t)}static unionOperation(e,t){var i,s;return e.length<0||t.length<2?0<e.length&&e[e.length-1].Literal=="-"&&(i=e.pop(),s=t.pop(),t.push(new Xi(i,void 0,s)),!0):!!e[e.length-1].isOperation()&&(i=t.pop(),s=e.pop(),e=t.pop(),s.Type==v.DOT?t.push(new ia(e,i)):t.push(new Wr(s,e,i)),!0)}}class Xf extends Pe{constructor(){super()}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+"("+this.nodes[0].formatToWGSL(e,0)+")"}}class wr extends Pe{constructor(e){super(),o(this,"name"),this.name=e}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+e.findIdentifier(this.name)}}class Sr extends Pe{constructor(e){super(),o(this,"value"),this.value=e}static parse(e){var t,i=e.peekToken(0);if(i.Type==v.SUB&&e.peekToken(1).Type==v.LITERAL)return t=new Sr("-"+e.peekToken(1).Literal),e.skipToken(2),t;if(i.Type==v.LITERAL)return t=new Sr(i.Literal),e.skipToken(1),t;throw"Error parsing literal constants: Unexpected characters("+i.Literal+")"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.value}}class ra extends Sr{constructor(e){super(""),o(this,"arrayValue"),this.arrayValue=e}static parse(e){if(e.peekToken(0).Type==v.LEFTBIG&&e.peekToken(1).Type==v.LITERAL||e.peekToken(0).Type==v.LEFTBIG&&e.peekToken(1).Type==v.SUB&&e.peekToken(2).Type==v.LITERAL){e.skipToken(1);for(var t=[];e.peekToken(0).Type!=v.RIGHTBIG;)if(e.peekToken(0).Type==v.LEFTSAMLL)t.push(ra.parse(e));else{if(t.push(Sr.parse(e)),e.peekToken(0).Type!=v.COMMA){if(e.peekToken(0).Type!=v.RIGHTBIG)throw"Error parsing array constants: Unexpected characters";e.skipToken(1);break}e.skipToken(1)}return new ra(t)}throw"Error parsing array constants: Unexpected characters"}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);this.arrayValue[0].value.includes(".")?i+=s+"array<f32, "+this.arrayValue.length.toString()+">(":i+=s+"array<i32, "+this.arrayValue.length.toString()+">(";for(let a=0;a<this.arrayValue.length;a++)0<a&&(i+=", "),i+=this.arrayValue[a].formatToWGSL(e,0);return i+=")"}}class Xn extends Pe{constructor(){super()}static parse(e){if(e.peekToken(0).Type==v.CONTINUE&&e.peekToken(1).Type==v.SEMICOLON)return e.skipToken(2),new Xn;throw"Error parsing continue: Unexpected character"}formatToWGSL(e,t){var i="";return i+=(t<=0?"":"    ".repeat(t))+"continue"}}class Sa extends Pe{constructor(e){super(),o(this,"value"),this.value=e}static parse(e){var t;if(e.peekToken(0).Type==v.RETURN)return e.skipToken(1),t=le.parse(e),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1),new Sa(t);throw"Error parsing return expression: Unexpected character"}formatToWGSL(e,t){var i="";return i+=(t<=0?"":"    ".repeat(t))+"return "+this.value.formatToWGSL(e,0)}}class Xi extends Pe{constructor(e,t,i){super(),o(this,"op"),o(this,"leftValue"),o(this,"rightValue"),this.op=e,this.leftValue=t,this.rightValue=i}formatToWGSL(e,t){let i="",s=t<=0?"":"    ".repeat(t);return this.op.Literal=="++"||this.op.Literal=="--"?this.leftValue!=null?(t=this.leftValue.formatToWGSL(e,0),i+=s+t+" = "+t+" "+this.op.Literal[0]+" 1"):(t=this.rightValue.formatToWGSL(e,0),i+=s+t+" = "+t+" "+this.op.Literal[0]+" 1"):this.leftValue!=null?i+=s+this.leftValue.formatToWGSL(e,0)+this.op.Literal:i+=s+this.op.Literal+this.rightValue.formatToWGSL(e,0),i}}class Wr extends Pe{constructor(e,t,i){super(),o(this,"op"),o(this,"leftValue"),o(this,"rightValue"),this.op=e,this.leftValue=t,this.rightValue=i}formatToWGSL(e,t){var i="";return i+=(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+" "+this.op.Literal+" "+this.rightValue.formatToWGSL(e,0)}}class Wf extends Pe{constructor(e,t,i){super(),o(this,"condition"),o(this,"expression1"),o(this,"expression2"),this.condition=e,this.expression1=t,this.expression2=i}static parse(e){throw"Error parsing ternary operation expression: Unexpected character"}formatToWGSL(e,t){return""}}class ia extends Pe{constructor(e,t){super(),o(this,"leftValue"),o(this,"rightValue"),this.leftValue=e,this.rightValue=t}static parse(e){var t,i;if(e.peekToken(0).Type==v.IDENT&&e.peekToken(1).Type==v.DOT&&e.peekToken(2).Type==v.IDENT)return t=new wr(e.peekToken(0).Literal),i=new wr(e.peekToken(2).Literal),e.skipToken(3),new ia(t,i);throw"Error parsing selection expression: Unexpected character"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"."+this.rightValue.formatToWGSL(e,0)}}class Ei extends Pe{constructor(e,t){super(),o(this,"leftValue"),o(this,"indexValue"),this.leftValue=e,this.indexValue=t}static parse(e){if(e.peekToken(0).Type!=v.IDENT||e.peekToken(1).Type!=v.LEFTMEDI)throw"Error parsing index expression: Unexpected character";{var t=new wr(e.peekToken(0).Literal),i=(e.skipToken(2),le.parse(e));e.peekToken(0).Type==v.RIGHTMEDI&&e.skipToken(1);let s=new Ei(t,i);for(;e.peekToken(0).Type==v.LEFTMEDI;)e.skipToken(1),i=le.parse(e),e.peekToken(0).Type==v.RIGHTMEDI&&e.skipToken(1),s=new Ei(s,i);return s}}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"["+this.indexValue.formatToWGSL(e,0)+"]"}}class jt extends Pe{constructor(){super()}static parse(e){if(e.peekToken(0).Type!=v.LEFTBIG)throw"Error parsing block: Unexpected symbol";e.skipToken(1);var t=new jt;for(let l=1;0<l&&e.peekToken(0).Type!=v.EOF;){var i=e.peekToken(0);if(i.Type==v.LEFTBIG)l++,e.skipToken(1);else if(i.Type==v.RIGHTBIG)l--,e.skipToken(1);else if(i.Type==v.SEMICOLON)e.skipToken(1);else if(i.isDataType()&&e.peekToken(1).Type==v.IDENT)t.addNode(Ie.parse(e));else if(i.Type==v.CONST&&e.peekToken(1).isDataType()&&e.peekToken(2).Type==v.IDENT)t.addNode(Ie.parse(e));else if(i.Type==v.IDENT&&e.peekToken(1).Type==v.ASSIGN)t.addNode(le.parse(e)),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1);else if(i.Type==v.IDENT&&e.peekToken(1).Type==v.LEFTMEDI){var s=Ei.parse(e);e.peekToken(0).Type==v.ASSIGN?(a=e.peekToken(0),n=(e.skipToken(1),le.parse(e)),e.peekToken(0).Type==v.RIGHTMEDI&&e.skipToken(1),t.addNode(new Wr(a,s,n))):t.addNode(s)}else if(i.Type==v.IDENT&&e.peekToken(1).Type==v.DOT){var a=le.parse(e);t.addNode(a)}else if(i.Type==v.IDENT&&e.peekToken(1).isAssignOperation()){var n=e.peekToken(1),s=new wr(i.Literal),h=(e.skipToken(2),le.parse(e));e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1),t.addNode(new Wr(n,s,h))}else if(i.Type!=v.IDENT||e.peekToken(1).Type!=v.INC&&e.peekToken(1).Type!=v.DEC||e.peekToken(2).Type!=v.SEMICOLON)if(i.Type==v.RETURN)t.addNode(Sa.parse(e));else if(i.Type==v.CONTINUE)t.addNode(Xn.parse(e));else if(i.Type==v.WHILE)t.addNode(Ci.parse(e));else if(i.Type==v.FOR)t.addNode(Ti.parse(e));else if(i.Type==v.IF)t.addNode(Ai.parse(e));else{if(i.Type!=v.IDENT||e.peekToken(1).Type!=v.LEFTSAMLL)throw"Error parsing block: Unexpected symbol("+i.Literal+")";t.addNode(Si.parse(e)),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(0)}else h=e.peekToken(1),t.addNode(new Xi(h,new wr(i.Literal),void 0)),e.skipToken(3)}return t}}class Wn extends Pe{constructor(e,t){super(),o(this,"type"),o(this,"qualifier"),this.type=t,this.qualifier=e}static parse(e){var t;if(e.peekToken(0).Type==v.PRECISION&&e.peekToken(1).Type==v.IDENT&&e.peekToken(2).isBuiltinType())return t=new Wn(e.peekToken(1).Literal,e.peekToken(2).Literal),e.skipToken(3),e.peekToken(0).Type==v.SEMICOLON&&e.skipToken(1),t;throw"Error parsing precision qualifier: Unexpected character"}formatToWGSL(e,t){return""}}class Ta extends Pe{constructor(){super(),o(this,"scope",""),o(this,"qualifier",new Map)}addQualifier(e,t=""){this.qualifier.set(e,t)}static parse(e){if(e.peekToken(0).Type!=v.LAYOUT||e.peekToken(1).Type!=v.LEFTSAMLL)throw"Error parsing layout qualifier: Unexpected symbol";var t,i=new Ta;e.skipToken(2);do if(e.peekToken(0).Type==v.IDENT)if(e.peekToken(1).Type==v.ASSIGN&&e.peekToken(2).Type==v.LITERAL){var s=e.peekToken(0).Literal,a=e.peekToken(2).Literal;if(i.addQualifier(s,a),e.skipToken(3),e.peekToken(0).Type==v.COMMA){e.skipToken(1);continue}e.peekToken(0).Line=0}else{if(e.peekToken(1).Type==v.RIGHTSAMLL){s=e.peekToken(0).Literal,i.addQualifier(s,""),e.skipToken(1);break}if(e.peekToken(1).Type==v.COMMA){a=e.peekToken(0).Literal,i.addQualifier(a,""),e.skipToken(2);continue}}while(e.peekToken(0).Type!=v.RIGHTSAMLL);if(e.peekToken(0).Type==v.RIGHTSAMLL&&e.skipToken(1),i.scope=e.peekToken(0).Literal,e.skipToken(1),e.peekToken(0).Type==v.SEMICOLON)return e.skipToken(1),i;if(e.peekToken(0).isBuiltinType()&&e.peekToken(1).Type==v.IDENT&&e.peekToken(2).Type==v.SEMICOLON)return t=new Ie(e.peekToken(0).Literal,e.peekToken(1).Literal),i.addNode(t),e.skipToken(3),i;if(e.peekToken(0).Type==v.IDENT&&e.peekToken(1).Type==v.LEFTBIG)return t=_r.parse(e),i.addNode(t),e.peekToken(0).Type==v.IDENT&&e.peekToken(1).Type==v.SEMICOLON&&(t.addNode(new Ie(t.name,e.peekToken(0).Literal)),e.skipToken(2)),i;throw"Error parsing layout qualifier type: Unexpected symbol("+e.peekToken(0).Literal+")"}formatToWGSL(e,t){let i="";if(this.qualifier.size==1&&this.qualifier.has("location"))i+="@location("+this.qualifier.get("location")+") ";else if(this.qualifier.size==2&&this.qualifier.has("set")&&this.qualifier.has("binding"))i+="@group("+this.qualifier.get("set")+") @binding("+this.qualifier.get("binding")+") ";else if(1<=this.qualifier.size&&this.qualifier.has("binding"))i+="@group(0) @binding("+this.qualifier.get("binding")+") ";else if(this.qualifier.size==1&&this.qualifier.has("push_constant"))i+="@push_constant ";else if(1<=this.qualifier.size&&this.qualifier.has("local_size_x"))i=(i=(i=(i+="@workgroup_size(")+(this.qualifier.get("local_size_x")+", "))+(this.qualifier.has("local_size_y")?this.qualifier.get("local_size_y")+", ":"1, "))+(this.qualifier.has("local_size_z")?this.qualifier.get("local_size_z")+"":"1")+")";else if(this.nodes.length<=0)return"";var s=this.nodes[0];if(s instanceof Ie){switch(s.type){case"sampler":case"texture2D":i+="var ";break;default:this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> "}e.addIdentifier(s.name,s.name),i+=s.name+": "+bt(s.type)+`;\r
`}else if(s instanceof _r)if(this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> ",s.nodes.length<=0){let n="unif"+e.layoutUniformCount.toString();for(;e.hasIdentifier(n);)e.layoutUniformCount++,n="unif"+e.layoutUniformCount.toString();for(var a of s.fields)e.addIdentifier(a.name,n+"."+a.name);i+=n+": "+s.name+`;\r
`,e.layoutUniformCount++}else s=s.nodes[0],i+=s.name+": "+s.type+`;\r
`;return i}}function bt(r){switch(r){case"int":return"i32";case"int[]":return"array<i32>";case"uint":return"u32";case"uint[]":return"array<u32>";case"float":return"f32";case"float[]":return"array<f32>";case"vec2":return"vec2<f32>";case"vec3":return"vec3<f32>";case"vec4":return"vec4<f32>";case"vec2[]":return"array<vec2<f32>>";case"vec3[]":return"array<vec3<f32>>";case"vec4[]":return"array<vec4<f32>>";case"ivec2":return"vec2<i32>";case"ivec3":return"vec3<i32>";case"ivec4":return"vec4<i32>";case"ivec2[]":return"array<vec2<i32>>";case"ivec3[]":return"array<vec3<i32>>";case"ivec4[]":return"array<vec4<i32>>";case"mat2":case"mat2x2":return"mat2x2<f32>";case"mat2x3":return"mat2x3<f32>";case"mat2x4":return"mat2x4<f32>";case"mat2[]":case"mat2x2[]":return"array<mat2x2<f32>>";case"mat2x3[]":return"array<mat2x3<f32>>";case"mat2x4[]":return"array<mat2x4<f32>>";case"mat3":return"mat3x3<f32>";case"mat3x2":return"mat3x2<f32>";case"mat3x3":return"mat3x3<f32>";case"mat3x4":return"mat3x4<f32>";case"mat3[]":return"array<mat3x3<f32>>";case"mat3x2[]":return"array<mat3x2<f32>>";case"mat3x3[]":return"array<mat3x3<f32>>";case"mat3x4[]":return"array<mat3x4<f32>>";case"mat4":return"mat4x4<f32>";case"mat4x2":return"mat4x2<f32>";case"mat4x3":return"mat4x3<f32>";case"mat4x4":return"mat4x4<f32>";case"mat4[]":return"array<mat4x4<f32>>";case"mat4x2[]":return"array<mat4x2<f32>>";case"mat4x3[]":return"array<mat4x3<f32>>";case"mat4x4[]":return"array<mat4x4<f32>>";case"texture2D":return"texture_2d<f32>"}return r}class Kf{constructor(e){o(this,"_lexer"),o(this,"_rootNode"),this._lexer=e,this._rootNode=new Pe,this.parse()}get lexer(){return this._lexer}parse(){for(;this.peekToken(0).Type!==v.EOF;){var e;this.peekToken(0).Type==v.SEMICOLON?this.skipToken(1):(e=this.parseStatement())!==null&&this._rootNode.addNode(e)}}parseStatement(){var e=this.peekToken();if(e.Type==v.LAYOUT&&this.peekToken(1).Type==v.LEFTSAMLL)return Ta.parse(this._lexer);if(e.Type==v.STRUCT)return this.skipToken(1),_r.parse(this._lexer);if((e.isBuiltinType()||e.Type==v.VOID)&&this.peekToken(1).Type==v.IDENT&&this.peekToken(2).Type==v.LEFTSAMLL)return Vn.parse(this._lexer);if(e.Type==v.CONST&&this.peekToken(1).isDataType())return Ie.parse(this._lexer);if(e.isDataType()&&this.peekToken(1).Type==v.IDENT)return Ie.parse(this._lexer);if(e.Type==v.OUT&&this.peekToken(1).isDataType()&&this.peekToken(2).Type==v.IDENT)return Ie.parse(this._lexer);if(e.Type==v.PRECISION)return Wn.parse(this._lexer);throw"Error parsing statement: Unexpected character"}skipToken(e){this._lexer.skipToken(e)}peekToken(e=0){return this._lexer.peekToken(e)}getNextToken(){return this._lexer.GetNextToken()}get ASTRoot(){return this._rootNode}}class en{static convertGLSL(e){return e=new Vf(e),e=new zf(e),e=new Kf(e),new Hf(e).generateWGSL()}}o(en,"VertexShader","VertexShader"),o(en,"FragmentShader","FragmentShader");class Xo{constructor(){o(this,"setID",0),o(this,"bindingID",0),o(this,"name",""),o(this,"type","")}}class Wo{constructor(){o(this,"name",""),o(this,"type",""),o(this,"locationID",0),o(this,"builtinName","")}isBuiltinAttribute(){return this.builtinName!=""}}class Yf{constructor(){o(this,"uniformInfo",[]),o(this,"inputAttribute",[]),o(this,"outputAttribute",[]),o(this,"sourceCode","")}}var zt=(r=>(r[r.vertex=0]="vertex",r[r.fragment=1]="fragment",r[r.computer=2]="computer",r))(zt||{});class jf{constructor(){o(this,"blendMode",Le.NONE),o(this,"depthCompare",fs.less),o(this,"depthWriteEnabled",!0),o(this,"frontFace","ccw"),o(this,"cullMode",yi.back),o(this,"topology",zn.triangle_list),o(this,"depthBias",10),o(this,"useLight",!1),o(this,"useProbe",!1),o(this,"acceptGI",!1),o(this,"acceptShadow",!1),o(this,"castShadow",!1),o(this,"castReflection",!1),o(this,"receiveEnv",!1),o(this,"renderLayer",1e3),o(this,"renderOrder",0),o(this,"unclippedDepth",!1),o(this,"multisample",0),o(this,"label"),o(this,"useZ",!0),o(this,"splitTexture",!1)}setFromMapValues(e){e.has("blendMode")&&(this.blendMode=this.convertBlendMode(e.get("blendMode"))),e.has("depthCompare")&&(this.depthCompare=e.get("depthCompare")),e.has("depthWriteEnabled")&&(this.depthWriteEnabled=e.get("depthWriteEnabled")),e.has("frontFace")&&(this.frontFace=e.get("frontFace")),e.has("cullMode")&&(this.cullMode=e.get("cullMode")),e.has("topology")&&(this.topology=e.get("topology")),e.has("depthBias")&&(this.depthBias=e.get("depthBias")),e.has("useLight")&&(this.useLight=e.get("useLight")),e.has("useProbe")&&(this.useProbe=e.get("useProbe")),e.has("acceptGI")&&(this.acceptGI=e.get("acceptGI")),e.has("acceptShadow")&&(this.acceptShadow=e.get("acceptShadow")),e.has("castShadow")&&(this.castShadow=e.get("castShadow")),e.has("receiveEnv")&&(this.receiveEnv=e.get("receiveEnv")),e.has("renderLayer")&&(this.renderLayer=e.get("renderLayer")),e.has("renderOrder")&&(this.renderOrder=e.get("renderOrder")),e.has("unclippedDepth")&&(this.unclippedDepth=e.get("unclippedDepth")),e.has("multisample")&&(this.multisample=e.get("multisample")),e.has("label")&&(this.label=e.get("label")),e.has("useZ")&&(this.useZ=e.get("useZ"))}convertBlendMode(e){switch(e){case"ABOVE":return Le.ABOVE;case"ALPHA":return Le.ALPHA;case"NORMAL":return Le.NORMAL;case"ADD":return Le.ADD;case"BELOW":return Le.BELOW;case"ERASE":return Le.ERASE;case"MUL":return Le.MUL;case"SCREEN":return Le.SCREEN;case"DIVD":return Le.DIVD;case"SOFT_ADD":return Le.SOFT_ADD}return Le.NONE}}class qf extends Ii{constructor(){super(),o(this,"uniformNodes",[]),o(this,"_onChange",!0),this.bufferType=Er.MaterialDataUniformGPUBuffer}initDataUniform(e){let t=0;for(const n in this.uniformNodes=e){var i=e[n];i||console.error(n,"is empty"),t+=4*i.size}t=256*Math.floor(t/256+1),this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,t/4);for(const n in e){var s=e[n],a=(s||console.error(n,"is empty"),this.memory.allocation_node(4*s.size));s.memoryInfo=a,s.bindOnChange=()=>this.onChange()}}onChange(){this._onChange=!0}apply(){if(this.uniformNodes.length!=0&&this._onChange){for(const e in this.uniformNodes)this.uniformNodes[e].update();super.apply(),this._onChange=!1}}}class Gt{static init(){this.renderShaderModulePool=new Map,this.renderShader=new Map}}o(Gt,"renderShaderModulePool"),o(Gt,"renderShader");class cs extends cl{constructor(e,t){super(),o(this,"useRz",!1),o(this,"vsName"),o(this,"fsName"),o(this,"shaderState"),o(this,"textures"),o(this,"pipeline"),o(this,"bindGroupLayouts"),o(this,"materialDataUniformBuffer"),o(this,"_sourceVS"),o(this,"_sourceFS"),o(this,"_destVS"),o(this,"_destFS"),o(this,"_vsShaderModule"),o(this,"_fsShaderModule"),o(this,"_textureGroup",-1),o(this,"_textureChange",!1),o(this,"_vs_limit",[]),o(this,"_fs_limit",[]),o(this,"_cs_limit",[]),o(this,"_groupsShaderReflectionVarInfos"),o(this,"_passShaderCache",new Map),this.vsName=e.toLowerCase(),this.fsName=t.toLowerCase(),this.vsName in G||console.error("Shader Not Register, Please Register Shader!",this.vsName),this.fsName in G||console.error("Shader Not Register, Please Register Shader!",this.fsName),G[this.vsName]&&(this._sourceVS=G[this.vsName]),G[this.fsName]&&(this._sourceFS=G[this.fsName]),this.textures={},this.bindGroups=[],this.shaderState=new jf,this.materialDataUniformBuffer=new qf,this.materialDataUniformBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this._bufferDic.set("global",this.materialDataUniformBuffer),this._bufferDic.set("materialUniform",this.materialDataUniformBuffer)}get cullMode(){return this.shaderState.cullMode}set cullMode(e){this.shaderState.cullMode!=e&&(this._stateChange=!0),this.shaderState.cullMode=e}get frontFace(){return this.shaderState.frontFace}set frontFace(e){this.shaderState.frontFace!=e&&(this._stateChange=!0),this.shaderState.frontFace=e}get depthBias(){return this.shaderState.depthBias}set depthBias(e){this.shaderState.depthBias!=e&&(this._stateChange=!0),this.shaderState.depthBias=e}get topology(){return this.shaderState.topology}set topology(e){this.shaderState.topology!=e&&(this._stateChange=!0),this.shaderState.topology=e}get blendMode(){return this.shaderState.blendMode}set blendMode(e){this.shaderState.blendMode!=e&&(this._stateChange=!0),this.shaderState.blendMode=e}get depthCompare(){return this.shaderState.depthCompare}set depthCompare(e){this.shaderState.depthCompare!=e&&(this._stateChange=!0),this.shaderState.depthCompare=e}static createShader(e,t){return e=new cs(e,t),Gt.renderShader.set(e.instanceID,e),e.instanceID}static destroyShader(e){Gt.renderShader.has(e)&&(Gt.renderShader.get(e).destroy(),Gt.renderShader.delete(e))}static getShader(e){return Gt.renderShader.get(e)}setPassShader(e,t){this._passShaderCache.set(e,t)}getPassShader(e){return this._passShaderCache.get(e)}setShaderEntry(e="",t=""){this.vsEntryPoint=e,this.fsEntryPoint=t}setTexture(e,t){t&&this.textures[e]!=t&&(this.textures[e]&&this.textures[e].unBindStateChange(this),this._textureChange=!0,(this.textures[e]=t).bindStateChange(()=>{this._textureChange=!0},this))}getTexture(e){return this.textures[e]}genRenderPipeline(e,t){var i=this.createGroupLayouts();this.createPipeline(e,t,i)}reBuild(e,t){this.compileShader(zt.vertex,this._destVS,t),this.compileShader(zt.fragment,this._destFS,t),this.genRenderPipeline(e,t)}apply(e,t,i,s){this.materialDataUniformBuffer.apply(),this._textureChange&&this._textureGroup!=-1&&(this._textureChange=!1,this.genGroups(this._textureGroup,this.shaderReflection.groups,!0)),this._stateChange&&(this._shaderChange&&(this.preCompile(e),this._shaderChange=!1),this.reBuild(e,i),this._stateChange=!1,s)&&s()}preCompile(e){this.preDefine(e),this.preCompileShader(zt.vertex,this._sourceVS.concat()),this.preCompileShader(zt.fragment,this._sourceFS.concat()),this.genReflection()}applyPostDefine(e,t){return T.setting.pick.mode=="pixel"&&(this.defineValue.USE_WORLDPOS=!0),1<t.outAttachments.length?(this.defineValue.USE_WORLDPOS=!0,this.defineValue.USEGBUFFER=!0):(this.defineValue.USE_WORLDPOS=!1,this.defineValue.USEGBUFFER=!1),T.setting.material.materialChannelDebug&&(this.defineValue.USE_DEBUG=!0),this.shaderState.useLight?this.defineValue.USE_LIGHT=!0:this.defineValue.USE_LIGHT=!1,yt.parse(e,this.defineValue)}setBindGroup(e,t){this.bindGroups[e]=t}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new de(0,0,1,1)),this.setUniformVector4("transformUV2",new de(0,0,1,1)),this.setUniformColor("baseColor",new y),this.setUniformColor("emissiveColor",new y(1,1,1)),this.setUniformVector4("materialF0",new de(.04,.04,.04,1)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",0),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new y(1,1,1)),this.setUniformFloat("clearcoatWeight",0)}destroy(){this.bindGroups.length=0,this._passShaderCache.clear(),this.shaderState=null,this.textures=null,this.pipeline=null,this.bindGroupLayouts=null,this._sourceVS=null,this._sourceFS=null,this._destVS=null,this._destFS=null,this._vsShaderModule=null,this._fsShaderModule=null,this.materialDataUniformBuffer.destroy(),this.materialDataUniformBuffer=null}checkBuffer(e,t){}preCompileShader(e,t,i){let s=t;var a;s.indexOf("version ")!=-1&&(t=en.convertGLSL(s),s=t.sourceCode);for(const n in this.constValues)Object.prototype.hasOwnProperty.call(this.constValues,n)&&(a=this.constValues[n],s=s.replaceAll("&"+n,a.toString()));switch(e){case zt.vertex:this._destVS=s;break;case zt.fragment:this._destFS=s}}compileShader(e,t,i){let s=t,a=(s=this.applyPostDefine(s,i),t);for(var n in this.defineValue)a+=`${n}=${this.defineValue[n]},`;let h=Gt.renderShaderModulePool.get(a);switch(h||(s=this.applyPostDefine(s,i),(h=D.device.createShaderModule({label:e==zt.vertex?this.vsName:this.fsName,code:s})).getCompilationInfo().then(l=>{0<l.messages.length&&(console.log(s),console.log(l))}),Gt.renderShaderModulePool.set(a,h)),e){case zt.vertex:this._vsShaderModule=h,this._destVS=s;break;case zt.fragment:this._fsShaderModule=h,this._destFS=s}}getGroupLayout(e,t){var i=[];for(let f=0;f<t.length;f++){var s=t[f];if(s)if(s.varType=="uniform"){this._bufferDic.has(s.varName)||console.error(`not set ${s.varName} buffer`);var a=this._bufferDic.get(s.varName).visibility,a={binding:s.binding,visibility:a,buffer:{type:"uniform"}};i.push(a)}else if(s.varType=="storage-read"){this._bufferDic.has(s.varName)||console.error(`not set ${s.varName} buffer`);var a=this._bufferDic.get(s.varName).visibility,n={binding:s.binding,visibility:a,buffer:{type:"read-only-storage"}};i.push(n)}else if(s.varType=="var")switch(s.dataType){case"sampler":var h=s.varName.replace("Sampler",""),h=this.textures[h]||T.res.redTexture,h={binding:s.binding,visibility:h.visibility,sampler:h.samplerBindingLayout};i.push(h),this._textureGroup=e;break;case"sampler_comparison":var h=s.varName.replace("Sampler",""),l=this.textures[h]||T.res.redTexture,l={binding:s.binding,visibility:l.visibility,sampler:l.sampler_comparisonBindingLayout};i.push(l),this._textureGroup=e;break;case"texture_2d<f32>":case"texture_2d_array<f32>":case"texture_cube<f32>":case"texture_depth_2d":case"texture_depth_2d_array":case"texture_depth_cube":case"texture_depth_cube_array":var l=this.textures[s.varName]||T.res.redTexture,u={binding:s.binding,visibility:l.visibility,texture:l.textureBindingLayout};i.push(u),this._textureGroup=e;break;case"texture_external":var u=this.textures[s.varName]||T.res.redTexture,c={binding:s.binding,visibility:u.visibility,externalTexture:{}};i.push(c),this._textureGroup=e;break;default:var c=this.textures[s.varName]||T.res.redTexture,d={binding:s.binding,visibility:c.visibility,texture:c.textureBindingLayout};i.push(d),this._textureGroup=e}else console.error("bind group can't empty")}return i}genGroups(e,t,i=!1){if(!this.bindGroups[e]||i){var s=t[e],a=[];for(let m=0;m<s.length;m++){var n=s[m];if(n){if(n.varType=="uniform"){var h=this._bufferDic.get(n.varName);if(h){if(h.bufferType==Er.MaterialDataUniformGPUBuffer){var l=[];for(let _=0;_<n.dataFields.length;_++){var u=n.dataFields[_];this.uniforms[u.name]||console.error(`shader-${this.vsName}:${this.fsName} ${u.name}is empty`),l.push(this.uniforms[u.name])}this.materialDataUniformBuffer.initDataUniform(l)}var c={binding:n.binding,resource:{buffer:h.buffer,offset:0,size:h.memory.shareDataBuffer.byteLength}};a.push(c),this.checkBuffer(n.varName,h)}else console.error(`shader${this.vsName}-`+this.fsName,`buffer ${n.varName} is missing!`)}else if(n.varType=="storage-read")c=this._bufferDic.get(n.varName),c?(h={binding:n.binding,resource:{buffer:c.buffer,offset:0,size:c.memory.shareDataBuffer.byteLength}},a.push(h),this.checkBuffer(n.varName,c)):console.error(`buffer ${n.varName} is missing!`);else if(n.varType=="var")if(n.dataType=="sampler"){let _=n.varName.replace("Sampler",""),g=this.textures[_];g||(g=T.res.blackTexture,this.setTexture(_,g)),g?(d={binding:n.binding,resource:g.gpuSampler},a.push(d)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${n.varName} is missing! `)}else if(n.dataType=="sampler_comparison"){var d=n.varName.replace("Sampler",""),f=this.textures[d];f?(f={binding:n.binding,resource:f.gpuSampler_comparison},a.push(f)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${n.varName} is missing! `)}else{let _=this.textures[n.varName];_||(_=T.res.whiteTexture,this.setTexture(n.varName,_)),_?(f={binding:n.binding,resource:_.getGPUView()},a.push(f)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${n.varName} is missing! `)}}}i=D.device.createBindGroup({layout:this.bindGroupLayouts[e],entries:a}),this.bindGroups[e]=i}}createPipeline(e,t,n){var s=this.shaderState,a=t.outAttachments,n=(t.outColor!=-1&&(a[t.outColor].blend=pl.getBlend(s.blendMode)),{label:this.vsName+"|"+this.fsName,layout:n,primitive:{topology:s.topology,cullMode:s.cullMode,frontFace:s.frontFace},vertex:void 0});this.vsEntryPoint!=""&&(n.vertex={module:this._vsShaderModule,entryPoint:this.vsEntryPoint,buffers:e.vertexBuffer.vertexBufferLayouts}),this.fsEntryPoint!=""&&(n.fragment={module:this._fsShaderModule,entryPoint:this.fsEntryPoint,targets:a}),0<s.multisample&&(n.multisample={count:s.multisample}),(t.zPreTexture||t.depthTexture)&&(s.blendMode,Le.NONE,T.setting.render.zPrePass&&t.zPreTexture&&s.useZ?n.depthStencil={depthWriteEnabled:s.depthWriteEnabled,depthCompare:s.depthCompare,format:t.zPreTexture.format}:(n.depthStencil={depthWriteEnabled:s.depthWriteEnabled,depthCompare:s.depthCompare,format:t.depthTexture.format},this.useRz)),this.pipeline=P.createPipeline(n)}createGroupLayouts(){this._groupsShaderReflectionVarInfos=[];var e=this.shaderReflection;this.bindGroupLayouts=[wa.getGlobalDataBindGroupLayout()];for(let a=1;a<e.groups.length;a++){var t,i=e.groups[a];i?(t=this.getGroupLayout(a,i),this._groupsShaderReflectionVarInfos[a]=i,i=D.device.createBindGroupLayout({entries:t,label:`vs${this.vsName} fs`+this.fsName}),this.bindGroupLayouts[a]=i):console.error("can't set empty group!",a)}var s=D.device.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts});return this._groupsShaderReflectionVarInfos[0],this._groupsShaderReflectionVarInfos[1]&&this.genGroups(1,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[2]&&this.genGroups(2,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[3]&&this.genGroups(3,this._groupsShaderReflectionVarInfos),s}preDefine(a){var t=a.hasAttribute(ne.joints0),i=a.hasAttribute(ne.a_morphPositions_0),s=a.hasAttribute(ne.TANGENT),a=a.hasAttribute(ne.color),n=this.shaderState.acceptGI,h=this.shaderState.useLight;this.defineValue.USE_SKELETON=t,this.defineValue.USE_MORPHTARGETS=i,this.defineValue.USE_TANGENT=s,this.defineValue.USE_GI=n,this.defineValue.USE_CASTSHADOW=this.shaderState.castShadow,this.defineValue.USE_SHADOWMAPING=this.shaderState.acceptShadow,this.defineValue.USE_LIGHT=h,this.defineValue.USE_VERTXCOLOR=a,this.defineValue.USE_PCF_SHADOW=T.setting.shadow.type=="PCF",this.defineValue.USE_HARD_SHADOW=T.setting.shadow.type=="HARD",this.defineValue.USE_SOFT_SHADOW=T.setting.shadow.type=="SOFT",this.defineValue.USE_IES_PROFILE=pi.use}genReflection(){this.shaderVariant+=Rt.genRenderShaderVariant(this);var e=Rt.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(e=yt.parse(this._destVS,this.defineValue),e=yt.parse(e,this.defineValue),Rt.getShaderReflection2(e,this),e=yt.parse(this._destFS,this.defineValue),e=yt.parse(e,this.defineValue),Rt.getShaderReflection2(e,this),Rt.final(this)),this.shaderState.splitTexture=this.shaderReflection.useSplit}}class $f{constructor(){o(this,"renderPasses"),o(this,"enable",!0),o(this,"renderShader"),o(this,"_shaderID"),o(this,"_sort",3e3),o(this,"_transparent",!1)}get sort(){return this._sort}set sort(e){this._sort=e}get shaderID(){return this._shaderID}set shaderID(e){this._shaderID=e}setShader(e,t){return this._shaderID=cs.createShader(e,t),this.renderShader=this.getShader(),this.renderShader.setDefault(),this.renderShader}getShader(){return cs.getShader(this._shaderID)}get blendMode(){return this.renderShader.blendMode}set blendMode(e){this.renderShader.blendMode=e}get transparent(){return this._transparent}set transparent(e){this._transparent=e}get frontFace(){return this.renderShader.frontFace}set frontFace(e){this.renderShader.frontFace=e}get doubleSide(){return this.renderShader.cullMode==yi.none}set doubleSide(e){this.renderShader.cullMode=e?yi.none:this.renderShader.cullMode}get cullMode(){return this.renderShader.cullMode}set cullMode(e){this.renderShader.cullMode=e||this.renderShader.cullMode}get depthBias(){return this.renderShader.depthBias}set depthBias(e){this.renderShader.depthBias=e}get depthCompare(){return this.renderShader.depthCompare}set depthCompare(e){this.renderShader.depthCompare=e||this.renderShader.depthCompare}destroy(){this.renderShader.destroy(),this.renderShader=null,this.renderPasses.forEach((e,t)=>{for(let i=0;i<e.length;i++)e[i].destroy();e.length=0}),this.renderPasses.clear(),this.renderPasses=null}clone(){return null}debug(){throw new Error("Method not implemented.")}}class ar extends $f{constructor(){super(),o(this,"name"),o(this,"instanceID"),o(this,"isPassMaterial",!1),o(this,"receiveEnv",!0),o(this,"_normalMapYFlip"),this.instanceID=mt(),this.renderPasses=new Map}get shaderState(){return this.renderShader.shaderState}set shaderState(e){this.renderShader.shaderState=e}get normalMapYFlip(){return this._normalMapYFlip}set normalMapYFlip(e){(this._normalMapYFlip=e)&&this.renderShader.setDefine("USE_NORMALFILPY",!0)}set shadowMap(e){this.renderShader.setTexture("shadowMap",e)}set envMap(e){this.renderShader.setTexture("envMap",e)}set baseMap(e){this.renderShader.setTexture("baseMap",e),this.notifyPropertyChange("baseMap",e)}get baseMap(){return this.renderShader.textures.baseMap}get normalMap(){return this.renderShader.textures.normalMap}set normalMap(e){this.renderShader.setTexture("normalMap",e),this.notifyPropertyChange("normalMap",e)}get emissiveMap(){return this.renderShader.textures.emissiveMap}get emissiveColor(){return this.renderShader.uniforms.emissiveColor.color}set emissiveColor(e){this.renderShader.setUniformColor("emissiveColor",e),this.notifyPropertyChange("emissiveColor",e)}set emissiveIntensity(e){this.renderShader.setUniformFloat("emissiveIntensity",e),this.notifyPropertyChange("emissiveIntensity",e)}get emissiveIntensity(){return this.renderShader.uniforms.emissiveIntensity.value}set emissiveMap(e){this.renderShader.setTexture("emissiveMap",e),this.notifyPropertyChange("emissiveMap",e)}get envIntensity(){return this.renderShader.uniforms.envIntensity.value}set envIntensity(e){"envIntensity"in this.renderShader.uniforms&&(this.renderShader.uniforms.envIntensity.value=e),this.notifyPropertyChange("envIntensity",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set normalScale(e){"normalScale"in this.renderShader.uniforms&&(this.renderShader.uniforms.envIntensity.value=e),this.notifyPropertyChange("normalScale",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}set alphaCutoff(e){"alphaCutoff"in this.renderShader.uniforms&&((this.renderShader.uniforms.alphaCutoff.value=e)<1&&e!=0?(this.renderShader.setDefine("USE_ALPHACUT",!0),console.log("USE_ALPHACUT")):this.renderShader.setDefine("USE_ALPHACUT",!1),this.notifyPropertyChange("alphaCutoff",e))}get irradianceMap(){return this.renderShader.textures.irradianceMap}set irradianceMap(e){this.renderShader.setTexture("irradianceMap",e),this.notifyPropertyChange("irradianceMap",e)}get irradianceDepthMap(){return this.renderShader.textures.irradianceDepthMap}set irradianceDepthMap(e){this.renderShader.setTexture("irradianceDepthMap",e),this.notifyPropertyChange("irradianceDepthMap",e)}get baseColor(){return this.renderShader.uniforms.baseColor.color}set baseColor(e){this.renderShader.setUniformColor("baseColor",e),this.notifyPropertyChange("baseColor",e)}get uvTransform_1(){return this.renderShader.uniforms.transformUV1.vector4}set uvTransform_1(e){this.renderShader.uniforms.transformUV1.vector4=e,this.notifyPropertyChange("transformUV1",e)}get uvTransform_2(){return this.renderShader.uniforms.transformUV2.vector4}set uvTransform_2(e){this.renderShader.uniforms.transformUV2.vector4=e,this.notifyPropertyChange("uvTransform_2",e)}notifyPropertyChange(e,t){}setDefine(e,t){this.renderShader.setDefine(e,!0)}hasPass(e){return this.renderPasses.has(e)}addPass(e,t,i=-1){return this.renderPasses.has(e)||this.renderPasses.set(e,[]),e=this.renderPasses.get(e),e.indexOf(t)==-1&&(i==-1?e.push(t):e.splice(i,-1,t)),e}removePass(e,t){this.renderPasses.has(e)&&t<(e=this.renderPasses.get(e)).length&&e.splice(t,1)}destroy(){super.destroy()}clone(){return null}}class Zf extends ar{constructor(){super(),o(this,"transparency"),this.isPassMaterial=!0,G.register("castPointShadowMap_vert",kf),G.register("shadowCastMap_frag",fl);var e=this.setShader("castPointShadowMap_vert","shadowCastMap_frag");e.setShaderEntry("main","main"),e.setUniformFloat("cameraFar",5e3),e.setUniformVector3("lightWorldPos",p.ZERO),e.shaderState.receiveEnv=!1}}class Qf extends ar{constructor(){super(),o(this,"transparency"),this.isPassMaterial=!0,G.register("shadowCastMap_vert",Bf),G.register("shadowCastMap_frag",fl);var e=this.setShader("shadowCastMap_vert","shadowCastMap_frag");e.setShaderEntry("main"),e.setUniformFloat("cameraFar",5e3),e.setUniformVector3("lightWorldPos",p.ZERO),e.shaderState.receiveEnv=!1}}let Jf=`
    #include "GlobalUniform"

    struct VertexOutput {
        @location(0) vID: f32 ,
        @location(1) vPos: vec3<f32> ,
        @builtin(position) member: vec4<f32>
    };

    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;

    var<private> worldMatrix: mat4x4<f32>;

    #if USE_MORPHTARGETS
        ${We.getMorphTargetShaderBinding(1,0)}
    #endif

    #if USE_SKELETON
        ${ya.groupBindingAndFunctions(1,0)}
    #endif

    @vertex
    fn main(
        @builtin(instance_index) index : u32,
        @location(0) position: vec3<f32>,
        @location(1) normal: vec3<f32>,
        @location(2) uv: vec2<f32>,
        @location(3) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(4) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(5) joints0: vec4<f32>,
            @location(6) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(7) joints1: vec4<f32>,
                @location(8) weights1: vec4<f32>,
            #endif
        #elseif USE_MORPHTARGETS
            ${We.getMorphTargetAttr(5)}
        #endif
    #elseif USE_SKELETON
        @location(4) joints0: vec4<f32>,
        @location(5) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
            @location(6) joints1: vec4<f32>,
            @location(7) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        ${We.getMorphTargetAttr(4)}
    #endif
    ) -> VertexOutput {
    worldMatrix = models.matrix[index];

    var vertexPosition = position;
    var vertexNormal = normal;
    #if USE_MORPHTARGETS
        ${We.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(joints0, weights0, joints1, weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(joints0, weights0);
        #endif
    #endif

        
        let wPos = worldMatrix * vec4<f32>(vertexPosition.xyz, 1.0);
        var fixProjMat = globalUniform.projMat ;
        // fixProjMat[2].z = -1.0 ;//99999.0 / (99999.0 - 1.0) ;
        // fixProjMat[3].z = 0.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;
        var rzMatrix : mat4x4<f32> ;
        rzMatrix[0] = vec4<f32>(1.0,0.0,0.0,0.0) ; 
        rzMatrix[1] = vec4<f32>(0.0,1.0,0.0,0.0) ; 
        rzMatrix[2] = vec4<f32>(0.0,0.0,1.0,0.0) ; 
        rzMatrix[3] = vec4<f32>(0.0,0.0,0.0,1.0) ; 
        // rzMatrix[2].z = (-globalUniform.near * globalUniform.far) / (globalUniform.far - globalUniform.near) ;
        // rzMatrix[3].z = globalUniform.far / (globalUniform.far - globalUniform.near) ;
        var clipPos:vec4<f32> = fixProjMat * globalUniform.viewMat * rzMatrix * wPos ;
        // clipPos.z = clipPos.z + (clipPos.z / clipPos.w + globalUniform.near / clipPos.w + 0.002 / clipPos.w) * (globalUniform.near / globalUniform.far) ; 
        // clipPos.z = depthToLinear01(clipPos.z / clipPos.w) ; 
        return VertexOutput(f32(index) , wPos.xyz, clipPos);
    }

    fn depthToLinear01(depth:f32) -> f32 {
        let a = 1.0 / (globalUniform.near - globalUniform.far);
        return (globalUniform.near*globalUniform.far*a) / (depth + globalUniform.far * a) ;
    }
`,ep=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    @fragment
    fn main(@location(0) vID: f32, @location(1) vPos:vec3<f32>) -> FragmentOutput {
        var op = vec4<f32>( vPos, vID);
        return FragmentOutput(op);
    }
`;class tp extends ar{constructor(){super(),o(this,"transparency"),this.isPassMaterial=!0,G.register("ZPass_shader_vs",Jf),G.register("ZPass_shader_fs",ep);var e=this.setShader("ZPass_shader_vs","ZPass_shader_fs");e.useRz=!0,e.shaderState.receiveEnv=!1}}class rp extends ar{constructor(){super(),o(this,"transparency"),this.isPassMaterial=!0,G.register("gbuffer_vs",sh),G.register("gbuffer_fs",sh),this.setShader("gbuffer_vs","gbuffer_fs").setShaderEntry("VertMain","FragMain"),this.shaderState.cullMode="none",this.renderShader.setUniformColor("baseColor",new y),this.renderShader.setUniformColor("emissiveColor",new y),this.renderShader.setUniformFloat("emissiveIntensity",1),this.renderShader.setUniformFloat("normalScale",1),this.renderShader.setUniformFloat("alphaCutoff",1),this.blendMode=Le.NONE,this.renderShader.setTexture("normalMap",T.res.normalTexture)}set shadowMap(e){}set envMap(e){}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set alphaCutoff(e){this.renderShader.setUniformFloat("alphaCutoff",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}}class ip extends ar{constructor(){super(),o(this,"transparency"),this.isPassMaterial=!0,G.register("SkyGBuffer_fs",zm);var e=this.setShader("sky_vs_frag_wgsl","SkyGBuffer_fs"),e=(e.setUniformFloat("exposure",1),e.setUniformFloat("roughness",0),this.shaderState);e.frontFace="ccw",e.cullMode=yi.front,e.depthWriteEnabled=!1,e.depthCompare=fs.less}get exposure(){return this.renderShader.uniforms.exposure.value}set exposure(e){this.renderShader.setUniformFloat("exposure",e)}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){this.renderShader.setUniformFloat("roughness",e)}set shadowMap(e){}set envMap(e){}set emissiveIntensity(e){this.renderShader.setUniformFloat("emissiveIntensity",e)}get emissiveIntensity(){return this.renderShader.uniforms.emissiveIntensity.value}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set alphaCutoff(e){this.renderShader.setUniformFloat("alphaCutoff",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}}var we=(r=>(r[r.COLOR=1]="COLOR",r[r.NORMAL=2]="NORMAL",r[r.POSITION=4]="POSITION",r[r.GRAPHIC=8]="GRAPHIC",r[r.GI=16]="GI",r[r.Cluster=32]="Cluster",r[r.SHADOW=64]="SHADOW",r[r.POINT_SHADOW=128]="POINT_SHADOW",r[r.POST=256]="POST",r[r.DEPTH=512]="DEPTH",r[r.REFLECTION=1024]="REFLECTION",r))(we||{});class ge{}o(ge,"GLTF_NODE_INDEX_PROPERTY"),o(ge,"BASE_COLOR_UNIFORM","u_baseColorFactor"),o(ge,"BASE_COLOR_TEXTURE_UNIFORM","u_baseColorSampler"),o(ge,"METALROUGHNESS_UNIFORM","u_metallicRoughnessValues"),o(ge,"METALROUGHNESS_TEXTURE_UNIFORM","u_metallicRoughnessSampler"),o(ge,"NORMAL_TEXTURE_UNIFORM","u_normalSampler"),o(ge,"NORMAL_SCALE_UNIFORM","u_normalScale"),o(ge,"EMISSIVE_TEXTURE_UNIFORM","u_emissiveSampler"),o(ge,"EMISSIVE_FACTOR_UNIFORM","u_emissiveFactor"),o(ge,"OCCLUSION_TEXTURE_UNIFORM","u_occlusionSampler"),o(ge,"OCCLUSION_FACTOR_UNIFORM","u_occlusionFactor"),o(ge,"MAX_MORPH_TARGETS",8),o(ge,"MORPH_POSITION_PREFIX","a_morphPositions_"),o(ge,"MORPH_NORMAL_PREFIX","a_morphNormals_"),o(ge,"MORPH_TANGENT_PREFIX","a_morphTangents_"),o(ge,"MORPH_WEIGHT_UNIFORM","u_morphWeights"),o(ge,"SCENE_ROOT_SKELETON","SCENE_ROOT"),o(ge,"IDENTITY_INVERSE_BIND_MATRICES","IDENTITY_IBM"),o(ge,"JOINT_MATRICES_UNIFORM","u_jointMatrix"),o(ge,"ALPHA_CUTOFF_UNIFORM","u_alphaCutoff");class Cs{static createGIPass(e,t){var i,s,a;tr.hasMask(e.rendererMask,ot.Sky)?((i=new ip).baseMap=t.baseMap,s=t,(a=i.getShader()).shaderState.cullMode=s.getShader().cullMode,a.shaderState.frontFace=s.getShader().frontFace,t.addPass(we.GI,i,0),i.renderShader.preCompile(e.geometry)):this.castGBufferPass(e,t)}static castGBufferPass(e,t){for(let h=0;h<e.materials.length;h++){var i,s,a,n=e.materials[h];let l=n.renderShader.getPassShader(we.GI);l||(i=(l=new rp).renderShader,l.baseColor=n.baseColor,l.baseMap=n.baseMap,l.normalMap=n.normalMap,l.envIntensity=n.envIntensity,l.emissiveMap=n.emissiveMap,l.emissiveColor=n.emissiveColor,l.emissiveIntensity=n.emissiveIntensity,l.alphaCutoff=n.alphaCutoff,s=e.materials[0],(a=l.getShader()).shaderState.cullMode=s.getShader().cullMode,a.shaderState.frontFace=s.getShader().frontFace,i.preCompile(e.geometry),n.renderShader.setPassShader(we.GI,l)),t.addPass(we.GI,l,h)}}static createShadowPass(e,t){let i=tr.hasMask(e.rendererMask,ot.SkinnedMesh),s=e.geometry.hasAttribute("TANGENT"),a=e.geometry.hasAttribute(ge.MORPH_POSITION_PREFIX+"0"),n=e.geometry.hasAttribute(ge.MORPH_NORMAL_PREFIX+"0"),h=t.renderShader.getPassShader(we.SHADOW);if(!h){(h=new Qf).baseMap=e.materials[0].baseMap,h.alphaCutoff=e.materials[0].alphaCutoff,h.setDefine("USE_ALPHACUT",e.materials[0].alphaCutoff<1);for(let d=0;d<1;d++){var l=h.renderShader;s&&l.setDefine("USE_TANGENT",s),i&&l.setDefine("USE_SKELETON",i),a&&l.setDefine("USE_MORPHTARGETS",a),n&&l.setDefine("USE_MORPHNORMALS",n),l.shaderState.cullMode="front",l.preCompile(e.geometry)}t.renderShader.setPassShader(we.SHADOW,h)}t.addPass(we.SHADOW,h,0);let u=t.renderShader.getPassShader(we.POINT_SHADOW);if(!u){(u=new Zf).baseMap=e.materials[0].baseMap,u.alphaCutoff=e.materials[0].alphaCutoff,u.setDefine("USE_ALPHACUT",e.materials[0].alphaCutoff<1);for(let d=0;d<1;d++){var c=u.renderShader;s&&c.setDefine("USE_TANGENT",s),i&&c.setDefine("USE_SKELETON",i),a&&c.setDefine("USE_MORPHTARGETS",a),n&&c.setDefine("USE_MORPHNORMALS",n),c.shaderState.cullMode="front",c.preCompile(e.geometry)}t.renderShader.setPassShader(we.POINT_SHADOW,u)}t.addPass(we.POINT_SHADOW,u,0)}static createReflectionPass(e,t){}static createDepthPass(e,t){var i=t.renderShader.getPassShader(we.DEPTH);if(!i){var s=new tp,a=e.materials[0],n=(s.baseMap=a.baseMap,e.geometry.hasAttribute("TANGENT")),h=e.geometry.hasAttribute(ge.MORPH_POSITION_PREFIX+"0"),l=e.geometry.hasAttribute(ge.MORPH_NORMAL_PREFIX+"0"),u=tr.hasMask(e.rendererMask,ot.SkinnedMesh),c=s.getShader();c.shaderState.cullMode=a.getShader().cullMode,c.shaderState.frontFace=a.getShader().frontFace;for(let f=0;f<1;f++){var d=s.getShader();n||d.setDefine("USE_TANGENT",n),u&&d.setDefine("USE_SKELETON",u),h&&d.setDefine("USE_MORPHTARGETS",h),l&&d.setDefine("USE_MORPHNORMALS",l),d.preCompile(e.geometry)}t.renderShader.setPassShader(we.DEPTH,s)}t.addPass(we.DEPTH,i,0)}}class gl extends Mr{constructor(){super(),o(this,"instanceCount",0),o(this,"lodLevel",0),o(this,"alwaysRender",!1),o(this,"renderOrder",0),o(this,"instanceID"),o(this,"drawType",0),o(this,"_geometry"),o(this,"_materials",[]),o(this,"_castShadow",!0),o(this,"_castReflection",!1),o(this,"_castGI",!1),o(this,"_rendererMask",ot.Default),o(this,"_inRenderer",!1),o(this,"_readyPipeline",!1),o(this,"_combineShaderRefection"),o(this,"_ignoreEnvMap"),o(this,"_ignorePrefilterMap"),this.rendererMask=ot.Default}get geometry(){return this._geometry}set geometry(e){this._geometry=e}addMask(e){this._rendererMask=tr.addMask(this.rendererMask,e)}removeMask(e){this._rendererMask=tr.removeMask(this.rendererMask,e)}hasMask(e){return tr.hasMask(this.rendererMask,e)}get rendererMask(){return this._rendererMask}set rendererMask(e){this._rendererMask=e}get materials(){return this._materials}set materials(e){this._materials=e;let t=!1,i=0;for(let a=0;a<e.length;a++){var s=e[a];s.transparent&&(t=!0,i=i>s.sort?i:s.sort)}this.renderOrder=t?this.renderOrder:i,this._readyPipeline||this.initPipeline()}init(){this.instanceID=mt()}addRendererMask(e){this._rendererMask=tr.addMask(this._rendererMask,e)}removeRendererMask(e){this._rendererMask=tr.removeMask(this._rendererMask,e)}onEnable(){this._readyPipeline||this.initPipeline(),te.instance.addRenderNode(this.transform.scene3D,this)}onDisable(){te.instance.removeRenderNode(this.transform.scene3D,this)}selfCloneMaterials(e){var t=[];for(let s=0,a=this.materials.length;s<a;s++){var i=this.materials[s].clone();t.push(i)}return this.materials=t,this._readyPipeline=!1,this.initPipeline(),this}initPipeline(){if(this._geometry&&0<this._materials.length){for(let n=0;n<this._materials.length;n++){var e=this._materials[n],t=e.addPass(we.COLOR,e);for(let h=0;h<t.length;h++){var i=t[h],i=cs.getShader(i.shaderID);i.shaderReflection||i.preCompile(this._geometry),this._geometry.generate(i.shaderReflection)}this.object3D.bound=this._geometry.bounds}this._readyPipeline=!0;let a=0;for(let n=0;n<this.materials.length;n++){var s=this.materials[n];s.transparent,a=s.transparent?a>s.sort?a:s.sort:Math.max(a-3e3,0),this.castNeedPass(s.getShader())}this.renderOrder=a,this.enable&&this.transform&&this.transform.scene3D&&te.instance.addRenderNode(this.transform.scene3D,this)}}castNeedPass(e){if(this.castGI)for(let n=0;n<this.materials.length;n++){var t=this.materials[n];Cs.createGIPass(this,t)}if(this.castShadow)for(let n=0;n<this.materials.length;n++){var i=this.materials[n];i.shaderState.castShadow&&Cs.createShadowPass(this,i)}if(this.castReflection)for(let n=0;n<this.materials.length;n++){var s=this.materials[n];s.shaderState.castShadow&&Cs.createShadowPass(this,s)}if(!tr.hasMask(this.rendererMask,ot.IgnoreDepthPass)&&T.setting.render.zPrePass&&e.shaderState.useZ)for(let n=0;n<this.materials.length;n++){var a=this.materials[n];Cs.createDepthPass(this,a)}else for(let n=0;n<this.materials.length;n++)this.materials[n].removePass(we.DEPTH,0)}get castShadow(){return this._castShadow}set castShadow(e){this._castShadow=e}get castGI(){return this._castGI}set castGI(e){this._castGI=e}get castReflection(){return this._castReflection}set castReflection(e){this._castReflection=e}renderPass(e,t,i){var s=this;for(let l=0;l<s.materials.length;l++){var a=s.materials[l].renderPasses.get(t);if(a&&a.length!=0){P.bindGeometryBuffer(i.encoder,s._geometry);var n,h=s.transform._worldMatrix;for(let u=0;u<a.length;u++)a&&a.length!=0&&(n=a[u]).enable&&((n=n.renderShader).shaderState.splitTexture&&(i.endRenderPass(),st.WriteSplitColorTexture(s.instanceID),i.beginRenderPass(),P.bindCamera(i.encoder,e.camera),P.bindGeometryBuffer(i.encoder,s._geometry)),P.bindPipeline(i.encoder,n),n=s._geometry.subGeometries[l].lodLevels[s.lodLevel],0<s.instanceCount?P.drawIndexed(i.encoder,n.indexCount,s.instanceCount,n.indexStart,0,0):P.drawIndexed(i.encoder,n.indexCount,1,n.indexStart,0,h.index))}}}renderPass2(e,t,i,s,a,n=0){if(this.enable){this.nodeUpdate(e,t,i,s);for(let d=0;d<this.materials.length;d++){var h=this.materials[d].renderPasses.get(t);if(!h||h.length==0)return;if(h[d].enable){var l=this.object3D.transform._worldMatrix;if(this.drawType==2)for(let f=0;f<h.length;f++){var u=h[f].renderShader;P.bindPipeline(a,u),P.draw(a,6,1,0,l.index)}else{P.bindGeometryBuffer(a,this._geometry);for(let f=0;f<h.length;f++){var c=h[f].renderShader,c=(P.bindPipeline(a,c),this._geometry.subGeometries[d].lodLevels[this.lodLevel]);P.drawIndexed(a,c.indexCount,1,c.indexStart,0,l.index)}}}}}}recordRenderPass2(e,t,i,s,a,n=0){if(this.enable){this.nodeUpdate(e,t,i,s);for(let c=0;c<this.materials.length;c++){var h=this.materials[c].renderPasses.get(t);if(!h||h.length==0)return;var l=this.object3D.transform._worldMatrix;for(let d=0;d<h.length;d++){var u=h[d].renderShader,u=(P.bindPipeline(a,u),this._geometry.subGeometries[c].lodLevels[this.lodLevel]);P.drawIndexed(a,u.indexCount,1,u.indexStart,0,l.index)}}}}noticeShaderChange(){this.enable&&this.onEnable()}nodeUpdate(e,t,i,s){for(let c=0;c<this.materials.length;c++){var a=this.materials[c].renderPasses.get(t);if(a)for(let d=0;d<a.length;d++){var n,h,l=a[d],u=l.renderShader;u.shaderState.splitTexture&&(n=st.CreateSplitTexture(this.instanceID),u.setTexture("splitTexture_Map",n)),this._ignoreEnvMap||u.setTexture("envMap",e.scene.envMap),this._ignorePrefilterMap||u.setTexture("prefilterMap",e.scene.envMap),u.pipeline?u.apply(this._geometry,l,i,()=>this.noticeShaderChange()):(n=T.res.getTexture("BRDFLUT"),u.setTexture("brdflutMap",n),(h=T.getRenderJob(e).shadowMapPassRenderer)&&h.depth2DTextureArray&&u.setTexture("shadowMap",T.getRenderJob(e).shadowMapPassRenderer.depth2DTextureArray),(h=T.getRenderJob(e).pointLightShadowRenderer)&&h.cubeTextureArray&&u.setTexture("pointShadowMap",h.cubeTextureArray),(h=pi.iesTexture)&&u.setTexture("iesTextureArrayMap",h),i.irradianceBuffer&&0<i.irradianceBuffer.length&&(u.setTexture("irradianceMap",i.irradianceBuffer[0]),u.setTexture("irradianceDepthMap",i.irradianceBuffer[1])),(h=St.getLightEntries(e.scene))&&(u.setStorageBuffer("lightBuffer",h.storageGPUBuffer),h.irradianceVolume)&&u.setStructStorageBuffer("irradianceData",h.irradianceVolume.irradianceVolumeBuffer),s&&(u.setStorageBuffer("clustersUniform",s.clustersUniformBuffer),u.setStorageBuffer("lightAssignBuffer",s.lightAssignBuffer),u.setStorageBuffer("assignTable",s.assignTableBuffer),u.setStorageBuffer("clusterBuffer",s.clusterBuffer)),u.apply(this._geometry,l,i))}}}}let sp=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexAttributes {
        @location(0) position: vec4<f32>,
        @location(1) color: vec4<f32>,
    }

    struct VertexOutput {
        @location(0) varying_WPos: vec4<f32>,
        @location(1) varying_Color: vec4<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main( vertex:VertexAttributes ) -> VertexOutput {
        var worldMatrix = models.matrix[u32(vertex.position.w)];
        var worldPos = (worldMatrix * vec4<f32>(vertex.position.xyz, 1.0));
        var viewPosition = ((globalUniform.viewMat) * worldPos);
        var clipPosition = globalUniform.projMat * viewPosition;

        var ORI_VertexOut: VertexOutput; 
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_Color = vertex.color;
        ORI_VertexOut.member = clipPosition;
        return ORI_VertexOut;
    }
`,ap=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        // #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        // #endif
        // #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>
        // #endif
    };

    @fragment
    fn main(  
        @location(0) vWorldPos: vec4<f32>,
        @location(1) varying_Color: vec4<f32>,
    ) -> FragmentOutput {
        var result: FragmentOutput;

        // #if USE_WORLDPOS
            result.worldPos = vWorldPos;
        // #endif

        // #if USEGBUFFER
            // result.worldNormal = vec4<f32>(0.0, 0.0, 0.0, 1.0); 
            result.material = vec4<f32>(0.0, 1.0, 0.0, 0.0);
        // #endif

        result.color = varying_Color;
        return result;
    }
`;class np{constructor(e,t){o(this,"mCount"),o(this,"mBatchSize"),o(this,"mBatchCount"),o(this,"mMinIndexCount"),o(this,"mOffset"),o(this,"mIndexBuffer"),o(this,"mDataBuffer"),o(this,"mBatchBuffers"),o(this,"mVertexShader"),o(this,"mFragmentShader"),o(this,"mRenderPipeline"),o(this,"mRenderPipelineLayout"),o(this,"mVertexBufferLayout"),o(this,"mGPUPrimitiveTopology"),this.mMinIndexCount=e,this.mGPUPrimitiveTopology=t,this.mBatchSize=Math.trunc(65536/this.mMinIndexCount),this.init()}reset(){this.mCount=0,this.mOffset=0,this.mBatchCount=0}addShapeData(e){let t=e.shapeData;for(;0<t.length;){if(this.mOffset>=this.mDataBuffer.length&&this.flush(),this.mOffset+t.length<=this.mDataBuffer.length){this.mDataBuffer.set(t,this.mOffset),this.mOffset+=t.length;break}var i=this.mDataBuffer.length-this.mOffset;this.mDataBuffer.set(t.slice(0,i),this.mOffset),this.mOffset+=i,t=t.slice(i)}}flush(){if(0<this.mOffset){let e;this.mBatchCount<this.mBatchBuffers.length?e=this.mBatchBuffers[this.mBatchCount]:(e=D.device.createBuffer({size:this.mDataBuffer.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.mBatchBuffers.push(e)),D.device.queue.writeBuffer(e,0,this.mDataBuffer,0,this.mOffset),this.mCount+=this.mOffset/8,this.mBatchCount++,this.mOffset=0}}render(e,t){var i=D.device;if(this.mRenderPipeline||(s=e.outAttachments,e.outColor!=-1&&(s[e.outColor].blend=pl.getBlend(Le.NONE)),this.mRenderPipelineLayout=i.createPipelineLayout({bindGroupLayouts:[wa.getGlobalDataBindGroupLayout()]}),i={label:"Graphic3DFixedRenderPipeline",layout:this.mRenderPipelineLayout,vertex:{module:this.mVertexShader,entryPoint:"main",buffers:[this.mVertexBufferLayout]},fragment:{module:this.mFragmentShader,entryPoint:"main",targets:s},primitive:{topology:this.mGPUPrimitiveTopology,cullMode:yi.back,frontFace:"ccw"}},e.depthTexture&&(i.depthStencil={depthWriteEnabled:!0,depthCompare:fs.less_equal,format:e.depthTexture.format}),this.mRenderPipeline=P.createPipeline(i)),this.flush(),0<this.mBatchCount){t.setPipeline(this.mRenderPipeline),t.setIndexBuffer(this.mIndexBuffer,"uint16");var s=this.mCount/this.mMinIndexCount;for(let a=Math.trunc(s/this.mBatchSize)-1;0<=a;a--)t.setVertexBuffer(0,this.mBatchBuffers[a]),t.drawIndexed(this.mMinIndexCount*this.mBatchSize,1,0,0,0);(s%=this.mBatchSize)!=0&&(t.setVertexBuffer(0,this.mBatchBuffers[this.mBatchCount-1]),t.drawIndexed(this.mMinIndexCount*s,1,0,0,0))}}init(){var e=D.device,t=new Uint16Array(4*(Math.trunc(this.mMinIndexCount*this.mBatchSize/4)+1));for(let i=0;i<t.length;i++)t[i]=i;this.mIndexBuffer=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.mIndexBuffer,0,t),this.mVertexBufferLayout={arrayStride:32,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}]},this.mBatchBuffers=[],this.mDataBuffer=new Float32Array(8*t.length),this.mBatchBuffers.push(e.createBuffer({size:this.mDataBuffer.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.mVertexShader=this.createShaderModule("Graphic3DFixedRenderPipeline.vs",yt.parse(sp,{})),this.mFragmentShader=this.createShaderModule("Graphic3DFixedRenderPipeline.fs",yt.parse(ap,{})),this.reset()}createShaderModule(e,t){return e=D.device.createShaderModule({label:e,code:t}),e.getCompilationInfo().then(i=>{0<i.messages.length&&(console.log(t),console.log(i))}),e}}class vr{}o(vr,"ShapeVertexSize",8);class Ko{constructor(e){o(this,"uuid"),o(this,"type"),o(this,"color"),o(this,"count",0),o(this,"shapeData"),o(this,"dirtyData",!1),o(this,"memoryDataIndex",-1),o(this,"transformIndex"),this.transformIndex=e}buildAxis(e=new p(0,0,0),t=10){this.buildLines([e,new p(e.x+t,e.y,e.z)],y.hexRGBColor(y.RED)),this.buildLines([e,new p(e.x,e.y+t,e.z)],y.hexRGBColor(y.GREEN)),this.buildLines([e,new p(e.x,e.y,e.z+t)],y.hexRGBColor(y.BLUE))}buildLines(e,t=y.COLOR_WHITE){if(!(e.length<2))if(e.length==2)this.fillShapeData(e,t);else{var i=new Array(e.length+e.length-2);for(let s=1,a=0;s<e.length;++s)i[a++]=e[s-1],i[a++]=e[s];this.fillShapeData(i,t)}}buildArcLine(e,t,i,s,a=16,n=p.Y_AXIS,h=y.COLOR_WHITE){var l=(s-i)*Ee,u=(i*=Ee,[]);for(let m=0;m<=a;++m){1<m&&u.push(u[u.length-1]);var c=l*(m/a)+i,d=t*Math.cos(c),f=t*Math.sin(c);switch(n){case p.X_AXIS:u.push(e.add(new p(0,d,f)));break;case p.Y_AXIS:u.push(e.add(new p(d,0,f)));break;default:p.Z_AXIS,u.push(e.add(new p(d,f,0)))}}this.fillShapeData(u,h)}buildCircle(e,t,i=32,s=p.Y_AXIS,a=y.COLOR_WHITE){var n=[];for(let c=0;c<=i;++c){var h=2*Math.PI*c/i,l=t*Math.cos(h),u=t*Math.sin(h);switch(s){case p.X_AXIS:n.push(e.add(new p(0,l,u)));break;case p.Y_AXIS:n.push(e.add(new p(l,0,u)));break;default:p.Z_AXIS,n.push(e.add(new p(l,u,0)))}0<c&&n.push(n[n.length-1])}n.push(n[0]),this.fillShapeData(n,a)}fillShapeData(e,t){this.shapeData?this.count+vr.ShapeVertexSize*e.length>=this.shapeData.length&&((i=new Float32Array(this.shapeData.length+vr.ShapeVertexSize*e.length)).set(this.shapeData),this.shapeData=i):this.shapeData=new Float32Array(vr.ShapeVertexSize*e.length);var i,s=this.shapeData;for(let n=0;n<e.length;++n){var a=e[n];s[this.count++]=a.x,s[this.count++]=a.y,s[this.count++]=a.z,s[this.count++]=this.transformIndex,t instanceof y?(s[this.count++]=t.r,s[this.count++]=t.g,s[this.count++]=t.b,s[this.count++]=t.a):(a=t[n],s[this.count++]=a.r,s[this.count++]=a.g,s[this.count++]=a.b,s[this.count++]=a.a)}this.dirtyData=!0}reset(){this.count=0}}class Kn extends gl{constructor(e,t){super(),o(this,"shapes"),o(this,"mDirtyData",!1),o(this,"mMinIndexCount"),o(this,"mGPUPrimitiveTopology"),o(this,"mRenderPipeline"),this.alwaysRender=!0,this.mMinIndexCount=e,this.mGPUPrimitiveTopology=t,this.shapes=new Map,this.addRendererMask(ot.Particle)}fillShapData(e,t,i,s){this.mDirtyData=!0,this.shapes.has(e)?(a=this.shapes.get(e)).shapeData.length<vr.ShapeVertexSize*s.length&&(a.shapeData=new Float32Array(vr.ShapeVertexSize*s.length)):((a=new Ko(this.transform._worldMatrix.index)).type=t,a.color=i,a.shapeData=new Float32Array(vr.ShapeVertexSize*s.length));var a,n=a.shapeData,h=this.transform._worldMatrix.index;for(let u=0,c=0;u<s.length;++u){var l=s[u];n[c++]=l.x,n[c++]=l.y,n[c++]=l.z,n[c++]=h,n[c++]=i.r,n[c++]=i.g,n[c++]=i.b,n[c++]=i.a}this.shapes.set(e,a)}init(){super.init(),this.castGI=!1,this.castShadow=!1,this.mRenderPipeline=new np(this.mMinIndexCount,this.mGPUPrimitiveTopology)}removeShape(e){this.shapes.has(e)&&(this.mDirtyData=!0,this.shapes.delete(e))}initPipeline(){this.object3D.bound=new pt(p.ZERO,p.MAX),this._readyPipeline=!0}nodeUpdate(e,t,i,s){this.mDirtyData&&(this.mRenderPipeline.reset(),this.shapes.forEach((a,n)=>{this.mRenderPipeline.addShapeData(a)}),this.mDirtyData=!1)}renderPass2(e,t,i,s,a,n=0){this.mRenderPipeline.render(i,a)}allocGraphics3DShape(e,t){let i;return this.shapes.has(e)?(i=this.shapes.get(e)).reset():((i=new Ko(t)).uuid=e,i.type="line",i.color=y.COLOR_WHITE,this.shapes.set(i.uuid,i)),this.mDirtyData=!0,i}}class op{constructor(){o(this,"opaqueList",[]),o(this,"transparentList",[]),o(this,"offset",0),o(this,"sky")}clean(){this.opaqueList.length=0,this.transparentList.length=0,this.offset=0}}class Yo{constructor(){o(this,"renderGroup"),this.renderGroup=new Map}collect_add(e){let t="",i="";t+=e.geometry.uuid;for(let n=0;n<e.materials.length;n++){var s=e.materials[n];i+=s.renderShader.shaderVariant}var a=t+i;this.renderGroup.has(a)||this.renderGroup.set(a,{bundleMap:new Map,key:a,renderNodes:[]}),this.renderGroup.get(a).renderNodes.indexOf(e)==-1&&this.renderGroup.get(a).renderNodes.push(e)}}const _l=class{constructor(){o(this,"_sceneLights"),o(this,"_source_opaqueRenderNodes"),o(this,"_source_transparentRenderNodes"),o(this,"_graphics"),o(this,"_op_renderGroup"),o(this,"_tr_renderGroup"),o(this,"state",{giLightingChange:!0}),o(this,"sky"),o(this,"_collectInfo"),this._sceneLights=new Map,this._source_opaqueRenderNodes=new Map,this._source_transparentRenderNodes=new Map,this._graphics=[],this._op_renderGroup=new Map,this._tr_renderGroup=new Map,this._collectInfo=new op}static get instance(){return this._instance||(this._instance=new _l),this._instance}getPashList(r,e){return e.renderOrder<3e3?this._source_opaqueRenderNodes.get(r):3e3<=e.renderOrder?this._source_transparentRenderNodes.get(r):void 0}sortRenderNode(r,e){for(let t=r.length-1;0<t;t--)if(r[t].renderOrder<e.renderOrder)return void r.push(e);r.push(e)}addRenderNode(r,e){var t;r&&(e.hasMask(ot.Sky)?this.sky=e:e instanceof Kn?this._graphics.indexOf(e)==-1&&this._graphics.push(e):Ho.hasMask(e.object3D.renderLayer,ta.None)?(this.removeRenderNode(r,e),e.renderOrder<3e3?(this._source_opaqueRenderNodes.has(r)||this._source_opaqueRenderNodes.set(r,[]),this._source_opaqueRenderNodes.get(r).push(e)):3e3<=e.renderOrder&&(this._source_transparentRenderNodes.has(r)||this._source_transparentRenderNodes.set(r,[]),this._source_transparentRenderNodes.get(r).push(e)),(t=this.getPashList(r,e)).indexOf(e)==-1&&this.sortRenderNode(t,e)):(this.removeRenderNode(r,e),e.renderOrder<3e3?(this._op_renderGroup.has(r)||this._op_renderGroup.set(r,new Yo),this._op_renderGroup.get(r).collect_add(e)):3e3<=e.renderOrder&&(this._tr_renderGroup.has(r)||this._tr_renderGroup.set(r,new Yo),this._tr_renderGroup.get(r).collect_add(e))),e.object3D.renderNode=e)}removeRenderNode(r,e){e.hasMask(ot.Sky)?this.sky=null:Ho.hasMask(e.object3D.renderLayer,ta.None)&&(r=this.getPashList(r,e))&&(e=r.indexOf(e))!=-1&&r.splice(e,1)}addLight(r,e){this._sceneLights.has(r)?this._sceneLights.get(r).indexOf(e)==-1&&this._sceneLights.get(r).push(e):this._sceneLights.set(r,[e])}removeLight(r,e){this._sceneLights.has(r)&&(e=(r=this._sceneLights.get(r)).indexOf(e))!=-1&&r.splice(e,1)}getLights(r){return this._sceneLights.get(r)||[]}getRenderNodes(r){this._collectInfo.clean(),this._collectInfo.sky=this.sky;var e=this._source_opaqueRenderNodes.get(r),e=(e&&(this._collectInfo.opaqueList=e.concat(),this._collectInfo.offset=e.length),this._source_transparentRenderNodes.get(r));return e&&(this._collectInfo.transparentList=e.concat()),this._collectInfo}getOpRenderGroup(r){return this._op_renderGroup.get(r)}getTrRenderGroup(r){return this._tr_renderGroup.get(r)}getGraphicList(){return this._graphics}};let te=_l;o(te,"_instance");class hp{constructor(){o(this,"storageGPUBuffer"),o(this,"irradianceVolume"),o(this,"_lightList",[]),this.storageGPUBuffer=new ir(Js.lightSize*T.setting.light.maxLight,GPUBufferUsage.COPY_SRC),this.irradianceVolume=new Uf;for(let t=0;t<T.setting.light.maxLight;t++){var e=this.storageGPUBuffer.memory.allocation_node(4*Js.lightSize);this._lightList.push(e)}this.storageGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(e){var t=te.instance.getLights(e.scene);for(let s=0;s<t.length;s++){var i=t[s].lightData;this.writeLightBytes(i,this._lightList[s])}this.storageGPUBuffer.apply()}writeLightBytes(e,t){t.offset=0,t.writeFloat(e.index),t.writeInt32(e.lightType),t.writeFloat(e.radius),t.writeFloat(e.linear),t.writeVector3(e.lightPosition),t.writeFloat(e.lightMatrixIndex),t.writeVector3(e.direction),t.writeFloat(e.quadratic),t.writeRGBColor(e.lightColor),t.writeFloat(e.intensity),t.writeFloat(e.innerAngle),t.writeFloat(e.outerAngle),t.writeFloat(e.range),t.writeInt32(e.castShadowIndex),t.writeVector3(e.lightTangent),t.writeFloat(e.iesIndex)}}class lp{constructor(){o(this,"uuid"),o(this,"index"),o(this,"usage"),o(this,"groupBufferSize"),o(this,"matrixBufferDst"),this.uuid=mt(),this.groupBufferSize=0,this.usage=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.cacheWorldMatrix()}cacheWorldMatrix(){this.groupBufferSize=q.maxCount*q.blockBytes,this.matrixBufferDst=new ir(this.groupBufferSize/4),this.matrixBufferDst.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBufferDst.buffer.label=this.groupBufferSize.toString()}writeBuffer(){var e=q.matrixBytes;let t=e.byteLength,i=0;for(;i<t;){var s=Math.min(32e4,t-i);D.device.queue.writeBuffer(this.matrixBufferDst.buffer,i,e.buffer,e.byteOffset+i,s),i+=s}}}class St{static init(){this.modelMatrixBindGroup=new lp,this._cameraBindGroups=new Map,this._lightEntriesMap=new Map}static getCameraGroup(e){let t=this._cameraBindGroups.get(e);return t||(t=new Of(this.modelMatrixBindGroup),this._cameraBindGroups.set(e,t)),e.isShadowCamera?t.setShadowCamera(e):t.setCamera(e),t}static getLightEntries(e){var t;return e||console.log("getLightEntries scene is null"),this._lightEntriesMap.get(e)||(t=new hp,this._lightEntriesMap.set(e,t)),this._lightEntriesMap.get(e)}}o(St,"_cameraBindGroups"),o(St,"_lightEntriesMap"),o(St,"modelMatrixBindGroup");const Wi=class{static bindPipeline(r,e){if(Wi.lastShader!=e){Wi.lastShader=e,Wi.lastPipeline!=e.pipeline&&(Wi.lastPipeline=e.pipeline,r.setPipeline(e.pipeline));for(let i=1;i<e.bindGroups.length;i++){var t=e.bindGroups[i];t&&r.setBindGroup(i,t)}}}static bindCamera(r,e){e=St.getCameraGroup(e),r.setBindGroup(0,e.globalBindGroup)}static bindGeometryBuffer(r,e){if(this.lastGeometry!=e){(this.lastGeometry=e).indicesBuffer&&r.setIndexBuffer(e.indicesBuffer.indicesGPUBuffer.buffer,e.indicesBuffer.indicesFormat);var t=e.vertexBuffer.vertexGPUBuffer,i=e.vertexBuffer.vertexBufferLayouts;for(let a=0;a<i.length;a++){var s=i[a];r.setVertexBuffer(a,t.buffer,s.offset,s.size)}}}static cleanCache(){this.lastGeometry=null,this.lastPipeline=null,this.lastShader=null}static createPipeline(r){return Ht.countStart("GPUContext","pipeline"),D.device.createRenderPipeline(r)}static beginCommandEncoder(){return Ht.countStart("GPUContext","beginCommandEncoder"),this.LastCommand&&D.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=D.device.createCommandEncoder(),this.LastCommand}static endCommandEncoder(r){this.LastCommand==r&&(D.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=null,Ht.countStart("GPUContext","endCommandEncoder"))}static recordBundleEncoder(r){return D.device.createRenderBundleEncoder(r)}static beginRenderPass(r,e){var t;if(this.cleanCache(),this.renderPassCount++,(this.lastRenderPassState=e).renderTargets&&0<e.renderTargets.length)for(let a=0;a<e.renderTargets.length;++a){var i=e.renderTargets[a],s=e.renderPassDescriptor.colorAttachments[a];0<e.multisample&&e.renderTargets.length==1?(s.view=e.multiTexture.createView(),s.resolveTarget=i.getGPUView()):s.view=i.getGPUTexture().createView()}else(t=e.renderPassDescriptor.colorAttachments[0])&&(0<e.multisample?(t.view=e.multiTexture.createView(),t.resolveTarget=D.context.getCurrentTexture().createView()):t.view=D.context.getCurrentTexture().createView());return r.beginRenderPass(e.renderPassDescriptor)}static drawIndexed(r,e,t,i,s,a){r.drawIndexed(e,t,i,s,a),this.drawCount++}static draw(r,e,t,i,s){r.draw(e,t,i,s),this.drawCount++}static endPass(r){r.insertDebugMarker("end"),r.end()}static computeCommand(r,e){var t=r.beginComputePass();for(let i=0;i<e.length;i++)e[i].compute(t);t.end()}};let P=Wi;o(P,"lastGeometry"),o(P,"lastPipeline"),o(P,"lastShader"),o(P,"drawCount",0),o(P,"renderPassCount",0),o(P,"geometryCount",0),o(P,"pipelineCount",0),o(P,"matrixCount",0),o(P,"lastRenderPassState"),o(P,"LastCommand");class jo{constructor(){o(this,"source"),o(this,"input"),o(this,"output")}reset(e){this.input&&this.input.destroy(),this.output&&this.output.destroy(),this.input=this.output=null,this.source=e}apply(e){var t;this.source&&(this.input||(t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.input=new ir(this.source.length,t,this.source),this.input.apply()),this.output||(t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,this.output=new ir(3*e,t),this.output.apply()))}}class up{constructor(){o(this,"enable"),o(this,"morphTargetsRelative"),o(this,"MaxMorphTargetCount",64),o(this,"_computeConfigArray"),o(this,"_computeConfigBuffer"),o(this,"_morphInfluenceArray"),o(this,"_morphInfluenceBuffer"),o(this,"_positionAttrDataGroup"),o(this,"_normalAttrDataGroup"),o(this,"_isInfluenceDirty"),o(this,"_morphTargetCount"),o(this,"_totalVertexCount"),o(this,"_computeShader"),o(this,"_computeShaders"),o(this,"_computeWorkGroupXY",1),o(this,"_collectMorphTargetData"),this._isInfluenceDirty=!0,this.generateGPUBuffer(),this._positionAttrDataGroup=new jo,this._normalAttrDataGroup=new jo}initMorphTarget(e){this._collectMorphTargetData=this.collectMorphTargetList(e),this._computeShader&&this._computeShader.destroy(),e=We.CsMain,this._computeShader=new bi(e),this._collectMorphTargetData.mergedNormal?this._computeShader.setDefine("USE_MORPHNORMALS",!0):this._computeShader.deleteDefine("USE_MORPHNORMALS"),this._computeShaders=[this._computeShader],this._isInfluenceDirty=!0,this._morphTargetCount=this._collectMorphTargetData.mtCount,this._totalVertexCount=this._collectMorphTargetData.vCount,this._morphInfluenceArray.fill(0),this._computeWorkGroupXY=this.calcWorkGroup(this._totalVertexCount),this._positionAttrDataGroup.reset(this._collectMorphTargetData.mergedPos),this._normalAttrDataGroup.reset(this._collectMorphTargetData.mergedNormal)}applyRenderShader(e){this.uploadMorphTargetBuffer(),this.uploadConfigGBuffer(),e.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),e.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&e.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)}computeMorphTarget(e){this.uploadConfigGBuffer(),this.uploadMorphTargetBuffer(),this._computeShader.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),this._computeShader.setStorageBuffer("morphTargetInfluence",this._morphInfluenceBuffer),this._computeShader.setStorageBuffer("morphTargetPositions",this._positionAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&(this._computeShader.setStorageBuffer("morphTargetNormals",this._normalAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)),this._computeShader.workerSizeX=this._computeWorkGroupXY,this._computeShader.workerSizeY=this._computeWorkGroupXY,this._computeShader.workerSizeZ=1,P.computeCommand(e,this._computeShaders)}updateInfluence(e,t){this._isInfluenceDirty=!0,this._morphInfluenceArray[e]=t}collectMorphTargetList(e){var t=this.collectAttribute("a_morphPositions_",e),i=t.length,s=t[0].data.length/3,a=new Float32Array(s*i*3);{let c=0;for(let d=0;d<i;d++){var n=t[d];a.set(n.data,c),c+=n.data.length}}let h=this.collectAttribute("a_morphNormals_",e),l;if(h&&0<h.length){let c=0;l=new Float32Array(s*i*3);for(let d=0;d<i;d++){var u=h[d];l.set(u.data,c),c+=u.data.length}}return{mtCount:i,vCount:s,mergedPos:a,mergedNormal:l}}collectAttribute(e,t){var i=[];for(let a=0;a<this.MaxMorphTargetCount;a++){var s=e+a,s=t.getAttribute(s);if(!s)break;i[a]=s}return i}uploadConfigGBuffer(){if(this._isInfluenceDirty){let e=0;for(let t=0;t<this._morphTargetCount;t++)e+=this._morphInfluenceArray[t];this._morphInfluenceBuffer.setFloat32Array("data",this._morphInfluenceArray),this._morphInfluenceBuffer.apply(),this._computeConfigArray[0]=this.morphTargetsRelative?1:1-e,this._computeConfigArray[1]=this._morphTargetCount,this._computeConfigArray[2]=this._totalVertexCount,this._computeConfigArray[3]=this._computeWorkGroupXY,this._computeConfigBuffer.setFloat32Array("data",this._computeConfigArray),this._computeConfigBuffer.apply(),this._isInfluenceDirty=!1}}calcWorkGroup(e){return e=Math.ceil(Math.sqrt(e)),e=Math.ceil(Math.log2(e)),Math.pow(2,e)}uploadMorphTargetBuffer(){this._positionAttrDataGroup.output||this._positionAttrDataGroup.apply(this._totalVertexCount),this._normalAttrDataGroup.output||this._normalAttrDataGroup.apply(this._totalVertexCount)}generateGPUBuffer(){this._computeConfigArray=new Float32Array(4),this._computeConfigBuffer=new ba(4),this._morphInfluenceArray=new Float32Array(this.MaxMorphTargetCount);var e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this._morphInfluenceBuffer=new ir(this.MaxMorphTargetCount,e)}}class Fe extends gl{constructor(){super(),o(this,"receiveShadow"),o(this,"morphData")}onEnable(){super.onEnable()}onDisable(){super.onDisable()}get geometry(){return this._geometry}set geometry(e){var t=(this._geometry=e).morphTargetDictionary!=null;t&&(this.morphData||(this.morphData=new up),this.morphData.morphTargetsRelative=e.morphTargetsRelative,this.morphData.initMorphTarget(e)),this.morphData&&(this.morphData.enable=t),this.morphData&&this.morphData.enable?this.addRendererMask(ot.MorphTarget):(this.removeRendererMask(ot.MorphTarget),this.onCompute=null),this.object3D.bound=this._geometry.bounds,this._readyPipeline&&this.initPipeline()}get material(){return this._materials[0]}set material(e){this.materials=[e]}setMorphInfluence(e,t){this.morphData&&this.morphData.enable&&0<=(e=this._geometry.morphTargetDictionary[e])&&this.morphData.updateInfluence(e,t)}setMorphInfluenceIndex(e,t){this.morphData&&this.morphData.enable&&0<=e&&this.morphData.updateInfluence(e,t)}onCompute(e,t){this.morphData&&this.morphData.enable&&this.morphData.computeMorphTarget(t)}nodeUpdate(e,t,i,s){if(this.morphData&&this.morphData.enable)for(let h=0;h<this.materials.length;h++){var a=this.materials[h].renderPasses.get(t);if(a)for(let l=0;l<a.length;l++){var n=a[l].renderShader;this.morphData.applyRenderShader(n)}}super.nodeUpdate(e,t,i,s)}cloneTo(e){e=e.addComponent(Fe),e.geometry=this.geometry,e.material=this.material,e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask}drawWireFrame(){this.object3D.transform.worldPosition}}class cp{constructor(){o(this,"label",""),o(this,"customSize",!1),o(this,"zPreTexture",null),o(this,"depthTexture",null),o(this,"outAttachments"),o(this,"outColor",-1),o(this,"renderTargets"),o(this,"rtTextureDescripts"),o(this,"irradianceBuffer"),o(this,"multisample",0),o(this,"multiTexture"),o(this,"depthViewIndex",0),o(this,"depthCleanValue",0),o(this,"isOutTarget",!0),o(this,"camera3D"),o(this,"rtFrame"),o(this,"renderPassDescriptor"),o(this,"renderBundleEncoderDescriptor"),o(this,"depthLoadOp")}getLastRenderTexture(){return this.renderTargets&&0<this.renderTargets.length?this.renderTargets[0]:T.res.redTexture}}const Ki=class{static createRendererPassState(r,e=null){var t=new cp;if(t.label=r.label,t.customSize=r.customSize,t.rtFrame=r,t.zPreTexture=r.zPreTexture,t.depthTexture=r.depthTexture,t.depthViewIndex=r.depthViewIndex,t.isOutTarget=r.isOutTarget,t.depthCleanValue=r.depthCleanValue,t.depthLoadOp=r.depthLoadOp,r&&0<r.attachments.length){t.renderTargets=r.attachments,t.rtTextureDescripts=r.rtDescriptors,t.renderPassDescriptor=Ki.getRenderPassDescriptor(t),t.renderBundleEncoderDescriptor=Ki.getRenderBundleDescriptor(t),t.outAttachments=[];for(let s=0;s<r.attachments.length;s++){var i=r.attachments[s];t.outAttachments[s]={format:i.format},i.name.indexOf(Ne.colorBufferTex_NAME)!=-1&&(t.outColor=s)}}else t.renderPassDescriptor=Ki.getRenderPassDescriptor(t,e),t.renderBundleEncoderDescriptor=Ki.getRenderBundleDescriptor(t),t.outAttachments=[{format:ae.bgra8unorm}],t.outColor=0;return t}static getRenderPassDescriptor(r,e=null){D.device,D.presentationSize;var t,i=[];if(r.renderTargets&&0<r.renderTargets.length){r.renderTargets[0].width,r.renderTargets[0].height;for(let h=0;h<r.renderTargets.length;h++){var s=r.renderTargets[h],a=r.rtTextureDescripts[h];i.push({view:s.getGPUView(),resolveTarget:void 0,loadOp:a.loadOp,clearValue:a.clearValue,storeOp:a.storeOp})}}else r.customSize||(t=D.canvasConfig&&D.canvasConfig.alpha?[1,1,1,0]:[0,0,0,1],r.isOutTarget==1&&i.push({view:void 0,resolveTarget:void 0,loadOp:D.canvasConfig&&D.canvasConfig.alpha||e!=null?"load":"clear",clearValue:t,storeOp:"store"}));let n=null;return n=r.depthTexture||r.zPreTexture?(r.zPreTexture&&(r.depthTexture=r.zPreTexture),{label:r.label+" renderPassDescriptor zPreTexture"+(r.zPreTexture?"load":"clear"),colorAttachments:i,depthStencilAttachment:{view:r.depthTexture.getGPUView(),depthLoadOp:r.zPreTexture?"load":r.depthLoadOp,depthClearValue:r.zPreTexture?1:r.depthCleanValue,depthStoreOp:"store"}}):{colorAttachments:i,label:"renderPassDescriptor not writeDepth"},this.renderPassDescriptorCount++,n}static getRenderBundleDescriptor(r){D.presentationSize;var e=[];if(r.renderTargets&&0<r.renderTargets.length){r.renderTargets[0].width,r.renderTargets[0].height;for(let s=0;s<r.renderTargets.length;s++){var t=r.renderTargets[s];e.push(t.format)}}let i=null;return i=r.depthTexture?{colorFormats:e,depthStencilFormat:r.depthTexture.format}:{colorFormats:e},this.renderPassDescriptorCount++,i}};let Lt=Ki;o(Lt,"bindGroupDescriptorCount",0),o(Lt,"bindTextureDescriptorCount",0),o(Lt,"renderPassDescriptorCount",0),o(Lt,"pipelineDescriptorCount",0);class qo extends Ii{constructor(e){super(),o(this,"node"),this.bufferType=Er.VertexGPUBuffer,this.createVertexBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,e)}createVertexBuffer(e,t){var i=D.device;this.byteSize=t*Float32Array.BYTES_PER_ELEMENT,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),this.node=this.memory.allocation_node(this.byteSize)}}var lr=(r=>(r[r.split=0]="split",r[r.compose=1]="compose",r))(lr||{});class dp{constructor(){o(this,"vertexCount",0),o(this,"vertexGPUBuffer"),o(this,"geometryType",lr.compose),o(this,"_vertexBufferLayouts"),o(this,"_attributeSlotLayouts"),o(this,"_attributeLocation"),this._vertexBufferLayouts=[],this._attributeLocation={},this._attributeSlotLayouts=[]}get vertexBufferLayouts(){return this._vertexBufferLayouts}createVertexBuffer(e,t){switch(this.geometryType){case lr.split:this.createSplitVertexBuffer(e,t);break;case lr.compose:this.createComposeVertexBuffer(e,t)}}createSplitVertexBuffer(e,t){let i=0;for(let n=0;n<t.attributes.length;n++){var s=t.attributes[n];if(s.name!="index"){this._attributeLocation[s.name]=s.location;var a={name:s.name,format:s.format,offset:0,shaderLocation:s.location,stride:fi[s.format]};this._attributeSlotLayouts[s.location]=[a];let h=e.get(s.name);h||(h={attribute:s.name,data:new Float32Array(s.size*this.vertexCount)},e.set(s.name,h)),a=h.data.length/a.stride,this.vertexCount!=0&&this.vertexCount!=a&&console.error(" vertex count not match attribute count"),this.vertexCount=a,this._vertexBufferLayouts[s.location]={name:s.name,arrayStride:4*s.size,stepMode:"vertex",attributes:this._attributeSlotLayouts[s.location],offset:4*i,size:this.vertexCount*s.size*4},i+=this.vertexCount*s.size}}this.vertexGPUBuffer=new qo(i)}createComposeVertexBuffer(e,t){this._attributeSlotLayouts[0]=[];let i=0;for(let n=0;n<t.attributes.length;n++){var s=t.attributes[n];if(s.name!="index"){this._attributeLocation[s.name]=s.location;var a={name:s.name,format:s.format,offset:4*i,shaderLocation:s.location,stride:fi[s.format]};this._attributeSlotLayouts[0][s.location]=a;let h=e.get(s.name);h||(h={attribute:s.name,data:new Float32Array(s.size*this.vertexCount)},e.set(s.name,h)),a=h.data.length/a.stride,this.vertexCount!=0&&this.vertexCount!=a&&console.error(" vertex count not match attribute count"),this.vertexCount=a,i+=s.size}}this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:4*i,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*i*4},this.vertexGPUBuffer=new qo(this.vertexCount*i)}upload(e,t){switch(this.geometryType){case lr.split:var i=this._attributeLocation[e],i=this._vertexBufferLayouts[i];this.vertexGPUBuffer.node.setFloat32Array(i.offset/4,t.data);break;case lr.compose:for(let h=0;h<this.vertexCount;h++){var s=this._attributeSlotLayouts[0][this._attributeLocation[e]];for(let l=0;l<s.stride;l++){var a=t.data[h*s.stride+l],n=h*(this._vertexBufferLayouts[0].arrayStride/4)+s.offset/4+l;this.vertexGPUBuffer.node.setFloat(a,n)}}}this.vertexGPUBuffer.apply()}updateAttributes(e){switch(this.geometryType){case lr.split:for(let s=0;s<this._vertexBufferLayouts.length;s++){var t=this._vertexBufferLayouts[s],i=e.get(t.name);this.vertexGPUBuffer.node.setFloat32Array(t.offset/4,i.data)}break;case lr.compose:for(let s=0;s<this.vertexCount;s++)this._attributeSlotLayouts.forEach(a=>{for(let c=0;c<a.length;c++){var n=a[c],h=e.get(n.name);for(let d=0;d<n.stride;d++){var l=h.data[s*n.stride+d],u=s*(this._vertexBufferLayouts[0].arrayStride/4)+n.offset/4+d;this.vertexGPUBuffer.node.setFloat(l,u)}}})}this.vertexGPUBuffer.apply()}compute(){}}class fp extends Ii{constructor(e){super(),o(this,"indicesNode"),this.bufferType=Er.IndicesGPUBuffer,this.createIndicesBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX|GPUBufferUsage.INDIRECT,e)}createIndicesBuffer(e,t){var i=D.device;this.byteSize=4*t.length,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),t&&(this.indicesNode=this.memory.allocation_node(4*t.length),this.indicesNode.setArrayBuffer(0,t),this.apply())}}class pp{constructor(){o(this,"uuid",""),o(this,"name"),o(this,"indicesGPUBuffer"),o(this,"indicesFormat","uint16"),o(this,"indicesCount",0)}createIndicesBuffer(e){e.data instanceof Uint16Array?this.indicesFormat="uint16":e.data instanceof Uint32Array&&(this.indicesFormat="uint32"),this.indicesCount=e.data.length,this.indicesGPUBuffer=new fp(e.data)}upload(e){this.indicesGPUBuffer.indicesNode.setArrayBuffer(0,e),this.indicesGPUBuffer.apply()}compute(){}}class mp{constructor(){o(this,"lodLevels")}}class ms{constructor(){o(this,"uuid"),o(this,"name"),o(this,"subGeometries",[]),o(this,"morphTargetsRelative"),o(this,"morphTargetDictionary"),o(this,"bounds"),o(this,"_attributeMap"),o(this,"_attributes"),o(this,"_indicesBuffer"),o(this,"_vertexBuffer"),this.uuid=mt(),this._attributeMap=new Map,this._attributes=[],this.bounds=new pt(new p,new p(1,1,1)),this.bounds.min.x=Number.MAX_VALUE,this.bounds.min.y=Number.MAX_VALUE,this.bounds.min.z=Number.MAX_VALUE,this.bounds.max.x=-Number.MAX_VALUE,this.bounds.max.y=-Number.MAX_VALUE,this.bounds.max.z=-Number.MAX_VALUE,this._vertexBuffer=new dp}get indicesBuffer(){return this._indicesBuffer}get vertexBuffer(){return this._vertexBuffer}get vertexAttributes(){return this._attributes}get vertexAttributeMap(){return this._attributeMap}get geometryType(){return this._vertexBuffer.geometryType}set geometryType(e){this._vertexBuffer.geometryType=e}updateBounds(e,t){this.bounds.setFromMinMax(e,t)}addSubGeometry(...e){var t=new mp;t.lodLevels=e,this.subGeometries.push(t)}generate(e){this._indicesBuffer.upload(this.getAttribute(ne.indices).data),this._vertexBuffer.createVertexBuffer(this._attributeMap,e),this._vertexBuffer.updateAttributes(this._attributeMap)}setIndices(e){this._attributeMap.has(ne.indices)||(e={attribute:ne.indices,data:e},this._attributeMap.set(ne.indices,e),this._indicesBuffer=new pp,this._indicesBuffer.createIndicesBuffer(e))}setAttribute(e,t){e==ne.indices?this.setIndices(t):(this._attributeMap.set(e,{attribute:e,data:t}),this._attributes.push(e))}getAttribute(e){return this._attributeMap.get(e)}hasAttribute(e){return this._attributeMap.has(e)}genWireframe(){var e=this.getAttribute("position"),t=this.getAttribute("indices");if(t&&e&&0<t.data.length){var i=e.data,s=[];for(let l=0;l<t.data.length/3;l++){var a=t.data[3*l+0],n=t.data[3*l+1],h=t.data[3*l+2],a=new p(i[3*a+0],i[3*a+1],i[3*a+2]),n=new p(i[3*n+0],i[3*n+1],i[3*n+2]),h=new p(i[3*h+0],i[3*h+1],i[3*h+2]);s.push(a,n),s.push(n,h),s.push(h,a)}return s}return null}compute(){this._indicesBuffer&&this._indicesBuffer.compute(),this._vertexBuffer&&this._vertexBuffer.compute()}isPrimitive(){return!1}}class vl extends ms{constructor(e,t,i=1,s=1,a=p.Y_AXIS){super(),o(this,"width"),o(this,"height"),o(this,"segmentW"),o(this,"segmentH"),o(this,"up"),this.width=e,this.height=t,this.segmentW=i,this.segmentH=s,this.up=a,this.buildGeometry(this.up)}buildGeometry(e){for(var t,i,s,a=this.segmentW+1,n=(this.segmentH,this.bounds=new pt(p.ZERO.clone(),new p(this.width,1,this.height)),d=this.segmentH*this.segmentW*6,(this.segmentW+1)*(this.segmentH+1)),h=new Float32Array(3*n),l=new Float32Array(3*n),u=new Float32Array(2*n),c=new Uint16Array(this.segmentW*this.segmentH*2*3),d=0,f=0,m=0,_=0,g=0;g<=this.segmentH;++g)for(var w=0;w<=this.segmentW;++w){switch(t=(w/this.segmentW-.5)*this.width,i=(g/this.segmentH-.5)*this.height,e){case p.Y_AXIS:h[f++]=t,h[f++]=0,h[f++]=i,l[m++]=0,l[m++]=1,l[m++]=0;break;case p.Z_AXIS:h[f++]=t,h[f++]=-i,h[f++]=0,l[m++]=0,l[m++]=0,l[m++]=-1;break;case p.X_AXIS:h[f++]=0,h[f++]=t,h[f++]=i,l[m++]=1,l[m++]=0,l[m++]=0;break;default:h[f++]=t,h[f++]=0,h[f++]=i,l[m++]=0,l[m++]=1,l[m++]=0}u[_++]=w/this.segmentW,u[_++]=g/this.segmentH,w!=this.segmentW&&g!=this.segmentH&&(c[d++]=(s=w+g*a)+1,c[d++]=s,c[d++]=s+a,c[d++]=s+1,c[d++]=s+a,c[d++]=s+a+1)}this.setIndices(c),this.setAttribute(ne.position,h),this.setAttribute(ne.normal,l),this.setAttribute(ne.uv,u),this.setAttribute(ne.TEXCOORD_1,u),this.addSubGeometry({indexStart:0,indexCount:c.length,vertexStart:0,index:0})}}class Yn extends pe{constructor(l="QuadGlsl_vs",u="QuadGlsl_fs",i,s,a=0,n=!1){super(),o(this,"width",128),o(this,"height",128),o(this,"quadRenderer"),o(this,"material"),o(this,"uniforms"),o(this,"rendererPassState");var h=i?i.attachments:[],l=(G.register("QuadGlsl_vs",Tf),G.register("QuadGlsl_fs",Cf),this.material=new ar,this.material.setShader(l,u),this.material.getShader()),u=(this.material.blendMode=Le.NONE,l.shaderState);u.frontFace="cw",u.depthWriteEnabled=!1,u.depthCompare=fs.always,u.multisample=a,this.uniforms=l.uniforms=s||{color:new er(new y)},this.quadRenderer=this.addComponent(Fe),this.quadRenderer.material=this.material,this.quadRenderer.castGI=!1,this.quadRenderer.castShadow=!1,this.quadRenderer.drawType=n?2:0,this.quadRenderer.geometry=new vl(100,100,1,1),this.quadRenderer.__start(),this.quadRenderer._enable=!0,this.quadRenderer.onEnable(),this.colorTexture=T.res.blackTexture,l.setUniformFloat("x",0),l.setUniformFloat("y",0),l.setUniformFloat("width",100),l.setUniformFloat("height",100),this.rendererPassState=Lt.createRendererPassState(i,"load"),0<u.multisample&&(this.rendererPassState.multisample=u.multisample,this.rendererPassState.multiTexture=D.device.createTexture({size:{width:D.presentationSize[0],height:D.presentationSize[1]},sampleCount:u.multisample,format:0<h.length?h[0].format:D.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}))}set colorTexture(e){this.material.baseMap=e}renderTarget(e,t,a){var s=e.camera,a=P.beginRenderPass(a,t.rendererPassState);P.bindCamera(a,s),t.quadRenderer.nodeUpdate(e,we.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,we.COLOR,t.rendererPassState,null,a),P.endPass(a)}renderToViewQuad(e,t,i,n){var a=e.camera,n=(t.colorTexture=n,P.beginRenderPass(i,t.rendererPassState));P.bindCamera(n,a),t.quadRenderer.nodeUpdate(e,we.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,we.COLOR,t.rendererPassState,null,n),P.endPass(n)}}class Tt extends Zt{constructor(e,t,i=ae.rgba8unorm,s,a,n=1,h=0,l){super(e,t,n),o(this,"resolveTarget");var u=D.device;this.name=mt(),this.usage=a??GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.createTextureDescriptor(e,t,1,i,this.usage,n,h),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,i==ae.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=u.createSampler({})):i==ae.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=D.device.createSampler({}),this.gpuSampler_comparison=D.device.createSampler({compare:"less",label:"sampler_comparison"})):i==ae.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=D.device.createSampler({}),this.gpuSampler_comparison=D.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",0<h&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=qt.clamp_to_edge,this.addressModeV=qt.clamp_to_edge,this.gpuSampler=u.createSampler(this))}create(e,t,i=0){var h=D.device,s=4*e,a=new Float32Array(e*t*4),n=h.createBuffer({size:a.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),h=(h.queue.writeBuffer(n,0,a),P.beginCommandEncoder());h.copyBufferToTexture({buffer:n,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),P.endCommandEncoder(h)}readTextureToImage(){var s=D.device,e=D.windowWidth,t=D.windowHeight,i=new Float32Array(e*t*4),s=s.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});P.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:s},[e,t]),s.getMappedRange(0,i.byteLength)}}class Kt{constructor(){o(this,"storeOp","store"),o(this,"loadOp","clear"),o(this,"clearValue",[0,0,0,0])}}class nr{constructor(e,t,i,s,a=!0){o(this,"label"),o(this,"customSize",!1),o(this,"attachments"),o(this,"rtDescriptors"),o(this,"zPreTexture"),o(this,"depthTexture"),o(this,"depthViewIndex",0),o(this,"depthCleanValue",1),o(this,"depthLoadOp","clear"),o(this,"isOutTarget",!0),this.attachments=e,this.rtDescriptors=t,this.depthTexture=i,this.zPreTexture=s,this.isOutTarget=a}clone2Frame(e){e.attachments.push(...this.attachments.concat());for(let s=0;s<this.rtDescriptors.length;s++){var t=this.rtDescriptors[s],i=new Kt;i.loadOp=t.loadOp,i.storeOp=t.storeOp,i.clearValue=t.clearValue,e.rtDescriptors.push(i)}e.depthTexture=this.depthTexture,e.zPreTexture=this.zPreTexture,e.customSize=this.customSize}clone(){var e=new nr([],[]);return this.clone2Frame(e),e}}const Fs=class{static init(){this.rtTextureMap=new Map,this.rtViewQuad=new Map}static createRTTexture(r,e,t,i,s=!1,a=0){let n=this.rtTextureMap.get(r);return n||((n=r==Ne.colorBufferTex_NAME?new Tt(e,t,i,s,void 0,1,a,!1):new Tt(e,t,i,s,void 0,1,a,!0)).name=r,Fs.rtTextureMap.set(r,n)),n}static createRTTextureArray(r,e,t,i,s=1,a=!1,n=0){let h=this.rtTextureMap.get(r);return h||((h=new Tt(e,t,i,a,void 0,s,n)).name=r,Fs.rtTextureMap.set(r,h)),h}static createViewQuad(r,e,t,i,s,a=0){return i=new nr([i],[new Kt]),e=new Yn(e,t,i,s,a),Fs.rtViewQuad.set(r,e),e}static getTexture(r){return this.rtTextureMap.get(r)}static CreateSplitTexture(r){let e=this.getTexture(Ne.colorBufferTex_NAME),t=this.getTexture(r+"_split");return t=t||this.createRTTexture(r+"_split",e.width,e.height,e.format,!1)}static WriteSplitColorTexture(t){var e=this.getTexture(Ne.colorBufferTex_NAME),t=this.getTexture(t+"_split"),i=P.beginCommandEncoder();i.copyTextureToTexture({texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{width:t.width,height:t.height,depthOrArrayLayers:1}),P.endCommandEncoder(i)}};let st=Fs;o(st,"rtTextureMap"),o(st,"rtViewQuad");class tn{constructor(){o(this,"enable",!0),o(this,"postRenderer"),o(this,"rtViewQuad"),o(this,"virtualTexture"),this.rtViewQuad=new Map,this.virtualTexture=new Map}createRTTexture(e,t,i,s,a=!1,n=0){return t=st.createRTTexture(e,t,i,s,a,n),t.name=e,this.virtualTexture.set(e,t),t}createViewQuad(e,t,i,s,a=0){return t=st.createViewQuad(e,"Quad_vert_wgsl",t,i,s,a),this.rtViewQuad.set(e,t),t}getOutTexture(){let e=P.lastRenderPassState.renderTargets;return 0<e.length?e[0]:st.getTexture(Ne.colorBufferTex_NAME)}autoSetColorTexture(e,t){var i=this.getOutTexture();t.setSamplerTexture(e,i)}compute(e){}onAttach(e){}onDetach(e){}render(e,t){this.compute(e),this.rtViewQuad.forEach((i,s)=>{var a=P.lastRenderPassState.getLastRenderTexture();i.renderToViewQuad(e,i,t,a)})}destroy(){this.postRenderer=null;for(let e=0;e<this.rtViewQuad.size;e++)this.rtViewQuad.values[e].destroy();this.rtViewQuad.clear(),this.rtViewQuad=null;for(let e=0;e<this.virtualTexture.size;e++)this.virtualTexture.values[e].destroy()}}class $o extends tn{constructor(){super();var t=D.presentationSize,e=(st.createRTTexture(Ne.colorBufferTex_NAME,t[0],t[1],ae.rgba16float,!1),G.register("FXAA_Shader",Vm),{u_texel:new er(new Ge(1/t[0],1/t[1])),u_strength:new er(4)}),t=this.createRTTexture("FXAAPost",t[0],t[1],ae.rgba16float);this.createViewQuad("fxaa","FXAA_Shader",t,e)}onAttach(e){T.setting.render.postProcessing.fxaa.enable=!0}onDetach(e){T.setting.render.postProcessing.fxaa.enable=!1}}class gp{constructor(e){o(this,"command"),o(this,"encoder"),o(this,"rendererPassStates"),o(this,"rtFrame"),this.rtFrame=e,this.rendererPassStates=[]}clean(){this.rendererPassStates.length=0,P.cleanCache()}beginContinueRendererPassState(){if(0<this.rendererPassStates.length){var e=this.rtFrame.clone();for(const t of e.rtDescriptors)t.loadOp="load";e.depthLoadOp="load";var e=Lt.createRendererPassState(e);return this.rendererPassStates.push(e),e}return e=Lt.createRendererPassState(this.rtFrame),this.rendererPassStates.push(e),e}get rendererPassState(){return this.rendererPassStates[this.rendererPassStates.length-1]}beginRenderPass(){this.beginContinueRendererPassState(),this.begineNewCommand(),this.beginNewEncoder()}endRenderPass(){this.endEncoder(),this.endCommand()}begineNewCommand(){return this.command=P.beginCommandEncoder(),this.command}endCommand(){P.endCommandEncoder(this.command),this.command=null}beginNewEncoder(){return this.encoder=P.beginRenderPass(this.command,this.rendererPassState),this.encoder}endEncoder(){P.endPass(this.encoder),this.encoder=null}}class Oi extends Li{constructor(){super(),o(this,"rendererPassState"),o(this,"splitRendererPassState"),o(this,"useRenderBundle",!1),o(this,"debugViewQuads"),o(this,"debugTextures"),o(this,"renderContext"),o(this,"_rendererType"),o(this,"_rtFrame"),this.debugTextures=[],this.debugViewQuads=[]}get passType(){return this._rendererType}set passType(e){this._rendererType=e}setRenderStates(e){if(this._rtFrame=e){this.rendererPassState=Lt.createRendererPassState(e);var t=e.clone();t.depthLoadOp="load";for(const i of t.rtDescriptors)i.loadOp="load";this.splitRendererPassState=Lt.createRendererPassState(t)}this.renderContext=new gp(e)}setIrradiance(e,t){this.rendererPassState.irradianceBuffer=[e,t]}beforeCompute(e,t){}lateCompute(e,t){}render(e,t,d,s=!1){P.cleanCache();var a=e.camera,n=e.scene,n=(this.rendererPassState.camera3D=a,te.instance.getRenderNodes(n)),c=this.renderBundleOp(e,n,t),h=s?[]:this.renderBundleTr(e,n,t),l=P.beginCommandEncoder(),u=P.beginRenderPass(l,this.rendererPassState),c=(0<c.length&&u.executeBundles(c),!s&&te.instance.sky&&(P.bindCamera(u,a),te.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,d,u)),this.drawRenderNodes(e,u,l,n.opaqueList,t),P.endPass(u),P.endCommandEncoder(l),P.beginCommandEncoder()),d=P.beginRenderPass(c,this.rendererPassState);0<h.length&&d.executeBundles(h),s||(P.bindCamera(d,a),this.drawRenderNodes(e,d,c,n.transparentList,t)),P.endPass(d),P.endCommandEncoder(c)}nodeUpload(e,t,i){}occlusionRenderNodeTest(e,t,i){return!i||0<i.occlusionRenderNodeTest(e)}renderOp(e,t,i,s,a){}renderTr(e,t,i,s,a){}renderBundleOp(e,t,i,s){var a=te.instance.getOpRenderGroup(e.scene);if(a){let n=[];return a.renderGroup.forEach(h=>{var l;h.bundleMap.has(this._rendererType)?n.push(h.bundleMap.get(this._rendererType)):(l=P.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordRenderBundleNode(e,l,h.renderNodes,s),l=l.finish(),h.bundleMap.set(this._rendererType,l),n.push(l))}),n}return[]}renderBundleTr(e,t,i,s){var a=te.instance.getTrRenderGroup(e.scene);if(a){let n=[];return a.renderGroup.forEach(h=>{var l;h.bundleMap.has(this._rendererType)?n.push(h.bundleMap.get(this._rendererType)):(l=P.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordRenderBundleNode(e,l,h.renderNodes,s),l=l.finish(),h.bundleMap.set(this._rendererType,l),n.push(l))}),n}return[]}recordRenderBundleNode(e,t,i,s){P.bindCamera(t,e.camera),P.bindGeometryBuffer(t,i[0].geometry);for(let n=0;n<i.length;++n){var a=i[n];a.transform.worldMatrix.index,a.transform.enable&&a.recordRenderPass2(e,this._rendererType,this.rendererPassState,s,t)}}drawRenderNodes(e,t,i,s,a,n){P.bindCamera(t,e.camera);for(let l=T.setting.render.drawOpMin;l<Math.min(s.length,T.setting.render.drawOpMax);++l){var h=s[l];a.renderCommitTesting(e.camera,h)&&h.transform.enable&&h.enable&&h.renderPass2(e,this._rendererType,this.rendererPassState,n,t)}}setDebugTexture(e){for(let i=0;i<e.length;i++){let s=e[i],a="Quad_frag_wgsl";switch(s.format){case ae.rgba8sint:case ae.rgba8uint:case ae.rgba8unorm:case ae.rgba16float:case ae.rgba32float:a="Quad_frag_wgsl";break;case ae.depth24plus:case ae.depth32float:a="Quad_depth2d_frag_wgsl",s.textureBindingLayout.viewDimension=="cube"&&(a="Quad_depthCube_frag_wgsl")}var t=new Yn("Quad_vert_wgsl",a,new nr([],[]));this.debugTextures.push(e[i]),this.debugViewQuads.push(t)}}}class _p extends Oi{constructor(){super(),this.passType=we.COLOR}render(e,t,i,s=!1){this.renderContext.clean();var a=e.scene,n=e.camera,h=(this.rendererPassState.camera3D=n,te.instance.getRenderNodes(a)),l=this.renderBundleOp(e,h,t),u=s?[]:this.renderBundleTr(e,h,t),c=(Ht.start("colorPass Renderer"),Ht.start("ColorPass Draw Opaque"),this.renderContext.beginRenderPass(),this.renderContext.command,this.renderContext.encoder),d=(P.bindCamera(c,n),0<l.length&&(te.instance.getOpRenderGroup(a).renderGroup.forEach(_=>{for(let g=0;g<_.renderNodes.length;g++)_.renderNodes[g].transform.updateWorldMatrix()}),c.executeBundles(l)),!s&&te.instance.sky&&(P.bindCamera(c,n),te.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,i,c)),P.bindCamera(c,n),this.drawNodes(e,this.renderContext,h.opaqueList,t,i),this.renderContext.endRenderPass(),Ht.end("ColorPass Draw Opaque"),Ht.start("ColorPass Draw Transparent"),this.renderContext.beginRenderPass(),this.renderContext.command,this.renderContext.encoder),f=(0<u.length&&d.executeBundles(u),s||(P.bindCamera(d,n),this.drawNodes(e,this.renderContext,h.transparentList,t,i)),te.instance.getGraphicList());for(let _=0;_<f.length;_++){var m=f[_];m.transform.worldMatrix.index,m.nodeUpdate(e,this._rendererType,this.splitRendererPassState,i),m.renderPass2(e,this._rendererType,this.splitRendererPassState,i,d)}this.renderContext.endRenderPass(),Ht.end("ColorPass Draw Transparent"),Ht.end("colorPass Renderer")}drawNodes(e,t,i,s,a){for(let h=T.setting.render.drawOpMin;h<Math.min(i.length,T.setting.render.drawOpMax);++h){var n=i[h];n.transform.enable&&n.enable&&(n.nodeUpdate(e,this._rendererType,this.rendererPassState,a),n.renderPass(e,this.passType,this.renderContext))}}occlusionRenderNodeTest(e,t,i){return 0<i.zDepthRenderNodeTest(t)}}const ti=class extends nr{constructor(){super([],[])}crateGBuffer(n,e,t){var i=this.attachments,s=this.rtDescriptors,h=st.createRTTexture(n+Ne.colorBufferTex_NAME,e,t,ae.rgba16float,!1),l=st.createRTTexture(n+Ne.positionBufferTex_NAME,e,t,ae.rgba16float,!1),a=st.createRTTexture(n+Ne.normalBufferTex_NAME,e,t,ae.rgba8unorm,!1),n=st.createRTTexture(n+Ne.materialBufferTex_NAME,e,t,ae.rgba8unorm,!1),h=(i.push(h),i.push(l),i.push(a),i.push(n),new Kt),l=(h.loadOp="clear",new Tt(e,t,"depth24plus",!1));l.name="depthTexture",new Kt().loadOp="load",this.depthTexture=l,s.push(h),s.push(new Kt),s.push(new Kt),s.push(new Kt)}getColorMap(){return this.attachments[0]}getPositionMap(){return this.attachments[1]}getNormalMap(){return this.attachments[2]}getMaterialMap(){return this.attachments[3]}static getGBufferFrame(r){let e;var t;return ti.gBufferMap.has(r)?e=ti.gBufferMap.get(r):(e=new ti,t=D.presentationSize,e.crateGBuffer(r,t[0],t[1]),ti.gBufferMap.set(r,e)),e}clone(){var r=new ti;return this.clone2Frame(r),r}};let Ca=ti;o(Ca,"gBufferMap",new Map);class vp{constructor(){o(this,"frustumCullingList"),o(this,"zVisibleList"),o(this,"_renderList"),this._renderList=new Map}occlusionRenderNodeTest(e){return T.setting.occlusionQuery.enable?this.frustumCullingList?this.frustumCullingList[e]:0:1}zDepthRenderNodeTest(e){return this.zVisibleList?this.zVisibleList[e]:0}update(e,t){let i=this._renderList.get(e);i||(i=new Map,this._renderList.set(e,i)),i.clear();var s=te.instance.getRenderNodes(t);for(let h=0;h<s.opaqueList.length;h++){var a=s.opaqueList[h];let l=0;(l=a.enable&&a.transform.enable&&a.object3D.bound?a.object3D.bound.containsFrustum(a.object3D,e.frustum):l)&&i.set(a,l)}for(let h=0;h<s.transparentList.length;h++){var n=s.transparentList[h];let l=0;(l=n.enable&&n.transform.enable&&n.object3D.bound?n.object3D.bound.containsFrustum(n.object3D,e.frustum):l)&&i.set(n,l)}}renderCommitTesting(e,t){return!!this._renderList.get(e)&&0<this._renderList.get(e).get(t)}}class zs extends Ii{constructor(e,t){super(),this.bufferType=Er.ComputeGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,e,t)}}class xp{constructor(e,t){o(this,"clusterBuffer"),o(this,"lightAssignBuffer"),o(this,"assignTableBuffer"),o(this,"clustersUniformBuffer"),this.clusterBuffer=new zs(2*e*4),this.clustersUniformBuffer=new ba(10),this.clustersUniformBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.lightAssignBuffer=new zs(e*t),this.lightAssignBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.assignTableBuffer=new zs(4*e),this.assignTableBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(e,t,i,s,a,n,h,l,u,c){this.clustersUniformBuffer.setFloat("clusterTileX",s),this.clustersUniformBuffer.setFloat("clusterTileY",a),this.clustersUniformBuffer.setFloat("clusterTileZ",n),this.clustersUniformBuffer.setFloat("numLights",h),this.clustersUniformBuffer.setFloat("maxNumLightsPerCluster",l),this.clustersUniformBuffer.setFloat("near",u),this.clustersUniformBuffer.setFloat("far",c),this.clustersUniformBuffer.setFloat("screenWidth",e),this.clustersUniformBuffer.setFloat("screenHeight",t),this.clustersUniformBuffer.setFloat("clusterPix",i),this.clustersUniformBuffer.apply()}}let yp=`
  #include "GlobalUniform"

        struct ClusterBox{
            minPoint:vec4<f32>,
            maxPoint:vec4<f32>
        }

        struct ClustersUniform{
            clusterTileX:f32,
            clusterTileY:f32,
            clusterTileZ:f32,
            numLights:f32,
            maxNumLightsPerCluster:f32,
            near:f32,
            far:f32,
            screenWidth:f32,
            screenHeight:f32,
        }
     
        @group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
        @group(0) @binding(2) var<storage,read_write> clusterBuffer : array<ClusterBox>;


        var<private> clusterTileX:f32 ;
        var<private> clusterTileY:f32 ;
        var<private> clusterTileZ:f32 ;
        fn convertNDCToView( v4:vec4<f32> ) -> vec4<f32> {
            var v = globalUniform.pvMatrixInv * v4 ;
            v = v / v.w ;
            return v ;
        }

        fn gridToIndex(i:vec3<u32>) -> u32{
            return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
        }

        fn ScreenToView(screen : vec4<f32>) -> vec4<f32> {
            let texCoord = screen.xy / vec2<f32>(clustersUniform.screenWidth, clustersUniform.screenHeight);
            let clip = vec4<f32>(vec2<f32>(texCoord.x, 1.0 - texCoord.y) * 2.0 - vec2<f32>(1.0, 1.0), screen.z, screen.w);
            return convertNDCToView(clip);
          }

        fn LineIntersectionToZPlane( eye:vec3<f32> , ndcPoint :vec3<f32> , z:f32) -> vec3<f32>
        {
            var normal = vec3<f32>(0.0, 0.0, 1.0);
            var dir = ndcPoint - eye;
            var t = (z - dot(normal, eye)) / dot(normal, dir);
            var result = eye + t * dir;
            return result;
        }

        // @compute @workgroup_size(2,2,1)
        @compute @workgroup_size(16,12,1)
        fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
            // let i = local_invocation_id.x ;
            // let j = local_invocation_id.y ;

            let i = local_invocation_id.x ;
            let j = local_invocation_id.y ;
            let k = workgroup_id.x ;

            clusterTileX = clustersUniform.clusterTileX;
            clusterTileY = clustersUniform.clusterTileY;
            clusterTileZ = clustersUniform.clusterTileZ;

            let clusterGrid = vec3<u32>(i,j,k);
            let tileIndex = gridToIndex(clusterGrid);
            let eyePos = vec3<f32>(0.0, 0.0, 0.0);

            let tx = clusterTileX;
            let ty = clusterTileY;
            let tz = clusterTileZ ;
            let near = clustersUniform.near ;
            let far = clustersUniform.far ;

            let titleSize = vec2<f32>( clustersUniform.screenWidth / tx ,  clustersUniform.screenHeight / ty ) ;

            var maxPointSs = vec4<f32>(vec2<f32>(f32(i) + 1.0, f32(j) + 1.0) * titleSize, 0.0, 1.0);
	        var minPointSs = vec4<f32>(vec2<f32>(f32(i) , f32(j)) * titleSize, 0.0, 1.0);

            var maxPointVs = ScreenToView(maxPointSs).xyz;
	        var minPointVs = ScreenToView(minPointSs).xyz;
 
            var tileNear = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, f32(k) / clustersUniform.clusterTileZ);
	        var tileFar = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, (f32(k) + 1.0) / clustersUniform.clusterTileZ);

            var minPointNear = LineIntersectionToZPlane(eyePos, minPointVs, tileNear);
            var minPointFar = LineIntersectionToZPlane(eyePos, minPointVs, tileFar);
            var maxPointNear = LineIntersectionToZPlane(eyePos, maxPointVs, tileNear);
            var maxPointFar = LineIntersectionToZPlane(eyePos, maxPointVs, tileFar);

            var minPointAABB = min(min(minPointNear, minPointFar), min(maxPointNear, maxPointFar));
            var maxPointAABB = max(max(minPointNear, minPointFar), max(maxPointNear, maxPointFar));

            var clusterBox : ClusterBox ;
            clusterBox.minPoint = vec4<f32>(minPointAABB,f32(tileIndex)) ;
            clusterBox.maxPoint = vec4<f32>(maxPointAABB,f32(tileIndex)) ;
            clusterBuffer[tileIndex] = clusterBox;
        }
`,bp=`
#include "GlobalUniform"

struct ClusterBox{
    minPoint:vec4<f32>,
    maxPoint:vec4<f32>
}

struct Light {
    index:f32,
    lightType:i32,
    radius:f32,
    linear:f32,

    position:vec3<f32>,
    lightMatrixIndex:f32,

    direction:vec3<f32>,
    quadratic:f32,

    lightColor:vec3<f32>,
    intensity:f32,

    innerCutOff :f32,
    outerCutOff:f32,
    range :f32,
    castShadow:f32,

    lightTangent:vec3<f32>,
    ies:f32,
};

struct LightIndex
{
    count:f32,
    start:f32,
    empty0:f32,
    empty1:f32,
};

struct ClustersUniform{
    clusterTileX:f32,
    clusterTileY:f32,
    clusterTileZ:f32,
    numLights:f32,
    maxNumLightsPerCluster:f32,
    near:f32,
    far:f32,
    screenWidth:f32,
    screenHeight:f32,
    clusterPix:f32, 
}

struct Uniforms {
    matrix : array<mat4x4<f32>>
};



var<private> clusterTileX:f32 ;
var<private> clusterTileY:f32 ;
var<private> clusterTileZ:f32 ;

@group(0) @binding(1) var<storage, read> models : Uniforms;
@group(0) @binding(2) var<uniform> clustersUniform : ClustersUniform;
@group(0) @binding(3) var<storage,read> clusterBuffer : array<ClusterBox>;
@group(0) @binding(4) var<storage,read> lightBuffer : array<Light>;
@group(0) @binding(5) var<storage,read_write> lightAssignBuffer : array<f32>;
@group(0) @binding(6) var<storage,read_write> assignTable : array<LightIndex>;

fn gridToIndex(i:vec3<u32>) -> u32{
    return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
}

fn GetSqdisPointAABB( pos:vec3<f32>,  clusterIndex:u32 ) -> f32
{
    var sqDistance = 0.0;
    let cluster = clusterBuffer[clusterIndex];
    for (var i = 0u; i < 3u; i+=1u)
    {
        var v = pos[i];
        if (v < cluster.minPoint[i])
        {
            let diff = cluster.minPoint[i] - v;
            sqDistance += diff * diff;
        }

        if (v > cluster.maxPoint[i])
        {
            let diff =  v - cluster.maxPoint[i];
            sqDistance += diff * diff;
        }
    }
    return sqDistance;
}

fn TestSphereAABB( lightIndex:i32 ,  clusterIndex : u32 ) -> bool
{
    let light = lightBuffer[lightIndex];
    let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
    var radius = light.range * 2.0 ;
    let spherePos =  globalUniform.viewMat * vec4<f32>(lightPos.xyz, 1.0) ;
    let sqDistance = GetSqdisPointAABB(spherePos.xyz , clusterIndex);
    return sqDistance <= (radius*radius);
}



@compute @workgroup_size(16,12,1)
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
    clusterTileX = clustersUniform.clusterTileX;
    clusterTileY = clustersUniform.clusterTileY;
    clusterTileZ = clustersUniform.clusterTileZ;
    // cluster ID 
    let i = local_invocation_id.x ;
    let j = local_invocation_id.y ;
    let k = workgroup_id.x ;

    var clusterId_3D = vec3<u32>(i,j,k);
    var clusterId_1D = gridToIndex(clusterId_3D);

    var startIndex = i32(clusterId_1D) * i32(clustersUniform.maxNumLightsPerCluster) ;
    var endIndex = startIndex;

    for(var lightID = 0 ; lightID < i32(clustersUniform.numLights) ; lightID+=1)
    {
        if(!TestSphereAABB(lightID, clusterId_1D)) {
           continue;
        };
        lightAssignBuffer[endIndex] = f32(lightID);
        endIndex += 1 ;
    }

    // workgroupBarrier();

    var idx: LightIndex;
    idx.count = f32(endIndex-startIndex);
    idx.start = f32(startIndex);
    assignTable[clusterId_1D] = idx;
}
`;class wp extends Oi{constructor(e){super(),o(this,"clusterTileX",16),o(this,"clusterTileY",12),o(this,"clusterTileZ",24),o(this,"maxNumLights",128),o(this,"maxNumLightsPerCluster",100),o(this,"clusterPix",1),o(this,"clusterLightingBuffer"),o(this,"_clusterGenerateCompute"),o(this,"_clusterLightingCompute"),o(this,"_createGrid",!1),this.passType=we.Cluster,this.initCompute(e)}initCompute(e){this._clusterGenerateCompute=new bi(yp),this._clusterLightingCompute=new bi(bp);var n=D.presentationSize,a=this.clusterTileX*this.clusterTileY*this.clusterTileZ,t=e.camera,i=t.near,s=t.far,a=(this.clusterLightingBuffer=new xp(a,this.maxNumLightsPerCluster),this.clusterLightingBuffer.update(n[0],n[1],this.clusterPix,this.clusterTileX,this.clusterTileY,this.clusterTileZ,this.maxNumLights,this.maxNumLightsPerCluster,i,s),St.getCameraGroup(t)),n=(this._clusterGenerateCompute.setUniformBuffer("globalUniform",a.uniformGPUBuffer),this._clusterLightingCompute.setUniformBuffer("globalUniform",a.uniformGPUBuffer),this._clusterGenerateCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterGenerateCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),St.getLightEntries(e.scene));this._clusterLightingCompute.setStorageBuffer("models",St.modelMatrixBindGroup.matrixBufferDst),this._clusterLightingCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterLightingCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),this._clusterLightingCompute.setStorageBuffer("lightBuffer",n.storageGPUBuffer),this._clusterLightingCompute.setStorageBuffer("lightAssignBuffer",this.clusterLightingBuffer.lightAssignBuffer),this._clusterLightingCompute.setStorageBuffer("assignTable",this.clusterLightingBuffer.assignTableBuffer),this.debug(e)}render(s,t){var i=s.camera,s=s.scene,i=(i.near,i.far,te.instance.getLights(s)),s=(D.presentationSize,this.clusterLightingBuffer.clustersUniformBuffer.setFloat("numLights",i.length),this.clusterLightingBuffer.clustersUniformBuffer.apply(),this._clusterGenerateCompute.workerSizeX=this.clusterTileZ,this._clusterLightingCompute.workerSizeX=this.clusterTileZ,P.beginCommandEncoder());P.computeCommand(s,[this._clusterGenerateCompute,this._clusterLightingCompute]),P.endCommandEncoder(s)}debug(e){}}class dr{static genMeshBounds(e){var t=this.genMeshMinVector,i=this.genMeshMaxVector,s=this.genMeshVectorList8,h=new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),a=h.clone().mul(-1),n=new pt(p.ZERO,p.ZERO),h=(n.setFromMinMax(h.clone(),a.clone()),e.getComponents(Fe));for(const u of h)if(u&&u.geometry){var l=u.object3D.transform.worldMatrix;t.copy(u.geometry.bounds.min),i.copy(u.geometry.bounds.max),s[0].set(t.x,t.y,t.z),s[1].set(t.x,t.y,i.z),s[2].set(t.x,i.y,t.z),s[3].set(t.x,i.y,i.z),s[4].set(i.x,t.y,t.z),s[5].set(i.x,t.y,i.z),s[6].set(i.x,i.y,t.z),s[7].set(i.x,i.y,i.z);for(const c of s)l.transformPoint(c,c),n.expandByPoint(c)}return n.setFromMinMax(n.min,n.max),n}static initHeap(){this.boxGeo||(this.boxGeo=new Hs),this.sphere||(this.sphere=new ha(1,35,35)),this.mat||(this.mat=new xr)}static get CubeMesh(){return this.initHeap(),this.boxGeo}static get SphereMesh(){return this.initHeap(),this.sphere}static GetCube(){this.initHeap();var e=new pe,t=e.addComponent(Fe);return t.geometry=this.boxGeo,t.material=this.mat.clone(),t.castShadow=!0,e}static GetSingleCube(e,t,i,l,u,n){this.initHeap();var h=new xr,l=(h.baseColor=new y(l,u,n,1),new pe),u=l.addComponent(Fe);return u.castGI=!0,u.geometry=new Hs(e,t,i),u.material=h,l}static GetSingleSphere(e,n,h,s){this.initHeap();var a=new xr,n=(a.baseColor=new y(n,h,s,1),new pe),h=n.addComponent(Fe);return h.castGI=!0,h.geometry=new ha(e,20,20),h.material=a,n}static get Sphere(){this.initHeap();var e=new pe,t=e.addComponent(Fe);return t.geometry=this.sphere,t.material=this.mat,e}static getSinglepCube(e,t=10){this.initHeap();var i=new pe,s=i.addComponent(Fe);return s.castShadow=!1,s.geometry=new Hs(t,t,t),s.material=e,i}}o(dr,"genMeshMinVector",p.ZERO.clone()),o(dr,"genMeshMaxVector",p.ZERO.clone()),o(dr,"genMeshVectorList8",[new p,new p,new p,new p,new p,new p,new p,new p]),o(dr,"boxGeo"),o(dr,"sphere"),o(dr,"mat");class Sp extends Kn{constructor(){super(3,zn.triangle_list)}}class Tp extends Kn{constructor(){super(2,zn.line_list)}}class Cp extends pe{constructor(){super(),o(this,"mLineRender"),o(this,"mFillRender"),this.mLineRender=this.addComponent(Tp),this.mFillRender=this.addComponent(Sp)}drawAxis(e,t=new p(0,0,0),i=10){this.createCustomShape(e).buildAxis(t,i)}drawLines(e,t,i=y.COLOR_WHITE){this.createCustomShape(e).buildLines(t,i)}drawCurve(e,t,i=10,s=.5,a=y.COLOR_WHITE){var n=[],h=new p,l=new p;for(let m=0;m<t.length-1;++m){n.push(t[m]);var u=t[Math.max(m-1,0)],c=t[m],d=t[m+1],f=t[Math.min(m+2,t.length-1)];d.subtract(u,h).multiplyScalar(s/3).add(c,h),c.subtract(f,l).multiplyScalar(s/3).add(d,l),n.push(...this.calculateBezierCurve(c,h,l,d,i))}n.push(t[t.length-1]),this.drawLines(e,n,a)}calculateBezierCurve(e,t,i,s,a){var n=new Array(a);for(let d=0;d<a;++d){var c=(d+1)/(a+1),u=1-c,h=e.mul(u*u*u),l=t.mul(3*c*u*u),u=i.mul(3*c*c*u),c=s.mul(c*c*c);n[d]=h.add(l).add(u).add(c)}return n}drawRect(e,t,i,s,a=y.COLOR_WHITE){this.drawLines(e,[t,new p(t.x+i,t.y,t.z),new p(t.x+i,t.y+s,t.z),new p(t.x,t.y+s,t.z),t],a)}drawCircle(e,t,i,s=32,a=p.Y_AXIS,n=y.COLOR_WHITE){this.createCustomShape(e).buildCircle(t,i,s,a,n)}drawSector(e,t,i,s,a,n=16,h=p.Y_AXIS,l=y.COLOR_WHITE){var u=(a-s)*Ee,c=(s*=Ee,[]);c.push(t);for(let _=0;_<=n;++_){0<_&&c.push(c[c.length-1]);var d=u*(_/n)+s,f=i*Math.cos(d),m=i*Math.sin(d);switch(h){case p.X_AXIS:c.push(t.add(new p(0,f,m)));break;case p.Y_AXIS:c.push(t.add(new p(f,0,m)));break;default:p.Z_AXIS,c.push(t.add(new p(f,m,0)))}}c.push(c[c.length-1]),c.push(t),this.mLineRender.fillShapData(e,"line",l,c)}drawArcLine(e,t,i,s,a,n=16,h=p.Y_AXIS,l=y.COLOR_WHITE){this.mLineRender.allocGraphics3DShape(e,this.transform._worldMatrix.index).buildArcLine(t,i,s,a,n,h,l)}createCustomShape(e,t=this.transform){return this.mLineRender.allocGraphics3DShape(e,t._worldMatrix.index)}drawBox(e,t,i,s=y.COLOR_WHITE){var a=[];a.push(t),a.push(new p(i.x,t.y,t.z)),a.push(a[a.length-1]),a.push(new p(i.x,i.y,t.z)),a.push(a[a.length-1]),a.push(new p(t.x,i.y,t.z)),a.push(a[a.length-1]),a.push(t),a.push(a[a.length-1]),a.push(new p(t.x,t.y,i.z)),a.push(a[a.length-1]),a.push(new p(i.x,t.y,i.z)),a.push(a[a.length-1]),a.push(new p(i.x,i.y,i.z)),a.push(a[a.length-1]),a.push(new p(t.x,i.y,i.z)),a.push(a[a.length-1]),a.push(new p(t.x,t.y,i.z)),a.push(new p(t.x,i.y,t.z)),a.push(new p(t.x,i.y,i.z)),a.push(new p(i.x,i.y,t.z)),a.push(new p(i.x,i.y,i.z)),a.push(new p(i.x,t.y,t.z)),a.push(new p(i.x,t.y,i.z)),this.mLineRender.fillShapData(e,"line",s,a)}drawFillRect(e,t,i,s,a=y.COLOR_WHITE){this.mFillRender.fillShapData(e,"fill",a,[t,new p(t.x+i,t.y,t.z),new p(t.x+i,t.y+s,t.z),new p(t.x+i,t.y+s,t.z),new p(t.x,t.y+s,t.z),t])}drawFillCircle(e,t,i,s=32,a=p.Y_AXIS,n=y.COLOR_WHITE){var h=[];h.push(t);for(let d=0;d<=s;++d){2<=d&&(h.push(t),h.push(h[h.length-2]));var l=2*Math.PI*d/s,u=i*Math.cos(l),c=i*Math.sin(l);switch(a){case p.X_AXIS:h.push(t.add(new p(0,u,c)));break;case p.Y_AXIS:h.push(t.add(new p(u,0,c)));break;default:p.Z_AXIS,h.push(t.add(new p(u,c,0)))}}this.mFillRender.fillShapData(e,"fill",n,h)}drawMeshWireframe(e,t,i,s=y.COLOR_WHITE){t&&this.createCustomShape(e,i||this.transform).fillShapeData(t.genWireframe(),s)}drawFillSector(e,t,i,s,a,n=16,h=p.Y_AXIS,l=y.COLOR_WHITE){var u=(a-s)*Ee,c=(s*=Ee,[]);c.push(t);for(let _=0;_<=n;++_){2<=_&&(c.push(t),c.push(c[c.length-2]));var d=u*(_/n)+s,f=i*Math.cos(d),m=i*Math.sin(d);switch(h){case p.X_AXIS:c.push(t.add(new p(0,f,m)));break;case p.Y_AXIS:c.push(t.add(new p(f,0,m)));break;default:p.Z_AXIS,c.push(t.add(new p(f,m,0)))}}this.mFillRender.fillShapData(e,"fill",l,c)}drawBoundingBox(e,t,i=y.COLOR_WHITE){this.drawBox(e,t.min,t.max,i)}drawCameraFrustum(e,t=y.COLOR_WHITE){var i,s,a,n,h,l,u,c,d,f;e.type==tt.perspective?(s=(l=Math.tan(e.fov/2*Ee))*e.aspect,d=(u=e.transform._worldMatrix).transformVector(new p(-s,-l,1)),f=u.transformVector(new p(-s,l,1)),c=u.transformVector(new p(s,-l,1)),u=u.transformVector(new p(s,l,1)),s=e.far,l=e.near,i=e.transform.worldPosition,n=new p().copyFrom(d).multiplyScalar(s).add(i),h=new p().copyFrom(f).multiplyScalar(s).add(i),a=new p().copyFrom(c).multiplyScalar(s).add(i),s=new p().copyFrom(u).multiplyScalar(s).add(i),d=new p().copyFrom(d).multiplyScalar(l).add(i),f=new p().copyFrom(f).multiplyScalar(l).add(i),c=new p().copyFrom(c).multiplyScalar(l).add(i),u=new p().copyFrom(u).multiplyScalar(l).add(i),(l=this.createCustomShape("CameraFrustum_"+e.object3D.uuid)).buildLines([f,h],t),l.buildLines([d,n],t),l.buildLines([u,s],t),l.buildLines([c,a],t),l.buildLines([h,s,a,n,h],t),l.buildLines([f,u,c,d,f],t)):e.type==tt.ortho&&(e.viewPort,e.viewPort.height,s=(i=e.transform.worldMatrix).transformVector(new p(-.5*e.viewPort.width,.5*e.viewPort.height,e.far)),a=i.transformVector(new p(-.5*e.viewPort.width,-.5*e.viewPort.height,e.far)),n=i.transformVector(new p(.5*e.viewPort.width,.5*e.viewPort.height,e.far)),h=i.transformVector(new p(.5*e.viewPort.width,-.5*e.viewPort.height,e.far)),l=i.transformVector(new p(-.5*e.viewPort.width,.5*e.viewPort.height,e.near)),u=i.transformVector(new p(-.5*e.viewPort.width,-.5*e.viewPort.height,e.near)),c=i.transformVector(new p(.5*e.viewPort.width,.5*e.viewPort.height,e.near)),d=i.transformVector(new p(.5*e.viewPort.width,-.5*e.viewPort.height,e.near)),(f=this.createCustomShape("CameraFrustum_"+e.object3D.uuid)).buildLines([l,s],t),f.buildLines([u,a],t),f.buildLines([c,n],t),f.buildLines([d,h],t),f.buildLines([s,n,h,a,s],t),f.buildLines([l,c,d,u,l],t))}drawObjectBoundingBox(e,t=y.COLOR_WHITE){var i=dr.genMeshBounds(e);this.drawBox("Bounds_"+e.uuid,i.min,i.max,t)}Clear(e){this.mLineRender.shapes.has(e)?this.mLineRender.removeShape(e):this.mFillRender.shapes.has(e)&&this.mFillRender.removeShape(e)}ClearAll(){this.mLineRender.shapes.clear(),this.mFillRender.shapes.clear()}ChangeColor(e,t){var i;if(this.mLineRender.shapes.has(e))i=this.mLineRender.shapes.get(e);else{if(!this.mFillRender.shapes.has(e))return;i=this.mFillRender.shapes.get(e)}var s=i.shapeData;for(let a=0;a<s.length;a+=vr.ShapeVertexSize)s[a+4]=t.r,s[a+5]=t.g,s[a+6]=t.b,s[a+7]=t.a}}class Ep extends pe{constructor(e=.001,t=1e4,i=90,s=!1){super(),o(this,"up_camera"),o(this,"down_camera"),o(this,"left_camera"),o(this,"right_camera"),o(this,"front_camera"),o(this,"back_camera"),this.initCubeCamera(e,t,i,s)}set label(e){this.up_camera.name=e+"up",this.down_camera.name=e+"down",this.left_camera.name=e+"left",this.right_camera.name=e+"right",this.front_camera.name=e+"front",this.back_camera.name=e+"back"}initCubeCamera(e,t,i=90,s=!1){this.up_camera=Mt.createCamera3DObject(this,"up"),this.down_camera=Mt.createCamera3DObject(this,"down"),this.left_camera=Mt.createCamera3DObject(this,"left"),this.right_camera=Mt.createCamera3DObject(this,"right"),this.front_camera=Mt.createCamera3DObject(this,"front"),this.back_camera=Mt.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=s,this.down_camera.isShadowCamera=s,this.left_camera.isShadowCamera=s,this.right_camera.isShadowCamera=s,this.front_camera.isShadowCamera=s,this.back_camera.isShadowCamera=s,this.up_camera.perspective(i,1,e,t),this.up_camera.lookAt(p.ZERO,p.UP,p.DOWN),this.up_camera.object3D.scaleX=-1,this.up_camera.object3D.rotationY=180,this.down_camera.perspective(i,1,e,t),this.down_camera.lookAt(p.ZERO,p.DOWN,p.DOWN),this.down_camera.object3D.scaleX=-1,this.down_camera.object3D.rotationY=180,this.left_camera.perspective(i,1,e,t),this.left_camera.lookAt(p.ZERO,p.LEFT),this.left_camera.object3D.scaleX=-1,this.right_camera.perspective(i,1,e,t),this.right_camera.lookAt(p.ZERO,p.RIGHT),this.right_camera.object3D.scaleX=-1,this.front_camera.perspective(i,1,e,t),this.front_camera.lookAt(p.ZERO,p.FORWARD),this.front_camera.object3D.scaleX=-1,this.back_camera.perspective(i,1,e,t),this.back_camera.lookAt(p.ZERO,p.BACK),this.back_camera.object3D.scaleX=-1,this.up_camera.type=tt.shadow,this.down_camera.type=tt.shadow,this.left_camera.type=tt.shadow,this.right_camera.type=tt.shadow,this.front_camera.type=tt.shadow,this.back_camera.type=tt.shadow}}class xl extends Zt{constructor(e,t,i){super(e,t,i),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=ae.depth32float,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="cube-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:6*this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=D.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"cube-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=D.device.createSampler({minFilter:Qs.linear,magFilter:Qs.linear}),this.gpuSampler_comparison=D.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Mp extends Oi{constructor(){super(),o(this,"shadowPassCount"),o(this,"_forceUpdate",!1),o(this,"_shadowCameraDic"),o(this,"shadowCamera"),o(this,"cubeTextureArray"),o(this,"colorTexture"),o(this,"shadowSize",1024),this.passType=we.POINT_SHADOW,this._shadowCameraDic=new Map,this.cubeTextureArray=new xl(this.shadowSize,this.shadowSize,8),this.colorTexture=new Tt(this.shadowSize,this.shadowSize,ae.bgra8unorm,!1)}getShadowCamera(e,t){let i;if(this._shadowCameraDic.has(t))i=this._shadowCameraDic.get(t);else{var s=new Ep(e.camera.near,e.camera.far,90,!0),a=(s.label=t.name,[]),n=[];for(let u=0;u<6;u++){var h=new Tt(this.shadowSize,this.shadowSize,this.cubeTextureArray.format,!1),l=new nr([this.colorTexture],[new Kt]),l=(h.name="shadowDepthTexture_"+t.name+u+"_face",l.depthTexture=h,l.label="shadowRender",l.customSize=!0,Lt.createRendererPassState(l));n[u]=l,a[u]=h,T.getRenderJob(e).postRenderer.setDebugTexture([h]),T.getRenderJob(e).debug()}i={cubeCamera:s,depthTexture:a,rendererPassState:n},this._shadowCameraDic.set(t,i)}return i}render(e,t){if(T.setting.shadow.enable){this.shadowPassCount=0,e.camera;var i=e.scene,s=te.instance.getRenderNodes(i),a=br.getPointShadowLightWhichScene(i),n=a.length;for(let d=0;d<n;d++){var h=a[d];if(h.lightData.lightType!=Xe.DirectionLight&&-1<h.lightData.castShadowIndex&&(h.needUpdateShadow||this._forceUpdate||ze.frame<5||h.realTimeShadow)){h.needUpdateShadow=!1;var l=this.getShadowCamera(e,h),u=h.transform.worldPosition,c=(l.cubeCamera.x=u.x,l.cubeCamera.y=u.y,l.cubeCamera.z=u.z,l.cubeCamera.transform.updateWorldMatrix(!0),t.update(l.cubeCamera.right_camera,i),this.renderSceneOnce(0,l,e,l.cubeCamera.right_camera,s,t),t.update(l.cubeCamera.left_camera,i),this.renderSceneOnce(1,l,e,l.cubeCamera.left_camera,s,t),t.update(l.cubeCamera.up_camera,i),this.renderSceneOnce(2,l,e,l.cubeCamera.up_camera,s,t),t.update(l.cubeCamera.down_camera,i),this.renderSceneOnce(3,l,e,l.cubeCamera.down_camera,s,t),t.update(l.cubeCamera.front_camera,i),this.renderSceneOnce(4,l,e,l.cubeCamera.front_camera,s,t),t.update(l.cubeCamera.back_camera,i),this.renderSceneOnce(5,l,e,l.cubeCamera.back_camera,s,t),P.beginCommandEncoder());for(let f=0;f<6;f++)c.copyTextureToTexture({texture:l.depthTexture[f].getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.cubeTextureArray.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:6*h.shadowIndex+f}},{width:this.shadowSize,height:this.shadowSize,depthOrArrayLayers:1});P.endCommandEncoder(c)}}this._forceUpdate=!1}}renderSceneOnce(e,t,i,s,a,n){this.rendererPassState=t.rendererPassState[e],t=P.beginCommandEncoder(),e=P.beginRenderPass(t,this.rendererPassState),e.setViewport(0,0,this.shadowSize,this.shadowSize,0,1),e.setScissorRect(0,0,this.shadowSize,this.shadowSize),s.onUpdate(),s.transform.updateWorldMatrix(!0),this.drawShadowRenderNodes(i,s,e,a.opaqueList,n),this.drawShadowRenderNodes(i,s,e,a.transparentList,n),P.endPass(e),P.endCommandEncoder(t)}drawShadowRenderNodes(e,t,i,s,a){P.bindCamera(i,t);for(let f=T.setting.render.drawOpMin;f<Math.min(s.length,T.setting.render.drawOpMax);++f){var n=s[f];if(n.transform.worldMatrix.index,n.transform.enable&&a.renderCommitTesting(t,n)&&n.enable){n.nodeUpdate(e,this._rendererType,this.rendererPassState);for(let m=0;m<n.materials.length;m++){var h=n.materials[m].renderPasses.get(this._rendererType);if(h&&h.length!=0){P.bindGeometryBuffer(i,n.geometry);var l=n.object3D.transform._worldMatrix;for(let _=0;_<h.length;_++){var u=h[_].renderShader,c=(u.setUniformFloat("cameraFar",t.far),u.setUniformVector3("lightWorldPos",t.transform.worldPosition),u.materialDataUniformBuffer.apply(),P.bindPipeline(i,u),n.geometry.subGeometries);for(let g=0;g<c.length;g++){var d=c[g].lodLevels[n.lodLevel];P.drawIndexed(i,d.indexCount,1,d.indexStart,0,l.index)}}}}}}}}class yl extends Zt{constructor(e,t,i=ae.depth32float){super(e,t,4),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=i,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=D.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=D.device.createSampler({}),this.gpuSampler_comparison=D.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Pp extends Oi{constructor(){super(),o(this,"shadowPassCount"),o(this,"depth2DTextureArray"),o(this,"rendererPassStates"),o(this,"_forceUpdate",!1),this.passType=we.SHADOW,this.setShadowMap(T.setting.shadow.shadowSize),T.setting.shadow.debug&&this.debug()}debug(){}setShadowMap(e){this.rendererPassStates=[],this.depth2DTextureArray=new yl(e,e);for(let s=0;s<8;s++){var t=new nr([],[]),i=new Tt(e,e,ae.depth32float,!1),i=(i.name="shadowDepthTexture_"+s,t.depthTexture=i,t.label="shadowRender",t.customSize=!0,t.depthCleanValue=1,Lt.createRendererPassState(t));this.rendererPassStates[s]=i}}render(e,t){if(T.setting.shadow.enable){var i=e.camera,s=e.scene;if(this.shadowPassCount=0,T.setting.shadow.needUpdate&&ze.frame%T.setting.shadow.updateFrameRate==0){i.transform.updateWorldMatrix();var a=br.getDirectShadowLightWhichScene(s);for(let c=0;c<a.length;c++){var n,h,l,u=a[c];u.lightData.lightType==Xe.DirectionLight&&(this.rendererPassState=this.rendererPassStates[u.shadowIndex],(u.castShadow&&u.needUpdateShadow||this._forceUpdate||u.castShadow&&T.setting.shadow.autoUpdate)&&(u.needUpdateShadow=!1,n=ft(T.setting.shadow.shadowFar,i.near,i.far),h=p.HELP_4,(l=p.HELP_5).copy(i.lookTarget),h.copy(u.direction),h.normalize(),p.distance(i.transform.worldPosition,l),h.scaleBy(-n),h.add(l,h),u.shadowCamera.transform.lookAt(h,l),n=T.setting.shadow.shadowBound,h=T.setting.shadow.shadowBound,u.shadowCamera.orthoOffCenter(n/-2,n/2,h/-2,h/2,i.near,i.far),this.renderShadow(e,u.shadowCamera,t)),(l=P.beginCommandEncoder()).copyTextureToTexture({texture:this.rendererPassStates[u.shadowIndex].depthTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.depth2DTextureArray.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:u.shadowIndex}},{width:T.setting.shadow.shadowSize,height:T.setting.shadow.shadowSize,depthOrArrayLayers:1}),P.endCommandEncoder(l))}this._forceUpdate=!1}}}beforeCompute(){}renderShadow(e,t,h){var s=te.instance.getRenderNodes(e.scene),a=P.beginCommandEncoder(),n=P.beginRenderPass(a,this.rendererPassState),h=(t.transform.updateWorldMatrix(),h.update(t,e.scene),P.bindCamera(n,t),this.renderShadowBundleOp(e,t)),l=this.renderShadowBundleTr(e,t);0<h.length&&n.executeBundles(h),this.drawShadowRenderNodes(e,t,n,s.opaqueList),0<l.length&&n.executeBundles(l),this.drawShadowRenderNodes(e,t,n,s.transparentList),P.endPass(n),P.endCommandEncoder(a)}renderShadowBundleOp(e,t){var i=te.instance.getOpRenderGroup(e.scene);if(i){let s=[];return i.renderGroup.forEach(a=>{var n;a.bundleMap.has(this._rendererType)?s.push(a.bundleMap.get(this._rendererType)):(n=P.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordShadowRenderBundleNode(e,t,n,a.renderNodes),n=n.finish(),a.bundleMap.set(this._rendererType,n),s.push(n))}),s}return[]}renderShadowBundleTr(e,t){var i=te.instance.getTrRenderGroup(e.scene);if(i){let s=[];return i.renderGroup.forEach(a=>{var n;a.bundleMap.has(this._rendererType)?s.push(a.bundleMap.get(this._rendererType)):(n=P.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordShadowRenderBundleNode(e,t,n,a.renderNodes),n=n.finish(),a.bundleMap.set(this._rendererType,n),s.push(n))}),s}return[]}recordShadowRenderBundleNode(e,t,i,s,a){P.bindCamera(i,t),P.bindGeometryBuffer(i,s[0].geometry);for(let h=0;h<s.length;++h){var n=s[h];n.transform.worldMatrix.index,n.transform.enable&&n.recordRenderPass2(e,this._rendererType,this.rendererPassState,a,i)}}drawShadowRenderNodes(e,t,i,s,a){P.bindCamera(i,t);for(let h=T.setting.render.drawOpMin;h<Math.min(s.length,T.setting.render.drawOpMax);++h){var n=s[h];n.transform.enable&&n.enable&&n.renderPass2(e,this._rendererType,this.rendererPassState,a,i)}}}class Rp extends Oi{constructor(){super(),o(this,"zBufferTexture"),o(this,"useRenderBundle",!1),o(this,"shadowPassCount"),o(this,"zCullingCompute"),this.passType=we.DEPTH;var e=D.presentationSize,t=(this.zBufferTexture=st.createRTTexture(Ne.zBufferTexture_NAME,Math.floor(+e[0]),Math.floor(+e[1]),ae.rgba16float,!1),new Kt),t=(t.clearValue=[0,0,0,0],t.loadOp="clear",new nr([this.zBufferTexture],[new Kt],st.createRTTexture(Ne.zPreDepthTexture_NAME,Math.floor(e[0]),Math.floor(e[1]),ae.depth32float,!1),null,!0));this.setRenderStates(t)}lateCompute(e,t){}render(e,t){}}class Dp{constructor(){o(this,"map"),o(this,"passRendererList"),this.map=new Map,this.passRendererList=[]}addRenderer(e){this.map.has(e.passType)?console.error("same renderer pass repeat!"):(this.map.set(e.passType,e),e.passType<=8&&this.addPassRenderer(e))}getRenderer(e){return this.map.get(e)}addPassRenderer(e){this.passRendererList.push(e)}getAllRenderer(){return this.map}getAllPassRenderer(){return this.passRendererList}}class Lp extends Oi{constructor(){super(),o(this,"finalQuadView"),o(this,"postList"),this._rendererType=we.POST,this.postList=[],this.initRenderer()}initRenderer(){G.register("FullQuad_vert_wgsl",vf),this.finalQuadView=new Yn("Quad_vert_wgsl","Quad_frag_wgsl",new nr([],[]),null,null,!1)}attachPost(e,t){(t.postRenderer=this).postList.indexOf(t)==-1&&(this.postList.push(t),t.onAttach(e))}detachPost(e,t){var i=this.postList.indexOf(t);return 0<=i&&(this.postList.splice(i,1),t.onDetach(e),t.postRenderer=null),0<=i}render(e){var t=P.beginCommandEncoder();for(let a=0;a<this.postList.length;a++){var i=this.postList[a];i.enable&&i.render(e,t)}var s=P.lastRenderPassState.getLastRenderTexture();this.finalQuadView.renderToViewQuad(e,this.finalQuadView,t,s),this.debugViewQuads.length&&0<=(s=T.setting.render.debugQuad)&&this.debugViewQuads[s].renderToViewQuad(e,this.debugViewQuads[s],t,this.debugTextures[s]),P.endCommandEncoder(t)}}class Ip{constructor(e){o(this,"rendererMap"),o(this,"shadowMapPassRenderer"),o(this,"pointLightShadowRenderer"),o(this,"postRenderer"),o(this,"clusterLightingRender"),o(this,"occlusionSystem"),o(this,"depthPassRenderer"),o(this,"colorPassRenderer"),o(this,"pauseRender",!1),o(this,"pickFire"),o(this,"graphic3D"),o(this,"_view"),this._view=e,this.rendererMap=new Dp,this.occlusionSystem=new vp,this.clusterLightingRender=this.addRenderer(wp,e),this.graphic3D=new Cp,e&&this.graphic3D&&e.scene.addChild(this.graphic3D),T.setting.render.zPrePass&&(this.depthPassRenderer=this.addRenderer(Rp)),this.shadowMapPassRenderer=new Pp,this.pointLightShadowRenderer=new Mp}addRenderer(e,t){let i;return i=t?new e(t):new e,this.rendererMap.addRenderer(i),i}get view(){return this._view}set view(e){this._view=e}start(){}stop(){}pause(){this.pauseRender=!0}resume(){this.pauseRender=!1}enablePost(e){this.postRenderer=this.addRenderer(Lp),this.postRenderer.setRenderStates(e)}addPost(e){return this.postRenderer||this.enablePost(Ca.getGBufferFrame("ColorPassGBuffer")),e instanceof tn&&this.postRenderer.attachPost(this.view,e),e}removePost(e){if(e instanceof tn)this.postRenderer.detachPost(this.view,e);else for(let t=0;t<e.length;t++)this.postRenderer.detachPost(this.view,e[t])}renderFrame(){var e=this._view,t=(this.view.scene.waitUpdate(),St.getLightEntries(e.scene).update(e),this.occlusionSystem.update(e.camera,e.scene),this.clusterLightingRender.render(e,this.occlusionSystem),this.shadowMapPassRenderer&&T.setting.shadow.enable&&this.shadowMapPassRenderer.render(e,this.occlusionSystem),this.pointLightShadowRenderer&&this.pointLightShadowRenderer.render(e,this.occlusionSystem),this.depthPassRenderer&&(this.depthPassRenderer.beforeCompute(e,this.occlusionSystem),this.depthPassRenderer.render(e,this.occlusionSystem),this.depthPassRenderer.lateCompute(e,this.occlusionSystem)),this.rendererMap.getAllPassRenderer());for(let s=0;s<t.length;s++){var i=t[s];i.beforeCompute(e,this.occlusionSystem),i.render(e,this.occlusionSystem,this.clusterLightingRender.clusterLightingBuffer),i.lateCompute(e,this.occlusionSystem)}this.postRenderer&&0<this.postRenderer.postList.length&&this.postRenderer.render(e)}debug(){}}class Zo extends Ip{constructor(e){super(e)}start(){super.start();var e=Ca.getGBufferFrame("ColorPassGBuffer"),t=[],i=new _p;T.setting.render.zPrePass&&(e.zPreTexture=this.depthPassRenderer.rendererPassState.depthTexture),i.setRenderStates(e),this.postRenderer&&this.postRenderer.setDebugTexture(t),this.rendererMap.addRenderer(i),T.setting.render.debug&&this.debug()}debug(){}}class Ap{constructor(){o(this,"_factor"),o(this,"_doubleFactor"),this._factor=1,this._doubleFactor=2}get accelerateInterpolator(){return this._factor}set accelerateInterpolator(e){this._factor=e,this._doubleFactor=2*this._factor}getInterpolation(e){return this._factor==1?e*e:Math.pow(e,this._doubleFactor)}}class Op{constructor(){o(this,"_factor",1)}get decelerateInterpolator(){return this._factor}set decelerateInterpolator(e){this._factor=e}getInterpolation(e){return this._factor==1?1-(1-e)*(1-e):1-Math.pow(1-e,2*this._factor)}}class Up{constructor(){o(this,"_factor",1)}getInterpolation(e){return Math.cos((e+1)*Math.PI)/2+.5}}class Bp{getInterpolation(e){return e}}class kp{getInterpolation(e){return 4.9*e+4.9*e}}class vt{constructor(){}static bounce(e){return e*e*9.8}getInterpolation(e){return(e*=1.1226)<.3535?vt.bounce(e):e<.7408?vt.bounce(e-.54719)+.7:e<.9644?vt.bounce(e-.8526)+.9:vt.bounce(e-1.0435)+.95}getBounceInterpolation(e){return e<.5?vt.bounce(e):vt.bounce(e-1)}geJumpUp(e,t){return t<.5?e*(t/=.5)-vt.bounce(t):t<.8?.3*(e*(t=(t-.5)/(.8-.5))-vt.bounce(t)):t<1?.15*(e*(t=(t-.8)/(1-.8))-vt.bounce(t)):e*t-vt.bounce(t)}}class Np{constructor(){o(this,"_tension"),this._tension=2}get anticipateInterpolator(){return this._tension}set anticipateInterpolator(e){this._tension=e}getInterpolation(e){return e*e*((this._tension+1)*e-this._tension)}}class sa{constructor(){o(this,"_tension"),this._tension=1.5}anticipateOvershootInterpolator(e){this._tension=1.5*e}anticipateOvershootInterpolator2(e,t){this._tension=e*t}getInterpolation(e){return e<.5?.5*sa.a(2*e,this._tension):.5*(sa.o(2*e-2,this._tension)+2)}static a(e,t){return e*e*((t+1)*e-t)}static o(e,t){return e*e*((t+1)*e+t)}}class Fp{constructor(e){o(this,"_cycles"),this._cycles=e}getInterpolation(e){return Math.sin(2*this._cycles*Math.PI*e)}}class zp{constructor(){o(this,"_tension"),this._tension=2}getInterpolation(e){return--e*e*((this._tension+1)*e+this._tension)+1}}var bl=(r=>(r[r.AccelerateInterpolator=0]="AccelerateInterpolator",r[r.DecelerateInterpolator=1]="DecelerateInterpolator",r[r.AccelerateDecelerateInterpolator=2]="AccelerateDecelerateInterpolator",r[r.LinearInterpolator=3]="LinearInterpolator",r[r.BounceInterpolator=4]="BounceInterpolator",r[r.AnticipateInterpolator=5]="AnticipateInterpolator",r[r.AnticipateOvershootInterpolator=6]="AnticipateOvershootInterpolator",r[r.CycleInterpolator=7]="CycleInterpolator",r[r.OvershootInterpolator=8]="OvershootInterpolator",r[r.JumperInterpolator=9]="JumperInterpolator",r))(bl||{});const ri=class{constructor(){o(this,"complete",!1),o(this,"onComplete"),o(this,"onProgress"),o(this,"target"),o(this,"property"),o(this,"targetProperty"),o(this,"durtion"),o(this,"interpolatorEnum"),o(this,"delayTime",0),o(this,"_interpolator"),o(this,"_ct",0),o(this,"_p",0)}static to(r,e,t,i=0){var s=new ri;return s.target=r,s.property=e,s.durtion=t,s.interpolatorEnum=i,s.start(),s.delayTime=e.delayTime||0,e.onComplete&&(s.onComplete=e.onComplete),e.onProgress&&(s.onProgress=e.onProgress),this.interpolators.push(s),s}static tick(r){var e;for(e of ri.interpolators)e.complete?ri.remove(e,!0):e.tick(r)}static remove(r,e){var t=ri.interpolators,i=t.indexOf(r);i!=-1&&t.splice(i,1),e&&r.dispose()}static removeList(r,e){r.forEach(t=>{this.remove(t,e)})}start(){for(var r in window.AccelerateInterpolator=Ap,window.DecelerateInterpolator=Op,window.AccelerateDecelerateInterpolator=Up,window.LinearInterpolator=Bp,window.BounceInterpolator=vt,window.AnticipateInterpolator=Np,window.AnticipateOvershootInterpolator=sa,window.CycleInterpolator=Fp,window.OvershootInterpolator=zp,window.JumperInterpolator=kp,this._interpolator=new window[bl[this.interpolatorEnum]],this.targetProperty={},this.property)this.targetProperty[r]=this.target[r]}tick(r){if(this.delayTime<=0){this._p=Math.min(this._ct/this.durtion,1);var e,t,i,s=this._interpolator.getInterpolation(this._p),a=this.property,n=this.target,h=this.targetProperty;for(i in a)t=a[i],e=h[i],n[i]=e+(t-e)*s;this.onProgress!=null&&this.onProgress(this._p),this._ct>=this.durtion&&(this.complete=!0,this.onComplete!=null)&&this.onComplete(this.target),this._ct+=r}else this.delayTime-=r}dispose(){this.onComplete=null,this.onProgress=null,this.target=null,this.property=null,this.targetProperty=null,this.interpolatorEnum=null,this._interpolator=null,ri.remove(this)}};let wl=ri;o(wl,"interpolators",[]);class rt{static hasString(e,t){for(var i=0;i<e.length;++i)if(e[i]==t)return i;return-1}static getEllipsis(e,t=4){let i=e;return i=i.length>t?i.slice(0,t)+"...":i}static getURLName(e){e=e.split("/");let t=e[e.length-1];return t=t.split(".")[0]}static getFileFormat(e){var t=e.lastIndexOf("."),i=e.length;return e.indexOf("?",++t)!==-1&&(i=e.indexOf("?",t)),e.substr(t,i-t).toLowerCase()}static readLineProperty(e,t){e.trim().split(" ").forEach((h,s)=>{var a,n,h=h.split("=");1<h.length&&(a=h[0],n=h[1],Object.prototype.hasOwnProperty.call(t,a))&&(n.indexOf('"')==-1?t[a]=parseFloat(h[1]):t[a]=n.replace('"',"").replace('"',""))})}static getPath(e){var t=e.lastIndexOf("/");return e.substring(0,++t)}static normalizePath(e){return e.replaceAll("//","/").replaceAll("\\","/")}static getStringList(e,t=";"){return e.split(t)}static formatTime(i){var i=i/1e3/60,t=Math.floor(i),i=Math.floor(i-t);return[t.toString(),i.toString()]}static trim(e){return e.replace(/^\s+/g,"").replace(/\s+$/g,"")}static isEmpty(e){return!e||"u"<typeof e||e==null||typeof e=="string"&&this.trim(e)===""||e==="null"}static strCut(e,t){if(2*e.length<=t)return e;for(var i=0,s="",a=0;a<e.length;a++)if(s+=e.charAt(a),128<e.charCodeAt(a)){if(t<=(i+=2))return s.substring(0,s.length-1)+"..."}else if(t<=(i+=1))return s.substring(0,s.length-2)+"...";return s}static toQueryPair(e,t,i=!1){return e+"="+(i?encodeURIComponent(t):t)}static stringFormat(e,...t){if(arguments.length===0)throw new Error("please give arg at least one !");if(arguments.length===2&&typeof arguments[1]=="object")for(var i in arguments[1]){var s=new RegExp("({"+i+"})","g");e=e.replace(s,arguments[1][i])}else for(let n=0;n<t.length;n++){if(t[n]==null)return e;var a=new RegExp("({["+n+"]})","g");e=e.replace(a,t[n])}return e}static parseJson2String(e,t){let i=null,s="",a=0;return(t=t||{}).newlineAfterColonIfBeforeBraceOrBracket=t.newlineAfterColonIfBeforeBraceOrBracket===!0,t.spaceAfterColon=t.spaceAfterColon!==!1,typeof e=="string"&&(e=JSON.parse(e)),e=JSON.stringify(e),i=/([\{\}])/g,e=e.replace(i,`\r
$1\r
`),i=/([\[\]])/g,e=e.replace(i,`\r
$1\r
`),i=/(\,)/g,e=e.replace(i,`$1\r
`),i=/(\r\n\r\n)/g,e=e.replace(i,`\r
`),i=/\r\n\,/g,e=e.replace(i,","),t.newlineAfterColonIfBeforeBraceOrBracket||(i=/\:\r\n\{/g,e=e.replace(i,":{"),i=/\:\r\n\[/g,e=e.replace(i,":[")),t.spaceAfterColon&&(i=/\:/g,e=e.replace(i,":")),e.split(`\r
`).forEach(function(n,h){let l=0,u=0,c="";for(n.match(/\{$/)||n.match(/\[$/)?u=1:n.match(/\}/)||n.match(/\]/)?a!==0&&--a:u=0,l=0;l<a;l++)c+="    ";s+=c+n+`\r
`,a+=u}),s}static compareVersion(e,t){e=e.split("."),t=t.split(".");for(var i=Math.max(e.length,t.length);e.length<i;)e.push("0");for(;t.length<i;)t.push("0");for(let n=0;n<i;n++){var s=parseInt(e[n]),a=parseInt(t[n]);if(a<s)return 1;if(s<a)return-1}return 0}static buildRandomCode(){let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=e.length,i="";for(let a=0;a<26;a++){var s=Math.floor(Math.random()*t);i+=e.charAt(s)}return new Date().getTime()+"-"+i}static UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return(e=="x"?t:3&t|8).toString(16)})}static stringToHash(e){let t=0;if(e.length!=0)for(let s=0;s<e.length;s++){var i=e.charCodeAt(s);t=(t<<5)-t+i,t&=t}return t}static parseUrl(e,t){return t.match(/^(blob|http|https):/)?t:e+t}}o(rt,"_filterChar",[" ","  ",";",`
`,"\r","	",`
`,"\r","	"]);class Tr extends Zt{constructor(e=!0){super(),o(this,"_source"),o(this,"imageData"),this.useMipmap=e}get source(){return this._source}set source(e){this._source=e,this._source instanceof HTMLImageElement?this._source.decode().then(async()=>{var t;this._source instanceof HTMLImageElement&&(t=await createImageBitmap(this._source,{imageOrientation:this.flipY?"flipY":"from-image"}),this.generate(t))}):(this._source instanceof HTMLCanvasElement||this._source instanceof ImageBitmap)&&this.generate(this._source)}async load(e,t){var i,s;return e.indexOf(";base64")!=-1?(i=document.createElement("img"),s=e.indexOf("data:image"),s=e.substring(s,e.length),i.src=s,await i.decode(),i.width=Math.max(i.width,32),i.height=Math.max(i.height,32),s=await createImageBitmap(i,{resizeWidth:i.width,resizeHeight:i.height,imageOrientation:this.flipY?"flipY":"from-image"}),this.format=ae.rgba8unorm,this.generate(s)):(i=await fetch(e,{headers:Object.assign({Accept:"image/avif,image/webp,*/*"},t==null?void 0:t.headers)}),s=await mi.read(e,i,t),i=new Blob([s],{type:"image/jpeg"}),s=null,await this.loadFromBlob(i)),this.name=rt.getURLName(e),!0}async loadFromBlob(e){this.imageData=e;let t=await createImageBitmap(e,{imageOrientation:this.flipY?"flipY":"from-image"});var i;return(t.width<32||t.height<32)&&(e=Math.max(t.width,32),i=Math.max(t.height,32),t=await createImageBitmap(t,{resizeWidth:e,resizeHeight:i,imageOrientation:this.flipY?"flipY":"from-image"})),this.format=ae.rgba8unorm,this.generate(t),!0}}class mi{constructor(){o(this,"baseUrl",""),o(this,"initUrl"),o(this,"_progress",0)}async loadBinData(e,t){return this.baseUrl=rt.getPath(e),this.initUrl=e,new Promise(async(i,s)=>{fetch(e,{headers:t==null?void 0:t.headers}).then(async a=>{if(!a.ok)throw Error("request rejected with status "+a.status);a=(await mi.read(e,a,t)).buffer,i(a)}).catch(a=>{t.onError&&t.onError(a),s(a)})})}async loadAsyncBitmapTexture(e,t){this.baseUrl=rt.getPath(e),this.initUrl=e;var i=new Tr;return i.url=e,i.name=rt.getURLName(e),await i.load(e,t),T.res.addTexture(e,i),i}async loadJson(e,t){return this.baseUrl=rt.getPath(e),this.initUrl=e,new Promise(async(i,s)=>{fetch(e,{headers:t==null?void 0:t.headers}).then(async a=>{if(!a.ok)throw Error("request rejected with status"+a.status);a=await mi.read(e,a,t),a=new TextDecoder("utf-8").decode(a),i(JSON.parse(a))}).catch(a=>{t.onError&&t.onError(a),s(a)})})}async loadTxt(e,t){return this.baseUrl=rt.getPath(e),new Promise(async(i,s)=>{fetch(e).then(async a=>{if(!a.ok)throw Error("request rejected with status"+a.status);a=await mi.read(e,a,t),a=new TextDecoder("utf-8").decode(a),i({data:a})}).catch(a=>{t.onError&&t.onError(a),s(a)})})}static async read(e,t,i){var s,a=t.body.getReader(),n=+t.headers.get("Content-Length");let h=0,l=[],u=[];for(;;){var{done:c,value:d}=await a.read();if(c){0<n&&i&&i.onComplete&&i.onComplete.call(this,e);break}l.push(d),h+=d.length,0<n?i&&i.onProgress&&i.onProgress.call(this,h,n,e):u.push(d.length)}if(0<u.length)for(let _=0;_<l.length;_++)console.log(u[_]),i&&i.onProgress&&i.onProgress.call(this,u[_],h,e),u[_]==h&&i&&i.onComplete&&i.onComplete.call(this,e);let f=new Uint8Array(h),m=0;for(s of l)f.set(s,m),m+=s.length;return f}}class Dt extends mi{async load(e,t,i,s){switch(t.format){case"bin":return new Promise(async(a,n)=>{this.loadBinData(e,i).then(async h=>{var l=new t;if(l.userData=s,l.baseUrl=this.baseUrl,l.initUrl=e,await l.parseBuffer(h),!l.verification())throw new Error("parser error");a(l)}).catch(h=>{n(h)})});case"json":return new Promise((a,n)=>{this.loadJson(e,i).then(async h=>{var l=new t;l.userData=s,l.baseUrl=this.baseUrl,l.initUrl=e,l.loaderFunctions=i,await l.parserJson(h),a(l)}).catch(h=>{n(h)})});case"text":return new Promise((a,n)=>{this.loadTxt(e,i).then(async h=>{var l=new t;l.userData=s,l.baseUrl=this.baseUrl,l.initUrl=e,l.loaderFunctions=i,h.data?(await l.parserString(h.data),a(l)):n("text load is empty!")}).catch(h=>{n(h)})})}}}class jr{constructor(){o(this,"baseUrl"),o(this,"initUrl"),o(this,"loaderFunctions"),o(this,"userData"),o(this,"data")}parserString(e){}parserJson(e){}parseBuffer(e){}parserTexture(e){throw this.parserError("Method not implemented.",-1)}parse(e){}verification(e){throw this.parserError("Method not implemented.",-1)}parserError(e,t){console.error(`error id:${t} `+e)}}o(jr,"format","bin");class rn{constructor(){o(this,"asset"),o(this,"accessors"),o(this,"buffers"),o(this,"bufferViews"),o(this,"materials"),o(this,"meshes"),o(this,"nodes"),o(this,"scene",0),o(this,"scenes"),o(this,"textures"),o(this,"cameras"),o(this,"skins"),o(this,"resources"),o(this,"images"),o(this,"samplers"),o(this,"animations"),o(this,"extensions")}}const Gp=5120,Vp=5121,Hp=5122,Xp=5123,Wp=5124,Kp=5125,Yp=5126,jp=32819,qp=32820,$p=33635,Zp=5131,Qp=33640,Jp=35899,em=35902,tm=36269,rm=34042,Sl={};{const r=Sl;r[Gp]=Int8Array,r[Vp]=Uint8Array,r[Hp]=Int16Array,r[Xp]=Uint16Array,r[Wp]=Int32Array,r[Kp]=Uint32Array,r[Yp]=Float32Array,r[jp]=Uint16Array,r[qp]=Uint16Array,r[$p]=Uint16Array,r[Zp]=Uint16Array,r[Qp]=Uint32Array,r[Jp]=Uint32Array,r[em]=Uint32Array,r[tm]=Uint32Array,r[rm]=Uint32Array}function Qo(r){if(r=Sl[r],r)return r;throw new Error("unkonw gl type")}class aa{static async apply(e,t){if(t.extensions){const i=t.extensions.KHR_draco_mesh_compression;if(i){let s=this._workers.get(e.gltf),a=(s||(s=new Worker(await this.initDecoder()),this._workers.set(e.gltf,s)),s.postMessage({type:"init",decoderConfig:{}}),e.parseBufferView(i.bufferView));return a.result||(t=await new Promise((n,h)=>{s.onmessage=l=>{l=l.data,l.type=="decode"?n(l.result):l.type=="error"&&h(l.error)},s.postMessage({type:"decoder",buffer:a,attributes:i.attributes},[a])}),a.result=t),a.result}}}static unload(e){var t=this._workers.get(e);t&&(t.terminate(),this._workers.delete(e))}static async initDecoder(){var e;return this._workerCode||(e=await new Dt().loadTxt("https://cdn.orillusion.com/draco_decoder_gltf.js"),e=new Blob([e.data,"",`(${im})()`],{type:"application/javascript"}),this._workerCode=URL.createObjectURL(e)),this._workerCode}}function im(){let r,e;onmessage=t=>{var i=t.data;switch(i.type){case"init":r=i.decoderConfig,e=new Promise((n,h)=>{r.onModuleLoaded=l=>{n({draco:l})},DracoDecoderModule(r)});break;case"decoder":const s=i.buffer,a=i.attributes;e.then(u=>{var h=u.draco,l=new h.Decoder,u=new h.DecoderBuffer;u.Init(new Int8Array(s),s.byteLength);let c,d;try{var f=l.GetEncodedGeometryType(u),m=(f==h.TRIANGULAR_MESH?(d=new h.Mesh,c=l.DecodeBufferToMesh(u,d)):self.postMessage(new Error("INVALID_GEOMETRY_TYPE:"+f)),c.ok()||self.postMessage(new Error("DracoDecode:"+c.error_msg())),{});for(const ue in a){var _=l.GetAttributeByUniqueId(d,a[ue]),g=_.num_components(),w=d.num_points()*g,C=w*Float32Array.BYTES_PER_ELEMENT,b=h.DT_FLOAT32,E=h._malloc(C),I=(l.GetAttributeDataArrayForAllPoints(d,_,b,C,E),new Float32Array(h.HEAPF32.buffer,E,w).slice());h._free(E),m[ue]={data:I,numComponents:g,normalize:!1}}var N=3*d.num_faces(),V=4*N,W=h._malloc(V),Q=(l.GetTrianglesUInt32Array(d,V,W),new Uint32Array(h.HEAPF32.buffer,W,N).slice());h._free(W),m.indices={data:Q,numComponents:1,normalize:!1},self.postMessage({type:"decode",result:m})}catch(ue){self.postMessage({type:"error",error:ue.message})}finally{h.destroy(d),h.destroy(l),h.destroy(u)}})}}}o(aa,"_workerCode"),o(aa,"_workers",new Map);class sm{constructor(e){o(this,"gltf"),this.gltf=e}parse(e){var t,i,s,a,n,h,l,u=this.gltf.cameras[e];return u?(u.isParsed||(u.isParsed=!0,u.dcamera=!1,{name:t,type:i,perspective:h,orthographic:s}=u,i==="perspective"&&h?({aspectRatio:h,yfov:a,zfar:l,znear:n}=h,u.dcamera=Object.assign({},{name:t,type:i,yfov:a,znear:n,aspectRatio:h,zfar:l})):i==="orthographic"&&s&&({xmag:a,ymag:n,zfar:h,znear:l}=s,u.dcamera=Object.assign({},{name:t,type:i,xmag:a,ymag:n,zfar:h,znear:l}))),u.dcamera):this.errorMiss("camera",e)}errorMiss(e,t){throw new Error(e+t)}}const Tl=class extends jr{constructor(){super(...arguments),o(this,"_gltf")}async parserJson(r){this._gltf=new rn,this._gltf={...this._gltf,...r},this._gltf.resources={},await Promise.all([this.load_gltf_bin(),this.load_gltf_textures()]);let e=new an,t=await e.parse(this.initUrl,this._gltf,this._gltf.scene);return e.destory(),e=null,t?(this.data=t.rootNode,t.rootNode):this._gltf=null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}static getMeshNameCounter(){return function(){return"GLTF_NO_NAME_PRIMITIVE_"+Tl._counter++}}static getModelNameCounter(){let r=0;return function(){return"GLTF_NO_NAME_MESH_"+r++}}static getTexCoordDefine(r){return"UV_NUM "+r}static getVertexColorDefine(r){return"HAS_VERTEXCOLOR "+r}static getBaseColorTextureDefine(){return"HAS_BASECOLORMAP"}static getMetalRoughnessDefine(){return"HAS_METALROUGHNESSMAP"}static getNormalMapDefine(){return"HAS_NORMALMAP"}static getEmissiveMapDefine(){return"HAS_EMISSIVEMAP"}static getOcclusionMapDefine(){return"HAS_OCCLUSIONMAP"}static getMorphTargetsDefine(r){return"MORPH_TARGET_NUM "+r}static getMorphtargetPositionDefine(){return"HAS_MORPH_POSITION"}static getMorphtargetNormalDefine(){return"HAS_MORPH_NORMAL"}static getMorphtargetTangentDefine(){return"HAS_MORPH_TANGENT"}static getJointsNumDefine(r){return"JOINTS_NUM "+r}static getJointVec8Define(){return"JOINT_VEC8"}static getHasNormalDefine(){return"HAS_NORMAL"}static getHasTangentDefine(){return"HAS_TANGENT"}static getHasNormalMapDefine(){return"HAS_NORMAL_MAP"}static getAlphaMaskDefine(){return"ALPHA_MASK"}static getAlphaBlendDefine(){return"ALPHA_BLEND"}async load_gltf_bin(){if(this._gltf.buffers&&0<this._gltf.buffers.length){var r=[];for(let t=0;t<this._gltf.buffers.length;t++){const i=this._gltf.buffers[t];if(i.uri.substring(0,5)!=="data:"){let s=rt.parseUrl(this.baseUrl,i.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(s=await this.loaderFunctions.onUrl(s));var e=new Dt().loadBinData(s,this.loaderFunctions).then(a=>{this._gltf.resources[i.uri]=a});r.push(e)}}await Promise.all(r)}}async load_gltf_textures(){if(this._gltf,this._gltf.images){var r=[];for(let t=0;t<this._gltf.images.length;t++){const i=this._gltf.images[t];if(i.uri){let s=rt.parseUrl(this.baseUrl,i.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(s=await this.loaderFunctions.onUrl(s));var e=new Dt().loadAsyncBitmapTexture(s,this.loaderFunctions).then(a=>{a.name=rt.getURLName(i.uri),this._gltf.resources[a.name]=a});r.push(e)}}await Promise.all(r)}}};let qe=Tl;o(qe,"format","json"),o(qe,"_counter",0),o(qe,"defaultMaterial",{name:"GLTF_DEFAULT_MATERIAL",alphaCutoff:.33,alphaMode:"MASK",pbrMetallicRoughness:{name:"GLTF_DEFAULT_MATERIAL",defines:[],doubleSided:!1,baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1,emissiveFactor:[0,0,0]}});class am{constructor(e){o(this,"gltf"),o(this,"subParser"),this.gltf=e.gltf,this.subParser=e}async parse(e){var t=this.gltf.meshes[e];if(!t)return this.errorMiss("mesh",e);if(!t.isParsed){var i=t.primitives,s=t.extras,a=[];for(let g=0;g<i.length;g++){var n,h=i[g],{attributes:l,indices:u,material:c,mode:d,targets:f,extensions:m}=h;let w=t.name;for(n in l)w+=n;w=w+("indices:"+u)+("material:"+c);const C={attribArrays:{indices:[]},weights:[],defines:[],material:null,drawMode:null,meshName:null,modelName:null,morphTargetsRelative:!1,targetNames:s?s.targetNames:null};let b=!1,E=0,I=!1,N;m&&m.KHR_draco_mesh_compression&&(N=await aa.apply(this.subParser,h));for(const V in l){var _=N?N[V]:this.parseAccessor(l[V]);if(_){let W;switch(V){case"POSITION":W=ne.position;break;case"NORMAL":W=ne.normal,b=!0;break;case"TEXCOORD_0":W=ne.uv,E++;break;case"JOINTS_0":W=ne.joints0;break;case"JOINTS_1":W=ne.joints1,I=!0;break;case"WEIGHTS_0":W=ne.weights0;break;case"WEIGHTS_1":W=ne.weights1;break;default:W=V}C.attribArrays[W]=_}}if(b&&C.defines.push(qe.getHasNormalDefine()),E&&C.defines.push(qe.getTexCoordDefine(E)),I&&C.defines.push(qe.getJointVec8Define()),u!==void 0&&(m=N?N.indices:this.parseAccessor(u))&&(C.attribArrays.indices=m),h=await this.parseMaterial(c),h&&(C.material=h,C.defines=C.defines.concat(h.defines)),C.drawMode=d===void 0?4:d,C.meshName=()=>w,C.modelName=t.name||qe.getModelNameCounter(),f){C.defines.push(qe.getMorphTargetsDefine(f.length));let V=!(C.morphTargetsRelative=!0),W=!1,Q=!1;for(let ue=0;ue<f.length;ue++){const ye=f[ue];Object.keys(ye).forEach(oe=>{var ie=this.parseAccessor(ye[oe]);if(ie){let me;switch(oe){case"POSITION":me=ge.MORPH_POSITION_PREFIX+ue,V=!0;break;case"NORMAL":me=ge.MORPH_NORMAL_PREFIX+ue,W=!0;break;case"TANGENT":me=ge.MORPH_TANGENT_PREFIX+ue,Q=!0;break;default:me=!1}me?C.attribArrays[me]=ie:console.error("glTF has unsupported morph target attribute "+oe)}})}V&&C.defines.push(qe.getMorphtargetPositionDefine()),W&&C.defines.push(qe.getMorphtargetNormalDefine()),Q&&C.defines.push(qe.getMorphtargetTangentDefine()),C.weights=t.weights||new Array(f.length).fill(0)}a.push(C)}t.dprimitives=a,t.isParsed=!0}return t.dprimitives}parseAccessor(e){return this.subParser.parseAccessor(e)}parseMaterial(e){return this.subParser.parseMaterial(e)}errorMiss(e,t){throw new Error(e+t)}}class nm{constructor(e){o(this,"gltf"),o(this,"subParser"),this.gltf=e.gltf,this.subParser=e}async parse(b){let t;if(!(t=b==null?qe.defaultMaterial:this.gltf.materials[b]))return this.errorMiss("material",b);if(t.isParsed)return t.dmaterial;let{name:i,pbrMetallicRoughness:s,normalTexture:a,occlusionTexture:n,emissiveTexture:h,emissiveFactor:l,alphaMode:u,alphaCutoff:c,doubleSided:d,extensions:f}=t;var m,_,g,w,C,b={name:i,defines:[],doubleSided:!!d,baseColorFactor:[1,1,1,1],emissiveFactor:null,alphaCutoff:0,enableBlend:!1,baseColorTexture:null,metallicRoughnessTexture:null,normalTexture:null,occlusionTexture:null,emissiveTexture:null,transformUV1:null,transformUV2:null,extensions:null};return s?({baseColorFactor:_,metallicFactor:g,roughnessFactor:C,baseColorTexture:w,metallicRoughnessTexture:m}=s,Object.assign(b,{baseColorFactor:_||[1,1,1,1],metallicFactor:g===void 0?1:g,roughnessFactor:C===void 0?.15:C}),w&&((_=w.extensions)&&(g=_.KHR_texture_transform)&&(b.transformUV1=new de(g.offset?g.offset[0]:0,g.offset?g.offset[1]:0,g.scale?g.scale[0]:1,g.scale?g.scale[1]:1)),C=await this.parseTexture(w.index),b.baseColorTexture=C||T.res.redTexture),m&&(_=await this.parseTexture(m.index),b.metallicRoughnessTexture=_||T.res.blackTexture)):Object.assign(b,{baseColorFactor:[1,1,1,1],metallicFactor:0,roughnessFactor:.5}),(u=b.baseColorFactor&&b.baseColorFactor[3]<1?u==="MASK"?"MASK":"BLEND":u)&&u!=="OPAQUE"&&(u==="MASK"&&(b.defines.push(qe.getAlphaMaskDefine()),b.alphaCutoff=c===void 0?.5:c),u==="BLEND")&&(b.defines.push(qe.getAlphaBlendDefine()),b.enableBlend=!0),a&&(g=await this.parseTexture(a.index),b.normalTexture=g||T.res.normalTexture),n&&(w=await this.parseTexture(n.index))&&(b.occlusionTexture=w),l&&(b.emissiveFactor=l),h&&(C=await this.parseTexture(h.index),b.emissiveTexture=C||T.res.blackTexture),f&&(b.extensions=f),t.isParsed=!0,t.dmaterial=b}async parseTexture(e){return this.subParser.parseTexture(e)}errorMiss(e,t){throw new Error(e+t)}}class om{constructor(e){o(this,"gltf"),o(this,"subParser"),this.gltf=e.gltf,this.subParser=e}parse(e){var t=this.gltf.skins[e];if(!t)return this.errorMiss("skin",e);if(!t.isParsed){var{name:i,joints:s,inverseBindMatrices:a,skeleton:n}=t;if(!s)return this.errorMiss("skin.joints",e);t.isParsed=!0,t.dskin=!1;let c={name:i,skeleton:null,inverseBindMatrices:null,joints:s,defines:[qe.getJointsNumDefine(s.length)]};if(n)c.skeleton=n;else{var h=-1;for(let d=0;d<this.gltf.nodes.length;d++)if(this.gltf.nodes[d].name=="root"){h=d;break}h==-1&&(h=(e=this.gltf.scenes[this.gltf.scene]).nodes[e.nodes.length-1]),c.skeleton=h}if(c.inverseBindMatrices=ge.IDENTITY_INVERSE_BIND_MATRICES,a!==void 0)if(i=this.parseAccessor(a),i){var l=i.data,u=[];for(let d=0;d<l.length;d+=16)u.push(l.slice(d,d+16));c.inverseBindMatrices=u}else c=null;t.dskin=c}return t.dskin}parseAccessor(e){return this.subParser.parseAccessor(e)}errorMiss(e,t){throw new Error(e+t)}}class hm{constructor(e=""){o(this,"name",""),o(this,"index",0),o(this,"parent",null),o(this,"children",[]),o(this,"scale",new p),o(this,"rotation",new _e),o(this,"translation",new p),this.name=e}}class lm{constructor(e=[]){o(this,"joints"),this.joints=e}get numJoint(){return this.joints.length}addJoint(e){e.index=this.joints.push(e)-1}getJointName(e){return this.joints[e].name}getJointParentIndex(e){return e=this.joints[e],e.parent?e.parent.index:-1}getJointByName(e){for(var t of this.joints)if(t.name==e)return t;return null}}class Jo{constructor(e,t=!1){o(this,"index"),o(this,"worldMatrix"),this.index=e,this.worldMatrix=new q(!t)}}class na{constructor(e,t=!1){o(this,"time"),o(this,"_skeleton"),o(this,"_jointsPose"),o(this,"mJointMatrixIndexTable"),this._skeleton=e,this._jointsPose=new Array(e.numJoint),this.mJointMatrixIndexTable=new Array(e.numJoint);for(let s=0;s<e.numJoint;s++){var i=new Jo(s,t);this._jointsPose[s]=i,this.mJointMatrixIndexTable[s]=i.worldMatrix.index}}buildSkeletonPose(e){var t=new p,i=new _e,s=new p,a=new Array(this._skeleton.numJoint);this.time=0<e[11]?e[11]:e[24];for(let u=0;u<this._skeleton.numJoint;u++){var h=12*u*4,h=new Float32Array(e.buffer,e.byteOffset+h,12),n=new q,h=(t.set(h[0],h[1],h[2]),i.set(h[4],h[5],h[6],h[7]),s.set(h[8],h[9],h[10]),Ja(i.getEulerAngles(),s,t,n),a[u]=n,new Jo(u)),l=this._skeleton.getJointParentIndex(u);l<0?h.worldMatrix.copyFrom(n):Df(this._jointsPose[l].worldMatrix,n,h.worldMatrix),this._jointsPose[u]=h}}get numJoint(){return this._skeleton.numJoint}get joints(){return this._jointsPose}get jointMatrixIndexTable(){return this.mJointMatrixIndexTable}lerp(e,t,i){for(let n=0;n<this._jointsPose.length;n++){var s=e._jointsPose[n],a=t._jointsPose[n];this._jointsPose[n].worldMatrix.lerp(s.worldMatrix,a.worldMatrix,i)}}copyFrom(e){for(let t=0;t<this._jointsPose.length;t++)this._jointsPose[t].worldMatrix.copyFrom(e._jointsPose[t].worldMatrix)}reset(){for(let e=0;e<this._jointsPose.length;e++)this._jointsPose[e].worldMatrix.identity()}}class um extends wt{constructor(e,t){super(),o(this,"skeletonAnimation"),this.type=e,this.time=t}}class jn{constructor(e,t,i,s){if(o(this,"name",""),o(this,"_skeleton"),o(this,"_skeletonPoses"),o(this,"_animationClipData"),o(this,"_events"),this.name=e,this._skeleton=t,this._animationClipData=s,0<i&&s){this._skeletonPoses=new Array(i);var a=12*t.numJoint;for(let l=0;l<i;l++){var n=a*l*4,n=new Float32Array(s.buffer,n,a),h=new na(t);h.buildSkeletonPose(n),this._skeletonPoses[l]=h}}}get totalTime(){return this._skeletonPoses[this._skeletonPoses.length-1].time}get frameRate(){return this.totalTime/this._skeletonPoses.length}get skeleton(){return this._skeleton}get numFrame(){return this._skeletonPoses.length-1}get animationClipData(){return this._animationClipData}getSkeletonPose(e){return this._skeletonPoses[e]}getLerpSkeletonPose(e,t,i,s){return e=this.getSkeletonPose(e),t=this.getSkeletonPose(t),s.lerp(e,t,i),s}createSubClip(s,a,n){var s=new jn(s,this._skeleton,0,null),a=Math.max(Math.floor(a/this.frameRate),0),n=Math.min(Math.floor(n/this.frameRate),this._skeletonPoses.length-1),h=(s._skeletonPoses=this._skeletonPoses.slice(a,n),12*this._skeleton.numJoint*4);return this._animationClipData=new Float32Array(this._animationClipData,a*h,(n-a)*h),s}addEvent(e,t){this._events||(this._events=new Array),this._events.push(new um(e,t))}removeEvent(e){this._events&&(this._events=this._events.filter(t=>t.type!=e))}getEvents(){return this._events}}class eh{constructor(e){o(this,"gltf"),o(this,"subParser"),this.gltf=e.gltf,this.subParser=e}parse(e){var t=new lm;return this.buildSkeleton(t,void 0,e),t}parseSkeletonAnimation(e,t){for(var i,s=this.subParser.parseAccessor(t.samplers[0].input).data.length,a=12*e.numJoint,n=new Float32Array(a*s),h=0;h<e.numJoint;h++)for(var l=0;l<s;l++)n[(g=a*l+12*h)+0]=1,n[g+1]=1,n[g+2]=1,n[g+3]=1;for(i of t.channels){var f=t.samplers[i.sampler],u=this.subParser.parseAccessor(f.input),c=this.subParser.parseAccessor(f.output),f=i.target.node,d=i.target.path,f=this.gltf.nodes[f];if(f){var m=e.getJointByName(f.name);switch(d){case"scale":for(l=0;l<s;l++){var _=l*c.numComponents;n[(g=a*l+12*m.index)+0]=c.data[_+0],n[g+1]=c.data[_+1],n[g+2]=c.data[_+2],n[g+3]=1}break;case"rotation":for(l=0;l<s;l++)_=l*c.numComponents,n[(g=a*l+12*m.index+4)+0]=c.data[_+0],n[g+1]=c.data[_+1],n[g+2]=c.data[_+2],n[g+3]=c.data[_+3];break;case"translation":for(l=0;l<s;l++){var g,_=l*c.numComponents;n[(g=a*l+12*m.index+8)+0]=c.data[_+0],n[g+1]=c.data[_+1],n[g+2]=c.data[_+2],n[g+3]=u.data[l*u.numComponents]}}}}return new jn(t.name,e,s,n)}buildSkeleton(e,t,i,s=0){var a=this.gltf.nodes[i],n=(a.name||(a.name="Node_"+i),new hm(a.name));if(n.parent=t,a.scale&&n.scale.set(a.scale[0],a.scale[1],a.scale[2]),a.rotation&&n.rotation.set(a.rotation[0],a.rotation[1],a.rotation[2],a.rotation[3]),a.translation&&n.translation.set(a.translation[0],a.translation[1],a.translation[2]),e.addJoint(n),a.children)for(var h of a.children)this.buildSkeleton(e,n,h,s+1)}}class cm{constructor(e){o(this,"loop",!0),o(this,"speed",1),o(this,"t",0),o(this,"time",0),o(this,"weight",0),o(this,"currFrame",0),o(this,"lastFrame",-1),o(this,"nextFrame",0),o(this,"clip"),o(this,"animation"),o(this,"_isEnd",!1),o(this,"_currSkeletonPose"),this.clip=e,this._currSkeletonPose=new na(this.clip.skeleton)}reset(){this.time=0,this.weight=0,this._isEnd=!1}get name(){return this.clip.name}get currSkeletonPose(){return this._currSkeletonPose}update(e){if(this.time=(this.time+e*this.speed)%this.clip.totalTime,e=this.time/this.clip.frameRate,this.currFrame=Math.trunc(e),this.t=e-this.currFrame,this.currFrame<0&&(this.currFrame=this.clip.numFrame+this.currFrame),0<=this.time?this.nextFrame=(this.currFrame+1)%this.clip.numFrame:(this.nextFrame=this.currFrame-1,this.nextFrame<0&&(this.nextFrame=this.clip.numFrame+this.nextFrame),this.t=1-this.t),this._isEnd)this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1;else if(this.currFrame!=this.lastFrame){if(e=this.speed<0?0:this.clip.numFrame,e=(this.currFrame==e&&(this.loop?(this.currFrame=0,this.nextFrame=1,this.time=this.t=0):(this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1,this._isEnd=!0)),this.clip.getEvents()),e)for(var t of e){var i=Math.floor(t.time/this.clip.frameRate),i=Math.min(i,this.clip.numFrame);if(Math.max(i,0)==this.currFrame){t.skeletonAnimation=this.animation,this.animation.eventDispatcher.dispatchEvent(t);break}}this.lastFrame=this.currFrame}this.clip.getLerpSkeletonPose(this.currFrame,this.nextFrame,this.t,this._currSkeletonPose)}}class Kr extends Mr{constructor(){super(),o(this,"isPlaying",!0),o(this,"timeScale",1),o(this,"_skeleton"),o(this,"_clips",[]),o(this,"_clipStates",new Map),o(this,"_mixSkeletonPose"),o(this,"_mixTempSkeletonPose"),o(this,"_currentClipState"),o(this,"_bindList",[]),o(this,"_jointMatrixIndexTableBuffer"),o(this,"_crossFadeState")}start(){}get currName(){return this._currentClipState?this._currentClipState.name:""}set skeleton(e){this._skeleton=e,this._mixSkeletonPose=new na(this._skeleton,!0),this._mixTempSkeletonPose=new na(this._skeleton),e=new Float32Array(this._mixSkeletonPose.jointMatrixIndexTable),this._jointMatrixIndexTableBuffer=new ir(4*this._skeleton.numJoint,0,e),this._jointMatrixIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get skeleton(){return this._skeleton}get finalSkeletonPose(){return this._mixSkeletonPose}get jointMatrixIndexTableBuffer(){return this._jointMatrixIndexTableBuffer}getJointIndexTable(e){var t=new Array;for(let s=0;s<e.length;s++){var i=e[s],i=this._skeleton.getJointByName(i);t[s]=i?i.index:-1}return t}addAnimationClip(e){var t;this._clipStates.has(e.name)||(this._clips.push(e),((t=new cm(e)).animation=this)._clipStates.set(e.name,t),this._currentClipState)||this.setCurrentClipState(t)}getAnimationClip(e){return e=this.getAnimationClipState(e),e?e.clip:null}getAnimationClips(){return this._clips}getAnimationClipState(e){return this._clipStates.has(e)?this._clipStates.get(e):null}getAnimationClipStates(){return this._clipStates}pause(){this.isPlaying=!1}resume(){this.isPlaying=!0}play(e,t=1,i=!1){return this._currentClipState&&this._currentClipState.name==e?(i&&this._currentClipState.reset(),!1):!!(i=this.getAnimationClipState(e))&&(i.speed=t,i.reset(),this._clipStates.forEach((s,a)=>{s.weight=0}),this.setCurrentClipState(i),!0)}crossFade(e,t){t<.01?this.play(e):this._currentClipState.name!=e&&(e=this.getAnimationClipState(e))&&(e.reset(),this._crossFadeState?(this._crossFadeState.inClip&&(this._crossFadeState.inClip.weight=0),this._crossFadeState.outClip&&(this._crossFadeState.outClip.weight=0),this._crossFadeState.reset(e,this._currentClipState,t)):this._crossFadeState=new dm(e,this._currentClipState,t),this._currentClipState=e)}setAnimIsLoop(e,t){this._clipStates.has(e)&&(this._clipStates.get(e).loop=t)}addJointBind(e,t){this._bindList.push({jointName:e,obj:t})}removeJointBind(e){for(let t=0;t<this._bindList.length;t++)if(this._bindList[t].obj==e){this._bindList.splice(t,1);break}}onUpdate(){if(this.isPlaying){let a=.001*ze.delta*this.timeScale;this._crossFadeState&&this._crossFadeState.update(a);var e=0,t=[];if(this._clipStates.forEach((n,h)=>{0<n.weight&&(n.update(a),e+=n.weight,t.push(n))}),0<t.length){this._mixSkeletonPose.copyFrom(t[0].currSkeletonPose);for(var i=1;i<t.length;++i){var s=t[i];this._mixTempSkeletonPose.lerp(this._mixSkeletonPose,s.currSkeletonPose,s.weight/e),this._mixSkeletonPose.copyFrom(this._mixTempSkeletonPose)}}}}cloneTo(e){var t=e.addComponent(Kr);t.skeleton=this.skeleton;for(var i=0;i<this._clips.length;++i)t.addAnimationClip(this._clips[i])}setCurrentClipState(e){this._currentClipState!=e&&(this._currentClipState=e,this._currentClipState.weight=1)}}class dm{constructor(e,t,i){o(this,"inClip"),o(this,"outClip"),o(this,"currentTime"),o(this,"crossFadeTime"),this.reset(e,t,i)}reset(e,t,i){this.inClip=e,this.outClip=t,this.currentTime=0,this.crossFadeTime=i}update(e){this.inClip&&this.outClip&&(this.currentTime+=e,this.inClip.weight=Math.min(Math.abs(this.currentTime%this.crossFadeTime)/this.crossFadeTime,1),this.outClip.weight=1-this.inClip.weight,Math.abs(this.currentTime)>=this.crossFadeTime)&&(this.inClip.weight=1,this.outClip.weight=0,this.inClip=null,this.outClip=null)}}class sn{static add(e){this.list.indexOf(e)==-1&&this.list.push(e)}static remove(e){e=this.list.indexOf(e),e!=-1&&this.list.splice(e,1)}}o(sn,"list",[]);class qn extends Mr{constructor(){super(),o(this,"name"),o(this,"size",1),o(this,"lightData"),o(this,"dirFix",1),o(this,"bindOnChange"),o(this,"needUpdateShadow",!0),o(this,"realTimeShadow",!0),o(this,"_castGI",!1),o(this,"_castShadow",!1),o(this,"_iesProfiles")}init(){this.transform.object3D.bound=new pt(new p,new p),this.lightData=new Js,this.lightData.lightMatrixIndex=this.transform.worldMatrix.index}onChange(){this.bindOnChange&&this.bindOnChange(),this.transform.object3D.bound.setFromCenterAndSize(this.transform.worldPosition,new p(this.size,this.size,this.size)),this._castGI&&(te.instance.state.giLightingChange=!0),this._castShadow?(this.needUpdateShadow=!0,br.addShadowLight(this)):br.removeShadowLight(this)}start(){this.transform.onScaleChange=()=>this.onScaleChange(),this.transform.onRotationChange=()=>this.onRotChange(),this.onRotChange(),this.onScaleChange()}onRotChange(){this.dirFix==1?this.lightData.direction.copyFrom(this.transform.forward):this.lightData.direction.copyFrom(this.transform.back),this.lightData.lightTangent.copyFrom(this.transform.up),this.onChange()}onScaleChange(){this.onChange()}onEnable(){this.onChange(),te.instance.addLight(this.transform.scene3D,this)}onDisable(){this.onChange(),te.instance.removeLight(this.transform.scene3D,this)}set iesProfiles(e){this._iesProfiles=e,this.lightData.iesIndex=e.index,pi.use=!0,this.onChange()}get iesProfile(){return this._iesProfiles}get r(){return this.lightData.lightColor.r}set r(e){this.lightData.lightColor.r=e,this.onChange()}get g(){return this.lightData.lightColor.g}set g(e){this.lightData.lightColor.g=e,this.onChange()}get b(){return this.lightData.lightColor.b}set b(e){this.lightData.lightColor.b=e,this.onChange()}get lightColor(){return this.lightData.lightColor}set lightColor(e){this.lightData.lightColor=e,this.onChange()}get intensity(){return this.lightData.intensity}set intensity(e){this.lightData.intensity=e,this.onChange()}get castShadow(){return 0<=this.lightData.castShadowIndex}get shadowIndex(){return this.lightData.castShadowIndex}set castShadow(e){e&&this.onChange()}get castGI(){return this._castGI}set castGI(e){e?sn.add(this):sn.remove(this),(this._castGI=e)&&this.onChange()}get direction(){return this.lightData.direction}destroy(){this.bindOnChange=null,this.transform.eventDispatcher.removeEventListener(ct.ROTATION_ONCHANGE,this.onRotChange,this),this.transform.eventDispatcher.removeEventListener(ct.SCALE_ONCHANGE,this.onScaleChange,this),super.destroy()}}class Cl extends qn{constructor(){super(),o(this,"shadowCamera")}init(){super.init(),this.object3D.name==""&&(this.object3D.name="DirectionLight_"+mt()),this.radius=9999999,this.lightData.lightType=Xe.DirectionLight,this.lightData.linear=0}start(){super.start(),this.castGI=!0}get radius(){return this.lightData.range}set radius(e){this.lightData.range=e,this.onChange()}get indirect(){return this.lightData.quadratic}set indirect(e){this.lightData.quadratic=e,this.onChange()}set castShadow(e){e!=this._castShadow&&this.onChange(),this._castShadow=e}get castShadow(){return 0<=this.lightData.castShadowIndex}debug(){}}class El extends qn{constructor(){super()}init(){super.init(),this.lightData.lightType=Xe.PointLight,this.object3D.name==""&&(this.object3D.name="PointLight"+mt())}get range(){return this.lightData.range}set range(e){this.lightData.range=e,this.onChange()}get at(){return this.lightData.linear}set at(e){this.lightData.linear=e,this.onChange()}get radius(){return this.lightData.radius}set radius(e){this.lightData.radius=e,this.onChange()}get quadratic(){return this.lightData.quadratic}set quadratic(e){this.lightData.quadratic=e,this.onChange()}set castShadow(e){e!=this._castShadow&&this.onChange(),this._castShadow=e}start(){this.transform.rotationX=90,super.start()}onUpdate(){this.transform.updateWorldMatrix(!0)}onGraphic(e){e=T.getRenderJob(e).graphic3D.createCustomShape("PointLight_"+this.object3D.uuid,this.transform),e.buildAxis(),e.buildCircle(p.ZERO,this.range,32,p.X_AXIS),e.buildCircle(p.ZERO,this.range,32,p.Y_AXIS),e.buildCircle(p.ZERO,this.range,32,p.Z_AXIS)}debug(){}debugDraw(e){}}class fm extends qn{constructor(){super()}init(){super.init(),this.lightData.lightType=Xe.SpotLight,this.object3D.name==""&&(this.object3D.name="SpotLight"+mt())}get innerAngle(){return this.lightData.innerAngle/this.lightData.outerAngle*100}set innerAngle(e){this.lightData.innerAngle=ft(e,0,100)/100*this.lightData.outerAngle,this.onChange()}get outerAngle(){return this.lightData.outerAngle*ps*2}set outerAngle(e){this.lightData.outerAngle=ft(e,1,179)*Ee*.5,this.onChange()}get radius(){return this.lightData.radius}set radius(e){this.lightData.radius=e,this.onChange()}get range(){return this.lightData.range}set range(e){this.lightData.range=e,this.onChange()}get at(){return this.lightData.linear}set at(e){this.lightData.linear=e,this.onChange()}set castShadow(e){e!=this._castShadow&&this.onChange(),this._castShadow=e}start(){super.start(),this.lightData.lightType=Xe.SpotLight}onUpdate(){this.transform.updateWorldMatrix(!0)}onGraphic(t){var t=T.getRenderJob(t).graphic3D.createCustomShape("SpotLight_"+this.object3D.uuid,this.transform),i=this.range,s=this.outerAngle/2,a=(t.buildAxis(),(90-s)*Ee),n=i*Math.cos(a),h=i*Math.sin(a);t.buildLines([p.ZERO,new p(0,n,h)]),t.buildLines([p.ZERO,new p(n,0,h)]),a=(90+s)*Ee,n=i*Math.cos(a),h=i*Math.sin(a),t.buildLines([p.ZERO,new p(0,n,h)]),t.buildLines([p.ZERO,new p(n,0,h)]),t.buildArcLine(p.ZERO,i,90-s,90+s,16,p.X_AXIS),t.buildArcLine(p.ZERO,i,90-s,90+s,16,p.Y_AXIS),t.buildCircle(new p(0,0,i*Math.sin(a)),i*Math.cos(a),32,p.Z_AXIS)}debug(){}debugDraw(e){}}class $n extends Fe{constructor(){super(),o(this,"skinJointsName"),o(this,"mInverseBindMatrixData"),o(this,"mInverseBindMatrixBuffer"),o(this,"mSkeletonAnimation"),o(this,"mJointIndexTableBuffer"),this.addRendererMask(ot.SkinnedMesh)}start(){var e;super.start(),this.skeletonAnimation=this.object3D.getComponent(Kr),this.skeletonAnimation||(0<(e=this.object3D.parentObject.parentObject.getComponentsInChild(Kr)).length&&(this.skeletonAnimation=e[0]),this.skeletonAnimation)||(this.skeletonAnimation=this.object3D.getComponentFromParent(Kr))}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(e){(this.mSkeletonAnimation=e)&&!this.mJointIndexTableBuffer&&(e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName),this.mJointIndexTableBuffer=new ir(4*e.length,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE)}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(e){this.mInverseBindMatrixData=e;var t=new Float32Array(16*e.length);for(let a=0;a<e.length;a++){var i=16*a,s=e[a];t.set(s,i)}this.mInverseBindMatrixBuffer=new ir(t.byteLength,0,t),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(e){e=e.addComponent($n),e.geometry=this.geometry,e.material=this.material.clone(),e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(e,t,i,s){for(let h=0;h<this.materials.length;h++){var a=this.materials[h].renderPasses.get(t);if(a)for(let l=0;l<a.length;l++){var n=a[l].renderShader;n.pipeline||(n.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),n.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),n.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(e,t,i,s)}}class Ml extends ar{get uvTransform_1(){return this.renderShader.uniforms.transformUV1.vector4}set uvTransform_1(e){this.renderShader.setUniformVector4("transformUV1",e)}get uvTransform_2(){return this.renderShader.uniforms.transformUV2.vector4}set uvTransform_2(e){this.renderShader.setUniformVector4("transformUV2",e)}get materialF0(){return this.renderShader.uniforms.materialF0.vector4}set materialF0(e){this.renderShader.setUniformVector4("materialF0",e)}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){this.renderShader.setUniformFloat("roughness",e)}get metallic(){return this.renderShader.uniforms.metallic.value}set metallic(e){this.renderShader.setUniformFloat("metallic",e)}get ao(){return this.renderShader.uniforms.ao.value}set ao(e){this.renderShader.setUniformFloat("ao",e)}get metallic_min(){return this.renderShader.uniforms.metallic_min.value}set metallic_min(e){this.renderShader.setUniformFloat("metallic_min",e)}get metallic_max(){return this.renderShader.uniforms.metallic_max.value}set metallic_max(e){this.renderShader.setUniformFloat("metallic_max",e)}get roughness_min(){return this.renderShader.uniforms.roughness_min.value}set roughness_min(e){this.renderShader.setUniformFloat("roughness_min",e)}get roughness_max(){return this.renderShader.uniforms.roughness_max.value}set roughness_max(e){this.renderShader.setUniformFloat("roughness_max",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get maskMap(){return this.renderShader.textures.maskMap}set maskMap(e){this.renderShader.setDefine("USE_ARMC",!0),this.renderShader.setTexture("maskMap",e)}set aoMap(e){e&&(this.renderShader.setTexture("aoMap",e),e!=T.res.whiteTexture)&&this.renderShader.setDefine("USE_AOTEX",!0)}get aoMap(){return this.renderShader.textures.aoMap}set clearCoatRoughnessMap(e){e&&(this.renderShader.setTexture("clearCoatRoughnessMap",e),this.renderShader.setDefine("USE_CLEARCOAT_ROUGHNESS",!0))}get clearCoatRoughnessMap(){return this.renderShader.textures.clearCoatRoughnessMap}get brdfLUT(){return this.renderShader.textures.brdfLUT}set brdfLUT(e){this.renderShader.setTexture("brdfLUT",e),this.renderShader.setTexture("brdflutMap",e)}get emissiveMap(){return this.renderShader.textures.emissiveMap}set emissiveMap(e){this.renderShader.setTexture("emissiveMap",e)}set envIntensity(e){this.renderShader.setUniformFloat("envIntensity",e)}get envIntensity(){return this.renderShader.uniforms.envIntensity.value}set ior(e){this.renderShader.setUniformFloat("ior",e)}get ior(){return this.renderShader.uniforms.ior.value}useCleanCoat(){this.renderShader.setDefine("USE_CLEARCOAT",!0)}set clearcoatFactor(e){this.renderShader.setUniformFloat("clearcoatFactor",e)}get clearcoatFactor(){return this.renderShader.uniforms.clearcoatFactor.value}set clearcoatRoughnessFactor(e){this.renderShader.setUniformFloat("clearcoatRoughnessFactor",e)}get clearcoatRoughnessFactor(){return this.renderShader.uniforms.clearcoatRoughnessFactor.value}set clearcoatWeight(e){this.renderShader.setUniformFloat("clearcoatWeight",e)}get clearcoatWeight(){return this.renderShader.uniforms.clearcoatWeight.value}set clearcoatColor(e){this.renderShader.setUniformColor("clearcoatColor",e)}get clearcoatColor(){return this.renderShader.uniforms.clearcoatColor.color}debug(){}}const Pl=class extends Ml{constructor(){super(),this.setShader("PBRLItShader","PBRLItShader");var r=this.getShader(),r=(r.setShaderEntry("VertMain","FragMain"),r.setDefine("USE_BRDF",!0),r.setDefine("USE_NORMALFILPY",T.setting.material.normalYFlip),r.shaderState),r=(r.acceptShadow=!0,r.castShadow=!0,r.receiveEnv=!0,r.acceptGI=!0,r.useLight=!0,T.res.getTexture("BRDFLUT"));this.brdfLUT=r,this.baseMap=T.res.whiteTexture,this.normalMap=T.res.normalTexture,this.emissiveMap=T.res.blackTexture}clone(){console.log("clone LitMaterial "+this.name);var r=new Pl;return r.baseMap=this.baseMap,r.normalMap=this.normalMap,r.aoMap=this.aoMap,this.maskMap&&(r.maskMap=this.maskMap),r.emissiveMap=this.emissiveMap,this.uvTransform_1&&(r.uvTransform_1=new de().copyFrom(this.uvTransform_1)),this.uvTransform_2&&(r.uvTransform_2=new de().copyFrom(this.uvTransform_2)),r.baseColor=this.baseColor.clone(),r.emissiveColor=this.emissiveColor.clone(),this.materialF0&&(r.materialF0=new de().copyFrom(this.materialF0)),r.envIntensity=this.envIntensity,r.normalScale=this.normalScale,r.roughness=this.roughness,r.metallic=this.metallic,r.ao=this.ao,r.roughness_min=this.roughness_min,r.roughness_max=this.roughness_max,r.metallic_min=this.metallic_min,r.metallic_max=this.metallic_max,r.emissiveIntensity=this.emissiveIntensity,r.alphaCutoff=this.alphaCutoff,r.ior=this.ior,r.clearcoatFactor=this.clearcoatFactor,r.clearcoatRoughnessFactor=this.clearcoatRoughnessFactor,r}debug(){}};let xr=Pl;o(xr,"count",0);class pm{static apply(e,t,i){var s=t.extensions;s&&s.KHR_materials_clearcoat&&(i.setDefine("USE_CLEARCOAT",!0),"clearcoatFactor"in(s=s.KHR_materials_clearcoat)&&(t.clearcoatFactor=s.clearcoatFactor,i.clearcoatFactor=t.clearcoatFactor),"clearcoatRoughnessFactor"in s)&&(t.clearcoatRoughnessFactor=s.clearcoatRoughnessFactor,i.clearcoatRoughnessFactor=t.clearcoatRoughnessFactor)}}class mm{static apply(e,t,i){t=t.extensions,t&&t.KHR_materials_emissive_strength?(i.emissiveIntensity=.5*t.KHR_materials_emissive_strength.emissiveStrength,i.emissiveMap==T.res.blackTexture&&(i.emissiveMap=T.res.whiteTexture)):i.emissiveIntensity=1}}class gm{static apply(e,t,i){t=t.extensions,t&&t.KHR_materials_unlit?i.supportLight=!0:i.supportLight=!1}}class _m{constructor(e){o(this,"gltf"),o(this,"subParser"),o(this,"_testCount",8),o(this,"_hasCastShadow",!1),this.gltf=e.gltf,this.subParser=e}async convertNodeToObject3D(e,t){var i,s=new pe;if(s.name=e.name,s[ge.GLTF_NODE_INDEX_PROPERTY]=e.nodeId,e.nodeObj=s,e.matrix&&(e.translation=[0,0,0],e.rotation=[0,0,0,1],e.scale=[1,1,1]),e.translation&&(s.transform.x=e.translation[0],s.transform.y=e.translation[1],s.transform.z=e.translation[2]),e.rotation&&((i=new _e).setFromArray(e.rotation),s.transform.localRotQuat=i),e.scale&&(s.transform.scaleX=e.scale[0],s.transform.scaleY=e.scale[1],s.transform.scaleZ=e.scale[2]),t.addChild(s),e.light&&this.convertLight(e,s),e.primitives&&this.convertprimitives(e,s),e.skeleton){var a=s.addComponent(Kr);if(a){a.skeleton=this.subParser.parseSkeleton(e.skeleton.skeleton);for(let h=0;h<this.gltf.animations.length;h++){var n=this.gltf.animations[h],n=(n.name||(n.name=h.toString()),this.subParser.parseSkeletonAnimation(a.skeleton,n));a.addAnimationClip(n)}}}return s}convertLight(e,t){switch(e.light.type){case"directional":var i=t.addComponent(Cl);t.name=e.light.name,i.intensity=.1*e.light.intensity,i.radius=Number.MAX_SAFE_INTEGER,i.dirFix=-1,this._hasCastShadow||(this._hasCastShadow=!0,i.castShadow=this._hasCastShadow),i.lightColor=e.light.color?new y(e.light.color[0],e.light.color[1],e.light.color[2]):new y(1,1,1,1),i.debug();break;case"point":0<this._testCount&&((i=t.addComponent(El)).name=e.light.name,i.intensity=e.light.intensity?8*e.light.intensity*2:1,i.radius=8,i.at=2,i.range=e.light.range||8,i.lightColor=e.light.color?new y(e.light.color[0],e.light.color[1],e.light.color[2]):new y(1,1,1,1)),this._testCount--;break;case"spot":i=t.addComponent(fm),i.name=e.light.name,i.intensity=5*e.light.intensity,i.radius=1,i.dirFix=-1,i.at=2,i.range=e.light.range||8,i.outerAngle=e.light.spot.outerConeAngle*ps,i.lightColor=e.light.color?new y(e.light.color[0],e.light.color[1],e.light.color[2]):new y(1,1,1,1)}}convertprimitives(e,t){for(let Q=0;Q<e.primitives.length;Q++){var i,s,a,n,h,l,u=e.primitives[Q],c=(u.modelName,u.material);c.name==null&&(c.name=mt());let ue,ye="matkey_"+c.name;if(c&&this.gltf.resources[ye])ue=this.gltf.resources[ye];else{let ie=ue=new xr;(this.gltf.resources[ye]=ie).name=c.name,u.material&&({baseColorTexture:c,baseColorFactor:d,metallicFactor:b,roughnessFactor:f,doubleSided:E,metallicRoughnessTexture:W,normalTexture:V,occlusionTexture:i,emissiveTexture:s,emissiveFactor:a,enableBlend:n,alphaCutoff:l}=u.material,h=ie=this.applyMaterialExtensions(u.material,ie),"enableBlend"in u.material&&(u.material.enableBlend?h.blendMode=Le.NORMAL:h.blendMode=Le.NONE,u.material.defines)&&u.material.defines.indexOf("ALPHA_BLEND")!=-1&&(h.blendMode=Le.ALPHA,h.transparent=!0),"alphaCutoff"in u.material&&0<l&&(h.alphaCutoff=l,h.blendMode=Le.NORMAL,h.transparent=!0),u.material.transformUV1&&(h.uvTransform_1=u.material.transformUV1),u.material.transformUV2&&(h.uvTransform_2=u.material.transformUV2),h.baseColor=new y(d[0],d[1],d[2],d[3]),h.roughness=f,h.metallic=b,h.doubleSide=E,c&&(h.baseMap=c),V&&(h.normalMap=V),W&&(h.maskMap=W),i&&W!=i&&(h.aoMap=i),s&&(h.emissiveMap=s),a&&(0<a[0]||0<a[1]||0<a[2])&&(h.emissiveMap&&h.emissiveMap==T.res.blackTexture&&(h.emissiveMap=T.res.whiteTexture),l=a[3]||1,h.emissiveColor=new y(a[0],a[1],a[2],l),h.emissiveIntensity=1),T.setting.material.materialDebug)&&h.debug()}var{attribArrays:d,modelName:f}=u;let oe;if(!d.indices.data){var m=[],_=d.position.data.length/3/3;for(let ie=0;ie<_;ie++){var g=3*ie;m.push(2+g),m.push(0+g),m.push(1+g)}d.indices={data:new Uint8Array(m),normalize:!1,numComponents:1}}if(!d.normal){var w=[],C=d.position.data.length/3;for(let ie=0;ie<C;ie++)w.push(0),w.push(0),w.push(0);d.normal={data:new Float32Array(w),normalize:!1,numComponents:3}}if(d.indices.data&&3<d.indices.data.length){var b=u.meshName(),E=(this.gltf.resources[b]?oe=this.gltf.resources[b]:(oe=oe||this.createGeometryBase(b,d,u),this.gltf.resources[b]=oe),new pe);if(E.name=f+Q,this.gltf.animations&&d[ne.joints0]!=null){if(oe=oe||this.createGeometryBase(f,d,u),this.gltf.resources[b]=oe,c=this.gltf.nodes[e.skin.skeleton],c.dnode&&c.dnode.nodeObj){var I=c.dnode.nodeObj.addComponent(Kr);if(I){I.skeleton=this.subParser.parseSkeleton(e.skin.skeleton);for(let ie=0;ie<this.gltf.animations.length;ie++){var N=this.gltf.animations[ie],N=(N.name||(N.name=ie.toString()),this.subParser.parseSkeletonAnimation(I.skeleton,N));I.addAnimationClip(N)}}}else c.dnode.skeleton=e.skin;var V=E.addComponent($n);V.castShadow=!0,V.castGI=!0,V.geometry=oe,V.material=ue,V.skinJointsName=this.parseSkinJoints(e.skin),V.skinInverseBindMatrices=e.skin.inverseBindMatrices}else{oe=oe||this.createGeometryBase(f,d,u),(this.gltf.resources[b]=oe).hasAttribute(ne.joints0)&&oe.vertexAttributeMap.delete(ne.joints0);var W=E.addComponent(Fe);W.castShadow=!0,W.castGI=!0,W.geometry=oe,W.material=ue}e.skin&&e.skin.defines,t.addChild(E)}}}createGeometryBase(e,t,i){var s=new ms,a=(s.name=e,s.morphTargetsRelative=i.morphTargetsRelative,i.targetNames);if(a&&0<a.length){var n=s.morphTargetDictionary={};for(let c=0;c<a.length;c++)n[a[c]]=c}if(s.morphTargetDictionary){var h=t.position.data.length/3,l=new Float32Array(h);for(let c=0;c<h;c++)l[c]=c;t.vIndex={data:l,normalize:!1,numComponents:1}}for(const c in t){var u=t[c];s.setAttribute(c,u.data)}return e=s.getAttribute(ne.indices),s.addSubGeometry({indexStart:0,indexCount:e.data.length,vertexStart:0,index:0}),s}applyMaterialExtensions(e,t){return pm.apply(this.gltf,e,t),gm.apply(this.gltf,e,t),mm.apply(this.gltf,e,t),t}parseSkinJoints(e){var t,i=[];for(t of e.joints){var s=this.gltf.nodes[t];i.push(s.name)}return i}}class an{constructor(){o(this,"currentSceneName"),o(this,"gltf"),o(this,"initUrl"),o(this,"_generator"),o(this,"_version"),o(this,"_BASE64_MARKER",";base64,"),o(this,"_cameraParser",null),o(this,"_meshParser",null),o(this,"_materialParser",null),o(this,"_skinParser",null),o(this,"_skeletonParser",null),o(this,"_converter",null)}get version(){return this.version||(this.gltf?this.gltf.asset?(this._version=this.gltf.asset.version,this.gltf.asset.minVersion&&(this._version+="\r minVersion"+this.gltf.asset.minVersion),this.version):this.errorMiss("asset"):(console.warn("glTF not loaded."),null))}async parse(a,s,i){this.gltf=s,this.initUrl=a;var{version:s,generator:a}=this.gltf.asset;return this._generator=a,s!=="2.0"?(console.error("GLTFParser only support glTF 2.0 for now! Received glTF version: "+this.version),!1):(a={nodes:await this.parseScene(i),animations:this.parseAnimations(),name:this.currentSceneName},this.convertToNode(a))}destory(){aa.unload(this.gltf),this.gltf=null}async parseScene(t){var t=t||this.gltf.scene||0,i=this.gltf.scenes[t];if("u"<typeof i)return this.errorMiss("scene",t);this.currentSceneName=i.name||"GLTF_NO_NAME_SCENE";var s=[],a=i.nodes;for(let h=0;h<a.length;h++){var n=await this.parseNode(a[h]);n&&s.push(n)}return s}async parseNode(e){var t=this.gltf.nodes[e];if(!t)return this.errorMiss("node",e);if(!t.isParsed){var{name:i,matrix:s,translation:a,rotation:n,scale:h}=t,l={name:i,matrix:s,translation:a,rotation:n,scale:h,nodeId:e,camera:null,primitives:null,skin:null,children:null,light:null};if(t.camera!==void 0&&(l.camera=this.parseCamera(t.camera)),t.mesh!==void 0&&(l.primitives=await this.parseMesh(t.mesh)),t.extensions!==void 0&&this.applyNodeExtensions(t,l),t.skin!==void 0&&(i=this.parseSkin(t.skin))&&(l.skin=i),l.children=[],t.children)for(let u=0;u<t.children.length;u++)l.children.push(await this.parseNode(t.children[u]));t.dnode=l,t.isParsed=!0}return t.dnode}errorMiss(e,t){throw new Error(e+t)}parseCamera(e){return this._cameraParser||(this._cameraParser=new sm(this.gltf)),this._cameraParser.parse(e)}async parseMesh(e){return this._meshParser||(this._meshParser=new am(this)),this._meshParser.parse(e)}async parseTexture(e){var t,i,s,a=this.gltf.textures[e];return a&&!a.dtexture&&(a&&a.source!=null?(t=this.gltf.images[a.source]).uri?(s=t.uri,s=rt.getURLName(s),a.dtexture=this.gltf.resources[s]):t.bufferView?(s=this.parseBufferView(t.bufferView),i=new Tr,s=new Blob([s],{type:t.mimeType}),await i.loadFromBlob(s),a.dtexture=i):a.dtexture=this.gltf.resources[t.name]:a.name&&(s=rt.getURLName(a.name),a.dtexture=this.gltf.resources[s])),a.dtexture||console.log("miss texture , please check texture!",e,a),a.dtexture}async parseMaterial(e){return this._materialParser||(this._materialParser=new nm(this)),this._materialParser.parse(e)}parseAnimations(){return[]}async parseObject3D(e,t){return this._converter||(this._converter=new _m(this)),this._converter.convertNodeToObject3D(e,t)}parseSkeleton(e){return this._skeletonParser||(this._skeletonParser=new eh(this)),this._skeletonParser.parse(e)}parseSkeletonAnimation(e,t){return this._skeletonParser||(this._skeletonParser=new eh(this)),this._skeletonParser.parseSkeletonAnimation(e,t)}async trivarse(e,t){for(let s=0;s<t.length;s++){var i=await this.parseObject3D(t[s],e);await this.trivarse(i,t[s].children)}}async convertToNode(e){var t=new pe,i=(t.name=e.name,e.nodes);return e.animations,await this.trivarse(t,i),{rootNode:t,textures:[],animations:void 0,cameras:[]}}parseSkin(e){return this._skinParser||(this._skinParser=new om(this)),this._skinParser.parse(e)}parseAccessor(e){var t=this.gltf.accessors[e];if(!t)return this.errorMiss("accessor",e);if(!t.isParsed){t.isParsed=!0,t.daccessor=!1;var e=!!t.normalized,i=this.gltf.bufferViews[t.bufferView],s=i&&i.byteStride,a=Qo(t.componentType);let m=1;switch(t.type){case"SCALAR":m=1;break;case"VEC2":m=2;break;case"VEC3":m=3;break;case"VEC4":case"MAT2":m=4;break;case"MAT3":m=9;break;case"MAT4":m=16;break;default:m=0}if(m===0)return console.error("glTF has unknown data type in accessor: "+t.type),!1;var n=m*a.BYTES_PER_ELEMENT;let _;if(i!==void 0){if(!(_=this.parseBufferView(t.bufferView)))return t.daccessor}else _=new Uint8Array(n*t.count).buffer;let g=this.getTypedArrayFromArrayBuffer(_,s,t.byteOffset||0,a,m,t.count);if(t.sparse){var{count:i,indices:n,values:s}=t.sparse,c=(g=new a(g),n.byteOffset||0),u=this.gltf.bufferViews[n.bufferView],h=Qo(n.componentType),n=this.parseBufferView(n.bufferView),l=this.getTypedArrayFromArrayBuffer(n,u.byteStride,c,h,1,i),n=s.byteOffset||0,u=this.gltf.bufferViews[s.bufferView],c=this.parseBufferView(s.bufferView),d=this.getTypedArrayFromArrayBuffer(c,u.byteStride,n,a,m,i);for(let E=0;E<l.length;E++)g.set(d.slice(E*m,E*m+m),l[E]*m)}t.computeResult={typedArray:g,arrayType:a,numComponents:m},t.daccessor={data:g,numComponents:m,normalize:e}}return t.daccessor}getTypedArrayFromArrayBuffer(e,t,i,s,a,n){let h;var l=a*s.BYTES_PER_ELEMENT;if(t&&l!==t){h=new s(a*n);for(let c=0;c<n;c++){var u=new s(e,i+c*t,a);for(let d=0;d<a;d++)h[c*a+d]=u[d]}}else h=new s(e,i,n*a);return h}parseBufferView(e){var t,i,s,a=this.gltf.bufferViews[e];return a?(!a.isParsed&&(a.isParsed=!0,a.dbufferView=!1,s=this.parseBuffer(a.buffer))&&({byteOffset:t,byteLength:i}=a,s=new Uint8Array(s,t||0,i),a.dbufferView=new Uint8Array(s).buffer),a.dbufferView):this.errorMiss("bufferView",e)}parseBuffer(e){var t=this.gltf.buffers[e];if(!t)return this.errorMiss("buffer",e);if(!t.isParsed)if(t.isParsed=!0,t.dbuffer=!1,t.uri.substring(0,5)!=="data:"){var i=t.uri,s=this.gltf.resources[i];s?s.byteLength===t.byteLength?t.dbuffer=this.gltf.resources[i]:console.error(`load gltf resource "${i}" at buffers[${e} failed, ArrayBuffer.byteLength not equals buffer's byteLength]`):console.error(`load gltf resource "${i}" at buffers[${e}] failed`)}else{var s=t.uri.indexOf(this._BASE64_MARKER)+this._BASE64_MARKER.length,a=window.atob(t.uri.substring(s)),n=new Uint8Array(a.length);for(let l=0;l<a.length;l++)n[l]=a.charCodeAt(l);t.dbuffer=n.buffer}return t.dbuffer}getLight(e){return this.gltf.extensions.KHR_lights_punctual.lights[e]}applyNodeExtensions(e,t){e=e.extensions,e.KHR_lights_punctual&&this.gltf.extensions.KHR_lights_punctual&&(t.light=this.getLight(e.KHR_lights_punctual.light))}}class vm{constructor(){o(this,"magic"),o(this,"version"),o(this,"length")}}class xm{constructor(){o(this,"chunkLength"),o(this,"chunkType"),o(this,"chunkData")}}class Zn extends jr{constructor(){super(...arguments),o(this,"_gltf")}async parseBuffer(i){var t=new Uint8Array(i),i=(t.pos=0,this.parseHeader(t));if(i.magic!=1179937895)return console.error("invalid GLB file"),!1;if(i.version!==2)return console.error("GLBParser only support glTF 2.0 for now! Received glTF version: "+i.version),!1;for(var s=[];t.pos<t.length;){var a=this.parseChunk(t);s.push(a)}if(s[0].chunkType!=1313821514)return console.error("invalid GLBChunk"),!1;let n=performance.now(),h="",l=s[0].chunkData;for(let _=0;_<l.length;_+=65535){var u=l.length-_,u=Math.min(u,65535),u=l.subarray(_,_+u);h+=String.fromCharCode(...u)}console.log(performance.now()-n),i=JSON.parse(h),this._gltf=new rn,this._gltf={...this._gltf,...i},this._gltf.resources={};for(let _=0;_<this._gltf.buffers.length;_++){var c=this._gltf.buffers[_];c.isParsed=!0,c.dbuffer=s[_+1].chunkData.buffer}if(this._gltf.images)for(let _=0;_<this._gltf.images.length;_++){var d=this._gltf.images[_],f=(d.name=d.name||"bufferView_"+d.bufferView.toString(),this._gltf.bufferViews[d.bufferView]),m=this._gltf.buffers[f.buffer],m=new Uint8Array(m.dbuffer,f.byteOffset,f.byteLength),f=new Blob([m],{type:d.mimeType}),m=new Tr;await m.loadFromBlob(f),m.name=d.name,this._gltf.resources[d.name]=m}return i=await new an().parse(this.initUrl,this._gltf,this._gltf.scene),i?(this.data=i.rootNode,i.rootNode):null}async parseJsonAndBuffer(e,t){if(this._gltf=new rn,this._gltf={...this._gltf,...e},this._gltf.resources={},e=this._gltf.buffers[0],e.isParsed=!0,e.dbuffer=t,this._gltf.images)for(let n=0;n<this._gltf.images.length;n++){var i=this._gltf.images[n],s=(i.name=i.name||"bufferView_"+i.bufferView.toString(),this._gltf.bufferViews[i.bufferView]),a=this._gltf.buffers[s.buffer],a=new Uint8Array(a.dbuffer,s.byteOffset,s.byteLength),s=new Blob([a],{type:i.mimeType}),a=new Tr;await a.loadFromBlob(s),a.name=i.name,this._gltf.resources[i.name]=a}return e=await new an().parse(this.initUrl,this._gltf,this._gltf.scene),e?(this.data=e.rootNode,e.rootNode):null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}parseHeader(e){var i=e.pos,t=new vm,i=new Uint32Array(e.buffer,i,3);return e.pos+=i.byteLength,t.magic=i[0],t.version=i[1],t.length=i[2],t}parseChunk(e){var s=e.pos,t=new xm,i=new Uint32Array(e.buffer,s,2),s=e.pos+=i.byteLength,a=(t.chunkLength=i[0],t.chunkType=i[1],t.chunkData=new Uint8Array(e.buffer,s,t.chunkLength),new Uint8Array(t.chunkLength));for(let n=0;n<t.chunkLength;n++)a[n]=t.chunkData[n];return t.chunkData=a,e.pos+=t.chunkLength,t}}o(Zn,"format","bin");class Rl extends jr{constructor(){super(...arguments),o(this,"textData",""),o(this,"source_vertices"),o(this,"source_normals"),o(this,"source_tangents"),o(this,"source_textureCoords"),o(this,"matLibs"),o(this,"geometrys"),o(this,"activeGeo"),o(this,"facesMaterialsIndex"),o(this,"mtl"),o(this,"mtlUrl")}async parserString(e){return this.source_vertices=[],this.source_normals=[],this.source_tangents=[],this.source_textureCoords=[],this.matLibs={},this.geometrys={},this.textData=e,await Promise.all([this.parserOBJ(),this.loadMTL()]),this.parser_mesh(),"null"}applyVector2(e,t,i){t[e]&&0<t[e].length?(i.push(t[e][0]),i.push(t[e][1])):(i.push(0),i.push(0))}applyVector3(e,t,i){i.push(t[e][0]),i.push(t[e][1]),i.push(t[e][2])}applyVector4(e,t,i){i.push(t[e][0]),i.push(t[e][1]),i.push(t[e][2]),i.push(t[e][3])}async loadMTL(){let e=await new Dt().loadTxt(this.baseUrl+this.mtlUrl),t=e.data,i,s=t.split(`\r
`);for(let l=0;l<s.length;l++){let u=s[l];var a=u.indexOf("#"),a=(u=(u=a!=-1?u.substring(0,a):u).trim()).split(/\s+/);a[0]==="newmtl"?(i={name:a[1]},this.matLibs[a[1]]=i):a[0].indexOf("map_")!=-1?(i[a[0]]=a[1],i.textures||(i.textures=[a[a.length-1]]),i.textures.push(a[a.length-1])):a.length==2?i[a[0]]=Number(a[1]):a.length==3?i[a[0]]=[Number(a[1]),Number(a[2])]:a.length==4&&(i[a[0]]=[Number(a[1]),Number(a[2]),Number(a[3])])}for(const l in this.matLibs){var n=this.matLibs[l];if(n.textures&&0<n.textures.length)for(let u=0;u<n.textures.length;u++){var h=rt.normalizePath(this.baseUrl+n.textures[u]);await T.res.loadTexture(h)}}return!0}async load_textures(){}parserLine(e){var t=e.indexOf("#"),i=(t!=-1&&(e.indexOf("# object")!=-1&&(s=(i=e.split(/\s+/))[1],a=i[2],this.activeGeo={type:s,name:a[1],source_mat:"",source_faces:[]},this.geometrys[a]=this.activeGeo),e=e.substring(0,t)),(e=e.trim()).split(/\s+/));if(i[0]==="v"){var s=[Number(i[1]),Number(i[2]),Number(i[3]),i[4]?1:Number(i[4])];this.source_vertices.push(s)}else if(i[0]==="vt"){var a=[Number(i[1]),Number(i[2]),i[3]?1:Number(i[3])];this.source_textureCoords.push(a)}else if(i[0]==="vn")t=[Number(i[1]),Number(i[2]),Number(i[3])],this.source_normals.push(t);else if(i[0]==="f"){for(var n={indices:[],texture:[],normal:[]},h=1;h<i.length;++h){var l=i[h].indexOf("//"),u=i[h].split(/\W+/);0<l?(n.indices.push(u[0]),n.normal.push(u[1])):u.length===1?n.indices.push(u[0]):u.length===2?(n.indices.push(u[0]),n.texture.push(u[1])):u.length===3&&(n.indices.push(u[0]),n.texture.push(u[1]),n.normal.push(u[2]))}this.activeGeo.source_faces.push(n)}else i[0]==="usemtl"?this.activeGeo.source_mat=i[1]:i[0]==="mtllib"&&(this.mtlUrl=i[1])}async parserOBJ(){var e=this.textData.split(`\r
`);for(let i=0;i<e.length;i++){var t=e[i];this.parserLine(t)}return!(this.textData="")}async parser_mesh(){for(const C in this.geometrys){var e=this.geometrys[C];e.vertex_arr=[],e.normal_arr=[],e.uv_arr=[],e.indeice_arr=[];let b=0;for(let E=0;E<e.source_faces.length;E++){var t=e.source_faces[E],i=parseInt(t.indices[0])-1,s=parseInt(t.indices[1])-1,a=parseInt(t.indices[2])-1,n=parseInt(t.normal[0])-1,h=parseInt(t.normal[1])-1,l=parseInt(t.normal[2])-1,u=parseInt(t.texture[0])-1,c=parseInt(t.texture[1])-1,d=parseInt(t.texture[2])-1;this.applyVector3(i,this.source_vertices,e.vertex_arr),this.applyVector3(n,this.source_normals,e.normal_arr),this.applyVector2(u,this.source_textureCoords,e.uv_arr),e.indeice_arr[b]=b++,this.applyVector3(s,this.source_vertices,e.vertex_arr),this.applyVector3(h,this.source_normals,e.normal_arr),this.applyVector2(c,this.source_textureCoords,e.uv_arr),e.indeice_arr[b]=b++,this.applyVector3(a,this.source_vertices,e.vertex_arr),this.applyVector3(l,this.source_normals,e.normal_arr),this.applyVector2(d,this.source_textureCoords,e.uv_arr),e.indeice_arr[b]=b++,3<t.indices.length&&(s=parseInt(t.indices[3])-1,h=parseInt(t.normal[3])-1,c=parseInt(t.texture[3])-1,this.applyVector3(i,this.source_vertices,e.vertex_arr),this.applyVector3(n,this.source_normals,e.normal_arr),this.applyVector2(u,this.source_textureCoords,e.uv_arr),e.indeice_arr[b]=b++,this.applyVector3(a,this.source_vertices,e.vertex_arr),this.applyVector3(l,this.source_normals,e.normal_arr),this.applyVector2(d,this.source_textureCoords,e.uv_arr),e.indeice_arr[b]=b++,this.applyVector3(s,this.source_vertices,e.vertex_arr),this.applyVector3(h,this.source_normals,e.normal_arr),this.applyVector2(c,this.source_textureCoords,e.uv_arr),e.indeice_arr[b]=b++)}var f=new pe;for(const E in this.geometrys){var g=this.geometrys[E],m=new ms,_=(m.setIndices(new Uint32Array(g.indeice_arr)),m.setAttribute(ne.position,new Float32Array(g.vertex_arr)),m.setAttribute(ne.normal,new Float32Array(g.normal_arr)),m.setAttribute(ne.uv,new Float32Array(g.uv_arr)),m.setAttribute(ne.TEXCOORD_1,new Float32Array(g.uv_arr)),m.addSubGeometry({indexStart:0,indexCount:g.indeice_arr.length,vertexStart:0,index:0}),new xr),g=this.matLibs[g.source_mat],g=(_.baseMap=T.res.getTexture(rt.normalizePath(this.baseUrl+g.map_Kd)),new pe),w=g.addComponent(Fe);w.geometry=m,w.material=_,f.addChild(g)}this.data=f}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}o(Rl,"format","text");let ym=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        var srcId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x * 2u), i32(GlobalInvocationID.y * 2u));
        textureStore(outputTexture, dstId, textureLoad(inputTexture, srcId, 0));
    }
`,bm=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    fn repeat_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = max + id;
        }
        if (id >= max) {
            ret = id - max;
        }
        return ret;
    }

    fn clamp_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = 0;
        }
        if (id >= max) {
            ret = max - 1;
        }
        return ret;
    }

    fn blur(idx: u32) -> vec4 < f32 > {
        var id: vec2<i32>;
        id.y = i32(idx) / size.srcWidth;
        id.x = i32(idx) - i32(id.y) * size.srcWidth;
        var _BlurSpread: i32 = 1;
        var result = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        let g: array < f32, 3u > = array<f32, 3u > (0.4026, 0.2442, 0.0545);
        var uv: vec2<i32>;
        for(var h: i32 = 0; h< 5; h = h + 1) {
        let offsetU: i32 = (h - 2) * _BlurSpread;
        uv.x = id.x + offsetU;
        uv.x = clamp_i32(uv.x, size.srcWidth);
        for (var v: i32 = 0; v < 5; v = v + 1) {
            let offsetV: i32 = (v - 2) * _BlurSpread;
            uv.y = id.y + offsetV;
            uv.y = clamp(uv.y, 0, size.srcHeight);
            let weightU: i32 = abs(h - 2);
            let weightV: i32 = abs(v - 2);
            let resultWeight: f32 = g[weightU] * g[weightV];
            var colorf32: vec4<f32> = textureLoad(inputTexture, uv, 0);
            let sampleColor: vec4<f32> = vec4<f32>(colorf32 * resultWeight);
            result = result + sampleColor;
        }
    }

    return result;
    }

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        let srcIdx = i32(uv.y) * size.srcWidth + i32(uv.x);
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        textureStore(outputTexture, dstId, blur(u32(srcIdx)));
    }
`;class wm{static blurImageFromTexture(u,t,i,a){var l=D.device,a=a?bm:ym,a=l.createComputePipeline({layout:"auto",compute:{module:l.createShaderModule({code:a}),entryPoint:"main"}}),n=l.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=(l.queue.writeBuffer(n,0,new Uint32Array([u.width,u.height,t,i])),l.createTexture({size:[t,i,1],mipLevelCount:1,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,label:"blurImageFromTexture"})),u=[{binding:0,resource:{buffer:n,size:16}},{binding:1,resource:u.gpuTexture.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:h.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})}],l=l.createBindGroup({layout:a.getBindGroupLayout(0),entries:u}),u=P.beginCommandEncoder(),c=u.beginComputePass();return c.setPipeline(a),c.setBindGroup(0,l),c.dispatchWorkgroups(Math.floor(t/8),Math.floor(i/8)),c.end(),P.endCommandEncoder(u),n.destroy(),h}}class Qn extends Zt{constructor(){super(4,4),o(this,"width",4),o(this,"height",4),o(this,"depthOrArrayLayers",6),o(this,"visibility",GPUShaderStage.FRAGMENT),o(this,"textureBindingLayout",{viewDimension:"cube",multisampled:!1}),o(this,"samplerBindingLayout",{type:"filtering"}),this.addressModeU=qt.clamp_to_edge,this.addressModeV=qt.clamp_to_edge,this.addressModeW=qt.clamp_to_edge,this.magFilter=this.minFilter="linear",this.mipmapFilter="linear",this.visibility=GPUShaderStage.FRAGMENT}createTextureDescriptor(e,t,i,s,a=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT,n=1){this.width=e,this.height=t,this.format=s,this.usage=a,this.textureDescriptor={size:{width:e,height:t,depthOrArrayLayers:6},mipLevelCount:i,format:s,usage:a,dimension:"2d"},this.viewDescriptor=1<n?{dimension:"cube-array"}:{dimension:this.textureBindingLayout.viewDimension}}}const Dl=class{static createFace(a,e,n,h){var l=D.device,s=(this.pipeline==null&&(this.pipeline=l.createComputePipeline({layout:"auto",compute:{module:l.createShaderModule({code:Dl.createCube}),entryPoint:"main"}})),this.pipeline),a=(this.configBuffer||(this.configBuffer=l.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),l.queue.writeBuffer(this.configBuffer,0,new Uint32Array([a,0,0,0])),this.blurSettingBuffer||(this.blurSettingBuffer=l.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),l.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([0,0,0,0])),[{binding:0,resource:{buffer:this.configBuffer,size:16}},{binding:1,resource:n.getGPUView()},{binding:2,resource:h.getGPUView()}]),n=l.createBindGroup({layout:s.getBindGroupLayout(0),entries:a}),h=P.beginCommandEncoder(),l=h.beginComputePass();l.setPipeline(s),l.setBindGroup(0,n),l.dispatchWorkgroups(e/8,e/8),l.end(),P.endCommandEncoder(h)}};let Yi=Dl;o(Yi,"createCube",`

struct SettingUniform {
  faceIndex : i32,
  srcHeight : i32,
  dstWidth : i32,
  dstHeight : i32
};

@group(0) @binding(0) var<uniform> settingUniform : SettingUniform;
@group(0) @binding(1) var inputTex : texture_2d<f32>;
@group(0) @binding(2) var outTex : texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
  let coord = vec2<i32>(GlobalInvocationID.xy);
  
  let outTexSize = textureDimensions(outTex).xy;
  let outTexel = 1.0 / vec2<f32>(outTexSize - 1);
  
  let uv_0 = vec2<f32>(coord) * outTexel;
  var oc = samplePixel(settingUniform.faceIndex, uv_0);
  textureStore(outTex, coord, oc);
}

fn samplePixel(face:i32, uv01:vec2<f32>) -> vec4<f32> {
    let rectangle_v2_f32 = round(vec2<f32>(0.25, 0.33333) * vec2<f32>(textureDimensions(inputTex).xy));
    let rectangle = vec2<i32>(rectangle_v2_f32);
    
    var offsetIndex = vec2<i32>(0);
    if(face == 0){
        offsetIndex.x = 2;
        offsetIndex.y = 1;
    }else if(face == 1){
        offsetIndex.x = 0;
        offsetIndex.y = 1;
    }else if(face == 2){
        offsetIndex.x = 1;
        offsetIndex.y = 0;
    }else if(face == 3){
        offsetIndex.x = 1;
        offsetIndex.y = 2;
    }else if(face == 4){
        offsetIndex.x = 1;
        offsetIndex.y = 1;
    }else if(face == 5){
        offsetIndex.x = 3;
        offsetIndex.y = 1;
    }
    
    let coordOffset = rectangle * offsetIndex;
    let coordIndex = vec2<i32>(vec2<f32>(rectangle - 1) * uv01);
    var oc = textureLoad(inputTex, coordOffset + coordIndex, 0);
    return oc;
}
`),o(Yi,"configBuffer",null),o(Yi,"blurSettingBuffer",null),o(Yi,"pipeline");class th extends Qn{constructor(){super(),o(this,"_images"),o(this,"_url"),this.useMipmap=!0}generateImages(e){var t=D.device;this.width=this.height=32,"width"in e[0]&&(this.width=this.height=e[0].width);let i=Math.min(this.width,this.height);for(this.mipmapCount=1;16<i;)i/=2,this.mipmapCount++;this.textureBindingLayout.viewDimension="cube",this.samplerBindingLayout.type="filtering",this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format),this.textureDescriptor.size={width:this.width,height:this.height,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuTexture=t.createTexture(this.textureDescriptor);let s=[],a,n=this.width,h=this.height;if(e[0]instanceof Zt){for(let d=0;d<6;d++){var l=e[d];s[d]=l.getGPUTexture()}this.uploadMipmapGPUTexture(0,this.width,this.width,s)}else{this.uploadBaseImages(this.width,e);for(let d=0;d<6;d++){var u=new Tr(!1);u.format=this.format,u.source=e[d],s[d]=u.getGPUTexture()}}for(let d=1;d<this.mipmapCount;d++){a=s,s=[];var c={width:n,height:h,gpuTexture:null};n/=2,h/=2;for(let f=0;f<6;f++)c.gpuTexture=a[f],s[f]=wm.blurImageFromTexture(c,n,h,!1);this.uploadMipmapGPUTexture(d,n,h,s)}this.gpuSampler=t.createSampler(this)}uploadBaseImages(e,t){var i=D.device,s=P.beginCommandEncoder();for(let a=0;a<6;a++)i.queue.copyExternalImageToTexture({source:t[a]},{texture:this.gpuTexture,mipLevel:0,origin:{x:0,y:0,z:a}},{width:e,height:e,depthOrArrayLayers:1});P.endCommandEncoder(s)}uploadMipmapGPUTexture(e,t,i,s){var a=P.beginCommandEncoder();for(let n=0;n<6;n++)a.copyTextureToTexture({texture:s[n],mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.gpuTexture,mipLevel:e,origin:{x:0,y:0,z:n}},{width:t,height:i,depthOrArrayLayers:1});P.endCommandEncoder(a)}get images(){return this._images}set images(e){if(this._images=e,this._images[0]instanceof HTMLImageElement){let t=[],i=6,s=this;for(let a=0;a<6;a++)(function(n,h){h.decode().then(async()=>{t[n]=await createImageBitmap(h),--i==0&&s.generateImages(t)})})(a,this._images[a])}else(this._images instanceof HTMLCanvasElement||this._images instanceof ImageBitmap)&&this.generateImages(this._images)}async load(e){this._url=e;let t=6,i=[],s=(this.format=ae.rgba8unorm,this);for(let l=0;l<6;l++){{a=void 0,n=void 0,h=void 0;var a=l,n=e[l],h=document.createElement("img");h.src=n,h.setAttribute("crossOrigin",""),await h.decode(),i[a]=await createImageBitmap(h),--t==0&&s.generateImages(i)}await 0}return!0}async loadStd(e){this._url=e,this.format=ae.rgba8unorm;var t=document.createElement("img"),i=(t.src=e,t.setAttribute("crossOrigin",""),await t.decode(),new Tr(!1)),s=(i.name=rt.getURLName(e),i.format="rgba8unorm",i.source=await createImageBitmap(t),Math.round(Math.log2(i.width/4))),s=Math.pow(2,s),a=(this.width=this.height=s,[]);for(let h=0;h<6;h++){var n=new Tt(s,s,this.format,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING);n.name="face "+h,a.push(n),Yi.createFace(h,this.width,i,n)}return this.generateImages(a),!0}}var Sm=(r=>(r[r.Left=0]="Left",r[r.Right=1]="Right",r[r.Bottom=2]="Bottom",r[r.Top=3]="Top",r[r.Back=4]="Back",r[r.Front=5]="Front",r))(Sm||{});class Ll{static getRotationToFace(e){var t=_e.identity().clone(),i=new p,s=new q().identity(),a=new p;switch(e){case 3:i.set(0,-1,0),a.set(0,0,-1);break;case 2:i.set(0,1,0),a.set(0,0,1);break;case 1:i.set(1,0,0),a.set(0,1,0);break;case 0:i.set(-1,0,0),a.set(0,1,0);break;case 4:i.set(0,0,-1),a.set(0,1,0);break;case 5:return _e.identity()}return s.lookAt(new p,i,a),t.setFromRotationMatrix(s),t}}let Tm=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
  @group(0) @binding(2) var inputTexSampler : sampler;
  @group(0) @binding(3) var inputTex : texture_2d<f32>;

  @group(1) @binding(0) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;

  fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
      var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
      //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
      uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
      uv = uv + vec2<f32>(0.5);
      uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
      return uv;
  }


  fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
      let x:f32 = position.x;
      let y:f32 = position.y;
      let z:f32 = position.z;

      let qx:f32 = q.x;
      let qy:f32 = q.y;
      let qz:f32 = q.z;
      let qw:f32 = q.w;

      let ix:f32 = qw * x + qy * z - qz * y;
      let iy:f32 = qw * y + qz * x - qx * z;
      let iz:f32 = qw * z + qx * y - qy * x;
      let iw:f32 = -qx * x - qy * y - qz * z;

      var ret: vec3<f32>;
      ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

      return ret;
  }

  fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
      var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
      var halfSize:f32 = f32(size.dstWidth / 2);
      var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
      worldDirection = normalize(worldDirection);
      worldDirection = applyQuaternion(worldDirection, quaternion);
      return worldDirection;
  }

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let coord = vec2<i32>(GlobalInvocationID.xy);
    let quaternion = faceRotation[GlobalInvocationID.z];
    var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
    let uv_f32:vec2<f32> = SampleSphericalMap(worldDirection);
    let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
    textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
  }
`,Cm=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage, read> tex_in: array<vec4<f32>>;
  @group(0) @binding(2) var outputBuffer : texture_storage_2d<rgba16float, write>;

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let fragCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
    var oc:vec4<f32> = tex_in[fragCoord.y * size.srcWidth + fragCoord.x] / 256.0;
    var e = pow(2.0, oc.w * 255.0 - 128.0);
    oc = oc * e;
    oc = scaleByThreshold(oc, 40.0);
    textureStore(outputBuffer, fragCoord , vec4<f32>(oc.xyz, 1.0) );
  }

  fn scaleByThreshold(color:vec4<f32>, threshold:f32) -> vec4<f32>{
    var oc = color;
    let brightness = length(vec3<f32>(oc.xyz));
    var scale = brightness / threshold;
    if(scale > 1.0){
        scale = 1.0 / pow(scale, 0.7);
        oc = oc * scale;
    }
    oc.a = 1.0;
    return oc;
  }
`;const _t=class{static convertRGBE2RGBA(r,s){var a=D.device,t=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:Cm}),entryPoint:"main"}}),i=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),n=(a.queue.writeBuffer(i,0,new Uint32Array([r.width,r.height,r.width,r.height])),a.createBuffer({size:s.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),n=(a.queue.writeBuffer(n,0,s),[{binding:0,resource:{buffer:i,size:16}},{binding:1,resource:{buffer:n,size:s.byteLength}},{binding:2,resource:r.getGPUView()}]),s=a.createBindGroup({layout:t.getBindGroupLayout(0),entries:n}),a=P.beginCommandEncoder(),n=a.beginComputePass();n.setPipeline(t),n.setBindGroup(0,s),n.dispatchWorkgroups(Math.floor(r.width/8),Math.floor(r.height/8)),n.end(),P.endCommandEncoder(a),i.destroy()}static makeTextureCube(n,e,l){var h=D.device,i=(_t.makeFaceTexturePipeline||(_t.makeFaceTexturePipeline=h.createComputePipeline({layout:"auto",compute:{module:h.createShaderModule({code:Tm}),entryPoint:"main"}})),_t.makeFaceTexturePipeline);if(_t.configBuffer||(_t.configBuffer=h.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),h.queue.writeBuffer(_t.configBuffer,0,new Uint32Array([n.width,n.height,e,e])),!_t.quaternionBuffer){_t.quaternionBuffer=h.createBuffer({size:576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});var s=new Float32Array(24);for(let c=0;c<6;c++){var a=Ll.getRotationToFace(c);s[4*c+0]=a.x,s[4*c+1]=a.y,s[4*c+2]=a.z,s[4*c+3]=a.w}h.queue.writeBuffer(_t.quaternionBuffer,0,s)}var n=[{binding:0,resource:{buffer:_t.configBuffer,size:16}},{binding:1,resource:{buffer:_t.quaternionBuffer,size:96}},{binding:2,resource:n.gpuSampler},{binding:3,resource:n.getGPUView()}],l=[{binding:0,resource:l}],n=h.createBindGroup({layout:i.getBindGroupLayout(0),entries:n}),h=h.createBindGroup({layout:i.getBindGroupLayout(1),entries:l}),l=P.beginCommandEncoder(),u=l.beginComputePass();u.setPipeline(i),u.setBindGroup(0,n),u.setBindGroup(1,h),u.dispatchWorkgroups(e/8,e/8,6),u.end(),P.endCommandEncoder(l)}};let Yr=_t,Em=(o(Yr,"makeFaceTexturePipeline"),o(Yr,"configBuffer"),o(Yr,"quaternionBuffer"),`
    struct ImageSize {
        srcWidth : i32,
        srcHeight : i32,
        dstWidth : i32,
        dstHeight : i32
    };
    
    @group(0) @binding(0) var<uniform> size : ImageSize;
    @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
    @group(0) @binding(2) var inputTexSampler : sampler;
    @group(0) @binding(3) var inputTex : texture_2d<f32>;
    
    @group(1) @binding(0) var<uniform> blurSetting : vec4<f32>;
    @group(1) @binding(1) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;
    
    var<private> PI: f32 = 3.14159265359;
    
    fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
        let x:f32 = position.x;
        let y:f32 = position.y;
        let z:f32 = position.z;
    
        let qx:f32 = q.x;
        let qy:f32 = q.y;
        let qz:f32 = q.z;
        let qw:f32 = q.w;
    
        let ix:f32 = qw * x + qy * z - qz * y;
        let iy:f32 = qw * y + qz * x - qx * z;
        let iz:f32 = qw * z + qx * y - qy * x;
        let iw:f32 = -qx * x - qy * y - qz * z;
    
        var ret: vec3<f32>;
        ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
        return ret;
    }
    
    fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
        var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
        var halfSize:f32 = f32(size.dstWidth / 2);
        var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
        worldDirection = normalize(worldDirection);
        worldDirection = applyQuaternion(worldDirection, quaternion);
        return worldDirection;
    }
    
    fn VanDerCorpus(n0:u32, base0:u32) -> f32
    {
        var n = n0;
        var base = base0;
        var invBase:f32 = 1.0 / f32(base);
        var denom:f32   = 1.0;
        var result:f32  = 0.0;
    
        for(var i:u32 = 0u; i < 32u; i = i + 1u)
        {
            if(n > 0u)
            {
                denom   = f32(n) % 2.0;
                result = result + denom * invBase;
                invBase = invBase / 2.0;
                n       = u32(f32(n) / 2.0);
            }
        }
    
        return result;
    }
    
    fn HammersleyNoBitOps(i:u32, N:u32) -> vec2<f32>
    {
        return vec2(f32(i)/f32(N), VanDerCorpus(i, 2u));
    }
    
    fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
    {
        // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
        var bits = (i << 16u) | (i >> 16u);
        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
        var rdi = f32(bits) * 2.3283064365386963e-10;
        return vec2<f32>(f32(i) /f32(N), rdi);
    }
    
    fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
    {
        var a = roughness*roughness;
    
        var phi = 2.0 * PI * Xi.x;
        var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
        var sinTheta = sqrt(1.0 - cosTheta*cosTheta);
    
        // from spherical coordinates to cartesian coordinates
        var H:vec3<f32>;
        H.x = cos(phi) * sinTheta;
        H.y = sin(phi) * sinTheta;
        H.z = cosTheta;
    
        // from tangent-space vector to world-space sample vector
        var up:vec3<f32>;
        if(abs(N.z) < 0.999)
        {
            up = vec3<f32>(0.0, 0.0, 1.0);
        }
        else
        {
            up = vec3<f32>(1.0, 0.0, 0.0);
        }
        var tangent:vec3<f32>  = normalize(cross(up, N));
        var bitangent:vec3<f32> = cross(N, tangent);
        var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
        return normalize(sampleVec);
    }
    
    fn multiSample(localPos:vec3<f32>, roughness:f32) -> vec4<f32>
    {
        var N: vec3<f32> = normalize(localPos);
        var R: vec3<f32> = N;
        var V: vec3<f32> = R;
    
        let SAMPLE_COUNT:u32 = 1024u;
        var totalWeight:f32 = 0.0;
        var prefilteredColor:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
        for(var i:u32 = 0u; i < SAMPLE_COUNT; i = i + 1u)
        {
            var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
            var H :vec3<f32> = ImportanceSampleGGX(Xi, N, roughness);
            var L :vec3<f32> = normalize(2.0 * dot(V, H) * H - V);
    
            var NdotL:f32 = max(dot(N, L), 0.0);
            if(NdotL > 0.0)
            {
                var att = 1.0 ;//( f32(SAMPLE_COUNT - i) / f32(SAMPLE_COUNT)) ;
    
                prefilteredColor = prefilteredColor + sampleColor(L).rgb * NdotL;
                prefilteredColor = prefilteredColor * att ;
                totalWeight      = totalWeight + NdotL;
            }
        }
        prefilteredColor = prefilteredColor / totalWeight;
    
        return vec4<f32>(prefilteredColor, 1.0);
    }
    
    fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
        var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
        //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
        uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
        uv = uv + vec2<f32>(0.5);
        uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
        return uv;
    }
    
    fn sampleColor(d:vec3<f32>) -> vec4<f32>
    {
        let uv_f32:vec2<f32> = SampleSphericalMap(d);
        let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
        //let dir = vec3<f32>(-d.x, -d.y, d.z);
        //var oc:vec4<f32> = textureSampleLevel(cubeMap, cubeMapSampler, dir, 0.0);
        return oc;
    }
    
    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let coord = vec2<i32>(GlobalInvocationID.xy);
        let quaternion = faceRotation[GlobalInvocationID.z];
        var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
        var oc:vec4<f32> = multiSample(worldDirection, blurSetting.x);
        textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
    }

`);class hi{static importantSample(e,t,i,s){var a=D.device,n=(this.pipeline==null&&(this.pipeline=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:Em}),entryPoint:"main"}})),this.pipeline);if(this.configBuffer||(this.configBuffer=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.configBuffer,0,new Uint32Array([e.width,e.height,t,t])),!this.quaternionBuffer){this.quaternionBuffer=a.createBuffer({size:576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});var h=new Float32Array(24);for(let u=0;u<6;u++){var l=Ll.getRotationToFace(u);h[4*u+0]=l.x,h[4*u+1]=l.y,h[4*u+2]=l.z,h[4*u+3]=l.w}a.queue.writeBuffer(this.quaternionBuffer,0,h)}this.blurSettingBuffer||(this.blurSettingBuffer=a.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([i,0,0,0])),i=e.erpTexture,e=[{binding:0,resource:{buffer:this.configBuffer,size:16}},{binding:1,resource:{buffer:this.quaternionBuffer,size:96}},{binding:2,resource:i.gpuSampler},{binding:3,resource:i.getGPUView()}],i=[{binding:0,resource:{buffer:this.blurSettingBuffer,size:16}},{binding:1,resource:s}],s=a.createBindGroup({layout:n.getBindGroupLayout(0),entries:e}),e=a.createBindGroup({layout:n.getBindGroupLayout(1),entries:i}),a=P.beginCommandEncoder(),i=a.beginComputePass(),i.setPipeline(n),i.setBindGroup(0,s),i.setBindGroup(1,e),i.dispatchWorkgroups(t/8,t/8,6),i.end(),P.endCommandEncoder(a)}}o(hi,"configBuffer",null),o(hi,"quaternionBuffer",null),o(hi,"blurSettingBuffer",null),o(hi,"pipeline");class Il extends Zt{constructor(){super(32,32,null)}create(e=32,t=32,l=null,h=!0){this.width=e,this.height=t;var a=D.device,n=4*e*2,h=(this.format=ae.rgba16float,this.useMipmap=h,this.updateTextureDescription(),this.updateGPUTexture(),a.createBuffer({size:l.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),l=(a.queue.writeBuffer(h,0,l),P.beginCommandEncoder());return l.copyBufferToTexture({buffer:h,bytesPerRow:n},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),P.endCommandEncoder(l),this.useMipmap||(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float"),this.gpuSampler=a.createSampler(this),this}async load(e,t){return(await new Dt().load(e,Jn,t)).getHDRTexture()}}const Al=new Float32Array(1),Mm=new Int32Array(Al.buffer);let Es=function(r){Al[0]=r,r=Mm[0];let e=r>>16&32768,t=r>>12&2047;var i=r>>23&255;return i<103||(142<i?e=e|31744|((i==255?1:0)&&8388607&r):i<114?(t|=2048,e|=(t>>114-i)+(t>>113-i&1)):e=(e|=i-112<<10|t>>1)+(1&t)),e};var Pm=(r=>(r[r.RGBE_RETURN_FAILURE=-1]="RGBE_RETURN_FAILURE",r[r.rgbe_read_error=1]="rgbe_read_error",r[r.rgbe_write_error=2]="rgbe_write_error",r[r.rgbe_format_error=3]="rgbe_format_error",r[r.rgbe_memory_error=4]="rgbe_memory_error",r))(Pm||{});class rh{constructor(){o(this,"valid"),o(this,"string"),o(this,"comments"),o(this,"programtype"),o(this,"format"),o(this,"gamma"),o(this,"exposure"),o(this,"width"),o(this,"height")}}class Jn extends jr{constructor(){super(...arguments),o(this,"_rgbeArray"),o(this,"_width"),o(this,"_height"),o(this,"_RGBE_RETURN_FAILURE",-1),o(this,"_parserType",ae.rgba8uint)}parseBuffer(t){var t=new Uint8Array(t),i=(t.pos=0,this.paserHeader(t));if(i instanceof rh){var s=this._width=i.width,i=this._height=i.height,t=this.parserPixel(t.subarray(t.pos),s,i);if(t instanceof Uint8Array)return this._rgbeArray=t,this._parserType,void(this.data=void 0)}return null}verification(){if(this.data&&this.data instanceof Zt||this._rgbeArray)return!0;throw new Error("Method not implemented.")}getTexture(){return this.data}getCubeTexture(){var e=this._width/4;return new oa().createFromHDRData(e,{width:this._width,height:this._height,array:this._rgbeArray})}getHDRTexture(){return new Il().create(this._width,this._height,this._rgbeArray)}parseError(e,t){switch(e){case 1:console.error("Read Error: "+(t||""));break;case 2:console.error("Write Error: "+(t||""));break;case 3:console.error("Bad File Format: "+(t||""));break;default:console.error("Error: "+(t||""))}return-1}parserBlock(e,t,i){t=t||1024;let s=e.pos,a=-1,n=0,h="",l=String.fromCharCode.apply(null,new Uint16Array(e.subarray(s,s+128)));for(;(a=l.indexOf(`
`))<0&&n<t&&s<e.byteLength;)h+=l,n+=l.length,s+=128,l+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(s,s+128)));return-1<a&&(i!==!1&&(e.pos+=n+a+1),h+l.slice(0,a))}paserHeader(e){var t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,a=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,n=new rh;let h,l;if(e.pos>=e.byteLength||!(h=this.parserBlock(e)))return this.parseError(1,"no header found");if(!(l=h.match(/^#\?(\S+)/)))return this.parseError(3,"bad initial token");for(n.valid|=1,n.programtype=l[1],n.string+=h+`
`;(h=this.parserBlock(e))!==!1;)if(n.string+=h+`
`,h.charAt(0)==="#")n.comments+=h+`
`;else if((l=h.match(t))&&(n.gamma=Math.floor(10*parseFloat(l[1]))/10),(l=h.match(i))&&(n.exposure=Math.floor(10*parseFloat(l[1]))/10),(l=h.match(s))&&(n.valid|=2,n.format=l[1]),(l=h.match(a))&&(n.valid|=4,n.height=parseInt(l[1],10),n.width=parseInt(l[2],10)),2&n.valid&&4&n.valid)break;return 2&n.valid?4&n.valid?n:(this.parseError(3,"missing image size specifier"),null):(this.parseError(3,"missing format specifier"),null)}parserPixel(e,t,i){var s=t;if(s<8||32767<s||e[0]!==2||e[1]!==2||128&e[2])return new Uint8Array(e);if(s!==(e[2]<<8|e[3]))return this.parseError(3,"wrong scanline width");var a=new Uint8Array(4*t*i);if(!a.length)return this.parseError(4,"unable to allocate buffer space");let n=0,h=0;var l=4*s,u=new Uint8Array(4),c=new Uint8Array(l);let d=i;for(;0<d&&h<e.byteLength;){if(h+4>e.byteLength)return this.parseError(1,"");if(u[0]=e[h++],u[1]=e[h++],u[2]=e[h++],u[3]=e[h++],u[0]!=2||u[1]!=2||(u[2]<<8|u[3])!=s)return this.parseError(3,"bad rgbe scanline format");let w=0,C;for(;w<l&&h<e.byteLength;){var f=128<(C=e[h++]);if(f&&(C-=128),C===0||w+C>l)return this.parseError(3,"bad scanline data");if(f){var m=e[h++];for(let b=0;b<C;b++)c[w++]=m}else c.set(e.subarray(h,h+C),w),w+=C,h+=C}var _=s;for(let b=0;b<_;b++){var g=0;a[n]=c[b+0],g+=s,a[n+1]=c[b+g],g+=s,a[n+2]=c[b+g],g+=s,a[n+3]=c[b+g],n+=4}d--}return a}rbgeToFloat(e,t,i,s){var a=e[t+3],a=Math.pow(2,a-128)/255;i[s+0]=e[t+0]*a,i[s+1]=e[t+1]*a,i[s+2]=e[t+2]*a,i[s+3]=1}rbgeToHalfFloat(e,t,i,s){var a=e[t+3],a=Math.pow(2,a-128)/255;i[s+0]=Es(e[t+0]*a),i[s+1]=Es(e[t+1]*a),i[s+2]=Es(e[t+2]*a),i[s+3]=Es(1)}}o(Jn,"format","bin");class oa extends Qn{constructor(){super(),o(this,"faceTextureRef"),o(this,"_url"),this.faceTextureRef={},this.useMipmap=!0,this.format=ae.rgba16float}createFromHDRData(e,s){var i=new Tt(s.width,s.height,ae.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),s=new Float32Array(s.array);return Yr.convertRGBE2RGBA(i,s),this.createFromTexture(e,i),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;16<i;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=D.device.createSampler(this),this.uploadErpTexture(t),this}uploadErpTexture(e){var t=this.getGpuSource(0);return Yr.makeTextureCube(e,this.width,t.v),this.generateMipmap(e),this}uploadTexture(e,t){return e=this.getGpuSource(e),Yr.makeTextureCube(t,this.width,e.v),this}getGpuSource(e){let t=this.faceTextureRef[e];return t||(t={t:this.getGPUTexture(),v:this.getGPUTexture().createView({format:this.format,dimension:"2d-array",baseMipLevel:e,mipLevelCount:1,arrayLayerCount:6})},this.faceTextureRef[e]=t),t}generateMipmap(e){let t=1;for(;t<this.mipmapCount;)this.generateMipmapAtLevel(t,e),t++}generateMipmapAtLevel(e,a,h=3){var s=this.width/Math.pow(2,e),a={width:s,height:s,erpTexture:a},n=(e+1)/this.mipmapCount,n=Math.pow(n,h),h=this.getGpuSource(e);hi.importantSample(a,s,n,h.v)}async load(e,t){return this._url=e,(await new Dt().load(e,Jn,t)).getCubeTexture()}}function Rm(r){return new TextDecoder().decode(r)}class eo{constructor(e,t,i,s){o(this,"buffer"),o(this,"binOffset"),o(this,"binLength"),o(this,"header"),this.buffer=e,this.binOffset=t+i,this.binLength=s;let a=null;a=i!==0?(s=new Uint8Array(e,t,i),JSON.parse(Rm(s))):{},this.header=a}getKeys(){return Object.keys(this.header)}getData(e,t,i=null,s=null){var a=this.header;if(!(e in a))return null;if(a=a[e],a instanceof Object){if(Array.isArray(a))return a;{var{buffer:n,binOffset:h,binLength:l}=this,u=a.byteOffset||0,c=a.type||s,i=a.componentType||i;if("type"in a&&s&&a.type!==s)throw new Error("FeatureTable: Specified type does not match expected type.");let _;switch(c){case"SCALAR":_=1;break;case"VEC2":_=2;break;case"VEC3":_=3;break;case"VEC4":_=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${e}".`)}let g;var d=h+u,f=t*_;switch(i){case"BYTE":g=new Int8Array(n,d,f);break;case"UNSIGNED_BYTE":g=new Uint8Array(n,d,f);break;case"SHORT":g=new Int16Array(n,d,f);break;case"UNSIGNED_SHORT":g=new Uint16Array(n,d,f);break;case"INT":g=new Int32Array(n,d,f);break;case"UNSIGNED_INT":g=new Uint32Array(n,d,f);break;case"FLOAT":g=new Float32Array(n,d,f);break;case"DOUBLE":g=new Float64Array(n,d,f);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${e}".`)}if(d+f*g.BYTES_PER_ELEMENT>h+l)throw new Error("FeatureTable: Feature data read outside binary body length.");return g}}return a}}class Ol extends eo{constructor(e,t,i,s,a){super(e,i,s,a),o(this,"batchSize"),this.batchSize=t}getData(e,t=null,i=null){return super.getData(e,this.batchSize,t,i)}}function Ul(r){let e;if(e=r instanceof DataView?r:new DataView(r),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let i=0;i<4;i++)t+=String.fromCharCode(e.getUint8(i));return t}class Dm{async parse(e){var a=new DataView(e),t=Ul(a),t=(console.assert(t==="b3dm"),a.getUint32(4,!0)),i=(console.assert(t===1),a.getUint32(8,!0)),l=(console.assert(i===e.byteLength),a.getUint32(12,!0)),h=a.getUint32(16,!0),s=a.getUint32(20,!0),a=a.getUint32(24,!0),n=e.slice(28,28+l+h),n=new eo(n,0,l,h),l=28+l+h,h=e.slice(l,l+s+a),h=new Ol(h,n.getData("BATCH_LENGTH"),0,s,a),l=l+s+a;return{version:t,featureTable:n,batchTable:h,glbBytes:new Uint8Array(e,l,i-l)}}}const Gs=class extends Dm{constructor(){super(),o(this,"adjustmentTransform"),o(this,"gltfBuffer"),this.adjustmentTransform=new q().identity(),Gs.tempMatrix||(Gs.tempMatrix=new q().identity())}async parse(t){var t=await super.parse(t),e=(this.gltfBuffer=t.glbBytes.slice().buffer,await new Nl().parseBinary(this.gltfBuffer)),{batchTable:t,featureTable:i}=t,s=i.getData("RTC_CENTER"),s=(s&&(e.x+=s[0],e.y+=s[1],e.z+=s[2]),e.getComponent(ct)),a=(s.updateWorldMatrix(),Gs.tempMatrix),a=(a.compose(s.localPosition,s.localRotQuat,s.localScale),a.multiply(this.adjustmentTransform),a.decompose($t.QUATERNION));return s.localRotQuat.copyFrom(a[1]),s.localRotQuat=s.localRotQuat,s.localPosition.copyFrom(a[0]),s.localPosition=s.localPosition,s.localScale.copyFrom(a[2]),s.localScale=s.localScale,s.updateWorldMatrix(),e.batchTable=t,e.featureTable=i,e}static decodeText(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,i=r.length;t<i;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}};let Mi=Gs;o(Mi,"tempMatrix");class Bl extends jr{async parseBuffer(e){var t=new Mi;t.adjustmentTransform=this.userData,this.data=await t.parse(e)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}o(Bl,"format","bin");const kl="glTF",ki=12,ih={JSON:1313821514,BIN:5130562},nn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Lm{constructor(e){o(this,"name"),o(this,"content"),o(this,"body"),o(this,"header"),this.name=nn.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,ki);if(this.header={magic:Mi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kl)throw new Error("GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("GLTFLoader: Legacy binary file detected.");var i=this.header.length-ki,s=new DataView(e,ki);let a=0;for(;a<i;){var n,h=s.getUint32(a,!0),l=(a+=4,s.getUint32(a,!0));a+=4,l===ih.JSON?(n=new Uint8Array(e,ki+a,h),this.content=Mi.decodeText(n)):l===ih.BIN&&(n=ki+a,this.body=e.slice(n,n+h)),a+=h}if(this.content===null)throw new Error("GLTFLoader: JSON content not found.")}}class Nl{constructor(){o(this,"_binary")}async parseBinary(e){this._binary=e,e={};let t,i;if(Mi.decodeText(new Uint8Array(this._binary,0,4))===kl){try{i=e[nn.KHR_BINARY_GLTF]=new Lm(this._binary)}catch{return}t=e[nn.KHR_BINARY_GLTF].content}else t=Mi.decodeText(new Uint8Array(this._binary));return e=JSON.parse(t),this.parseGLB(e,i.body)}async parseGLB(e,t){return new Zn().parseJsonAndBuffer(e,t)}}class Im{async parse(e){var n=new DataView(e),t=Ul(n),t=(console.assert(t==="i3dm"),n.getUint32(4,!0)),i=(console.assert(t===1),n.getUint32(8,!0)),l=(console.assert(i===e.byteLength),n.getUint32(12,!0)),h=n.getUint32(16,!0),s=n.getUint32(20,!0),a=n.getUint32(24,!0),n=(n.getUint32(28,!0),e.slice(32,32+l+h)),n=new eo(n,0,l,h),l=32+l+h,h=e.slice(l,l+s+a),h=new Ol(h,n.getData("INSTANCES_LENGTH"),0,s,a),l=l+s+a;return{version:t,featureTable:n,batchTable:h,glbBytes:new Uint8Array(e,l,i-l)}}}class Am extends pe{constructor(e,t,i){super(),o(this,"_geometry"),o(this,"_material"),o(this,"_instanceList"),this._geometry=e,this._material=t,this._instanceList=[];for(let n=0;n<i;n++){var s=new pe,a=s.addComponent(Fe);a.geometry=this._geometry,a.material=this._material,this.addChild(s),this._instanceList.push(s)}}setMatrixAt(e,t){return e=this._instanceList[e],t=t.decompose($t.QUATERNION),e=e.transform,e.localRotQuat.copyFrom(t[1]),e.localRotQuat=e.localRotQuat,e.localPosition.copyFrom(t[0]),e.localPosition=e.localPosition,e.localScale.copyFrom(t[2]),e.localScale=e.localScale,this}}const Fl=class extends Im{constructor(){super(),o(this,"adjustmentTransform"),o(this,"_gltfBuffer"),this.adjustmentTransform=new q().identity()}async parse(t){var t=await super.parse(t),e=(this._gltfBuffer=t.glbBytes.slice().buffer,await new Nl().parseBinary(this._gltfBuffer)),{batchTable:t,featureTable:i}=t;const s=this.adjustmentTransform,a=i.getData("INSTANCES_LENGTH"),n=i.getData("POSITION",a,"FLOAT","VEC3"),h=i.getData("NORMAL_UP",a,"FLOAT","VEC3"),l=i.getData("NORMAL_RIGHT",a,"FLOAT","VEC3"),u=i.getData("SCALE_NON_UNIFORM",a,"FLOAT","VEC3"),c=i.getData("SCALE",a,"FLOAT","SCALAR"),d=new Map,f=[],m=(e.traverse(g=>{var w,C;(C=g?g.getComponent(Fe):null)&&({geometry:C,material:w}=C,(C=new Am(C,w,a)).localPosition=C.localPosition.copy(g.localPosition),C.localRotation=C.localRotation.copy(g.localRotation),C.localScale=C.localScale.copy(g.localScale),f.push(C),d.set(g,C))}),new p);for(let g=0;g<a;g++)m.x+=n[3*g+0]/a,m.y+=n[3*g+1]/a,m.z+=n[3*g+2]/a;d.forEach((g,w)=>{var C=w.parent?w.parentObject:null;C&&(C.removeChild(w),C.addChild(g),g.transform.updateWorldMatrix(),g.transform.worldMatrix.transformVector4(m,g.localPosition))});var _=Fl;for(let g=0;g<a;g++){_.tempMat.identity(),_.tempPos.set(n[3*g+0]-m.x,n[3*g+1]-m.y,n[3*g+2]-m.z),h?(_.tempUp.set(h[3*g+0],h[3*g+1],h[3*g+2]),_.tempRight.set(l[3*g+0],l[3*g+1],l[3*g+2]),_.tempRight.cross(_.tempUp,_.tempFwd).normalize(),_.tempMat.makeBasis(_.tempRight,_.tempUp,_.tempFwd),_.tempQuat.setFromRotationMatrix(_.tempMat)):_.tempQuat.set(0,0,0,1),c?_.tempSca.setScalar(c[g]):u?_.tempSca.set(u[3*g+0],u[3*g+1],u[3*g+2]):_.tempSca.set(1,1,1),_.tempMat.compose(_.tempPos,_.tempQuat,_.tempSca),_.tempMat.multiplyMatrices(_.tempMat,s);for(let w=0,C=f.length;w<C;w++)f[w].setMatrixAt(g,_.tempMat)}return e.batchTable=t,e.featureTable=i,e}};let ur=Fl;o(ur,"tempFwd",new p),o(ur,"tempUp",new p),o(ur,"tempRight",new p),o(ur,"tempPos",new p),o(ur,"tempQuat",new _e),o(ur,"tempSca",new p),o(ur,"tempMat",new q);class zl extends jr{async parseBuffer(e){var t=new ur;t.adjustmentTransform=this.userData,this.data=await t.parse(e)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}o(zl,"format","bin");class Om extends Qn{constructor(){super(),o(this,"_faceTextureRef"),o(this,"_url"),this._faceTextureRef={},this.useMipmap=!0,this.format=ae.rgba16float}get ldrImageUrl(){return this._url}async load(e,t){this._url=e;var i=new Tr(!1);return await i.load(e,t),this.createFromLDRTexture(i),this}createFromLDRTexture(e){var t=Math.log2(e.width/4),t=Math.pow(2,Math.round(t));return this.createFromTexture(t,e),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;16<i;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=D.device.createSampler(this),this.uploadErpTexture(t),this}uploadErpTexture(e){var t=this.getGpuSource(0);return Yr.makeTextureCube(e,this.width,t.v),this.generateMipmap(e),this}getGpuSource(e){let t=this._faceTextureRef[e];return t||(t={t:this.getGPUTexture(),v:this.getGPUTexture().createView({format:this.format,dimension:"2d-array",baseMipLevel:e,mipLevelCount:1,arrayLayerCount:6})},this._faceTextureRef[e]=t),t}generateMipmap(e){let t=1;for(;t<this.mipmapCount;)this.generateMipmapAtLevel(t,e),t++}generateMipmapAtLevel(e,a,h=3){var s=this.width/Math.pow(2,e),a={width:s,height:s,erpTexture:a},n=(e+1)/this.mipmapCount,n=Math.pow(n,h),h=this.getGpuSource(e);hi.importantSample(a,s,n,h.v)}}let Um=`
var<private>PI: f32 = 3.141592653589793;

// fn saturate( x : f32 ) -> f32 {
//     return clamp(x, 0.0, 1.0);
// }

fn hammersley(i : u32, N : u32) -> vec2<f32>
{
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) / f32(N), rdi);
}

fn G_Smith(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var k = (roughness * roughness) / 2.0;
    var GGXL = NoL / (NoL * (1.0 - k) + k);
    var GGXV = NoV / (NoV * (1.0 - k) + k);
    return GGXL * GGXV;
}

fn V_SmithGGXCorrelated(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var a2 = pow(roughness, 4.0);
    var GGXV = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
    var GGXL = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
    return 0.5 / (GGXV + GGXL);
}


// Based on Karis 2014
fn importanceSampleGGX(Xi: vec2<f32>, roughness: f32, N: vec3<f32>) -> vec3<f32>
{
    var a = roughness * roughness;
    // Sample in spherical coordinates
    var Phi = 2.0 * PI * Xi.x;
    var CosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a * a - 1.0) * Xi.y));
    var SinTheta = sqrt(1.0 - CosTheta * CosTheta);
    // Construct tangent space vector
    var H: vec3<f32>;
    H.x = SinTheta * cos(Phi);
    H.y = SinTheta * sin(Phi);
    H.z = CosTheta;

    // Tangent to world space
    var UpVector = vec3<f32>(1.0, 0.0, 0.0);
    if (abs(N.z) < 0.999) {
        UpVector = vec3<f32>(0.0, 0.0, 1.0);
    }
    var TangentX = normalize(cross(UpVector, N));
    var TangentY = cross(N, TangentX);
    return TangentX * H.x + TangentY * H.y + N * H.z;
}


// Karis 2014
fn integrateBRDF(roughness: f32, NoV: f32) -> vec2<f32>
{
    var V: vec3<f32>;
    V.x = sqrt(1.0 - NoV * NoV); // sin
    V.y = 0.0;
    V.z = NoV; // cos

    // N points straight upwards for this integration
    var N = vec3<f32>(0.0, 0.0, 1.0);

    var A = 0.0;
    var B = 0.0;
    var numSamples = 1024u;

    for (var i = 0u; i < numSamples; i += 1u) {
        var Xi = hammersley(i, numSamples);
        // Sample microfacet direction
        var H = importanceSampleGGX(Xi, roughness, N);

        // Get the light direction
        var L = 2.0 * dot(V, H) * H - V;

        var NoL = saturate(dot(N, L));
        var NoH = saturate(dot(N, H));
        var VoH = saturate(dot(V, H));

        if (NoL > 0.0) {
            var V_pdf = V_SmithGGXCorrelated(NoV, NoL, roughness) * VoH * NoL / NoH;
            var Fc = pow(1.0 - VoH, 5.0);
            A += (1.0 - Fc) * V_pdf;
            B += Fc * V_pdf;
        }
    }

    return 4.0 * vec2<f32>(A, B) / f32(numSamples);
}

@group(0) @binding(0) var brdflutTexture: texture_storage_2d<rgba8unorm, write>;
@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(0.0);
    // Output to screen
    var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    textureStore(brdflutTexture, vec2<i32>(fragCoord.xy), fragColor);
}
`;class Bm{constructor(){o(this,"compute"),this.compute=new bi(Um)}generateBRDFLUTTexture(){var e=new Tt(256,256,ae.rgba8unorm,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),t=(this.compute.setStorageTexture("brdflutTexture",e),this.compute.workerSizeX=32,this.compute.workerSizeY=32,P.beginCommandEncoder());return P.computeCommand(t,[this.compute]),P.endCommandEncoder(t),e}}class km extends Zt{constructor(){super(...arguments),o(this,"_dataBuffer")}create(e,t,i,s=!1){var h=D.device,a=256*Math.ceil(4*e/256),n=(this.format=ae.rgba8unorm,this.mipmapCount=Math.floor(s?Math.log2(e):1),this.createTextureDescriptor(e,t,this.mipmapCount,this.format),this._dataBuffer=h.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),h=(h.queue.writeBuffer(n,0,i),P.beginCommandEncoder());return h.copyBufferToTexture({buffer:n,bytesPerRow:a},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),P.endCommandEncoder(h),s&&Xr.webGPUGenerateMipmap(this),this}updateTexture(e,t,h){var s=D.device,a=256*Math.ceil(4*e/256),n=(this.mipmapCount=Math.floor(Math.log2(e)),this._dataBuffer&&this._dataBuffer.destroy(),this._dataBuffer=null,this._dataBuffer=s.createBuffer({size:h.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),h=(s.queue.writeBuffer(n,0,h),P.beginCommandEncoder());h.copyBufferToTexture({buffer:n,bytesPerRow:a},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),P.endCommandEncoder(h),this.gpuSampler=s.createSampler(this),1<this.mipmapCount&&Xr.webGPUGenerateMipmap(this)}}class Nm{constructor(){o(this,"_texturePool"),o(this,"_materialPool"),o(this,"_prefabPool"),o(this,"_gltfPool"),o(this,"normalTexture"),o(this,"maskTexture"),o(this,"whiteTexture"),o(this,"blackTexture"),o(this,"redTexture"),o(this,"blueTexture"),o(this,"greenTexture"),o(this,"yellowTexture"),o(this,"grayTexture"),o(this,"defaultSky"),this._texturePool=new Map,this._materialPool=new Map,this._prefabPool=new Map,this._gltfPool=new Map,this.initDefault()}getGltf(e){return this._gltfPool.get(e)}addTexture(e,t){this._texturePool.set(e,t)}getTexture(e){return this._texturePool.get(e)}addMat(e,t){return this._materialPool.set(e,t)}getMat(e){return this._materialPool.get(e)}addPrefab(e,t){this._prefabPool.set(e,t)}getPrefab(e){return this._prefabPool.get(e).instantiate()}async loadGltf(e,t){if(this._prefabPool.has(e))return this._prefabPool.get(e);let i,s=e.substring(e.lastIndexOf(".")).toLowerCase(),a=new Dt;return t=(i=s==".gltf"?await a.load(e,qe,t):await a.load(e,Zn,t)).data,this._prefabPool.set(e,t),this._gltfPool.set(e,i.gltf),t}async loadObj(e,t){if(this._prefabPool.has(e))return this._prefabPool.get(e);let i,s=e.substring(e.lastIndexOf(".")).toLowerCase(),a=new Dt;return t=(i=s==".obj"?await a.load(e,Rl,t):i).data,this._prefabPool.set(e,t),t}async loadB3DM(e,t,i){return this._prefabPool.has(e)?this._prefabPool.get(e):(t=(await new Dt().load(e,Bl,t,i)).data,this._prefabPool.set(e,t),t)}async loadI3DM(e,t,i){return this._prefabPool.has(e)?this._prefabPool.get(e):(t=(await new Dt().load(e,zl,t,i)).data,this._prefabPool.set(e,t),t)}async loadTexture(e,t,i){var s;return this._texturePool.has(e)?this._texturePool.get(e):((s=new Tr).flipY=i,await s.load(e,t),this._texturePool.set(e,s),s)}async loadHDRTexture(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let i=new Il;return i=await i.load(e,t),this._texturePool.set(e,i),i}async loadHDRTextureCube(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let i=new oa;return i=await i.load(e,t),this._texturePool.set(e,i),i}async loadLDRTextureCube(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let i=new Om;return i=await i.load(e,t),this._texturePool.set(e,i),i}async loadTextureCubeMaps(e){var t=e[0];return this._texturePool.has(t)?this._texturePool.get(t):(await(t=new th).load(e),this._texturePool.set(e[0],t),t)}async loadTextureCubeStd(e,t){var i;return this._texturePool.has(e)?this._texturePool.get(e):(await(i=new th).loadStd(e),i)}async loadJSON(e,t){return new Dt().loadJson(e,t).then(async i=>i).catch(i=>{console.log(i)})}createTexture(u,t,i,s,a,n,h){var l=new Uint8Array(4096),u=(this.fillColor(l,u,t,i,s,a,n),new km);return u.name=h,u.create(16,16,l,!0),h&&this.addTexture(h,u),u}fillColor(e,t,i,s,a,n,h){for(let u=0;u<t;u++)for(let c=0;c<i;c++){var l=c*t+u;e[4*l+0]=s,e[4*l+1]=a,e[4*l+2]=n,e[4*l+3]=h}}initDefault(){this.normalTexture=this.createTexture(32,32,127.5,127.5,255,255,"default-normalTexture"),this.maskTexture=this.createTexture(32,32,255,127.5,0,255,"default-maskTexture"),this.whiteTexture=this.createTexture(32,32,255,255,255,255,"default-whiteTexture"),this.blackTexture=this.createTexture(32,32,0,0,0,255,"default-blackTexture"),this.redTexture=this.createTexture(32,32,255,0,0,255,"default-redTexture"),this.blueTexture=this.createTexture(32,32,0,0,255,255,"default-blueTexture"),this.greenTexture=this.createTexture(32,32,0,255,0,255,"default-greenTexture"),this.yellowTexture=this.createTexture(32,32,0,255,255,255,"default-yellowTexture"),this.grayTexture=this.createTexture(32,32,128,128,128,255,"default-grayTexture");var e=new Bm().generateBRDFLUTTexture();e.name="BRDFLUT",this.addTexture("BRDFLUT",e),this.defaultSky=new oa,this.defaultSky.createFromTexture(128,this.blackTexture)}}class T{static get frameRate(){return this._frameRate}static set frameRate(e){this._frameRate=e,this._frameRateValue=1/e,360<=e&&(this._frameRateValue=0)}static get size(){return D.presentationSize}static get aspect(){return D.aspect}static get width(){return D.windowWidth}static get height(){return D.windowHeight}static async init(e={}){console.log("engine version",kd),this.setting={...this.setting,...e.engineSetting},await D.init(e.canvasConfig),Te.init(),G.init(),Gt.init(),St.init(),st.init(),br.init(),this.res=new Nm,this._beforeRender=e.beforeRender,this._renderLoop=e.renderLoop,this._lateRender=e.lateRender,this.inputSystem=new Bd,this.inputSystem.initCanvas(D.canvas)}static startRenderView(e){this.renderJobs||(this.renderJobs=new Map),this.views=[e];var t=new Zo(e);return this.renderJobs.set(e,t),t.addPost(new $o),t.start(),this.resume(),t}static startRenderViews(e){this.renderJobs||(this.renderJobs=new Map),this.views=e;for(let s=0;s<e.length;s++){var t=e[s],i=new Zo(t);this.renderJobs.set(t,i),i.addPost(new $o),i.start()}this.resume()}static getRenderJob(e){return this.renderJobs.get(e)}static pause(){this._requestAnimationFrameID!=0&&(cancelAnimationFrame(this._requestAnimationFrameID),this._requestAnimationFrameID=0)}static resume(){this._requestAnimationFrameID=requestAnimationFrame(e=>this.render(e))}static render(e){this._deltaTime=e-this._time,this._time=e,0<this._frameRateValue?(this._frameTimeCount+=.001*this._deltaTime,this._frameTimeCount>=.95*this._frameRateValue&&(this._frameTimeCount=0,this.updateFrame(e))):this.updateFrame(e),this.resume()}static updateFrame(e){ze.delta=e-ze.time,ze.time=e,ze.frame+=1,wl.tick(ze.delta),this._beforeRender&&this._beforeRender(),Te.componentsBeforeUpdateList.forEach((i,s)=>{i.forEach((a,n)=>{n.enable&&a(s)})});let t=D.device.createCommandEncoder();Te.componentsComputeList.forEach((i,s)=>{i.forEach((a,n)=>{n.enable&&a(s,t)})}),D.device.queue.submit([t.finish()]),St.modelMatrixBindGroup.writeBuffer(),Te.componentsUpdateList.forEach((i,s)=>{i.forEach((a,n)=>{n.enable&&a(s)})}),this._renderLoop&&this._renderLoop(),this.renderJobs.forEach((i,s)=>{i.renderFrame()}),Te.componentsLateUpdateList.forEach((i,s)=>{i.forEach((a,n)=>{n.enable&&a(s)})}),this._lateRender&&this._lateRender()}}o(T,"res"),o(T,"inputSystem"),o(T,"views"),o(T,"_frameRateValue",0),o(T,"_frameRate",360),o(T,"_frameTimeCount",0),o(T,"_deltaTime",0),o(T,"_time",0),o(T,"_beforeRender"),o(T,"_renderLoop"),o(T,"_lateRender"),o(T,"_requestAnimationFrameID",0),o(T,"setting",{occlusionQuery:{enable:!0,debug:!1},pick:{enable:!0,mode:"bound",detail:"mesh"},render:{debug:!1,renderPassState:4,renderState_left:5,renderState_right:5,renderState_split:.5,quadScale:1,hdrExposure:1.5,debugQuad:-1,maxPointLight:1e3,maxDirectLight:4,maxSportLight:1e3,drawOpMin:0,drawOpMax:Number.MAX_SAFE_INTEGER,drawTrMin:0,drawTrMax:Number.MAX_SAFE_INTEGER,zPrePass:!1,gi:!1,postProcessing:{globalFog:{debug:!1,enable:!1,fogType:0,height:100,start:400,end:0,density:.02,ins:1,fogColor:new y(84/255,90/255,239/255,1)},ssao:{enable:!1,radius:.15,bias:-.1,aoPower:2,debug:!0},outline:{enable:!1,strength:1,groupCount:4,outlinePixel:2,fadeOutlinePixel:4,useAddMode:!1,debug:!0},taa:{enable:!1,jitterSeedCount:8,blendFactor:.1,sharpFactor:.6,sharpPreBlurFactor:.5,temporalJitterScale:.13,debug:!0},gtao:{enable:!1,darkFactor:1,maxDistance:5,maxPixel:50,rayMarchSegment:6,multiBounce:!1,usePosFloat32:!0,blendColor:!0,debug:!0},ssr:{enable:!1,pixelRatio:1,fadeEdgeRatio:.2,rayMarchRatio:.5,fadeDistanceMin:600,fadeDistanceMax:2e3,roughnessThreshold:.5,powDotRN:.2,mixThreshold:.1,debug:!0},bloom:{enable:!1,blurX:4,blurY:4,strength:.25,radius:1.3,luminosityThreshold:.98,debug:!1},fxaa:{enable:!1},depthOfView:{enable:!1,iterationCount:3,pixelOffset:1,near:150,far:300}}},shadow:{enable:!0,type:"HARD",shadowBias:.00204,pointShadowBias:.002,shadowQuality:2.5,shadowBound:50,shadowSize:2048,pointShadowSize:1024,shadowSoft:.005,shadowNear:1,shadowFar:2e3,needUpdate:!0,autoUpdate:!0,updateFrameRate:2,debug:!1},sky:{type:"HDRSKY",sky:null,skyExposure:1,defaultFar:1e6,defaultNear:1},light:{maxLight:1024},material:{materialChannelDebug:!1,materialDebug:!1}}),o(T,"renderJobs");let Fm=`
    struct GlobalUniform {
        projMat: mat4x4<f32>,
        viewMat: mat4x4<f32>,
        cameraWorldMatrix: mat4x4<f32>,
        pvMatrixInv : mat4x4<f32>,
        shadowMatrix: array<mat4x4<f32>,8>,
        CameraPos: vec3<f32>,
        
        frame: f32,
        time: f32,
        delta: f32,
        shadowBias: f32,
        skyExposure: f32,
        renderPassState:f32,
        quadScale: f32,
        hdrExposure: f32,
        
        renderState_left: i32,
        renderState_right: i32,
        renderState_split: f32,

        mouseX: f32,
        mouseY: f32,
        windowWidth: f32,
        windowHeight: f32,

        near: f32,
        far: f32,

        pointShadowBias: f32,
        shadowMapSize: f32,
        shadowSoft: f32,
    };

    struct PickResult{
        pick_meshID:f32,
        pick_meshID2:f32,
        pick_UV:vec2<f32>,
        pick_Position:vec4<f32>,
        pick_Normal:vec4<f32>,
        pick_Tangent:vec4<f32>,
    }

    @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
    @group(0) @binding(1) var<storage,read_write> outBuffer: PickResult;
    @group(0) @binding(2) var visibleMap : texture_2d<f32>;

    @compute @workgroup_size( 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
    var result:PickResult ;
    // result.pick_meshID
    let texSize = textureDimensions(visibleMap).xy;
    let screenPoint = vec2<f32>(standUniform.mouseX/standUniform.windowWidth,standUniform.mouseY/standUniform.windowHeight);

    let mouseUV = screenPoint * vec2<f32>(texSize.xy); 
    let info = textureLoad(visibleMap, vec2<i32>(mouseUV) , 0);

    outBuffer.pick_meshID = f32(info.w) ;
    outBuffer.pick_meshID2 = f32(info.w) ;
    outBuffer.pick_Tangent = vec4<f32>(2.0,2.0,2.0,2.0) ;
    outBuffer.pick_UV = vec2<f32>(standUniform.mouseX,standUniform.mouseY) ;
    outBuffer.pick_Position = vec4<f32>(info.xyzw) ;
    outBuffer.pick_Normal = vec4<f32>(info.xyzw) ;
    }
`,sh=`
#include "Common_vert"
#include "FragmentVarying"
#include "GlobalUniform"

struct FragmentOutput {
    @location(0) o_Position: vec4<f32>,
    @location(1) o_Normal: vec4<f32>,
    @location(2) o_Color: vec4<f32>
};

struct MaterialUniform {
    baseColor: vec4<f32>,
    emissiveColor: vec4<f32>,
    emissiveIntensity: f32,
    normalScale: f32,
    alphaCutoff: f32
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var normalMapSampler: sampler;
@group(1) @binding(auto)
var normalMap: texture_2d<f32>;

@group(1) @binding(auto)
var emissiveMapSampler: sampler;
@group(1) @binding(auto)
var emissiveMap: texture_2d<f32>;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

var<private> ORI_FragmentOutput: FragmentOutput;
var<private> ORI_VertexVarying: FragmentVarying;

@fragment
fn FragMain(vertex_varying:FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    var texColor = textureSample(baseMap, baseMapSampler, ORI_VertexVarying.fragUV0.xy );

    var emissive = textureSample(emissiveMap, emissiveMapSampler, ORI_VertexVarying.fragUV0.xy ).rgb ;
    let intensity = materialUniform.emissiveIntensity * materialUniform.emissiveColor.a ;
    emissive = emissive.rgb * materialUniform.emissiveColor.rgb ;
    emissive = convertToHDRRGB(emissive,intensity);

    if (materialUniform.alphaCutoff-texColor.w > 0.0) {
        discard ;
    }

    var o_Position = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,emissive.r) ;
    var o_Normal = vec4<f32>((ORI_VertexVarying.vWorldNormal.xyz * 0.5 + 0.5 ),emissive.g) ;
    var o_Color = vec4<f32>((texColor * materialUniform.baseColor).rgb , emissive.b )  ;
    return FragmentOutput(o_Position,o_Normal,vec4<f32>(o_Color));
}

fn convertToHDRRGB( color : vec3<f32> , ins:f32 ) -> vec3<f32> {
    var hdrColor = vec3<f32>(0.0,0.0,0.0);
    hdrColor.r = color.r * pow(2.4, ins);
    hdrColor.g = color.g * pow(2.4, ins);
    hdrColor.b = color.b * pow(2.4, ins);
    return hdrColor;
}
`,zm=`
#include "GlobalUniform"

struct uniformData {
    exposure: f32,
    roughness: f32
};

struct FragmentOutput {
    @location(0) o_Position: vec4<f32>,
    @location(1) o_Normal: vec4<f32>,
    @location(2) o_Color: vec4<f32>
};

@group(1) @binding(4)
var baseMapSampler: sampler;
@group(1) @binding(5)
var baseMap: texture_cube<f32>;

@group(2) @binding(0)
var<uniform> global: uniformData;

fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
    var linRGB1: vec3<f32>;
    linRGB1 = linRGB;
    linRGB1 = max(linRGB1, vec3<f32>(0.0, 0.0, 0.0));
    linRGB1.x = pow(linRGB1.x, 0.4166666567325592);
    linRGB1.y = pow(linRGB1.y, 0.4166666567325592);
    linRGB1.z = pow(linRGB1.z, 0.4166666567325592);
    return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
}

@fragment
fn main(@location(0) fragUV: vec2<f32>, @location(1) vWorldPos: vec4<f32>, @location(2) vWorldNormal: vec3<f32>) -> FragmentOutput {
    let maxLevel: u32 = textureNumLevels(baseMap);
    let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
    let o_Color = 0.618 * vec4<f32>(LinearToGammaSpace(textureColor) * globalUniform.skyExposure , 1.0);
    let o_Normal = vec4(vWorldNormal,1.0) ;
    let o_Position = vec4<f32>(vWorldPos.xyz,100000.0) ;
    return FragmentOutput(o_Position,o_Normal,o_Color);
}
`;class Gl{}o(Gl,"Ori_AllShader",`
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            return ORI_VertexOut ;
        }

        fn frag(){
            ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
            ORI_ShadingInput.Roughness = materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = materialUniform.ao ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

            ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

            #if USE_SHADOWMAPING
                directShadowMaping(globalUniform.shadowBias);
                pointShadowMapCompare(globalUniform.pointShadowBias);
            #endif

            BxDFShading();
        }
    `);class ah{}o(ah,"lambert_frag_wgsl",`
    #include "FragmentOutput.wgsl"
    #include "LighStruct"
    #include "ColorUtil_frag"

    @group(2) @binding(4)
    var baseMapSampler: sampler;
    @group(2) @binding(5)
    var baseMap: texture_2d<f32>;

    struct StandMaterial {
        transformUV1:vec4<f32>,
        transformUV2:vec4<f32>,
        baseColor: vec4<f32>,
        dirLight: vec4<f32>,
        dirLightColor: vec4<f32>,
        alphaCutoff: f32,
        shadowBias: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: StandMaterial;

    fn frag(){
        var baseColor = materialUniform.baseColor;
        var alphaCutoff = materialUniform.alphaCutoff;
        var shadowBias = materialUniform.shadowBias;
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * vUv0 + transformUV1.xy;
        var baseMap = textureSample(baseMap, baseMapSampler, uv).xyz;

        let viewDir = normalize(globalUniform.cameraWorldMatrix[3].xyz - vWorldPos.xyz) ;

        let lightIndex = getCluster(builtin_fragCoord);
        let start = max(lightIndex.start, 0.0);
        let count = max(lightIndex.count, 0.0);
        let end = max(start + count , 0.0);
        var color = vec3<f32>(0.0);
        for(var i:i32 = i32(start) ; i < i32(end); i = i + 1 )
        {
          let light = getLight(i) ;
          switch (light.lightType) {
            case PointLightType: {
              let lightingColor = lambert_pointLight( baseMap , viewDir,vWorldNormal,vWorldPos.xyz,light);
              color += lightingColor ;
            }
            case DirectLightType: {
              let lightingColor = lambert_directLight( baseMap , viewDir,vWorldNormal,light.direction,light.lightColor,light.intensity);
              color += lightingColor ;
            }
            case SpotLightType: {

            }
            default: {
            }
          }
        }

        ORI_FragmentOutput.color = vec4<f32>(color, 1.0);
    }
    `),o(ah,"lambert_vert_wgsl",`
      #include "Common_vert"

      fn vert(){

      }
    `);let Gm=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
        let color = textureSample(baseMap,baseMapSampler,uv) ;
        if(color.w < 0.5){
            discard ;
        }
        
        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        UnLit();
    }
`,Vm=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> varying_uv: vec2<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    struct MaterialUniform{
        u_texel: vec2<f32>,
        u_strength: f32,
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;


    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3<f32> {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r,0.416666667);
        linRGB.g = pow(linRGB.g,0.416666667);
        linRGB.b = pow(linRGB.b,0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    fn texture2D( uv:vec2<f32> , offset:vec2<f32> ) -> vec4<f32> {
        return textureSample(baseMap, baseMapSampler, uv.xy + offset ).rgba ;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var v_vTexcoord = fragUV ;
        // v_vTexcoord.x = 1.0 - v_vTexcoord.x ;
        v_vTexcoord.y = 1.0 - v_vTexcoord.y ;

        var reducemul = 1.0 / 8.0;
        var reducemin = 1.0 / 128.0;

        var basecol = texture2D(v_vTexcoord , vec2<f32>(0.0)).rgba;
        var baseNW = texture2D(v_vTexcoord , -materialUniform.u_texel).rgb;
        var baseNE = texture2D(v_vTexcoord , vec2<f32>(materialUniform.u_texel.x, -materialUniform.u_texel.y)).rgb;
        var baseSW = texture2D(v_vTexcoord , vec2<f32>(-materialUniform.u_texel.x, materialUniform.u_texel.y)).rgb;
        var baseSE = texture2D(v_vTexcoord , materialUniform.u_texel ).rgb;

        // var gray = vec3<f32>(0.299, 0.587, 0.114);
        var gray = vec3<f32>(0.213, 0.715, 0.072);
        var monocol = dot(basecol.rgb, gray);
        var monoNW = dot(baseNW, gray);
        var monoNE = dot(baseNE, gray);
        var monoSW = dot(baseSW, gray);
        var monoSE = dot(baseSE, gray);

        var monomin = min(monocol, min(min(monoNW, monoNE), min(monoSW, monoSE)));
        var monomax = max(monocol, max(max(monoNW, monoNE), max(monoSW, monoSE)));

        var dir = vec2<f32>(-((monoNW + monoNE) - (monoSW + monoSE)), ((monoNW + monoSW) - (monoNE + monoSE)));
        var dirreduce = max((monoNW + monoNE + monoSW + monoSE) * reducemul * 0.25, reducemin);
        var dirmin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirreduce);
        dir = min(vec2<f32>(materialUniform.u_strength), max(vec2<f32>(-materialUniform.u_strength), dir * dirmin)) * materialUniform.u_texel;

        var resultA = 0.5 * (texture2D(v_vTexcoord , dir * -0.166667).rgb  +
                            texture2D(v_vTexcoord , dir * 0.166667).rgb);
        var resultB = resultA * 0.5 + 0.25 * (texture2D( v_vTexcoord , dir * -0.5).rgb +
                                            texture2D( v_vTexcoord , dir * 0.5).rgb);
        var monoB = dot(resultB.rgb, gray);
        
        var color:vec3<f32> ;
        if(monoB < monomin || monoB > monomax) {
            color = resultA ;//* v_vColour;
        } else {
            color = resultB ;//* v_vColour;
        }
        return FragmentOutput(vec4<f32>(color.rgb,basecol.a));
    }
`;class Vl{}o(Vl,"cs",`
    #include 'ColorUtil'
    struct UniformData {
        width: f32,
        height: f32,
        sunU: f32,
        sunV: f32,
        eyePos: f32,
        sunRadius: f32,         // = 500.0;
        sunRadiance: f32,       // = 20.0;
        mieG: f32,              // = 0.76;
        mieHeight: f32,         // = 1200;
        sunBrightness: f32,     // = 1.0;
        displaySun: f32,        // > 0.5: true
        skyColor: vec4<f32>,        // sky color
      };

      @group(0) @binding(0) var<uniform> uniformBuffer: UniformData;
      @group(0) @binding(1) var outTexture : texture_storage_2d<rgba16float, write>;

      var<private> uv01: vec2<f32>;
      var<private> fragCoord: vec2<i32>;
      var<private> texSizeF32: vec2<f32>;

      var<private> PI:f32 = 3.1415926535;
      var<private> PI_2:f32 = 0.0;
      var<private> EPSILON:f32 = 0.00001;
      var<private> SAMPLES_NUMS:i32 = 16;

      var<private> transmittance:vec3<f32>;
      var<private> insctrMie:vec3<f32>;
      var<private> insctrRayleigh:vec3<f32>;

      @compute @workgroup_size( 8 , 8 , 1 )
      fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
      {
        fragCoord = vec2<i32>(globalInvocation_id.xy);
        texSizeF32 = vec2<f32>( uniformBuffer.width, uniformBuffer.height);
        uv01 = vec2<f32>(globalInvocation_id.xy) / texSizeF32;
        uv01.y = 1.0 - uv01.y - EPSILON;
        PI_2 = PI * 2.0;
        textureStore(outTexture, fragCoord , mainImage(uv01));//vec4(uv01, 0.0, 1.0));
      }

      struct ScatteringParams
      {
        sunRadius:f32,
        sunRadiance:f32,

        mieG:f32,
        mieHeight:f32,

        rayleighHeight:f32,

        waveLambdaMie:vec3<f32>,
        waveLambdaOzone:vec3<f32>,
        waveLambdaRayleigh:vec3<f32>,

        earthRadius:f32,
        earthAtmTopRadius:f32,
        earthCenter:vec3<f32>,
      }

      fn ComputeSphereNormal(coord:vec2<f32>, phiStart:f32, phiLength:f32, thetaStart:f32, thetaLength:f32) -> vec3<f32>
      {
        var normal:vec3<f32>;
        normal.x = -sin(thetaStart + coord.y * thetaLength) * sin(phiStart + coord.x * phiLength);
        normal.y = -cos(thetaStart + coord.y * thetaLength);
        normal.z = -sin(thetaStart + coord.y * thetaLength) * cos(phiStart + coord.x * phiLength);
        return normalize(normal);
      }

      fn ComputeRaySphereIntersection(position:vec3<f32>, dir:vec3<f32>, center:vec3<f32>, radius:f32) -> vec2<f32>
      {
        var origin:vec3<f32> = position - center;
        var B = dot(origin, dir);
        var C = dot(origin, origin) - radius * radius;
        var D = B * B - C;

        var minimaxIntersections:vec2<f32>;
        if (D < 0.0)
        {
          minimaxIntersections = vec2<f32>(-1.0, -1.0);
        }
        else
        {
          D = sqrt(D);
          minimaxIntersections = vec2<f32>(-B - D, -B + D);
        }

        return minimaxIntersections;
      }

      fn ComputeWaveLambdaRayleigh(lambda: vec3<f32>) -> vec3<f32>
      {
        var n:f32 = 1.0003;
        var N:f32 = 2.545E25;
        var pn:f32 = 0.035;
        var n2:f32 = n * n;
        var pi3:f32 = PI * PI * PI;
        var rayleighConst:f32 = (8.0 * pi3 * pow(n2 - 1.0,2.0)) / (3.0 * N) * ((6.0 + 3.0 * pn) / (6.0 - 7.0 * pn));
        return vec3<f32>(rayleighConst) / (lambda * lambda * lambda * lambda);
      }

      fn ComputePhaseMie(theta: f32, g:f32) -> f32
      {
        var g2 = g * g;
        return (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * saturate(theta), 1.5) / (4.0 * PI);
      }

      fn ComputePhaseRayleigh(theta: f32) -> f32
      {
        var theta2 = theta * theta;
        return (theta2 * 0.75 + 0.75) / (4.0 * PI);
      }

      fn ChapmanApproximation(X: f32, h: f32, cosZenith: f32) -> f32
      {
        var c = sqrt(X + h);
        var c_exp_h = c * exp(-h);

        if (cosZenith >= 0.0)
        {
          return c_exp_h / (c * cosZenith + 1.0);
        }
        else
        {
          var x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
          var c0 = sqrt(x0);

          return 2.0 * c0 * exp(X - x0) - c_exp_h / (1.0 - c * cosZenith);
        }
      }

      fn GetOpticalDepthSchueler(h: f32, H: f32, earthRadius: f32, cosZenith: f32) -> f32
      {
        return H * ChapmanApproximation(earthRadius / H, h / H, cosZenith);
      }

      fn GetTransmittance(setting: ScatteringParams, L:vec3<f32>, V: vec3<f32>) -> vec3<f32>
      {
        var ch = GetOpticalDepthSchueler(L.y, setting.rayleighHeight, setting.earthRadius, V.y);
        return exp(-(setting.waveLambdaMie + setting.waveLambdaRayleigh) * ch);
      }

      fn ComputeOpticalDepth(setting: ScatteringParams, samplePoint: vec3<f32>, V: vec3<f32>, L: vec3<f32>, neg: f32) -> vec2<f32>
      {
        var rl = length(samplePoint);
        var h = rl - setting.earthRadius;
        var r: vec3<f32> = samplePoint / rl;

        var cos_chi_sun = dot(r, L);
        var cos_chi_ray = dot(r, V * neg);

        var opticalDepthSun = GetOpticalDepthSchueler(h, setting.rayleighHeight, setting.earthRadius, cos_chi_sun);
        var opticalDepthCamera = GetOpticalDepthSchueler(h, setting.rayleighHeight, setting.earthRadius, cos_chi_ray) * neg;

        return vec2<f32>(opticalDepthSun, opticalDepthCamera);
      }

      fn AerialPerspective(setting:ScatteringParams, start: vec3<f32>, end: vec3<f32>, V: vec3<f32>, L: vec3<f32>, infinite:i32)
      {
        var inf_neg:f32 = 1.0;
        if( infinite == 0){
          inf_neg = -1.0;
        }

        var sampleStep: vec3<f32> = (end - start) / f32(SAMPLES_NUMS);
        var samplePoint: vec3<f32> = end - sampleStep;
        var sampleLambda: vec3<f32> = setting.waveLambdaMie + setting.waveLambdaRayleigh + setting.waveLambdaOzone;

        var sampleLength:f32 = length(sampleStep);

        var scattering:vec3<f32> = vec3<f32>(0.0);
        var lastOpticalDepth:vec2<f32> = ComputeOpticalDepth(setting, end, V, L, inf_neg);

        for (var i:i32 = 1; i < SAMPLES_NUMS; i = i + 1)
        {
          var opticalDepth: vec2<f32> = ComputeOpticalDepth(setting, samplePoint, V, L, inf_neg);

          var segment_s: vec3<f32> = exp(-sampleLambda * (opticalDepth.x + lastOpticalDepth.x));
          var segment_t: vec3<f32> = exp(-sampleLambda * (opticalDepth.y - lastOpticalDepth.y));

          transmittance *= segment_t;

          scattering = scattering * segment_t;
          scattering += exp(-(length(samplePoint) - setting.earthRadius) / setting.rayleighHeight) * segment_s;

          lastOpticalDepth = opticalDepth;
          samplePoint = samplePoint - sampleStep;
        }

        insctrMie = scattering * setting.waveLambdaMie * sampleLength;
        insctrRayleigh = scattering * setting.waveLambdaRayleigh * sampleLength;
      }

      fn ComputeSkyboxChapman(setting: ScatteringParams, eye:vec3<f32>, V:vec3<f32>, L:vec3<f32>) -> f32
      {
        var neg:i32 = 1;
        var outerIntersections: vec2<f32> = ComputeRaySphereIntersection(eye, V, setting.earthCenter, setting.earthAtmTopRadius);
        if (outerIntersections.y < 0.0){
          return 0.0;
        }
        var innerIntersections: vec2<f32> = ComputeRaySphereIntersection(eye, V, setting.earthCenter, setting.earthRadius);
        if (innerIntersections.x > 0.0)
        {
          neg = 0;
          outerIntersections.y = innerIntersections.x;
        }

        let eye0 = eye - setting.earthCenter;

        var start : vec3<f32> = eye0 + V * max(0.0, outerIntersections.x);
        var end : vec3<f32>= eye0 + V * outerIntersections.y;

        AerialPerspective(setting, start, end, V, L, neg);

        //bool intersectionTest = innerIntersections.x < 0.0 && innerIntersections.y < 0.0;
        //return intersectionTest ? 1.0 : 0.0;

        if(innerIntersections.x < 0.0 && innerIntersections.y < 0.0){
          return 1.0;
        }
        return 0.0;
      }

      fn ComputeSkyInscattering(setting: ScatteringParams, eye: vec3<f32>, V: vec3<f32>, L: vec3<f32>) -> vec4<f32>
      {
        transmittance = vec3<f32>(1.0);
        insctrMie = vec3<f32>(0.0);
        insctrRayleigh = vec3<f32>(0.0);
        var intersectionTest:f32 = ComputeSkyboxChapman(setting, eye, V, L);

        var phaseTheta = dot(V, L);
        var phaseMie = ComputePhaseMie(phaseTheta, setting.mieG);
        var phaseRayleigh = ComputePhaseRayleigh(phaseTheta);
        var phaseNight = 1.0 - saturate(transmittance.x * EPSILON);

        var insctrTotalMie: vec3<f32> = insctrMie * phaseMie;
        var insctrTotalRayleigh: vec3<f32> = insctrRayleigh * phaseRayleigh;

        var sky: vec3<f32> = (insctrTotalMie + insctrTotalRayleigh) * setting.sunRadiance;
        if(uniformBuffer.displaySun > 0.5){
          var angle:f32 = saturate((1.0 - phaseTheta) * setting.sunRadius);
          var cosAngle:f32 = cos(angle * PI * 0.5);
          var edge:f32 = 0.0;
          if(angle >= 0.9){
            edge = smoothstep(0.9, 1.0, angle);
          }

          var limbDarkening: vec3<f32> = GetTransmittance(setting, -L, V);
          limbDarkening *= pow(vec3<f32>(cosAngle), vec3<f32>(0.420, 0.503, 0.652)) * mix(vec3<f32>(1.0), vec3<f32>(1.2,0.9,0.5), edge) * intersectionTest;
          sky += limbDarkening * uniformBuffer.sunBrightness; 
        }
        return vec4<f32>(sky, phaseNight * intersectionTest);
      }

      fn TonemapACES(x: vec3<f32>) -> vec3<f32>
      {
        var A:f32 = 2.51f;
        var B:f32 = 0.03f;
        var C:f32 = 2.43f;
        var D:f32 = 0.59f;
        var E:f32 = 0.14f;
        return (x * (A * x + B)) / (x * (C * x + D) + E);
      }

      fn noise(uv:vec2<f32>) -> f32
      {
        return fract(dot(sin(vec3<f32>(uv.xyx) * vec3<f32>(uv.xyy) * 1024.0), vec3<f32>(341896.483, 891618.637, 602649.7031)));
      }

      fn mainImage( uv:vec2<f32> ) -> vec4<f32>
      {
        let eyePosition = uniformBuffer.eyePos;
        var sun = vec2<f32>(uniformBuffer.sunU, uniformBuffer.sunV);
        var V: vec3<f32> = ComputeSphereNormal(uv, 0.0, PI_2, 0.0, PI);
        var L: vec3<f32> = ComputeSphereNormal(vec2<f32>(sun.x, sun.y), 0.0, PI_2, 0.0, PI);

        var setting: ScatteringParams;
        setting.sunRadius = uniformBuffer.sunRadius;//500.0;
        setting.sunRadiance = uniformBuffer.sunRadiance;//20.0;
        setting.mieG = uniformBuffer.mieG;//0.76;
        setting.mieHeight = uniformBuffer.mieHeight;// 1200.0;
        setting.rayleighHeight = 8000.0;
        setting.earthRadius = 6360000.0;
        setting.earthAtmTopRadius = 6420000.0;
        setting.earthCenter = vec3<f32>(0, -setting.earthRadius, 0);
        setting.waveLambdaMie = vec3<f32>(0.0000002);

        // wavelength with 680nm, 550nm, 450nm
        setting.waveLambdaRayleigh = ComputeWaveLambdaRayleigh(vec3<f32>(0.000000680, 0.000000550, 0.000000450));

        // see https://www.shadertoy.com/view/MllBR2
        setting.waveLambdaOzone = vec3<f32>(1.36820899679147, 3.31405330400124, 0.13601728252538)* 0.0000006 * 2.504;

        var eye:vec3<f32> = vec3<f32>(0,eyePosition,0);
        var sky0:vec4<f32> = ComputeSkyInscattering(setting, eye, V, L);
        var sky = vec3<f32>(sky0.rgb);

        // sky = TonemapACES(sky.rgb * 2.0);
        sky = pow(sky.rgb, vec3<f32>(1.0/1.2)); // gamma

        var fragColor:vec4<f32> = vec4<f32>((sky.rgb  ), 1.0);
        return fragColor;
      }
    `);class Hm{constructor(){o(this,"sunRadius",500),o(this,"sunRadiance",10),o(this,"mieG",.76),o(this,"mieHeight",1200),o(this,"eyePos",1500),o(this,"sunX",.55),o(this,"sunY",.54),o(this,"sunBrightness",1),o(this,"displaySun",!0),o(this,"defaultTextureCubeSize",512),o(this,"defaultTexture2DSize",1024),o(this,"skyColor",new y(1,1,1,1))}}class Xm extends oa{constructor(e){return super(),o(this,"_internalTexture"),o(this,"_cubeSize"),o(this,"setting"),this.setting=e,this._cubeSize=e.defaultTextureCubeSize,this._internalTexture=new Wm(e.defaultTexture2DSize,.5*e.defaultTexture2DSize),this._internalTexture.update(this.setting),this.createFromTexture(this._cubeSize,this._internalTexture),this}get texture2D(){return this._internalTexture}apply(){return this._internalTexture.update(this.setting),this.uploadErpTexture(this._internalTexture),this}}class Wm extends Tt{constructor(e,t){super(e,t,ae.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),o(this,"_computeShader"),o(this,"_uniformBuffer"),this.initCompute(e,t)}initCompute(e,t){this._uniformBuffer=new ba(64),this._uniformBuffer.apply(),this._computeShader=new bi(Vl.cs),this._computeShader.setUniformBuffer("uniformBuffer",this._uniformBuffer),this._computeShader.setStorageTexture("outTexture",this),this._computeShader.workerSizeX=e/8,this._computeShader.workerSizeY=t/8}update(e){return this._uniformBuffer.setFloat("width",this.width),this._uniformBuffer.setFloat("height",this.height),this._uniformBuffer.setFloat("sunU",e.sunX),this._uniformBuffer.setFloat("sunV",e.sunY),this._uniformBuffer.setFloat("eyePos",e.eyePos),this._uniformBuffer.setFloat("sunRadius",e.sunRadius),this._uniformBuffer.setFloat("sunRadiance",e.sunRadiance),this._uniformBuffer.setFloat("mieG",e.mieG),this._uniformBuffer.setFloat("mieHeight",e.mieHeight),this._uniformBuffer.setFloat("sunBrightness",e.sunBrightness),this._uniformBuffer.setFloat("displaySun",e.displaySun?1:0),this._uniformBuffer.setColor("skyColor",e.skyColor),this._uniformBuffer.apply(),e=P.beginCommandEncoder(),P.computeCommand(e,[this._computeShader]),P.endCommandEncoder(e),this}}class Km extends ar{constructor(){super(),o(this,"transparency"),o(this,"metallic"),this.setShader("sky_vs_frag_wgsl","sky_fs_frag_wgsl"),this.getShader().setUniformVector3("eyesPos",new p),this.getShader().setUniformFloat("exposure",1),this.getShader().setUniformFloat("roughness",0);var e=this.getShader().shaderState;e.frontFace="cw",e.cullMode=yi.back,e.depthWriteEnabled=!1,e.depthCompare=fs.less}set envMap(e){}set shadowMap(e){}get exposure(){return T.setting.sky.skyExposure}set exposure(e){T.setting.sky.skyExposure=e}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){"roughness"in this.renderShader.uniforms&&(this.renderShader.uniforms.roughness.value=e)}}class ha extends ms{constructor(e,t,i,s,a,n,h){super(),o(this,"shape_vertices",[]),o(this,"shape_indices",[]),o(this,"radius"),o(this,"widthSegments"),o(this,"heightSegments"),o(this,"phiStart"),o(this,"phiLength"),o(this,"thetaStart"),o(this,"thetaLength"),this.radius=e,this.widthSegments=t,this.heightSegments=i,this.phiStart=s,this.phiLength=a,this.thetaStart=n,this.thetaLength=h,this.buildGeometry()}buildGeometry(){var e,t=0,i=this.heightSegments,s=this.widthSegments,a=this.radius,n=(i+1)*(s+1);let h=new Float32Array(3*n),l=new Float32Array(3*n),u=new Float32Array(2*n),c=new Uint16Array(s*i*2*3),d=0,f=0,m=0;for(e=0;e<=i;++e)for(var _=Math.PI*e/i,g=-a*Math.cos(_),w=a*Math.sin(_),C=0;C<=s;++C){var b,I=2*Math.PI*C/s,E=w*Math.cos(I),I=w*Math.sin(I),N=1/Math.sqrt(E*E+I*I+g*g);h[d++]=E,h[d++]=I,h[d++]=g,l[f++]=E*N,l[f++]=I*N,l[f++]=g*N,u[m++]=C/s,u[m++]=e/i,0<C&&0<e&&(I=(E=(s+1)*e+C)-1,N=(s+1)*(e-1)+C-1,b=(s+1)*(e-1)+C,e==i?(c[t++]=E,c[t++]=N,c[t++]=b):e==1?(c[t++]=E,c[t++]=I,c[t++]=N):(c[t++]=E,c[t++]=I,c[t++]=N,c[t++]=E,c[t++]=N,c[t++]=b))}this.setIndices(c),this.setAttribute(ne.position,h),this.setAttribute(ne.normal,l),this.setAttribute(ne.uv,u),this.setAttribute(ne.TEXCOORD_1,u),this.addSubGeometry({indexStart:0,indexCount:c.length,vertexStart:0,index:0})}}class Ym extends Fe{constructor(){super(),o(this,"skyMaterial"),this.castShadow=!1,this.castGI=!0,this.addRendererMask(ot.Sky),this.alwaysRender=!0}init(){super.init(),this.object3D.bound=new pt(p.ZERO.clone(),p.MAX),this.geometry=new ha(T.setting.sky.defaultFar,20,20),this.skyMaterial||(this.skyMaterial=new Km)}onEnable(){this._readyPipeline?(this.castNeedPass(this.materials[0].getShader()),!this._inRenderer&&this.transform.scene3D&&((te.instance.sky=this)._inRenderer=!0)):this.initPipeline()}onDisable(){this._inRenderer&&this.transform.scene3D&&(this._inRenderer=!1,te.instance.sky=null)}renderPass2(e,t,i,s,a,n=!1){this.transform.updateWorldMatrix(),super.renderPass2(e,t,i,s,a,n)}set map(e){this.skyMaterial.baseMap=e,this.skyMaterial.name==null&&(this.skyMaterial.name="skyMaterial"),this.material=this.skyMaterial}get map(){return this.skyMaterial.baseMap}get exposure(){return this.skyMaterial.exposure}set exposure(e){this.skyMaterial&&(this.skyMaterial.exposure=e)}get roughness(){return this.skyMaterial.roughness}set roughness(e){this.skyMaterial&&(this.skyMaterial.roughness=e)}}class jm extends Ym{constructor(){super(...arguments),o(this,"_atmosphericScatteringSky"),o(this,"_onChange",!0)}get sunX(){return this._atmosphericScatteringSky.setting.sunX}set sunX(e){this._atmosphericScatteringSky.setting.sunX!=e&&(this._atmosphericScatteringSky.setting.sunX=e,this._onChange=!0)}get sunY(){return this._atmosphericScatteringSky.setting.sunY}set sunY(e){this._atmosphericScatteringSky.setting.sunY!=e&&(this._atmosphericScatteringSky.setting.sunY=e,this._onChange=!0)}get eyePos(){return this._atmosphericScatteringSky.setting.eyePos}set eyePos(e){this._atmosphericScatteringSky.setting.eyePos!=e&&(this._atmosphericScatteringSky.setting.eyePos=e,this._onChange=!0)}get sunRadius(){return this._atmosphericScatteringSky.setting.sunRadius}set sunRadius(e){this._atmosphericScatteringSky.setting.sunRadius!=e&&(this._atmosphericScatteringSky.setting.sunRadius=e,this._onChange=!0)}get sunRadiance(){return this._atmosphericScatteringSky.setting.sunRadiance}set sunRadiance(e){this._atmosphericScatteringSky.setting.sunRadiance!=e&&(this._atmosphericScatteringSky.setting.sunRadiance=e,this._onChange=!0)}get sunBrightness(){return this._atmosphericScatteringSky.setting.sunBrightness}set sunBrightness(e){this._atmosphericScatteringSky.setting.sunBrightness!=e&&(this._atmosphericScatteringSky.setting.sunBrightness=e,this._onChange=!0)}get displaySun(){return this._atmosphericScatteringSky.setting.displaySun}set displaySun(e){this._atmosphericScatteringSky.setting.displaySun!=e&&(this._atmosphericScatteringSky.setting.displaySun=e,this._onChange=!0)}init(){super.init(),this._atmosphericScatteringSky=new Xm(new Hm)}start(){var e=this.transform.scene3D;this.map=this._atmosphericScatteringSky,e.envMap=this._atmosphericScatteringSky,super.start()}onUpdate(e){this._onChange&&(console.log("change sky"),this._onChange=!1,this._atmosphericScatteringSky.apply())}}var qm=(r=>(r[r.Normal=0]="Normal",r[r.BillboardY=9]="BillboardY",r[r.BillboardXYZ=10]="BillboardXYZ",r))(qm||{}),to=(r=>(r[r.None=0]="None",r[r.Box=1]="Box",r[r.Capsule=2]="Capsule",r[r.Sphere=3]="Sphere",r[r.Mesh=4]="Mesh",r))(to||{});class Hl{constructor(){o(this,"_center"),o(this,"_size"),o(this,"_halfSize"),o(this,"_shapeType",0),this._center=new p,this._size=new p,this._halfSize=new p}get shapeType(){return this._shapeType}setFromCenterAndSize(e,t){return e&&this._center.copy(e),t&&this._size.copy(t),this}get center(){return this._center}set center(e){this._center.copy(e)}get size(){return this._size}set size(e){this._size.copy(e),this._halfSize.copy(e).multiplyScalar(.5)}get halfSize(){return this._halfSize}rayPick(e,t){return null}}const ji=class extends Hl{constructor(){super(),o(this,"_pickRet"),o(this,"box"),this._shapeType=to.Box,this.box=new pt(new p,new p)}rayPick(s,i){this.box.setFromCenterAndSize(this.center,this.size);var t=ji.helpMatrix,i=(t.copyFrom(i).invert(),ji.helpRay.copy(s)),s=(i.applyMatrix(t),i.intersectBox(this.box,ji.v3_help_0));return s?(this._pickRet||(this._pickRet={intersect:!1,intersectPoint:new p,distance:0}),this._pickRet.intersect=!0,this._pickRet.intersectPoint=s,this._pickRet.distance=p.distance(i.origin,ji.v3_help_0),this._pickRet):null}};let Vs=ji;o(Vs,"v3_help_0",new p),o(Vs,"helpMatrix",new q),o(Vs,"helpRay",new wi);class $m extends Mr{constructor(){super(),o(this,"_shape"),this._shape=new Vs}start(){T.setting.pick.mode=="pixel"&&this.transform.scene3D.view.pickFire.mouseEnableMap.set(this.transform.worldMatrix.index,this)}get shape(){return this._shape}set shape(e){this._shape=e}rayPick(e){return this._enable?this._shape.rayPick(e,this.transform.worldMatrix):null}destroy(){T.setting.pick.mode=="pixel"&&this.transform.scene3D.view.pickFire.mouseEnableMap.delete(this.transform.worldMatrix.index),super.destroy()}}var Zm=(r=>(r[r.PingPong=0]="PingPong",r[r.Repeat=1]="Repeat",r[r.Clamp=2]="Clamp",r))(Zm||{}),qi=(r=>(r[r.Default=0]="Default",r[r.Clamp=1]="Clamp",r[r.Once=1]="Once",r[r.Loop=2]="Loop",r[r.PingPong=4]="PingPong",r[r.ClampForever=8]="ClampForever",r))(qi||{});class fr{}o(fr,"property",{"m_LocalPosition.x":"localPosition.x","m_LocalPosition.y":"localPosition.y","m_LocalPosition.z":"localPosition.z","m_LocalRotation.x":"localQuaternion.x","m_LocalRotation.y":"localQuaternion.y","m_LocalRotation.z":"localQuaternion.z","m_LocalRotation.w":"localQuaternion.w","localEulerAnglesRaw.x":"localRotation.x","localEulerAnglesRaw.y":"localRotation.y","localEulerAnglesRaw.z":"localRotation.z","m_LocalEulerAngles.x":"localRotation.x","m_LocalEulerAngles.y":"localRotation.y","m_LocalEulerAngles.z":"localRotation.z","m_LocalScale.x":"localScale.x","m_LocalScale.y":"localScale.y","m_LocalScale.z":"localScale.z","m_Color.r":"r","m_Color.g":"g","m_Color.b":"b","m_Color.a":"alpha","field of view":"camera3D.fov",m_IsActive:"visible",m_Sprite:"texture",m_FlipX:"flipX",m_FlipY:"flipY"}),o(fr,"property_quaternion",{"m_LocalRotation.x":!0,"m_LocalRotation.y":!0,"m_LocalRotation.z":!0,"m_LocalRotation.w":!0}),o(fr,"property_scale",{"m_LocalPosition.x":-1,"m_LocalPosition.y":1,"m_LocalPosition.z":1,"localEulerAnglesRaw.x":-1,"localEulerAnglesRaw.y":1,"localEulerAnglesRaw.z":1,"m_LocalEulerAngles.x":-1,"m_LocalEulerAngles.y":1,"m_LocalEulerAngles.z":1,"m_LocalRotation.x":-1,"m_LocalRotation.y":1,"m_LocalRotation.z":1,"m_LocalRotation.w":-1,"m_LocalScale.x":1,"m_LocalScale.y":1,"m_LocalScale.z":1,"m_Color.r":1,"m_Color.g":1,"m_Color.b":1,"m_Color.a":1,"field of view":1,m_IsActive:1,m_Sprite:1}),o(fr,"property_offset",{"m_LocalPosition.x":0,"m_LocalPosition.y":0,"m_LocalPosition.z":0,"localEulerAnglesRaw.x":0,"localEulerAnglesRaw.y":0,"localEulerAnglesRaw.z":0,"m_LocalEulerAngles.x":0,"m_LocalEulerAngles.y":0,"m_LocalEulerAngles.z":0,"m_LocalRotation.x":0,"m_LocalRotation.y":0,"m_LocalRotation.z":0,"m_LocalRotation.w":0,"m_LocalScale.x":0,"m_LocalScale.y":0,"m_LocalScale.z":0,"field of view":0,"m_Color.r":0,"m_Color.g":0,"m_Color.b":0,"m_Color.a":0,m_IsActive:0,m_Sprite:0});const on=class{constructor(r){o(this,"_propertyAnimClip"),o(this,"_target"),o(this,"_animation"),o(this,"_propertyCache"),o(this,"_bindObjects",[]),o(this,"_currentClip"),o(this,"_frame",0),o(this,"_time",0),o(this,"_isPlaying",!0),o(this,"speed",1),this._target=r.object3D,this._animation=r,this._propertyAnimClip={},this._propertyCache={}}get object3D(){return this._target}get time(){return this._time}get currentClip(){return this._currentClip}getClip(r){return this._propertyAnimClip[r]}addClip(r){for(const i in(this._propertyAnimClip[r.name]=r).objAnimClip){let s=r.objAnimClip[i],a=this._target;a=i==""?this._target:this._target.getObjectByName(i);var e=s.curve;for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var t=fr.property[n].split(".");if(a){this._bindObjects.indexOf(a)==-1&&this._bindObjects.push(a),this._propertyCache[i]==null&&(this._propertyCache[i]={}),this._propertyCache[i][n]={value:a[t[0]],property:t[1]};for(let h=1;h<t.length-1;h++)this._propertyCache[i][n]={value:a[t[h]],property:t[h+1]}}}}return this}play(r,e=!0){var t=this._propertyAnimClip[r];return t?(this._isPlaying=!0,!e&&this._currentClip&&this._currentClip.name==r||(this._time=0),this._currentClip=t,this._currentClip):null}stop(){return this._isPlaying=!1,this}toggle(){return this._isPlaying=!this._isPlaying,this}get isPlaying(){return this._isPlaying}update(r,e){r*=.001,e*=.001,this._currentClip&&this._frame!=r&&this._isPlaying&&(this._frame=r,r=this._time,this._time=this.calcTime(r+e*this.speed),this.validProperty(),this._currentClip.wrapMode!=qi.Loop&&this._currentClip.wrapMode!=qi.Default&&(0<this.speed?this._time>=this._currentClip.totalTime:this._time<=0)&&(this._isPlaying=!1,this._animation.statusCall(on.Complete,r,this._time)),this._animation.statusCall(on.Seek,r,this._time))}seek(r){return this._time=this.calcTime(r),this.validProperty(),this}calcTime(r){return r=this._currentClip.wrapMode==qi.Loop||this._currentClip.wrapMode==qi.Default?dl(r,this._currentClip.totalTime):ft(r,0,this._currentClip.totalTime)}validProperty(){if(this._target)for(const a in this._currentClip.objAnimClip){let n=this._currentClip.objAnimClip[a],h=!1,l=n.curve;for(const u in l){var r,e,t;Object.prototype.hasOwnProperty.call(l,u)&&(t=l[u],r=this._propertyCache[a][u],e=fr.property_scale[u],h=h||fr.property_quaternion[u],t=t.getValue(this._time)*e+fr.property_offset[u],r.value[r.property]=t)}var i;h&&(i=this._target.transform,q.getEuler(i.localRotation,i.localRotQuat,!0,"YXZ"))}for(var s of this._bindObjects)s.transform.notifyChange()}};let nh=on;o(nh,"Complete",0),o(nh,"Seek",1);class oh extends wt{constructor(e,t){super(t),o(this,"animation"),o(this,"frame"),this.animation=e}}o(oh,"SEEK","SEEK"),o(oh,"COMPLETE","COMPLETE");class hh extends ar{constructor(){super(),G.register("UnLitShader",Gm);var e=this.setShader("UnLitShader","UnLitShader"),t=(e.setShaderEntry("VertMain","FragMain"),e.setUniformVector4("transformUV1",new de(0,0,1,1)),e.setUniformVector4("transformUV2",new de(0,0,1,1)),e.setUniformColor("baseColor",new y),e.setUniformFloat("alphaCutoff",.5),e.shaderState);t.acceptShadow=!1,t.receiveEnv=!1,t.acceptGI=!1,t.useLight=!1,e.setUniformColor("ccc",new y(1,0,0,1)),this.baseMap=T.res.whiteTexture}set envMap(e){}set shadowMap(e){}debug(){}}class Hs extends ms{constructor(e=1,t=1,i=1){super(),o(this,"width"),o(this,"height"),o(this,"depth"),this.width=e,this.height=t,this.depth=i,this.initVertex()}initVertex(){var e=this.width/2,t=this.height/2,i=this.depth/2,e=(this.bounds=new pt(p.ZERO.clone(),new p(this.width,this.height,this.depth)),new Float32Array([-e,t,i,e,t,i,e,t,-i,-e,t,-i,-e,t,i,e,t,-i,e,-t,i,-e,-t,i,-e,-t,-i,e,-t,-i,e,-t,i,-e,-t,-i,-e,-t,i,-e,t,i,-e,t,-i,-e,-t,-i,-e,-t,i,-e,t,-i,e,t,i,e,-t,i,e,-t,-i,e,t,-i,e,t,i,e,-t,-i,e,t,i,-e,t,i,-e,-t,i,-e,-t,i,e,-t,i,e,t,i,e,-t,-i,-e,-t,-i,-e,t,-i,e,t,-i,e,-t,-i,-e,t,-i])),t=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),i=new Float32Array([1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0]),s=[0,2,1,3,5,4,6,8,7,9,11,10,12,14,13,15,17,16,18,20,19,21,23,22,24,26,25,27,29,28,30,32,31,33,35,34],a=new Uint16Array(s.reverse());this.setIndices(a),this.setAttribute(ne.position,e),this.setAttribute(ne.normal,t),this.setAttribute(ne.uv,i),this.setAttribute(ne.TEXCOORD_1,i),this.addSubGeometry({indexStart:0,indexCount:s.length,vertexStart:0,index:0})}}var hn=(r=>(r[r.Key_BackSpace=8]="Key_BackSpace",r[r.Key_Tab=9]="Key_Tab",r[r.Key_Clear=12]="Key_Clear",r[r.Key_Enter=13]="Key_Enter",r[r.Key_Shift_L=16]="Key_Shift_L",r[r.Key_Control_L=17]="Key_Control_L",r[r.Key_Alt_L=18]="Key_Alt_L",r[r.Key_Pause=19]="Key_Pause",r[r.Key_CapsLock=20]="Key_CapsLock",r[r.Key_Escape=21]="Key_Escape",r[r.Key_Esc=27]="Key_Esc",r[r.Key_Space=32]="Key_Space",r[r.Key_Prior=33]="Key_Prior",r[r.Key_Next=34]="Key_Next",r[r.Key_End=35]="Key_End",r[r.Key_Home=36]="Key_Home",r[r.Key_Left=37]="Key_Left",r[r.Key_Up=38]="Key_Up",r[r.Key_Right=39]="Key_Right",r[r.Key_Down=40]="Key_Down",r[r.Key_Select=41]="Key_Select",r[r.Key_Print=42]="Key_Print",r[r.Key_Execute=43]="Key_Execute",r[r.Key_Insert=45]="Key_Insert",r[r.Key_Delete=46]="Key_Delete",r[r.Key_Help=47]="Key_Help",r[r.Key_0=48]="Key_0",r[r.Key_1=49]="Key_1",r[r.Key_2=50]="Key_2",r[r.Key_3=51]="Key_3",r[r.Key_4=52]="Key_4",r[r.Key_5=53]="Key_5",r[r.Key_6=54]="Key_6",r[r.Key_7=55]="Key_7",r[r.Key_8=56]="Key_8",r[r.Key_9=57]="Key_9",r[r.Key_A=65]="Key_A",r[r.Key_B=66]="Key_B",r[r.Key_C=67]="Key_C",r[r.Key_D=68]="Key_D",r[r.Key_E=69]="Key_E",r[r.Key_F=70]="Key_F",r[r.Key_G=71]="Key_G",r[r.Key_H=72]="Key_H",r[r.Key_I=73]="Key_I",r[r.Key_J=74]="Key_J",r[r.Key_K=75]="Key_K",r[r.Key_L=76]="Key_L",r[r.Key_M=77]="Key_M",r[r.Key_N=78]="Key_N",r[r.Key_O=79]="Key_O",r[r.Key_P=80]="Key_P",r[r.Key_Q=81]="Key_Q",r[r.Key_R=82]="Key_R",r[r.Key_S=83]="Key_S",r[r.Key_T=84]="Key_T",r[r.Key_U=85]="Key_U",r[r.Key_V=86]="Key_V",r[r.Key_W=87]="Key_W",r[r.Key_X=88]="Key_X",r[r.Key_Y=89]="Key_Y",r[r.Key_Z=90]="Key_Z",r[r.Key_KP_0=96]="Key_KP_0",r[r.Key_KP_1=97]="Key_KP_1",r[r.Key_KP_2=98]="Key_KP_2",r[r.Key_KP_3=99]="Key_KP_3",r[r.Key_KP_4=100]="Key_KP_4",r[r.Key_KP_5=101]="Key_KP_5",r[r.Key_KP_6=102]="Key_KP_6",r[r.Key_KP_7=103]="Key_KP_7",r[r.Key_KP_8=104]="Key_KP_8",r[r.Key_KP_9=105]="Key_KP_9",r[r.Key_Multiply=106]="Key_Multiply",r[r.Key_Add=107]="Key_Add",r[r.Key_Separator=108]="Key_Separator",r[r.Key_Subtract=109]="Key_Subtract",r[r.Key_Decimal=110]="Key_Decimal",r[r.Key_Divide=111]="Key_Divide",r[r.Key_F1=112]="Key_F1",r[r.Key_F2=113]="Key_F2",r[r.Key_F3=114]="Key_F3",r[r.Key_F4=115]="Key_F4",r[r.Key_F5=116]="Key_F5",r[r.Key_F6=117]="Key_F6",r[r.Key_F7=118]="Key_F7",r[r.Key_F8=119]="Key_F8",r[r.Key_F9=120]="Key_F9",r[r.Key_F10=121]="Key_F10",r[r.Key_F11=122]="Key_F11",r[r.Key_F12=123]="Key_F12",r[r.Key_F13=124]="Key_F13",r[r.Key_F14=125]="Key_F14",r[r.Key_F15=126]="Key_F15",r[r.Key_F16=127]="Key_F16",r[r.Key_F17=128]="Key_F17",r[r.Key_F18=129]="Key_F18",r[r.Key_F19=130]="Key_F19",r[r.Key_F20=131]="Key_F20",r[r.Key_F21=132]="Key_F21",r[r.Key_F22=133]="Key_F22",r[r.Key_F23=134]="Key_F23",r[r.Key_F24=135]="Key_F24",r[r.Key_Num_Lock=136]="Key_Num_Lock",r[r.Key_Scroll_Lock=137]="Key_Scroll_Lock",r))(hn||{});class Ms{static add(e,t,i){return(i=i||new p).x=e.x+t.x,i.y=e.y+t.y,i.z=e.z+t.z,i}static sub(e,t,i){return(i=i||new p).x=e.x-t.x,i.y=e.y-t.y,i.z=e.z-t.z,i}static mul(e,t,i){return(i=i||new p).x=e.x*t.x,i.y=e.y*t.y,i.z=e.z*t.z,i}static mulScale(e,t,i){return(i=i||new p).x=e.x*t,i.y=e.y*t,i.z=e.z*t,i}static div(e,t,i){return(i=i||new p).x=e.x/t.x,i.y=e.y/t.y,i.z=e.z/t.z,i}static normalize(e){return e.clone().normalize()}static dot(e,t){var i=p.HELP_0;return i.copyFrom(e),i.dotProduct(t)}static calculateVectorAngle_xz(e,t){return Math.acos((e.x*t.x+e.y*t.y)/Math.sqrt((e.x*e.x+e.y*e.y)*(t.x*t.x+t.y*t.y)))}static distance(e,t){return p.distance(e,t)}static getRandomXYZ(e=-100,t=100){return new p(Math.random()*t+e,Math.random()*t+e,Math.random()*t+e)}static getRandomV3(e=-100,t=100,i,s){return new p(Math.random()*t+e,Math.random()*s+i,Math.random()*t+e)}}class Qm extends Mr{constructor(){super(),o(this,"camera"),o(this,"minDistance",.1),o(this,"maxDistance",500),o(this,"rollSmooth",15),o(this,"dragSmooth",20),o(this,"wheelSmooth",10),o(this,"wheelStep",.002),o(this,"mouseRightFactor",.5),o(this,"mouseLeftFactor",20),o(this,"smooth",!0),o(this,"_wheelStep",.002),o(this,"_distance",0),o(this,"distance",10),o(this,"_roll",0),o(this,"roll",0),o(this,"_pitch",0),o(this,"pitch",0),o(this,"_currentPos"),o(this,"_targetPos"),o(this,"_mouseLeftDown",!1),o(this,"_mouseRightDown",!1),o(this,"_bottomClamp",89.99),o(this,"_topClamp",-89.99),o(this,"_tempDir",new p),o(this,"_tempPos",new p),this._currentPos=new pe,this._targetPos=new pe}start(){this.camera=this.object3D.getOrAddComponent(Gn),T.inputSystem.addEventListener(K.POINTER_DOWN,this.onMouseDown,this),T.inputSystem.addEventListener(K.POINTER_MOVE,this.onMouseMove,this),T.inputSystem.addEventListener(K.POINTER_UP,this.onMouseUp,this),T.inputSystem.addEventListener(K.POINTER_WHEEL,this.onMouseWheel,this)}setCamera(e,t,i,s){this.roll=e,this.pitch=t,this.distance=i,this.maxDistance=1.2*i,s&&this._targetPos.transform.localPosition.copy(s)}focusByBounds(e){e=dr.genMeshBounds(e),this.target=e.center,console.log(e.size),console.log(e.center)}set target(e){this._targetPos.transform.localPosition.copy(e)}get target(){return this._targetPos.transform.localPosition}onMouseWheel(e){this.enable&&(this._wheelStep=this.wheelStep*Ms.distance(this._currentPos.transform.worldPosition,this.camera.transform.worldPosition)/10,this.distance-=T.inputSystem.wheelDelta*this._wheelStep,this.distance=ft(this.distance,this.minDistance,this.maxDistance))}onMouseDown(e){if(this.enable)switch(e.mouseCode){case 0:this._mouseLeftDown=!0;break;case 1:break;case 2:this._mouseRightDown=!0}}onMouseUp(e){this._mouseLeftDown=!1,this._mouseRightDown=!1}onMouseMove(e){var t;this.enable&&(this._mouseRightDown&&(t=this.camera.transform.forward,Ms.mulScale(t,.25*e.movementY*this.camera.aspect,p.HELP_1),this._targetPos.x+=p.HELP_1.x*this.mouseRightFactor,this._targetPos.z+=p.HELP_1.z*this.mouseRightFactor,t=this.camera.transform.right,Ms.mulScale(t,.25*-e.movementX,p.HELP_1),this._targetPos.x-=p.HELP_1.x*this.mouseRightFactor,this._targetPos.z-=p.HELP_1.z*this.mouseRightFactor),this._mouseLeftDown)&&(this.roll-=e.movementX*ze.delta*.001*this.mouseLeftFactor,this.pitch-=e.movementY*ze.delta*.001*this.mouseLeftFactor,this.pitch=ft(this.pitch,this._topClamp,this._bottomClamp))}onUpdate(){var e;this.enable&&(e=ft(ze.delta,0,.016),this.smooth?(this._currentPos.x+=(this._targetPos.x-this._currentPos.x)*e*this.dragSmooth,this._currentPos.y+=(this._targetPos.y-this._currentPos.y)*e*this.dragSmooth,this._currentPos.z+=(this._targetPos.z-this._currentPos.z)*e*this.dragSmooth,this._distance+=(this.distance-this._distance)*e*this.wheelSmooth,this._roll+=(this.roll-this._roll)*e*this.rollSmooth,this._pitch+=(this.pitch-this._pitch)*e*this.rollSmooth):(this._currentPos.x=this._targetPos.x,this._currentPos.y=this._targetPos.y,this._currentPos.z=this._targetPos.z,this._distance=this.distance,this._roll=this.roll,this._pitch=this.pitch),this._tempDir.set(0,0,1),(e=_e.HELP_0).fromEulerAngles(this._pitch,this._roll,0),this._tempDir.applyQuaternion(e),this._tempPos=Ms.mulScale(this._tempDir,this._distance,this._tempPos),this._tempPos.add(this._currentPos.transform.localPosition,this._tempPos),this.transform.lookAt(this._tempPos,this._currentPos.transform.localPosition,p.UP),this.camera.lookTarget.copy(this._currentPos.transform.localPosition))}destroy(){this.camera=null,T.inputSystem.removeEventListener(K.POINTER_DOWN,this.onMouseDown,this),T.inputSystem.removeEventListener(K.POINTER_MOVE,this.onMouseMove,this),T.inputSystem.removeEventListener(K.POINTER_UP,this.onMouseUp,this),T.inputSystem.removeEventListener(K.POINTER_WHEEL,this.onMouseWheel,this),super.destroy()}}class ro{constructor(e,t){o(this,"center",new p),o(this,"extents"),o(this,"max"),o(this,"min"),o(this,"size"),o(this,"tmpVecA",new p),o(this,"tmpVecB",new p),o(this,"tmpVecC",new p),o(this,"tmpVecD",new p),o(this,"radius",0),o(this,"diffBetweenPoints",new p),o(this,"owner"),o(this,"forward",new p(0,0,1)),o(this,"_center",new p),this.center=e||new p(0,0,0),this.radius=t===void 0?.5:t}containsPoint(t){var t=this.tmpVecA.subtract(t,this.center).lengthSquared,i=this.radius;return t<i*i}intersectsRay(e,t){var s=this.tmpVecA.copyFrom(e.origin).subtract(this.center),i=s.dotProduct(this.tmpVecB.copyFrom(e.direction).normalize()),s=s.dotProduct(s)-this.radius*this.radius;return 0<s&&0<i?null:!((s=i*i-s)<0||(i=Math.abs(-i-Math.sqrt(s)),t&&t.copyFrom(e.direction).scaleBy(i).add(e.origin),0))}intersectsBoundingSphere(e){return this.tmpVecA.subtract(e.center,this.center),e=e.radius+this.radius,this.tmpVecA.lengthSquared<=e*e}calculateTransform(e){this.update(e)}containsFrustum(e,t){return t.containsSphere(e)}clone(){return new ro(this.center.clone(),this.radius)}update(e){this.owner=e,this._center.add(e.transform.worldMatrix.position,this.center),this.forward=e.transform.forward}merge(e){throw new Error("BoundingSphere merge is not ready!")}setFromCenterAndSize(e,t){this.center.copy(e),this.radius=t}}const Xs=class extends Hl{constructor(r){super(),o(this,"_pickRet"),o(this,"box"),o(this,"radius",.5),this._shapeType=to.Sphere,this.radius=r,this.box=new ro(new p,1)}rayPick(s,i){this.box.setFromCenterAndSize(this.center,this.radius);var t=Xs.helpMatrix,i=(t.copyFrom(i).invert(),Xs.helpRay.copy(s)),s=(i.applyMatrix(t),i.intersectSphere(i.origin,i.direction,this.box.center,this.box.radius));return s?(this._pickRet||(this._pickRet={intersect:!1,intersectPoint:new p,distance:0}),this._pickRet.intersect=!0,this._pickRet.intersectPoint=s,this._pickRet.distance=p.distance(i.origin,Xs.v3_help_0),this._pickRet):null}};let ka=Xs;o(ka,"v3_help_0",new p),o(ka,"helpMatrix",new q),o(ka,"helpRay",new wi);class Jm extends pe{constructor(){super(),o(this,"_envMap"),o(this,"skyObject"),o(this,"envMapChange",!0),o(this,"view"),(this.transform.scene3D=this).skyObject=new pe,this.addChild(this.skyObject),this._isScene3D=!0,this.envMap||(this.envMap=T.res.defaultSky)}get envMap(){return this._envMap}set envMap(e){this._envMap!=e&&(this.envMapChange=!0),this._envMap=e,te.instance.sky&&"map"in te.instance.sky&&(te.instance.sky.map=e)}get exposure(){return te.instance.sky&&"exposure"in te.instance.sky?te.instance.sky.exposure:0}set exposure(e){te.instance.sky&&"exposure"in te.instance.sky&&(te.instance.sky.exposure=e,T.setting.sky.skyExposure=e)}get roughness(){if(te.instance.sky&&"roughness"in te.instance.sky)return te.instance.sky.roughness}set roughness(e){te.instance.sky&&"roughness"in te.instance.sky&&(te.instance.sky.roughness=e)}}class eg{constructor(){o(this,"_computeShader"),o(this,"_outBuffer")}init(){var e=Ca.getGBufferFrame("ColorPassGBuffer");this._computeShader=new bi(Fm),this._outBuffer=new zs(32),this._computeShader.setStorageBuffer("outBuffer",this._outBuffer),this._computeShader.setSamplerTexture("visibleMap",e.getPositionMap())}compute(e){e=St.getCameraGroup(e.camera),this._computeShader.setStorageBuffer("standUniform",e.uniformGPUBuffer),e=P.beginCommandEncoder(),P.computeCommand(e,[this._computeShader]),P.endCommandEncoder(e),this._outBuffer.readBuffer()}getPickMeshID(){var e=this._outBuffer.outFloat32Array[0]+.1;return Math.floor(e)}getPickWorldPosition(e){e=e||new p;var t=this._outBuffer.outFloat32Array[4],i=this._outBuffer.outFloat32Array[5],s=this._outBuffer.outFloat32Array[6];return e.set(t,i,s),e}getPickScreenUV(e){e=e||new Ge;var t=this._outBuffer.outFloat32Array[2],i=this._outBuffer.outFloat32Array[3];return e.set(t,i),e}}class tg extends Li{constructor(e){super(),o(this,"ray"),o(this,"isTouching",!1),o(this,"_mouseCode"),o(this,"_pickEvent"),o(this,"_outEvent"),o(this,"_overEvent"),o(this,"_upEvent"),o(this,"_downEvent"),o(this,"_mouseMove"),o(this,"_pickCompute"),o(this,"_lastDownTarget"),o(this,"mouseEnableMap"),o(this,"_view"),o(this,"_lastFocus"),o(this,"_colliderOut",[]),o(this,"_interestList",[]),this._view=e,this.init()}init(){this.ray=new wi,this.mouseEnableMap=new Map,this._pickEvent=new K(K.PICK_CLICK),this._outEvent=new K(K.PICK_OUT),this._overEvent=new K(K.PICK_OVER),this._mouseMove=new K(K.PICK_MOVE),this._upEvent=new K(K.PICK_UP),this._downEvent=new K(K.PICK_DOWN)}start(){T.inputSystem.addEventListener(K.POINTER_DOWN,this.onTouchStart,this),T.inputSystem.addEventListener(K.POINTER_UP,this.onTouchEnd,this),T.inputSystem.addEventListener(K.POINTER_CLICK,this.onTouchOnce,this),T.inputSystem.addEventListener(K.POINTER_MOVE,this.onTouchMove,this),T.setting.pick.mode=="pixel"&&(this._pickCompute=new eg,this._pickCompute.init())}stop(){T.inputSystem.removeEventListener(K.POINTER_DOWN,this.onTouchStart,this),T.inputSystem.removeEventListener(K.POINTER_UP,this.onTouchEnd,this),T.inputSystem.removeEventListener(K.POINTER_CLICK,this.onTouchOnce,this),T.inputSystem.removeEventListener(K.POINTER_MOVE,this.onTouchMove,this)}onTouchStart(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);(this._lastDownTarget=t)&&(this._downEvent.target=t.object3D,this._downEvent.ctrlKey=e.ctrlKey,this._downEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._downEvent),t.object3D.containEventListener(K.PICK_DOWN))&&t.object3D.dispatchEvent(this._downEvent)}onTouchEnd(e){this.isTouching=!1,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);t&&(this._upEvent.target=t.object3D,this._upEvent.ctrlKey=e.ctrlKey,this._upEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._upEvent),t.object3D.containEventListener(K.PICK_UP))&&t.object3D.dispatchEvent(this._upEvent)}getPickInfo(){return{worldPos:this._pickCompute.getPickWorldPosition(),screenUv:this._pickCompute.getPickScreenUV(),meshID:this._pickCompute.getPickMeshID()}}onTouchMove(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);t&&(this._mouseMove.target=t.object3D,this._mouseMove.ctrlKey=e.ctrlKey,this._mouseMove.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._mouseMove),t.object3D.containEventListener(K.PICK_MOVE))&&t.object3D.dispatchEvent(this._mouseMove),t!=this._lastFocus&&(this._lastFocus&&this._lastFocus.object3D&&(this._outEvent.target=t.object3D,this._outEvent.data={pick:this._lastFocus,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this._outEvent.ctrlKey=e.ctrlKey,this.dispatchEvent(this._outEvent),this._lastFocus.object3D.containEventListener(K.PICK_OUT))&&this._lastFocus.object3D.dispatchEvent(this._outEvent),t)&&(this._overEvent.target=t.object3D,this._overEvent.ctrlKey=e.ctrlKey,this._overEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._overEvent),t.object3D.containEventListener(K.PICK_OVER))&&t.object3D.dispatchEvent(this._overEvent),this._lastFocus=t}onTouchOnce(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t,i=this.findNearestObj(this._interestList,this._view.camera);i&&(t=T.setting.pick.mode=="pixel"?this.getPickInfo():null,this._pickEvent.target=i.object3D,this._pickEvent.ctrlKey=e.ctrlKey,this._pickEvent.data={pick:i,pickInfo:t,mouseCode:this._mouseCode},this.dispatchEvent(this._pickEvent),i===this._lastDownTarget)&&i.object3D.containEventListener(K.PICK_CLICK)&&i.object3D.dispatchEvent(this._pickEvent),this._lastDownTarget=null}findNearestObj(e,t){let i=null,s=Number.MAX_VALUE;for(const n of e){var a=p.distance(n.object3D.transform.worldPosition,t.transform.worldPosition);a<s&&(i=n,s=a)}return i}collectEntities(){return this._colliderOut.length=0,this._view.scene.getComponents($m,this._colliderOut),this._colliderOut}pick(e,t){if(this._interestList.length=0,T.setting.pick.mode=="pixel"){this._pickCompute.compute(this._view);var i=this._pickCompute.getPickMeshID(),i=this.mouseEnableMap.get(i);i&&this._interestList.push(i)}else if(T.setting.pick.mode=="bound"){var s;this.ray=t.screenPointToRay(T.inputSystem.mouseX,T.inputSystem.mouseY);for(const a of e)s=a.enable&&a.rayPick(this.ray),s&&this._interestList.push(a)}}}class rg extends $s{constructor(e=0,t=0,i=0,s=0){super(),o(this,"_camera"),o(this,"_scene"),o(this,"_viewPort"),o(this,"_enablePick",!1),o(this,"_enable",!0),o(this,"pickFire"),this._viewPort=new de(e,t,i,s),this.enablePick=!0}get enable(){return this._enable}set enable(e){this._enable=e}get enablePick(){return this._enablePick}set enablePick(e){this._enablePick!=e&&(this.pickFire=new tg(this),this.pickFire.start()),this._enablePick=e}get scene(){return this._scene}set scene(e){(this._scene=e).view=this}get camera(){return this._camera}set camera(e){this._camera=e}get viewPort(){return this._viewPort}set viewPort(e){this._viewPort=e}get graphic3D(){return T.getRenderJob(this).graphic3D}}var ig=(r=>(r[r.position=3]="position",r[r.normal=3]="normal",r[r.TANGENT=4]="TANGENT",r[r.uv=2]="uv",r[r.TEXCOORD_1=2]="TEXCOORD_1",r[r.color=4]="color",r[r.joints0=4]="joints0",r[r.weights0=4]="weights0",r[r.joints1=4]="joints1",r[r.weights1=4]="weights1",r[r.vIndex=1]="vIndex",r[r.a_morphPositions_0=3]="a_morphPositions_0",r))(ig||{});class sg{constructor(){o(this,"min",0),o(this,"max",0)}set(e,t){return this.max=t,this.min=e,this}copy(e){return this.max=e.max,this.min=e.min,this}isInterestRange(e){return!(this.max>e.min||e.max<this.min)}}class ag{constructor(){o(this,"_spaceDesc")}getRange(e){return this._spaceDesc[e]}initSpace(e){this._spaceDesc={};for(var t of e)(this._spaceDesc[t]=new sg).set(-Number.MAX_VALUE,Number.MAX_VALUE);return this}isContain(e,t){return e=this._spaceDesc[e],t>=e.min&&t<e.max}isInterestRange(e,t){return e=this._spaceDesc[e],!!e&&t.isInterestRange(e)}splitSpace(e,t,i){return e=this._spaceDesc[e],t?e.max=i:e.min=i,this}copySpace(e){for(var t in e._spaceDesc){var i=e._spaceDesc[t];this._spaceDesc[t].copy(i)}return this}}const Xl=class{};let gi=Xl;o(gi,"MaxEntityCountInLeaf",4),o(gi,"MaxLayer",10),o(gi,"ClearLeafLayer",Xl.MaxLayer-4);const Wl=class{constructor(){o(this,"uuid","0"),this.uuid=(Wl.UUID++).toString()}};let Kl=Wl;o(Kl,"UUID",0);class ng{constructor(){o(this,"map",{}),o(this,"_count",0)}get count(){return this._count}push(e){return!this.map[e.uuid]&&(this.map[e.uuid]=e,this._count++,!0)}remove(e){return!!this.map[e]&&(delete this.map[e],this._count--,!0)}}const kr=class extends Kl{constructor(r=0){super(),o(this,"_dimensionIndex",0),o(this,"_dimensions"),o(this,"_dimension"),o(this,"_left"),o(this,"_right"),o(this,"_space"),o(this,"_parent"),o(this,"_entities"),o(this,"layer"),o(this,"_splitEntityList",[]),o(this,"pointIntersect",new p),this.layer=r,kr.nodeCount++}get dimension(){return this._dimension}initNode(r,e,t){return this._dimensions=e,this._dimensionIndex=t,this._dimension=e[t],this._space=new ag().initSpace(e),r&&this._space.copySpace(r._space),this._parent=r,this._entities=new ng,this}updateEntity(r){var e;r.isInNode(this,this._dimension)&&(r.attachTreeNode(this),this.autoSplit(),this._left)&&this._right&&(e=(this._dimensionIndex+1)%this._dimensions.length,e=this._dimensions[e],r.isInNode(this._right,e)?this._right.updateEntity(r):r.isInNode(this._left,e)&&this._left.updateEntity(r))}buildRoot(r){for(const e of r)e.entity.attachTreeNode(this);this.autoSplit()}autoSplit(){if(this._entities.count>gi.MaxEntityCountInLeaf&&!this._right&&!this._left&&this.layer<gi.MaxLayer){let t=this._splitEntityList,i=(this._dimensionIndex+1)%this._dimensions.length,s=this._dimensions[i],a=0;for(const n in this._entities.map){var r=this._entities.map[n];a+=r.centerValue(s),t.push(r)}a/=this._entities.count,this._left=new kr(this.layer+1),this._right=new kr(this.layer+1),this._left.initNode(this,this._dimensions,i),this._right.initNode(this,this._dimensions,i),this._left.setSpace(!0,a),this._right.setSpace(!1,a);for(var e of t)e.isInNode(this._right,s)?e.attachTreeNode(this._right):e.isInNode(this._left,s)&&e.attachTreeNode(this._left)}this._left&&this._left.autoSplit(),this._right&&this._right.autoSplit()}setSpace(r,e){return this._parent&&this._space.splitSpace(this._dimension,r,e),this}isEmpty(){return this._left==null&&this._right==null&&this._entities.count==0}pushEntity(r){return this._entities.push(r)}removeEntity(r){return this._entities.remove(r.uuid)}autoClear(){let r=this;for(;r&&r.layer>gi.ClearLeafLayer&&r.clearLeaf();)r=r._parent}clearLeaf(){var r=!this._left&&!this._right,e=!r&&this._left.isEmpty()&&this._right.isEmpty();return e&&(this._left=this._right=null,kr.nodeCount-=2),r||e}isContain(r){return this._space.isContain(this._dimension,r)}nodeIntersectsBox(r){var e=this._space.getRange("x"),t=this._space.getRange("y"),i=this._space.getRange("z"),s=kr.rangeBox;return s.min.set(e.min,t.min,i.min),s.max.set(e.max,t.max,i.max),s.intersectsBox(r)}nodeIntersectsRay(r){var e=this._space.getRange("x"),t=this._space.getRange("y"),i=this._space.getRange("z"),s=kr.rangeBox;return s.min.set(e.min,t.min,i.min),s.max.set(e.max,t.max,i.max),!0}pointCast(r,e=0,t){if(t=t||[],0<this._entities.count){var i,s=this._entities.map;for(i in s){let a=s[i],n=a.entityContainPoint(r);(n=!n&&0<e?a.squareDistanceTo(r,this._dimensions)<=e:n)&&t.push(a)}}this._left&&this._left.isContain(r[this._left.dimension])&&this._left.pointCast(r,e,t),this._right&&this._right.isContain(r[this._right.dimension])&&this._right.pointCast(r,e,t)}boxCast(r,e){if(e=e||[],0<this._entities.count){var t,i=this._entities.map;for(t in i){var s=i[t];s.entityIntersectsBox(r)&&e.push(s)}}this._left&&this._left.nodeIntersectsBox(r)&&this._left.boxCast(r,e),this._right&&this._right.nodeIntersectsBox(r)&&this._right.boxCast(r,e)}rayCast(r,e,t){e=e||[],t=t||[];var i=this.pointIntersect;if(0<this._entities.count){var s,a=this._entities.map;for(s in a){var n=a[s];n.entityIntersectsRay(r,i)&&(t.push(new p().copyFrom(i)),e.push(n))}}this._left&&this._left.nodeIntersectsRay(r)&&this._left.rayCast(r,e,t),this._right&&this._right.nodeIntersectsRay(r)&&this._right.rayCast(r,e,t)}};let lh=kr;o(lh,"nodeCount",0),o(lh,"rangeBox",new pt(new p(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),new p(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)));class og extends wt{}o(og,"RESIZE","resize");var hg=(r=>(r[r.MOUSE_LEFT=0]="MOUSE_LEFT",r[r.MOUSE_MID=1]="MOUSE_MID",r[r.MOUSE_RIGHT=2]="MOUSE_RIGHT",r))(hg||{});class uh extends wt{}o(uh,"LOADER_PROGRESS","loaderProgress"),o(uh,"LOADER_COMPLETE","loaderComplete");class Ps extends wt{}o(Ps,"ADDED","added"),o(Ps,"REMOVED","removed"),o(Ps,"CHILD_ADD_EVENT","childAddEvent"),o(Ps,"CHILD_REMOVED","childRemoved");class Na extends wt{}o(Na,"SHOW","show"),o(Na,"HIDE","hide"),o(Na,"UPDATE","update");class lg{constructor(e=2){o(this,"name"),o(this,"index",2),o(this,"gpuBindGroup"),this.index=e}bindTextureToPipeline(e,t){if(!this.gpuBindGroup){var i,s,a=[];for(let n=0;n<t.length;n++)t[n]&&((i=t[n])instanceof xl?a.push({binding:2*n+0,resource:i.gpuSampler},{binding:2*n+1,resource:i.getGPUView()}):i instanceof yl?a.push({binding:2*n+0,resource:i.gpuSampler_comparison},{binding:2*n+1,resource:i.getGPUView()}):i instanceof Tt&&(s=i.format.indexOf("depth")!=-1,a.push({binding:2*n+0,resource:s?i.gpuSampler_comparison:i.gpuSampler},{binding:2*n+1,resource:i.getGPUView()})));e=e.getBindGroupLayout(this.index),this.gpuBindGroup=D.device.createBindGroup({layout:e,entries:a})}}bindTextureToPipeline2(e,t){if(!this.gpuBindGroup){var i,s=[];for(let a=0;a<t.length;a++)t[a]&&(i=t[a],s.push({binding:a,resource:i.getGPUView()}));e=e.getBindGroupLayout(this.index),this.gpuBindGroup=D.device.createBindGroup({layout:e,entries:s})}}}o(lg,"pool",new Map);class Rs{static createMipmap(e,s){var i=D.device,i=(this._pipelineMax||(this._pipelineMax=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:this.codeMax}),entryPoint:"main"}})),this._pipelineMin||(this._pipelineMin=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:this.codeMin}),entryPoint:"main"}})),Math.ceil(.5*e.width)),s={mipmapCount:s,texture:e,srcView:null,mipLevel:1,dstHeight:Math.ceil(.5*e.height),dstWidth:i};s.srcView=e.getGPUTexture().createView({format:e.format,dimension:"2d",baseMipLevel:0,mipLevelCount:1}),1024<e.width&&1024<e.height?this.mipmap(this._pipelineMax,s):this.mipmap(this._pipelineMin,s)}static mipmap(e,t){var i=D.device,s=P.beginCommandEncoder();let a=e==this._pipelineMax,n,h;for(let c=t.mipLevel;c<t.mipmapCount;c++){var u=[],l=0,l=(u.push({binding:l++,resource:t.srcView}),u.push({binding:+l,resource:t.texture.gpuSampler}),n=t.texture.getGPUTexture().createView({format:t.texture.format,dimension:"2d",baseMipLevel:c,mipLevelCount:1}),u.push({binding:2,resource:n}),i.createBindGroup({layout:e.getBindGroupLayout(0),entries:u})),u=s.beginComputePass();u.setPipeline(e),u.setBindGroup(0,l);let d=t.dstWidth,f=t.dstHeight;if(a&&(d=Math.max(1,Math.floor(t.dstWidth/8)),f=Math.max(1,Math.floor(t.dstHeight/8))),u.dispatchWorkgroups(d,f),t.dstHeight*=.5,t.dstWidth*=.5,t.srcView=n,t.mipLevel=c+1,h=a&&(t.dstWidth<8||t.dstHeight<8),u.end(),h)break}P.endCommandEncoder(s),h&&this.mipmap(this._pipelineMin,t)}}o(Rs,"codeMax",`
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(8, 8)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            //fromColor = vec4<f32>(0.0, 0.0, 0.0, 1.0);
            //if(dstSize.x == 512){
            //    fromColor.x = 1.0;
            //}else  if(dstSize.x == 256){
            //    fromColor.y = 1.0;
            //}else if(dstSize.x == 128){
            //    fromColor.z = 1.0;
            //}
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `),o(Rs,"codeMin",`
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(1, 1)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `),o(Rs,"_pipelineMax"),o(Rs,"_pipelineMin");class ug{constructor(){o(this,"name",""),o(this,"passMap",new Map)}}class cg{constructor(){o(this,"passType",""),o(this,"shaderState",new Map),o(this,"vertexShader",""),o(this,"fragmentShader","")}}class Ni{static parser(e,t){e=yt.filterComment(e);let i=new ug,s=e.indexOf(this.shaderKeyword),a=e.indexOf("{",s),n=e.substring(s+this.shaderKeyword.length,a).trim();var h;i.name=n.substring(1,n.length-1),n=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));for(h of this.splitPassBlock(n)){let l=this.parserPassBlock(h),u;i.passMap.has(l.passType)?u=i.passMap.get(l.passType):(u=[],i.passMap.set(l.passType,u)),u.push(l),0<l.vertexShader.length&&(l.vertexShader=yt.parse(l.vertexShader,t)),0<l.fragmentShader.length&&(l.fragmentShader=yt.parse(l.fragmentShader,t))}return i}static splitPassBlock(e){let t=0,i=[];for(;t<e.length;){var s=e.indexOf(this.passKeyword,t);if(s==-1){i.push(e.substring(t));break}t!=0&&i.push(e.substring(t,s)),t=s+this.passKeyword.length}return i}static parserPassBlock(e){var t=new cg,s=e.indexOf(this.passTypeKeyword),i=e.indexOf('"',s),s=e.indexOf('"',i+1);return t.passType=e.substring(s+1,i).trim(),this.parserShaderState(t,e),(s=e.indexOf(this.vertexKeyword))!=-1&&(t.vertexShader=this.extractBlock(e.substring(s+this.vertexKeyword.length),"{","}")),(s=e.indexOf(this.fragmentKeyword))!=-1&&(t.fragmentShader=this.extractBlock(e.substring(s+this.fragmentKeyword.length),"{","}")),t}static parserShaderState(e,t){if((s=t.indexOf("ShaderState"))==-1)return!1;var i,s=t.indexOf("{",s),a=t.indexOf("}",s);for(i of t.substring(s+1,a).split(",")){var h=i.split(":"),n=h[0].trim(),h=this.convertValue(h[1].trim());e.shaderState.set(n,h)}return!0}static convertValue(e){return e.length==4&&e.toLowerCase()=="true"||(e.length!=5||e.toLowerCase()!="false")&&(e[0]=='"'?e.substring(1,e.length-1):Number.parseInt(e))}static extractBlock(e,t,i){var s,a=e.indexOf(t);if(a==-1)return"";let n=0,h=0;for(s of e=e.substring(a)){if(s==t?n++:s==i&&n--,n<=0)break;h++}return e.substring(1,h).trim()}}o(Ni,"passKeyword","pass"),o(Ni,"shaderKeyword","Shader"),o(Ni,"vertexKeyword","vertex"),o(Ni,"fragmentKeyword","fragment"),o(Ni,"passTypeKeyword","PassType");class dg{constructor(){o(this,"indexList"),o(this,"color"),o(this,"count")}}class fg{constructor(){o(this,"SlotCount",8),o(this,"MaxEntities",16),o(this,"defaultColor",new y(.2,1,1,1)),o(this,"slots",[]),o(this,"dataDirty",!0);var e=T.setting.render.postProcessing.outline.groupCount;this.SlotCount=Math.max(1,Math.min(e,this.SlotCount));for(let i=0;i<this.SlotCount;i++){var t=this.slots[i]=new dg;t.indexList=new Float32Array(this.MaxEntities),t.color=this.defaultColor.clone(),t.count=0}}clear(){for(let e=0;e<this.SlotCount;e++)this.clearAt(e)}clearAt(e){return this.dataDirty=!0,e=this.slots[e],e.color.copyForm(this.defaultColor),e.indexList.fill(-1),e.count=0,this}fillDataAt(e,t,i){this.dataDirty=!0;var s=this.slots[e];if(s){s.indexList.fill(-1);for(let a=0,n=t.length;a<n;a++)s.indexList[a]=t[a];s.count=t.length,s.color.copyForm(i)}return this}fetchData(e){return e.dirty=this.dataDirty,e.slots=this.slots,this.dataDirty=!1,this}}let Ds=new fg;class pg{constructor(){o(this,"_tempIndexArray",[]),o(this,"_rendererList",[])}setOutline(e,t){this.setOutlineList([e],t?[t]:null)}setOutlineList(e,t){e=e||[];var i=Ds.defaultColor,s=Ds.SlotCount;for(let h=0;h<s;h++){this._tempIndexArray.length=0;var a=e[h],n=(t?t[h]:null)||i;if(a)for(const l of a)this.getEntityIdList(l,this._tempIndexArray);Ds.fillDataAt(h,this._tempIndexArray,n)}}clearOutline(){return Ds.clear(),this}getEntityIdList(e,t){this._rendererList.length=0;for(const i of e.getComponents(Fe,this._rendererList))t.push(i.object3D.transform._worldMatrix.index)}}new pg;class mg{constructor(){o(this,"localPosition",new p),o(this,"worldPosition",new p),o(this,"uv",new Ge),o(this,"faceIndex"),o(this,"isIn",!1),o(this,"t",0),o(this,"u",0),o(this,"v",0),o(this,"triangle"),o(this,"v0"),o(this,"v1"),o(this,"v2"),o(this,"pickList"),o(this,"color")}}const $i=class{static distPtTri(r,e,n,d){var s=new p,a=new p,l=new p,d=(d.subtract(e,s),n.subtract(e,a),r.subtract(e,l),xt(s,s)),n=xt(s,a),h=xt(s,l),c=xt(a,a),l=xt(a,l),u=1/(d*c-n*n),c=(c*h-n*l)*u,d=(d*l-n*h)*u;return c>=-$i.EPS&&d>=-$i.EPS&&c+d<=1+$i.EPS?(l=e[1]+s[1]*c+a[1]*d,Math.abs(l-r[1])):$i.FLT_MAX}static IntersectTriangle(r,e,t){let i=e.v1,s=e.v2,a=e.v3,n=s.subtract(i,p.HELP_3),h=a.subtract(i,p.HELP_4),l=r.direction.cross(h,p.HELP_5),u=xt(n,l),c;if(0<u){if(t)return null;c=r.origin.subtract(i,p.HELP_2)}else c=i.subtract(r.origin,p.HELP_2),u=-u;var d,f,m;return u<1e-4?(this._info.isIn=!1,this._info.t=0,this._info.u=0,this._info.v=0):(t=xt(c,l))<0||t>u||(f=c.cross(n,p.HELP_1),(d=xt(r.direction,f))<0)||t+d>u?(this._info.isIn=!1,this._info.t=0,this._info.u=0,this._info.v=0):(f=xt(h,f),f*=m=1/u,t*=m,d*=m,this._info.isIn=!0,this._info.t=f,m=1-(this._info.u=t)-(this._info.v=d),this._u0.copyFrom(e.u1),this._u0.scale(m),this._u1.copyFrom(e.u2),this._u1.scale(t),this._u2.copyFrom(e.u3),this._u2.scale(d),this._info.uv.copyFrom(this._u0),this._info.uv.add(this._u1,this._info.uv),this._info.uv.add(this._u2,this._info.uv),this._info.localPosition.copyFrom(r.direction).multiplyScalar(f),this._info.localPosition.add(r.origin,this._info.localPosition)),this._info}};let Jr=$i;o(Jr,"EPS",1e-4),o(Jr,"FLT_MAX",3402823466e29),o(Jr,"_info",new mg),o(Jr,"_u0",new Ge),o(Jr,"_u1",new Ge),o(Jr,"_u2",new Ge);const ln=class extends Li{constructor(){if(super(),o(this,"_maxRetry",3),ln._instance)throw new Error("LoadManager is singleton class...")}loadAll(r,e){return new Promise((t,i)=>{let s=r.length,a=[];r.forEach((n,h)=>{let l=new e;this.load(n,e).then(u=>{l.parse(u),a.push(l),--s===0&&t(a)})})})}static getInstance(){return this._instance||(this._instance=new ln)}loadUrls(r,e){return new Promise((t,i)=>{let s=r.length,a=[];r.forEach((n,h)=>{this.load(n,e).then(l=>{a.push(l),--s===0&&t(a),s<0&&console.error(`loadUrls ${r} error`)})})})}get maxRetry(){return this._maxRetry}set maxRetry(r){this._maxRetry=r}load(r,e){return new Promise((t,i)=>{e.format})}};let gg=ln;o(gg,"_instance");class _g extends Ml{constructor(){super(),G.register("ColorLitShader",Gl.Ori_AllShader);var e=this.setShader("ColorLitShader","ColorLitShader"),t=(e.setDefine("USE_BRDF",!0),e.setShaderEntry("VertMain","FragMain"),e.setUniformColor("baseColor",new y),e.setUniformColor("emissiveColor",new y),e.setUniformFloat("envIntensity",1),e.setUniformFloat("normalScale",1),e.setUniformFloat("roughness",0),e.setUniformFloat("metallic",0),e.setUniformFloat("ao",1),e.setUniformFloat("alphaCutoff",0),e.shaderState);t.acceptShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,e.setTexture("normalMap",T.res.normalTexture),e.setTexture("emissiveMap",T.res.blackTexture)}clone(){return null}debug(){}}o(_g,"count",0);class vg{static calculateCubicBezierPoint(e,t,i,s,a){let n=1-(e=(e=1<e?1:e)<0?0:e),h=n*n,l=n*n*n,u=e*e,c=e*e*e,d=t.mul(l),f=i.mul(3),m=(f=(f=f.mul(e)).mul(h),s.mul(3));return m=(m=m.mul(u)).mul(n),t=a.mul(c),d=(d=(d=d.add(f)).add(m)).add(t)}static bezierPoint(e,t,i,s){let a=1-(e=(e=1<e?1:e)<0?0:e),n=a*a,h=e*e,l=t.mul(n),u=i.mul(2);return u.scaleBy(a),u.scaleBy(e),t=s.mul(h),l=(l=l.add(u)).add(t)}static calculateCubicBezierPoints(e,t,i){let s=1-(e=(e=1<e?1:e)<0?0:e),a=s*s,n=s*s*s,h=e*e,l=e*e*e,u=t[i].mul(n),c=t[i+1].mul(3),d=(c=(c=c.mul(e)).mul(a),t[i+2].mul(3));return d=(d=d.mul(h)).mul(s),e=t[i+3].mul(l),u=(u=(u=u.add(c)).add(d)).add(e)}static bezierPathValue(e,t){(e=1<e?1:e)<0&&(e=0);var i,s=t.length,a=this.tmp_points;a.length=0;for(let n=1;n<s;++n)for(let h=0;h<s-n;++h)n==1?((i=new p).x=t[h].x*(1-e)+t[h+1].x*e,i.y=t[h].y*(1-e)+t[h+1].y*e,i.z=t[h].z*(1-e)+t[h+1].z*e,this.tmp_points.push(i)):((i=new p).x=a[h].x*(1-e)+a[h+1].x*e,i.y=a[h].y*(1-e)+a[h+1].y*e,i.z=a[h].z*(1-e)+a[h+1].z*e,a.push(i));return a[0]}}o(vg,"tmp_points",[]);var xg=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(xg||{}),yg=(r=>(r[r.COLLINEAR=0]="COLLINEAR",r[r.LINES_INTERSECT=1]="LINES_INTERSECT",r[r.SEGMENTS_INTERSECT=2]="SEGMENTS_INTERSECT",r[r.A_BISECTS_B=3]="A_BISECTS_B",r[r.B_BISECTS_A=4]="B_BISECTS_A",r[r.PARALELL=5]="PARALELL",r))(yg||{}),bg=(r=>(r[r.ON_LINE=0]="ON_LINE",r[r.LEFT_SIDE=1]="LEFT_SIDE",r[r.RIGHT_SIDE=2]="RIGHT_SIDE",r))(bg||{});const ut=class{constructor(r,e){o(this,"start"),o(this,"end"),o(this,"color",new y(1,1,1,1)),o(this,"_normal"),o(this,"_normalCalculated",!1),this.start=r,this.end=e}set(r,e){this.start=r,this.end=e}getCenter(){var r=p.HELP_0;return this.start.subtract(this.end,r),r.scaleBy(.5),r.add(this.end),r}inverse(){var r=this.start;this.start=this.end,this.end=r}equals(r){return this.start==r.start&&this.end==r.end||this.start==r.end&&this.end==r.start}toArray(){return[this.start.x,this.start.y,this.start.z,this.end.x,this.end.y,this.end.z]}static getLines(r){var e=[];for(let s=0;s<r.length;s++){var t=s,i=dl(s+1,r.length),t=r[t],i=r[i];e.push(new ut(t,i))}return e}intersection(i,e=null){var s=(i.end.z-i.start.z)*(this.end.x-this.start.x)-(i.end.x-i.start.x)*(this.end.z-this.start.z),t=(i.end.x-i.start.x)*(this.start.z-i.start.z)-(i.end.z-i.start.z)*(this.start.x-i.start.x),i=(i.start.x-this.start.x)*(this.end.z-this.start.z)-(i.start.z-this.start.z)*(this.end.x-this.start.x);if(s==0)return t==0&&i==0?0:5;i/=s;var s=this.start.x+(t/=s)*(this.end.x-this.start.x),a=this.start.z+t*(this.end.z-this.start.z);return e!=null&&(e.x=s,e.y=0,e.z=a),0<=t&&t<=1&&0<=i&&i<=1?2:0<=i&&i<=1?3:0<=t&&t<=1?4:1}getDirection(){var r=this.end.subtract(this.start);return new p(r.x,r.y).normalize()}copyFrom(r){this.start||(this.start=new p),this.end||(this.end=new p),this.start.copyFrom(r.start),this.end.copyFrom(r.end)}static IsEqual(r,e){return Math.abs(r-e)<1e-7}static squreDistanceSegmentToSegment(Lr,Ir,t){let i=Lr.start,s=Lr.end,a=Ir.start,n=Ir.end,h=i.x,l=i.y,u=i.z,c=s.x,d=s.y,f=s.z,m=a.x,_=a.y,g=a.z,w=n.x,C=n.y,b=n.z,E=c-h,I=d-l,N=f-u,V=w-m,W=C-_,Q=b-g,ue=h-m,ye=l-_,oe=u-g,ie=E*E+I*I+N*N,me=E*V+I*W+N*Q,Ve=V*V+W*W+Q*Q,Ae=E*ue+I*ye+N*oe,fe=V*ue+W*ye+Q*oe,X=ie*Ve-me*me,j=X,at=X,ke=0,He=0,Qe=(this.IsEqual(X,0)?(ke=0,j=1,He=fe,at=Ve):(ke=me*fe-Ve*Ae,He=ie*fe-me*Ae,ke<0?(ke=0,He=fe,at=Ve):ke>j&&(ke=j,He=fe+me,at=Ve)),He<0?-Ae<(He=0)?ke=0:ie<-Ae?ke=j:(ke=-Ae,j=ie):He>at&&(He=at,me-Ae<0?ke=0:ie<me-Ae?ke=j:(ke=me-Ae,j=ie)),0),Dr=0;Qe=this.IsEqual(ke,0)?0:ke/j,Dr=this.IsEqual(He,0)?0:He/at;var Lr=ue+Qe*E-Dr*V,Ir=ye+Qe*I-Dr*W,gt=oe+Qe*N-Dr*Q;return Lr*Lr+Ir*Ir+gt*gt}isNear(r,e=0,t){var s=p.HELP_0,i=p.HELP_1,s=(s.copyFrom(r.origin),i.copyFrom(r.direction),i.scaleBy(9999),i.add(s,i),ut.cacluteLine0.set(s,i),ut.cacluteLine1.copyFrom(this),t&&(t.perspectiveMultiplyPoint3(ut.cacluteLine1.start,ut.cacluteLine1.start),t.perspectiveMultiplyPoint3(ut.cacluteLine1.end,ut.cacluteLine1.end)),ut.squreDistanceSegmentToSegment(ut.cacluteLine0,ut.cacluteLine1,t));return s+1e-4<=e?(r.length=s,!0):!(r.length=-999999)}};let is=ut;o(is,"cacluteLine0",new ut(null,null)),o(is,"cacluteLine1",new ut(null,null));var wg=(r=>(r[r.kParticleSystemClampVelocityCurveId=322376503]="kParticleSystemClampVelocityCurveId",r[r.kParticleSystemForceCurveId=306581307]="kParticleSystemForceCurveId",r[r.kParticleSystemRotationCurveId=1793934638]="kParticleSystemRotationCurveId",r[r.kParticleSystemRotationBySpeedCurveId=3737431713]="kParticleSystemRotationBySpeedCurveId",r[r.kParticleSystemStartSpeedCurveId=2527743459]="kParticleSystemStartSpeedCurveId",r[r.kParticleSystemSizeCurveId=2368504881]="kParticleSystemSizeCurveId",r[r.kParticleSystemSizeBySpeedCurveId=4085612399]="kParticleSystemSizeBySpeedCurveId",r[r.kParticleSystemVelocityCurveId=3774601268]="kParticleSystemVelocityCurveId",r[r.kParticleSystemUVCurveId=326370691]="kParticleSystemUVCurveId",r[r.kParticleSystemColorGradientId=1494990940]="kParticleSystemColorGradientId",r[r.kParticleSystemColorByVelocityGradientId=1089181156]="kParticleSystemColorByVelocityGradientId",r[r.kParticleSystemMeshSelectionId=3159510623]="kParticleSystemMeshSelectionId",r[r.kParticleSystemUVRowSelectionId=2941263940]="kParticleSystemUVRowSelectionId",r))(wg||{});function Sg(s,n,a){var i=.3333333333333333,s=s*i,h=s*s,a=h*s-s*n*.5+.5*a,n=n*i-h,h=n*n*n,l=h+a*a;return 0<=l?-s-n/(l=0<(l=Math.sqrt(l)-a)?Math.pow(l,i):-Math.pow(-l,i))+l:(l=Math.sqrt(-h),h=Math.acos(-a/l),l=Math.pow(l,i),-s+(l-=n/l)*Math.cos(h*i))}function ch(r,e,t,i){return Math.abs(r)<1e-5?1e-5<Math.abs(e)?(i.r0=-t/e,1):0:(t=e*e-4*r*t)<0?0:(r=.5/r,t=Math.sqrt(t),i.r0=(t-e)*r,i.r1=(-t-e)*r,2)}function Tg(r,e,t,i,s){let a=0;var n,h;return 1e-4<=Math.abs(e)?(r[0]=Sg(t/e,i/e,s/e),a++,n=t+e*r[0],h=i+t*r[0]+e*r[0]*r[0],a+=ch(e,n,h,{r0:r[1],r1:r[2]})):a+=ch(t,i,s,{r0:r[1],r1:r[2]}),a}class Ur{constructor(){o(this,"coeff",[])}static EvalSegment(e,t){return e*(e*(e*t[0]+t[1])+t[2])+t[3]}}const ii=class{constructor(){o(this,"segments",[]),o(this,"integrationCache",[]),o(this,"doubleIntegrationCache",[]),o(this,"times",[]),o(this,"segmentCount"),this.segments[ii.kMaxNumSegments]=new Ur,this.integrationCache[ii.kMaxNumSegments]=0,this.doubleIntegrationCache[ii.kMaxNumSegments]=0,this.times[ii.kMaxNumSegments]=0}calculateMinMax(r,e){r.x=Math.min(r.x,e),r.y=Math.max(r.y,e)}findMinMaxDoubleIntegrated(){let r=Ge.ZERO.clone(),e=.05;for(let t=0;t<20;t++)this.calculateMinMax(r,this.evaluateDoubleIntegrated(e)),e+=.05;return r}findMinMaxIntegrated(){var r=Ge.ZERO.clone(),e=[],t=[];for(let n=0;n<this.segmentCount;n++){var i=[],s=Tg(i,4*this.segments[n].coeff[0],3*this.segments[n].coeff[1],2*this.segments[n].coeff[2],+this.segments[n].coeff[3]);for(let h=0;h<s;h++){var a=i[h]+e[n];a>=e[n]&&a<t[n]&&this.calculateMinMax(r,this.evaluateIntegrated(a))}this.calculateMinMax(r,this.evaluateIntegrated(t[n])),this.times[n]}return r}generateIntegrationCache(r){r.integrationCache[0]=0;let e=r.times[0],t=0;for(let a=1;a<r.segmentCount;a++){var i=r.segments[a-1].coeff,s=(dh(i),e-t);r.integrationCache[a]=r.integrationCache[a-1]+Ur.EvalSegment(s,i)*s,t=e,e=r.times[a]}}generateDoubleIntegrationCache(r){let e=0,t=0;for(let s=0;s<r.segmentCount;s++){r.doubleIntegrationCache[s]=e;var i=r.times[s]-t,i=Math.max(i,0);e+=Ur.EvalSegment(i,r.segments[s].coeff)*i*i+r.integrationCache[s]*i,t=r.times[s]}}integrate(){this.generateIntegrationCache(this);for(let r=0;r<this.segmentCount;r++)dh(this.segments[r].coeff)}doubleIntegrate(){this.generateIntegrationCache(this);for(let r=0;r<this.segmentCount;r++)Eg(this.segments[r].coeff);this.generateDoubleIntegrationCache(this)}static isValidCurve(r){let e=r.getKeyCount(),t=e-1;return r.getKey(0).time!=0&&t++,r.getKey(e-1).time!=1&&t++,t<=ii.kMaxNumSegments}evaluateDoubleIntegrated(r){let e=0;for(let i=0;i<this.segmentCount;i++){var t;if(r<=this.times[i])return t=r-e,this.doubleIntegrationCache[i]+this.integrationCache[i]*t+Ur.EvalSegment(t,this.segments[i].coeff)*t*t;e=this.times[i]}return 1}evaluateIntegrated(r){let e=0;for(let i=0;i<this.segmentCount;i++){var t;if(r<=this.times[i])return t=r-e,this.integrationCache[i]+Ur.EvalSegment(t,this.segments[i].coeff)*t;e=this.times[i]}return 1}evaluate(r){let e=0;for(let t=0;t<this.segmentCount;t++){if(r<=this.times[t])return Ur.EvalSegment(r-e,this.segments[t].coeff);e=this.times[t]}return 1}buildCurve(r,e){var t=r.getKeyCount();if(this.segmentCount=1,this.segments.length=0,this.integrationCache.length=0,this.doubleIntegrationCache.length=0,this.times.length=0,this.times[0]=1.01,t!=0)if(t==1)this.segments[0]=new Ur,this.segments[0].coeff[3]=r.getKey(0).value*e;else{this.segmentCount=t-1;let i=0;r.getKey(0).time!=0&&(this.segments[0].coeff[3]=r.getKey(0).value,this.times[0]=r.getKey(0).time,i=1);for(let s=0;s<this.segmentCount;s++)r.calculateCacheData(void 0,s,s+1,0),this.segments[s+i].coeff=(void 0).coeff.concat(),this.times[s+i]=r.getKey(s+1).time;this.segmentCount+=i,r.getKey(t-1).time!=1&&(this.segments[this.segmentCount].coeff[3]=r.getKey(t-1).value,this.segmentCount++),this.times[this.segmentCount-1]=1.01;for(let s=0;s<this.segmentCount;s++)this.segments[s].coeff[0]*=e,this.segments[s].coeff[1]*=e,this.segments[s].coeff[2]*=e,this.segments[s].coeff[3]*=e}return!0}};let Cg=ii;function Eg(r){r[0]/=20,r[1]/=12,r[2]/=6,r[3]/=2}function dh(r){r[0]/=4,r[1]/=3,r[2]/=2,r[3]/=1}o(Cg,"kMaxNumSegments",8);var Mg=(r=>(r[r.kEMScalar=0]="kEMScalar",r[r.kEMOptimized=1]="kEMOptimized",r[r.kEMOptimizedMinMax=2]="kEMOptimizedMinMax",r[r.kEMSlow=3]="kEMSlow",r))(Mg||{}),Pg=(r=>(r[r.kMMCScalar=0]="kMMCScalar",r[r.kMMCCurve=1]="kMMCCurve",r[r.kMMCTwoCurves=2]="kMMCTwoCurves",r[r.kMMCTwoConstants=3]="kMMCTwoConstants",r))(Pg||{});const Yl=class{constructor(r,e,t){o(this,"v1"),o(this,"v2"),o(this,"v3"),o(this,"u1"),o(this,"u2"),o(this,"u3"),o(this,"n1"),o(this,"n2"),o(this,"n3"),o(this,"t0"),o(this,"t"),o(this,"u"),o(this,"v"),o(this,"min",new p),o(this,"max",new p),o(this,"id",0),this.id=200+Yl.ID++,r&&e&&t&&this.set(r,e,t)}set(r,e,t){return this.v1=r,this.v2=e,this.v3=t,r=this.min,e=this.max,r.x=Math.min(this.v1.x,this.v2.x,this.v3.x),r.y=Math.min(this.v1.y,this.v2.y,this.v3.y),r.z=Math.min(this.v1.z,this.v2.z,this.v3.z),e.x=Math.max(this.v1.x,this.v2.x,this.v3.x),e.y=Math.max(this.v1.y,this.v2.y,this.v3.y),e.z=Math.max(this.v1.z,this.v2.z,this.v3.z),this}getNormal(){var r=this.v1,e=this.v2,t=this.v3,e=new p(e.x-r.x,e.y-r.y,e.z-r.z),t=new p(t.x-r.x,t.y-r.y,t.z-r.z).cross(e);return t.normalize(),t}turnBack(){var r=this.v3;this.v3=this.v1,this.v1=r}getLines(){var r=this.v1,e=this.v2,t=this.v3;return[new is(r,e),new is(e,t),new is(t,r)]}equals(r){let e=this.getLines(),t=r.getLines(),i=0;for(let s=0;s<e.length;s++)for(let a=0;a<t.length;a++)e[s].equals(t[a])&&i++;return i==3}getCenter(){var r=this.min,e=this.max,t=new p;return t.x=.5*(r.x+e.x),t.y=.5*(r.y+e.y),t.z=.5*(r.z+e.z),t}intersects(s){var e=this.max,t=this.min,i=s.max,s=s.min;return t.x<=i.x&&e.x>=s.x&&t.y<=i.y&&e.y>=s.y&&t.z<=i.z&&e.z>=s.z}sign2D(r,e,t){return(r.x-t.x)*(e.z-t.z)-(e.x-t.x)*(r.z-t.z)}pointInTriangle2D(a){var e=this.v1,s=this.v2,t=this.v3,i=this.sign2D(a,e,s),s=this.sign2D(a,s,t),a=this.sign2D(a,t,e);return!((i<0||s<0||a<0)&&(0<i||0<s||0<a))}toArray(){return[this.v1.x,this.v1.y,this.v1.z,this.v2.x,this.v2.y,this.v2.z,this.v3.x,this.v3.y,this.v3.z]}};let Rg=Yl;o(Rg,"ID",-1);const jl=class extends Ge{constructor(r=0,e=0){super(r,e),o(this,"u",0),o(this,"v",0),this.u=r,this.v=e}length(){return 0}};let Dg=jl;o(Dg,"uv_0",new jl);var Lg=Object.defineProperty,Ig=(r,e,t)=>e in r?Lg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xt=(r,e,t)=>(Ig(r,typeof e!="symbol"?e+"":e,t),t);class Ag extends Mr{constructor(){super(...arguments),Xt(this,"container"),Xt(this,"beginTime",performance.now()),Xt(this,"prevTime",this.beginTime),Xt(this,"frames",0),Xt(this,"fpsPanel"),Xt(this,"memPanel")}init(){const e=this.container=document.createElement("div");e.className="stats",e.setAttribute("style","display:flex;flex-direction:column;gap:1px;position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),this.fpsPanel=new fh(e,"FPS","#0ff","#002"),this.memPanel=new fh(e,"MB","#f08","#201"),this.beginTime=(performance||Date).now(),document.body.appendChild(this.container)}onDisable(){this.container.style.display="none"}onEnable(){this.container.style.display="flex"}stop(){this.fpsPanel.destroy(),this.memPanel.destroy(),document.body.removeChild(this.container)}onUpdate(){this.frames++;const e=this.beginTime=performance.now();e>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(e-this.prevTime),100),this.memPanel.update(performance.memory.totalJSHeapSize/1048576,256),this.prevTime=e,this.frames=0)}}class fh{constructor(e,t,i,s){Xt(this,"canvas"),Xt(this,"worker"),Xt(this,"width",80),Xt(this,"height",48);const a=this.canvas=document.createElement("canvas");a.width=this.width,a.height=this.height,e.appendChild(a);const n=a.transferControlToOffscreen(),h=new Blob([`(${Og})()`],{type:"application/javascript"});this.worker=new Worker(URL.createObjectURL(h)),this.worker.postMessage({type:"init",offscreen:n,name:t,fg:i,bg:s},[n])}update(e,t){this.worker.postMessage({type:"update",value:e,maxValue:t})}destroy(){this.worker.terminate()}}function Og(){let r,e,t,i,s,a,n,h=1/0,l=0;const u=1,c=3,d=2,f=3,m=15,_=74,g=30;onmessage=w=>{w.data.type=="update"?(h=Math.min(h,w.data.value),l=Math.max(l,w.data.value),e.fillStyle=i,e.globalAlpha=1,e.fillRect(0,0,a,m),e.fillStyle=s,e.fillText(Math.round(w.data.value)+" "+t+" ("+Math.round(h)+"-"+Math.round(l)+")",c,d),e.drawImage(r,f+u,m,_-u,g,f,m,_-u,g),e.fillRect(f+_-u,m,u,g),e.fillStyle=i,e.globalAlpha=.9,e.fillRect(f+_-u,m,u,Math.round((1-w.data.value/w.data.maxValue)*g))):w.data.type=="init"&&(r=w.data.offscreen,t=w.data.name,i=w.data.bg,s=w.data.fg,a=r.width,n=r.height,e=r.getContext("2d"),e.font="bold 9px Helvetica,Arial,sans-serif",e.textBaseline="top",e.fillStyle=i,e.fillRect(0,0,a,n),e.fillStyle=s,e.fillText(t,c,d),e.fillRect(f,m,_,g),e.fillStyle=i,e.globalAlpha=.9,e.fillRect(f,m,_,g))}}function Ug(r){if(r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function li(r,e){var t=r.__state.conversionName.toString(),i=Math.round(r.r),s=Math.round(r.g),a=Math.round(r.b),n=r.a,h=Math.round(r.h),l=r.s.toFixed(1),u=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var c=r.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}else{if(t==="CSS_RGB")return"rgb("+i+","+s+","+a+")";if(t==="CSS_RGBA")return"rgba("+i+","+s+","+a+","+n+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+s+","+a+"]";if(t==="RGBA_ARRAY")return"["+i+","+s+","+a+","+n+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+s+",b:"+a+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+s+",b:"+a+",a:"+n+"}";if(t==="HSV_OBJ")return"{h:"+h+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+h+",s:"+l+",v:"+u+",a:"+n+"}"}return"unknown format"}var ph=Array.prototype.forEach,Fi=Array.prototype.slice,L={BREAK:{},extend:function(e){return this.each(Fi.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(s){this.isUndefined(t[s])||(e[s]=t[s])}.bind(this))},this),e},defaults:function(e){return this.each(Fi.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(s){this.isUndefined(e[s])&&(e[s]=t[s])}.bind(this))},this),e},compose:function(){var e=Fi.call(arguments);return function(){for(var t=Fi.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(ph&&e.forEach&&e.forEach===ph)e.forEach(t,i);else if(e.length===e.length+0){var s=void 0,a=void 0;for(s=0,a=e.length;s<a;s++)if(s in e&&t.call(i,e[s],s)===this.BREAK)return}else for(var n in e)if(t.call(i,e[n],n)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var s=void 0;return function(){var a=this,n=arguments;function h(){s=null,i||e.apply(a,n)}var l=i||!s;clearTimeout(s),s=setTimeout(h,t),l&&e.apply(a,n)}},toArray:function(e){return e.toArray?e.toArray():Fi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Bg=[{litmus:L.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:li},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:li},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:li},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:li}}},{litmus:L.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:L.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:L.isObject,conversions:{RGBA_OBJ:{read:function(e){return L.isNumber(e.r)&&L.isNumber(e.g)&&L.isNumber(e.b)&&L.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return L.isNumber(e.r)&&L.isNumber(e.g)&&L.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return L.isNumber(e.h)&&L.isNumber(e.s)&&L.isNumber(e.v)&&L.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return L.isNumber(e.h)&&L.isNumber(e.s)&&L.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],zi=void 0,Ls=void 0,un=function(){Ls=!1;var e=arguments.length>1?L.toArray(arguments):arguments[0];return L.each(Bg,function(t){if(t.litmus(e))return L.each(t.conversions,function(i,s){if(zi=i.read(e),Ls===!1&&zi!==!1)return Ls=zi,zi.conversionName=s,zi.conversion=i,L.BREAK}),L.BREAK}),Ls},mh=void 0,la={hsv_to_rgb:function(e,t,i){var s=Math.floor(e/60)%6,a=e/60-Math.floor(e/60),n=i*(1-t),h=i*(1-a*t),l=i*(1-(1-a)*t),u=[[i,l,n],[h,i,n],[n,i,l],[n,h,i],[l,n,i],[i,n,h]][s];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,i){var s=Math.min(e,t,i),a=Math.max(e,t,i),n=a-s,h=void 0,l=void 0;if(a!==0)l=n/a;else return{h:NaN,s:0,v:0};return e===a?h=(t-i)/n:t===a?h=2+(i-e)/n:h=4+(e-t)/n,h/=6,h<0&&(h+=1),{h:h*360,s:l,v:a/255}},rgb_to_hex:function(e,t,i){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,i),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(mh=t*8)|e&~(255<<mh)}},kg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ot=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ut=function(){function r(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),Cr=function r(e,t,i){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var a=Object.getPrototypeOf(e);return a===null?void 0:r(a,t,i)}else{if("value"in s)return s.value;var n=s.get;return n===void 0?void 0:n.call(i)}},Pr=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Rr=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},Ke=function(){function r(){if(Ot(this,r),this.__state=un.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ut(r,[{key:"toString",value:function(){return li(this)}},{key:"toHexString",value:function(){return li(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function io(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ke.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(Ke.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function so(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ke.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Ke.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Ke.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=la.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")L.extend(r.__state,la.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};Ke.recalculateHSV=function(r){var e=la.rgb_to_hsv(r.r,r.g,r.b);L.extend(r.__state,{s:e.s,v:e.v}),L.isNaN(e.h)?L.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};Ke.COMPONENTS=["r","g","b","h","s","v","hex","a"];io(Ke.prototype,"r",2);io(Ke.prototype,"g",1);io(Ke.prototype,"b",0);so(Ke.prototype,"h");so(Ke.prototype,"s");so(Ke.prototype,"v");Object.defineProperty(Ke.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ke.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=la.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var qr=function(){function r(e,t){Ot(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ut(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),Ng={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ql={};L.each(Ng,function(r,e){L.each(r,function(t){ql[t]=e})});var Fg=/(\d+(\.\d+)?)px/;function Ft(r){if(r==="0"||L.isUndefined(r))return 0;var e=r.match(Fg);return L.isNull(e)?0:parseFloat(e[1])}var M={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var s=i,a=t;L.isUndefined(a)&&(a=!0),L.isUndefined(s)&&(s=!0),e.style.position="absolute",a&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,s){var a=i||{},n=ql[t];if(!n)throw new Error("Event type "+t+" not supported.");var h=document.createEvent(n);switch(n){case"MouseEvents":{var l=a.x||a.clientX||0,u=a.y||a.clientY||0;h.initMouseEvent(t,a.bubbles||!1,a.cancelable||!0,window,a.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=h.initKeyboardEvent||h.initKeyEvent;L.defaults(a,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(t,a.bubbles||!1,a.cancelable,window,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.keyCode,a.charCode);break}default:{h.initEvent(t,a.bubbles||!1,a.cancelable||!0);break}}L.defaults(h,s),e.dispatchEvent(h)},bind:function(e,t,i,s){var a=s||!1;return e.addEventListener?e.addEventListener(t,i,a):e.attachEvent&&e.attachEvent("on"+t,i),M},unbind:function(e,t,i,s){var a=s||!1;return e.removeEventListener?e.removeEventListener(t,i,a):e.detachEvent&&e.detachEvent("on"+t,i),M},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return M},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),s=i.indexOf(t);s!==-1&&(i.splice(s,1),e.className=i.join(" "))}else e.className=void 0;return M},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ft(t["border-left-width"])+Ft(t["border-right-width"])+Ft(t["padding-left"])+Ft(t["padding-right"])+Ft(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ft(t["border-top-width"])+Ft(t["border-bottom-width"])+Ft(t["padding-top"])+Ft(t["padding-bottom"])+Ft(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},$l=function(r){Pr(e,r);function e(t,i){Ot(this,e);var s=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function n(){a.setValue(!a.__prev)}return M.bind(s.__checkbox,"change",n,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Ut(e,[{key:"setValue",value:function(i){var s=Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qr),zg=function(r){Pr(e,r);function e(t,i,s){Ot(this,e);var a=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),n=s,h=a;if(a.__select=document.createElement("select"),L.isArray(n)){var l={};L.each(n,function(u){l[u]=u}),n=l}return L.each(n,function(u,c){var d=document.createElement("option");d.innerHTML=c,d.setAttribute("value",u),h.__select.appendChild(d)}),a.updateDisplay(),M.bind(a.__select,"change",function(){var u=this.options[this.selectedIndex].value;h.setValue(u)}),a.domElement.appendChild(a.__select),a}return Ut(e,[{key:"setValue",value:function(i){var s=Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return M.isActive(this.__select)?this:(this.__select.value=this.getValue(),Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(qr),Gg=function(r){Pr(e,r);function e(t,i){Ot(this,e);var s=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=s;function n(){a.setValue(a.__input.value)}function h(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),M.bind(s.__input,"keyup",n),M.bind(s.__input,"change",n),M.bind(s.__input,"blur",h),M.bind(s.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ut(e,[{key:"updateDisplay",value:function(){return M.isActive(this.__input)||(this.__input.value=this.getValue()),Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qr);function gh(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Zl=function(r){Pr(e,r);function e(t,i,s){Ot(this,e);var a=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),n=s||{};return a.__min=n.min,a.__max=n.max,a.__step=n.step,L.isUndefined(a.__step)?a.initialValue===0?a.__impliedStep=1:a.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(a.initialValue))/Math.LN10))/10:a.__impliedStep=a.__step,a.__precision=gh(a.__impliedStep),a}return Ut(e,[{key:"setValue",value:function(i){var s=i;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=gh(i),this}}]),e}(qr);function Vg(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var ua=function(r){Pr(e,r);function e(t,i,s){Ot(this,e);var a=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s));a.__truncationSuspended=!1;var n=a,h=void 0;function l(){var _=parseFloat(n.__input.value);L.isNaN(_)||n.setValue(_)}function u(){n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())}function c(){u()}function d(_){var g=h-_.clientY;n.setValue(n.getValue()+g*n.__impliedStep),h=_.clientY}function f(){M.unbind(window,"mousemove",d),M.unbind(window,"mouseup",f),u()}function m(_){M.bind(window,"mousemove",d),M.bind(window,"mouseup",f),h=_.clientY}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),M.bind(a.__input,"change",l),M.bind(a.__input,"blur",c),M.bind(a.__input,"mousedown",m),M.bind(a.__input,"keydown",function(_){_.keyCode===13&&(n.__truncationSuspended=!0,this.blur(),n.__truncationSuspended=!1,u())}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return Ut(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Vg(this.getValue(),this.__precision),Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Zl);function _h(r,e,t,i,s){return i+(s-i)*((r-e)/(t-e))}var cn=function(r){Pr(e,r);function e(t,i,s,a,n){Ot(this,e);var h=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:s,max:a,step:n})),l=h;h.__background=document.createElement("div"),h.__foreground=document.createElement("div"),M.bind(h.__background,"mousedown",u),M.bind(h.__background,"touchstart",f),M.addClass(h.__background,"slider"),M.addClass(h.__foreground,"slider-fg");function u(g){document.activeElement.blur(),M.bind(window,"mousemove",c),M.bind(window,"mouseup",d),c(g)}function c(g){g.preventDefault();var w=l.__background.getBoundingClientRect();return l.setValue(_h(g.clientX,w.left,w.right,l.__min,l.__max)),!1}function d(){M.unbind(window,"mousemove",c),M.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(g){g.touches.length===1&&(M.bind(window,"touchmove",m),M.bind(window,"touchend",_),m(g))}function m(g){var w=g.touches[0].clientX,C=l.__background.getBoundingClientRect();l.setValue(_h(w,C.left,C.right,l.__min,l.__max))}function _(){M.unbind(window,"touchmove",m),M.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return h.updateDisplay(),h.__background.appendChild(h.__foreground),h.domElement.appendChild(h.__background),h}return Ut(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Cr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Zl),Ql=function(r){Pr(e,r);function e(t,i,s){Ot(this,e);var a=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),n=a;return a.__button=document.createElement("div"),a.__button.innerHTML=s===void 0?"Fire":s,M.bind(a.__button,"click",function(h){return h.preventDefault(),n.fire(),!1}),M.addClass(a.__button,"button"),a.domElement.appendChild(a.__button),a}return Ut(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(qr),dn=function(r){Pr(e,r);function e(t,i){Ot(this,e);var s=Rr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.__color=new Ke(s.getValue()),s.__temp=new Ke(0);var a=s;s.domElement=document.createElement("div"),M.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",M.bind(s.__input,"keydown",function(g){g.keyCode===13&&d.call(this)}),M.bind(s.__input,"blur",d),M.bind(s.__selector,"mousedown",function(){M.addClass(this,"drag").bind(window,"mouseup",function(){M.removeClass(a.__selector,"drag")})}),M.bind(s.__selector,"touchstart",function(){M.addClass(this,"drag").bind(window,"touchend",function(){M.removeClass(a.__selector,"drag")})});var n=document.createElement("div");L.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),L.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),L.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),L.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),L.extend(n.style,{width:"100%",height:"100%",background:"none"}),vh(n,"top","rgba(0,0,0,0)","#000"),L.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Xg(s.__hue_field),L.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),M.bind(s.__saturation_field,"mousedown",h),M.bind(s.__saturation_field,"touchstart",h),M.bind(s.__field_knob,"mousedown",h),M.bind(s.__field_knob,"touchstart",h),M.bind(s.__hue_field,"mousedown",l),M.bind(s.__hue_field,"touchstart",l);function h(g){m(g),M.bind(window,"mousemove",m),M.bind(window,"touchmove",m),M.bind(window,"mouseup",u),M.bind(window,"touchend",u)}function l(g){_(g),M.bind(window,"mousemove",_),M.bind(window,"touchmove",_),M.bind(window,"mouseup",c),M.bind(window,"touchend",c)}function u(){M.unbind(window,"mousemove",m),M.unbind(window,"touchmove",m),M.unbind(window,"mouseup",u),M.unbind(window,"touchend",u),f()}function c(){M.unbind(window,"mousemove",_),M.unbind(window,"touchmove",_),M.unbind(window,"mouseup",c),M.unbind(window,"touchend",c),f()}function d(){var g=un(this.value);g!==!1?(a.__color.__state=g,a.setValue(a.__color.toOriginal())):this.value=a.__color.toString()}function f(){a.__onFinishChange&&a.__onFinishChange.call(a,a.__color.toOriginal())}s.__saturation_field.appendChild(n),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function m(g){g.type.indexOf("touch")===-1&&g.preventDefault();var w=a.__saturation_field.getBoundingClientRect(),C=g.touches&&g.touches[0]||g,b=C.clientX,E=C.clientY,I=(b-w.left)/(w.right-w.left),N=1-(E-w.top)/(w.bottom-w.top);return N>1?N=1:N<0&&(N=0),I>1?I=1:I<0&&(I=0),a.__color.v=N,a.__color.s=I,a.setValue(a.__color.toOriginal()),!1}function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var w=a.__hue_field.getBoundingClientRect(),C=g.touches&&g.touches[0]||g,b=C.clientY,E=1-(b-w.top)/(w.bottom-w.top);return E>1?E=1:E<0&&(E=0),a.__color.h=E*360,a.setValue(a.__color.toOriginal()),!1}return s}return Ut(e,[{key:"updateDisplay",value:function(){var i=un(this.getValue());if(i!==!1){var s=!1;L.each(Ke.COMPONENTS,function(h){if(!L.isUndefined(i[h])&&!L.isUndefined(this.__color.__state[h])&&i[h]!==this.__color.__state[h])return s=!0,{}},this),s&&L.extend(this.__color.__state,i)}L.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var a=this.__color.v<.5||this.__color.s>.5?255:0,n=255-a;L.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+a+","+a+","+a+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,vh(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),L.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+a+","+a+","+a+")",textShadow:this.__input_textShadow+"rgba("+n+","+n+","+n+",.7)"})}}]),e}(qr),Hg=["-moz-","-o-","-webkit-","-ms-",""];function vh(r,e,t,i){r.style.background="",L.each(Hg,function(s){r.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function Xg(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Wg={load:function(e,t){var i=t||document,s=i.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,i.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var i=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var a=i.getElementsByTagName("head")[0];try{a.appendChild(s)}catch{}}},Kg=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Yg=function(e,t){var i=e[t];return L.isArray(arguments[2])||L.isObject(arguments[2])?new zg(e,t,arguments[2]):L.isNumber(i)?L.isNumber(arguments[2])&&L.isNumber(arguments[3])?L.isNumber(arguments[4])?new cn(e,t,arguments[2],arguments[3],arguments[4]):new cn(e,t,arguments[2],arguments[3]):L.isNumber(arguments[4])?new ua(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ua(e,t,{min:arguments[2],max:arguments[3]}):L.isString(i)?new Gg(e,t):L.isFunction(i)?new Ql(e,t,""):L.isBoolean(i)?new $l(e,t):null};function jg(r){setTimeout(r,1e3/60)}var qg=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||jg,$g=function(){function r(){Ot(this,r),this.backgroundElement=document.createElement("div"),L.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),M.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),L.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;M.bind(this.backgroundElement,"click",function(){e.hide()})}return Ut(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),L.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",M.unbind(t.domElement,"webkitTransitionEnd",s),M.unbind(t.domElement,"transitionend",s),M.unbind(t.domElement,"oTransitionEnd",s)};M.bind(this.domElement,"webkitTransitionEnd",i),M.bind(this.domElement,"transitionend",i),M.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-M.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-M.getHeight(this.domElement)/2+"px"}}]),r}(),Zg=Ug(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Wg.inject(Zg);var xh="dg",yh=72,bh=20,ds="Default",Zi=function(){try{return!!window.localStorage}catch{return!1}}(),ss=void 0,wh=!0,si=void 0,Fa=!1,Jl=[],Se=function r(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),M.addClass(this.domElement,xh),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=L.defaults(i,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),i=L.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),L.isUndefined(i.load)?i.load={preset:ds}:i.preset&&(i.load.preset=i.preset),L.isUndefined(i.parent)&&i.hideable&&Jl.push(this),i.resizable=L.isUndefined(i.parent)&&i.resizable,i.autoPlace&&L.isUndefined(i.scrollable)&&(i.scrollable=!0);var s=Zi&&localStorage.getItem(ai(this,"isLocal"))==="true",a=void 0,n=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(f){t.parent?t.getRoot().preset=f:i.load.preset=f,t_(this),t.revert()}},width:{get:function(){return i.width},set:function(f){i.width=f,mn(t,f)}},name:{get:function(){return i.name},set:function(f){i.name=f,n&&(n.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(f){i.closed=f,i.closed?M.addClass(t.__ul,r.CLASS_CLOSED):M.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return s},set:function(f){Zi&&(s=f,f?M.bind(window,"unload",a):M.unbind(window,"unload",a),localStorage.setItem(ai(t,"isLocal"),f))}}}),L.isUndefined(i.parent)){if(this.closed=i.closed||!1,M.addClass(this.domElement,r.CLASS_MAIN),M.makeSelectable(this.domElement,!1),Zi&&s){t.useLocalStorage=!0;var h=localStorage.getItem(ai(this,"gui"));h&&(i.load=JSON.parse(h))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,M.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),i.closeOnTop?(M.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(M.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),M.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);M.addClass(l,"controller-name"),n=ao(t,l);var u=function(f){return f.preventDefault(),t.closed=!t.closed,!1};M.addClass(this.__ul,r.CLASS_CLOSED),M.addClass(n,"title"),M.bind(n,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(L.isUndefined(i.parent)&&(wh&&(si=document.createElement("div"),M.addClass(si,xh),M.addClass(si,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(si),wh=!1),si.appendChild(this.domElement),M.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||mn(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},M.bind(window,"resize",this.__resizeHandler),M.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),M.bind(this.__ul,"transitionend",this.__resizeHandler),M.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&e_(this),a=function(){Zi&&localStorage.getItem(ai(t,"isLocal"))==="true"&&localStorage.setItem(ai(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=a;function c(){var d=t.getRoot();d.width+=1,L.defer(function(){d.width-=1})}i.parent||c()};Se.toggleHide=function(){Fa=!Fa,L.each(Jl,function(r){r.domElement.style.display=Fa?"none":""})};Se.CLASS_AUTO_PLACE="a";Se.CLASS_AUTO_PLACE_CONTAINER="ac";Se.CLASS_MAIN="main";Se.CLASS_CONTROLLER_ROW="cr";Se.CLASS_TOO_TALL="taller-than-window";Se.CLASS_CLOSED="closed";Se.CLASS_CLOSE_BUTTON="close-button";Se.CLASS_CLOSE_TOP="close-top";Se.CLASS_CLOSE_BOTTOM="close-bottom";Se.CLASS_DRAG="drag";Se.DEFAULT_WIDTH=245;Se.TEXT_CLOSED="Close Controls";Se.TEXT_OPEN="Open Controls";Se._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===yh||r.keyCode===yh)&&Se.toggleHide()};M.bind(window,"keydown",Se._keydownHandler,!1);L.extend(Se.prototype,{add:function(e,t){return as(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return as(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;L.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&si.removeChild(this.domElement);var e=this;L.each(this.__folders,function(t){e.removeFolder(t)}),M.unbind(window,"keydown",Se._keydownHandler,!1),Sh(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new Se(t);this.__folders[e]=i;var s=ao(this,i.domElement);return M.addClass(s,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Sh(e);var t=this;L.each(e.__folders,function(i){e.removeFolder(i)}),L.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=M.getOffset(e.__ul).top,i=0;L.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(i+=M.getHeight(s))}),window.innerHeight-t-bh<i?(M.addClass(e.domElement,Se.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-bh+"px"):(M.removeClass(e.domElement,Se.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&L.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:L.debounce(function(){this.onResize()},50),remember:function(){if(L.isUndefined(ss)&&(ss=new $g,ss.domElement.innerHTML=Kg),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;L.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Jg(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&mn(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Is(this)),e.folders={},L.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Is(this),fn(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ds]=Is(this,!0)),this.load.remembered[e]=Is(this),this.preset=e,pn(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){L.each(this.__controllers,function(t){this.getRoot().load.remembered?eu(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),L.each(this.__folders,function(t){t.revert(t)}),e||fn(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&tu(this.__listening)},updateDisplay:function(){L.each(this.__controllers,function(e){e.updateDisplay()}),L.each(this.__folders,function(e){e.updateDisplay()})}});function ao(r,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?r.__ul.insertBefore(i,t):r.__ul.appendChild(i),r.onResize(),i}function Sh(r){M.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&M.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function fn(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Qg(r,e,t){if(t.__li=e,t.__gui=r,L.extend(t,{options:function(n){if(arguments.length>1){var h=t.__li.nextElementSibling;return t.remove(),as(r,t.object,t.property,{before:h,factoryArgs:[L.toArray(arguments)]})}if(L.isArray(n)||L.isObject(n)){var l=t.__li.nextElementSibling;return t.remove(),as(r,t.object,t.property,{before:l,factoryArgs:[n]})}},name:function(n){return t.__li.firstElementChild.firstElementChild.innerHTML=n,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof cn){var i=new ua(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});L.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(a){var n=t[a],h=i[a];t[a]=i[a]=function(){var l=Array.prototype.slice.call(arguments);return h.apply(i,l),n.apply(t,l)}}),M.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof ua){var s=function(n){if(L.isNumber(t.__min)&&L.isNumber(t.__max)){var h=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=as(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(h),l&&u.listen(),u}return n};t.min=L.compose(s,t.min),t.max=L.compose(s,t.max)}else t instanceof $l?(M.bind(e,"click",function(){M.fakeEvent(t.__checkbox,"click")}),M.bind(t.__checkbox,"click",function(a){a.stopPropagation()})):t instanceof Ql?(M.bind(e,"click",function(){M.fakeEvent(t.__button,"click")}),M.bind(e,"mouseover",function(){M.addClass(t.__button,"hover")}),M.bind(e,"mouseout",function(){M.removeClass(t.__button,"hover")})):t instanceof dn&&(M.addClass(e,"color"),t.updateDisplay=L.compose(function(a){return e.style.borderLeftColor=t.__color.toString(),a},t.updateDisplay),t.updateDisplay());t.setValue=L.compose(function(a){return r.getRoot().__preset_select&&t.isModified()&&fn(r.getRoot(),!0),a},t.setValue)}function eu(r,e){var t=r.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var s=t.__rememberedObjectIndecesToControllers[i];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[i]=s),s[e.property]=e,t.load&&t.load.remembered){var a=t.load.remembered,n=void 0;if(a[r.preset])n=a[r.preset];else if(a[ds])n=a[ds];else return;if(n[i]&&n[i][e.property]!==void 0){var h=n[i][e.property];e.initialValue=h,e.setValue(h)}}}}function as(r,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(i.color)s=new dn(e,t);else{var a=[e,t].concat(i.factoryArgs);s=Yg.apply(r,a)}i.before instanceof qr&&(i.before=i.before.__li),eu(r,s),M.addClass(s.domElement,"c");var n=document.createElement("span");M.addClass(n,"property-name"),n.innerHTML=s.property;var h=document.createElement("div");h.appendChild(n),h.appendChild(s.domElement);var l=ao(r,h,i.before);return M.addClass(l,Se.CLASS_CONTROLLER_ROW),s instanceof dn?M.addClass(l,"color"):M.addClass(l,kg(s.getValue())),Qg(r,l,s),r.__controllers.push(s),s}function ai(r,e){return document.location.href+"."+e}function pn(r,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,r.__preset_select.appendChild(i),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Th(r,e){e.style.display=r.useLocalStorage?"block":"none"}function Jg(r){var e=r.__save_row=document.createElement("li");M.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),M.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",M.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",M.addClass(i,"button"),M.addClass(i,"save");var s=document.createElement("span");s.innerHTML="New",M.addClass(s,"button"),M.addClass(s,"save-as");var a=document.createElement("span");a.innerHTML="Revert",M.addClass(a,"button"),M.addClass(a,"revert");var n=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?L.each(r.load.remembered,function(d,f){pn(r,f,f===r.preset)}):pn(r,ds,!1),M.bind(n,"change",function(){for(var d=0;d<r.__preset_select.length;d++)r.__preset_select[d].innerHTML=r.__preset_select[d].value;r.preset=this.value}),e.appendChild(n),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(a),Zi){var h=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(ai(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Th(r,h),M.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Th(r,h)})}var c=document.getElementById("dg-new-constructor");M.bind(c,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&ss.hide()}),M.bind(t,"click",function(){c.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),ss.show(),c.focus(),c.select()}),M.bind(i,"click",function(){r.save()}),M.bind(s,"click",function(){var d=prompt("Enter a new preset name.");d&&r.saveAs(d)}),M.bind(a,"click",function(){r.revert()})}function e_(r){var e=void 0;r.__resize_handle=document.createElement("div"),L.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(a){return a.preventDefault(),r.width+=e-a.clientX,r.onResize(),e=a.clientX,!1}function i(){M.removeClass(r.__closeButton,Se.CLASS_DRAG),M.unbind(window,"mousemove",t),M.unbind(window,"mouseup",i)}function s(a){return a.preventDefault(),e=a.clientX,M.addClass(r.__closeButton,Se.CLASS_DRAG),M.bind(window,"mousemove",t),M.bind(window,"mouseup",i),!1}M.bind(r.__resize_handle,"mousedown",s),M.bind(r.__closeButton,"mousedown",s),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function mn(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Is(r,e){var t={};return L.each(r.__rememberedObjects,function(i,s){var a={},n=r.__rememberedObjectIndecesToControllers[s];L.each(n,function(h,l){a[l]=e?h.initialValue:h.getValue()}),t[s]=a}),t}function t_(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function tu(r){r.length!==0&&qg.call(window,function(){tu(r)}),L.each(r,function(e){e.updateDisplay()})}var r_=Se;class i_{constructor(){kt(this,"dirLight");kt(this,"pointLight");kt(this,"cameraObj");kt(this,"camera");kt(this,"controller");kt(this,"scene");kt(this,"unlitMaterial");kt(this,"litMaterial");kt(this,"sky")}async run(){await this.init(),await this.setup(),await this.start()}async init(){T.setting.shadow.enable=!0,T.setting.shadow.debug=!0,T.setting.shadow.shadowBound=100,T.setting.shadow.shadowBias=1e-4,T.setting.shadow.autoUpdate=!0,T.setting.shadow.updateFrameRate=1,T.setting.shadow.pointShadowBias=1e-4,T.setting.shadow.shadowQuality=5,T.setting.shadow.type="SOFT",await T.init()}async setup(){this.scene=new Jm,this.sky=this.scene.addComponent(jm),this.sky.sunX=.55,this.sky.sunY=.6,this.sky.eyePos=3607,this.sky.sunRadius=500,this.sky.sunRadiance=10,this.sky.sunBrightness=3,this.sky.castGI=!0,this.sky.castReflection=!0,this.sky.castShadow=!0,this.scene.addComponent(Ag),this.cameraObj=new pe,this.camera=this.cameraObj.addComponent(Gn),this.camera.perspective(50,window.innerWidth/window.innerHeight,1,5e3),this.controller=this.cameraObj.addComponent(Qm),this.controller.setCamera(20,-20,50,new p(0,0,0)),this.scene.addChild(this.cameraObj),this.createDirLight(),this.createPointLight(),this.createPlane(),this.unlitMaterial=new hh,this.litMaterial=new xr,this.createBox(new p(-10,0,0),this.unlitMaterial),this.createBox(new p(10,0,0),this.litMaterial),this.createBox(new p(0,0,0),this.litMaterial),T.inputSystem.addEventListener(Hr.KEY_UP,this.keyUp,this),T.inputSystem.addEventListener(Hr.KEY_DOWN,this.keyDown,this),this.addGUI()}async start(){let e=new rg;e.scene=this.scene,e.camera=this.camera,T.startRenderView(e)}async createPointLight(){let e=new pe;e.y=15,e.x=5,e.z=-5;let t=e.addComponent(Fe);t.geometry=new ha(.5,10,10),t.material=new hh,this.pointLight=e.addComponent(El),this.pointLight.intensity=.5,this.pointLight.castShadow=!0,this.scene.addChild(e)}async createDirLight(){let e=new pe;e.rotationX=45,e.rotationY=40,e.rotationZ=15,this.dirLight=e.addComponent(Cl),this.dirLight.intensity=1,this.dirLight.castShadow=!0,this.scene.addChild(e)}async createPlane(){let e=new pe;e.y=-2.5;let t=e.addComponent(Fe);t.geometry=new vl(50,50);let i=new xr;i.baseColor=new y(1,1,1),i.roughness=.2,i.metallic=.8,t.material=i,t.receiveShadow=!0,this.scene.addChild(e)}async createBox(e,t){let i=new pe;i.localPosition=e;let s=i.addComponent(Fe);s.geometry=new Hs(5,5,5),s.material=t,s.castShadow=!0,this.scene.addChild(i)}async addGUI(){const e=new r_,t={i:1,dirx:0,diry:0,dirz:0,color:"#fff"};let i=e.addFolder("DirLight");i.addColor(t,"color").onChange(c=>{let d=new y;d.setHex(c),this.dirLight.lightColor=d}),i.add(t,"i",0,30).step(.1).onChange(c=>{this.dirLight.intensity=c}),i.add(t,"dirx",-360,360).step(.1).onChange(c=>{this.dirLight.transform.rotationX=c}),i.add(t,"diry",-360,360).step(.1).onChange(c=>{this.dirLight.transform.rotationY=c}),i.add(t,"dirz",-360,360).step(.1).onChange(c=>{this.dirLight.transform.rotationZ=c});const s={i:1,posx:0,posy:10,posz:0,range:30,radius:5,at:10,color:"#fff"};let a=e.addFolder("PointLight");a.addColor(s,"color").onChange(c=>{let d=new y;d.setHex(c),this.pointLight.lightColor=d}),a.add(s,"i",0,10).step(.1).onChange(c=>{this.pointLight.intensity=c}),a.add(s,"posx",-10,10).step(.1).onChange(c=>{this.pointLight.transform.x=c}),a.add(s,"posy",-10,10).step(.1).onChange(c=>{this.pointLight.transform.y=c}),a.add(s,"posz",-10,10).step(.1).onChange(c=>{this.pointLight.transform.z=c}),a.add(s,"range",0,50).step(.1).onChange(c=>{this.pointLight.range=c}),a.add(s,"radius",0,1).step(.01).onChange(c=>{this.pointLight.radius=c}),a.add(s,"at",0,10).step(.1).onChange(c=>{this.pointLight.at=c});const n={baseColor:"#fff"};e.addFolder("UnLitBox").addColor(n,"baseColor").onChange(c=>{let d=new y;d.setHex(c),this.unlitMaterial.baseColor=d});const l={baseColor:"#fff",roughness:0,metallic:0};let u=e.addFolder("LitBox");u.addColor(l,"baseColor").onChange(c=>{let d=new y;d.setHex(c),this.litMaterial.baseColor=d}),u.add(l,"roughness",0,1).step(.1).onChange(c=>{this.litMaterial.roughness=c}),u.add(l,"metallic",0,1).step(.1).onChange(c=>{this.litMaterial.metallic=c})}keyUp(e){e.keyCode==hn.Key_W?this.controller.distance-=1:e.keyCode==hn.Key_S&&(this.controller.distance+=1)}keyDown(e){console.log(e.keyCode)}}const s_=_c({__name:"App",setup(r){return Qh(()=>{new i_().run()}),(e,t)=>null}});Ld(s_).mount("#app");
