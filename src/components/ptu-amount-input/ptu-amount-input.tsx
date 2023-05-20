import {Component, Host, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'ptu-amount-input',
  styleUrl: 'ptu-amount-input.css',
  shadow: false,
})
export class PtuAmountInput {

  @Prop() id: string;
  @Prop() name: string;

  @State() amount = 6;

  render() {
    return (
      <Host>
        <input id={this.id + '__range'}
               name={this.name}
               type="range"
               min={3}
               max={3*6}
               // @ts-ignore
               onInput={(e) => this.amount = e.target.value}
               value={this.amount}
        />
        <ul>
          <li class="statistic">
            <header>
              You Pay
            </header>
            <p>
              £{this.amount}
            </p>
          </li>
          <li class="statistic">
            <header>
              We get*
            </header>
            <p>
              £{(this.amount - ((this.amount * 0.015) + .2)).toFixed(2)}
            </p>
          </li>
        </ul>
        <footer>
          * We pay a processing fee on each payment of 1.5% + 20p.
        </footer>
      </Host>
    );
  }

}
