(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{134:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(24);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#global-signup-modal");Object(o.render)(Object(o.h)(r.a,{shortcuts:{Escape:function(){var e=document.querySelector("#global-signup-modal");null===e||void 0===e||e.classList.add("hidden")}}}),e)}))},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var o=n(4),r=n(0),c=n.n(r);n(1);function a(e){if(e instanceof HTMLElement===!1)return!1;var t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&["submit","reset","checkbox","radio"].indexOf(n)<0||e.isContentEditable}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;Object(o.d)((function(){if(e&&0!==Object.keys(e).length){var n=function(t){if(!t.defaultPrevented){var n="".concat(t.ctrlKey||t.metaKey?"ctrl+":"").concat(t.altKey?"alt+":"").concat(t.shiftKey?"shift+":"");if(!(t.target instanceof Node&&a(t.target))||n){var o=e["".concat(n).concat(t.code)]||e["".concat(n).concat(t.key.toLowerCase())];o&&o(t)}}};return t.addEventListener("keydown",n),function(){t.removeEventListener("keydown",n)}}}),[e,t])}function s(e){return i(e.shortcuts,e.eventTarget),null}s.propTypes={shortcuts:c.a.object.isRequired,eventTarget:c.a.instanceOf(Element)},s.defaultProps={shortcuts:{},eventTarget:window}}},[[134,64,0]]]);
//# sourceMappingURL=signupModalShortcuts-618d9ff83cddfabb4825.chunk.js.map