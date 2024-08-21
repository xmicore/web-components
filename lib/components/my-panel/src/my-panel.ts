import {css, html, LitElement} from 'lit';

import {customElement, property, state} from 'lit/decorators.js';

import {when} from 'lit/directives/when.js'

import '@vaadin/grid'

interface Person {
    firstName: string;
}

@customElement('my-panel')
export class MyPanel extends LitElement {

    static styles = css`
        .title {
            background: var(--my-panel-primary-bg, #000);
            color: var(--my-panel-primary-color, #fff);
            padding: 0.8rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            display: flex;
            justify-content: space-between;
            align-content: center;
        }

        .body {
            padding: 1rem;
            border: 1px solid var(--my-panel-primary-bg, #000);
        }
    `

    @property({type: String})
    title = "WIDGET"

    @property({type: Boolean})
    opened = false;

    @property({type: String})
    icon = ''

    @state()
    private items: Person[] = [];

    protected override async firstUpdated() {
        this.items = [
            {firstName: 'Michael'}
        ];
    }

    private onIconClickHandler(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('icon-click', {bubbles: true}))
    }


    render() {
        return html`
            <div>
                <div class="title" @click=${() => this.opened = !this.opened}>
                    ${this.title} - ${this.opened}
                    <div @click=${this.onIconClickHandler}>${this.icon}</div>
                </div>
                ${when(this.opened,
            () => html`
                        <div class="body">
                            <slot></slot>
                        </div>
                    `
                )}
                <vaadin-grid .items="${this.items}">
                    <vaadin-grid-column path="firstName"></vaadin-grid-column>
                </vaadin-grid>
            </div>
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'my-panel': MyPanel
    }
}