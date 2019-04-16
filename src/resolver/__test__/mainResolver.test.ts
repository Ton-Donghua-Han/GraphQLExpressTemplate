import rootResolver from "../mainResolver";

test("RootResolver test should print expected text", (): void => {
    expect(rootResolver.testCovered()).toEqual("This line is covered by test");
});

test("publicImport should return expected text", (): void => {
    expect(rootResolver.publicImport()).toEqual("This is a public module");
});
