import { Firebase } from '../appConfig/db';
import * as firebase from 'firebase';
import { AsyncStorage } from "react-native";
import moment from 'moment';
import _ from 'lodash';

export const signUp = (email, password, uname, image, coin, ranking, success, fail) => {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
      firebase.database().ref('Users/' + data.user.uid).set({
        email: email,
        password: password,
        uname: uname,
        profile: image,
        coin: coin,
        ranking: ranking,
        quizTime: moment(new Date()).format('DD-MM-YYYY HH:mm:ss'),
      }).then((data) => {
        success(data);
      }).catch((error) => {
        fail(error);
      });

    }).catch((error) => {
      fail(error);
    });
  }
  catch (error) {
    fail(error);
  }


}

export const signIns = (email, password, success, fail) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
    success(data);
  }).catch((error) => {
    fail(error);
  });
}

export const updateCoin = (coin) => {
  AsyncStorage.getItem("id_token").then((tokenValue) => {
    firebase.database().ref(`/Users/${tokenValue}`).update({ coin: coin })
  });

  firebase.database().ref('/Users/').orderByChild('coin').on('value', (data) => {
    var queData = data.val();
    var temp = Object.keys(queData).map(key => {
      return { ...queData[key], id: key };
    }).sort((a, b) => (b.coin - a.coin));

    var unique = {};
    var distinct = [];
    var finalArray = [];
    for( var i in temp ){
     if( typeof(unique[temp[i].coin]) == "undefined"){
      distinct.push(temp[i].coin);
      var filterArray = temp.filter((obj) => {
        return obj.coin === temp[i].coin;
      });
      arr = _.sortBy(filterArray, function(o) {
        return new moment(o.quizTime, 'DD-MM-YYYY HH:mm:ss')
      });
      arr.map((obj, i) => {
        finalArray.push(obj);
      });
     }
     unique[temp[i].coin] = 0;
    }

    finalArray.map((obj, i) => {
      firebase.database().ref('Users').orderByChild('email').equalTo(obj.email).once('value', (data) => {
        data.forEach(function(child) {
          child.ref.update({ ranking: i+1 });
        });
      });
    });
  });
}

export const createHistory = (coin, ranking) => {

  AsyncStorage.getItem("id_token").then((tokenValue) => {
    firebase.database().ref(`/Users/${tokenValue}`).update({ quizTime: moment(new Date()).format('DD-MM-YYYY HH:mm:ss') });
  });
}

export const updateHistory = (coin, ranking, earnedCoin, quizTo) => {

  AsyncStorage.getItem("id_token").then((tokenValue) => {
    var currentDate = moment(new Date()).format('DD-MM-YYYY');
    var keyDate, dateExist = false;
    const historyData = {
      [currentDate] : [
        {
          'earnedCoin': earnedCoin,
          'quizFrom': moment(new Date()).format('HH:mm:ss'),
          'quizTo': quizTo,
          'ranking': ranking,
          'totalCoin': coin
        }
      ]
    }
    firebase.database().ref(`/UserHistory/${tokenValue}`).on('child_added', (snapshot) => {
      console.log("snapshot.key: ",snapshot.key);
      keyDate = snapshot.key;
      keyDate === currentDate ? dateExist = true : dateExist = false;
    });
    console.log('out');
    if(dateExist === true)
    {
      console.log('test');
      firebase.database().ref(`/UserHistory/${tokenValue}/${currentDate}`).push({
        'earnedCoin': earnedCoin,
        'quizFrom': moment(new Date()).format('HH:mm:ss'),
        'quizTo': quizTo,
        'ranking': ranking,
        'totalCoin': coin
      })
    }
    else {
      console.log('hhh');
      firebase.database().ref(`UserHistory/${tokenValue}`).update(historyData);
    }
  });


}
