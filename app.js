import { resolve } from 'path';
import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './src/database';

import homeRoutes from './src/routes/homeRoutes';
// import route from './routes/route';
// import route from './routes/route';
// import route from './routes/route';
// import route from './routes/route';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    // this.app.use('/route/', route);
    // this.app.use('/route/', route);
    // this.app.use('/route/', route);
    // this.app.use('/route/', route);
  }
}

export default new App().app;
