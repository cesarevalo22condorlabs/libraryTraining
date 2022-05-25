import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import responseTime from 'response-time'
import schema from './Infraestructure/schemaGraph'
import { connect } from './persistence/database'
import redis from 'redis'

const app = express()
connect()

const client = redis.createClient()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//header measure time for redis
app.use(responseTime())

//app.use routes
app.use("/library", graphqlHTTP({
    graphiql:true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

module.exports = app