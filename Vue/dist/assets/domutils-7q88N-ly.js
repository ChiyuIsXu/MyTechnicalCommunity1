import{r as P}from"./dom-serializer-9lDPzmrc.js";import{E as W}from"./domelementtype-m_P3rrT0.js";import{h as d,b as A,d as g,e as D,i as o,a as Y}from"./domhandler--86MXGO9.js";function _(t,n){return P(t,n)}function B(t,n){return d(t)?t.children.map(r=>_(r,n)).join(""):""}function O(t){return Array.isArray(t)?t.map(O).join(""):o(t)?t.name==="br"?`
`:O(t.children):D(t)?O(t.children):g(t)?t.data:""}function E(t){return Array.isArray(t)?t.map(E).join(""):d(t)&&!A(t)?E(t.children):g(t)?t.data:""}function C(t){return Array.isArray(t)?t.map(C).join(""):d(t)&&(t.type===W.Tag||D(t))?C(t.children):g(t)?t.data:""}function w(t){return d(t)?t.children:[]}function L(t){return t.parent||null}function z(t){const n=L(t);if(n!=null)return w(n);const r=[t];let{prev:i,next:e}=t;for(;i!=null;)r.unshift(i),{prev:i}=i;for(;e!=null;)r.push(e),{next:e}=e;return r}function H(t,n){var r;return(r=t.attribs)===null||r===void 0?void 0:r[n]}function K(t,n){return t.attribs!=null&&Object.prototype.hasOwnProperty.call(t.attribs,n)&&t.attribs[n]!=null}function V(t){return t.name}function q(t){let{next:n}=t;for(;n!==null&&!o(n);)({next:n}=n);return n}function U(t){let{prev:n}=t;for(;n!==null&&!o(n);)({prev:n}=n);return n}function x(t){if(t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t.parent){const n=t.parent.children,r=n.lastIndexOf(t);r>=0&&n.splice(r,1)}t.next=null,t.prev=null,t.parent=null}function J(t,n){const r=n.prev=t.prev;r&&(r.next=n);const i=n.next=t.next;i&&(i.prev=n);const e=n.parent=t.parent;if(e){const u=e.children;u[u.lastIndexOf(t)]=n,t.parent=null}}function Q(t,n){if(x(n),n.next=null,n.parent=t,t.children.push(n)>1){const r=t.children[t.children.length-2];r.next=n,n.prev=r}else n.prev=null}function X(t,n){x(n);const{parent:r}=t,i=t.next;if(n.next=i,n.prev=t,t.next=n,n.parent=r,i){if(i.prev=n,r){const e=r.children;e.splice(e.lastIndexOf(i),0,n)}}else r&&r.children.push(n)}function Z(t,n){if(x(n),n.parent=t,n.prev=null,t.children.unshift(n)!==1){const r=t.children[1];r.prev=n,n.next=r}else n.next=null}function $(t,n){x(n);const{parent:r}=t;if(r){const i=r.children;i.splice(i.indexOf(t),0,n)}t.prev&&(t.prev.next=n),n.parent=r,n.prev=t.prev,n.next=t,t.prev=n}function N(t,n,r=!0,i=1/0){return k(t,Array.isArray(n)?n:[n],r,i)}function k(t,n,r,i){const e=[],u=[n],f=[0];for(;;){if(f[0]>=u[0].length){if(f.length===1)return e;u.shift(),f.shift();continue}const s=u[0][f[0]++];if(t(s)&&(e.push(s),--i<=0))return e;r&&d(s)&&s.children.length>0&&(f.unshift(0),u.unshift(s.children))}}function tt(t,n){return n.find(t)}function T(t,n,r=!0){let i=null;for(let e=0;e<n.length&&!i;e++){const u=n[e];if(o(u))t(u)?i=u:r&&u.children.length>0&&(i=T(t,u.children,!0));else continue}return i}function F(t,n){return n.some(r=>o(r)&&(t(r)||F(t,r.children)))}function nt(t,n){const r=[],i=[n],e=[0];for(;;){if(e[0]>=i[0].length){if(i.length===1)return r;i.shift(),e.shift();continue}const u=i[0][e[0]++];o(u)&&(t(u)&&r.push(u),u.children.length>0&&(e.unshift(0),i.unshift(u.children)))}}const I={tag_name(t){return typeof t=="function"?n=>o(n)&&t(n.name):t==="*"?o:n=>o(n)&&n.name===t},tag_type(t){return typeof t=="function"?n=>t(n.type):n=>n.type===t},tag_contains(t){return typeof t=="function"?n=>g(n)&&t(n.data):n=>g(n)&&n.data===t}};function G(t,n){return typeof n=="function"?r=>o(r)&&n(r.attribs[t]):r=>o(r)&&r.attribs[t]===n}function rt(t,n){return r=>t(r)||n(r)}function j(t){const n=Object.keys(t).map(r=>{const i=t[r];return Object.prototype.hasOwnProperty.call(I,r)?I[r](i):G(r,i)});return n.length===0?null:n.reduce(rt)}function it(t,n){const r=j(t);return r?r(n):!0}function et(t,n,r,i=1/0){const e=j(t);return e?N(e,n,r,i):[]}function ut(t,n,r=!0){return Array.isArray(n)||(n=[n]),T(G("id",t),n,r)}function b(t,n,r=!0,i=1/0){return N(I.tag_name(t),n,r,i)}function st(t,n,r=!0,i=1/0){return N(I.tag_type(t),n,r,i)}function ft(t){let n=t.length;for(;--n>=0;){const r=t[n];if(n>0&&t.lastIndexOf(r,n-1)>=0){t.splice(n,1);continue}for(let i=r.parent;i;i=i.parent)if(t.includes(i)){t.splice(n,1);break}}return t}var l;(function(t){t[t.DISCONNECTED=1]="DISCONNECTED",t[t.PRECEDING=2]="PRECEDING",t[t.FOLLOWING=4]="FOLLOWING",t[t.CONTAINS=8]="CONTAINS",t[t.CONTAINED_BY=16]="CONTAINED_BY"})(l||(l={}));function M(t,n){const r=[],i=[];if(t===n)return 0;let e=d(t)?t:t.parent;for(;e;)r.unshift(e),e=e.parent;for(e=d(n)?n:n.parent;e;)i.unshift(e),e=e.parent;const u=Math.min(r.length,i.length);let f=0;for(;f<u&&r[f]===i[f];)f++;if(f===0)return l.DISCONNECTED;const s=r[f-1],c=s.children,p=r[f],y=i[f];return c.indexOf(p)>c.indexOf(y)?s===n?l.FOLLOWING|l.CONTAINED_BY:l.FOLLOWING:s===t?l.PRECEDING|l.CONTAINS:l.PRECEDING}function ct(t){return t=t.filter((n,r,i)=>!i.includes(n,r+1)),t.sort((n,r)=>{const i=M(n,r);return i&l.PRECEDING?-1:i&l.FOLLOWING?1:0}),t}function at(t){const n=v(dt,t);return n?n.name==="feed"?lt(n):ot(n):null}function lt(t){var n;const r=t.children,i={type:"atom",items:b("entry",r).map(f=>{var s;const{children:c}=f,p={media:R(c)};a(p,"id","id",c),a(p,"title","title",c);const y=(s=v("link",c))===null||s===void 0?void 0:s.attribs.href;y&&(p.link=y);const S=h("summary",c)||h("content",c);S&&(p.description=S);const m=h("updated",c);return m&&(p.pubDate=new Date(m)),p})};a(i,"id","id",r),a(i,"title","title",r);const e=(n=v("link",r))===null||n===void 0?void 0:n.attribs.href;e&&(i.link=e),a(i,"description","subtitle",r);const u=h("updated",r);return u&&(i.updated=new Date(u)),a(i,"author","email",r,!0),i}function ot(t){var n,r;const i=(r=(n=v("channel",t.children))===null||n===void 0?void 0:n.children)!==null&&r!==void 0?r:[],e={type:t.name.substr(0,3),id:"",items:b("item",t.children).map(f=>{const{children:s}=f,c={media:R(s)};a(c,"id","guid",s),a(c,"title","title",s),a(c,"link","link",s),a(c,"description","description",s);const p=h("pubDate",s)||h("dc:date",s);return p&&(c.pubDate=new Date(p)),c})};a(e,"title","title",i),a(e,"link","link",i),a(e,"description","description",i);const u=h("lastBuildDate",i);return u&&(e.updated=new Date(u)),a(e,"author","managingEditor",i,!0),e}const pt=["url","type","lang"],ht=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"];function R(t){return b("media:content",t).map(n=>{const{attribs:r}=n,i={medium:r.medium,isDefault:!!r.isDefault};for(const e of pt)r[e]&&(i[e]=r[e]);for(const e of ht)r[e]&&(i[e]=parseInt(r[e],10));return r.expression&&(i.expression=r.expression),i})}function v(t,n){return b(t,n,!0,1)[0]}function h(t,n,r=!1){return E(b(t,n,r,1)).trim()}function a(t,n,r,i,e=!1){const u=h(r,i,e);u&&(t[n]=u)}function dt(t){return t==="rss"||t==="feed"||t==="rdf:RDF"}const yt=Object.freeze(Object.defineProperty({__proto__:null,get DocumentPosition(){return l},append:X,appendChild:Q,compareDocumentPosition:M,existsOne:F,filter:N,find:k,findAll:nt,findOne:T,findOneChild:tt,getAttributeValue:H,getChildren:w,getElementById:ut,getElements:et,getElementsByTagName:b,getElementsByTagType:st,getFeed:at,getInnerHTML:B,getName:V,getOuterHTML:_,getParent:L,getSiblings:z,getText:O,hasAttrib:K,hasChildren:d,innerText:C,isCDATA:D,isComment:A,isDocument:Y,isTag:o,isText:g,nextElementSibling:q,prepend:$,prependChild:Z,prevElementSibling:U,removeElement:x,removeSubsets:ft,replaceElement:J,testElement:it,textContent:E,uniqueSort:ct},Symbol.toStringTag,{value:"Module"}));export{yt as D,w as a,k as f,z as g,C as i,q as n,U as p,x as r,E as t,ct as u};