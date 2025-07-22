import { Router } from 'express';
import recetaController from '../controllers/receta.controller.js';

const router = Router();

router.get('/', recetaController.getAll);
router.get('/:id', recetaController.getById);
router.post('/', recetaController.insert);
router.put('/:id', recetaController.update);
router.delete('/:id', recetaController.delete);

export default router; 