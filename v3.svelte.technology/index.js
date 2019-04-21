const http = require('http');

const dest = `https://svelte.dev`;

const server = http.createServer((req, res) => {
	res.writeHead(301, {
		'Location': `${dest}${req.url}`
	});

	res.end();
});

server.listen(4000);