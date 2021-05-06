import { Router } from 'express';
import { image as imageService } from '../../services/services';
import { image as imageMiddleware } from '../../middlewares/middlewares';

const initImage = Router();

initImage
  .post('/', imageMiddleware, (req, res, next) => imageService.upload(req.file)
    .then(image => res.send(image))
    .catch(next));

export { initImage };
