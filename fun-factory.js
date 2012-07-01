"use strict";

var prime = require('prime');

var FF = function(inherits, constructor, factory){

	// shift arguments

	// only the factory function
	if (arguments.length == 1){
		factory = inherits;
		inherits = null;
	}

	// constructor and factory
	if (arguments.length == 2){
		factory = constructor;
		constructor = inherits;
		inherits = null;
	}

	// build proto object

	var proto = {};
	if (constructor) proto.constructor = constructor;
	if (inherits) proto.inherits = inherits;

	// create prime

	var prim = prime(proto);

	// call factory

	prim.mixin = function(factory){
		factory(prim.prototype, inherits && inherits.prototype, prim, inherits);
		return prim;
	}

	return prim.mixin(factory);

};

module.exports = FF;
