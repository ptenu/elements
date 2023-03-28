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
    this.root.scrollIntoView()
  }

  setLimit(max) {
    this.maxItems = max * 1;
    this.root.scrollIntoView()
  }

  pages(): Array<any> {
    const pageCount = this.totalPages();
    let pages = [];
    const allowedPages = [
      0, 1, pageCount-1, pageCount-2, this.currentPageIndex(), this.currentPageIndex() - 1, this.currentPageIndex() + 1
    ];
    for (let i = 0; i < pageCount; i++) {
      if (!allowedPages.includes(i)) {
        if (pages[pages.length-1] == "...") {
          continue
        }
        pages.push("...")
        continue;
      }
      let className = "page-button";
      if (i == this.currentPageIndex()) {
        className += " active";
      }
      pages.push((
        <button id={`${this.caption}__page_button__${i}`}
                class={className}
                onClick={() => this.setOffset(i)}
                aria-label={`Go to page ${i+1}`}
                title={`Go to page ${i+1}`}
        >
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
    return Math.ceil(this.offset / this.maxItems);
  }

  pageBack() {
    if (this.currentPageIndex() > 0) {
      this.setOffset(this.currentPageIndex() - 1)
    }
  }

  pageForward() {
    if (this.currentPageIndex() < this.totalPages()) {
      this.setOffset(this.currentPageIndex() + 1)
    }
  }

  totalPages() {
    return Math.ceil(this.root.childElementCount / this.maxItems)
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
          <div class="select-wrapper">
            Display
            {/* @ts-ignore */}
            <select onChange={(e) => this.setLimit(e.target.value)}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <nav>
            {this.currentPageIndex() > 0 && (
              <button class="page-button"
                      title={`Previous ${this.maxItems}`}
                      aria-label={`Previous ${this.maxItems}`}
                      onClick={() => this.pageBack()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="currentColor"
                        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
                </svg>
              </button>
            )}
            {this.pages()}
            {this.currentPageIndex() < this.totalPages() - 1 && (
              <button class="page-button"
                      title={`Next ${this.maxItems}`}
                      aria-label={`Next ${this.maxItems}`}
                      onClick={() => this.pageForward()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </button>
            )}
          </nav>
        </footer>
      </Host>
    );
  }

}
