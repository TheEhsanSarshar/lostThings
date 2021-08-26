import { ApolloServer, gql } from 'apollo-server-express';
const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLSchema } = graphql;

const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

type Query {
   books: [Book]
}
`;

module.exports = { typeDefs };
