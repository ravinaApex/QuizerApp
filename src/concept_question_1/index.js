import React, {Component} from "react";
import { AsyncStorage, Dimensions, View, Button, Text, StyleSheet, FlatList, Modal, TouchableHighlight, TouchableWithoutFeedback, Animated, Easing, ScrollView, Alert, Image, clickBar, TextInput, TouchableOpacity,ProgressBarAndroid,ImageBackground } from "react-native";
import {CircularProgress} from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import images from './../images';
import { Audio, Expo } from 'expo';
import * as Animatable from 'react-native-animatable';
import { ColorDotsLoader } from 'react-native-indicator';
import { updateCoin, updateHistory } from '../firebaseServices/services';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentUserAction from "../actions/currentUserAction";
var no = 0, n=0, totalNo = 10, qno=0, totalQno = 10, answerArray = [], counter = 0, nextCounter = 0;
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

  componentWillMount = async () => {
    // console.log("will");

    var { values, index } = this.props;
    console.log("render values    test demo::",values.option);
    var urlopt = values.option.split('//');
    console.log("urlopt",urlopt);
    var split = urlopt[0];
    var split1 =urlopt[1];
    // console.log("componentwillmount:::::::::::: split::",split);
    this.setState({
      splitopt:split,
    });
    console.log("setState splitopt will ::::",this.state.splitopt);


    this.setState({
      correctoption: arrnew[qno].correctoption,
    });
    try{
     await Audio.setIsEnabledAsync(true);
    }
    catch(error)
    {
      console.log("error 111: ",error);
    }
  }

  handleViewRef = ref => this.view = ref;

  spring = async (tone) => {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start();

    const soundObject = new Audio.Sound();
    try {
      if(tone === true)
      {
        await soundObject.loadAsync(require('../../assets/sound/trueTone.mp3'));
      }
      else {
        await soundObject.loadAsync(require('../../assets/sound/falseTone.mp3'));
      }
      soundObject.playAsync();
      soundObject.setPositionAsync(0);
    } catch (error) {
    // An error occurred!
    console.log("error 222: ",error);
    }
  }

  checkAnswer = (answer) => {
    const { correctAnswer, incorrectAnswer, spring } = this.props;
    // this.setState({ counter: this.state.counter + 1 })


    counter++;

    if(counter === 1)
    {
      // this.view.shake(1000);
      this.setState({
        color: 'rgb(227, 231, 234)'
      },() => {
        setTimeout( () => {
          this.setState({ color: '#fff' })
        },1000);
      });

      // onPressItem(answer);

      if(answer === arrnew[qno].correctoption[0])
      {
        clearInterval(timer);
        clearInterval(timer1);
        setTimeout( () => {
          this.setState({
            imageResult: images.checkMark,
            borderStyle: { borderWidth: 1, borderColor: 'rgb(29, 142, 102)' }
          }, () => {
            this.spring(true);
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
            this.spring(false);
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

    var { values, index } = this.props;
    var urlopt = values.option.split('//');
    //console.log("urlopt",urlopt);
    var split = urlopt[0];

    console.log("split in render 18",split);

    return (
      <TouchableWithoutFeedback onPress={() => this.checkAnswer(values.option)}>
        <View style={[styles.firstOptionView, this.state.borderStyle,  { flexDirection: 'row', backgroundColor: this.state.color}]}>
          <View style={{ flex: 9, alignItems: 'center', }}>
            {/* <Text style={[styles.firstOptionText, {marginLeft: deviceWidth / 10,}]}>{values.option}</Text> */}
            
            {
              split !== "http:" && split !== "https:"
               ? <Text style={styles.firstOptionText}>{values.option}</Text>
               : <Image source={{ uri: values.option }} style={{width: 50, height: 50}}/>
             }

          </View>
          <View style={{ flex: 1, }}>
            {/*<Image source={this.state.imageResult} style={{width: 20, height: 20 }} />*/}
            <Animated.Image source={this.state.imageResult} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      );
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

      componentWillMount = async () => {
        this.setState({
          correctoption: arrnew[qno].correctoption,
        });

        try{
         await Audio.setIsEnabledAsync(true);
        }
        catch(error)
        {
          console.log("error 333: ",error);
        }
      }

      spring = async (tone) => {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1
          }
        ).start();

        const soundObject = new Audio.Sound();
        try {
          if(tone === true)
          {
            await soundObject.loadAsync(require('../../assets/sound/trueTone.mp3'));
          }
          else {
            await soundObject.loadAsync(require('../../assets/sound/falseTone.mp3'));
          }
          soundObject.playAsync();
          soundObject.setPositionAsync(0);
        } catch (error) {
        // An error occurred!
        console.log("error 444: ",error);
        }

      }

      checkAnswerMultiple = (answer) => {
        const { correctAnswer, incorrectAnswer } = this.props;
        counter++;
        var temp=0;
        if(counter <= arrnew[qno].correctoption.length)
        {
          // this.view.shake(1000);
          this.setState({
            color: 'rgb(227, 231, 234)'
          },() => {
            setTimeout( () => {
              this.setState({ color: '#fff' })
            },1000);
          });

          for(var i=0; i<arrnew[qno].correctoption.length; i++)
          {
            if(answer === arrnew[qno].correctoption[i])
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
                this.spring(true);
              });
            },1000);
          }
          else {
            setTimeout( () => {
              this.setState({
                imageResult: images.crossMark,
                borderStyle: { borderWidth: 1, borderColor: 'rgb(191, 1, 1)' }
              }, () => {
                this.spring(false);
              });
            },1000);
          }

          var ansCounter = 0;
          answerArray.push(answer);
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

        return (
          <TouchableWithoutFeedback onPress={() => this.checkAnswerMultiple(values.option)}>
            <View style={[styles.firstOptionView, this.state.borderStyle, { flexDirection: 'row', backgroundColor: this.state.color}]}>
              <View style={{ flex: 9, alignItems: 'center', }}>
                <Text style={[styles.firstOptionText, {marginLeft: deviceWidth / 10,}]}>{values.option}</Text>
              </View>
              <View style={{ flex: 1, }}>
                <Animated.Image source={this.state.imageResult} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
              </View>
            </View>
          </TouchableWithoutFeedback>
          );
        }
    }

class ImgRandomQuiz extends Component {

   constructor(props){
    super(props);
    this.state = {
      percentage: 0,
      count: 30,
      coin: 0,
      earnedCoin: 0,
      rank: 0,
      quizTo: '',
      question : '',
      options : [],
      correctoption : [],
      userAnswer: false,
      animatedValue: new Animated.Value(0),
      modalVisible: false,
      customColor: 'purple',
      timeModal: false,
      loader: false,
      progressColor: 'green',
      quizModal: false,
      splitque:'',
      splitopt:'',
      splitimg:'',
      imgemoji :'images.thinking',
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
    console.log("will");
    try{
     await Audio.setIsEnabledAsync(true);
    }
    catch(error)
    {
      console.log(error);
    }

    var category = this.props.navigation.state.params.category;
    this.setState({ coin: this.props.navigation.state.params.coin });
    this.setState({ ranking: this.props.navigation.state.params.rank });
    this.setState({ quizTo: this.props.navigation.state.params.quizTo });

    this.props.Actions.quizData(category).then(data => {

      arrnew = Object.keys(data).map( function(k) { return data[k] });
      // qno = Math.floor(Math.random() * arrnew.length);
      console.log("arrnew: ",arrnew);
      this.setState({
        question : arrnew[qno].question,
        options : arrnew[qno].options,
        correctoption : arrnew[qno].correctoption,
      });

      var temp = this.state.options.map((obj) => {
        //console.log("obj:  ",obj.option);

        var urlopt = obj.option.split('//');
        //console.log("componentWillMount urlopt::::::999",urlopt);
        var split = urlopt[0];
        var split1 =urlopt[1];
        var margeurl = `${split}//${split1}`
        console.log("componentwillmount:::::::::::: split::",split);
        this.setState({
          splitopt:split,
          splitimg:split1,

        });
        console.log("splitopt componentWillMount  stste::::::::",this.state.splitopt);
      })


      console.log("this.stste.question999999999",this.state.question);
      var urlquestion = this.state.question;
      var urlque =  this.state.question.split('//');
      var split = urlque[0];
      var split1 =urlque[1];
      this.setState({
        splitque:split
      });
      console.log("splitque::",this.state.splitque);
        console.log("// QUESTION:",urlquestion);
      console.log("split:",split);
      console.log("split1:", split1);
    });



  }

  componentWillReceiveProps(props){
    console.log("componentWillReceiveProps: ");
    // if(this.props.quizData)
    // {
    //   var queData = this.props.quizData;
    //   console.log("this.props.quizData: ",this.props.quizData);
    //   arrnew = Object.keys(queData).map( function(k) { return queData[k] });
    //   // qno = Math.floor(Math.random() * arrnew.length);
    //   console.log("arrnew: ",arrnew);
    //   this.setState({
    //     question : arrnew[qno].question,
    //     options : arrnew[qno].options,
    //     correctoption : arrnew[qno].correctoption,
    //   });
    // }

  }

   componentDidMount() {

     this.animate();
     timer = setInterval( () => {
       if(this.state.count > 0)
       {
         this.setState({
           percentage : this.state.percentage + 3.33,
           count : this.state.count - 1,
         })
         if(this.state.count < 15 && this.state.count > 5)
         {
           this.setState({ 
             progressColor: 'blue',  
             imgemoji : images.thinking_face_123,
            });
         }
         else if(this.state.count <= 5 && this.state.count >= 0){
           this.setState({ 
             progressColor: 'red',
             imgemoji : images.sad,
            });
         }
         else {
           this.setState({ 
             progressColor: 'green',
             imgemoji :images.thinking_face,
            });
         }
       }
       else {
         this.setState({
           timeModal: true,
           percentage: 0,
           count: 30,
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

  spring = async () => {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start();

    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../../assets/sound/coinTone.mp3'));
      soundObject.playAsync();
      soundObject.setPositionAsync(0);
    } catch (error) {
      console.log("error 555: ",error);
    }
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
    this.setTimer();
    no++;
    n++;
    // qno = Math.floor(Math.random() * arrnew.length);
    if(qno < 14)
    {
      qno++;
    }
    else {
      qno = 0;
    }
    console.log("n:",n);
    if(n == 10)
    {
      updateCoin(this.state.coin);
      // AsyncStorage.getItem("id_token").then((tokenValue) => {
      //   firebase.database().ref(`/Users/${tokenValue}`).once('value', (data) => {
      //     updateHistory(this.state.coin, this.state.ranking, this.state.earnedCoin, this.state.quizTo, tokenValue);
      //   });
      // });
      updateHistory(this.state.coin, this.state.ranking, this.state.earnedCoin, this.state.quizTo);
      // updateRank();
      this.setState({ quizModal: true });
      clearInterval(timer1);
      n=0;
    }
    this.setState({
      question : arrnew[qno].question,
      options : arrnew[qno].options,
      correctoption : arrnew[qno].correctoption,
    });

    var urlquestion = this.state.question;
    var urlque =  this.state.question.split('//');
    var split = urlque[0];
    var split1 =urlque[1];
    this.setState({
      splitque:split
    });

    var temp = this.state.options.map((obj) => {
      // console.log("obj  next question:  ",obj.option);

      var urlopt = obj.option.split('//');
      // console.log(" next:::: componentWillMount urlopt::::::999",urlopt);
      var split = urlopt[0];
      var split1 =urlopt[1];
      var margeurl = `${split}//${split1}`

      // console.log("next split::: componentwillmount:::::::::::: split::",split);
      this.setState({
        splitopt:split,
        splitimg:split1,

      });
      // console.log("next::: splitopt componentWillMount  stste::::::::",this.state.splitopt);
    })
  }

  setTimer = () => {
    timer1 = setInterval( () => {
      if(this.state.count > 0)
      {
        this.setState({
          percentage : this.state.percentage + 3.33,
          count : this.state.count - 1,
        })

        if(this.state.count < 15 && this.state.count > 5)
        {
          this.setState({ 
            progressColor: 'blue',
            imgemoji : images.thinking_face_123,  
          });
        }
        else if(this.state.count <= 5 && this.state.count >= 0){
          this.setState({ 
            progressColor: 'red',
            imgemoji : images.sad,  
          });
        }
        else {
          this.setState({ 
            progressColor: 'green',
            imgemoji :images.thinking_face,  
          });
        }
      }
      else {
        this.setState({
          timeModal: true,
          percentage: 0,
          count: 30,
        });
        clearInterval(timer1);
      }
    },1000);
  }

  correctAnswer = () => {
       setTimeout( () => {
        this.setState({
          coin: this.state.coin + 10,
          earnedCoin: this.state.earnedCoin + 10,
        });
        this.spring();
      },1000);


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
              count: 30,
            });
          }, 1000);
        });
      },2000);
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
            count: 30,
          });
        }, 1000);
      });
    },2000);

  }

  goToHome = () => {
    no = 0;
    qno = 0;
    n = 0;
    totalQno = 10;
    this.setState({
      question : arrnew[qno].question,
      options : arrnew[qno].options,
      correctoption : arrnew[qno].correctoption,
      percentage: 0,
      count: 30,
    });
    this.props.navigation.goBack();
    updateCoin(this.state.coin);
    updateHistory(this.state.coin, this.state.ranking, this.state.earnedCoin, this.state.quizTo);

    // AsyncStorage.getItem("id_token").then((tokenValue) => {
    //   firebase.database().ref(`/Users/${tokenValue}`).once('value', (data) => {
    //     updateHistory(data.val().coin, data.val().ranking, this.state.earnedCoin, tokenValue);
    //   });
    // });
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

  onPressLearnMore = async () => {
    console.log("click");
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../../assets/sound/beep-01a.mp3'));
      soundObject.playAsync();
      soundObject.setPositionAsync(0);
    } catch (error) {
      console.log("error 666: ",error);
    }
  }

  continueQuizModal = () => {

    setTimeout( () => {
      this.setState({ quizModal: false });
    }, 1000);
    totalQno = totalQno + 10;
    this.setTimer();
  }

  cancelQuizModal = () => {
    setTimeout( () => {
      this.setState({ quizModal: false });
    }, 1000);
    no = 0;
    qno = 0;
    n = 0;
    totalQno = 10;
    setTimeout( () => {
      this.props.navigation.navigate('Congrats', { coin: this.state.coin });
    }, 1000);
    updateCoin(this.state.coin);
    updateHistory(this.state.coin, this.state.ranking, this.state.earnedCoin, this.state.quizTo);
    // AsyncStorage.getItem("id_token").then((tokenValue) => {
    //   firebase.database().ref(`/Users/${tokenValue}`).once('value', (data) => {
    //     updateHistory(data.val().coin, data.val().ranking, this.state.earnedCoin, tokenValue);
    //   });
    // });
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
            <View style={ this.state.loader || this.state.timeModal || this.state.quizModal
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
                  <Text style={styles.TextQue}>Que {no + 1}/{totalQno}</Text>
                </View>

                <View style={styles.progressbarView}>
                    <CircularProgress percentage={this.state.percentage} progressWidth={22.5} size={53} donutColor={this.state.progressColor} fillColor='#FCFAFA'  blankColor='#ECECEC'>

                    <Image source={this.state.imgemoji} style={{width: 25, height: 25, opacity: .9,marginBottom:5}}/>

                    <View style={{width: 30,height: 30,borderRadius: 100/2, backgroundColor: '#8270BA',alignItems:'center',justifyContent:'center',marginBottom:30}}>
                    <Text style={{fontSize: 15, fontFamily: 'lato-bold',color:'white'}}>{this.state.count}</Text>
                    </View>
                    </CircularProgress>
                    </View>

                <View style={styles.mainViewCoin}>
                  <View style={styles.subViewCoin}>
                    <Animated.Image source={images.coin} style={{width: 20, height: 20, transform: [{scale: this.springValue}]}} />
                  </View>
                  <View style={styles.view415}>
                    <Animatable.Text style={styles.text415} animation="pulse" easing="ease-in-out" iterationCount="infinite">
                      {this.state.coin}
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
                  <ScrollView style={styles.mainViewBottomRadius}>
                    <View style={styles.subbottomLeftRadiusView}>
                      <View style={styles.bottomLeftRadiusView}/>
                    </View>
                    <View style={styles.subbottomRightRadiusView}>
                      <View style={styles.bottomRightRadiusView}>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View style={styles.mainViewQuestion}>
                  <View style={styles.subViewQuestion}>
                    <Text style={styles.question6Text}>Question {no + 1}</Text>
                    {/* <Text style={styles.questionText}>{this.state.question}</Text> */}

                    { this.state.splitque !== "http:"
                      ?<Text style={styles.questionText}>{this.state.question}</Text>
                     :<Image source={{ uri: this.state.question }} style={{width: 50, height: 50}}/>
                    }

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
                      <Image source={images.timeout} style={{width: 130, height: 130}}/>
                      {/*<Text style={{ fontFamily: 'bubble-regular', fontSize: 28, marginTop: 10 }}>time out</Text>*/}
                      <TouchableOpacity style={{ height: 40, width: 80, marginTop: 15, borderRadius: 10, backgroundColor: 'rgb(52, 71, 94)', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.closeTimeModal()}>
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
                    <ColorDotsLoader color1='red' color2='green' color3='blue'/>
                  </View>
                </View>
              </Modal>

              <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.quizModal}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={{ flex:1, justifyContent: 'center', }}>
                  <View style={{height: 200, alignItems: 'center', backgroundColor: 'rgb(250, 250, 250)', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 28, marginTop: 10, fontFamily: 'bubble-regular', }}>Want to Continue Quiz?</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20, }}>
                      <TouchableOpacity style={{ height: 40, width: 100, borderRadius: 10, backgroundColor: 'rgb(29, 142, 102)', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.continueQuizModal()}>
                        <Text style={{ fontSize: 25, fontFamily: 'bubble-regular', color: 'white' }}>Continue</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ height: 40, width: 80, marginLeft: 30, borderRadius: 10, backgroundColor: 'rgb(191, 1, 1)', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.cancelQuizModal()}>
                        <Text style={{ fontSize: 25, fontFamily: 'bubble-regular', color: 'white' }}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
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
                      <Text style={{ color: this.state.customColor, fontFamily: 'bubble-regular', fontSize: 22, marginTop: 20 }}>coin is: {this.state.coin}</Text>
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

function mapStateToProps(state) {
  console.log("state.quiz.quizData: ",state.quiz.quizData);
  return {
    quizData: state.quiz.quizData,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(currentUserAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ImgRandomQuiz);
