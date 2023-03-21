import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-complete',
  styleUrl: 'ptu-complete.css',
  shadow: true,
})
export class PtuComplete {

  @Prop() headline: string;
  @Prop() status: string;
  @Prop() colour: "green" | "red" | "grey" | "yellow" = "grey";

  render() {
    return (
      <Host style={{backgroundColor: `var(--colour-${this.colour}-700)`}}>
        <header>
          {this.headline}
        </header>
        <section>
          <slot></slot>
        </section>
        <footer>
          {this.status}
        </footer>
      </Host>
    );
  }

}
