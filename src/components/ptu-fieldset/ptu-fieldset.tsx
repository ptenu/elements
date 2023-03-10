import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-fieldset',
  styleUrl: 'ptu-fieldset.css',
  shadow: true,
})
export class PtuFieldset {

  @Prop() label: string;
  @Prop() inline: boolean;

  render() {
    return (
      <Host>
        <fieldset>
          <legend>{this.label}</legend>
          <p>This is description or help text that helps the user complete the question.</p>
          <p class="error">This is some reason why you dun goofed and need to try again.</p>
          <ul class={this.inline ? "flex-list" : ""}>
            <slot></slot>
          </ul>
        </fieldset>
      </Host>
    );
  }

}
