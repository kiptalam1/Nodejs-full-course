const express = require("express");

const app = express();

//application level settings
app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
	res.send("Hello home");
});

app.post("/api/data", (req, res) => {
	res.json({
		message: "data received",
		data: req.body,
	});
});

// error handling.
app.use((err, req, res, next) => {
	console.log(err.stack);
	res.status(500).send("Something went wrong");
});

// listen to app.
app.listen(port, () => {
	console.log("listening at port", port);
});
