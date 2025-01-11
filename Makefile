.PHONY: default

default:
	@echo "No default recipe."

client:
	bun run --filter client dev

serve:
	bun --inspect run ./pkgs/server/src/main.ts

fmt:
	cd ./pkgs/client && bun run format
	cd ./pkgs/server && bun run format

services:
	docker-compose up -d

services-down:
	docker-compose down
	docker ps
