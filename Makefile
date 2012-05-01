
all: test build build-min

build:
	@./node_modules/wrapup/bin/wrup.js -r Class ./ > classy.js
	@echo "Browser version written to 'classy.js'"

build-min:
	@./node_modules/wrapup/bin/wrup.js -r Class ./ --compress > classy.min.js
	@echo "Browser version written to 'classy.min.js'"

test:
	@./node_modules/mocha/bin/mocha tests.js


