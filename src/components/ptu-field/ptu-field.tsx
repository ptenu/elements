import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-field',
  styleUrl: 'ptu-field.css',
  shadow: true,
})
export class PtuField {

  @Prop() name: string;
  @Prop() controlId: string;
  @Prop() errorText: string | false = false;
  @Prop() label: string;

  render() {
    return (
      <Host>
        <label htmlFor={this.controlId}>
          {this.label}
        </label>
        <slot></slot>
        {this.errorText && (
          <p class="error-text">
            {this.errorText}
          </p>
        )}
      </Host>
    );
  }

}
