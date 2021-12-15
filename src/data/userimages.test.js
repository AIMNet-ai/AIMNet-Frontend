import {
  Blue as BlueRecieved,
  Red as RedRecieved,
  Green as GreenRecieved,
  Yellow as YellowRecieved,
} from "./categories";
import categories from "./categories";

test("[Categories]: Check for objects of the colors", () => {
  const BlueExpected = {
    background: "#4285F4",
  };
  const GreenExpected = {
    background: "#0F9D58",
  };

  const RedExpected = {
    background: "#DB4437",
  };

  const YellowExpected = {
    background: "#F4B400",
  };

  expect(BlueExpected).toEqual(BlueRecieved);
  expect(GreenExpected).toEqual(GreenExpected);
  expect(RedExpected).toEqual(RedExpected);
  expect(YellowExpected).toEqual(YellowExpected);
});

test("[Categories]: Categories Shopping list and Icons for the categories", () => {
  expect(categories).not.toBeNull();
});
