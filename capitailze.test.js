const capitalize = require("./capitalize");

test('check if "Hello World!" will change', () => {
  expect(capitalize("Hello World!")).toBe("Hello World!");
});

test('check if "hello world!" will change', () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});

test('check if "@hello world!" will change', () => {
  expect(capitalize("@hello world!")).toBe("@hello world!");
});
