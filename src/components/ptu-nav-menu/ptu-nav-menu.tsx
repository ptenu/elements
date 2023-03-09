import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-nav-menu',
  styleUrl: 'ptu-nav-menu.css',
  shadow: true,
})
export class PtuNavMenu {

  @Prop() visible: boolean = false;

  render() {
    if (!this.visible) {
      return "";
    }
    return (
      <Host>
          <section class="nav-menu-section">
            <ptu-section>
              <nav>
                <slot></slot>
              </nav>
            </ptu-section>
          </section>
      </Host>
    );
  }

}
