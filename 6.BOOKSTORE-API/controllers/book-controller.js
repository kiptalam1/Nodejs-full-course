const express = require("express");
const Book = require("../models/book");

//book controllers
const getAllBooks = async (req, res) => {
	try {
		const allBooks = await Book.find({});
		if (allBooks?.length > 0) {
			res.status(200).json({
				success: true,
				message: "Books fetched successfully",
				data: allBooks,
			});
		} else {
			res.status(404).json({
				success: false,
				message: "No books found!",
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Something went wrong, please try again",
		});
	}
};
const getSingleBook = async (req, res) => {
	try {
		const getCurrentBookId = req.params.id;
		const bookDetailsById = await Book.findById(getCurrentBookId);

		if (!bookDetailsById) {
			return res.status(404).json({
				success: false,
				message: "Book with the ID is not found. Please try different Id",
			});
		}

		res.status(200).json({
			success: true,
			data: bookDetailsById,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Something went wrong, please try again",
		});
	}
};
const addNewBook = async (req, res) => {
	try {
		// console.log("📦 Request Body:", req.body);
		const newBookFormData = req.body;
		const newBook = await Book.create(newBookFormData);
		if (newBook) {
			res.status(201).json({
				success: true,
				message: "Book added successfully.",
				data: newBook,
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Something went wrong, please try again",
		});
	}
};

const updateBook = async (req, res) => {
	try {
		const updatedBookFormData = req.body;
		const getCurrentBookId = req.params.id;
		const updatedBook = await Book.findByIdAndUpdate(
			getCurrentBookId,
			updatedBookFormData,
			{ new: true }
		);
		if (!updatedBook) {
			res.status(404).json({
				success: false,
				message: "Book with this ID not found!",
			});
		}

		res.status(200).json({
			success: true,
			message: "Book updated successfully",
			data: updatedBook,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Something went wrong, please try again",
		});
	}
};
const deleteBook = async (req, res) => {
	try {
		const getCurrentBookId = req.params.id;
		const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

		if (!deletedBook) {
			res.status(404).json({
				success: false,
				message: "Book with this ID not found!",
			});
		}

		res.status(200).json({
			success: true,
			data: deletedBook,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Something went wrong, please try again",
		});
	}
};

module.exports = {
	getAllBooks,
	getSingleBook,
	updateBook,
	deleteBook,
	addNewBook,
};
