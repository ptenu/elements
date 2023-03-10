import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-text-input',
  styleUrl: 'ptu-text-input.css',
  shadow: false,
})
export class PtuTextInput {

  @Prop() name: string;
  @Prop() label: string;
  @Prop() initialValue: string | null = null;
  @Prop() type = "text";
  @Prop() autocomplete: string = 'off';
  @Prop() width: number = 10

  render() {
    return (
      <Host style={{maxWidth: (this.width + 3) + 'ch', width: '100%'}}>
        <input id={this.name + `__input`}
               type={this.type}
               name={this.name}
               value={this.initialValue}
               autocomplete={this.autocomplete}
        />
        <label htmlFor={this.name + `__input`}>
          {this.label}
        </label>
      </Host>
    );
  }

}
