const debounce = require("../src/debounce");

let wait;

beforeAll(() => {
  wait = time => new Promise(resolve => setTimeout(resolve, time));
});

afterAll(() => {
  wait = undefined;
});

test("debounce", async () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  // Call it immediately
  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // Call it several times with 500ms between each call
  for (let i = 0; i < 6; i++) {
    await wait(500);
    debouncedFunc();
  }
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // wait 1000ms
  await wait(1000);
  expect(func).toHaveBeenCalledTimes(1); // func called
});
