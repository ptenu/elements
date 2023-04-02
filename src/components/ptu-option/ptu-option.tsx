import {Component, Host, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'ptu-option',
  styleUrl: 'ptu-option.css',
  shadow: false,
})
export class PtuOption {

  @State() isSelected: boolean = false;

  @Prop() name: string;
  @Prop() value: string;
  @Prop() radio: boolean = false;
  @Prop() checked: boolean = false;


  render() {
    return (
      <Host>
        <input id={this.name + '__' + this.value}
               type={this.radio ? "radio" : "checkbox"}
               name={this.name}
               checked={this.checked}
               value={this.value}
        />
        <label htmlFor={this.name + '__' + this.value} class="button">
            <div>
              <slot></slot>
            </div>
          </label>
      </Host>
    );
  }

}
