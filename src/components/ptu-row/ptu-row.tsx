import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-row',
  styleUrl: 'ptu-row.css',
  shadow: true,
})
export class PtuRow {

  @Prop() status: string;
  @Prop() statusColour: "grey" | "outline" | "blue" | "green" | "yellow" | "red";

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
