import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyARljkhj8Ta8vBfq1_5u9XK5XE1PNA9iVQ",
  authDomain: "quizerapp-a8f46.firebaseapp.com",
  databaseURL: "https://quizerapp-a8f46.firebaseio.com",
  projectId: "quizerapp-a8f46",
  storageBucket: "quizerapp-a8f46.appspot.com",
};
let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
// export const db = app.database();
