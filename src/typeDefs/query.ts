import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    books: [Book]
  }
`
module.exports = { typeDefs }
