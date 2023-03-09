import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-navbar',
  styleUrl: 'ptu-navbar.css',
  shadow: true,
})
export class PtuNavbar {

  render() {
    return (
      <Host>
          <ptu-section class="header-section" section-style={{display: "flex"}}>
              <nav>
                <header>
                  <slot></slot>
                </header>
                <aside class="right-aligned">
                  <slot name="right"></slot>
                </aside>
              </nav>
          </ptu-section>
      </Host>
    );
  }

}
