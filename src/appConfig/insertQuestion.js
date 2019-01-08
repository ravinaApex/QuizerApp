import React, {Component} from "react";
import { Text } from "react-native";
import { Firebase } from './db';
import * as firebase from 'firebase';

var database = firebase.app().database();

const jsonData = {"quiz" : {
    "question0" : {
      "question" : "Which state Government confers the Basavashree award?",
      "correctoption" : "Karnataka",
      "options" : {
        "option1" : "Gujarat",
        "option2" : "Maharashtra",
        "option3" : "Andhra Pradesh",
        "option4" : "Karnataka"
        },
    },
    "question1" : {
      "question" : "India’s first-ever national police museum will establish in which city?",
      "correctoption" : "Delhi",
      "options" : {
        "option1" : "Chennai",
        "option2" : "Delhi",
        "option3" : "Nagpur",
        "option4" : "Kolkata"
      },
    },
    "question2" : {
      "question" : "Which country’s women cricket team has clinched the Asia Cup Twenty-20 tournament 2018?",
      "correctoption" : "Bangladesh",
      "options" : {
          "option1" : "SouthKorea",
          "option2" : "Bangladesh",
          "option3" : "India",
          "option4" : "Pakistan"
        },
    },
    "question3" : {
      "question" : "Who among the following is not a recipient of Bharat Ratna?",
      "correctoption" : "Sardar Vallbhabhai Patel",
      "options" : {
          "option1" : "Vinobha Bhave",
          "option2" : "Sardar Vallbhabhai Patel",
          "option3" : "Lal Bahadur Shastri",
          "option4" : "Dr.S. Radhakrishnan"
        },
    },
    "question4" : {
      "question" : "Who was the first Indian lady actress to receive the Padma Shri Award?",
      "correctoption" : "Nargis Dutt",
      "options" : {
          "option1" : "Smita Patil",
          "option2" : "Meena Kumari",
          "option3" : "Nargis Dutt",
          "option4" : "Madhubala"
        },
    },
    "question5" : {
      "question" : "Which of the following is India’s highest honour in the field of literature?",
      "correctoption" : "Jnanpith Award",
      "options" : {
          "option1" : "Vyas Samman",
          "option2" : "Kalidas Samman",
          "option3" : "Jnanpith Award",
          "option4" : "Saraswathi Samman"
        },
    },
    "question6" : {
      "question" : "Which is the first country to issue paper currency?",
      "correctoption" : "China",
      "options" : {
          "option1" : "China",
          "option2" : "India",
          "option3" : "USA",
          "option4" : "UK"
        },
    },
    "question7" : {
      "question" : "Who is the first person to reach Mount Everest?",
      "correctoption" : "Sherpa Tensing, Edmund Hillary",
      "options" : {
        "option1" : "Sherpa Tensing, Edmund Hillary",
        "option2" : "Rajesh Sharma",
        "option3" : "Charles Hillary",
        "option4" : "Johan don"
        },
    },
    "question8" : {
      "question" : "Who founded the Vikramashila University?",
      "correctoption" : "Dharmapala",
      "options" : {
        "option1" : "Devapala",
        "option2" : "Dharmapala",
        "option3" : "Dhruva",
        "option4" : "Gopala"
        },
    },
    "question9" : {
      "question" : "Who said, Child is the father of Man?",
      "correctoption" : "Shakespeare",
      "options" : {
        "option1" : "Lord Byron",
        "option2" : "William Wordsworth",
        "option3" : "Shakespeare",
        "option4" : "John Keats"
        },
    },

  }
}

// var userObj2 = {
//   profileName :'Vaibhav Bavishi',
//   imgUrl      : 'test',
//   mobileNo    : 8888888888,
//   isVerified  : false,
//   createdAt   : +new Date,
//   updatedAt   :  +new Date,
//   otp         : 123456
// };
// var userObj3 = {
//   profileName :'Vishal Rakholiya',
//   imgUrl      : 'test',
//   mobileNo    : 7777777777,
//   isVerified  : false,
//   createdAt   : +new Date,
//   updatedAt   :  +new Date,
//   otp         : 123456
// };

// var taskObj = {
//   taskName   : 'first task',
//   taskMsg    : 'task description',
//   imgUrl     : 'test',
//   dueDate    : +new Date,
//   isShared   : true,
//   taskStatus : 'pending',
//   sharedWith : [9999999999,8888888888,7777777777],
//   createdAt  : +new Date,
//   updatedAt  :  +new Date,
// };


// var userKey2 = database.ref('/users').push(userObj2).key;
// var userKey3 = database.ref('/users').push(userObj3).key;
// var taskKey = database.ref('/tasks').push(taskObj).key;

// var chatObj = {
//   senderID : userKey1,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };

// var commentKey = database.ref(`/taskComments/${taskKey}`).push(chatObj).key;

// database.ref('/users').on('child_added',function(snapshot){
//   console.log(snapshot.val())
// })

// console.log("userKey1 => ",userKey1);
// console.log("taskKey => ",taskKey);
// console.log("commentKey => ",commentKey);

// var chatObj = {
//   senderID : 1,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj1 = {
//   senderID : 2,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj2 = {
//   senderID : 3,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj3 = {
//   senderID : 1,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj4 = {
//   senderID : 2,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };
// var chatObj5 = {
//   senderID : 3,
//   msg  : 'hello',
//   msgType : 'text',
//   imgUrl : '',
//   msgTime : +new Date,
// };

// database.ref('/chats/1_2').push(chatObj)
// database.ref('/chats/1_2').push(chatObj1)
// database.ref('/chats/2_3').push(chatObj2)
// database.ref('/chats/1_2').push(chatObj3)
// database.ref('/chats/1_2').push(chatObj4)
// database.ref('/chats/1_3').push(chatObj5)


// database.ref('/chats/1_2').on('child_added',function(snapshot){
//   console.log(snapshot.val())
// })

export default class AppConfig extends Component {

  render(){
    var userKey1 = database.ref('/Question').set(jsonData).then((data)=>{
        console.log('data ' , data)
      }).catch((error)=>{
          console.log('error ' , error)
      });
    return(
      <Text>das</Text>
    )
  }
}
