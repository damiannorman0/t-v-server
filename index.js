#!/usr/bin/env node

global.__basedir = __dirname;
const modPath = require('app-module-path');
modPath.addPath(`${__dirname}`);

const {Console} = require('console');
const console = new Console(process.stdout, process.stderr);
const cluster = require('cluster');

const {error, success} = require('utils/console');
const tryToCatch = require('try-to-catch');


//server access
const runServer = async () => {
	const dbConnect = 'mongodb://localhost:27017';
	const db = require('db');
	const result = await db(dbConnect);

	!result && process.exit();
	console.log('DB connected: ' + result);

	const server = require('server');
	const serverPort = 7000;
	const [serverConnectionError, serverConnected] = await tryToCatch(server, {
		serverPort
	});

	serverConnectionError && console.error(serverConnectionError);
	serverConnected && console.log(serverConnected);

	console.log('Welcome to Televet API...');
	console.log(`Server is running on ${serverPort}`);
};

const server = () => {
	const getForks = (fn, n) => {
		return () => {
			while (n--) fn();
		};
	};
	const processes = cluster.isMaster ? getForks(cluster.fork, 1) : runServer;
	processes && processes();
};

server();
