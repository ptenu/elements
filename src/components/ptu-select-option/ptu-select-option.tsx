import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ptu-select-option',
  styleUrl: 'ptu-select-option.css',
  shadow: true,
})
export class PtuSelectOption {

  @Prop() value: string;
  @Prop() text: string | null = null;
  @Prop() selected: boolean = false;

  @Event() toggleOption: EventEmitter<{ value: string, text: string }>;

  toggleSelection() {
    this.toggleOption.emit({
      value: this.value,
      text: this.text
    });
  }

  render() {
    return (
      <Host>
        <button type="button"
                value={this.value}
                onClick={() => this.toggleSelection()}
                class={this.selected ? "select-option selected" : "select-option"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg>
          <div>
            <slot></slot>
          </div>
        </button>
      </Host>
    );
  }

}
