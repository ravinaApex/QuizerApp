import * as firebase from 'firebase';
var database = firebase.app().database();
import { AsyncStorage } from "react-native";

export function currentUserData() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      let allData;

      AsyncStorage.getItem("id_token").then((tokenValue) => {
        firebase.database().ref(`/Users/${tokenValue}`).on('value', (snapshot) => {
          allData = snapshot.val();
          if (snapshot.val()) {
            dispatch({
              type: 'currentUser',
              subtype: 'success',
              currentUserData: allData,
            });
            resolve(allData)
          }
        });
      });
    })
  }
}

export function rankedUserData() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      let allData = [];

      firebase.database().ref('/Users/').orderByChild('ranking').endAt(3).on('child_added', (snapshot) => {
        allData.push({ ...snapshot.val() });
        // console.log("aallData: ",allData);

          if (snapshot.val()) {
            dispatch({
              type: 'rankedUser',
              subtype: 'success',
              rankedUserData: allData,
            });
            resolve(allData)
          }
      });

    })
  }
}

export function rankedUserDataList() {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      let allData;

      AsyncStorage.getItem("id_token").then((tokenValue) => {
        firebase.database().ref(`/Users/${tokenValue}`).on('value', (snapshot) => {
          firebase.database().ref('Users/').orderByChild('ranking').startAt(snapshot.val().ranking - 5).limitToFirst(snapshot.val().ranking + 5).on('value', (data) => {
            // allData.push({ ...data.val() });
            allData = data.val();
            if (data.val()) {
              dispatch({
                type: 'rankedUserList',
                subtype: 'success',
                rankedUserDataList: allData,
              });
              resolve(allData)
            }
          });
        });
      });

    });
  }
}

export function quizData(category) {
  return function (dispatch, getState) {
    return new Promise(async (resolve, rejects) => {
      let allData;

      firebase.database().ref(`/Question/${category}`).on('value', (snapshot) => {
        allData = snapshot.val();
          if (snapshot.val()) {
            dispatch({
              type: 'quizData',
              subtype: 'success',
              quizData: allData,
            });
            resolve(allData)
          }
      });
    })
  }
}
