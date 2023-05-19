import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptu-membership-card',
  styleUrl: 'ptu-membership-card.css',
  shadow: true,
})
export class PtuMembershipCard {

  @Prop() name: string;
  @Prop() membershipNumber: string;

  render() {
    return (
      <Host>
        <header>
          <ptu-logo></ptu-logo>
          <h1>Member</h1>
        </header>
        <section class="details">
          <h2>Name</h2>
          <p>{this.name}</p>
          <h2>Membership No.</h2>
          <p>{this.membershipNumber}</p>
        </section>
      </Host>
    );
  }

}
