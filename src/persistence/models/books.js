import {Schema, model} from "mongoose"

const bookSchema = new Schema({
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

export default model('Book', bookSchema)
