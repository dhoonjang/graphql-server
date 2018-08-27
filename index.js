import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import { pushPeople } from "./graphql/db"
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/graphqlDB", { useNewUrlParser: true })
  .then(() => {
    console.log("mongo connect");
  });

const options = {
  port: 7777,
  endpoint: '/'
}

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(options, () => console.log("Graphql Server Running on port:7777"));
