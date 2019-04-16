import publicMethod from "@public/exampleModule";

interface RootResolver {
    testCovered(): string;
    testNotCovered(): string;
    publicImport(): string;
}

const rootResolver: RootResolver = {
    testCovered: (): string => "This line is covered by test",
    testNotCovered: (): string => "This line is not covered by test",
    publicImport: publicMethod,
};

export default rootResolver;
