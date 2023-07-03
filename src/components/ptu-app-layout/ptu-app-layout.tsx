import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-app-layout',
  styleUrl: 'ptu-app-layout.css',
  shadow: false,
})
export class PtuAppLayout {

  @Prop() pageTitle: string;
  @Prop() app: string;
  @Prop() appHref: string;
  @Prop() section: string;
  @Prop() sectionHref: string;

  render() {
    return (
      <Host>
        <header class='app-header'>
          <h1>{this.pageTitle}</h1>
          <aside>
            <slot name="actions"></slot>
          </aside>
        </header>
        <aside class='sidebar'>
          <input id='menu-toggler' class='toggler' type='checkbox' />

          <header>
            {this.appHref && (
              <a href={this.appHref} class='chip'>
                {this.app}
              </a>
            )}
            {!this.appHref && (
              <div class='chip'>
                {this.app}
              </div>
            )}
            {this.section && [
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M16 12L10 18V6L16 12Z'></path>
              </svg>,
              this.sectionHref ?
                <a href={this.sectionHref}>{this.section}</a>
                : this.section
            ]}
          </header>

          <slot name='menu'></slot>
        </aside>
        <main>
          <slot></slot>
        </main>
      </Host>
    );
  }

}
