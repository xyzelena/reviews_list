install:
	npm ci

build:
	rm -rf ./build
	npm run build

start:
	npm run start

lint:
	npm run lint