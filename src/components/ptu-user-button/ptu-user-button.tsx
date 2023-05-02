import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-user-button',
  styleUrl: 'ptu-user-button.css',
  shadow: true,
})
export class PtuUserButton {

  @Prop() authenticated: boolean = false;
  @Prop() href: string | null;

  render() {
    return (
      <Host>
        <a href={this.href}>
          {this.authenticated && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
          )}
          {!this.authenticated && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"></path></svg>
          )}
          <span>
            <slot></slot>
          </span>
        </a>
      </Host>
    );
  }

}
