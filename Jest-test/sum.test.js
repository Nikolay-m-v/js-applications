const sum = require(`./sum`);

// test(`adds 1 + 2 to equal 3`, () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test(`two + two is four`, () => {
//   expect(2 + 2).toBe(4);
// });

// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;

//   expect(data).toEqual({ one: 1, two: 2 });
// });

// test("zero is falsy", () => {
//   const n = 0;
//   expect(n).toBeFalsy();
// });

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});
