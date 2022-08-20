PROJECT_NAME := "project-ecommerce"


.PHONY: all dep build clean lint

all: build

dev-start-project:
	@ng serve

dev-start-backend:
	@npx json-server --watch database.json
