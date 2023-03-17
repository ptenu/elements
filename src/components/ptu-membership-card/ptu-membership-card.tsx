import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ptu-membership-card',
  styleUrl: 'ptu-membership-card.css',
  shadow: true,
})
export class PtuMembershipCard {

  render() {
    return (
      <Host>
        <header>
          <ptu-logo></ptu-logo>
          <h1>Member</h1>
        </header>
        <section class="details">
          <h2>Name</h2>
          <p>Alex Hall</p>
          <h2>Membership No.</h2>
          <p>ABC12345</p>
        </section>
      </Host>
    );
  }

}
