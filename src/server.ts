import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import { buildSchema, GraphQLSchema } from "graphql";
import * as fs from "fs";

import resolver from "./resolver/mainResolver";

const schemaString: string = fs.readFileSync("schema/mainSchema.gql").toString();
const schema: GraphQLSchema = buildSchema(schemaString);

const app: express.Express = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: resolver,
        graphiql: true,
    }),
);

app.listen(4000);
console.log("Running an GraphQL API server at localhost:4000/graphql");
