import {Component, Host, h, Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'ptu-payment-method',
  styleUrl: 'ptu-payment-method.css',
  shadow: true,
  assetsDirs: ['method-icons']
})
export class PtuPaymentMethod {

  @Prop() type: "card" | "bacs_debit" | "paypal" = "card";
  @Prop() brand: string;
  @Prop() accountNo: string = null;
  @Prop() sortCode: string = null;

  map = {
    bacs_debit: 21,
    card: {
      visa: 1,
      mastercard: 2,
      maestro: 3,
      cirrus: 4,
      diners: 10,
      discover: 14,
      jcb: 16,
      amex: 22,
      unknown: 0
    },
    paypal: 5,
  }

  getIconNumber() {
    if (this.type == 'card') {
      return this.map['card'][this.brand];
    }

    return this.map[this.type];
  }

  Asterisk() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path color="currentColor" d="M12.9993 3L12.9991 10.267L19.2935 6.63397L20.2935 8.36602L14.0001 11.999L20.2935 15.634L19.2935 17.366L12.9991 13.732L12.9993 21H10.9993L10.9991 13.732L4.70508 17.366L3.70508 15.634L9.99808 12L3.70508 8.36602L4.70508 6.63397L10.9991 10.267L10.9993 3H12.9993Z"></path></svg>
    )
  }

  render() {
    const iconPath = getAssetPath(`./method-icons/${this.getIconNumber()}.png`)
    return (
      <Host>
        <article>
          <img src={iconPath} alt={this.brand || this.type}/>
          {this.sortCode && (
            <div class="sort-code">{this.sortCode}</div>
          )}
          {this.accountNo && (
            <div class="account-no">
              <this.Asterisk></this.Asterisk>
              <this.Asterisk></this.Asterisk>
              <this.Asterisk></this.Asterisk>
              <this.Asterisk></this.Asterisk>
              &nbsp;&nbsp;
              {this.accountNo}
            </div>
          )}
        </article>
      </Host>
    );
  }

}
