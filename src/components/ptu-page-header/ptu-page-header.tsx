import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-page-header',
  styleUrl: 'ptu-page-header.css',
  shadow: true,
})
export class PtuPageHeader {

  @Prop() headline: string;
  @Prop() category: string;
  @Prop() categoryHref: string;
  @Prop() categoryColour: "red" | "blue" | "accent" | "yellow" | "green" = "red"
  @Prop() topic: string;
  @Prop() topicHref: string;

  render() {
    return (
      <Host>
        <ptu-section role="header">
          <aside>
            {this.category && (
              <a class="category"
                 href={this.categoryHref}
                 style={{
                     backgroundColor: `var(--colour-${this.categoryColour}-600`,
                     color: `var(--colour-${this.categoryColour}-50`
              }}
              >
                {this.category}
              </a>
            )}

            {this.topic && (
              <a href={this.topicHref} class="topic">{this.topic}</a>
            )}
          </aside>
          <hgroup>
            <h1>{this.headline}</h1>
            <section>
              <slot></slot>
            </section>
          </hgroup>
        </ptu-section>
      </Host>
    );
  }

}
