import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './Infraestructure/schemaGraph'
import { connect } from './persistence/database'

const app = express()
connect()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//app.use routes
app.use("/library", graphqlHTTP({
    graphiql:true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

module.exports = app