import Book from '../persistence/models/books.js'
import * as bookUseCase from './useCase/booksUseCase.js'

export const resolvers = {
    Query:{
         listBooks: async () => {
            return await Book.find()
        }, 
        getBooks: (_, id) => {
            return bookUseCase.getBooks(id)
        }   
    },

    Mutation:{
        createBook: async (_,{input}) => {
            console.log("input", input)
            return await bookUseCase.createBook (input)
        },

        updateBook: async (_, {input}) => {
            return await bookUseCase.updateBook(input)
        },
        
        deleteBook: async (_, _id) => {
            return await bookUseCase.deleteBook(_id)
        }
    }
    

}