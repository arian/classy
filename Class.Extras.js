
var Class = require('./index');
var array = require('prime/es5/array');

exports.Chain = new Class({

	$chain: [],

	chain: function(){
		for (var i = 0; i < arguments.length; i++){
			if (array.isArray(arguments[i])) this.chain.apply(this, arguments[i]);
			else this.$chain.push(arguments[i]);
		}
		return this;
	},

	callChain: function(){
		return (this.$chain.length) ? this.$chain.shift().apply(this, arguments) : false;
	},

	clearChain: function(){
		this.$chain.length = 0;
		return this;
	}

});

var removeOn = function(string){
	return string.replace(/^on([A-Z])/, function(full, first){
		return first.toLowerCase();
	});
};

exports.Events = new Class({

	$events: {},

	addEvent: function(type, fn, internal){
		type = removeOn(type);

		var events = this.$events[type];
		if (!events) events = this.$events[type] = [];
		if (array.indexOf(events, fn) == -1) events.push(fn);

		if (internal) fn.internal = true;
		return this;
	},

	addEvents: function(events){
		for (var type in events) this.addEvent(type, events[type]);
		return this;
	},

	fireEvent: function(type, args, delay){
		type = removeOn(type);
		var events = this.$events[type], self = this;
		if (!events) return this;
		if (!array.isArray(args)) args = [args];
		array.forEach(events, function(fn){
			if (delay){
				setTimeout(function(){
					fn.apply(self, args);
				}, delay)
			} else fn.apply(this, args);
		}, this);
		return this;
	},

	removeEvent: function(type, fn){
		type = removeOn(type);
		var events = this.$events[type];
		if (events && !fn.internal){
			var index =  array.indexOf(events, fn);
			if (index != -1) delete events[index];
		}
		return this;
	},

	removeEvents: function(events){
		var type;
		if (typeof events == 'object'){
			for (type in events) this.removeEvent(type, events[type]);
			return this;
		}
		if (events) events = removeOn(events);
		for (type in this.$events){
			if (events && events != type) continue;
			var fns = this.$events[type];
			for (var i = fns.length; i--;) if (i in fns){
				this.removeEvent(type, fns[i]);
			}
		}
		return this;
	}

});

exports.Options = new Class({

	setOptions: function(options){
		if (arguments.length > 1) for (var i = 0; i < arguments.length; i++) this.setOptions(arguments[i]);
		else {

			if (!this.options) this.options = options;
			else for (var k in options) this.options[k] = options[k];

			if (this.addEvent) for (var option in options){
				if (typeof options[option] != 'function' || !(/^on[A-Z]/).test(option)) continue;
				this.addEvent(option, options[option]);
				delete options[option];
			}
		}
		return this;
	}

});
