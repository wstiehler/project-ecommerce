PROJECT_NAME := "project-ecommerce"


.PHONY: all dep build clean lint

all: build

setup:
	@npm i npm-check-updates -g
	@npm install

update-dependencys:
	@rm -rf node_modules
	@npx ncu
	@npx ncu -u

dev-start-backend:
	@npx json-server --watch database.json

local-server: 
	@ng serve

production-build:
	@ng build --configuration production

production-server:
	@ng serve --configuration production