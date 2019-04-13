interface RootResolver {
    hello(): string;
}

const rootResolver: RootResolver = {
    hello: (): string => "This is hello example",
};

export default rootResolver;
