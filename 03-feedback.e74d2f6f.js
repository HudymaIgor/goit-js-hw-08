function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,o={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),v=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,r,i,a,u,l,f=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function h(e){return f=e,u=setTimeout(w,t),c?p(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=i}function w(){var e=g();if(j(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-l);return s?m(n,i-(e-f)):n}(e))}function O(e){return u=void 0,v&&o?p(e):(o=r=void 0,a)}function S(){var e=g(),n=j(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return h(l);if(s)return u=setTimeout(w,t),p(l)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,y(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=l=r=u=void 0},S.flush=function(){return void 0===u?a:O(g())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const h=document.querySelector(".feedback-form"),j={};(()=>{const e=o.load("userValue");if(e)for(const t in e)e.hasOwnProperty(t)&&(console.log(t),h.elements[t].value=e[t],j[t]=e[t])})(),h.addEventListener("input",e(n)((e=>{const{target:t}=e,n=t.name,r=t.value;j[n]=r,o.save("userValue",j)}),500)),h.addEventListener("submit",(e=>{e.preventDefault();const t={email:h.elements.email.value,message:h.elements.message.value};console.log(t),o.remove("userValue"),h.reset()}));
//# sourceMappingURL=03-feedback.e74d2f6f.js.map
