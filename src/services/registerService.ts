// Main
import { Response } from 'express';

// Actions
const indexService = (res: Response) => {
	return res.render('index');
};

const registerService = (res: Response) => {
 	return res.render('register');
};

export { indexService, registerService };