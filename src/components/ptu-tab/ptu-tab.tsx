import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-tab',
  styleUrl: 'ptu-tab.css',
  shadow: true,
})
export class PtuTab {

  @Prop() href: string = "#";
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        <a href={this.href} class={this.selected ? "active" : ""}>
          <slot></slot>
        </a>
      </Host>
    );
  }

}
