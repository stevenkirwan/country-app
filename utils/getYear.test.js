import {getYear} from "./getYear";

test("Should return the current year", () => {
  var today = new Date();
  var year = today.getFullYear()
  expect(getYear()).toBe(year);
});
