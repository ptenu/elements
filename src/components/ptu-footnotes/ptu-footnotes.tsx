import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-footnotes',
  styleUrl: 'ptu-footnotes.css',
  shadow: false,
})
export class PtuFootnotes {

  @Prop() parentSelector: string = "body"

  references = []

  componentWillLoad() {
    let selector = `${this.parentSelector} ptu-cite`;
    const refList = document.querySelectorAll(selector);
    refList.forEach((element) => {
      let pageNo = Number(element.getAttribute('page'));
      this.references.push((
        <ptu-cite
          show="full"
          title={element.getAttribute('title')}
          // @ts-ignore
          type={element.getAttribute('type')}
          defendant={element.getAttribute('defendant')}
          claimant={element.getAttribute('claimant')}
          date={element.getAttribute('date')}
          author={element.getAttribute('author')}
          publisher={element.getAttribute('publisher')}
          page={pageNo > 0 ? pageNo : null}
          href={element.getAttribute('href')}
          citation={element.getAttribute('citation')}
          edition={element.getAttribute('edition')}
          summary={element.getAttribute('summary')}
        ></ptu-cite>
      ))
    })
  }

  render() {
    return (
      <Host>
        <ol>
          {this.references.map((item) => (
            <li>
              {item}
            </li>
          ))}
        </ol>
      </Host>
    );
  }

}
