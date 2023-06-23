import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-navbar',
  styleUrl: 'ptu-navbar.css',
  shadow: false,
})
export class PtuNavbar {

  @Prop() showApps: boolean = false;
  @Prop() userName: string | false = false;
  @Prop() avatarUrl: string | false = false;

  appDialogue!: HTMLDialogElement;
  userDialogue!: HTMLDialogElement;
  menuDialogue!: HTMLDialogElement;

  toggleAppDialogue() {
    if (this.appDialogue.open) {
      this.appDialogue.close();
      return;
    }
    // Close the others
    if (this.userName) {
      this.userDialogue.close();
    }
    this.menuDialogue.close();

    this.appDialogue.show();
  }

  toggleUserDialogue() {
    if (this.userDialogue.open) {
      this.userDialogue.close();
      return;
    }

    // Close the others
    if (this.showApps) {
      this.appDialogue.close();
    }
    this.menuDialogue.close();

    this.userDialogue.show();
  }

  toggleMenuDialogue() {
    if (this.menuDialogue.open) {
      this.menuDialogue.close();
      return;
    }

    // Close the others
    if (this.userName) {
      this.userDialogue.close();
    }
    if (this.showApps) {
      this.appDialogue.close();
    }

    this.menuDialogue.show();
  }

  render() {
    return (
      <Host>
        <ptu-section class='header-section'>
          <nav class='navbar'>
            {this.showApps && [
              <button onClick={() => this.toggleAppDialogue()}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path
                    d='M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13Z'></path>
                </svg>
                <span>
                      Apps
                    </span>
              </button>,
              <dialog ref={el => this.appDialogue = el as HTMLDialogElement}>
                <button onClick={() => this.toggleAppDialogue()} class='close-button'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path
                      d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
                  </svg>
                </button>
                <slot name='apps'></slot>
              </dialog>,
              <hr />
            ]}
            <ptu-logo></ptu-logo>
            <button style={{ marginLeft: 'auto' }} onClick={() => this.toggleMenuDialogue()}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
              </svg>
              <span>
                    Menu
                  </span>
            </button>
            <dialog ref={el => this.menuDialogue = el as HTMLDialogElement} class='right'>
              <button onClick={() => this.toggleMenuDialogue()} class='close-button'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path
                    d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
                </svg>
              </button>
              <slot></slot>
            </dialog>
            {this.userName && [
              <hr />,
              <button onClick={() => this.toggleUserDialogue()}>
                <ptu-avatar name={this.userName} src={this.avatarUrl} />
                <span>
                      {this.userName}
                    </span>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path
                    d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'></path>
                </svg>
              </button>,
              <dialog ref={el => this.userDialogue = el as HTMLDialogElement} class='right'>

                <button onClick={() => this.toggleUserDialogue()} class='close-button'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path
                      d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
                  </svg>
                </button>
                <slot name='user-menu'></slot>
              </dialog>,
            ]}
          </nav>
        </ptu-section>
      </Host>
    );
  }

}
