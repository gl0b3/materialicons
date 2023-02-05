# Material Icons based on Iron iconset

[Material Icons](https://github.com/gl0b3/materialicons) version 1.0.0 based on [Iron iconset](https://www.webcomponents.org/element/@polymer/iron-icons) used by [Polymer](https://github.com/Polymer/polymer) 3.

## Usage

### Installation
Install the `materialicons`:
```
npm install @gl0b3/materialicons
```
Once installed, import in your applicaiton:
```
import 'materialicons/materialicons.js';
```
Add to your page:
```
<iron-icon icon="materialicons:refresh"></iron-icon>
```

## Contributing

If you want to send a PR to this element, here are the instructions for running
the tests and demo locally:

### Installation

```sh
git clone https://github.com/gl0b3/materialicons
cd materialicons
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer build
polymer serve --npm
open http://127.0.0.1:8081/components/@gl0b3/materialicons/
```
