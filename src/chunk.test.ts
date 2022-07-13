import chunk from "./skeleton";

test("array of odd numbers and an array of even numbers", () => {
  expect(chunk([10, 20, 30, 40, 50], 2)).toStrictEqual([
    [10, 20],
    [30, 40],
    [50],
  ]);
});

/**
 * need to write .toStrictEqual not .toBe
 * https://stackoverflow.com/questions/56839801/jest-js-error-received-serializes-to-the-same-string
 *
 * */
