import React, { Component } from "react";
import { View, Text, Image, ScrollView, KeyboardAvoidingView, ToastAndroid, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';
import { signUp } from '../firebaseServices/services';


export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      img: null,
      uname: '',
      email: '',
      password: '',
      coin: 0,
      isLoading: false,
      isProfileImage: false,
      ranking: 0,
    };
  }

  componentWillMount = () => {

    firebase.database().ref('Users/').on("value", (snapshot) => {
      var rank = snapshot.numChildren() + 1;
      this.setState({ ranking: rank });
    });

  }

  signUpUser = () => {

    var image = this.state.image;
    var uname = this.state.uname;
    var email = this.state.email;
    var password = this.state.password;
    var coin = this.state.coin;
    var ranking = this.state.ranking;

    if (this.state.uname && this.state.email && this.state.password && this.state.isProfileImage) {
      this.setState({ isLoading: true });
      signUp(email, password, uname, image, coin, ranking, this.success, this.error);
    } else if (this.state.isProfileImage === false) {
      Alert.alert('SignUp error', 'please, select profile image');
    } else if (this.state.uname && this.state.email) {
      Alert.alert('SignUp error', 'please, enter password');
    } else if (this.state.uname) {
      Alert.alert('SignUp error', 'please, enter email and password both');
    } else {
      Alert.alert('SignUp error', 'please, enter username, email and password both');
    }
  }

  success = () => {
    this.setState({ isLoading: false });
    Alert.alert('SignUp', 'you have done Signup successfully');
    this.props.navigation.navigate('SignIn');
  };

  error = (error) => {
    this.setState({ isLoading: false });
    Alert.alert('Error', 'can not signUp')
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
    });

    try {
      if (!result.cancelled) {
        this.setState({ image: result.uri, isProfileImage: true });
        var arr = result.uri.split('/');
        var imgName = arr[arr.length - 1];
        uploadUrl = this.uploadImageAsync(result.uri, imgName);
        this.setState({ img: result.uri });
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry :(');
    }
  };


  uploadImageAsync = async (uri, imgName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child("images/" + imgName);

    const snapshot = await ref.put(blob);
    ref.getDownloadURL().then((url) => {
      this.setState({ image: url });
    });
    return snapshot;
  }


  render() {
    let { image, img } = this.state;
    if (this.state.isLoading) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 250 }}>
          <Text>Please Wait...</Text>
          <ActivityIndicator size="large" color={'red'} />
        </View>
      )
    } else {
      return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <View style={styles.statusBar} />

          <View style={styles.headerView}>
            <TouchableOpacity style={styles.arrowView} onPress={() => this.props.navigation.goBack()}>
              <AntDesign name="arrowleft" size={25} color="rgb(72, 72, 72)" />
            </TouchableOpacity>
            <View style={styles.headerTextView}>
              <Text style={styles.headerText}>Sign up</Text>
            </View>
          </View>
          <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.mainView}>

              <View style={styles.profileView}>
                <TouchableOpacity onPress={this.pickImage} style={styles.profileOpacity}>
                  {image
                    ?
                    <Image source={{ uri: image }} style={styles.profilePic} />
                    :
                    <FontAwesome name="camera" size={25} color="rgb(255, 255, 255)" />
                  }
                </TouchableOpacity>
              </View>

              <View style={styles.userView}>
                <Text style={styles.userText}>Username</Text>
                <TextInput placeholder="name surname" placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.userInput} onChangeText={(uname) => this.setState({ uname })} value={this.state.uname} />
              </View>
              <View style={styles.emailView}>
                <Text style={styles.emailText}>Email address</Text>
                <TextInput placeholder="abc@mail.com" placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.emailInput} onChangeText={(email) => this.setState({ email })} value={this.state.email} />
              </View>
              <View style={styles.pwdView}>
                <Text style={styles.pwdText}>Create Password</Text>
                <TextInput placeholder="password" secureTextEntry={true} placeholderTextColor="rgb(154, 154, 154)" underlineColorAndroid="transparent" style={styles.pwdInput} onChangeText={(password) => this.setState({ password })} value={this.state.password} />
              </View>
              <View style={styles.registerView}>
                <TouchableOpacity style={styles.registerOpacity} onPress={() => this.signUpUser()}>
                  <View>
                    <Text style={styles.registerText}>Register now</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )
    }
  }
}
