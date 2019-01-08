import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyARljkhj8Ta8vBfq1_5u9XK5XE1PNA9iVQ",
  authDomain: "quizerapp-a8f46.firebaseapp.com",
  databaseURL: "https://quizerapp-a8f46.firebaseio.com",
  projectId: "quizerapp-a8f46",
  storageBucket: "quizerapp-a8f46.appspot.com",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCyGKl4Xr8c9X9QisejjGFo6T20UpUXIZg",
//   authDomain: "quizerapp-75813.firebaseapp.com",
//   databaseURL: "https://quizerapp-75813.firebaseio.com",
//   projectId: "quizerapp-75813",
//   storageBucket: "quizerapp-75813.appspot.com",
// };
let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
// export const db = app.database();
