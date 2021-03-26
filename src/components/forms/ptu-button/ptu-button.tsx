import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-button',
  styleUrl: 'ptu-button.scss'
})
export class PtuButton {

  @Prop() icon: string;

  render() {
    return (
      <button>
        <div>
          <slot></slot>
        </div>
        {this.icon && <i class={'bi bi-'+this.icon}></i>}
      </button>
    );
  }

}
