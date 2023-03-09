import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-grid',
  styleUrl: 'ptu-grid.css',
  shadow: true,
})
export class PtuGrid {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
