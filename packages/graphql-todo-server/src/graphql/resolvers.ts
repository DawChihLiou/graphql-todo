const resolvers = {
    Query: {
        hello(parent: any, args: any, context: any) {
            return `Hello ${args.name || 'World'}`;
        },
    },
};

export default resolvers;
