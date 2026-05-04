const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");

/* ADD BOOK */
router.get("/add", async (req, res) => {
    const book = new Book({
        title: "Harry Potter",
        author: "J.K Rowling",
        price: 500,
        genre: "Fantasy"
    });
    await book.save();
    res.send("Book Added");
});

/* VIEW ALL BOOKS */
router.get("/books", async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

/* UPDATE BOOK */
router.get("/update", async (req, res) => {
    await Book.updateOne(
        { title: "Harry Potter" },
        { price: 700 }
    );
    res.send("Book Updated");
});

/* DELETE BOOK */
router.get("/delete", async (req, res) => {
    await Book.deleteOne({ title: "Harry Potter" });
    res.send("Book Deleted");
});

module.exports = router;