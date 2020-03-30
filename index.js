#!/usr/bin/env node

global.__basedir = __dirname;
const modPath = require('app-module-path');
modPath.addPath(`${__dirname}`);

const {Console} = require('console');
const console = new Console(process.stdout, process.stderr);
const cluster = require('cluster');

const {error, success} = require('utils/console');
const tryToCatch = require('try-to-catch');

const path = '.env';
const dotenv = require('dotenv');
dotenv.config({
	path
});
const {env = {}} = process;
const {DB_CONNECT, SERVER_PORT, NUM_WORKERS} = env;

//server access
const runServer = async () => {
	const dbConnect = DB_CONNECT || 'mongodb://localhost:27017';
	const db = require('db');
	const result = await db(dbConnect);

	!result && process.exit();
	console.log('DB connected: ' + result);

	const server = require('server');
	const serverPort = SERVER_PORT || 7000;
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
	const processes = cluster.isMaster ? getForks(cluster.fork, NUM_WORKERS || 1) : runServer;
	processes && processes();
};

server();
