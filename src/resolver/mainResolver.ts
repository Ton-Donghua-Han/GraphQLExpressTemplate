interface RootResolver {
    testCovered(): string;
    testNotCovered(): string;
}

const rootResolver: RootResolver = {
    testCovered: (): string => "This line is covered by test",
    testNotCovered: (): string => "This line is not covered by test",
};

export default rootResolver;
