import { LitElement, css, html } from 'lit';
import '@vaadin/icon';
import '../materialicons.js';

/**
 * An example element for showing Material Icons (with the help of Vaadin Icons).
 * 
 * @author gl0b3
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    document.addEventListener('DOMContentLoaded', e => {
      const myApp = document.getElementsByTagName('my-app')[0];
      var svgs = document.querySelectorAll('g[id]');
      var materialiconsContent = '';
      for (let i = 0; i < svgs.length; i++) {
        materialiconsContent += '<span class="container"><vaadin-icon icon="materialicons:' + svgs[i].id + '"></vaadin-icon><div>materialicons:' + svgs[i].id +'</div></span>';
      }
      myApp.innerHTML = materialiconsContent;
    }, false);
    return html`
    `
  }

  static get styles() {
    return css``
  }
}

window.customElements.define('my-element', MyElement)
