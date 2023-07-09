// Imports
	// Main
import { Router } from 'express';
	// Middlewares
import rulers from '../middlewares/registerValidator';
	// Controllers
import { indexController, registerController } from '../controllers/registerController';

// Initializations
const router = Router();

// Routes
router.get('/', indexController);
router.post('/register', rulers, registerController);

export default router;