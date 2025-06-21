import { fetchAPI } from "./fakeAPI";

export const initializeTimes = (initialTimes) => [
  ...initialTimes,
  ...fetchAPI(new Date()),
];

export const updateTimes = (availableTimesState, action) => {
  if (action.type === "UPDATE") {
    const selectedDate = action.payload;
    return fetchAPI(new Date(selectedDate));
  }
};
