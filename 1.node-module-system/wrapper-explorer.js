console.log("node module wrapper demo");

console.log("__filename", __filename);

console.log("__dirname", __dirname);

module.exports.greet = (name) => {
	console.log("hello", name);
};
