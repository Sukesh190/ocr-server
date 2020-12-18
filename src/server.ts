import express, { NextFunction } from 'express';
import helmet from 'helmet';
import routes from './routes/ocrRoutes';

class Server {
  private app;
  constructor() {
    this.app = express();
    this.configurations();
  }

  private configurations() {
    this.app.use(helmet());
    this.app.use(
      (_req: express.Request, res: express.Response, next: NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
      }
    );
    this.app.use('/api', routes);
  }

  start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: object) => {
          reject(err);
        });
    });
  };
}

export default Server;
