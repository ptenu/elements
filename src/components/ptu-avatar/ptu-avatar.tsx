import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptu-avatar',
  styleUrl: 'ptu-avatar.css',
  shadow: true,
})
export class PtuAvatar {

  @Prop() name: string;
  @Prop() src: string | false = false;

  getInitials(name: string): string {
    const nameArray = name.split(" ");
    const initials = [
      nameArray[0].charAt(0),
      nameArray.pop().charAt(0)
    ]

    return initials.join("");
  }

  mapRange(value: number): number {
    const inputMin = 1;
    const inputMax = 26;
    const outputMin = 0;
    const outputMax = 360;

    if (value < inputMin) {
      value = inputMin;
    }

    if (value > inputMax) {
      value = inputMax;
    }

    return (value - inputMin) * (outputMax - outputMin) / (inputMax - inputMin) + outputMin;
  }

  getRGB(name: string): number {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const nameArray = name.split(" ");

    const firstChar = name.charAt(0);
    const lastChar = nameArray[0].charAt(nameArray[0].length - 1);

    let hue = alphabet.indexOf(firstChar.toLowerCase());
    hue = ( hue + alphabet.indexOf(lastChar.toLowerCase()) ) / 2;
    return this.mapRange(hue);
  }

  render() {
    return (
      <Host>
        <article title={this.name}
                 style={{backgroundColor: `hsl(${this.getRGB(this.name)}deg 58% 33%`}}
        >
          {this.src && (
            <img src={this.src} />
          )}
          {!this.src && (
            <p>{this.getInitials(this.name)}</p>
          )}
        </article>
      </Host>
    );
  }

}
