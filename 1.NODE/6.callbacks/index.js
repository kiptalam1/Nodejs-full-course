const fs = require("fs");

function person(name, cb) {
	console.log(`Hello ${name}`);
	cb();
}

function address() {
	console.log("Kenya");
}

person("Adams", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
	if (err) {
		console.log("Error reading file:", err);
	}
	console.log(data);
});
