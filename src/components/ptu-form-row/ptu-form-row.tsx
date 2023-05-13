import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-form-row',
  styleUrl: 'ptu-form-row.css',
})
export class PtuFormRow {

  @Prop() label: string;
  @Prop() for: string = null;
  @Prop() description: string = null;
  @Prop() helpText: string = null;
  @Prop() inline: boolean = false

  render() {
    return (
      <Host>
        <header>
          <label htmlFor={this.for}>
            {this.label}
          </label>
          {this.description && (
            <p>
              {this.description}
            </p>
          )}
          {this.helpText && (
            <details>
              <summary>{this.helpText}</summary>
              <slot name="help"></slot>
            </details>
          )}
        </header>
        <fieldset class={this.inline && "inline"}>
          <slot></slot>
        </fieldset>
      </Host>
    );
  }

}
