import { Router } from 'express';
import { PokeneaApiController } from '../Controllers/Api/PokeneaApiController';

export const createPokeneaApiRoutes = (
  controller: PokeneaApiController
): Router => {
  const router = Router();

  router.get('/overview', controller.getRandomPokenea);

  return router;
};
