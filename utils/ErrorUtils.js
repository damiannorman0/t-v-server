

const errorUtils = {
	handle: (res, next, error) => {
		const e = error || {
			name: 'notFound'
		};

		console.log('errpr');
		console.log(e);

		const {name = '', message = ''} = e;
		const normalized = name.toLowerCase();
		const func = ref[normalized] || errorUtils[normalized];

		return func({res, next, mess:message});
	},

	invalid: ({res, next, mess}) => {
		const message = mess || 'invalid request';
		const e = new Error(message);
		e.status = 400;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 400;
		next(e);
	},

	duplicate: ({res, next, id = -1, mess}) => {
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

	notFound: ({res, next, mess}) => {
		const message = mess || 'document does not exist';
		const e = new Error(message);
		e.status = 404;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 404;
		next(e);
	},

	missingParam: ({param, res, next, mess}) => {
		const message = mess || `invalid request, missing param: ${param}`;
		const e = new Error(message);
		e.status = 400;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 400;
		next(e);
	},

	invalidGeo: ({res, next, mess}) => {
		const message = mess || 'invalid  geo data';
		const e = new Error(message);
		e.status = 400;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 400;
		next(e);
	},

	permissionDenied: ({res, next, extra = '', mess}) => {
		const message = mess || `permission denied ${extra}`;
		const e = new Error(message);
		e.status = 401;

		if(!res || !next) {
			return e;
		}

		res.statusCode = 401;
		next(e);
	},

	saveError: ({res, next, mess}) => {
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
