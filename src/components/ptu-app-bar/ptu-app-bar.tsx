import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-app-bar',
  styleUrl: 'ptu-app-bar.css',
  shadow: false,
})
export class PtuAppBar {

  @Prop() app: string;

  render() {
    return (
      <Host>
          <section>
            <ptu-app-icon app={this.app}></ptu-app-icon>
            <slot></slot>
          </section>
      </Host>
    );
  }

}
