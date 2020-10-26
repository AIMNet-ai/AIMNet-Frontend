//Function to Login the Exsiting user
export const FBlogin = ({ email, password }, successFn, errorFn) => {};

//Function to Logout User
export const FBlogout = (successFn, errorFn) => {};

//Function to Create New User
export const FBsignup = (
  { randomProfile, email, password, fullName },
  successFn,
  errorFn
) => {};

//Function to get all user data
export const getUserData = (uid, successFn, errorFn) => {};

//Updating Document in FB Firestore
export const updateUserData = (
  uid,
  { email, fullName, profilePic, address },
  successFn,
  errorFn
) => {};

//Get Current User
export const getCurrentUser = () => {};

//Get all the Users List
export const getUserList = (successFn, errorFn) => {};
