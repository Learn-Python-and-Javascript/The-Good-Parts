// Chapter 3: Object
// - Object Literals
var empty_object = {};

var stooge = {
	"first-name": "Joe",
	"last-name": "Howard" 
};

var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};

// - Retrieval --> Chrome Brower Dev Tool
// - Update

stooge['first-name'] = 'Jerome';

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
	model: 'Boeing 777'
};
flight.status = 'overdue';

// - Reference

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
	// nick is 'Curly' because x and stooge
	// are reference to the same object 

var a = {}, b = {}, c = {};
	// a, b, and c each refer to a
	// different empty object 
a = b = c = {};
	// a, b, and c all refer to 
	// the same empty object 

// - Prototype

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';