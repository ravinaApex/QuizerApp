import React, {Component} from "react";
import { View, Text, Image, Dimensions, ScrollView, ToastAndroid, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { Font } from 'expo';
import * as firebase from 'firebase';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

export default class signIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
     };
  }

  signInUser = (email, password) => {
    // this.props.navigation.navigate('Home');

    if (email === '' || password === '') {
      ToastAndroid.show('fill the all fields', ToastAndroid.SHORT);
    } else {
      if(password.length >= 6)
      {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{
          this.props.navigation.navigate('Home');
        }).catch((error)=>{
          console.log("error: ", error);
          ToastAndroid.show('Email or Password may be incorrect', ToastAndroid.SHORT);
        });
      }
      else {
        ToastAndroid.show('Password must be up to 6 length', ToastAndroid.SHORT);
      }
    }
  }

  render(){
// onPress={() => this.props.navigation.navigate('Home')}
    return(
      <KeyboardAvoidingView style={{ flex:1 }} behavior='padding' enabled>
        <View style={styles.statusBar} />
          <View style={styles.newUserView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.newUserText}>New user?</Text>
            </TouchableOpacity>
          </View>
          <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1}}>

          <View style={styles.mainView}>
            <View style={[styles.logoView]}>
              <Image source={ images.quizer_logo } style={styles.logoText}/>
            </View>
            <View style={{ height: Height / 2 }}>
              <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Welcome to Quizer</Text>
                <View style={styles.greenLine}></View>
              </View>


              <View style={[styles.userView,]}>
                <Text style={styles.userText}>Username or Email address</Text>
                <TextInput placeholder = "abc@mail.com" placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.userInput} onChangeText={(email) => this.setState({email})} value={this.state.email}/>
              </View>
              <View style={{ flex:1,}}>
                <Text style={styles.pwdText}>Password</Text>
                <View style={styles.pwdInView}>
                  <View style={{ flex: 8 }}>
                    <TextInput secureTextEntry={true} placeholder = "password" placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.pwdInput} onChangeText={(password) => this.setState({password})} value={this.state.password}/>
                  </View>
                  <View style={styles.forgotView}>
                    <TouchableOpacity>
                      <Text style={styles.forgotText}>Forgot?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
          </View>
          <View style={[styles.signInView,]}>
            <TouchableOpacity style={styles.signInOpacity} onPress={() => this.signInUser(this.state.email, this.state.password)} >
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
