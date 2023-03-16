/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PtuCallout {
    }
    interface PtuCheckbox {
        "isChecked": boolean;
        "name": string;
        "radio": boolean;
        "value": string;
    }
    interface PtuChip {
        "colour": "grey" | "blue" | "green" | "red" | "yellow" | "outline";
    }
    interface PtuField {
        "controlId": string;
        "errorText": string | false;
        "label": string;
        "name": string;
    }
    interface PtuFieldset {
        "description": string | null;
        "errorText": string | null;
        "inline": boolean;
        "label": string;
        "optional": boolean;
        "required": boolean;
    }
    interface PtuFooter {
    }
    interface PtuGrid {
    }
    interface PtuHero {
    }
    interface PtuLogo {
        "variant": "colour" | "white";
    }
    interface PtuNavMenu {
        "visible": boolean;
    }
    interface PtuNavbar {
    }
    interface PtuOption {
        "checked": boolean;
        "name": string;
        "radio": boolean;
        "value": string;
    }
    interface PtuSection {
        "sidebar": "none" | "left" | "right";
    }
    interface PtuTab {
        "href": string;
        "selected": boolean;
    }
    interface PtuTabs {
    }
    interface PtuTextInput {
        "autocomplete": string;
        "initialValue": string | null;
        "label": string;
        "name": string;
        "type": string;
        "width": number;
    }
    interface PtuVisibilityToggle {
        "elementId": string;
    }
}
declare global {
    interface HTMLPtuCalloutElement extends Components.PtuCallout, HTMLStencilElement {
    }
    var HTMLPtuCalloutElement: {
        prototype: HTMLPtuCalloutElement;
        new (): HTMLPtuCalloutElement;
    };
    interface HTMLPtuCheckboxElement extends Components.PtuCheckbox, HTMLStencilElement {
    }
    var HTMLPtuCheckboxElement: {
        prototype: HTMLPtuCheckboxElement;
        new (): HTMLPtuCheckboxElement;
    };
    interface HTMLPtuChipElement extends Components.PtuChip, HTMLStencilElement {
    }
    var HTMLPtuChipElement: {
        prototype: HTMLPtuChipElement;
        new (): HTMLPtuChipElement;
    };
    interface HTMLPtuFieldElement extends Components.PtuField, HTMLStencilElement {
    }
    var HTMLPtuFieldElement: {
        prototype: HTMLPtuFieldElement;
        new (): HTMLPtuFieldElement;
    };
    interface HTMLPtuFieldsetElement extends Components.PtuFieldset, HTMLStencilElement {
    }
    var HTMLPtuFieldsetElement: {
        prototype: HTMLPtuFieldsetElement;
        new (): HTMLPtuFieldsetElement;
    };
    interface HTMLPtuFooterElement extends Components.PtuFooter, HTMLStencilElement {
    }
    var HTMLPtuFooterElement: {
        prototype: HTMLPtuFooterElement;
        new (): HTMLPtuFooterElement;
    };
    interface HTMLPtuGridElement extends Components.PtuGrid, HTMLStencilElement {
    }
    var HTMLPtuGridElement: {
        prototype: HTMLPtuGridElement;
        new (): HTMLPtuGridElement;
    };
    interface HTMLPtuHeroElement extends Components.PtuHero, HTMLStencilElement {
    }
    var HTMLPtuHeroElement: {
        prototype: HTMLPtuHeroElement;
        new (): HTMLPtuHeroElement;
    };
    interface HTMLPtuLogoElement extends Components.PtuLogo, HTMLStencilElement {
    }
    var HTMLPtuLogoElement: {
        prototype: HTMLPtuLogoElement;
        new (): HTMLPtuLogoElement;
    };
    interface HTMLPtuNavMenuElement extends Components.PtuNavMenu, HTMLStencilElement {
    }
    var HTMLPtuNavMenuElement: {
        prototype: HTMLPtuNavMenuElement;
        new (): HTMLPtuNavMenuElement;
    };
    interface HTMLPtuNavbarElement extends Components.PtuNavbar, HTMLStencilElement {
    }
    var HTMLPtuNavbarElement: {
        prototype: HTMLPtuNavbarElement;
        new (): HTMLPtuNavbarElement;
    };
    interface HTMLPtuOptionElement extends Components.PtuOption, HTMLStencilElement {
    }
    var HTMLPtuOptionElement: {
        prototype: HTMLPtuOptionElement;
        new (): HTMLPtuOptionElement;
    };
    interface HTMLPtuSectionElement extends Components.PtuSection, HTMLStencilElement {
    }
    var HTMLPtuSectionElement: {
        prototype: HTMLPtuSectionElement;
        new (): HTMLPtuSectionElement;
    };
    interface HTMLPtuTabElement extends Components.PtuTab, HTMLStencilElement {
    }
    var HTMLPtuTabElement: {
        prototype: HTMLPtuTabElement;
        new (): HTMLPtuTabElement;
    };
    interface HTMLPtuTabsElement extends Components.PtuTabs, HTMLStencilElement {
    }
    var HTMLPtuTabsElement: {
        prototype: HTMLPtuTabsElement;
        new (): HTMLPtuTabsElement;
    };
    interface HTMLPtuTextInputElement extends Components.PtuTextInput, HTMLStencilElement {
    }
    var HTMLPtuTextInputElement: {
        prototype: HTMLPtuTextInputElement;
        new (): HTMLPtuTextInputElement;
    };
    interface HTMLPtuVisibilityToggleElement extends Components.PtuVisibilityToggle, HTMLStencilElement {
    }
    var HTMLPtuVisibilityToggleElement: {
        prototype: HTMLPtuVisibilityToggleElement;
        new (): HTMLPtuVisibilityToggleElement;
    };
    interface HTMLElementTagNameMap {
        "ptu-callout": HTMLPtuCalloutElement;
        "ptu-checkbox": HTMLPtuCheckboxElement;
        "ptu-chip": HTMLPtuChipElement;
        "ptu-field": HTMLPtuFieldElement;
        "ptu-fieldset": HTMLPtuFieldsetElement;
        "ptu-footer": HTMLPtuFooterElement;
        "ptu-grid": HTMLPtuGridElement;
        "ptu-hero": HTMLPtuHeroElement;
        "ptu-logo": HTMLPtuLogoElement;
        "ptu-nav-menu": HTMLPtuNavMenuElement;
        "ptu-navbar": HTMLPtuNavbarElement;
        "ptu-option": HTMLPtuOptionElement;
        "ptu-section": HTMLPtuSectionElement;
        "ptu-tab": HTMLPtuTabElement;
        "ptu-tabs": HTMLPtuTabsElement;
        "ptu-text-input": HTMLPtuTextInputElement;
        "ptu-visibility-toggle": HTMLPtuVisibilityToggleElement;
    }
}
declare namespace LocalJSX {
    interface PtuCallout {
    }
    interface PtuCheckbox {
        "isChecked"?: boolean;
        "name"?: string;
        "radio"?: boolean;
        "value"?: string;
    }
    interface PtuChip {
        "colour"?: "grey" | "blue" | "green" | "red" | "yellow" | "outline";
    }
    interface PtuField {
        "controlId"?: string;
        "errorText"?: string | false;
        "label"?: string;
        "name"?: string;
    }
    interface PtuFieldset {
        "description"?: string | null;
        "errorText"?: string | null;
        "inline"?: boolean;
        "label"?: string;
        "optional"?: boolean;
        "required"?: boolean;
    }
    interface PtuFooter {
    }
    interface PtuGrid {
    }
    interface PtuHero {
    }
    interface PtuLogo {
        "variant"?: "colour" | "white";
    }
    interface PtuNavMenu {
        "visible"?: boolean;
    }
    interface PtuNavbar {
    }
    interface PtuOption {
        "checked"?: boolean;
        "name"?: string;
        "radio"?: boolean;
        "value"?: string;
    }
    interface PtuSection {
        "sidebar"?: "none" | "left" | "right";
    }
    interface PtuTab {
        "href"?: string;
        "selected"?: boolean;
    }
    interface PtuTabs {
    }
    interface PtuTextInput {
        "autocomplete"?: string;
        "initialValue"?: string | null;
        "label"?: string;
        "name"?: string;
        "type"?: string;
        "width"?: number;
    }
    interface PtuVisibilityToggle {
        "elementId"?: string;
    }
    interface IntrinsicElements {
        "ptu-callout": PtuCallout;
        "ptu-checkbox": PtuCheckbox;
        "ptu-chip": PtuChip;
        "ptu-field": PtuField;
        "ptu-fieldset": PtuFieldset;
        "ptu-footer": PtuFooter;
        "ptu-grid": PtuGrid;
        "ptu-hero": PtuHero;
        "ptu-logo": PtuLogo;
        "ptu-nav-menu": PtuNavMenu;
        "ptu-navbar": PtuNavbar;
        "ptu-option": PtuOption;
        "ptu-section": PtuSection;
        "ptu-tab": PtuTab;
        "ptu-tabs": PtuTabs;
        "ptu-text-input": PtuTextInput;
        "ptu-visibility-toggle": PtuVisibilityToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ptu-callout": LocalJSX.PtuCallout & JSXBase.HTMLAttributes<HTMLPtuCalloutElement>;
            "ptu-checkbox": LocalJSX.PtuCheckbox & JSXBase.HTMLAttributes<HTMLPtuCheckboxElement>;
            "ptu-chip": LocalJSX.PtuChip & JSXBase.HTMLAttributes<HTMLPtuChipElement>;
            "ptu-field": LocalJSX.PtuField & JSXBase.HTMLAttributes<HTMLPtuFieldElement>;
            "ptu-fieldset": LocalJSX.PtuFieldset & JSXBase.HTMLAttributes<HTMLPtuFieldsetElement>;
            "ptu-footer": LocalJSX.PtuFooter & JSXBase.HTMLAttributes<HTMLPtuFooterElement>;
            "ptu-grid": LocalJSX.PtuGrid & JSXBase.HTMLAttributes<HTMLPtuGridElement>;
            "ptu-hero": LocalJSX.PtuHero & JSXBase.HTMLAttributes<HTMLPtuHeroElement>;
            "ptu-logo": LocalJSX.PtuLogo & JSXBase.HTMLAttributes<HTMLPtuLogoElement>;
            "ptu-nav-menu": LocalJSX.PtuNavMenu & JSXBase.HTMLAttributes<HTMLPtuNavMenuElement>;
            "ptu-navbar": LocalJSX.PtuNavbar & JSXBase.HTMLAttributes<HTMLPtuNavbarElement>;
            "ptu-option": LocalJSX.PtuOption & JSXBase.HTMLAttributes<HTMLPtuOptionElement>;
            "ptu-section": LocalJSX.PtuSection & JSXBase.HTMLAttributes<HTMLPtuSectionElement>;
            "ptu-tab": LocalJSX.PtuTab & JSXBase.HTMLAttributes<HTMLPtuTabElement>;
            "ptu-tabs": LocalJSX.PtuTabs & JSXBase.HTMLAttributes<HTMLPtuTabsElement>;
            "ptu-text-input": LocalJSX.PtuTextInput & JSXBase.HTMLAttributes<HTMLPtuTextInputElement>;
            "ptu-visibility-toggle": LocalJSX.PtuVisibilityToggle & JSXBase.HTMLAttributes<HTMLPtuVisibilityToggleElement>;
        }
    }
}
