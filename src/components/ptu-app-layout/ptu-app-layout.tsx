import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-app-layout',
  styleUrl: 'ptu-app-layout.css',
  shadow: true,
})
export class PtuAppLayout {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
