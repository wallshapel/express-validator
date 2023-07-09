import { Request, Response } from 'express';
import { indexService, registerService } from '../services/registerService';
import { handleHttp } from '../utils/error';

const indexController = (_req: Request, res: Response) => {
	try {
		const response = indexService(res); 
		res.send(response);	
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

const registerController = (_req: Request, res: Response) => {
	try {	
		const response = registerService(res); 
		res.send(response);	
	} catch (e: any) {
		handleHttp(res, e.message);	
	}
};

export { indexController, registerController };