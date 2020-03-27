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


const data = [
	[
		1,
		"Fuzzy",
		"14.2",
		"03.4"
	],
	[
		2,
		"Pupcake",
		"5.3",
		"03.4"
	],
	[
		3,
		"Peanut",
		"09.9",
		"13.6"
	],
	[
		4,
		"Max",
		"15.0",
		"06.8"
	],
	[
		5,
		"Penny",
		"16.8",
		"10.4"
	],
	[
		6,
		"Catamari",
		"00.0",
		"04.2"
	],
	[
		7,
		"Toby",
		"00.4",
		"01.3"
	],
	[
		8,
		"Brady",
		"11.8",
		"00.6"
	],
	[
		9,
		"Jack",
		"00.0",
		"03.7"
	],
	[
		10,
		"Ruffington",
		"07.7",
		"09.7"
	],
	[
		11,
		"Tamekah",
		"14.8",
		"02.1"
	],
	[
		12,
		"Kyle",
		"15.8",
		"06.7"
	],
	[
		13,
		"Matthew",
		"04.0",
		"07.7"
	],
	[
		14,
		"Wyatt",
		"18.4",
		"01.4"
	],
	[
		15,
		"Louis",
		"19.0",
		"07.0"
	],
	[
		16,
		"Nathaniel",
		"03.8",
		"10.3"
	],
	[
		17,
		"Harriet",
		"03.9",
		"09.3"
	],
	[
		18,
		"Xanthus",
		"12.1",
		"11.0"
	],
	[
		19,
		"Chaim",
		"13.6",
		"02.7"
	],
	[
		20,
		"Bianca",
		"07.3",
		"05.4"
	],
	[
		21,
		"Stewart",
		"09.7",
		"09.7"
	],
	[
		22,
		"Maisie",
		"15.2",
		"05.4"
	],
	[
		23,
		"Benedict",
		"09.2",
		"02.1"
	],
	[
		24,
		"Quincy",
		"08.4",
		"06.3"
	],
	[
		25,
		"Lesley",
		"18.7",
		"00.9"
	],
	[
		26,
		"Zia",
		"15.2",
		"13.4"
	],
	[
		27,
		"Zephr",
		"17.2",
		"06.8"
	],
	[
		28,
		"Quincy",
		"16.9",
		"09.5"
	],
	[
		29,
		"Byron",
		"12.0",
		"02.5"
	],
	[
		30,
		"Arthur",
		"16.2",
		"02.4"
	],
	[
		31,
		"Noble",
		"20.6",
		"14.5"
	],
	[
		32,
		"Wanda",
		"19.4",
		"12.7"
	],
	[
		33,
		"Charlotte",
		"17.8",
		"14.0"
	],
	[
		34,
		"Jeanette",
		"06.6",
		"09.9"
	],
	[
		35,
		"Germaine",
		"12.4",
		"00.9"
	],
	[
		36,
		"Ryan",
		"17.6",
		"08.9"
	],
	[
		37,
		"Raya",
		"02.1",
		"06.3"
	],
	[
		38,
		"Nelle",
		"03.1",
		"04.2"
	],
	[
		39,
		"Orlando",
		"19.4",
		"06.8"
	],
	[
		40,
		"Emery",
		"15.1",
		"12.6"
	],
	[
		41,
		"Mary",
		"11.3",
		"00.0"
	],
	[
		42,
		"Julian",
		"17.7",
		"04.6"
	],
	[
		43,
		"Keane",
		"01.1",
		"13.1"
	],
	[
		44,
		"Pandora",
		"18.9",
		"02.5"
	],
	[
		45,
		"Jin",
		"18.5",
		"02.0"
	],
	[
		46,
		"Brock",
		"09.6",
		"10.8"
	],
	[
		47,
		"Chloe",
		"13.8",
		"02.4"
	],
	[
		48,
		"Kane",
		"07.0",
		"12.7"
	],
	[
		49,
		"Craig",
		"08.8",
		"14.1"
	],
	[
		50,
		"Randall",
		"10.5",
		"02.9"
	],
	[
		51,
		"Tallulah",
		"10.0",
		"02.6"
	],
	[
		52,
		"Melvin",
		"07.3",
		"14.8"
	],
	[
		53,
		"Dahlia",
		"06.3",
		"05.7"
	],
	[
		54,
		"Lane",
		"11.4",
		"00.0"
	],
	[
		55,
		"Veda",
		"04.7",
		"03.4"
	],
	[
		56,
		"Claudia",
		"10.9",
		"08.1"
	],
	[
		57,
		"Emmanuel",
		"16.3",
		"00.5"
	],
	[
		58,
		"Kylee",
		"15.5",
		"00.5"
	],
	[
		59,
		"Hanna",
		"20.4",
		"07.0"
	]
];

const petsPostData = data.map(item => {
	return {
		"internalID": item[0],
		"name": item[1],
		"weight": item[2],
		"age": item[3]
	}
});


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
				console.error(err);
			} else {
				console.log("Multiple documents inserted to Collection");
				console.log(reponse);
			}
			done();
		});

		setTimeout(() => {
			done();
		}, 2000)
	});

	describe('/GET pets', () => {
		it('it should GET all the pets', (done) => {
			done();
		})
	});
});
