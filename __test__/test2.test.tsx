test("mock Test", () => {
////
////

  expect(mockFn).toBeCalledTimes(1)
  expect(mockFn).toBeCalledWith("이건 좀 어렵네");
})

test("mock Test2", () => {
////
////

  expect(mockFn("Bang9")).toBe("My name is Bang9")
  });