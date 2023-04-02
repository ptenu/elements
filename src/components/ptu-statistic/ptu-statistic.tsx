import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-statistic',
  styleUrl: 'ptu-statistic.css',
  shadow: true,
})
export class PtuStatistic {

  @Prop() title: string;
  @Prop() colour: "accent" | "green" | "red" | "yellow" | "blue" | "grey" = "grey";
  @Prop() href: string;
  @Prop() linkText: string;

  render() {
    return (
      <Host style={{
        backgroundColor: `var(--colour-${this.colour}-700)`,
        color: `var(--colour-${this.colour}-50)`
      }}>
        <header>{this.title}</header>
        <section>
          <slot></slot>
        </section>
        {this.href && this.linkText && (
          <footer>
            <a href={this.href}>Link to somewhere</a>
          </footer>
        )}
      </Host>
    );
  }

}
