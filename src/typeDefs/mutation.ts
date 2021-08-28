import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Mutation {
    createProduct(product: ProductInput): Product
    
  }

`

module.exports = { typeDefs }
