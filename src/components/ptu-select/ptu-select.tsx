import { Component, Host, h, State, Prop, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'ptu-select',
  styleUrl: 'ptu-select.css',
  shadow: false,
})
export class PtuSelect {

  @State() items: Array<{ value: string, text: string }> = [];
  @Prop() id: string;
  @Prop() name: string = 'selector';
  @Prop() label: string = 'Select an option';
  @Prop() multiple: boolean = false;

  formElement!: HTMLFormElement;

  componentDidLoad() {
    let children = this.formElement.children;
    let items = [];
    for (let i = 0; i < children.length; i++) {
      let el = children[i];
      if (!el.hasAttribute('selected')) {
        continue;
      }

      items.push({
        value: el.getAttribute('value'),
        text: el.getAttribute('text')
      })
    }

    this.items = items;
  }

  dialogId(): string {
    return this.id + '__options_list';
  }

  openSelectionList() {
    let elementId = this.dialogId();
    let el = document.getElementById(elementId);
    if (el instanceof HTMLDialogElement) {
      el.showModal();
    }
  }

  closeSelectionList() {
    let elementId = this.dialogId();
    let el = document.getElementById(elementId);
    if (el instanceof HTMLDialogElement) {
      el.close();
    }
  }

  @Listen('toggleOption')
  optionToggledHandler(event: CustomEvent<{ value: string, text: string }>) {
    if (!this.multiple) {
      this.closeSelectionList();
      this.items = [{...event.detail}]
      return;
    }

    let newItems = this.items.map((item) => {
      return {...item}
    });

    let didRemoval = false;
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].value !== event.detail.value) {
        continue;
      }

      didRemoval = true;
      newItems.splice(i, 1);
    }

    if (!didRemoval) {
      newItems.push(event.detail)
    }

    this.items = newItems;
  }

  @Watch('items')
  updateSelectedOptions(newValue: Array<{value: string, text: string}>) {
    let children = this.formElement.children;
    let values = newValue.map((item) => item.value);
    for (let i = 0; i < children.length; i++) {
      let el = children[i];
      let value = el.getAttribute('value');
      if (values.includes(value)) {
        el.setAttribute('selected', 'true');
        continue;
      }

      el.removeAttribute('selected')
    }
  }

  render() {
    return (
      <Host>
        {this.items.map(item => (
          <input type='checkbox'
                 readOnly={true}
                 value={item.value}
                 name={this.multiple ? this.name + '[]' : this.name}
                 checked={true}
                 hidden
          />
        ))}
        <button class="input-wrapper" type="button" onClick={() => this.openSelectionList()}>
          <ul class='selected-items'>
            {this.items.length < 1 && (
              <li class='empty'>{this.label}</li>
            )}
            {this.items.map((item) => (
              <li class='selected-item'>
                <div>
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.2073 9.04304 12.0002 2.83594 5.79312 9.04304 7.20733 10.4573 12.0002 5.66436 16.7931 10.4573 18.2073 9.04304ZM5.79297 14.9574 12.0001 21.1646 18.2072 14.9574 16.793 13.5432 12.0001 18.3361 7.20718 13.5432 5.79297 14.9574Z"></path></svg>
        </button>
        <dialog id={this.dialogId()}>
          <header>
            <h1>
              {this.label}
            </h1>
            <aside>
              <button type="button"
                      class="link-button"
                      onClick={() => this.closeSelectionList()}
              >
                Close
              </button>
            </aside>
          </header>
          <form method='dialog' ref={(el) => this.formElement = el as HTMLFormElement}>
            <slot></slot>
          </form>
        </dialog>
      </Host>
    );
  }

}
