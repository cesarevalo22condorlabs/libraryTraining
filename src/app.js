import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import responseTime from 'response-time'
import schema from './Infraestructure/schemaGraph.js'
import { connect } from './persistence/database.js'
import client from './redis.js'


const app = express()

connect()

client.connect()


app.use(express.urlencoded({extended:false}))
app.use(express.json())

//header measure time for redis
app.use(responseTime())



//app.use routes
app.use("/books", graphqlHTTP({
    graphiql:true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

export default app