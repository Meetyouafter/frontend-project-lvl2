install:
    npm init

lint:
	npx eslint

test:
    npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish