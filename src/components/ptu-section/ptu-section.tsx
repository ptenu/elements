import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-section',
  styleUrl: 'ptu-section.css',
  shadow: true,
})
export class PtuSection {

  @Prop() sidebar: "none" | "left" | "right" = "none";

  render() {
    return (
      <Host>
        {this.sidebar === "left" && (
          <aside>
            <slot name="sidebar"></slot>
          </aside>
        )}
        <section class={"sidebar_" + this.sidebar}>
          <slot></slot>
        </section>
        {this.sidebar === "right" && (
          <aside>
            <slot name="sidebar"></slot>
          </aside>
        )}
      </Host>
    );
  }

}
