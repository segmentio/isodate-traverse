
BIN := node_modules/.bin

test:
	$(BIN)/mochify --phantomjs $(BIN)/phantomjs --reporter spec test/tests.js

bundle.js: index.js node_modules
	$(BIN)/browserify $< > $@

node_modules: package.json
	npm install
	touch $@

clean:
	rm -f bundle.js

distclean: clean
	rm -rf node_modules

.PHONY: test clean distclean
