const express = require("express");
const app = express();

//middleware
app.use(express.json());

let books = [
	{ id: "1", title: "book 1" },
	{ id: "2", title: "book 2" },
];

//routes
//intro route
app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our bookstore api",
	});
});

// get all books
app.get("/get", (req, res) => {
	res.json(books);
});

//get single book
app.get("/get/:id", (req, res) => {
	const book = books.find((item) => item.id === req.params.id);
	if (book) {
		res.status(200).json(book);
	} else {
		res.status(404).json({ message: "Book not found!" });
	}
});

//add new book
app.post("/add", (req, res) => {
	const newBook = {
		id: Math.floor(Math.random() * 1000).toString(),
		title: `Book ${Math.floor(Math.random() * 1000)}`,
	};
	books.push(newBook);
	res.status(200).json({ data: newBook, message: "new book added" });
});

//update a book
app.put("/update/:id", (req, res) => {
	const findCurrentBook = books.find((book) => book.id === req.params.id);
	if (findCurrentBook) {
		findCurrentBook.title = req.body.title || findCurrentBook.title;
		res.status(200).json({
			message: "book updated successfully",
			data: findCurrentBook,
		});
	} else {
		res.status(404).json({ message: "book bot found" });
	}
});

//delete a book
app.delete("/delete/:id", (req, res) => {
	const findIndexOfBook = books.findIndex((item) => item.id === req.params.id);
	console.log(findIndexOfBook);
	if (findIndexOfBook !== -1) {
		const deleteBook = books.splice(findIndexOfBook, 1);
		res.status(200).json({
			message: "book deleted successfully",
			data: deleteBook[0],
		});
	} else {
		res.json({
			message: "book not found!",
		});
	}
});

app.listen(3000, () => {
	console.log("server running at 3000");
});
