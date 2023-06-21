import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-box',
  styleUrl: 'ptu-box.css',
  shadow: false,
})
export class PtuBox {

  @Prop() heading: string;

  render() {
    return (
      <Host>
        <header>
          <h1>{this.heading}</h1>
          <aside>
            <slot name="actions"></slot>
          </aside>
        </header>
        <article>
          <slot></slot>
        </article>
      </Host>
    );
  }

}
