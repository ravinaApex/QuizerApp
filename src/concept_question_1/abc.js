import React, {Component} from "react";
import {Dimensions, View, Text, StyleSheet, TouchableWithoutFeedback, Animated, Easing, ScrollView, Alert, Button, Image, clickBar, TextInput, TouchableOpacity,ProgressBarAndroid,ImageBackground } from "react-native";
import {CircularProgress} from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import images from './../images';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const deviceWidth = Dimensions.get("window").width;
import * as firebase from 'firebase';
var database = firebase.app().database();
var no = 0, answerArray = [];
var timer;
import * as Animatable from 'react-native-animatable';


export default class ImgRandomQuiz extends Component {
  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
  }

  // componentDidMount(){
  //   Animated.timing(this.animatedValue, {
  //     toValue: 150,
  //     duration: 3000,
  //     easing: Easing.bounce,
  //   }).start();
  // }

  open(){
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 3000,
      easing: Easing.bounce,
    }).start();
  }

  render(){
    const animatedStyle = { height: this.animatedValue };

    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.open.bind(this)}>
          <Animated.View style={[{ height: 100, width: 100, backgroundColor: 'yellow' }, animatedStyle]}>
            <Text>Hello</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }
}
