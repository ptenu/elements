import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-callout',
  styleUrl: 'ptu-callout.css',
  shadow: true,
})
export class PtuCallout {

  @Prop() dialingCode: string = "+44";
  @Prop() localNumber: string;

  render() {
    return (
      <Host>
        <ptu-section>
          <article>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor"
                    d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/>
            </svg>
            <p>
              If you need guidance, advice, or help with your rented housing, call our member's helpline:
            </p>
            <a href={`tel:${this.dialingCode}${this.localNumber.replace(" ", "")}`}>
              0{this.localNumber}
            </a>
            <p class="meta">*Calls are handled by volunteers. If we are unable to take your call straight away, we'll call you back.</p>
          </article>
        </ptu-section>
      </Host>
    );
  }

}
