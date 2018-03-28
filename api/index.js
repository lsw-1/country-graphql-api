const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/Query");

const resolvers = {
  Query
};

const server = new GraphQLServer({
  typeDefs: "./api/schema.graphql",
  resolvers
});
const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};
server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
