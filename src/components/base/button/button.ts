import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../../../global/tailwind.element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("base-button")
export default class BaseButton extends TailwindElement() {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html` <div class="mr-3">버튼</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "base-button": BaseButton;
  }
}
