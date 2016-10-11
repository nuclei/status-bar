# status-bar
An easy drop-in status-bar custom element

## Demo
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
