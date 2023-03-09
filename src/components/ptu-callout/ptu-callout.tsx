import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-callout',
  styleUrl: 'ptu-callout.css',
  shadow: true,
})
export class PtuCallout {

  render() {
    return (
      <Host>
        <ptu-section>
          <article>
            <slot></slot>
          </article>
        </ptu-section>
      </Host>
    );
  }

}
