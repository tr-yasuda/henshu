import{j as l,r as d,u as ae,L as Ze,a as L,g as jr,R as Dr,B as $e,C as Er,c as Or}from"./index-BngnmpdB.js";import{c as er}from"./createReactComponent-CrR-LZV7.js";import{u as Ar,z as W,a as Fr,I as Sr}from"./Input-DRddJj84.js";import{T as kr}from"./Textarea-BLn0oJvq.js";const Cr=({children:e,separator:r="/",className:t})=>{const n=l.jsx("span",{className:"mx-2 text-gray-400",children:r},"separator");return l.jsx("nav",{"aria-label":"Breadcrumb",className:t,children:l.jsx("div",{className:"flex items-center space-x-2",children:d.Children.toArray(e).reduce((o,a,c)=>c===0?[a]:o.concat([n,a]),[])})})},_r=[{to:"/",label:"Home"},{to:"/projects",label:"Projects"}],Pr=()=>{const{t:e}=ae();return l.jsx(Cr,{separator:">",className:"my-2",children:_r.map(({to:r,label:t})=>l.jsx(Ze,{to:r,className:"text-gray-600 hover:underline",children:e(t)},r))})},Tr=({children:e,onClick:r,color:t="primary",size:n="md",className:o,ariaLabel:a})=>l.jsx("button",{type:"button",onClick:r,className:L("inline-flex items-center justify-center rounded-full focus:outline-none focus:ring",{"w-6 h-6":n==="xs","w-8 h-8":n==="sm","w-10 h-10":n==="md","w-12 h-12":n==="lg","w-14 h-14":n==="xl"},{"text-white bg-primary hover:bg-primary-dark focus:ring-primary":t==="primary","text-white bg-secondary hover:bg-secondary-dark focus:ring-secondary":t==="secondary","text-white bg-success hover:bg-success-dark focus:ring-success":t==="success","text-white bg-error hover:bg-error-dark focus:ring-error":t==="error","text-white bg-warning hover:bg-warning-dark focus:ring-warning":t==="warning","text-white bg-info hover:bg-info-dark focus:ring-info":t==="info"},o),"aria-label":a,children:e});/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var rr=er("outline","search","IconSearch",[["path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ir=er("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const Rr=({placeholder:e="Search...",color:r="primary",className:t,onSearch:n})=>{const{t:o}=ae(),[a,c]=d.useState(""),s=p=>{p.preventDefault(),n(a)};return l.jsxs("form",{onSubmit:s,className:L("flex items-center bg-white border border-gray-300 rounded-lg shadow-md",t),children:[l.jsx("div",{className:"flex items-center px-3",children:l.jsx(rr,{size:20,strokeWidth:1.5,className:"text-gray-500"})}),l.jsx("input",{type:"text",value:a,onChange:p=>c(p.target.value),placeholder:o(e),className:"w-full px-4 py-2 bg-white text-gray-900 border-none focus:outline-none rounded-l-lg"}),l.jsx("button",{type:"submit",className:L("px-4 py-2 rounded-r-lg focus:outline-none whitespace-nowrap",{"bg-primary text-white hover:bg-primary-dark":r==="primary","bg-secondary text-white hover:bg-secondary-dark":r==="secondary","bg-success text-white hover:bg-success-dark":r==="success","bg-warning text-black hover:bg-warning-dark":r==="warning","bg-error text-white hover:bg-error-dark":r==="error","bg-gray-500 text-black hover:bg-gray-800":r==="gray"}),children:o("Search")})]})};var tr={exports:{}},Nr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lr=Nr,Mr=Lr;function nr(){}function ar(){}ar.resetWarningCache=nr;var zr=function(){function e(n,o,a,c,s,p){if(p!==Mr){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:ar,resetWarningCache:nr};return t.PropTypes=t,t};tr.exports=zr();var $r=tr.exports;const g=jr($r);function M(e,r,t,n){function o(a){return a instanceof t?a:new t(function(c){c(a)})}return new(t||(t=Promise))(function(a,c){function s(m){try{u(n.next(m))}catch(b){c(b)}}function p(m){try{u(n.throw(m))}catch(b){c(b)}}function u(m){m.done?a(m.value):o(m.value).then(s,p)}u((n=n.apply(e,r||[])).next())})}function z(e,r){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,c;return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(u){return function(m){return p([u,m])}}function p(u){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,u[0]&&(t=0)),t;)try{if(n=1,o&&(a=u[0]&2?o.return:u[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,u[1])).done)return a;switch(o=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,o=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){t.label=u[1];break}if(u[0]===6&&t.label<a[1]){t.label=a[1],a=u;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(u);break}a[2]&&t.ops.pop(),t.trys.pop();continue}u=r.call(e,t)}catch(m){u=[6,m],o=0}finally{n=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Ke(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),o,a=[],c;try{for(;(r===void 0||r-- >0)&&!(o=n.next()).done;)a.push(o.value)}catch(s){c={error:s}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return a}function Be(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,a;n<o;n++)(a||!(n in r))&&(a||(a=Array.prototype.slice.call(r,0,n)),a[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))}var Kr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function U(e,r){var t=Br(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Br(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=Kr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Wr=[".DS_Store","Thumbs.db"];function Hr(e){return M(this,void 0,void 0,function(){return z(this,function(r){return re(e)&&Ur(e.dataTransfer)?[2,Xr(e.dataTransfer,e.type)]:Yr(e)?[2,qr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Gr(e)]:[2,[]]})})}function Ur(e){return re(e)}function Yr(e){return re(e)&&re(e.target)}function re(e){return typeof e=="object"&&e!==null}function qr(e){return be(e.target.files).map(function(r){return U(r)})}function Gr(e){return M(this,void 0,void 0,function(){var r;return z(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return U(n)})]}})})}function Xr(e,r){return M(this,void 0,void 0,function(){var t,n;return z(this,function(o){switch(o.label){case 0:return e.items?(t=be(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Jr))]):[3,2];case 1:return n=o.sent(),[2,We(or(n))];case 2:return[2,We(be(e.files).map(function(a){return U(a)}))]}})})}function We(e){return e.filter(function(r){return Wr.indexOf(r.name)===-1})}function be(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Jr(e){if(typeof e.webkitGetAsEntry!="function")return He(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?ir(r):He(e)}function or(e){return e.reduce(function(r,t){return Be(Be([],Ke(r),!1),Ke(Array.isArray(t)?or(t):[t]),!1)},[])}function He(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=U(r);return Promise.resolve(t)}function Vr(e){return M(this,void 0,void 0,function(){return z(this,function(r){return[2,e.isDirectory?ir(e):Qr(e)]})})}function ir(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function a(){var c=this;r.readEntries(function(s){return M(c,void 0,void 0,function(){var p,u,m;return z(this,function(b){switch(b.label){case 0:if(s.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return p=b.sent(),t(p),[3,4];case 3:return u=b.sent(),n(u),[3,4];case 4:return[3,6];case 5:m=Promise.all(s.map(Vr)),o.push(m),a(),b.label=6;case 6:return[2]}})})},function(s){n(s)})}a()})}function Qr(e){return M(this,void 0,void 0,function(){return z(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var a=U(o,e.fullPath);t(a)},function(o){n(o)})})]})})}var Zr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return t.some(function(c){var s=c.trim().toLowerCase();return s.charAt(0)==="."?n.toLowerCase().endsWith(s):s.endsWith("/*")?a===s.replace(/\/.*$/,""):o===s})}return!0};function Ue(e){return tt(e)||rt(e)||cr(e)||et()}function et(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return xe(e)}function Ye(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function qe(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ye(Object(t),!0).forEach(function(n){sr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ye(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function sr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function H(e,r){return ot(e)||at(e,r)||cr(e,r)||nt()}function nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cr(e,r){if(e){if(typeof e=="string")return xe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xe(e,r)}}function xe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function at(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,c,s;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));o=!0);}catch(p){a=!0,s=p}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw s}}return n}}function ot(e){if(Array.isArray(e))return e}var it="file-invalid-type",st="file-too-large",ct="file-too-small",lt="too-many-files",ut=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:it,message:"File type must be ".concat(t)}},Ge=function(r){return{code:st,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Xe=function(r){return{code:ct,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},ft={code:lt,message:"Too many files"};function lr(e,r){var t=e.type==="application/x-moz-file"||Zr(e,r);return[t,t?null:ut(r)]}function ur(e,r,t){if(P(e.size))if(P(r)&&P(t)){if(e.size>t)return[!1,Ge(t)];if(e.size<r)return[!1,Xe(r)]}else{if(P(r)&&e.size<r)return[!1,Xe(r)];if(P(t)&&e.size>t)return[!1,Ge(t)]}return[!0,null]}function P(e){return e!=null}function pt(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,a=e.multiple,c=e.maxFiles,s=e.validator;return!a&&r.length>1||a&&c>=1&&r.length>c?!1:r.every(function(p){var u=lr(p,t),m=H(u,1),b=m[0],A=ur(p,n,o),F=H(A,1),S=F[0],k=s?s(p):null;return b&&S&&!k})}function te(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ee(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Je(e){e.preventDefault()}function dt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function mt(e){return e.indexOf("Edge/")!==-1}function gt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return dt(e)||mt(e)}function O(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];return r.some(function(s){return!te(n)&&s&&s.apply(void 0,[n].concat(a)),te(n)})}}function ht(){return"showOpenFilePicker"in window}function yt(e){if(P(e)){var r=Object.entries(e).filter(function(t){var n=H(t,2),o=n[0],a=n[1],c=!0;return fr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),c=!1),(!Array.isArray(a)||!a.every(pr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),c=!1),c}).reduce(function(t,n){var o=H(n,2),a=o[0],c=o[1];return qe(qe({},t),{},sr({},a,c))},{});return[{description:"Files",accept:r}]}return e}function vt(e){if(P(e))return Object.entries(e).reduce(function(r,t){var n=H(t,2),o=n[0],a=n[1];return[].concat(Ue(r),[o],Ue(a))},[]).filter(function(r){return fr(r)||pr(r)}).join(",")}function bt(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function xt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function fr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function pr(e){return/^.*\.[\w]+$/.test(e)}var wt=["children"],jt=["open"],Dt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Et=["refKey","onChange","onClick"];function Ot(e){return St(e)||Ft(e)||dr(e)||At()}function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ft(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function St(e){if(Array.isArray(e))return we(e)}function ve(e,r){return _t(e)||Ct(e,r)||dr(e,r)||kt()}function kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(e,r){if(e){if(typeof e=="string")return we(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return we(e,r)}}function we(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ct(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,c,s;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(n.push(c.value),!(r&&n.length===r));o=!0);}catch(p){a=!0,s=p}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw s}}return n}}function _t(e){if(Array.isArray(e))return e}function Ve(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ve(Object(t),!0).forEach(function(n){je(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ve(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function je(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ne(e,r){if(e==null)return{};var t=Pt(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Pt(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Ee=d.forwardRef(function(e,r){var t=e.children,n=ne(e,wt),o=gr(n),a=o.open,c=ne(o,jt);return d.useImperativeHandle(r,function(){return{open:a}},[a]),Dr.createElement(d.Fragment,null,t(h(h({},c),{},{open:a})))});Ee.displayName="Dropzone";var mr={disabled:!1,getFilesFromEvent:Hr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ee.defaultProps=mr;Ee.propTypes={children:g.func,accept:g.objectOf(g.arrayOf(g.string)),multiple:g.bool,preventDropOnDocument:g.bool,noClick:g.bool,noKeyboard:g.bool,noDrag:g.bool,noDragEventsBubbling:g.bool,minSize:g.number,maxSize:g.number,maxFiles:g.number,disabled:g.bool,getFilesFromEvent:g.func,onFileDialogCancel:g.func,onFileDialogOpen:g.func,useFsAccessApi:g.bool,autoFocus:g.bool,onDragEnter:g.func,onDragLeave:g.func,onDragOver:g.func,onDrop:g.func,onDropAccepted:g.func,onDropRejected:g.func,onError:g.func,validator:g.func};var De={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function gr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=h(h({},mr),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,c=r.minSize,s=r.multiple,p=r.maxFiles,u=r.onDragEnter,m=r.onDragLeave,b=r.onDragOver,A=r.onDrop,F=r.onDropAccepted,S=r.onDropRejected,k=r.onFileDialogCancel,v=r.onFileDialogOpen,Y=r.useFsAccessApi,Oe=r.autoFocus,oe=r.preventDropOnDocument,Ae=r.noClick,ie=r.noKeyboard,Fe=r.noDrag,C=r.noDragEventsBubbling,se=r.onError,$=r.validator,K=d.useMemo(function(){return vt(t)},[t]),Se=d.useMemo(function(){return yt(t)},[t]),ce=d.useMemo(function(){return typeof v=="function"?v:Qe},[v]),q=d.useMemo(function(){return typeof k=="function"?k:Qe},[k]),w=d.useRef(null),E=d.useRef(null),hr=d.useReducer(Tt,De),ke=ve(hr,2),le=ke[0],j=ke[1],yr=le.isFocused,Ce=le.isFileDialogActive,G=d.useRef(typeof window<"u"&&window.isSecureContext&&Y&&ht()),_e=function(){!G.current&&Ce&&setTimeout(function(){if(E.current){var f=E.current.files;f.length||(j({type:"closeDialog"}),q())}},300)};d.useEffect(function(){return window.addEventListener("focus",_e,!1),function(){window.removeEventListener("focus",_e,!1)}},[E,Ce,q,G]);var T=d.useRef([]),Pe=function(f){w.current&&w.current.contains(f.target)||(f.preventDefault(),T.current=[])};d.useEffect(function(){return oe&&(document.addEventListener("dragover",Je,!1),document.addEventListener("drop",Pe,!1)),function(){oe&&(document.removeEventListener("dragover",Je),document.removeEventListener("drop",Pe))}},[w,oe]),d.useEffect(function(){return!n&&Oe&&w.current&&w.current.focus(),function(){}},[w,Oe,n]);var _=d.useCallback(function(i){se?se(i):console.error(i)},[se]),Te=d.useCallback(function(i){i.preventDefault(),i.persist(),Q(i),T.current=[].concat(Ot(T.current),[i.target]),ee(i)&&Promise.resolve(o(i)).then(function(f){if(!(te(i)&&!C)){var y=f.length,x=y>0&&pt({files:f,accept:K,minSize:c,maxSize:a,multiple:s,maxFiles:p,validator:$}),D=y>0&&!x;j({isDragAccept:x,isDragReject:D,isDragActive:!0,type:"setDraggedFiles"}),u&&u(i)}}).catch(function(f){return _(f)})},[o,u,_,C,K,c,a,s,p,$]),Ie=d.useCallback(function(i){i.preventDefault(),i.persist(),Q(i);var f=ee(i);if(f&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return f&&b&&b(i),!1},[b,C]),Re=d.useCallback(function(i){i.preventDefault(),i.persist(),Q(i);var f=T.current.filter(function(x){return w.current&&w.current.contains(x)}),y=f.indexOf(i.target);y!==-1&&f.splice(y,1),T.current=f,!(f.length>0)&&(j({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ee(i)&&m&&m(i))},[w,m,C]),X=d.useCallback(function(i,f){var y=[],x=[];i.forEach(function(D){var B=lr(D,K),N=ve(B,2),fe=N[0],pe=N[1],de=ur(D,c,a),Z=ve(de,2),me=Z[0],ge=Z[1],he=$?$(D):null;if(fe&&me&&!he)y.push(D);else{var ye=[pe,ge];he&&(ye=ye.concat(he)),x.push({file:D,errors:ye.filter(function(wr){return wr})})}}),(!s&&y.length>1||s&&p>=1&&y.length>p)&&(y.forEach(function(D){x.push({file:D,errors:[ft]})}),y.splice(0)),j({acceptedFiles:y,fileRejections:x,type:"setFiles"}),A&&A(y,x,f),x.length>0&&S&&S(x,f),y.length>0&&F&&F(y,f)},[j,s,K,c,a,p,A,F,S,$]),J=d.useCallback(function(i){i.preventDefault(),i.persist(),Q(i),T.current=[],ee(i)&&Promise.resolve(o(i)).then(function(f){te(i)&&!C||X(f,i)}).catch(function(f){return _(f)}),j({type:"reset"})},[o,X,_,C]),I=d.useCallback(function(){if(G.current){j({type:"openDialog"}),ce();var i={multiple:s,types:Se};window.showOpenFilePicker(i).then(function(f){return o(f)}).then(function(f){X(f,null),j({type:"closeDialog"})}).catch(function(f){bt(f)?(q(f),j({type:"closeDialog"})):xt(f)?(G.current=!1,E.current?(E.current.value=null,E.current.click()):_(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):_(f)});return}E.current&&(j({type:"openDialog"}),ce(),E.current.value=null,E.current.click())},[j,ce,q,Y,X,_,Se,s]),Ne=d.useCallback(function(i){!w.current||!w.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),I())},[w,I]),Le=d.useCallback(function(){j({type:"focus"})},[]),Me=d.useCallback(function(){j({type:"blur"})},[]),ze=d.useCallback(function(){Ae||(gt()?setTimeout(I,0):I())},[Ae,I]),R=function(f){return n?null:f},ue=function(f){return ie?null:R(f)},V=function(f){return Fe?null:R(f)},Q=function(f){C&&f.stopPropagation()},vr=d.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=i.refKey,y=f===void 0?"ref":f,x=i.role,D=i.onKeyDown,B=i.onFocus,N=i.onBlur,fe=i.onClick,pe=i.onDragEnter,de=i.onDragOver,Z=i.onDragLeave,me=i.onDrop,ge=ne(i,Dt);return h(h(je({onKeyDown:ue(O(D,Ne)),onFocus:ue(O(B,Le)),onBlur:ue(O(N,Me)),onClick:R(O(fe,ze)),onDragEnter:V(O(pe,Te)),onDragOver:V(O(de,Ie)),onDragLeave:V(O(Z,Re)),onDrop:V(O(me,J)),role:typeof x=="string"&&x!==""?x:"presentation"},y,w),!n&&!ie?{tabIndex:0}:{}),ge)}},[w,Ne,Le,Me,ze,Te,Ie,Re,J,ie,Fe,n]),br=d.useCallback(function(i){i.stopPropagation()},[]),xr=d.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=i.refKey,y=f===void 0?"ref":f,x=i.onChange,D=i.onClick,B=ne(i,Et),N=je({accept:K,multiple:s,type:"file",style:{display:"none"},onChange:R(O(x,J)),onClick:R(O(D,br)),tabIndex:-1},y,E);return h(h({},N),B)}},[E,t,s,J,n]);return h(h({},le),{},{isFocused:yr&&!n,getRootProps:vr,getInputProps:xr,rootRef:w,inputRef:E,open:R(I)})}function Tt(e,r){switch(r.type){case"focus":return h(h({},e),{},{isFocused:!0});case"blur":return h(h({},e),{},{isFocused:!1});case"openDialog":return h(h({},De),{},{isFileDialogActive:!0});case"closeDialog":return h(h({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return h(h({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return h(h({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return h({},De);default:return e}}function Qe(){}const It=({icon:e,variant:r="outlined",color:t="primary",type:n="button","aria-label":o,onClick:a})=>l.jsx("button",{onClick:a,"aria-label":o,className:L("px-2 py-1 rounded-md text-white",r==="filled"&&`bg-${t} hover:bg-${t}-dark`,r==="outlined"&&`border border-${t} text-white hover:bg-${t}-lighter`,r==="white"&&`bg-white text-${t} hover:bg-${t}-lighter`),type:n,children:e}),Rt=({children:e,open:r,title:t,onClose:n,disableEscapeKey:o=!1,disableBackdropClick:a=!1,className:c})=>{if(!r)return null;const s=m=>{m.target===m.currentTarget&&!a&&n()},p=m=>{m.key==="Escape"&&!o&&n()},u=m=>{m.stopPropagation()};return l.jsx("div",{onClick:s,onKeyDown:p,tabIndex:-1,className:L("fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50",c),children:l.jsxs("div",{onClick:u,onKeyDown:p,tabIndex:-1,className:"bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[l.jsxs("div",{className:"flex justify-between py-2 px-2",children:[l.jsx("div",{className:"text-xl",children:t}),l.jsx(It,{icon:l.jsx(Ir,{color:"gray"}),variant:"white",onClick:n})]}),l.jsx("hr",{}),e]})})},Nt=({isOpen:e,onClose:r,onCreate:t,droppedVideoFile:n})=>{const{t:o}=ae(),a=d.useRef(null),c=Ar({defaultValues:{title:"",description:""},validators:{onChange:W.object({title:W.string().min(1).max(64),description:W.string().min(1).max(256)})},validatorAdapter:Fr,onSubmit:async({value:s})=>{t({title:s.title,description:s.description,video:n}),r()}});return d.useEffect(()=>{if(n&&a.current){const s=URL.createObjectURL(n);return a.current.src=s,()=>{URL.revokeObjectURL(s)}}},[n]),l.jsx(Rt,{open:e,onClose:r,title:o("Create Project"),disableBackdropClick:!0,children:l.jsx("div",{className:"rounded-lg max-w-md w-full p-6 mx-auto",children:l.jsxs("form",{className:"mt-4 space-y-2",onSubmit:s=>{s.preventDefault(),s.stopPropagation(),c.handleSubmit()},children:[l.jsx(c.Field,{name:"title",validators:{onChange:W.string().min(1,"Please enter a title.").max(64,"Title must be less than 64 characters.")},children:s=>l.jsxs(l.Fragment,{children:[l.jsx("label",{htmlFor:"title",className:"block text-gray-700",children:o("Project Title")}),l.jsx(Sr,{id:"title",value:s.state.value,onChange:p=>s.handleChange(p.target.value),errorMessage:o(s.state.meta.errors.toString()),required:!0})]})}),l.jsx(c.Field,{name:"description",validators:{onChange:W.string().min(1,"Please enter a description.").max(256,"Description must be less than 256 characters.")},children:s=>l.jsxs(l.Fragment,{children:[l.jsx("label",{htmlFor:"description",className:"block text-gray-700",children:o("Description")}),l.jsx(kr,{id:"description",value:s.state.value,onChange:p=>s.handleChange(p.target.value),errorMessage:o(s.state.meta.errors.toString().trim()),required:!0})]})}),n&&l.jsx("div",{className:"mt-4 mb-1",children:l.jsxs("p",{className:"text-gray-700",children:[o("Video file:")," ",n.name]})}),l.jsx("video",{ref:a,controls:!0,children:l.jsx("track",{kind:"captions"})}),l.jsxs("div",{className:"mt-6 flex justify-end space-x-4",children:[l.jsx($e,{type:"button",onClick:r,color:"gray",children:o("Cancel")}),l.jsx(c.Subscribe,{selector:s=>[s.canSubmit,s.isDirty],children:([s,p])=>l.jsx($e,{type:"submit",disabled:!s||!p||!n,children:o("Create")})})]})]})})})},Lt=[{id:1,title:"Project One",description:"Description for project one",image:"path/to/image1.jpg"},{id:2,title:"Project Two",description:"Description for project two",image:"path/to/image2.jpg"}],Mt=()=>{const[e,r]=d.useState(!1),[t,n]=d.useState(!1),[o,a]=d.useState(""),{t:c}=ae(),[s,p]=d.useState(null),u=v=>{const Y=v[0];p(Y),n(!0)},{getRootProps:m,getInputProps:b,isDragActive:A}=gr({onDrop:u}),F=v=>{n(!1)},S=v=>{a(v)},k=()=>{r(v=>!v)};return l.jsxs("div",{className:"container mx-auto px-4",children:[l.jsxs("h1",{className:"text-2xl font-bold mb-4",children:[c("Projects"),l.jsx(Tr,{onClick:k,ariaLabel:"Search",size:"xs",className:"ml-2",children:l.jsx(rr,{size:16})})]}),e&&l.jsx(Rr,{onSearch:S,className:"my-3"}),l.jsxs("div",{...m(),className:L("border-4 border-dashed rounded-lg p-4 mb-6",A?"border-blue-500 p-16":"border-gray-300"),children:[l.jsx("input",{...b()}),A?l.jsx("p",{children:c("Drop the video files here...")}):l.jsx("p",{children:c("Drag & drop some video files here, or click to select files")})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[Lt.filter(v=>v.title.toLowerCase().includes(o)).map(v=>l.jsxs(Er,{className:"flex flex-col",children:[l.jsx("img",{className:"w-full h-48 object-cover",src:v.image,alt:v.title}),l.jsxs("div",{className:"flex-grow px-6 py-4",children:[l.jsx("div",{className:"font-bold text-xl mb-2",children:v.title}),l.jsx("p",{className:"text-gray-700 text-base",children:v.description})]}),l.jsx("div",{className:"px-6 pt-4 pb-2",children:l.jsx(Ze,{to:`./${v.id}`,className:"text-blue-500 hover:text-blue-800",children:c("Edit")})})]},v.id)),l.jsx(Nt,{isOpen:t,onClose:()=>n(!1),onCreate:F,droppedVideoFile:s})]})]})},Wt=Or("/projects")({component:()=>l.jsx("div",{className:"min-h-screen bg-gray-100",children:l.jsxs("div",{className:"container mx-auto py-12",children:[l.jsx(Pr,{}),l.jsx(Mt,{})]})})});export{Wt as Route};
