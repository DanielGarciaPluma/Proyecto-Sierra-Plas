import { Router } from 'express';
import produccionController from '../controllers/produccion.controller.js';

const router = Router();

router.get('/', produccionController.getAll);
router.get('/:id', produccionController.getById);
router.post('/', produccionController.insert);
router.put('/:id', produccionController.update);
router.delete('/:id', produccionController.delete);

export default router; 