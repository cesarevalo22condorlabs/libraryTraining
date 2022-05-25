import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
    type Query {
      listBooks: [Book],
      getBooks(id: ID!): Book
    }


    type Book {
        _id: ID
        title: String
        author: String
        pages: Int
        status: String
    }

    type Mutation {
        createBook(title: String!, author: String!, pages: Int!, status: String!): Book
        updateBook(id: ID!, title: String!, author: String!, pages: Int!, status: String!): Book
        modifyBook(id: ID!, title: String, author: String, pages: Int, status: String): Book
        deleteBook(id: ID!): Book
    }

`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

