import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers.js'

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
        createBook(input: BookInput): Book
        updateBook(input: UpdateBookInput): Book
        deleteBook(_id: ID!): ID
    }

    input BookInput {
        title: String!
        author: String!
        pages: Int!
        status: String!
    }

    input UpdateBookInput{
        _id: ID!
        title: String,
        author: String,
        pages: Int,
        status: String
    }

`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

