import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-confirm-button',
  styleUrl: 'ptu-confirm-button.css',
  shadow: false,
})
export class PtuConfirmButton {

  @Prop() variant: "primary" | "danger" | null = null;
  @Prop() size: "small" | null = null;
  @Prop() label: string;
  @Prop() formId: string | null = null;

  dialogElement!: HTMLDialogElement;

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.dialogElement.showModal();
  }

  cancel() {
    this.dialogElement.close();
  }

  render() {
    return (
      <Host>
        <button
          class={this.variant && this.variant + "-button"}
          style={{fontSize: this.size == "small" && "var(--fs-tiny)"}}
          onClick={e => this.handleClick(e)}
        >
          {this.label}
        </button>
        <dialog ref={el => this.dialogElement = el as HTMLDialogElement}>
          <slot></slot>
          <footer>
            <button form={this.formId} class="danger-button">Yes</button>
            <button type="button" onClick={() => this.cancel()}>Cancel</button>
          </footer>
        </dialog>
      </Host>
    );
  }

}
