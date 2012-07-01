"use strict";

var FF = require('./fun-factory');

// adapted from https://github.com/jayferd/pjs

var Animal = FF(function(name){
	// constructor
	this.name = name;
}, function(animal){
	animal.move = function(meters){
		console.log(this.name + " moved " + meters + "m.");
	}
});

// create a Snake
// inherit from Animal.
var Snake = FF(Animal, null, function(snake, animal){
	snake.move = function(){
		console.log("Slithering...");
		animal.move.call(this, 5);
	};
});

// and a horse
var Horse = FF(Animal, null, function(horse, animal){

	// private function
	var privateLog = function(self, msg){
		console.log(self.name + ' is ' + msg);
	};

	horse.move = function() {
		privateLog(this, "Galloping...");
		animal.move.call(this, 45);
	};
});

var sam = new Snake("Sammy the Python"),
	tom = new Horse("Tommy the Palomino");

sam.move();
tom.move();
