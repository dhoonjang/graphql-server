import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const options = {
  port: 7777,
  endpoint: '/'
}

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(options, () => console.log("Graphql Server Running on port:7777"));
