import { Component, Host, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ptu-datatable',
  styleUrl: 'ptu-datatable.css',
  shadow: true,
})
export class PtuDatatable {

  @Element() root!: HTMLElement;

  @Prop() caption!: string;

  @State() maxItems: number = 10;
  @State() offset: number = 0;

  getRows(offset: number = 0): Array<HTMLElement> {
    let rows = [];
    for (let i = offset; i < offset + this.maxItems && i < this.root.childElementCount; i++) {
      let row = this.root.children.item(i)
      rows.push(row);
    }
    return rows;
  }

  firstItemOnPage() {
    return this.offset + 1
  }

  lastItemOnPage() {
    if (this.offset + this.maxItems + 1 > this.root.childElementCount) {
      return this.root.childElementCount
    }

    return this.offset + this.maxItems
  }

  setOffset(pageIndex: number) {
    this.offset = this.maxItems * pageIndex;
  }

  pages(): Array<any> {
    const pageCount = this.root.childElementCount / this.maxItems;
    let pages = [];
    for (let i = 0; i <= pageCount; i++) {
      let className = "page-button";
      if (i == this.currentPageIndex()) {
        className += " active";
      }
      pages.push((
        <button class={className} onClick={() => this.setOffset(i)}>
          {i+1}
        </button>
      ))
    }

    return pages;
  }

  currentPageIndex() {
    if (this.offset === 0) {
      return this.offset
    }
    return this.maxItems / this.offset;
  }

  render() {
    return (
      <Host>
        <table>
          <caption>
            <h1>{this.caption}</h1>
            <p>
              {this.firstItemOnPage()} - {this.lastItemOnPage()}
              <span> of </span>
              {this.root.childElementCount}
            </p>
          </caption>
          <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Item</th>
          </tr>
          </thead>
          <tbody>
          {this.getRows(this.offset).map(row => (
            <tr>
              <td>
                {row.getAttribute("href") && (
                  <a href={row.getAttribute("href")}>
                    {row.getAttribute("id")}
                  </a>
                )}
                {!row.getAttribute("href") && row.getAttribute("id")}
              </td>
              <td>
                {row.innerHTML}
              </td>
              {row.getAttribute("status") && (
                <td>
                  <ptu-chip colour={row.getAttribute("statusColour")}>
                    {row.getAttribute("status")}
                  </ptu-chip>
                </td>
              )}
            </tr>
          ))}
          </tbody>
        </table>
        <footer>
          <nav>
            {this.pages()}
          </nav>
        </footer>
      </Host>
    );
  }

}
