import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['available', 'unavailable','lent']
    }
})

export default mongoose.model('Book', bookSchema)
