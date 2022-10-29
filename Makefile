

dev: ./node_modules/netlify-cli/bin/run.mjs
	BROWSER=none ./node_modules/netlify-cli/bin/run.mjs dev

open:
	open https://www.localtest.me:8888

./node_modules/netlify-cli/bin/run.mjs:
	npm i
