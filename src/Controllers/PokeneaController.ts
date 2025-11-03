import { Request, Response } from 'express';
import { Pokenea } from '../Models/Pokenea';
import { PokeneaRepository } from '../Repositories/PokeneaRepository';
import { config } from '../config';

export class PokeneaController {
  constructor(private pokeneaRepository: PokeneaRepository) {}

  public displayPokenea = (req: Request, res: Response): void => {
    const viewData: Record<string, any> = {};
    const pokenea: Pokenea = this.pokeneaRepository.getRandomPokenea();
    const containerId: string = config.containerId;

    viewData['image'] = pokenea.getImage();
    viewData['philosophicalQuote'] = pokenea.getPhilosophicalQuote();
    viewData['containerId'] = containerId;

    res.render('display-pokenea', {
      viewData: viewData,
    });
  };
}
