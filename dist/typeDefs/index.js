"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var graphql = require('graphql');
var GraphQLString = graphql.GraphQLString, GraphQLInt = graphql.GraphQLInt, GraphQLObjectType = graphql.GraphQLObjectType, GraphQLSchema = graphql.GraphQLSchema;
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  type Book {\n    title: String\n    author: String\n  }\n\ntype Query {\n   books: [Book]\n}\n"], ["\n\n  type Book {\n    title: String\n    author: String\n  }\n\ntype Query {\n   books: [Book]\n}\n"])));
module.exports = { typeDefs: typeDefs };
var templateObject_1;
