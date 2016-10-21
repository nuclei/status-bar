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
        .status-bar__container {
            position: relative;
            z-index: 800;
            margin: 0;
            width: 100%;
            max-height: 500px;
            color: inherit;
            fill: currentColor;
            background-image: linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95));
            background-color: currentColor;
            transition: opacity .35s ease, max-height .5s ease;
        }
        .status-bar__container.is-hidden {
            transition: opacity .35s ease, max-height .5s ease;
            opacity: 0;
            max-height: 0;
        }
        .status-bar__container[type="notice"]{
            color: var(--status-bar-notice-color, rgb(28,124,214));
        }
        .status-bar__container[type="notice"] .status-bar__content{
            box-shadow: inset 0 -1px 0 0 var(--status-bar-notice-color, rgb(28,124,214)),
            0 1px 2px 0 rgba(0,0,0,.15);
        }
        .status-bar__container[type="success"]{
            color: var(--status-bar-success-color, rgb(55,178,77));
        }
        .status-bar__container[type="success"] .status-bar__content{
            box-shadow: inset 0 -1px 0 0 var(--status-bar-success-color, rgb(55,178,77)),
            0 1px 2px 0 rgba(0,0,0,.15);
        }
        .status-bar__container[type="warning"]{
            color: var(--status-bar-warning-color, rgb(250,176,5));
        }
        .status-bar__container[type="warning"] .status-bar__content{
            box-shadow: inset 0 -1px 0 0 var(--status-bar-warning-color, rgb(250,176,5)),
            0 1px 2px 0 rgba(0,0,0,.15);
        }
        .status-bar__container[type="error"]{
            color: var(--status-bar-error-color, rgb(240,62,62));
        }
        .status-bar__container[type="error"] .status-bar__content{
            box-shadow: inset 0 -1px 0 0 var(--status-bar-error-color, rgb(240,62,62)),
            0 1px 2px 0 rgba(0,0,0,.15);
        }
        .status-bar__content{
            position: relative;
            display: flex;
        }
        .status-bar__container.is-detached .status-bar__content{
            margin: 10px 0;
            border-radius: var(--status-bar-detached-border-radius, 5px);
            box-shadow: inset 0 0 0 1px currentColor,
                        var(--status-bar-detached-shadow, 0 0 2px 0 rgba(0,0,0,.25));
        }
        .status-bar__hide{
            outline: none;
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 50px;
            box-sizing: border-box;
        }
        .status-bar__hide svg{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 15px;
            height: 15px;
            transform: translate(-50%, -50%);
        }
        .status-bar__hide:before{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: currentColor;
            opacity: 0;
            transition: opacity .35s ease;
        }
        .status-bar__hide:hover:before, .status-bar__hide:focus:before{
            transition: opacity .35s ease;
            opacity: .2;
        }
        .status-bar__icon{
            position: relative;
            flex: 0 0 20px;
            fill: inherit;
            margin-left: 10px;
        }
        .status-bar__icon svg{
            fill: inherit;
            width: 20px;
            height: 20px;
            position: absolute;
            top: calc(50% - 10px);
            left: 0;
        }
        .status-bar__text{
            margin: 0;
            padding: 20px 60px 20px 15px;
        }
        .status-hidden{
            display: none;
        }
        </style>
        <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
            <symbol id="svg-icon--success" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z"fill-rule="evenodd"/></symbol>
            <symbol id="svg-icon--error" viewbox="0 0 20 20"><path d="M11.414 10l2.829-2.828-1.415-1.415L10 8.586 7.172 5.757 5.757 7.172 8.586 10l-2.829 2.828 1.415 1.415L10 11.414l2.828 2.829 1.415-1.415L11.414 10zM2.93 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm1.414-1.414A8 8 0 1 0 15.657 4.343 8 8 0 0 0 4.343 15.657z" fill-rule="evenodd"/></symbol>
            <symbol id="svg-icon--warning" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 5h2v6H9V5zm0 8h2v2H9v-2z" fill-rule="evenodd"/></symbol>
            <symbol id="svg-icon--notice" viewbox="0 0 20 20"><path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zm12.728-1.414A8 8 0 1 0 4.343 4.343a8 8 0 0 0 11.314 11.314zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" fill-rule="evenodd"/></symbol>
        </svg>
        <div class="status-bar__container">
            <div class="status-bar__content">
                <div class="status-bar__icon">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-icon--notice"></use>
                    </svg>
                </div>
                <p class="status-bar__text"><content></content></p>
                <div class="status-bar__hide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"><polygon points="432.449,131.185 380.748,79.483 256,204.344 131.252,79.483 79.551,131.185 204.379,256.012 79.551,380.952 131.117,432.517 256,307.634 380.883,432.517 432.449,380.952 307.621,256.012"/></svg>
                </div>
            </div>
        </div>
        `;
        // shim shadowDOM styling
        if(WebComponents !== undefined && WebComponents.flags.shadow === true){
            WebComponents.ShadowCSS.shimStyling( this.shadowRoot, 'status-bar' )
        }
        // get elements
        this.$container = this.shadowRoot.querySelector('.status-bar__container');
        this.$close = this.$container.querySelector('.status-bar__hide');
        this.$icon = this.$container.querySelector('.status-bar__icon');
        // set available types
        this.types = ['notice','error','success','warning'];
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
    attributeChangedCallback(attrName, oldVal, newVal) {
        // define callbacks
        var callbacks = {
            'closeable': this._closeable,
            'icon': this._icon,
            'type': this._type,
            'timeout': this._timeout,
            'detached': this._detached
        };
        // call callback if it exists
        if(callbacks.hasOwnProperty(attrName)) {
            callbacks[attrName].call(this, newVal, oldVal);
        }
    }
    /**
     * show or hide x to close status-bar
     */
    _closeable(){
        var isCloseable = (this.hasAttribute('closeable') && this.getAttribute('closeable') !== 'false');

        this._toggle(
            this.$close,
            'status-hidden',
            isCloseable !== true
        );

        if(isCloseable === true){
            // add tab index
            this.$close.setAttribute('tabindex',0);
            // add close trigger
            this.$close.addEventListener('click', function(){
                this._close();
            }.bind(this));
            // hide status bar on focus x and Enter
            this.$close.addEventListener('keydown', function(e){
                if (e.which == 13) {
                    this._close();
                }
            }.bind(this));
        }
    };
    /**
     * close and remove the status-bar
     */
    _close(){
        // hide item
        this.$container.classList.add('is-hidden');
        // wait until animation is done and remove item
        setTimeout(function(){
            this.parentNode.removeChild(this);
        }.bind(this),1000);
    }
    /**
     * show or hide icon before message
     */
    _icon(){
        var hasIcon = (this.hasAttribute('icon') && this.getAttribute('icon') !== 'false');
        // toggle icon
        this._toggle(
            this.$icon,
            'status-hidden',
            hasIcon !== true
        );
        // set icon svg
        if(hasIcon !== false && this.types.indexOf(this.type) > -1){
            this.$icon.querySelector('use').setAttribute('xlink:href','#svg-icon--'+this.type);
        }
    };
    /**
     * update icon if type changes
     */
    _type(type){
        this.type = 'notice';
        // set type
        if(this.types.indexOf(type) > -1){
            this.type = type;
        }
        this.$container.setAttribute('type',this.type);
        // update icon
        this._icon();
    }
    /**
     * remove status bar after period defined in timeout
     */
    _timeout(timeout){
        // set timout to number or null
        timeout = Number.isInteger(parseInt(timeout)) ? parseInt(timeout) : null;
        if(timeout !== null){
            setTimeout(function(){
                this._close();
            }.bind(this), timeout);
        }
    }
    /**
     * toggle between detached and attached mode
     */
    _detached(){
        var isDetached = (this.hasAttribute('detached') && this.getAttribute('detached') !== 'false');
        // toggle is-detached class
        this._toggle(
            this.$container,
            'is-detached',
            isDetached
        );
    }
    /**
     * since classList.toggle with a second param is not supported in IE11 and below
     */
    _toggle(el, cls, condition){
        if(condition === true){
            el.classList.add(cls);
        }else{
            el.classList.remove(cls);
        }
    }
}

document.registerElement('status-bar', StatusBar);
