import { Router } from 'express';
import { PokeneaController } from '../Controllers/PokeneaController.js';

export const createPokeneaRoutes = (controller: PokeneaController): Router => {
  const router = Router();

  router.get('/display', controller.displayPokenea);
  return router;
};
