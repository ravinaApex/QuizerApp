import React, { Component } from "react";
import { View, Text, Animated, Image, TouchableOpacity, TouchableHighlight, AsyncStorage, Alert, TouchableWithoutFeedback } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentUserAction from "../actions/currentUserAction";
import { createHistory } from '../firebaseServices/services';
import moment from 'moment';

var name, surname;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      sports: false,
      physics: false,
      movies: false,
      politics: false,
      history: false,
      maths: false,
      logo: false,
      technology: false,
      profile: null,
      coin: 0,
      ranking: 0,
      category: '',
    }
    this.springValue = new Animated.Value(1);
  }

// let counter=1
  conceptQue() {
    var quizTo = moment(new Date()).format('HH:mm:ss')
    setTimeout(() => {
      if(this.state.category)
      {
        this.props.navigation.navigate('conceptQue1', { category: this.state.category, coin: this.props.currentUserData.coin, rank: this.props.currentUserData.ranking, quizTo: quizTo });
        this.setState({ category: '' });
        AsyncStorage.getItem("id_token").then((tokenValue) => {
          firebase.database().ref(`/Users/${tokenValue}`).once('value', (data) => {
            createHistory();
          });
        });
      }
      else {
        Alert.alert('select category..')
      }
    }, 1000);

  }

  componentWillMount(){
    this.props.Actions.currentUserData().then(data => {
      var arr = data.uname.split(' ');
      this.setState({
        name: arr[0],
        surname: arr[1],
      })
    });
  }

  // componentWillReceiveProps(props){
  //   var arr = this.props.currentUserData.uname.split(' ');
  //   this.setState({
  //     name: arr[0],
  //     surname: arr[1],
  //   })
  // }



  handleViewRef = ref => this.view = ref;

  getCategory = (category) => {
    this.springValue.setValue(0.5)
    if (category === 'Sports') {
      this.setState({
        sports: true
      }, () => {
        setTimeout( () => {
          this.setState({ sports: false })
        },1000);
      });
    } else if (category === 'Physics') {
      this.setState({
        physics: true
      }, () => {
        setTimeout( () => {
          this.setState({ physics: false })
        },1000);
      });
    } else if (category === 'Movies') {
      this.setState({
        movies: true
      }, () => {
        setTimeout( () => {
          this.setState({ movies: false })
        },1000);
      });
    } else if (category === 'Politcs') {
      this.setState({
        politics: true
      }, () => {
        setTimeout( () => {
          this.setState({ politics: false })
        },1000);
      });
    } else if (category === 'History') {
      this.setState({
        history: true
      }, () => {
        setTimeout( () => {
          this.setState({ history: false })
        },1000);
      });
    } else if (category === 'Maths') {
      this.setState({
        maths: true
      }, () => {
        setTimeout( () => {
          this.setState({ maths: false })
        },1000);
      });
    } else if (category === 'Logo') {
      this.setState({
        logo: true
      }, () => {
        setTimeout( () => {
          this.setState({ logo: false })
        },1000);
      });
    } else if (category === 'Technology') {
      this.setState({
        technology: true
      }, () => {
        setTimeout( () => {
          this.setState({ technology: false })
        },1000);
      });
    }
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start();

    this.setState({ category: category });
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.headerView}>
          <View style={styles.logoView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
              <MaterialIcons name="sort" size={27} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Quizer</Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={[styles.tab1, { marginHorizontal: 10 }]}>
            <View style={[styles.tab1_childView1, { flex: 1 }]}>
              <Animatable.View animation="bounceInDown" duration={2000} style={{ flex: 1 }} direction="normal">
                <LinearGradient
                  colors={['rgb(89, 189, 241)', 'rgb(113, 32, 219)',]}
                  start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
                  locations={[0.1, 1]}
                  style={styles.gradientPurple}>
                  <View style={styles.yourRankingView}><Text style={styles.yourRankingText}>Y O U R   R A N K I N G</Text></View>
                  <View style={styles.rankingNumView}>
                    <Feather name="hash" size={20} color="#fff" style={{ marginTop: 7 }} />
                    <Text style={styles.rankingNumText}> {this.props.currentUserData.ranking}</Text>
                  </View>
                </LinearGradient>
              </Animatable.View>

              <Animatable.View animation="bounceInUp" duration={2000} style={{ flex: 1 }} direction="normal">

                <LinearGradient
                  colors={['rgb(89, 189, 241)', 'rgb(19, 216, 97)',]}
                  start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
                  locations={[0.07, 1]}
                  style={styles.gradientGreen}>
                  <View style={styles.coinsEarnedView}><Text style={styles.coinsEarnedText}>C O I N S   E A R N E D</Text></View>
                  <View style={styles.coinsNumView}>
                    <MaterialCommunityIcons name="coins" size={20} color="#fff" style={{ marginTop: 6 }} />
                    <Text style={styles.coinsNumText}>  {this.props.currentUserData.coin}</Text>
                  </View>
                </LinearGradient>
              </Animatable.View>
            </View>

            <Animatable.View animation="bounceInLeft" duration={2000} direction="normal">
              <View style={[styles.tab1_childView2, { paddingHorizontal: 2 }]}>
                <View style={styles.profileView}>
                  <View style={styles.yourProfileView}>
                    <Text style={styles.yourProfileText}>Y O U R   P R O F I L E</Text>
                  </View>
                  <View style={styles.profilePicView}>
                    <Image source={{ uri: this.props.currentUserData.profile }} style={styles.profilePic} />
                  </View>
                  <View style={styles.unameView}>
                    <Text style={styles.nameText}>{this.state.name}</Text>
                    <Text style={styles.surnameText}>{this.state.surname}</Text>
                  </View>
                  <View style={styles.fullNameView}>
                    <Text style={styles.fullNameText}>@samantha_smith</Text>
                  </View>
                </View>
              </View>
            </Animatable.View>
          </View>
          <View style={[styles.tab2, { marginHorizontal: 10, }]}>
            <View style={styles.quizCateView}><Text style={styles.quizCateText}>Q U I Z   C A T E G O R I E S</Text></View>
            <View style={styles.imagePart1}>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Sports")}>
                {
                  this.state.sports
                  ? <Animated.Image source={images.sports} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.sports} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Physics")}>
                {
                  this.state.physics
                  ? <Animated.Image source={images.physics} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.physics} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Physics</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Movies")}>
                {
                  this.state.movies
                  ? <Animated.Image source={images.movies} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.movies} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Movies</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Politcs")}>
                {
                  this.state.politics
                  ? <Animated.Image source={images.politics} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.politics} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Politcs</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imagePart1}>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("History")}>
                {
                  this.state.history
                  ? <Animated.Image source={images.history} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.history} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Maths")}>
                {
                  this.state.maths
                  ? <Animated.Image source={images.maths} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.maths} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Maths</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Logo")}>
                {
                  this.state.logo
                  ? <Animated.Image source={images.logo} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.logo} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Logo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView1} onPress={() => this.getCategory("Technology")}>
                {
                  this.state.technology
                  ? <Animated.Image source={images.technology} style={[styles.imageDisplay, {transform: [{scale: this.springValue}]}]} />
                  : <Image source={images.technology} style={styles.imageDisplay} />
                }
                <Text style={styles.imageText}>Technology</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1.2, }}>
           <TouchableOpacity style={styles.buttonOpacity} onPress={() => this.conceptQue()}>
              <Text style={styles.buttonText}>Start Quiz</Text>
            </TouchableOpacity>
            {/*<AnimateLoadingButton
              ref={c => (this.loadingButton = c)}
              width={300}
              height={50}
              title="Start Random Quiz"
              titleFontSize={16}
              titleColor="rgb(255,255,255)"
              backgroundColor="rrgb(82, 25, 247)"
              borderRadius={40}
              onPress={this.conceptQue.bind(this)}
            // onPress={this.props.navigation.navigate('conceptQue1')}
            />*/}
          </View>
        </View>

      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    currentUserData: state.quiz.currentUserData,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(currentUserAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
