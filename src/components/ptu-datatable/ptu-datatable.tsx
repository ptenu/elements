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
      console.log(row)
    }
    return rows;
  }

  render() {
    return (
      <Host>
        <table>
          <caption>
            <h1>{this.caption}</h1>
            <p>
              {this.offset + 1} -
              {this.offset + this.maxItems + 1 > this.root.childElementCount && this.root.childElementCount}
              {this.offset + this.maxItems + 1 <= this.root.childElementCount && this.offset + this.maxItems + 1}
              <span> of </span>
              {this.root.childElementCount}
            </p>
          </caption>
          <tbody>
          {this.getRows().map(row => (
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
            </tr>
          ))}
          </tbody>
        </table>
        <footer>
          The footer
        </footer>
      </Host>
    );
  }

}
