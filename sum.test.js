const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 0+(-9) to equal -9", () => {
  expect(sum(0, -9)).toBe(-9);
});
