const { initializeTimes, updateTimes } = require("../../utils/times");

test("fetchAPI returns valid data", () => {
  const result = initializeTimes([]);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns correct data for pre-defined date", () => {
  const expectedResult = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:30",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];
  const result = updateTimes(null, { type: "UPDATE", payload: "2025-06-28" });

  expect(result).toEqual(expectedResult);
});
