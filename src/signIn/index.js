import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  ToastAndroid,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  AsyncStorage
} from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { Font } from 'expo';
import * as firebase from 'firebase';
import { signIns } from '../firebaseServices/services';
import AnimateLoadingButton from 'react-native-animate-loading-button';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

export default class signIn extends Component {

  constructor(props) {
    super(props);
    this._bootstrapAsync();
    this.state = {
      email: '',
      password: '',
    };
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('id_token');
    this.props.navigation.navigate(userToken ? 'Home' : 'SignIn');
  };

  async onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  signInUser = () => {
    var email = this.state.email;
    var password = this.state.password;
    if (this.state.email && this.state.password) {
      this.loadingButton.showLoading(true);
      signIns(email, password, this.success, this.error);
    } else {
      Alert.alert('SignIn error', 'please, enter email and password both');
    }
  }

  success = (data) => {
    this.onValueChange('id_token', data.user.uid);
    this.loadingButton.showLoading(false);
    this.setState({ email: null, password: null });
    this.props.navigation.navigate('Home');
  };

  error = (error) => {
    this.loadingButton.showLoading(false);
    Alert.alert('Error', error.message)
  };

  render() {
    // onPress={() => this.props.navigation.navigate('Home')}
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' enabled>
        <View style={styles.statusBar} />
        <View style={styles.newUserView}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.newUserText}>New user?</Text>
          </TouchableOpacity>
        </View>
        <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1 }}>

          <View style={styles.mainView}>
            <View style={[styles.logoView]}>
              <Image source={images.quizer_logo} style={styles.logoText} />
            </View>
            <View style={{ height: Height / 2 }}>
              <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Welcome to Quizer</Text>
                <View style={styles.greenLine}></View>
              </View>


              <View style={[styles.userView,]}>
                <Text style={styles.userText}>Email address</Text>
                <TextInput placeholder="E-mail" placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.userInput} onChangeText={(email) => this.setState({ email })} value={this.state.email} />
              </View>
              <View style={{ flex: 1, }}>
                <Text style={styles.pwdText}>Password</Text>
                <View style={styles.pwdInView}>
                  <View style={{ flex: 8 }}>
                    <TextInput secureTextEntry={true} placeholder="password" placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.pwdInput} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
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
              <AnimateLoadingButton
                ref={c => (this.loadingButton = c)}
                width={300}
                height={50}
                title="Sign in"
                titleFontSize={16}
                titleColor="rgb(255,255,255)"
                backgroundColor="rrgb(82, 25, 247)"
                borderRadius={30}
                onPress={this.signInUser.bind(this)}
              />
              {/* <TouchableOpacity style={styles.signInOpacity} onPress={() => this.signInUser()}>
                  <Text style={styles.signInText}>Sign in</Text>
                </TouchableOpacity> */}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
