import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import routers from './routers/routers.js'

class Server { 
  constructor(port, app) { 
    this.port = port; 
    this.app = app;
  }

  configRouter() { 
    this.app.use(cors());
    this.app.use(json());
    this.app.use(routers);
  }

  listen() { 
    this.app.listen(this.port, () => {
      console.log(chalk.bold.blue(`Server listen on port ${this.port}!!!`));
    });
  }
}

const server = new Server(5001, express());

server.configRouter();
server.listen();
