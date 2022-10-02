import { ApolloServer } from 'apollo-server'

import typeDefs from './schema'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
})

const url = 'https://zlp-api.herokuapp.com/'
server.listen(process.env.PORT || 8000).then(() => {
  console.log(`🚀  Server ready at ${url}`)
})
