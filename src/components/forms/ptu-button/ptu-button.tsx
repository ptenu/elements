import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ptu-button',
  styleUrl: 'ptu-button.scss'
})
export class PtuButton {

  /* Optional: provide a bootstrap icon class without prefixes */
  @Prop() icon: string;

  /* Optional: if present, the button will become disabled and show a spinner once clicked */
  @Prop() loads: boolean = false;

  @State() isLoading: boolean = false;

  handleClick = () => {
    if (this.loads) {
      this.isLoading = true;
    }
  }

  render() {
    return (
      <button disabled={this.isLoading} onClick={this.handleClick}>
        <div style={{visibility: (this.isLoading ? 'hidden' : 'visible') }}>
          <slot></slot>
        </div>
        {this.icon && <i class={'bi bi-'+this.icon} style={{visibility: (this.isLoading ? 'hidden' : 'visible') }}></i>}
        {this.isLoading && <i class="spinner"></i>}
      </button>
    );
  }

}
