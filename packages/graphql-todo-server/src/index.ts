import { GraphQLServer, Options } from 'graphql-yoga';

import resolvers from './graphql/resolvers';
import { ENV } from './env';

const context = {};

const options: Options = {
    port: ENV.PORT,
    playground: '/playground',
};

const server = new GraphQLServer({
    typeDefs: `${__dirname}/graphql/schema.graphql`,
    resolvers,
    context,
});

server.start(options, ({ port }) =>
    // tslint:disable-next-line
    console.log(`Server is running on localhost:${port}`),
);
