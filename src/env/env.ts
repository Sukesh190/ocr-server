import dotenv from 'dotenv';

class Enviroment {
  IMG_DIR: string;
  constructor() {
    dotenv.config();
    this.IMG_DIR = process.env.IMG_DIR!;
  }
}

export default Enviroment;
