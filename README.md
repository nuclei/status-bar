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
To remove the closing `x` just add the `closable="false"` attribute.
```html
<status-bar type="error" closable="false">An error message.</status-bar>
```

### Icons
By default an icon will be shown, depending on the state, to remove it add the `icon="false"` attribute.
```html
<status-bar type="success" icon="false">An success message.</status-bar>
```

### Detached status
To get a status element that is not `attached` to the top, just set `attached="false"`.
```html
<status-bar type="warning" attached="false">An warning message.</status-bar>
```

### Timeout (close after x ms)
By setting the `timeout` attribute, the status bar will close itself after whatever ms you set it to.
```html
<status-bar type="notice" timeout="1000">This self-closes after 1 second.</status-bar>
```
