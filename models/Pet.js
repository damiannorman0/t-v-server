const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sanitizeJSON = require('mongoose-sanitize-json');

const petSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	meta: {},
	created_at: Date,
	updated_at: Date
});

petSchema.index({
	name: 'text'
});

petSchema.plugin(sanitizeJSON);
module.exports = mongoose.model('Pet', petSchema);

