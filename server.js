const modPath = require('app-module-path');
modPath.addPath(`${__dirname}`);

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const cors = require('cors');
const petsRoute = require('routes/pets');
const tryToCatch = require('try-to-catch');

module.exports = async ({serverPort}) => {
	const {urlencoded, json} = bodyParser;
	const app = express();
	app.use(cors());


	app.use(helmet());
	app.use('/api/pets', petsRoute);
	app.use(urlencoded && urlencoded({
		extended: false
	}));
	app.use(json && json());

	const appListen = app.listen.bind(app);
	return await tryToCatch(appListen, serverPort);
};
