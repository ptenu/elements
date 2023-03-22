import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-datatable',
  styleUrl: 'ptu-datatable.css',
  shadow: true,
})
export class PtuDatatable {

  @Element() root!: HTMLElement;

  @Prop() caption: string;
  @Prop() maxItems: number = 10;

  render() {
    console.log(this.root.children.item(0))
    return (
      <Host>
        {this.root.children.item(0).innerHTML}
      </Host>
    );
  }

}
