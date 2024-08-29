import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement('xmic-button')
export class Button extends LitElement {

    render(){
        return html`
            <button>
                <slot/>
            </button>
        `
    }

}