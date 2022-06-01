'use strict'

import app from './app.js'
import {generalConfig} from './config/generalConfig.js'
import { connect } from './persistence/mongoConnection.js'
import {connectRedis} from './persistence/redisConnection.js'


(async () => {
    await connect() 
})();

(async () => {
    await connectRedis()
})();

const PORT = generalConfig.port || 3000
const HOST = generalConfig.host || '0.0.0.0'
app.listen(PORT, HOST, ()=>{
console.log(`Runing on port ${HOST},${PORT}`)
})