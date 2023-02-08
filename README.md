# Material Icons based on Vaadin Iconset

[Material Icons](https://github.com/gl0b3/materialicons) version 1.0.0 based on [Vaadin iconset](https://www.webcomponents.org/element/vaadin/vaadin-icons) used by [Lit](https://github.com/lit/lit).

## Usage

### Installation
Install the `materialicons`:
```
npm install @gl0b3/materialicons@2.0.0
```
Once installed, import in your applicaiton:
```
import 'materialicons/materialicons.js';
```
Add to your page:
```
<vaadin-icon icon="materialicons:refresh"></vaadin-icon>
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
