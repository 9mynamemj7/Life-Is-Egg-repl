test("mock Test", () => {
    ////
    ////
    const mockFn = jest.fn();
    mockFn("이건 좀 어렵네");
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith("이건 좀 어렵네");
});

test("mock Test2", () => {
    ////
    ////
    const mockFn = jest.fn((name: string): string => {
        return `My name is ${name}`;
    });

    expect(mockFn("Bang9")).toBe("My name is Bang9");
});
