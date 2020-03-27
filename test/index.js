const { Console } = require('console');
const console = new Console(process.stdout, process.stderr);

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect();

const server = require('../index');

chai.use(chaiHttp);

const Pet = require('../models/Pet');


const petsPostData = [{
	"id" : 11,
	"created_at": "2015-04-21T10:44:51-06:00",
	"end": "2015-04-24T07:30:00-06:00",
	"start": "2015-04-24T07:00:00-06:00",
	"updated_at": "2015-04-21T10:44:51-06:00",
	"name": "Gregory House",
	"type": "cat",
	"conditions": [],
	"image": ""
}, {
	"id" : 12,
	"created_at": "2015-04-21T10:44:51-06:00",
	"end": "2015-04-24T07:30:00-06:00",
	"start": "2015-04-24T07:00:00-06:00",
	"updated_at": "2015-04-21T10:44:51-06:00",
	"name": "Gregory House",
	"type": "cat",
	"conditions": [],
	"image": ""
}];


describe('testing pets', () => {
	before(function (done) {
		//crate one pet
		// const p = new Pet({
		// 	name:"New 1"
		// });
		// p.save({
		// 	name:"New 1"
		// }, (error, response) => {
		// 	console.log(response);
		// 	console.error(error);
		// 	done();
		// });

		Pet.collection.insert(petsPostData, (err, reponse) => {
			if (err){
				return console.error(err);
			} else {
				console.log("Multiple documents inserted to Collection");
				console.log(reponse);
				done();
			}
		});
	});

	describe('/GET pets', () => {
		it('it should GET all the pets', (done) => {
			done();
		})
	});
});
