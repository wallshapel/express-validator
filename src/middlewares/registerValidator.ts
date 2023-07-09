import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator'; // matchedData Ayuda a sanitizar automátcamente los datos de entrada de parte del usuario

const rulers = [
	body('name')
		.trim()
		.notEmpty()
		.withMessage('The name field is required')
		.isLength({ min: 6, max: 10 })
		.withMessage('The name field must be at least 6 characters and maximum 10'),
	body('email')
		.trim()
		.notEmpty()
		.withMessage('The email field is required')
		.isEmail()
		.withMessage('please enter a valid email'),
	body('age', 'The age field is required')
		.trim()
		.notEmpty()
		.withMessage('The age field is required')
		.isNumeric()
		.withMessage('The age field must be numeric'),
	(_req: Request, res: Response, next: NextFunction) => {
		const errors = validationResult(_req);
		if (!errors.isEmpty()) {
			console.log(_req.body);
			const msgs = errors.array();
			const values = _req.body;
			return res.render('index', { msgs, values });	
		}			
		next();
	}
];

export default rulers;