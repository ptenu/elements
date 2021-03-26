import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-section',
  styleUrl: 'ptu-section.scss'
})
export class PtuSection {

  @Prop() fullWidth: boolean;

  render() {
    return (
      <section>
        <slot></slot>
      </section>
    );
  }

}
