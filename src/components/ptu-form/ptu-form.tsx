import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-form',
  styleUrl: 'ptu-form.css',
  shadow: false,
})
export class PtuForm {

  @Prop() action: string = "";
  @Prop() method: string = "POST";

  render() {
    return (
      <Host>
        <form action={this.action} method={this.method}>
          <slot></slot>
          <footer>
            <button>Save</button>
          </footer>
        </form>
      </Host>
    );
  }

}
