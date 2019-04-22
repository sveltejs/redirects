const http = require('http');

const dest = `https://svelte.dev`;

const server = http.createServer((req, res) => {
	const url = req.url === '/guide' ? '/docs' : req.url;

	res.writeHead(301, {
		'Location': `${dest}${url}`
	});

	res.end();
});

server.listen(4000);
