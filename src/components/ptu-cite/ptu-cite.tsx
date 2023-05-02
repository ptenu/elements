import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-cite',
  styleUrl: 'ptu-cite.css',
  shadow: false,
})
export class PtuCite {

  // Reference information
  @Prop() type: "case" | "statute" | "book" | "web" | "article";
  @Prop() title: string | null;
  @Prop() defendant: string | null;
  @Prop() claimant: string | null;
  @Prop() date: string | number | null;
  @Prop() author: string | null;
  @Prop() publisher: string | null;
  @Prop() page: number | null;
  @Prop() href: string | null;
  @Prop() citation: string | null;
  @Prop() edition: string | null;
  @Prop() summary: string | null;

  // Display options
  @Prop() show: "inline" | "full" | "number" = "number";

  id() {
    let idText = [this.author, this.title, this.date, this.citation, this.page].filter((item) => item != null).join('_');
    if (this.type == "case") {
      idText = `${this.claimant}-v-${this.defendant}_${this.date}`;
    }
    return idText.replace(' ', '-');
  }

  textFunctions = {
    case: () => (
      <cite>
        <i>{this.claimant} v {this.defendant}</i> [{this.date}] {this.citation}
      </cite>
    ),
    statute: () => (
      <cite>
        {this.title} {this.date}{this.citation && `, ${this.citation}`}
      </cite>
    ),
    book: () => (
      <cite>
        {this.author}, <i>{this.title}</i> ({this.citation && this.citation + ', '}
        {this.edition && this.edition + ', '}
        {this.publisher} {this.date}) {this.page}
      </cite>
    ),
    article: () => (
      <cite>
        {this.author} &lsquo;{this.title}&rsquo; <i>{this.publisher}</i> ({this.citation && this.citation + ', '}
        {this.date}) {this.page}
      </cite>
    ),
    web: () => (
      <cite>
        {this.author} &lsquo;{this.title}&rsquo; (<i>{this.publisher}</i>, {this.date}) {`<${this.href}>`} {this.citation}
      </cite>
    ),
  }

  render() {
    const refText: string = this.textFunctions[this.type]();

    return (
      <Host id={this.show == "full" ? this.id() : ''}>
        {this.show === "number" && (
          <a href={`#${this.id()}`} class="footnote-reference">
            <cite class="inline"></cite>
          </a>
        )}
        {this.show != "number" && this.href && (
          <a href={this.href} target="_blank">
            {refText}
          </a>
        )}
        {this.show != "number" && !this.href && (
          <span>
            {refText}
          </span>
        )}
        {this.show == "full" && this.summary && (
          <span> - {this.summary}</span>
        )}

      </Host>
    );
  }

}
