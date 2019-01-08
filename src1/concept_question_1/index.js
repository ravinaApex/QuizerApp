import React, {Component} from "react";
import {Dimensions, View, Text, TouchableWithoutFeedback, StyleSheet, ScrollView, Alert, Button, Image, clickBar, TextInput, TouchableOpacity,ProgressBarAndroid,ImageBackground } from "react-native";
import {CircularProgress} from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import images from './../images';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const deviceWidth = Dimensions.get("window").width;
import * as Animatable from 'react-native-animatable';
import * as firebase from 'firebase';
var database = firebase.app().database();
var no = 0, answerArray = [];
var timer;


// const App = () => {
//   const percentage = 28
//   console.log("app");
//   return(
//     <View style={{opacity:0.7}}>
//       <CircularProgress percentage={percentage} progressWidth ={22.5} size={53} donutColor='#3D14F4' fillColor='#FCFAFA' blankColor='#ECECEC'>
//           <Text style={{fontSize:17,fontFamily:'lato-bold'}}>04</Text>
//       </CircularProgress>
//     </View>
//   )
// }

export default class ImgRandomQuiz extends Component {

   constructor(props){
    super(props);
    this.state = {
      percentage: 0,
      count: 0,
      question : '',
      options : '',
      correctoption : [],
      queData: '',
      userAnswer: '',
      click: false,
      answer: false,
      multiple: false,
      ansCounter: 0,
      matchAnswer: false,
      answerArray: '',
    }

  }

  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(2000);

  componentWillMount() {
    firebase.database().ref('/Question').on('value', (snapshot) => {
      var queData = snapshot.val().quiz;
      arrnew = Object.keys(queData).map( function(k) { return queData[k] });
      qno = Math.floor(Math.random() * arrnew.length);
      this.setState({
        question : arrnew[qno].question,
        options : arrnew[qno].options,
        correctoption : arrnew[qno].correctoption,
      });

      // console.log("correctoption 22222: ",this.state.correctoption);
      if(this.state.correctoption.length > 1)
      {
        this.setState({ multiple: true });
      }else {
        this.setState({ multiple: false });
      }

    });

  }

   componentDidMount() {

       timer = setInterval( () => {
         if(this.state.count < 30 && !this.state.click)
         {
           this.setState({
             percentage : this.state.percentage + 3.33,
             count : this.state.count + 1,
           })
         }
         else {
           if(!this.state.click)
           {
             // this.stopTimer();
             this.setState({
               percentage: 0,
               count: 0,
             });
             setTimeout( () => {
               this.next();
             },1000);
           }
         }
       },1000);
  }



  stopTimer = () => {
     // clearInterval(timer);
     // Alert.alert('Time Out');

     setTimeout( () => {
       this.next();
     },1000);

  }

  answer = (answer) => {

    this.setState({
      userAnswer: answer,
      click: true,

     });

    if(this.state.correctoption[0] === answer){
      this.setState({ answer: true })
      setTimeout( () => {
        this.setState({
          percentage: 0,
          count: 0,
        });
        this.next();
      },1000);
    }
    else{
      setTimeout( () => {
        this.setState({
          percentage: 0,
          count: 0,
        });
        this.next();
      },1000);

    }
  }

  answerMultiple = (answer) => {

    // var answerArray = [];
    // this.setState({
    //   click: true,
    //  });

    if(this.state.count < 30 && answerArray.length < this.state.correctoption.length)
    {
      answerArray.push(answer);
      // console.log("answerArray: ",answerArray);
      // console.log("correctoption: ",this.state.correctoption);
      this.setState({ answerArray: answer });
      console.log("answerArray: ",this.state.answerArray);
      if(answerArray.length === this.state.correctoption.length){
        var ansCounter = 0;
        for(var i=0; i<answerArray.length; i++)
        {
          for(var j=0; j<this.state.correctoption.length; j++)
          {
            if(answerArray[i] === this.state.correctoption[j])
            {
              // console.log("matched answer: ", answerArray[i]);
              ansCounter++;
              this.setState({ ansCounter: ansCounter });
              this.setState({ matchAnswer: true });
              console.log("ansCounter: ",ansCounter);
            }
          }
        }
        // console.log("ansCounter: ",ansCounter);
        // console.log("ansCounter state: ",this.state.ansCounter);
        if(ansCounter === this.state.correctoption.length)
        {
          console.log("lgkhlklfkglh");//////baki chhe

          answerArray = [];
          setTimeout( () => {
            this.setState({
              percentage: 0,
              count: 0,
              multiple: false,
            });
            if(qno < arrnew.length-1)
            {
              no++;
              qno = Math.floor(Math.random() * arrnew.length);
              this.setState({
                question : arrnew[qno].question,
                options : arrnew[qno].options,
                correctoption : arrnew[qno].correctoption,
              });
            }
            else {
              qno = 0;
              this.setState({
                percentage: 0,
                count: 0,
                multiple: false,
              });
              // clearInterval(timer);
              // this.props.navigation.navigate('Congrats');
            }
          },1000);


        }
      }


    }
    else {
      console.log("overflow");
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //
   // if (this.state.correctoption !== nextState.correctoption) {
   //   this.setState({ correctoption: nextState.correctoption });
   // }

   //   return nextState
   // }

  next = () => {
    this.setState({
      click: false
    });

    if(no < arrnew.length-1)
    {
      no++;
      qno = Math.floor(Math.random() * arrnew.length);
      this.setState({
        question : arrnew[qno].question,
        options : arrnew[qno].options,
        correctoption : arrnew[qno].correctoption,
        click: false,
        answer: false
      });
    }
    else {
      no = 0;
      this.setState({
        percentage: 0,
        count: 0,
        multiple: false,
      });
      // clearInterval(timer);
      this.props.navigation.navigate('Congrats');
    }

    // console.log("correctoption 22222: ",this.state.correctoption);
    if(this.state.correctoption.length > 1)
    {
      this.setState({ multiple: true });
    }else {
      this.setState({ multiple: false });
    }

  }

  goToHome = () => {
    no = 0;
    this.setState({
      percentage: 0,
      count: 0,
      multiple: false,
    });
    this.props.navigation.navigate('Home');
  }

  checkData = (opt) => {
    for(var i=0; i<this.state.correctoption.length; i++)
    {
      if(opt === this.state.correctoption[i])
      {
        return true
      }
    }
  }

  render(){

    // console.log("render ansCounter: ",ansCounter);
    // console.log("render ansCounter state: ",this.state.ansCounter);

    return(
     <View style={{flex:1, backgroundColor:'#FCFAFA'}}>
      <View style={styles.statusBar} />
      <View style={ this.state.multiple
        ? styles.container
        : [styles.container, {paddingBottom:35}]
      }>
       <View style={styles.mainHeaderView}>
       <View style={styles.headerView}>
         <TouchableOpacity style={styles.arrowView} onPress={() => this.goToHome()}>
           <AntDesign name="arrowleft" size={22} color="rgb(72, 72, 72)"/>
         </TouchableOpacity>
         <View style={styles.headerTextView}>
           <Text style={styles.headerText}>Random Quiz</Text>
         </View>
       </View>
      </View>

      <View style={{flex:1, paddingHorizontal: 20,}}>
        <View style={styles.mainView}>
          <View style={styles.viewQue}>
            <Text style={styles.TextQue}>Que {no + 1}/10</Text>
          </View>

            {this.state.answer
              ? <View style={styles.progressbarView}>
                  <CircularProgress percentage={this.state.percentage} progressWidth={22.5} size={53} donutColor='#3D14F4' fillColor='#FCFAFA' blankColor='#ECECEC'>
                    <Text style={{fontSize: 17, fontFamily: 'lato-bold'}}>{this.state.count}</Text>
                  </CircularProgress>
                </View>
              : this.state.click
                ? <View style={styles.viewOops}>
                    <Text style={styles.textOops}>Oops :(</Text>
                  </View>
                : <View style={[styles.progressbarView]}>
                    <CircularProgress percentage={this.state.percentage} progressWidth={22.5} size={53} donutColor='#3D14F4' fillColor='#FCFAFA' blankColor='#ECECEC'>
                      <Text style={{fontSize:17, fontFamily:'lato-bold'}}>{this.state.count}</Text>
                    </CircularProgress>
                  </View>
            }

        <View style={styles.mainViewCoin}>
          <View style={styles.subViewCoin}>
            <MaterialCommunityIcons name="coins" size={20} color="#FEA339"/>
          </View>
          <View style={styles.view415}>
            <Text style={styles.text415}>415</Text>
          </View>
        </View>
      </View>

      { this.state.multiple
        ? <View style={{height:30, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontSize: 15, color: 'green' }}>Choose {this.state.correctoption.length} Option for this Question</Text>
          </View>
        : null
      }

      <View style={styles.mainQuestionView}>
      <View style={{ height:115, width: deviceWidth - 40}}>
        <View style={styles.mainViewRadius}>
          <View style={{flex: 1}}>
            <View style={styles.leftTopRadius}/>
      </View>
      <View style={styles.mainViewRightRadius}>
        <View style={styles.viewRightRadius}>
      </View>
    </View>
  </View>
  <View style={styles.mainViewBottomRadius}>
        <View style={styles.subbottomLeftRadiusView}>
          <View style={styles.bottomLeftRadiusView}/>
        </View>
          <View style={styles.subbottomRightRadiusView}>
            <View style={styles.bottomRightRadiusView}>
        </View>
  </View>
</View>
  </View>
        <View style={styles.mainViewQuestion}>
          <View style={styles.subViewQuestion}>
            <Text style={styles.question6Text}>Question {no + 1}</Text>
            <Text style={styles.questionText}>{this.state.question}</Text>
          </View>
        </View>
    </View>
  </View>

  <TouchableWithoutFeedback onPress={this.bounce}>
    <Animatable.View ref={this.handleViewRef} style={{width: 120, backgroundColor: 'red'}}>
      <Text>Bounce me!</Text>
    </Animatable.View>
  </TouchableWithoutFeedback>

    {this.state.multiple
      ? <View style={styles.mainViewList}>
        {
          Object.keys(this.state.options).map((obj,i)=>{
          if(i==0)
          {
            return (
              <TouchableOpacity key={i}
              style={ this.state.options[obj] === this.state.answerArray
                        ? this.checkData(this.state.options[obj])
                          ? [styles.firstOptionView, {backgroundColor: 'green'}]
                          : [styles.firstOptionView, {backgroundColor: 'red'}]
                        : [styles.firstOptionView, {backgroundColor: 'white'}]
                    }
                onPress={() => this.answerMultiple(this.state.options[obj])}>
                <View style={styles.mainRadiusView}>
                  <View style={{flex: 1}}>
                    <View style={styles.optionLeftRadius}/>
                  </View>
                  <View style={styles.mainRightOptionRadius}>
                    <View style={styles.rightOptionRadius}/>
                  </View>
                </View>
                <Text style={[styles.firstOptionText, {marginBottom: 25}]}>{this.state.options[obj]}</Text>
              </TouchableOpacity>
            );
          }
          else {
            // var temp=this.state.correctoption.map((data) => { console.log("data: ",data,"options: ",this.state.options[obj]); console.log("dddddd:",this.state.options[obj] === data); return(this.state.options[obj] === data) })
            // console.log("temppppppppp: ",temp);
            return (
                <TouchableOpacity key={i}
                  style={ this.state.options[obj] === this.state.answerArray
                            ? this.checkData(this.state.options[obj])
                              ? [styles.firstOptionView, {backgroundColor: 'green'}]
                              : [styles.firstOptionView, {backgroundColor: 'red'}]
                            : [styles.firstOptionView, {backgroundColor: 'white'}]
                        }
                  onPress={() => this.answerMultiple(this.state.options[obj])}>
                  <Text style={styles.firstOptionText}>{this.state.options[obj]}</Text>
                </TouchableOpacity>
              );
            }
          })
        }
        </View>
      : <View style={styles.mainViewList}>
          {
            Object.keys(this.state.options).map((obj,i)=>{
            if(i==0)
            {
              return (
                <TouchableOpacity key={i}
                  style={this.state.click === true
                          ? this.state.options[obj] && this.state.correctoption[0] && (this.state.options[obj] === this.state.correctoption[0])
                            ? [styles.firstOptionView, {backgroundColor: '#33EA62'}]
                            : this.state.options[obj] && this.state.userAnswer && (this.state.options[obj] === this.state.userAnswer)
                              ? [styles.firstOptionView, {backgroundColor: '#F85E62'}]
                              : [styles.firstOptionView, ]
                          : [styles.firstOptionView,]
                        }

                 onPress={() => this.answer(this.state.options[obj])}>
                  <View style={styles.mainRadiusView}>
                    <View style={{flex: 1}}>
                      <View style={styles.optionLeftRadius}/>
                    </View>
                    <View style={styles.mainRightOptionRadius}>
                      <View style={styles.rightOptionRadius}/>
                    </View>
                  </View>
                  <Text style={[styles.firstOptionText, {marginBottom: 25}]}>{this.state.options[obj]}</Text>
                </TouchableOpacity>
              );
            }
            else {

              return (
                  <TouchableOpacity key={i}
                  style={this.state.click === true
                          ? this.state.options[obj] && this.state.correctoption[0] && (this.state.options[obj] === this.state.correctoption[0])
                              ? [styles.firstOptionView, {backgroundColor: '#33EA62'}]
                              : this.state.options[obj] && this.state.userAnswer && (this.state.options[obj] === this.state.userAnswer)
                                ? [styles.firstOptionView, {backgroundColor: '#F85E62'}]
                                : [styles.firstOptionView, ]
                          : [styles.firstOptionView,]
                        }
                    onPress={() => this.answer(this.state.options[obj])}>
                    <Text style={styles.firstOptionText}>{this.state.options[obj]}</Text>
                  </TouchableOpacity>
                );
              }
            })
          }

          {/*<TouchableOpacity style={styles.firstOptionView} onPress={() => this.answer(this.state.options.option1)}>
            <View style={styles.mainRadiusView}>
              <View style={{flex: 1}}>
                <View style={styles.optionLeftRadius}/>
              </View>
              <View style={styles.mainRightOptionRadius}>
                <View style={styles.rightOptionRadius}/>
              </View>
            </View>
            <Text ref='option1' style={styles.firstOptionText}>{this.state.options.option1}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondOptionView} onPress={() => this.answer(this.state.options.option2)}>
            <Text ref='option2' style={styles.secondOptionText}>{this.state.options.option2}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={this.state.userAnswer && this.state.correctoption && (this.state.userAnswer === this.state.correctoption)
                    ? this.state.click === true
                        ? [styles.thirdOptionView, {backgroundColor: 'green'}]
                        : styles.thirdOptionView
                    : [styles.thirdOptionView,]
                  }
            onPress={() => this.answer(this.refs.option3.props.children)}>
              <Text ref='option3' style={styles.thirdOptionText}>{this.state.options.option3}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={this.state.userAnswer && this.state.correctoption && (this.state.userAnswer === this.state.correctoption)
                    ? this.state.click === true
                        ? [styles.forthOptionView, {backgroundColor: 'green'}]
                        : [styles.forthOptionView,]
                    : [styles.forthOptionView,]
                  }
            onPress={() => this.answer(this.refs.option4.props.children)}>
              <Text ref='option4' style={styles.forthOptionText}>{this.state.options.option4}</Text>
          </TouchableOpacity>*/}

        </View>
    }

        {this.state.multiple
          ? <TouchableOpacity style={{alignItems: 'center'}}><Feather name="arrow-right-circle" size={35} color="rgb(72, 72, 72)"/></TouchableOpacity>
          : null
        }

       </View>
    </View>

   );
 }
}
