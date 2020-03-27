const colors = require('colors/safe');

module.exports = {
	error: (msg = '') => {
		return (colors.brightRed(`**ERROR: ${msg.toUpperCase()}!**`));
	},
	success: (msg = '') => {
		return (colors.brightYellow(`SUCCESS: ${msg.toUpperCase()}!`));
	}
};
