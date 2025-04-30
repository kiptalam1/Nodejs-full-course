// module.exports
// require

const firstModule = require("./first-module");

console.log(firstModule.add(10, 20)); // 30

try {
	console.log("trying to divide by zero");

	let result = firstModule.divide(100, 0);
	console.log("result" + result);
} catch (error) {
	console.log("caught an error", error.message); // caught an error division by zero not allowed
}

//module wrapper function

// (function (exports, require, module, __filename, __dirname) {
// 	//module code goes here
// });
