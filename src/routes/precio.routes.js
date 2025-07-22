import { Router } from 'express';
import precioController from '../controllers/precio.controller.js';

const router = Router();

router.get('/', precioController.getAll);
router.get('/:id', precioController.getById);
router.post('/', precioController.insert);
router.put('/:id', precioController.update);
router.delete('/:id', precioController.delete);

export default router; 