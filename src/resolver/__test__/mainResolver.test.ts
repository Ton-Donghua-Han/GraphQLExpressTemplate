import rootResolver from "../mainResolver";

jest.mock(
    "../mockExample/mockResolver",
    (): any => {
        return {
            default: (): string => "This is the mock function from mock resolver",
        };
    },
);

test("RootResolver test should print expected text", (): void => {
    expect(rootResolver.testCovered()).toEqual("This line is covered by test");
});

test("publicImport should return expected text", (): void => {
    expect(rootResolver.publicImport()).toEqual("This is a public module");
});

test("test mock should return the mock statemetn from mock file", (): void => {
    expect(rootResolver.testMock()).toEqual("This is the mock function from mock resolver");
});
