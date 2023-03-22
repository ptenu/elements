import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-details',
  styleUrl: 'ptu-details.css',
  shadow: true,
})
export class PtuDetails {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
