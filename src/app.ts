// Imports
	// Main
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import favicon from 'serve-favicon'
	//Routes
import router from './routes/web';

// Initialization
const app = express();

// Settings
const { HOST, PORT } = process.env;
app.set('HOST', HOST || '127.0.0.1');
app.set('PORT', PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.listen(3000, () => {
	console.log('Server on http://' + HOST + ':' + PORT + '/');
});