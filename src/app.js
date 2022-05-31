import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import responseTime from 'response-time'
import schema from './Infraestructure/schemaGraph.js'
import { connect } from './persistence/mongoConnection.js'
import {connectRedis} from './persistence/redisConnection.js'


const app = express();






app.use(express.urlencoded({extended:false}));
app.use(express.json());

//header measure time for redis
app.use(responseTime());



(async () => {
    await connect() 
})();

(async () => {
    await connectRedis()
})();

//app.use routes
app.use("/books", graphqlHTTP({
    graphiql:true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

export default app