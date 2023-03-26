import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-row',
  styleUrl: 'ptu-row.css',
  shadow: true,
})
export class PtuRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
