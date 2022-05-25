import Book from '../persistence/models/books.js'

export const resolvers = {
    Query:{
         listBooks: async () => {
            return await Book.find()
        }, 
        getBooks: () => {
            return 'getBooks'
        }   
    },

    Mutation:{
        createBook: () => {
            return 'createBook'
        },

        updateBook: () => {
            return 'updateBook'
        },
        
        modifyBook: () => {
            return 'modifyBook'
        },

        deleteBook: () => {
            return 'deleteBook'
        }
    }
    

}