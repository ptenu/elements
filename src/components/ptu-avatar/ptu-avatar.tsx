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
      nameArray[1].charAt(0)
    ]

    return initials.join("");
  }

  mapRange(value: number): number {
    const inputMin = 1;
    const inputMax = 26;
    const outputMin = 100;
    const outputMax = 200;

    if (value < inputMin) {
      value = inputMin;
    }

    if (value > inputMax) {
      value = inputMax;
    }

    return (value - inputMin) * (outputMax - outputMin) / (inputMax - inputMin) + outputMin;
  }

  getRGB(name: string): Array<string> {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let rgbValue = []
    for (let i = 0; i < 3; i++) {
      let char = name.charAt(i);

      if (i === 2) {
        char = name.slice(name.length - 1);
      }

      let pos = alphabet.indexOf(char.toLowerCase());
      rgbValue[i] = this.mapRange(pos++);
    }
    console.log(rgbValue)
    return rgbValue;
  }

  render() {
    return (
      <Host>
        <article title={this.name}
                 style={{backgroundColor: `rgb(${this.getRGB(this.name).join(", ")})`}}
        >
          {this.src && (
            <img src={this.src} />
          )}
          <p>{this.getInitials(this.name)}</p>
        </article>
      </Host>
    );
  }

}
