const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./resolvers/index')
const { typeDefs } = require('./typeDefs/index')

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});