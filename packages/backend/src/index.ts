import { Elysia } from "elysia";
import { yoga } from "@elysiajs/graphql-yoga";


const app = new Elysia()
  .use(
    yoga({
      typeDefs: require("./types/**/*.graphql"),
      resolvers: require("./resolvers/**/*.ts"),
      context() {
        return {
          livepeerStudio(path: string, method: string, body: {}) {
            return fetch("https://livepeer.studio/api" + path, {
              method,
              body: JSON.stringify(body),
              headers: {
                Authorization: "Bearer " + process.env.LIVEPEER_API_KEY,
              },
            });
          },
        };
      },
    })
  )
  .listen(3000);
