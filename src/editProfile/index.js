import React, { Component } from "react";
import { View, Text, Image, Dimensions, ScrollView, ImageBackground, TextInput, TouchableOpacity, AsyncStorage } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { LinearGradient } from 'expo';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import LineChart from "react-native-responsive-linechart";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import _ from 'lodash';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { updateImg } from '../firebaseServices/services';
import { bindActionCreators } from 'redux';
import { ImagePicker } from 'expo';
import * as currentUserAction from "../actions/currentUserAction";
import moment from 'moment';
var rankArray = [], weekDate = [], temp = [], coinArray, tempData = {};

const data = [10, 20, 18, 40, 38, 60, 70];
const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const config = {
  interpolation: "spline",
  line: { visible: false },
  yAxis: { visible: false },
  grid: { visible: false },
  // yAxis: {
  //   visible: true,
  // },
  xAxis: { visible: true },
  area: {
    gradientFrom: 'rgb(90, 195, 15)',
    gradientFromOpacity: 1,
    gradientTo: 'yellow',
    gradientToOpacity: 0.4,
  },
  insetX: 10,
  insetY: 10
};



class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      profile: null,
      tab1: 'false',
      tab2: 'true',
      tab3: 'false',
      image: null,
      img: null,
      isProfileImage: false,
    }
  }

  _pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
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
      updateImg(url);
      this.setState({ image: url });
      // updateImg(image);
    });

    return snapshot;
  }


  componentWillMount = () => {

    this.props.Actions.currentUserData().then(data => {
      var arr = data.uname.split(' ');
      this.setState({
        name: arr[0],
        surname: arr[1],
      })
    });

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    weekDate = [], temp = [], tempData = {};
    rankArray = [];

    var weeknumber = moment(new Date(), "DD-MM-YYYY").week();

    weekDays.map((obj) => {
      var test = moment().day(obj).week(weeknumber - 1);
      weekDate.push(moment(test).format('DD-MM-YYYY'));
    })

    AsyncStorage.getItem("id_token").then((tokenValue) => {
      this.props.Actions.historyData(tokenValue);
    });

    var test = false;
    var rank, coin, arr;
    weekDate.map((date) => {
      this.props.historyData.map((obj) => {
        if (date === obj.key) {
          test = true;
        }
      });
      if (test === true) {
        this.props.historyData.map((obj) => {
          if (obj.key === date) {
            obj.data.map((inData) => {
              if (inData.length !== 1) {
                arr = Object.keys(inData).map(function (k) { return inData[k] });
                arr.map((obj) => {
                  rank = obj.ranking;
                });
                rankArray.push(rank);
              }
              else {
                inData.map((obj) => {
                  rankArray.push(obj.ranking);
                })
              }
            })
          }
        })
      }
      else {
        rankArray.push(0);
      }
    });
    console.log('rankArray: ', rankArray);

    this.props.historyData.map((outData) => {
      outData.data.map((inData) => {
        if (inData.length !== 1) {
          arr = Object.keys(inData).map(function (k) { return inData[k] });
          arr.map((obj) => {
            coin = obj.totalCoin;
          });
          tempData = {
            date: outData.key,
            coin: coin
          }
          temp.push(tempData);
        }
        else {
          inData.map((obj) => {
            tempData = {
              date: outData.key,
              coin: obj.totalCoin
            }
            temp.push(tempData);
          })
        }
      });
    });
    coinArray = temp.reverse();
    console.log('coinArray: ',coinArray);

  }

  tab1 = () => {
    this.setState({
      tab1: 'true',
      tab2: 'false',
      tab3: 'false',
    });
  }

  tab2 = () => {
    this.setState({
      tab1: 'false',
      tab2: 'true',
      tab3: 'false',
    });
  }

  tab3 = () => {
    this.setState({
      tab1: 'false',
      tab2: 'false',
      tab3: 'true',
    });
  }


  render() {
    console.log("this.state.image render", this.state.image);
    let { image, img } = this.state;

    var arrData = coinArray.map((obj, i) => {

      return (
        <View key={i} style={styles.listView}>
          <View style={styles.listUnameView}>
            <Text style={styles.listUname}>{i + 1}</Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.listUname}>{obj.date}</Text>
          </View>
          <View style={styles.listCoinView}>
            <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)' style={{ marginTop: 3 }} />
            <Text style={styles.listValueText}> {obj.coin}</Text>
          </View>
        </View>
      )
    });

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.headerIcon}>
            <MaterialIcons name="sort" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfileView} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.9, }}>

            {this.state.image === null
              ? <View style={[styles.profileImgView]}>
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: this.props.currentUserData.profile }} style={[styles.profileImg]} />
                  <TouchableOpacity onPress={this._pickImage} style={{ height: 45, width: 45, borderRadius: 27, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 25, right: 10, backgroundColor: 'rgb(23,119,95)' }}>
                    <FontAwesome name="camera" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              : <View style={styles.profileImgView}>
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: image }} style={styles.profileImg} />
                  <TouchableOpacity onPress={this._pickImage} style={{ height: 45, width: 45, borderRadius: 27, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 25, right: 10, backgroundColor: 'rgb(23,119,95)' }}>
                    <FontAwesome name="camera" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            }

            <View style={styles.uNameView}>
              <Text style={styles.uNameText}>{this.props.currentUserData.uname}</Text>
              <Text style={styles.uNameEmail}>@samantha_smith</Text>
            </View>
          </View>
          <View style={{ flex: 1.1, }}>
            <View style={styles.tabView}>

              {this.state.tab1 == 'true'
                ? <TouchableOpacity onPress={this.tab1} style={styles.opacity1View}>
                  <LinearGradient
                    colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)',]}
                    style={styles.gradient1}>
                    <Text style={styles.quiz1Text}>Quiz</Text>
                    <Text style={styles.quiz1Number}>287</Text>
                  </LinearGradient>
                </TouchableOpacity>
                : <TouchableOpacity onPress={this.tab1} style={styles.opacity2View}>
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.03)',]}
                    style={styles.gradient2}>
                    <Text style={styles.quiz2Text}>Quiz</Text>
                    <Text style={styles.quiz2Number}>287</Text>
                  </LinearGradient>
                </TouchableOpacity>
              }

              {this.state.tab2 == 'true'
                ? <TouchableOpacity onPress={this.tab2} style={styles.opacity1View}>
                  <LinearGradient
                    colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)',]}
                    style={styles.gradient1}>
                    <Text style={styles.quiz1Text}>Ranking</Text>
                    <Text style={styles.quiz1Number}>#{this.props.currentUserData.ranking}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                : <TouchableOpacity onPress={this.tab2} style={styles.opacity2View}>
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.03)',]}
                    style={styles.gradient2}>
                    <Text style={styles.quiz2Text}>Ranking</Text>
                    <Text style={styles.quiz2Number}>#{this.props.currentUserData.ranking}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              }

              {this.state.tab3 == 'true'
                ? <TouchableOpacity onPress={this.tab3} style={styles.opacity1View}>
                  <LinearGradient
                    colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)',]}
                    style={styles.gradient1}>
                    <Text style={styles.quiz1Text}>Coins</Text>
                    <Text style={styles.quiz1Number}>{this.props.currentUserData.coin}</Text>
                  </LinearGradient>
                </TouchableOpacity>
                : <TouchableOpacity onPress={this.tab3} style={styles.opacity2View}>
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.03)',]}
                    style={styles.gradient2}>
                    <Text style={styles.quiz2Text}>Coins</Text>
                    <Text style={styles.quiz2Number}>{this.props.currentUserData.coin}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              }
            </View>

            {this.state.tab1 === 'true'
              ? <View style={styles.tab1View}>
                <Text style={styles.tab1Text}>Tab 1</Text>
              </View>
              : null
            }

            {this.state.tab2 === 'true'
              ? <View style={styles.tab2View}>
                <View style={styles.changeWeekView}>
                  <Text style={styles.changeWeekText}>Change this week</Text>
                  <Ionicons name="md-arrow-dropup" size={20} color="rgb(232, 133, 0)" />
                  <Text style={styles.NumberView}>1221</Text>
                </View>
                <View style={styles.progressView}>
                  <Text style={styles.progressText}>Progress Graph</Text>
                </View>
                <View style={styles.chartView}>
                  <LineChart style={{ flex: 1 }} config={config} data={rankArray} xLabels={labels} />
                </View>
              </View>
              : null
            }

            {this.state.tab3 === 'true'
              ? <View style={styles.tab1View}>
                <ScrollView>
                  {arrData}
                </ScrollView>
              </View>
              : null
            }
          </View>
        </View>
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentUserData: state.quiz.currentUserData,
    historyData: state.quiz.historyData,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(currentUserAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
