const express = require("express");

// initialize app.
const app = express();

// root route
app.get("/", (req, res) => {
	res.send("welcome to our homepage");
});

// get all products
app.get("/products", (req, res) => {
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

	res.json(products);
});

//get individual product.
app.get("/products/:id", (req, res) => {
	const productId = parseInt(req.params.id);
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
	const getSingleProduct = products.find((product) => product.id === productId);
	if (getSingleProduct) {
		res.json(getSingleProduct);
	} else {
		res.status(404).send("product not found");
	}
});

// listen to app.
const port = 3000;
app.listen(port, () => {
	console.log("listening at port", port);
});
