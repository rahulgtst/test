const reverseString = require("./reverseString");

test("january returns yraunaj", () => {
  expect(reverseString("january")).toEqual("yraunaj");
});
