const express = require("express");
const path = require("path");

const app = express();

// set view engine as ejs
app.set("view engine", "ejs");

// set the views directory
app.set("views", path.join(__dirname, "views"));

const products = [
	{
		id: 1,
		label: "product 1",
	},
	{
		id: 2,
		label: "product 2",
	},
	{
		id: 3,
		label: "product 3",
	},
];

app.get("/", (req, res) => {
	res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About Page" });
});

app.listen(3000, () => {
	console.log("server running");
});
