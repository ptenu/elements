import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-facepile',
  styleUrl: 'ptu-facepile.css',
  shadow: false,
  scoped: false
})
export class PtuFacepile {

  @Prop() label: string | null;

  render() {
    return (
      <Host role="list">
        <slot></slot>
        {this.label && (
          <li>
            <p class="facepile-label">{this.label}</p>
          </li>
        )}
      </Host>
    );
  }

}
