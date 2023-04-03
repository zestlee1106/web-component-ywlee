import { LitElement } from "lit";
declare const BaseButton_base: typeof LitElement;
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class BaseButton extends BaseButton_base {
    /**
     * Copy for the read the docs hint.
     */
    docsHint: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        "base-button2": BaseButton;
    }
}
export {};
