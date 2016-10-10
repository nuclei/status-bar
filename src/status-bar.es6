'use strict';

class StatusBar extends HTMLElement {

    static get is() {
        return 'status-bar';
    }
  // Use createdCallback instead of constructor to init an element.
  createdCallback() {
    // This element uses Shadow DOM.
    this.createShadowRoot().innerHTML = `
    <style>
    .status__container {
        position: relative;
        z-index: 800;
        margin: 0;
        width: 100%;
        max-height: 500px;
        background-image: linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95));
        background-color: currentColor;
        color: rgb(55,115,215);
        fill: currentColor;
        transition: opacity .35s ease, max-height .5s ease;
    }
    .status__container.is-hidden {
        transition: opacity .35s ease, max-height .5s ease;
        opacity: 0;
        max-height: 0;
    }
    .status__container[type="notice"]{
        color: rgb(55,115,215);
    }
    .status__container[type="success"]{
        color: rgb(30,170,70);
    }
    .status__container[type=warning]{
        color: rgb(255,210,0);
    }
    .status__container[type=failure], .status__container[type=error]{
        color: rgb(245,60,30);
    }
    .status__content{
        position: relative;
        display: flex;
        box-shadow: inset 0 -1px 0 0 currentColor,
        0 1px 2px 0 rgba(0,0,0,.15);
    }
    .status__container[attached=false] .status__content{
        border-radius: 5px;
        margin: 10px 0;
        box-shadow: inset 0 0 0 1px currentColor,
                    0 0 2px 0 rgba(0,0,0,.25);
    }
    .status__hide{
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 50px;
        box-sizing: border-box;
    }
    .status__hide svg{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 15px;
        height: 15px;
        transform: translate(-50%, -50%);
    }
    .status__hide:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        opacity: 0;
        transition: opacity .35s ease;
    }
    .status__hide:hover:before{
        transition: opacity .35s ease;
        opacity: .1;
    }
    .status__icon{
        position: relative;;
        flex: 0 0 20px;
        fill: inherit;
        margin-left: 10px;
    }
    .status__icon svg{
        fill: inherit;
        width: 20px;
        height: 20px;
        position: absolute;
        top: calc(50% - 10px);
        left: 0;
    }
    .status__text{
        margin: 0;
        padding: 20px 60px 20px 15px;
    }
    .status__container[type=warning] .status__text{
        color: rgb(0,10,20);
    }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
        <symbol id="svg-icon--success" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z"fill-rule="evenodd"/></symbol>
        <symbol id="svg-icon--error" viewbox="0 0 20 20"><path d="M11.414 10l2.829-2.828-1.415-1.415L10 8.586 7.172 5.757 5.757 7.172 8.586 10l-2.829 2.828 1.415 1.415L10 11.414l2.828 2.829 1.415-1.415L11.414 10zM2.93 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm1.414-1.414A8 8 0 1 0 15.657 4.343 8 8 0 0 0 4.343 15.657z" fill-rule="evenodd"/></symbol>
        <symbol id="svg-icon--warning" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 5h2v6H9V5zm0 8h2v2H9v-2z" fill-rule="evenodd"/></symbol>
        <symbol id="svg-icon--notice" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" fill-rule="evenodd"/></symbol>
    </svg>
    <div id="container" class="status__container" type$="{{type}}" attached$="{{attached}}">
        <div class="status__content">
            <template is="dom-if" if="{{isTrue(icon)}}">
                <div class="status__icon">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon--success"></use>
                    </svg>
                </div>
            </template>
            <p class="status__text"><content></content></p>
            <template is="dom-if" if="{{isTrue(closable)}}">
                <div class="status__hide" on-tap="close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><polygon points="432.449,131.185 380.748,79.483 256,204.344 131.252,79.483 79.551,131.185 204.379,256.012 79.551,380.952 131.117,432.517 256,307.634 380.883,432.517 432.449,380.952 307.621,256.012"/></svg>
                </div>
            </template>
        </div>
    </div>
    `;

    // Update the ticker prices.
    // this.updateQuotes(); // We'll define this later.
  }

  // You can also define the other lifecycle methods.
  // attachedCallback() { ... }
  // detachedCallback() { ... }
  // attributeChangedCallback() { ... }
}

document.registerElement('status-bar', StatusBar);
