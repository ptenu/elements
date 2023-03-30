import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-details',
  styleUrl: 'ptu-details.css',
  shadow: true,
})
export class PtuDetails {

  @Prop() open: boolean = false;
  @Prop() summary: string;

  render() {
    return (
      <Host>
        <article>
          <header>
            <button onClick={() => this.open = !this.open}
                    aria-description={`Click to ${this.open ? "hide" : "show"} section: ${this.summary}`}
            >
              {this.summary}
              {!this.open && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/></svg>
              )}
              {this.open && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"/></svg>
              )}
            </button>
          </header>
          <section class="prose" style={{
            display: this.open ? "block" : "none"
          }}>
            <slot></slot>
          </section>
        </article>
      </Host>
    );
  }

}
