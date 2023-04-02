import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ptu-upload',
  styleUrl: 'ptu-upload.css',
  shadow: false,
})
export class PtuUpload {

  @Prop() name: string;
  @Prop() multiple: boolean = false

  @State() listItems = []

  getElement(): HTMLInputElement {
    const el = document.getElementById(this.name + "__control")
    if (el instanceof HTMLInputElement) {
      return el;
    }
  }

  triggerFileDialogue() {
    const el = this.getElement();
    el.showPicker()
  }

  renderImage(event) {
    console.log(event)
  }

  updateListItems() {
    const el = this.getElement()
    const files = el.files;
    if (files.length < 1) {
      return "";
    }

    this.listItems = []
    for (let i = 0; i < files.length; i++) {
      let item = files.item(i);
      this.listItems.push((
        <li id={item.name + "__list_item"} data-item={item} onLoad={(e) => this.renderImage(e)}>
          <button class='remove' aria-label="Do not upload this file">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                fill="currentColor"></path>
            </svg>
          </button>
          {!item.type.startsWith("image") && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M9 2.00318V2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8L9 2.00318ZM5.82918 8H9V4.83086L5.82918 8ZM11 4V9C11 9.55228 10.5523 10 10 10H5V20H19V4H11Z"
                fill="currentColor"></path>
            </svg>
          )}
          <p>{item.name}</p>
        </li>
      ))
    }

    return this.listItems;
  }

  render() {
    return (
      <Host>
        <ul class="file-grid">
          {this.listItems}
        </ul>
        <button onClick={() => this.triggerFileDialogue()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811L7 21C3.64378 20.7257 1 17.9216 1 14.5ZM16.8483 18.9868C19.1817 18.8093 21 16.8561 21 14.5C21 12.927 20.1884 11.4962 18.8771 10.6781L18.0714 10.1754L17.9517 9.23338C17.5735 6.25803 15.0288 4 12 4C8.97116 4 6.42647 6.25803 6.0483 9.23338L5.92856 10.1754L5.12288 10.6781C3.81156 11.4962 3 12.927 3 14.5C3 16.8561 4.81833 18.8093 7.1517 18.9868L7.325 19H16.675L16.8483 18.9868ZM13 13V17H11V13H8L12 8L16 13H13Z" fill="currentColor"></path></svg>
          {this.multiple ? "Select files" : "Select a file"}
        </button>
        <input id={this.name + "__control"}
               name={this.name}
               type="file"
               hidden
               multiple={this.multiple}
               onChange={() => this.updateListItems()}
        />
        <p>You can also drag and drop {this.multiple ? "files" : "a file"} here</p>
      </Host>
    );
  }

}
