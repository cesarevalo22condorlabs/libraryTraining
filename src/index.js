'use strict'

const app = require("./app")

const PORT = 3000
const HOST = '0.0.0.0'
app.listen(PORT, HOST, ()=>{
console.log(`Runing on port ${HOST},${PORT}`)
})