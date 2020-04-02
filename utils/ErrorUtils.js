

const errorUtils = {
	handle: ({req, res, next, error}) => {
		const e = error || {
			name: 'notFound'
		};

		const {name = '', message:mess = ''} = e;
		const normalized = name.toLowerCase();
		const func = ref[normalized] || errorUtils[normalized];

		return func({req, res, next, mess});
	},

	invalid: ({req, res, next, mess}) => {
		const message = mess || 'invalid request';
		const e = new Error(message);
		e.status = 400;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 400;

		if (req.accepts('json')) {
			next('invalid request');
			return;
		}

		next(e);
	},

	duplicate: ({req, res, next, id = -1, mess}) => {
		const message = mess || `document already exists: ${id}`;
		const e = new Error(message);
		e.status = 409;
		e.extra = id;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 409;
		next(e);
	},

	notFound: ({req, res, next, mess}) => {
		const message = mess || 'document does not exist';
		const e = new Error(message);
		e.status = 404;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 404;

		if (req.accepts('json')) {
			next('not found');
			return;
		}

		next(e);
	},

	missingParam: ({param, req, res, next, mess}) => {
		const message = mess || `invalid request, missing param: ${param}`;
		const e = new Error(message);
		e.status = 400;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 400;
		next(e);
	},

	invalidGeo: ({req, res, next, mess}) => {
		const message = mess || 'invalid  geo data';
		const e = new Error(message);
		e.status = 400;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 400;
		next(e);
	},

	permissionDenied: ({req, res, next, extra = '', mess}) => {
		const message = mess || `permission denied ${extra}`;
		const e = new Error(message);
		e.status = 401;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 401;
		next(e);
	},

	saveError: ({req, res, next, mess}) => {
		const message = mess || 'error on save';
		const e = new Error(message);
		e.status = 500;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 500;
		next(e);
	}
};

const ref = {
	'casterror': errorUtils.invalid,
	'notfound': errorUtils.notFound
};


module.exports = errorUtils;
