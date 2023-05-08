import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-hero-button',
  styleUrl: 'ptu-hero-button.css',
  shadow: true,
})
export class PtuHeroButton {

  @Prop() title: string;
  @Prop() link: string;
  @Prop() href: string;

  render() {
    return (
      <Host>
        <aside class="icon">
          <slot name="icon"></slot>
        </aside>
        <article>
          <header>
            {this.title}
          </header>
          <section>
            <slot></slot>
          </section>
          {this.link && (
            <footer>
              <a href={this.href}>{this.link}</a>
            </footer>
          )}
        </article>
      </Host>
    );
  }

}
