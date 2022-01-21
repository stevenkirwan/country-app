import { getData } from "./getData";

test("Should return data", async () => {
  global.fetch = jest.fn(() => {
    Promise.resolve();
  });
  const data = await getData("all?fields=name,flags,population,capital,cca2");
  expect(data).toBeDefined();
});
