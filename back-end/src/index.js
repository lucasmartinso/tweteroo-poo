import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import routers from './routers/routers.js'

const app = express();

app.use(cors());
app.use(json());

app.use(routers);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
