module.exports = async (dbConnect = '') => {
	const mongoose = require('mongoose');
	const result =  await mongoose.connect(dbConnect, {
				useNewUrlParser: true,
				poolSize: 5,
				autoReconnect: false,
				reconnectTries: 1,
				connectTimeoutMS: 2000
	});

	return mongoose.connection;
};
