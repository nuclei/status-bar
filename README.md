# status-bar
An easy drop-in status-bar vanilla custom element. No framework dependencies, small footprint.

[![npm](https://img.shields.io/npm/v/status-bar-component.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/status-bar-component) [![npm](https://img.shields.io/npm/dt/status-bar-component.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/status-bar-component) [![npm](https://img.shields.io/npm/l/status-bar-component.svg?maxAge=2592000?style=flat-square)](https://github.com/nuclei/status-bar/blob/master/LICENSE)

## Demo
![status-bar](https://cloud.githubusercontent.com/assets/813754/19270901/95061f2e-8fc2-11e6-9dd0-45c5fe8a1cf3.png)

https://nuclei.github.io/status-bar/index.html

## Installation

```
npm install --save status-bar-component
```

You need the [webcomponents-lite polyfill](https://github.com/webcomponents/webcomponentsjs).

Load the `polyfill` and the `status-bar.js` in your html page or however you load you javascript dependencies:
```html
<script src="webcomponents-lite.js"></script>
<script src="./node_modules/status-bar-component/dist/status-bar.js"></script>
```

## Usage
Just drop the `<status-bar>` element into you html and add your text.

### Type
You can adjust the `type` attribute to toggle change it between `notice`, `success`, `warning` and `error`.
```html
<status-bar type="notice">A notice</status-bar>
```

### Closable
If you want the `status-bar` to have an `x` to close it, just add the `closable` attribute.
```html
<status-bar type="error" closable>An error message.</status-bar>
```

### Timeout (close after x ms)
By setting the `timeout` attribute, the status bar will close itself after whatever `ms` you set it to.
```html
<status-bar type="notice" timeout="1000">This self-closes after 1 second.</status-bar>
```

### Icons
By default no icon will be shown, but you can add the `icon` attribute to use the default icons for the current `type`.
```html
<status-bar type="success" icon>An success message.</status-bar>
```

### Detached
To get a `status-bar` element that is not attached to the top, add the `detached` attribute.
```html
<status-bar type="warning" detached>An warning message.</status-bar>
```

## Custom styling
You can change the style of the `status-bar` by using the following `css properties`.

```css
/* color properties for types of status messages */
--status-bar-error-color: rgb(240,62,62);
--status-bar-success-color: rgb(55,178,77);
--status-bar-notice-color: rgb(28,124,214);
--status-bar-warning-color: rgb(250,176,5);
/* properties for detached items */
/* shadow of the item */
--status-bar-detached-shadow: 0 0 2px 0 rgba(0,0,0,.25);
/* border-radius */
--status-bar-detached-border-radius: 5px;
```
