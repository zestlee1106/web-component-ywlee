declare const MyElement_base: typeof import("lit").LitElement;
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class MyElement extends MyElement_base {
    /**
     * Copy for the read the docs hint.
     */
    docsHint: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
export {};
