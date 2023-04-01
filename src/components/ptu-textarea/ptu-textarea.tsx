import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ptu-textarea',
  styleUrl: 'ptu-textarea.css',
  shadow: false,
})
export class PtuTextarea {

  @Prop() id: string;
  @Prop() label: string;
  @Prop() maxchars: number;
  @Prop() description: string;

  @State() el;
  @State() length;
  @State() counterClass = "counter";

  update() {
    this.el.style.height = "auto"
    this.el.style.height = `${this.el.scrollHeight}px`
    this.length = this.el.value.length;

    const percentage = this.length / this.maxchars;
    if (percentage < 0.8) {
      this.counterClass = "counter";
    }
    if (percentage >= 0.8) {
      this.counterClass = "counter yellow";
    }
    if (percentage >= 1) {
      this.counterClass = "counter red";
    }
  }

  componentDidLoad() {
    this.el = document.getElementById(this.id + "__control")
    this.update()
  }

  render() {
    return (
      <Host>
        <textarea id={this.id + "__control"}
                  aria-label={this.label}
                  maxlength={this.maxchars}
                  onReset={() => this.update()}
                  onInput={() => this.update()}
                  spellcheck="true"
        >
          <slot></slot>
        </textarea>
        <footer>
          {this.description && (
            <div id={this.id + "__description"} class="description">{this.description}</div>
          )}
          {this.maxchars > 0 && (
            <div class={this.counterClass}>{this.length} / {this.maxchars}</div>
          )}
        </footer>
      </Host>
    );
  }

}
