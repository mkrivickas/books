const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    releaseYear: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    listPrice: {
        type: Number,
    },
})

const BookModel = new mongoose.model('books', bookSchema)

module.exports = BookModel
