import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'ptu-facepile',
  styleUrl: 'ptu-facepile.css',
  shadow: true,
})
export class PtuFacepile {

  @Element() root!: HTMLElement;
  @Prop() max: number = 5;

  @State() children = this.root.children;

  getArray() {
    const children = this.children;
    const max = this.max;
    let peeps = []
    for (let i = 0; i < max && i < children.length ; i++) {
      let el = children.item(i);
      peeps[i] = [
        el.attributes.getNamedItem("name").value,
        el.attributes.getNamedItem("src") && el.attributes.getNamedItem("src").value
      ]
    }
    console.log(peeps)
    return peeps
  }

  render() {
    return (
      <Host role="list">
        {this.getArray().map(person => (
          <ptu-avatar name={person[0]} src={person[1]}></ptu-avatar>
        ))}
        {this.max < this.children.length && (
          <li>
            <p class="facepile-label">+ {this.children.length - this.max} more</p>
          </li>
        )}
      </Host>
    );
  }

}
