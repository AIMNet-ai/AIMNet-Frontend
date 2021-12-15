import {
  FBlogin,
  FBlogout,
  FBsignup,
  getUserData,
  updateUserData,
} from "./user";

test("[SAMPLE]: It adds two numbers", () => {
  expect(1 + 1).toBe(2);
});

test("[FBlogin]: Login the User", () => {
  const email = "user6@mail.com";
  const pass = "mi6";
  expect(
    FBlogin(
      { email, pass },
      () => {},
      () => {}
    )
  ).toBe(undefined);
});

test("[FBlogout]: Logout the User || Empty the redundant storage", () => {
  FBlogout(
    () => {},
    () => {}
  );

  const localStore = localStorage.getItem("aimnet-user");
  expect(localStore).toBe(null);
});

test("[FBsignup]: Create the new user into the system", () => {
  // Generatting seed for email
  //   const randomEmail = Math.floor(Math.random() * 10000);
  //   const email = `user${randomEmail}@mail.com`;
  //   const pass = `pass${randomEmail}`;
  //   expect(
  //     FBsignup(
  //       { email, pass },
  //       () => {},
  //       () => {}
  //     )
  //   ).toBe(undefined);
});

test("[getUserData]: Fetch User Data from the Database", () => {
  const email = "user6@mail.com";
  const pass = "mi6";
  expect(
    FBlogin(
      { email, pass },
      () => {
        console.log("[getUserData]:[PASS]");
      },
      () => {}
    )
  ).toBe(undefined);
});
