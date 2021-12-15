import { imgArr as imgArrRecieved } from "./userimages";

test("[UserImages]: Generate user images Array", () => {
  expect(imgArrRecieved).not.toBeNull();
});
