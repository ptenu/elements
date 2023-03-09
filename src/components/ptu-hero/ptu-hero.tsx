import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-hero',
  styleUrl: 'ptu-hero.css',
  shadow: true,
})
export class PtuHero {

  render() {
    return (
      <Host>
        <ptu-section>
            <slot></slot>
        </ptu-section>
      </Host>
    );
  }

}
