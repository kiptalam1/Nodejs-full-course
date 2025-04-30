const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req, res);
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello node js http module");
});

server.listen(3000, () => {
	console.log("server listening at port 3000");
});
