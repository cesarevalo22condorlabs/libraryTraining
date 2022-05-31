const mongodb = require("@condor-labs/mongodb")();

const bookSchema = mongodb.mongoose.Schema({
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
const book = mongodb.mongoose.model('Book', bookSchema)

export default book
