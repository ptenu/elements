import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-tabs',
  styleUrl: 'ptu-tabs.css',
  shadow: true,
})
export class PtuTabs {

  render() {
    return (
      <Host>
        <ptu-section>
          <ul>
            <slot></slot>
          </ul>
        </ptu-section>
      </Host>
    );
  }

}
