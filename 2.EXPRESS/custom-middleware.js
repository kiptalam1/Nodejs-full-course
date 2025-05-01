const express = require("express");

// initialize app.
const app = express();

// define middleware function
const requestTimeStampLogger = (req, res, next) => {
	const timeStamp = new Date().toISOString();
	console.log(`${timeStamp} from ${req.method} to ${req.url}`);

	next();
};

app.use(requestTimeStampLogger);

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
