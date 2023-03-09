import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-chip',
  styleUrl: 'ptu-chip.css',
  shadow: true,
})
export class PtuChip {

  @Prop() colour: "grey" | "blue" | "green" | "red" | "yellow" | "outline" = "grey";

  render() {
    return (
      <Host style={{
        backgroundColor: `var(--colour-${this.colour}-200)`,
        border: "1px solid rgba(10,10,10,0.12)"
      }}>
        <slot></slot>
      </Host>
    );
  }

}
