const fs = require("fs");
const path = require("path");

// creating a folder.
const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
	fs.mkdirSync(dataFolder);
	console.log("data folder created.");
}

//SYNCHRONOUS WAYS.
//creating a file.
const filePath = path.join(dataFolder, "example.txt");

// writing to the file.
fs.writeFileSync(filePath, "Hello from index js");
console.log("file created successfully");

// reading from a file.
const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File content: ", readContentFromFile);

//updating file content.
fs.appendFileSync(filePath, "\n This is a new line added to the file.");
console.log("new file content added!");

//ASYNC WAYS.
//asynchronous way of creating a file.
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello from async index.js", (err) => {
	if (err) throw err;
	console.log("Async file created successfully");
});
fs.readFile(asyncFilePath, "utf-8", (err, data) => {
	if (err) throw err;
	console.log("Async file content:", data);

	fs.appendFile(asyncFilePath, "\nThis is another file added", (err) => {
		if (err) throw err;
		console.log("New line added to async file.");
	});
});
