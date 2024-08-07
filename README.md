# Material Icons based on Iron iconset

[Material Icons](https://github.com/gl0b3/materialicons) version 1.0.1 based on [Iron iconset](https://www.webcomponents.org/element/@polymer/iron-icons) used by [Polymer](https://github.com/Polymer/polymer) 3.

## Note

If you previously used version 1.0.0, please switch to 1.0.1. Version 1.0.0 has been removed from the NPMJS registry and replaced by 1.0.1. The code remained the same, only the version number changed due to the republishing.

## Usage

### Installation
Install the `materialicons`:
```
npm install @gl0b3/materialicons@1.0.1
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
