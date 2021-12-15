import axios from "axios";
const apiUrl = `http://localhost:5000/api`;

//Get all tracks helper
export const getAllTracks = (user, successFn, errFn) => {
  //// console.log(user);
  axios
    .post(`${apiUrl}/getalltracks`, { email: user.email })
    .then((res) => {
      // console.log(res.data);
      successFn(res.data.tracks);
    })
    .catch((err) => {
      // console.log(err);
      errFn(err);
    });
};

//Get fav tracks helper
export const getFavTracks = (user, successFn, errFn) => {
  axios
    .post(`${apiUrl}/getfavtracks`, { email: user.email })
    .then((res) => {
      // console.log(res.data);
      successFn(res.data.tracks);
    })
    .catch((err) => {
      // console.log(err);
      errFn(err);
    });
};

// Generate the new musical note
export const generateNote = (user, note, successFn, errFn) => {
  axios
    .post(`${apiUrl}/generateMusic`, { email: user.email, note })
    .then((res) => {
      // console.log(res.data);
      successFn(res.data);
    })
    .catch((err) => {
      // console.log(err);
      errFn(err);
    });
};
