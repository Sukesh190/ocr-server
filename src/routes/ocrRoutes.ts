import { Router } from 'express';
import multer from 'multer';
import OcrController from '../controller/ocrController';
import Enviroment from '../env/env';

const routes = Router();
const env = new Enviroment();
const cntrl = new OcrController();
const fileStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, env.IMG_DIR);
  },
  filename: (_req, file, cb) => {
    cb(null, file.originalname);
  }
});

routes.post(
  '/upload',
  multer({ storage: fileStorage }).single('image'),
  cntrl.convertToImage
);

export default routes;
