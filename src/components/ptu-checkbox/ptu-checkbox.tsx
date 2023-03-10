import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-checkbox',
  styleUrl: 'ptu-checkbox.css',
  shadow: false,
})
export class PtuCheckbox {

  @Prop() name: string;
  @Prop() value: string;

  render() {
    return (
      <Host>
        <label>
          <input type="checkbox" name={this.name} value={this.value}/>
          <slot></slot>
        </label>
      </Host>
    );
  }

}
