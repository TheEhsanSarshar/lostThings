"use strict";
var _a = require('apollo-server'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var resolvers = require('./resolvers/index').resolvers;
var typeDefs = require('./typeDefs/index').typeDefs;
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
