import { getAllTracks, getFavTracks, generateNote } from "./tracks";

const commanUser = {
  email: "user7@gmail.com",
  note: 15,
};

test("[getAllTracks]: Fetch all track from the server", () => {
  expect(
    getAllTracks(
      { ...commanUser },
      () => {
        // console.log("[getAllTracks]:[PASS]");
      },
      () => {}
    )
  ).not.toBeNull();
});

test("[getFavTracks]: Fetch all the favourite tracks from the server", () => {
  expect(
    getFavTracks(
      { ...commanUser },
      () => {
        // console.log("[getFavTracks]:[PASS]");
      },
      () => {}
    )
  ).not.toBeNull();
});

test("[generateNote]: Create the new musical note based on the LSTM", () => {
  expect(
    generateNote(
      { ...commanUser },
      () => {
        // console.log("[generateNote]:[PASS]");
      },
      () => {}
    )
  ).not.toBeNull();
});
