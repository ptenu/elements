import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-fieldset',
  styleUrl: 'ptu-fieldset.css',
  shadow: true,
})
export class PtuFieldset {

  @Prop() label: string;
  @Prop() inline: boolean = false;
  @Prop() errorText: string | null = null;
  @Prop() description: string | null = null;

  render() {
    return (
      <Host>
        <fieldset>
          <legend>{this.label}</legend>
          {this.description && (
            <p>{this.description}</p>
          )}
          {this.errorText && (
            <p class="error">{this.errorText}</p>
          )}
          <ul class={this.inline ? "flex-list" : ""}>
            <slot></slot>
          </ul>
        </fieldset>
      </Host>
    );
  }

}
