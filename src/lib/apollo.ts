import { ApolloServer, ApolloServerPlugin } from "@apollo/server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { resolvers as generatedResolvers } from "prisma/generated/type-graphql";

const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
    resolvers: generatedResolvers,
    globalMiddlewares: [
    ({ context, info }, next) => {
      if (info.operation.operation === "mutation") {
        throw new Error("Not authorized.");
      }

      return next();
    },
  ],
});

const plugins: ApolloServerPlugin[] = [];
if (process.env.NODE_ENV === "development") {
  plugins.push(ApolloServerPluginLandingPageGraphQLPlayground() as any);
}

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins,
});
