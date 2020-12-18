import { RequestHandler } from 'express';
import fs from 'fs';
import Enviroment from '../env/env';
import { Tesseract } from 'tesseract.ts';

class OcrController {
  env: Enviroment;
  constructor() {
    this.env = new Enviroment();
  }

  convertToImage: RequestHandler = async (req, res, _next) => {
    try {
      const data = fs.readFileSync(
        `${this.env.IMG_DIR}${req.file.originalname}`
      );
      Tesseract.recognize(data)
        .then((result: any) => {
          res.send(result.data.text);
        })
        .catch((err: any) => {
          console.log(err);
          res.send('Something went wrong');
        });
      fs.unlinkSync(`${this.env.IMG_DIR}${req.file.originalname}`);
    } catch (err) {
      res.send('Something went wrong..');
    }
  };
}
export default OcrController;
