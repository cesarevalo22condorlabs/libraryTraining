

export const resolvers = {
    Query:{
        listBooks: () => {
            return 'list books'
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