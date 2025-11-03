import { Pokenea } from '../Models/Pokenea';
import { getRandomIndex } from '../Utils/random';
import { config } from '../config';

export class PokeneaRepository {
  private pokeneas: Pokenea[] = [];

  public seed(): void {
    const { bucketUrl }: { bucketUrl: string } = config;

    this.pokeneas.push(
      new Pokenea(
        1,
        'Regice',
        1.8,
        'Ice Control',
        `${bucketUrl}/pokenea1.png`,
        'The calm of ice reflects the clarity of the mind.'
      ),
      new Pokenea(
        2,
        'Swinub',
        0.4,
        'Quick Digging',
        `${bucketUrl}/pokenea2.png`,
        'Sometimes, what lies beneath the ground is more valuable than what you see.'
      ),
      new Pokenea(
        3,
        'Misdreavus',
        0.7,
        'Psychic Confusion',
        `${bucketUrl}/pokenea3.png`,
        'Fear only exists if you feed it with thoughts.'
      ),
      new Pokenea(
        4,
        'Rapidash',
        1.7,
        'Extreme Speed',
        `${bucketUrl}/pokenea4.png`,
        'Run, but never forget where you’re heading.'
      ),
      new Pokenea(
        5,
        'Araquanid',
        1.8,
        'Water Web',
        `${bucketUrl}/pokenea5.png`,
        'The strongest webs are those we build carefully.'
      ),
      new Pokenea(
        6,
        'Typhlosion',
        1.6,
        'Fire Explosion',
        `${bucketUrl}/pokenea6.png`,
        'Passion can light up even the darkest night.'
      ),
      new Pokenea(
        7,
        'Castform',
        0.3,
        'Weather Change',
        `${bucketUrl}/pokenea7.png`,
        'Adapting to change is the true strength.'
      ),
      new Pokenea(
        8,
        'Kleavor',
        1.8,
        'Sharp Slash',
        `${bucketUrl}/pokenea8.png`,
        'Every challenge is overcome with precision and determination.'
      ),
      new Pokenea(
        9,
        'Tepig',
        0.5,
        'Initial Flamethrower',
        `${bucketUrl}/pokenea9.png`,
        'Start small, but leave a big mark.'
      ),
      new Pokenea(
        10,
        'Thwackey',
        0.7,
        'Rhythmic Drumming',
        `${bucketUrl}/pokenea10.png`,
        'The right rhythm guides even the most uncertain steps.'
      )
    );
  }

  public getRandomPokenea(): Pokenea {
    const maxIndex: number = this.pokeneas.length;
    const randomIndex: number = getRandomIndex(maxIndex);
    const randomPokenea: Pokenea = this.pokeneas[randomIndex];

    return randomPokenea;
  }
}
