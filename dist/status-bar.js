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
      this.createShadowRoot().innerHTML = '\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <div id="status-bar">TEST<div>\n    ';

      // Update the ticker prices.
      // this.updateQuotes(); // We'll define this later.
    }

    // You can also define the other lifecycle methods.
    // attachedCallback() { ... }
    // detachedCallback() { ... }
    // attributeChangedCallback() { ... }

  }]);

  return StatusBar;
}(HTMLElement);

document.registerElement('status-bar', StatusBar);
//# sourceMappingURL=status-bar.js.map
