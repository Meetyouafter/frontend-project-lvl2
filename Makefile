install:
	npm init

lint:
	npx eslint

test:
	npx jest

test-coverage:
	npm test -- --coverage

publish:
	npm publish