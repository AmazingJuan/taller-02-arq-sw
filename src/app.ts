import express from 'express';
import path from 'path';
import { config } from './config';
import { PokeneaRepository } from './Repositories/PokeneaRepository';
import { PokeneaController } from './Controllers/PokeneaController';
import { PokeneaApiController } from './Controllers/Api/PokeneaApiController';
import { createPokeneaRoutes } from './Routes/PokeneaRoutes';
import { createPokeneaApiRoutes } from './Routes/PokeneaApiRoutes';

const app = express();

app.use(express.json());

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

const pokeneaRepository = new PokeneaRepository();
pokeneaRepository.seed();

const pokeneaController = new PokeneaController(pokeneaRepository);
const pokeneaRouter = createPokeneaRoutes(pokeneaController);

const pokeneaApiController = new PokeneaApiController(pokeneaRepository);
const pokeneaApiRouter = createPokeneaApiRoutes(pokeneaApiController);

app.use('/pokeneas', pokeneaRouter);
app.use('/api/pokeneas', pokeneaApiRouter);

app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}`)
);
