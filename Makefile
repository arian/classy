
all: test build build-min

build:
	@wrup -r ./ > classy.js
	@echo "Browser version written to 'classy.js'"

build-min:
	@wrup -r ./ --compress > classy.min.js
	@echo "Browser version written to 'classy.min.js'"

test:
	@./node_modules/mocha/bin/mocha tests.js


