export IHSELECTRIC_FRONTEND_VERSION=$$(git rev-parse --short HEAD)
export IHSELECTRIC_FRONTEND_IMAGE="ihselectric-front:${IHSELECTRIC_FRONTEND_VERSION}"
export IHSELECTRIC_API_VERSION=$((git rev-parse --short HEAD))
export IHSELECTRIC_API_IMAGE="ihselectric-api:${IHSELECTRIC_FRONTEND_VERSION}"

build: build-front build-api

build-front:
	rm -rf docker/frontend/target
	mkdir -p docker/frontend/target
	cp -r .env package.json src *.js docker/frontend/target
	cd docker/frontend && docker build --rm -t ${IHSELECTRIC_FRONTEND_IMAGE} .
	docker tag ${IHSELECTRIC_FRONTEND_IMAGE} ihselectric-front:latest

build-api:
	rm -rf docker/api/target
	mkdir -p docker/api/target
	cp api/.env api/package.json api/index.js docker/api/target
	cd docker/api && docker build --rm -t ${IHSELECTRIC_API_IMAGE} .
	docker tag ${IHSELECTRIC_API_IMAGE} ihselectric-api:latest
