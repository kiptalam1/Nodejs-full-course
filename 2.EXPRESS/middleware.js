const express = require("express");

// initialize app.
const app = express();

// define middleware function
const myFirstMiddleware = (req, res, next) => {
	console.log("this first middleware will run on every request");

	next();
};

app.use(myFirstMiddleware);

// root route
app.get("/", (req, res) => {
	res.send("welcome to our homepage");
});

//about route
app.get("/about", (req, res) => {
	res.send("welcome to our about");
});

// listen to app.
const port = 3000;
app.listen(port, () => {
	console.log("listening at port", port);
});
