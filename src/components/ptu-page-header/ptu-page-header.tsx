import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-page-header',
  styleUrl: 'ptu-page-header.css',
  shadow: true,
})
export class PtuPageHeader {

  @Prop() headline: string;

  render() {
    return (
      <Host>
        <ptu-section>
          <header>
            <h1>{this.headline}</h1>
            <section>
              <slot></slot>
            </section>
          </header>
        </ptu-section>
      </Host>
    );
  }

}
