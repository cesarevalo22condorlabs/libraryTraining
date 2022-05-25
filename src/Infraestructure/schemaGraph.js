import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type prueba {
      test:String
}

`

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers: resolvers
})
    
    