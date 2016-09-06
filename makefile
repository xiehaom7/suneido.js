.PHONY: builtins

bundle: runtime/*.js runtime/builtin/*.js
	browserify runtime/su.js -o runtime/su_bundle.js -s su

builtins: runtime/builtin/*.ts
	node devtools/builtins.js $^

test: runtime/*_test.js runtime/builtin/*_test.js
	node runtime/tests.js $^
