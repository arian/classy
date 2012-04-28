Prime with Class
================

Make Prime Classy.

If you're used to MooTools 1.x Class, and think [prime](https://github.com/mootools/prime)
is too basic? Classy will give you your familiar features:

- Mixins (Implements)
- .parent (Will wrap methods)
- Will clone/reset objects and arrays in the prototype to prevent shared objects
- Alias `Implements`, `Extends` and `initialize`
- Tries to be compatible with the MooTools 1.x Class API.

Wrapping functions and reseting are not very elegant however.
I would advice to use the basic `prime` wherever possible.

### TODO

- Implement `Class.Mutators`
- Create another Classy implementation that will break 1.x API
	- I'd rather see a `.parent` without wrapping
	- Don't reset/clone objects
	- Create a nice packages with some nice additional goodies like:
		- Class.Bind (by @cpojer)
		- …

