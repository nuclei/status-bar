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
            this.createShadowRoot().innerHTML = '\n    <style>\n    .status-bar__container {\n        position: relative;\n        z-index: 800;\n        margin: 0;\n        width: 100%;\n        max-height: 500px;\n        background-image: linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95));\n        background-color: currentColor;\n        color: rgb(55,115,215);\n        fill: currentColor;\n        transition: opacity .35s ease, max-height .5s ease;\n    }\n    .status-bar__container.is-hidden {\n        transition: opacity .35s ease, max-height .5s ease;\n        opacity: 0;\n        max-height: 0;\n    }\n    :host([type="notice"]) .status-bar__container{\n        color: rgb(28,124,214);\n    }\n    :host([type="success"]) .status-bar__container{\n        color: rgb(55,178,77);\n    }\n    :host([type="warning"]) .status-bar__container{\n        color: rgb(250,176,5);\n    }\n    :host([type="error"]) .status-bar__container{\n        color: rgb(240,62,62);\n    }\n    .status-bar__content{\n        position: relative;\n        display: flex;\n        box-shadow: inset 0 -1px 0 0 currentColor,\n        0 1px 2px 0 rgba(0,0,0,.15);\n    }\n    :host([attached=false]) .status-bar__content{\n        border-radius: 5px;\n        margin: 10px 0;\n        box-shadow: inset 0 0 0 1px currentColor,\n                    0 0 2px 0 rgba(0,0,0,.25);\n    }\n    .status-bar__hide{\n        position: absolute;\n        right: 0;\n        top: 0;\n        height: 100%;\n        width: 50px;\n        box-sizing: border-box;\n    }\n    .status-bar__hide svg{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 15px;\n        height: 15px;\n        transform: translate(-50%, -50%);\n    }\n    .status-bar__hide:before{\n        content: "";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background-color: currentColor;\n        opacity: 0;\n        transition: opacity .35s ease;\n    }\n    .status-bar__hide:hover:before{\n        transition: opacity .35s ease;\n        opacity: .1;\n    }\n    .status-bar__icon{\n        position: relative;;\n        flex: 0 0 20px;\n        fill: inherit;\n        margin-left: 10px;\n    }\n    .status-bar__icon svg{\n        fill: inherit;\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        top: calc(50% - 10px);\n        left: 0;\n    }\n    .status-bar__text{\n        margin: 0;\n        padding: 20px 60px 20px 15px;\n    }\n    .status-hidden{\n        display: none;\n    }\n    </style>\n    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n        <symbol id="svg-icon--success" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z"fill-rule="evenodd"/></symbol>\n        <symbol id="svg-icon--error" viewbox="0 0 20 20"><path d="M11.414 10l2.829-2.828-1.415-1.415L10 8.586 7.172 5.757 5.757 7.172 8.586 10l-2.829 2.828 1.415 1.415L10 11.414l2.828 2.829 1.415-1.415L11.414 10zM2.93 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm1.414-1.414A8 8 0 1 0 15.657 4.343 8 8 0 0 0 4.343 15.657z" fill-rule="evenodd"/></symbol>\n        <symbol id="svg-icon--warning" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 5h2v6H9V5zm0 8h2v2H9v-2z" fill-rule="evenodd"/></symbol>\n        <symbol id="svg-icon--notice" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" fill-rule="evenodd"/></symbol>\n    </svg>\n    <div id="container" class="status-bar__container">\n        <div class="status-bar__content">\n            <div class="status-bar__icon">\n                <svg>\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon--success"></use>\n                </svg>\n            </div>\n            <p class="status-bar__text"><content></content></p>\n            <div class="status-bar__hide">\n                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><polygon points="432.449,131.185 380.748,79.483 256,204.344 131.252,79.483 79.551,131.185 204.379,256.012 79.551,380.952 131.117,432.517 256,307.634 380.883,432.517 432.449,380.952 307.621,256.012"/></svg>\n            </div>\n            </div>\n    </div>\n    ';

            // initialize
            this._closeable(this.getAttribute('closeable'));
            this._icon(this.getAttribute('icon'));
            // add close trigger
            this.shadowRoot.querySelector('.status-bar__hide').addEventListener('click', function () {
                this._close();
            }.bind(this));
            // trigger timout
            if (this.getAttribute('timeout') !== undefined && Number.isInteger(parseInt(this.getAttribute('timeout')))) {
                setTimeout(function () {
                    this._close();
                }.bind(this), parseInt(this.getAttribute('timeout')));
            }
        }
        /**
         * when an attribute is changed
         */

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            // define callbacks
            var callbacks = {
                'closeable': this._closeable,
                'icon': this._icon,
                'type': this._type
            };
            // call callback if it exists
            if (callbacks.hasOwnProperty(attrName)) {
                callbacks[attrName].call(this, newVal);
            }
        }
        /**
         * show or hide x to close status-bar
         */

    }, {
        key: '_closeable',
        value: function _closeable(closeable) {
            this._toggle(this.shadowRoot.querySelector('.status-bar__hide'), closeable === 'true');
        }
    }, {
        key: '_close',

        /**
         * close and remove the status-bar
         */
        value: function _close() {
            this.shadowRoot.querySelector('.status-bar__container').classList.add('is-hidden');

            setTimeout(function () {
                this.parentNode.removeChild(this);
            }.bind(this), 1000);
        }
        /**
         * show or hide icon before message
         */

    }, {
        key: '_icon',
        value: function _icon(icon) {
            this._toggle(this.shadowRoot.querySelector('.status-bar__icon'), icon !== 'false');
            // set icon on load
            if (icon !== 'false' && ['notice', 'error', 'success', 'warning'].indexOf(this.getAttribute('type')) > -1) {
                this.shadowRoot.querySelector('use').setAttribute('xlink:href', '#svg-icon--' + this.getAttribute('type'));
            }
        }
    }, {
        key: '_type',

        /**
         * update icon if type changes
         */
        value: function _type() {
            this._icon(this.getAttribute('icon'));
        }
        /**
         * since classList.toggle with a second param is not supporited in IE11 and below
         */

    }, {
        key: '_toggle',
        value: function _toggle(el, condition) {
            if (condition === true) {
                el.classList.remove('status-hidden');
            } else {
                el.classList.add('status-hidden');
            }
        }
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
