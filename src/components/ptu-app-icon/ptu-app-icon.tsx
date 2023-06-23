import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'ptu-app-icon',
  styleUrl: 'ptu-app-icon.css',
  shadow: true,
  assetsDirs: ['app-icons']
})
export class PtuAppIcon {

  @Prop() href: string | null;
  @Prop() app: string;

  icons = {
    casebook: 'Case_Icon.svg',
    cms: 'CMS_Icon.svg',
    forum: 'Forum_Icon.svg',
    learning: 'Learning_Icon.svg',
    mail: 'Mail_Icon.svg',
    organisation: 'Org_Icon.svg',
    web: 'Web_Icon.svg',
    wiki: 'Wiki_Icon.svg'
  }

  getPath() {
    let fileName = this.icons[this.app];
    return './app-icons/' + fileName;
  }

  render() {
    return (
      <Host>
        <a href={this.href}>
          <img src={getAssetPath(this.getPath())} alt='App icon' />
          <div>
            <slot></slot>
          </div>
        </a>
      </Host>
    );
  }

}
