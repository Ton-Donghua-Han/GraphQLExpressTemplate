import publicMethod from "@public/exampleModule";
import mockResolver from "./mockExample/mockResolver";

interface RootResolver {
    testCovered(): string;
    testNotCovered(): string;
    publicImport(): string;
    testMock(): string;
}

const rootResolver: RootResolver = {
    testCovered: (): string => "This line is covered by test",
    testNotCovered: (): string => "This line is not covered by test",
    publicImport: publicMethod,
    testMock: mockResolver,
};

export function untestedFunction(): string {
    return "This function is not tested and should be highlighted.";
}

export default rootResolver;
