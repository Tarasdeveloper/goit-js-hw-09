!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("6JpON");document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=Number(n.currentTarget.delay.value),r=Number(n.currentTarget.step.value),o=Number(n.currentTarget.amount.value);if(t<0||r<0||o<=0)return e(i).Notify.warning("Enter a positive value!");for(u=1;u<=o;u+=1)a(u,t).then((function(n){var t=n.position,r=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.position,r=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))})),t+=r}));var u=0;function a(e,n){return new Promise((function(t,r){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.1f94b9f9.js.map
