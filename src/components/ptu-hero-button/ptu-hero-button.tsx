import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-hero-button',
  styleUrl: 'ptu-hero-button.css',
  shadow: true,
})
export class PtuHeroButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
