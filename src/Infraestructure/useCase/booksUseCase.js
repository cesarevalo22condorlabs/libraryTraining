import Book from '../../persistence/models/books.js'


export const listBooks = async() => {
    return await Book.find()
}

export const getBooks = async(id) => {
    return await Book.findById(id)
}

export const createBook = async(bookInput) => {
    const newBook = new Book(bookInput)
    console.log("newBook", newBook)
    await newBook.save()
    return newBook
}

export const updateBook = async(updateBookInput) => {
    return Book.findByIdAndUpdate(updateBookInput._id, updateBookInput)._update
}

export const deleteBook = async(id) => {
    console.log("id", id)
    return await Book.findByIdAndDelete(id)
}


