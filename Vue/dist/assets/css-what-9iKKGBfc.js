var s;(function(t){t.Attribute="attribute",t.Pseudo="pseudo",t.PseudoElement="pseudo-element",t.Tag="tag",t.Universal="universal",t.Adjacent="adjacent",t.Child="child",t.Descendant="descendant",t.Parent="parent",t.Sibling="sibling",t.ColumnCombinator="column-combinator"})(s||(s={}));var e;(function(t){t.Any="any",t.Element="element",t.End="end",t.Equals="equals",t.Exists="exists",t.Hyphen="hyphen",t.Not="not",t.Start="start"})(e||(e={}));const S=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,F=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,N=new Map([[126,e.Element],[94,e.Start],[36,e.End],[42,e.Any],[33,e.Not],[124,e.Hyphen]]),W=new Set(["has","not","matches","is","where","host","host-context"]);function j(t){switch(t.type){case s.Adjacent:case s.Child:case s.Descendant:case s.Parent:case s.Sibling:case s.ColumnCombinator:return!0;default:return!1}}const U=new Set(["contains","icontains"]);function H(t,n,a){const i=parseInt(n,16)-65536;return i!==i||a?n:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,i&1023|56320)}function g(t){return t.replace(F,H)}function E(t){return t===39||t===34}function D(t){return t===32||t===9||t===10||t===12||t===13}function L(t){const n=[],a=l(n,`${t}`,0);if(a<t.length)throw new Error(`Unmatched selector: ${t.slice(a)}`);return n}function l(t,n,a){let i=[];function p(r){const h=n.slice(a+r).match(S);if(!h)throw new Error(`Expected name, found ${n.slice(a)}`);const[u]=h;return a+=r+u.length,g(u)}function f(r){for(a+=r;a<n.length&&D(n.charCodeAt(a));)a++}function c(){a+=1;const r=a;let h=1;for(;h>0&&a<n.length;a++)n.charCodeAt(a)===40&&!w(a)?h++:n.charCodeAt(a)===41&&!w(a)&&h--;if(h)throw new Error("Parenthesis not matched");return g(n.slice(r,a-1))}function w(r){let h=0;for(;n.charCodeAt(--r)===92;)h++;return(h&1)===1}function k(){if(i.length>0&&j(i[i.length-1]))throw new Error("Did not expect successive traversals.")}function m(r){if(i.length>0&&i[i.length-1].type===s.Descendant){i[i.length-1].type=r;return}k(),i.push({type:r})}function v(r,h){i.push({type:s.Attribute,name:r,action:h,value:p(1),namespace:null,ignoreCase:"quirks"})}function P(){if(i.length&&i[i.length-1].type===s.Descendant&&i.pop(),i.length===0)throw new Error("Empty sub-selector");t.push(i)}if(f(0),n.length===a)return a;a:for(;a<n.length;){const r=n.charCodeAt(a);switch(r){case 32:case 9:case 10:case 12:case 13:{(i.length===0||i[0].type!==s.Descendant)&&(k(),i.push({type:s.Descendant})),f(1);break}case 62:{m(s.Child),f(1);break}case 60:{m(s.Parent),f(1);break}case 126:{m(s.Sibling),f(1);break}case 43:{m(s.Adjacent),f(1);break}case 46:{v("class",e.Element);break}case 35:{v("id",e.Equals);break}case 91:{f(1);let h,u=null;n.charCodeAt(a)===124?h=p(1):n.startsWith("*|",a)?(u="*",h=p(2)):(h=p(0),n.charCodeAt(a)===124&&n.charCodeAt(a+1)!==61&&(u=h,h=p(1))),f(0);let C=e.Exists;const y=N.get(n.charCodeAt(a));if(y){if(C=y,n.charCodeAt(a+1)!==61)throw new Error("Expected `=`");f(2)}else n.charCodeAt(a)===61&&(C=e.Equals,f(1));let A="",b=null;if(C!=="exists"){if(E(n.charCodeAt(a))){const d=n.charCodeAt(a);let o=a+1;for(;o<n.length&&(n.charCodeAt(o)!==d||w(o));)o+=1;if(n.charCodeAt(o)!==d)throw new Error("Attribute value didn't end");A=g(n.slice(a+1,o)),a=o+1}else{const d=a;for(;a<n.length&&(!D(n.charCodeAt(a))&&n.charCodeAt(a)!==93||w(a));)a+=1;A=g(n.slice(d,a))}f(0);const q=n.charCodeAt(a)|32;q===115?(b=!1,f(1)):q===105&&(b=!0,f(1))}if(n.charCodeAt(a)!==93)throw new Error("Attribute selector didn't terminate");a+=1;const $={type:s.Attribute,name:h,action:C,value:A,namespace:u,ignoreCase:b};i.push($);break}case 58:{if(n.charCodeAt(a+1)===58){i.push({type:s.PseudoElement,name:p(2).toLowerCase(),data:n.charCodeAt(a)===40?c():null});continue}const h=p(1).toLowerCase();let u=null;if(n.charCodeAt(a)===40)if(W.has(h)){if(E(n.charCodeAt(a+1)))throw new Error(`Pseudo-selector ${h} cannot be quoted`);if(u=[],a=l(u,n,a+1),n.charCodeAt(a)!==41)throw new Error(`Missing closing parenthesis in :${h} (${n})`);a+=1}else{if(u=c(),U.has(h)){const C=u.charCodeAt(0);C===u.charCodeAt(u.length-1)&&E(C)&&(u=u.slice(1,-1))}u=g(u)}i.push({type:s.Pseudo,name:h,data:u});break}case 44:{P(),i=[],f(1);break}default:{if(n.startsWith("/*",a)){const C=n.indexOf("*/",a+2);if(C<0)throw new Error("Comment was not terminated");a=C+2,i.length===0&&f(0);break}let h=null,u;if(r===42)a+=1,u="*";else if(r===124){if(u="",n.charCodeAt(a+1)===124){m(s.ColumnCombinator),f(2);break}}else if(S.test(n.slice(a)))u=p(0);else break a;n.charCodeAt(a)===124&&n.charCodeAt(a+1)!==124&&(h=u,n.charCodeAt(a+1)===42?(u="*",a+=2):u=p(1)),i.push(u==="*"?{type:s.Universal,namespace:h}:{type:s.Tag,name:u,namespace:h})}}}return P(),a}export{e as A,s as S,j as i,L as p};
