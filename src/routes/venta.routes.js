import { Router } from 'express';
import ventaController from '../controllers/venta.controller.js';

const router = Router();

router.get('/', ventaController.getAll);
router.get('/:id', ventaController.getById);
router.post('/', ventaController.insert);
router.put('/:id', ventaController.update);
router.delete('/:id', ventaController.delete);

export default router; 