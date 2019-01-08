import { Firebase } from '../appConfig/db';
import * as firebase from 'firebase';

export const signUp = (userId, uname, email, password, image) => {

    firebase.database().ref('Users/' + userId).set({
      uname: uname,
      email: email,
      password: password,
      profile: image
    }).then((data)=>{
        console.log('data ' , data)
    }).catch((error)=>{
        console.log('error ' , error)
    })

  }
