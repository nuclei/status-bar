'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatusBar = function (_HTMLElement) {
    _inherits(StatusBar, _HTMLElement);

    function StatusBar() {
        _classCallCheck(this, StatusBar);

        return _possibleConstructorReturn(this, (StatusBar.__proto__ || Object.getPrototypeOf(StatusBar)).apply(this, arguments));
    }

    _createClass(StatusBar, [{
        key: 'createdCallback',

        // Use createdCallback instead of constructor to init an element.
        value: function createdCallback() {
            // This element uses Shadow DOM.
            this.createShadowRoot().innerHTML = '\n    <style>\n    .status__container {\n        position: relative;\n        z-index: 800;\n        margin: 0;\n        width: 100%;\n        max-height: 500px;\n        background-image: linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95));\n        background-color: currentColor;\n        color: rgb(55,115,215);\n        fill: currentColor;\n        transition: opacity .35s ease, max-height .5s ease;\n    }\n    .status__container.is-hidden {\n        transition: opacity .35s ease, max-height .5s ease;\n        opacity: 0;\n        max-height: 0;\n    }\n    .status__container[type="notice"]{\n        color: rgb(55,115,215);\n    }\n    .status__container[type="success"]{\n        color: rgb(30,170,70);\n    }\n    .status__container[type=warning]{\n        color: rgb(255,210,0);\n    }\n    .status__container[type=failure], .status__container[type=error]{\n        color: rgb(245,60,30);\n    }\n    .status__content{\n        position: relative;\n        display: flex;\n        box-shadow: inset 0 -1px 0 0 currentColor,\n        0 1px 2px 0 rgba(0,0,0,.15);\n    }\n    .status__container[attached=false] .status__content{\n        border-radius: 5px;\n        margin: 10px 0;\n        box-shadow: inset 0 0 0 1px currentColor,\n                    0 0 2px 0 rgba(0,0,0,.25);\n    }\n    .status__hide{\n        position: absolute;\n        right: 0;\n        top: 0;\n        height: 100%;\n        width: 50px;\n        box-sizing: border-box;\n    }\n    .status__hide svg{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 15px;\n        height: 15px;\n        transform: translate(-50%, -50%);\n    }\n    .status__hide:before{\n        content: "";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background-color: currentColor;\n        opacity: 0;\n        transition: opacity .35s ease;\n    }\n    .status__hide:hover:before{\n        transition: opacity .35s ease;\n        opacity: .1;\n    }\n    .status__icon{\n        position: relative;;\n        flex: 0 0 20px;\n        fill: inherit;\n        margin-left: 10px;\n    }\n    .status__icon svg{\n        fill: inherit;\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        top: calc(50% - 10px);\n        left: 0;\n    }\n    .status__text{\n        margin: 0;\n        padding: 20px 60px 20px 15px;\n    }\n    .status__container[type=warning] .status__text{\n        color: rgb(0,10,20);\n    }\n    </style>\n    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n        <symbol id="svg-icon--success" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z"fill-rule="evenodd"/></symbol>\n        <symbol id="svg-icon--error" viewbox="0 0 20 20"><path d="M11.414 10l2.829-2.828-1.415-1.415L10 8.586 7.172 5.757 5.757 7.172 8.586 10l-2.829 2.828 1.415 1.415L10 11.414l2.828 2.829 1.415-1.415L11.414 10zM2.93 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm1.414-1.414A8 8 0 1 0 15.657 4.343 8 8 0 0 0 4.343 15.657z" fill-rule="evenodd"/></symbol>\n        <symbol id="svg-icon--warning" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 5h2v6H9V5zm0 8h2v2H9v-2z" fill-rule="evenodd"/></symbol>\n        <symbol id="svg-icon--notice" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" fill-rule="evenodd"/></symbol>\n    </svg>\n    <div id="container" class="status__container" type$="{{type}}" attached$="{{attached}}">\n        <div class="status__content">\n            <template is="dom-if" if="{{isTrue(icon)}}">\n                <div class="status__icon">\n                    <svg>\n                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon--success"></use>\n                    </svg>\n                </div>\n            </template>\n            <p class="status__text"><content></content></p>\n            <template is="dom-if" if="{{isTrue(closable)}}">\n                <div class="status__hide" on-tap="close">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><polygon points="432.449,131.185 380.748,79.483 256,204.344 131.252,79.483 79.551,131.185 204.379,256.012 79.551,380.952 131.117,432.517 256,307.634 380.883,432.517 432.449,380.952 307.621,256.012"/></svg>\n                </div>\n            </template>\n        </div>\n    </div>\n    ';

            // Update the ticker prices.
            // this.updateQuotes(); // We'll define this later.
        }

        // You can also define the other lifecycle methods.
        // attachedCallback() { ... }
        // detachedCallback() { ... }
        // attributeChangedCallback() { ... }

    }], [{
        key: 'is',
        get: function get() {
            return 'status-bar';
        }
    }]);

    return StatusBar;
}(HTMLElement);

document.registerElement('status-bar', StatusBar);
//# sourceMappingURL=status-bar.js.map
