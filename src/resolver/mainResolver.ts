interface RootResolver {
    hello(): string;
}

const rootResolver: RootResolver = {
    hello: () => {
        return "This is hello example";
    }
}

export default rootResolver;