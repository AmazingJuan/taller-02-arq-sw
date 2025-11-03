import { Request, Response } from 'express';
import { Pokenea } from '../../Models/Pokenea';
import { PokeneaRepository } from '../../Repositories/PokeneaRepository';
import { config } from '../../config'

export class PokeneaApiController {
  constructor(private pokeneaRepository: PokeneaRepository) {}

  public getRandomPokenea = (req: Request, res: Response): void => {
    const pokenea: Pokenea = this.pokeneaRepository.getRandomPokenea();
    const containerId = config.containerId;

    const response = {
      id: pokenea.getId(),
      name: pokenea.getName(),
      height: pokenea.getHeight(),
      ability: pokenea.getAbility(),
      containerId: containerId,
    };

    res.json(response);
  };
}
