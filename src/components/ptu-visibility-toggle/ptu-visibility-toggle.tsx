import {Component, Host, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'ptu-visibility-toggle',
  styleUrl: 'ptu-visibility-toggle.css',
  shadow: true,
})
export class PtuVisibilityToggle {

  @Prop() elementId: string;
  @State() currentState: boolean = false;
  @State() element: HTMLElement;

  componentWillLoad() {
    this.element = document.getElementById(this.elementId);
    this.currentState = this.element.hasAttribute("visible");
  }

  toggleVisibility() {
    this.element.toggleAttribute("visible");
    this.currentState = !this.currentState;
  }

  DownArrow() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
    )
  }

  UpArrow() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>    )
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.toggleVisibility()}>
          {this.currentState && (
            <this.UpArrow></this.UpArrow>
          )}

          {this.currentState === false && (
            <this.DownArrow></this.DownArrow>
          )}
          <slot></slot>
        </button>
      </Host>
    );
  }

}
