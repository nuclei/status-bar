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
            this.createShadowRoot().innerHTML = '\n        <style>\n        .status-bar__container {\n            position: relative;\n            z-index: 800;\n            margin: 0;\n            width: 100%;\n            max-height: 500px;\n            color: inherit;\n            fill: currentColor;\n            background-image: linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95));\n            background-color: currentColor;\n            transition: opacity .35s ease, max-height .5s ease;\n        }\n        .status-bar__container.is-hidden {\n            transition: opacity .35s ease, max-height .5s ease;\n            opacity: 0;\n            max-height: 0;\n        }\n        .status-bar__container[type="notice"]{\n            color: var(--status-bar-notice-color, rgb(28,124,214));\n        }\n        .status-bar__container[type="notice"] .status-bar__content{\n            box-shadow: inset 0 -1px 0 0 var(--status-bar-notice-color, rgb(28,124,214)),\n            0 1px 2px 0 rgba(0,0,0,.15);\n        }\n        .status-bar__container[type="success"]{\n            color: var(--status-bar-success-color, rgb(55,178,77));\n        }\n        .status-bar__container[type="success"] .status-bar__content{\n            box-shadow: inset 0 -1px 0 0 var(--status-bar-success-color, rgb(55,178,77)),\n            0 1px 2px 0 rgba(0,0,0,.15);\n        }\n        .status-bar__container[type="warning"]{\n            color: var(--status-bar-warning-color, rgb(250,176,5));\n        }\n        .status-bar__container[type="warning"] .status-bar__content{\n            box-shadow: inset 0 -1px 0 0 var(--status-bar-warning-color, rgb(250,176,5)),\n            0 1px 2px 0 rgba(0,0,0,.15);\n        }\n        .status-bar__container[type="error"]{\n            color: var(--status-bar-error-color, rgb(240,62,62));\n        }\n        .status-bar__container[type="error"] .status-bar__content{\n            box-shadow: inset 0 -1px 0 0 var(--status-bar-error-color, rgb(240,62,62)),\n            0 1px 2px 0 rgba(0,0,0,.15);\n        }\n        .status-bar__content{\n            position: relative;\n            display: flex;\n        }\n        .status-bar__container.is-detached .status-bar__content{\n            margin: 10px 0;\n            border-radius: var(--status-bar-detached-border-radius, 5px);\n            box-shadow: inset 0 0 0 1px currentColor,\n                        var(--status-bar-detached-shadow, 0 0 2px 0 rgba(0,0,0,.25));\n        }\n        .status-bar__hide{\n            outline: none;\n            position: absolute;\n            right: 0;\n            top: 0;\n            height: 100%;\n            width: 50px;\n            box-sizing: border-box;\n        }\n        .status-bar__hide svg{\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 15px;\n            height: 15px;\n            transform: translate(-50%, -50%);\n        }\n        .status-bar__hide:before{\n            content: "";\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            background-color: currentColor;\n            opacity: 0;\n            transition: opacity .35s ease;\n        }\n        .status-bar__hide:hover:before, .status-bar__hide:focus:before{\n            transition: opacity .35s ease;\n            opacity: .2;\n        }\n        .status-bar__icon{\n            position: relative;\n            flex: 0 0 20px;\n            fill: inherit;\n            margin-left: 10px;\n        }\n        .status-bar__icon svg{\n            fill: inherit;\n            width: 20px;\n            height: 20px;\n            position: absolute;\n            top: calc(50% - 10px);\n            left: 0;\n        }\n        .status-bar__text{\n            margin: 0;\n            padding: 20px 60px 20px 15px;\n        }\n        .status-hidden{\n            display: none;\n        }\n        </style>\n        <svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n            <symbol id="svg-icon--success" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z"fill-rule="evenodd"/></symbol>\n            <symbol id="svg-icon--error" viewbox="0 0 20 20"><path d="M11.414 10l2.829-2.828-1.415-1.415L10 8.586 7.172 5.757 5.757 7.172 8.586 10l-2.829 2.828 1.415 1.415L10 11.414l2.828 2.829 1.415-1.415L11.414 10zM2.93 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm1.414-1.414A8 8 0 1 0 15.657 4.343 8 8 0 0 0 4.343 15.657z" fill-rule="evenodd"/></symbol>\n            <symbol id="svg-icon--warning" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 5h2v6H9V5zm0 8h2v2H9v-2z" fill-rule="evenodd"/></symbol>\n            <symbol id="svg-icon--notice" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" fill-rule="evenodd"/></symbol>\n        </svg>\n        <div class="status-bar__container">\n            <div class="status-bar__content">\n                <div class="status-bar__icon">\n                    <svg>\n                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon--notice"></use>\n                    </svg>\n                </div>\n                <p class="status-bar__text"><content></content></p>\n                <div class="status-bar__hide">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><polygon points="432.449,131.185 380.748,79.483 256,204.344 131.252,79.483 79.551,131.185 204.379,256.012 79.551,380.952 131.117,432.517 256,307.634 380.883,432.517 432.449,380.952 307.621,256.012"/></svg>\n                </div>\n            </div>\n        </div>\n        ';
            // shim shadowDOM styling
            if (WebComponents !== undefined && WebComponents.flags.shadow === true) {
                WebComponents.ShadowCSS.shimStyling(this.shadowRoot, 'status-bar');
            }
            // get elements
            this.$container = this.shadowRoot.querySelector('.status-bar__container');
            this.$close = this.$container.querySelector('.status-bar__hide');
            this.$icon = this.$container.querySelector('.status-bar__icon');
            // set available types
            this.types = ['notice', 'error', 'success', 'warning'];
            // initialize
            this._type(this.getAttribute('type'));
            this._timeout(this.getAttribute('timeout'));
            this._closeable();
            this._icon();
            this._detached();
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
                'type': this._type,
                'timeout': this._timeout,
                'detached': this._detached
            };
            // call callback if it exists
            if (callbacks.hasOwnProperty(attrName)) {
                callbacks[attrName].call(this, newVal, oldVal);
            }
        }
        /**
         * show or hide x to close status-bar
         */

    }, {
        key: '_closeable',
        value: function _closeable() {
            var isCloseable = this.hasAttribute('closeable') && this.getAttribute('closeable') !== 'false';

            this._toggle(this.$close, 'status-hidden', isCloseable !== true);

            if (isCloseable === true) {
                // add tab index
                this.$close.setAttribute('tabindex', 0);
                // add close trigger
                this.$close.addEventListener('click', function () {
                    this._close();
                }.bind(this));
                // hide status bar on focus x and Enter
                this.$close.addEventListener('keydown', function (e) {
                    if (e.which == 13) {
                        this._close();
                    }
                }.bind(this));
            }
        }
    }, {
        key: '_close',

        /**
         * close and remove the status-bar
         */
        value: function _close() {
            // hide item
            this.$container.classList.add('is-hidden');
            // wait until animation is done and remove item
            setTimeout(function () {
                this.parentNode.removeChild(this);
            }.bind(this), 1000);
        }
        /**
         * show or hide icon before message
         */

    }, {
        key: '_icon',
        value: function _icon() {
            var hasIcon = this.hasAttribute('icon') && this.getAttribute('icon') !== 'false';
            // toggle icon
            this._toggle(this.$icon, 'status-hidden', hasIcon !== true);
            // set icon svg
            if (hasIcon !== false && this.types.indexOf(this.type) > -1) {
                this.$icon.querySelector('use').setAttribute('xlink:href', '#svg-icon--' + this.type);
            }
        }
    }, {
        key: '_type',

        /**
         * update icon if type changes
         */
        value: function _type(type) {
            this.type = 'notice';
            // set type
            if (this.types.indexOf(type) > -1) {
                this.type = type;
            }
            this.$container.setAttribute('type', this.type);
            // update icon
            this._icon();
        }
        /**
         * remove status bar after period defined in timeout
         */

    }, {
        key: '_timeout',
        value: function _timeout(timeout) {
            // set timout to number or null
            timeout = Number.isInteger(parseInt(timeout)) ? parseInt(timeout) : null;
            if (timeout !== null) {
                setTimeout(function () {
                    this._close();
                }.bind(this), timeout);
            }
        }
        /**
         * toggle between detached and attached mode
         */

    }, {
        key: '_detached',
        value: function _detached() {
            var isDetached = this.hasAttribute('detached') && this.getAttribute('detached') !== 'false';
            // toggle is-detached class
            this._toggle(this.$container, 'is-detached', isDetached);
        }
        /**
         * since classList.toggle with a second param is not supported in IE11 and below
         */

    }, {
        key: '_toggle',
        value: function _toggle(el, cls, condition) {
            if (condition === true) {
                el.classList.add(cls);
            } else {
                el.classList.remove(cls);
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
