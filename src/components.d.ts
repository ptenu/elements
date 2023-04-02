/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PtuAvatar {
        "name": string;
        "src": string | false;
    }
    interface PtuCallout {
        "dialingCode": string;
        "localNumber": string;
    }
    interface PtuCheckbox {
        "isChecked": boolean;
        "name": string;
        "radio": boolean;
        "value": string;
    }
    interface PtuChip {
        "colour": "grey" | "blue" | "green" | "red" | "yellow" | "outline" | string;
    }
    interface PtuComplete {
        "colour": "green" | "red" | "grey" | "yellow";
        "headline": string;
        "status": string;
    }
    interface PtuDatatable {
        "caption": string;
    }
    interface PtuDetails {
        "open": boolean;
        "summary": string;
    }
    interface PtuFacepile {
        "max": number;
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
    interface PtuMembershipCard {
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
    interface PtuPageHeader {
        "category": string;
        "categoryColour": "red" | "blue" | "accent" | "yellow" | "green";
        "categoryHref": string;
        "headline": string;
        "topic": string;
        "topicHref": string;
    }
    interface PtuRow {
        "status": string;
        "statusColour": "grey" | "outline" | "blue" | "green" | "yellow" | "red";
    }
    interface PtuSection {
        "sidebar": "none" | "left" | "right";
    }
    interface PtuStatistic {
        "colour": "accent" | "green" | "red" | "yellow" | "blue" | "grey";
        "href": string;
        "linkText": string;
        "title": string;
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
        "inputmode": "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        "label": string | null;
        "name": string;
        "showLabel": boolean;
        "type": string;
        "width": number;
    }
    interface PtuTextarea {
        "description": string;
        "label": string;
        "maxchars": number;
        "name": string;
    }
    interface PtuUpload {
        "multiple": boolean;
        "name": string;
    }
    interface PtuVisibilityToggle {
        "elementId": string;
    }
}
declare global {
    interface HTMLPtuAvatarElement extends Components.PtuAvatar, HTMLStencilElement {
    }
    var HTMLPtuAvatarElement: {
        prototype: HTMLPtuAvatarElement;
        new (): HTMLPtuAvatarElement;
    };
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
    interface HTMLPtuCompleteElement extends Components.PtuComplete, HTMLStencilElement {
    }
    var HTMLPtuCompleteElement: {
        prototype: HTMLPtuCompleteElement;
        new (): HTMLPtuCompleteElement;
    };
    interface HTMLPtuDatatableElement extends Components.PtuDatatable, HTMLStencilElement {
    }
    var HTMLPtuDatatableElement: {
        prototype: HTMLPtuDatatableElement;
        new (): HTMLPtuDatatableElement;
    };
    interface HTMLPtuDetailsElement extends Components.PtuDetails, HTMLStencilElement {
    }
    var HTMLPtuDetailsElement: {
        prototype: HTMLPtuDetailsElement;
        new (): HTMLPtuDetailsElement;
    };
    interface HTMLPtuFacepileElement extends Components.PtuFacepile, HTMLStencilElement {
    }
    var HTMLPtuFacepileElement: {
        prototype: HTMLPtuFacepileElement;
        new (): HTMLPtuFacepileElement;
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
    interface HTMLPtuMembershipCardElement extends Components.PtuMembershipCard, HTMLStencilElement {
    }
    var HTMLPtuMembershipCardElement: {
        prototype: HTMLPtuMembershipCardElement;
        new (): HTMLPtuMembershipCardElement;
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
    interface HTMLPtuPageHeaderElement extends Components.PtuPageHeader, HTMLStencilElement {
    }
    var HTMLPtuPageHeaderElement: {
        prototype: HTMLPtuPageHeaderElement;
        new (): HTMLPtuPageHeaderElement;
    };
    interface HTMLPtuRowElement extends Components.PtuRow, HTMLStencilElement {
    }
    var HTMLPtuRowElement: {
        prototype: HTMLPtuRowElement;
        new (): HTMLPtuRowElement;
    };
    interface HTMLPtuSectionElement extends Components.PtuSection, HTMLStencilElement {
    }
    var HTMLPtuSectionElement: {
        prototype: HTMLPtuSectionElement;
        new (): HTMLPtuSectionElement;
    };
    interface HTMLPtuStatisticElement extends Components.PtuStatistic, HTMLStencilElement {
    }
    var HTMLPtuStatisticElement: {
        prototype: HTMLPtuStatisticElement;
        new (): HTMLPtuStatisticElement;
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
    interface HTMLPtuTextareaElement extends Components.PtuTextarea, HTMLStencilElement {
    }
    var HTMLPtuTextareaElement: {
        prototype: HTMLPtuTextareaElement;
        new (): HTMLPtuTextareaElement;
    };
    interface HTMLPtuUploadElement extends Components.PtuUpload, HTMLStencilElement {
    }
    var HTMLPtuUploadElement: {
        prototype: HTMLPtuUploadElement;
        new (): HTMLPtuUploadElement;
    };
    interface HTMLPtuVisibilityToggleElement extends Components.PtuVisibilityToggle, HTMLStencilElement {
    }
    var HTMLPtuVisibilityToggleElement: {
        prototype: HTMLPtuVisibilityToggleElement;
        new (): HTMLPtuVisibilityToggleElement;
    };
    interface HTMLElementTagNameMap {
        "ptu-avatar": HTMLPtuAvatarElement;
        "ptu-callout": HTMLPtuCalloutElement;
        "ptu-checkbox": HTMLPtuCheckboxElement;
        "ptu-chip": HTMLPtuChipElement;
        "ptu-complete": HTMLPtuCompleteElement;
        "ptu-datatable": HTMLPtuDatatableElement;
        "ptu-details": HTMLPtuDetailsElement;
        "ptu-facepile": HTMLPtuFacepileElement;
        "ptu-field": HTMLPtuFieldElement;
        "ptu-fieldset": HTMLPtuFieldsetElement;
        "ptu-footer": HTMLPtuFooterElement;
        "ptu-grid": HTMLPtuGridElement;
        "ptu-hero": HTMLPtuHeroElement;
        "ptu-logo": HTMLPtuLogoElement;
        "ptu-membership-card": HTMLPtuMembershipCardElement;
        "ptu-nav-menu": HTMLPtuNavMenuElement;
        "ptu-navbar": HTMLPtuNavbarElement;
        "ptu-option": HTMLPtuOptionElement;
        "ptu-page-header": HTMLPtuPageHeaderElement;
        "ptu-row": HTMLPtuRowElement;
        "ptu-section": HTMLPtuSectionElement;
        "ptu-statistic": HTMLPtuStatisticElement;
        "ptu-tab": HTMLPtuTabElement;
        "ptu-tabs": HTMLPtuTabsElement;
        "ptu-text-input": HTMLPtuTextInputElement;
        "ptu-textarea": HTMLPtuTextareaElement;
        "ptu-upload": HTMLPtuUploadElement;
        "ptu-visibility-toggle": HTMLPtuVisibilityToggleElement;
    }
}
declare namespace LocalJSX {
    interface PtuAvatar {
        "name"?: string;
        "src"?: string | false;
    }
    interface PtuCallout {
        "dialingCode"?: string;
        "localNumber"?: string;
    }
    interface PtuCheckbox {
        "isChecked"?: boolean;
        "name"?: string;
        "radio"?: boolean;
        "value"?: string;
    }
    interface PtuChip {
        "colour"?: "grey" | "blue" | "green" | "red" | "yellow" | "outline" | string;
    }
    interface PtuComplete {
        "colour"?: "green" | "red" | "grey" | "yellow";
        "headline"?: string;
        "status"?: string;
    }
    interface PtuDatatable {
        "caption": string;
    }
    interface PtuDetails {
        "open"?: boolean;
        "summary"?: string;
    }
    interface PtuFacepile {
        "max"?: number;
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
    interface PtuMembershipCard {
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
    interface PtuPageHeader {
        "category"?: string;
        "categoryColour"?: "red" | "blue" | "accent" | "yellow" | "green";
        "categoryHref"?: string;
        "headline"?: string;
        "topic"?: string;
        "topicHref"?: string;
    }
    interface PtuRow {
        "status"?: string;
        "statusColour"?: "grey" | "outline" | "blue" | "green" | "yellow" | "red";
    }
    interface PtuSection {
        "sidebar"?: "none" | "left" | "right";
    }
    interface PtuStatistic {
        "colour"?: "accent" | "green" | "red" | "yellow" | "blue" | "grey";
        "href"?: string;
        "linkText"?: string;
        "title"?: string;
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
        "inputmode"?: "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
        "label"?: string | null;
        "name"?: string;
        "showLabel"?: boolean;
        "type"?: string;
        "width"?: number;
    }
    interface PtuTextarea {
        "description"?: string;
        "label"?: string;
        "maxchars"?: number;
        "name"?: string;
    }
    interface PtuUpload {
        "multiple"?: boolean;
        "name"?: string;
    }
    interface PtuVisibilityToggle {
        "elementId"?: string;
    }
    interface IntrinsicElements {
        "ptu-avatar": PtuAvatar;
        "ptu-callout": PtuCallout;
        "ptu-checkbox": PtuCheckbox;
        "ptu-chip": PtuChip;
        "ptu-complete": PtuComplete;
        "ptu-datatable": PtuDatatable;
        "ptu-details": PtuDetails;
        "ptu-facepile": PtuFacepile;
        "ptu-field": PtuField;
        "ptu-fieldset": PtuFieldset;
        "ptu-footer": PtuFooter;
        "ptu-grid": PtuGrid;
        "ptu-hero": PtuHero;
        "ptu-logo": PtuLogo;
        "ptu-membership-card": PtuMembershipCard;
        "ptu-nav-menu": PtuNavMenu;
        "ptu-navbar": PtuNavbar;
        "ptu-option": PtuOption;
        "ptu-page-header": PtuPageHeader;
        "ptu-row": PtuRow;
        "ptu-section": PtuSection;
        "ptu-statistic": PtuStatistic;
        "ptu-tab": PtuTab;
        "ptu-tabs": PtuTabs;
        "ptu-text-input": PtuTextInput;
        "ptu-textarea": PtuTextarea;
        "ptu-upload": PtuUpload;
        "ptu-visibility-toggle": PtuVisibilityToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ptu-avatar": LocalJSX.PtuAvatar & JSXBase.HTMLAttributes<HTMLPtuAvatarElement>;
            "ptu-callout": LocalJSX.PtuCallout & JSXBase.HTMLAttributes<HTMLPtuCalloutElement>;
            "ptu-checkbox": LocalJSX.PtuCheckbox & JSXBase.HTMLAttributes<HTMLPtuCheckboxElement>;
            "ptu-chip": LocalJSX.PtuChip & JSXBase.HTMLAttributes<HTMLPtuChipElement>;
            "ptu-complete": LocalJSX.PtuComplete & JSXBase.HTMLAttributes<HTMLPtuCompleteElement>;
            "ptu-datatable": LocalJSX.PtuDatatable & JSXBase.HTMLAttributes<HTMLPtuDatatableElement>;
            "ptu-details": LocalJSX.PtuDetails & JSXBase.HTMLAttributes<HTMLPtuDetailsElement>;
            "ptu-facepile": LocalJSX.PtuFacepile & JSXBase.HTMLAttributes<HTMLPtuFacepileElement>;
            "ptu-field": LocalJSX.PtuField & JSXBase.HTMLAttributes<HTMLPtuFieldElement>;
            "ptu-fieldset": LocalJSX.PtuFieldset & JSXBase.HTMLAttributes<HTMLPtuFieldsetElement>;
            "ptu-footer": LocalJSX.PtuFooter & JSXBase.HTMLAttributes<HTMLPtuFooterElement>;
            "ptu-grid": LocalJSX.PtuGrid & JSXBase.HTMLAttributes<HTMLPtuGridElement>;
            "ptu-hero": LocalJSX.PtuHero & JSXBase.HTMLAttributes<HTMLPtuHeroElement>;
            "ptu-logo": LocalJSX.PtuLogo & JSXBase.HTMLAttributes<HTMLPtuLogoElement>;
            "ptu-membership-card": LocalJSX.PtuMembershipCard & JSXBase.HTMLAttributes<HTMLPtuMembershipCardElement>;
            "ptu-nav-menu": LocalJSX.PtuNavMenu & JSXBase.HTMLAttributes<HTMLPtuNavMenuElement>;
            "ptu-navbar": LocalJSX.PtuNavbar & JSXBase.HTMLAttributes<HTMLPtuNavbarElement>;
            "ptu-option": LocalJSX.PtuOption & JSXBase.HTMLAttributes<HTMLPtuOptionElement>;
            "ptu-page-header": LocalJSX.PtuPageHeader & JSXBase.HTMLAttributes<HTMLPtuPageHeaderElement>;
            "ptu-row": LocalJSX.PtuRow & JSXBase.HTMLAttributes<HTMLPtuRowElement>;
            "ptu-section": LocalJSX.PtuSection & JSXBase.HTMLAttributes<HTMLPtuSectionElement>;
            "ptu-statistic": LocalJSX.PtuStatistic & JSXBase.HTMLAttributes<HTMLPtuStatisticElement>;
            "ptu-tab": LocalJSX.PtuTab & JSXBase.HTMLAttributes<HTMLPtuTabElement>;
            "ptu-tabs": LocalJSX.PtuTabs & JSXBase.HTMLAttributes<HTMLPtuTabsElement>;
            "ptu-text-input": LocalJSX.PtuTextInput & JSXBase.HTMLAttributes<HTMLPtuTextInputElement>;
            "ptu-textarea": LocalJSX.PtuTextarea & JSXBase.HTMLAttributes<HTMLPtuTextareaElement>;
            "ptu-upload": LocalJSX.PtuUpload & JSXBase.HTMLAttributes<HTMLPtuUploadElement>;
            "ptu-visibility-toggle": LocalJSX.PtuVisibilityToggle & JSXBase.HTMLAttributes<HTMLPtuVisibilityToggleElement>;
        }
    }
}
