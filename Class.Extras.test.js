
var Class   = require('./');
var extras  = require('./Class.Extras');
var Events  = extras.Events;
var Options = extras.Options;
var Chain   = extras.Chain;

// events
var fn = function(){
console.log('hi');
};
var events = new Events();
events.addEvent('click', fn);
events.fireEvent('click');
events.removeEvent('click', fn);

// options
var options = new Options();
options.setOptions({
	hi: 'foo'
}, {
	bar: 'bar'
});
console.log(options.options);

// chain
var chain = new Chain();
chain.chain(fn, fn, fn);
chain.chain([fn, fn, fn]);
for (var i = 4; i--;) chain.callChain();
chain.clearChain();

// Implements

var MyClass = new Class({

	Implements: [Chain, Events, Options],

	options: {
		a: 1,
		b: 1
	},

	initialize: function(options){
		this.setOptions(options)
	}

});

var myClass = new MyClass({
	b: 2,
	c: 3,
	onClick: function(){
		console.log('clicky')
	}
});

myClass.fireEvent('clicky');

console.log(myClass);

