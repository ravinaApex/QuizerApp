import React, {Component} from "react";
import {Dimensions, View, Button, Text, StyleSheet, FlatList, Modal, TouchableHighlight, TouchableWithoutFeedback, Animated, Easing, ScrollView, Alert, Image, clickBar, TextInput, TouchableOpacity,ProgressBarAndroid,ImageBackground } from "react-native";
import {CircularProgress} from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import images from './../images';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { UIActivityIndicator } from 'react-native-indicators';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import * as firebase from 'firebase';
var database = firebase.app().database();
var no = 0, qno=0, answerArray = [], counter = 0, nextCounter = 0;
var timer, timer1;

class Option extends Component {

  constructor(props){
   super(props);
   this.state = {
     color: '#fff',
     counter: 0,
     userAnswer: false,
     correctoption: [],
     imageResult: '',
     borderStyle: {},
   }

   this.springValue = new Animated.Value(1);

  }

  componentWillMount = () => {
    this.setState({
      correctoption: arrnew[qno].correctoption,
    })
  }

  handleViewRef = ref => this.view = ref;

  spring = () => {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }

  checkAnswer = (answer) => {
    const { correctAnswer, incorrectAnswer, spring } = this.props;
    // this.setState({ counter: this.state.counter + 1 })


    counter++;

    if(counter === 1)
    {
      this.view.shake(1000);
      this.setState({
        color: 'rgb(227, 231, 234)'
      },() => {
        setTimeout( () => {
          this.setState({ color: '#fff' })
        },1000);
      });

      // onPressItem(answer);
      if(answer === this.state.correctoption[0])
      {
        clearInterval(timer);
        clearInterval(timer1);
        setTimeout( () => {
          this.setState({
            imageResult: images.checkMark,
            borderStyle: { borderWidth: 1, borderColor: 'rgb(29, 142, 102)' }
          }, () => {
            this.spring();
            setTimeout( () => {
              this.setState({
                imageResult: '',
                borderStyle : {}
              });
            },3000);
          });
        },1000);
        setTimeout( () => {
          correctAnswer();
        },2000);
      }
      else {
        clearInterval(timer);
        clearInterval(timer1);
        setTimeout( () => {
          this.setState({
            imageResult: images.crossMark,
            borderStyle: { borderWidth: 1, borderColor: 'rgb(191, 1, 1)' }
          }, () => {
            this.spring();
            setTimeout( () => {
              this.setState({
                imageResult: '',
                borderStyle: {}
              });
            },3000);
          });
        },1000);
        setTimeout( () => {
          incorrectAnswer();
        },2000);

      }

    }
  }

  render() {

    const { values, index } = this.props;

    if(index==0)
      {
        return (
          <TouchableWithoutFeedback onPress={() => this.checkAnswer(values.option)}>
            <Animatable.View ref={this.handleViewRef} style={[styles.firstOptionView, this.state.borderStyle, { flexDirection: 'row', backgroundColor: this.state.color}]}>
              {/*<View style={styles.mainRadiusView}>
                <View style={{flex: 1}}>
                  <View style={styles.optionLeftRadius}/>
                </View>
                <View style={styles.mainRightOptionRadius}>
                  <View style={styles.rightOptionRadius}/>
                </View>
              </View>*/}
              <View style={{ flex: 9, alignItems: 'center' }}>
                <Text style={[styles.firstOptionText, { marginLeft: deviceWidth / 10,}]}>{values.option}</Text>
              </View>
              <View style={{ flex: 1, }}>
                <Animated.Image source={this.state.imageResult} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
              </View>
            </Animatable.View>
          </TouchableWithoutFeedback>
        );
      }
      else {
        return (
          <TouchableWithoutFeedback onPress={() => this.checkAnswer(values.option)}>
            <Animatable.View ref={this.handleViewRef} style={[styles.firstOptionView, this.state.borderStyle,  { flexDirection: 'row', backgroundColor: this.state.color}]}>
              <View style={{ flex: 9, alignItems: 'center', }}>
                <Text style={[styles.firstOptionText, {marginLeft: deviceWidth / 10,}]}>{values.option}</Text>
              </View>
              <View style={{ flex: 1, }}>
                {/*<Image source={this.state.imageResult} style={{width: 20, height: 20 }} />*/}
                <Animated.Image source={this.state.imageResult} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
              </View>
            </Animatable.View>
          </TouchableWithoutFeedback>
          );
        }
      }
    }


  class OptionMultiple extends Component {

      constructor(props){
       super(props);
       this.state = {
         color: '#fff',
         counter: 0,
         correctoption: [],
         borderStyle: {}
       }

       this.springValue = new Animated.Value(1);

      }


      handleViewRef = ref => this.view = ref;

      componentWillMount = () => {
        this.setState({
          correctoption: arrnew[qno].correctoption,
        })
      }

      spring = () => {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1
          }
        ).start()
      }

      checkAnswerMultiple = (answer) => {
        const { correctAnswer, incorrectAnswer } = this.props;
        counter++;
        var temp=0;
        // console.log("this.state.correctoption: ",this.state.correctoption);

        if(counter <= this.state.correctoption.length)
        {
          this.view.shake(1000);
          this.setState({
            color: 'rgb(227, 231, 234)'
          },() => {
            setTimeout( () => {
              this.setState({ color: '#fff' })
            },1000);
          });

          for(var i=0; i<this.state.correctoption.length; i++)
          {
            if(answer === this.state.correctoption[i])
            {
              temp = 1;
            }
          }

          if(temp === 1)
          {
            setTimeout( () => {
              this.setState({
                imageResult: images.checkMark,
                borderStyle: { borderWidth: 1, borderColor: 'rgb(29, 142, 102)' }
              }, () => {
                this.spring();
                // setTimeout( () => {
                //   this.setState({ imageResult: '' });
                // },2000);
              });
            },1000);
          }
          else {
            setTimeout( () => {
              this.setState({
                imageResult: images.crossMark,
                borderStyle: { borderWidth: 1, borderColor: 'rgb(191, 1, 1)' }
              }, () => {
                this.spring();
                // setTimeout( () => {
                //   this.setState({ imageResult: '' });
                // },2000);
              });
            },1000);

          }

          // onPressItemMultiple(answer, counter);

          var ansCounter = 0;

          answerArray.push(answer);
          console.log("counter: ",counter);
          console.log("answerArray: ",answerArray);

          for(var i=0; i<answerArray.length; i++)
          {
            if(answerArray[i] !== answerArray[i-1])
            {
              for(var j=0; j<this.state.correctoption.length; j++)
              {
                if(answerArray[i] === this.state.correctoption[j])
                {
                  ansCounter++;
                }
              }
            }
          }
          // console.log("ansCounter: ",ansCounter);
          if(ansCounter === this.state.correctoption.length)
          {
            clearInterval(timer);
            clearInterval(timer1);

            setTimeout( () => {
              correctAnswer();
            },2000);
          }
          else if(counter === this.state.correctoption.length)
          {
            clearInterval(timer);
            clearInterval(timer1);

            setTimeout( () => {
              incorrectAnswer();
            },2000);
          }
        }
      }


      render() {

        const { values, index } = this.props;
        // const { index } = this.props;

        if(index==0)
          {
            return (
              <TouchableWithoutFeedback onPress={() => this.checkAnswerMultiple(values.option)}>
                <Animatable.View ref={this.handleViewRef} style={[styles.firstOptionView, this.state.borderStyle, { flexDirection: 'row', backgroundColor: this.state.color}]}>
                  {/*<View style={styles.mainRadiusView}>
                    <View style={{flex: 1}}>
                      <View style={styles.optionLeftRadius}/>
                    </View>
                    <View style={styles.mainRightOptionRadius}>
                      <View style={styles.rightOptionRadius}/>
                    </View>
                  </View>*/}
                <View style={{ flex: 9, alignItems: 'center', }}>
                  <Text style={[styles.firstOptionText, {marginLeft: deviceWidth / 10,}]}>{values.option}</Text>
                </View>
                <View style={{ flex: 1, }}>
                  <Animated.Image source={this.state.imageResult} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
                </View>
                </Animatable.View>
              </TouchableWithoutFeedback>
            );
          }
          else {
            return (
              <TouchableWithoutFeedback onPress={() => this.checkAnswerMultiple(values.option)}>
                <Animatable.View ref={this.handleViewRef} style={[styles.firstOptionView, this.state.borderStyle, { flexDirection: 'row', backgroundColor: this.state.color}]}>
                <View style={{ flex: 9, alignItems: 'center', }}>
                  <Text style={[styles.firstOptionText, {marginLeft: deviceWidth / 10,}]}>{values.option}</Text>
                </View>
                <View style={{ flex: 1, }}>
                  <Animated.Image source={this.state.imageResult} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
                </View>
                </Animatable.View>
              </TouchableWithoutFeedback>
              );
            }

        }

    }

export default class ImgRandomQuiz extends Component {

   constructor(props){
    super(props);
    this.state = {
      percentage: 0,
      count: 0,
      score: 0,
      question : '',
      options : [],
      correctoption : [],
      userAnswer: false,
      animatedValue: new Animated.Value(0),
      modalVisible: false,
      customColor: 'purple',
      timeModal: false,
      loader: false,
    }

    this.animatedValue = new Animated.Value(0);
    this.springValue = new Animated.Value(1);

    setInterval(() => {
      if(this.state.customColor === 'purple'){
        this.setState({ customColor: 'green' })
      }
      else {
        this.setState({ customColor: 'purple' })
      }
    }, 500)

  }


  componentWillMount = async () => {
    console.log("willllll 2222");
    await firebase.database().ref('/Question').on('value', (snapshot) => {
      var queData = snapshot.val().quiz;
      arrnew = Object.keys(queData).map( function(k) { return queData[k] });
      // qno = Math.floor(Math.random() * arrnew.length);

      console.log("qno: ",qno);
      this.setState({
        question : arrnew[qno].question,
        options : arrnew[qno].options,
        correctoption : arrnew[qno].correctoption,
      });
      // console.log("length: ", this.state.correctoption.length);

    });
  }


   componentDidMount() {

     this.animate();




     timer = setInterval( () => {
       if(this.state.count < 30)
       {
         this.setState({
           percentage : this.state.percentage + 3.33,
           count : this.state.count + 1,
         })
       }
       else {
         this.setState({
           timeModal: true,
           // modalVisible: true,
           percentage: 0,
           count: 0,
         });
         clearInterval(timer);
       }
     },1000);


  }

  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate());
  }

  spring = () => {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }

  // onPressItem = (answer) => {
  //
  //   if(answer === this.state.correctoption[0])
  //   {
  //     this.correctAnswer();
  //   }
  //   else {
  //     this.incorrectAnswer();
  //   }
  // }

  // onPressItemMultiple = (answer, counter) => {
  //   var ansCounter = 0, temp=0;
  //   // console.log("this.state.correctoption: ",this.state.correctoption);
  //   if(this.state.count < 30)
  //   {
  //   answerArray.push(answer);
  //   console.log("counter: ",counter);
  //   console.log("answerArray: ",answerArray);
  //
  //   for(var i=0; i<answerArray.length; i++)
  //   {
  //     if(answerArray[i] !== answerArray[i-1])
  //     {
  //       for(var j=0; j<this.state.correctoption.length; j++)
  //       {
  //         if(answerArray[i] === this.state.correctoption[j])
  //         {
  //           ansCounter++;
  //         }
  //       }
  //     }
  //   }
  //   // console.log("ansCounter: ",ansCounter);
  //   if(ansCounter === this.state.correctoption.length)
  //   {
  //     this.correctAnswer();
  //   }
  //   else if(counter === this.state.correctoption.length)
  //   {
  //     this.incorrectAnswer();
  //   }
  //
  //   // if(temp === this.state.correctoption.length)
  //   // {
  //   //   console.log("not match");
  //   // }
  // }
  // }

  closeTimeModal = () => {
    nextCounter++;

    if(nextCounter === 1)
    {
      setTimeout( () => {
        this.setState({
          timeModal: false,
          // modalVisible: false
        });
      },2000);
      setTimeout( () => {
        this.setState({
          loader: true
        }, () => {
          setTimeout( () => {
            this.setState({ loader: false })
          },2000);
        });
      },2000);
      setTimeout( () => {
        this.next();
      },3000);
    }

  }

  next = () => {
    counter=0;
    nextCounter=0;
    answerArray = [];

    // this.setState({
    //   userAnswer: false
    // })

    timer1 = setInterval( () => {
      if(this.state.count < 30)
      {
        this.setState({
          percentage : this.state.percentage + 3.33,
          count : this.state.count + 1,
        })
      }
      else {
        this.setState({
          timeModal: true,
          // modalVisible: true,
          percentage: 0,
          count: 0,
        });
        clearInterval(timer1);
      }
    },1000);

    if(no < 9)
    {
      qno++;
      if(qno < 50)
      {
        no++;
        // qno = Math.floor(Math.random() * arrnew.length);

        this.setState({
          question : arrnew[qno].question,
          options : arrnew[qno].options,
          correctoption : arrnew[qno].correctoption,
        });
      }

    }
    else {
      qno++;
      if(qno < 50)
      {
        no = 0;
        // qno = Math.floor(Math.random() * arrnew.length);

        this.setState({
          question : arrnew[qno].question,
          options : arrnew[qno].options,
          correctoption : arrnew[qno].correctoption,
        });
      }

      clearInterval(timer1);
      this.props.navigation.navigate('Congrats', { score: this.state.score });

      // setTimeout( () => {
      //   this.props.navigation.navigate('Congrats', { score: this.state.score });
      // },1000);

    }
  }

  correctAnswer = () => {

      // clearInterval(timer);
      // clearInterval(timer1);
      // this.setState({
      //   userAnswer: true,
      // });

      // setTimeout( () => {
        this.setState({
          score: this.state.score + 10,
        });
        this.spring();
      // },2000);

      setTimeout( () => {
        this.setState({
          loader: true
        }, () => {
          setTimeout( () => {
            this.setState({ loader: false })
          },1000);
          setTimeout( () => {
            this.next();
          },1000);
          setTimeout( () => {
            this.setState({
              percentage: 0,
              count: 0,
            });
          }, 1000);
        });
      },2000);

      // setTimeout( () => {
      //   this.setState({
      //     modalVisible: true
      //   }, () => {
      //     setTimeout( () => {
      //       this.setState({ modalVisible: false })
      //     },2000);
      //     setTimeout( () => {
      //       this.setState({
      //         loader: true
      //       }, () => {
      //         setTimeout( () => {
      //           this.setState({ loader: false })
      //         },2000);
      //       });
      //     },2000);
          // setTimeout( () => {
          //   this.next();
          // },3000);
          // setTimeout( () => {
          //   this.setState({
          //     percentage: 0,
          //     count: 0,
          //   });
          // }, 3000);
      //   });
      // },2000);

  }

  incorrectAnswer = () => {

    setTimeout( () => {
      this.setState({
        loader: true
      }, () => {
        setTimeout( () => {
          this.setState({ loader: false })
        },1000);
        setTimeout( () => {
          this.next();
        },1000);
        setTimeout( () => {
          this.setState({
            percentage: 0,
            count: 0,
          });
        }, 1000);
      });
    },2000);

  }

  goToHome = () => {
    no = 0;
    qno = 0;
    this.setState({
      question : arrnew[qno].question,
      options : arrnew[qno].options,
      correctoption : arrnew[qno].correctoption,
      percentage: 0,
      count: 0,
    });
    this.props.navigation.goBack();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.count !== nextState.count || this.state.multiple !== this.state.multiple) {
  //     this.setState({
  //       count: nextState.count
  //       multiple: nextState.multiple
  //     });
  //   }
  //   return nextState
  // }

  onPressLearnMore = () => {
    this.props.navigation.navigate('Congrats', { score: this.state.score })
  }

  render(){

    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [16, 20, 16]
    })

    return(
      <View style={{flex:1, backgroundColor: '#FCFAFA'}}>
          <View style={styles.statusBar} />

            {/*<View style={ this.state.multiple
            ? styles.container
            : [styles.container, {paddingBottom:35}]
            }>*/}
            <View style={ this.state.loader || this.state.timeModal
              ? [styles.container, {opacity: 0.2}]
              : [styles.container, ]
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
              <View style={[styles.mainView]}>
                <View style={styles.viewQue}>
                  <Text style={styles.TextQue}>Que {no + 1}/10</Text>
                </View>

                <View style={styles.progressbarView}>
                    <CircularProgress percentage={this.state.percentage} progressWidth={22.5} size={53} donutColor='#3D14F4' fillColor='#FCFAFA' blankColor='#ECECEC'>
                    <Text style={{fontSize: 17, fontFamily: 'lato-bold'}}>{this.state.count}</Text>
                    </CircularProgress>
                  </View>

                <View style={styles.mainViewCoin}>
                  <View style={styles.subViewCoin}>
                    <Animated.Image source={images.coin} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
                  </View>
                  <View style={styles.view415}>
                    <Animatable.Text style={styles.text415} animation="pulse" easing="ease-in-out" iterationCount="infinite">
                      {this.state.score}
                    </Animatable.Text>
                  </View>
                </View>
              </View>
              {/*<Button
                onPress={this.onPressLearnMore}
                title="Go to"
                color="#841584"
                width={100}
                />*/}

              { this.state.correctoption.length > 1
                ? <View style={{height:70, alignItems: 'center', justifyContent: 'center'}}>
                    <Animated.Text style={{ fontSize: textSize, color: 'green', fontWeight: 'bold'}}>Choose {this.state.correctoption.length} Option for this Question</Animated.Text>
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

            <View style={styles.mainViewList}>

              {this.state.correctoption.length > 1
                ? <FlatList
                    data={this.state.options}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <OptionMultiple index={index} values={item} onPressItemMultiple={this.onPressItemMultiple} correctAnswer={this.correctAnswer} incorrectAnswer={this.incorrectAnswer} spring={this.spring}/>
                    }
                  />
                : <FlatList
                    data={this.state.options}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => <Option index={index} values={item} correctAnswer={this.correctAnswer} incorrectAnswer={this.incorrectAnswer} spring={this.spring}/>
                    }
                  />
              }

              <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.timeModal}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={{ flex:1, justifyContent: 'center', }}>
                <View style={{height: 200, alignItems: 'center', backgroundColor: 'rgb(250, 250, 250)', justifyContent: 'center', }}>
                  <View style={{ alignItems: 'center' }}>
                    <MaterialIcons name="access-time" size={70} />
                    <Text style={{ fontFamily: 'bubble-regular', fontSize: 28, marginTop: 10 }}>time out</Text>
                    <TouchableOpacity style={{ height: 40, width: 80, marginTop: 15, borderRadius: 10, backgroundColor: this.state.customColor, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.closeTimeModal()}>
                      <Text style={{ fontSize: 25, fontFamily: 'bubble-regular', color: 'white' }}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

              <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.loader}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={{ flex:1, justifyContent: 'center', }}>
                <View style={{height: 200, alignItems: 'center', justifyContent: 'center' }}>
                  <UIActivityIndicator color='#000' />
                </View>
              </View>
            </Modal>

              {/*<Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}>
                <View style={{ flex:1, justifyContent: 'center', }}>
                {this.state.userAnswer
                  ? <View style={{height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(250, 250, 250)',  }}>
                      <Image source={images.checkMark} style={{width: 100, height: 100}}/>
                      <Text style={{ color: this.state.customColor, fontFamily: 'bubble-regular', fontSize: 22, marginTop: 20 }}>Score is: {this.state.score}</Text>
                    </View>
                  : this.state.timeModal
                    ? <View style={{height: 200, alignItems: 'center', backgroundColor: 'rgb(250, 250, 250)', justifyContent: 'center', }}>
                        <View style={{ alignItems: 'center' }}>
                          <MaterialIcons name="access-time" size={70} />
                          <Text style={{ fontFamily: 'bubble-regular', fontSize: 28, marginTop: 10 }}>time out</Text>
                          <TouchableOpacity style={{ height: 40, width: 80, marginTop: 15, borderRadius: 10, backgroundColor: this.state.customColor, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.closeTimeModal()}>
                            <Text style={{ fontSize: 25, fontFamily: 'bubble-regular', color: 'white' }}>Next</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                  : <View style={{height: 200, alignItems: 'center', backgroundColor: 'rgb(250, 250, 250)', justifyContent: 'center' }}>
                      <View style={{ alignItems: 'center' }}>
                        <Image source={images.crossMark} style={{width: 100, height: 100}}/>
                        <Text style={{ color: this.state.customColor, fontFamily: 'bubble-regular', fontSize: 22, marginTop: 10 }}>Correct Answer is:</Text>

                        { this.state.correctoption.map((item, key)=>(
                           <Text key={key} style={{ color: this.state.customColor, fontFamily: 'bubble-regular', fontSize: 22 }}> { item } </Text>)
                        )}
                      </View>
                    </View>
              }
              </View>
            </Modal>*/}



          </View>
        </View>
      </View>
    );


  }
}
