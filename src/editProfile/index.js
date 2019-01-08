import React, {Component} from "react";
import { View, Text, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity, AsyncStorage } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { LinearGradient } from 'expo';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import LineChart from "react-native-responsive-linechart";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentUserAction from "../actions/currentUserAction";
import moment from 'moment';

const data = [10, 20, 18, 40, 38, 60, 70];
const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const config = {
  interpolation: "spline",
    line: { visible: false},
    yAxis: { visible: false },
    grid: { visible: false },
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

// var test = moment().day("Monday").week(52)
// console.log(test);

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      profile: null,
      tab1: 'false',
      tab2: 'true',
      tab3: 'false',
    }
  }

  componentWillMount() {
    this.props.Actions.currentUserData().then(data => {
      var arr = data.uname.split(' ');
      this.setState({
        name: arr[0],
        surname: arr[1],
      })
    });

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var weekDate = [];

    var weeknumber = moment(new Date(), "DD-MM-YYYY").week();
    console.log(weeknumber);

    weekDays.map((obj) => {
      var test = moment().day(obj).week(weeknumber - 1);
      weekDate.push(moment(test).format('DD-MM-YYYY'));
    })
    console.log('weekDate: ',weekDate);
    
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


  render(){

    // this.state.let { tab1, tab2, tab3 } = this.state;

    return(
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.headerIcon}>
            <MaterialIcons name="sort" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editProfileView} onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
        <View style={{ flex: 0.9, }}>
          <View style={styles.profileImgView}>
            <Image source={{ uri: this.props.currentUserData.profile }} style={styles.profileImg} />
          </View>
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
                   colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)', ]}
                   style={styles.gradient1}>
                   <Text style={styles.quiz1Text}>Quiz</Text>
                   <Text style={styles.quiz1Number}>287</Text>
                 </LinearGradient>
               </TouchableOpacity>
            : <TouchableOpacity onPress={this.tab1} style={styles.opacity2View}>
               <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.03)', ]}
                  style={styles.gradient2}>
                  <Text style={styles.quiz2Text}>Quiz</Text>
                  <Text style={styles.quiz2Number}>287</Text>
                </LinearGradient>
              </TouchableOpacity>
          }

          {this.state.tab2 == 'true'
            ? <TouchableOpacity onPress={this.tab2} style={styles.opacity1View}>
                <LinearGradient
                   colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)', ]}
                   style={styles.gradient1}>
                   <Text style={styles.quiz1Text}>Ranking</Text>
                   <Text style={styles.quiz1Number}>#{this.props.currentUserData.ranking}</Text>
                 </LinearGradient>
               </TouchableOpacity>
            : <TouchableOpacity onPress={this.tab2} style={styles.opacity2View}>
               <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.03)', ]}
                  style={styles.gradient2}>
                  <Text style={styles.quiz2Text}>Ranking</Text>
                  <Text style={styles.quiz2Number}>#{this.props.currentUserData.ranking}</Text>
                </LinearGradient>
              </TouchableOpacity>
          }

          {this.state.tab3 == 'true'
            ? <TouchableOpacity onPress={this.tab3} style={styles.opacity1View}>
                <LinearGradient
                   colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)', ]}
                   style={styles.gradient1}>
                   <Text style={styles.quiz1Text}>Coins</Text>
                   <Text style={styles.quiz1Number}>{this.props.currentUserData.coin}</Text>
                 </LinearGradient>
               </TouchableOpacity>
            : <TouchableOpacity onPress={this.tab3} style={styles.opacity2View}>
               <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.03)', ]}
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
                  <LineChart style={{ flex:1 }} config={config} data={data} xLabels={labels}/>
                </View>
              </View>
              : null
            }

            {this.state.tab3 === 'true'
              ? <View style={styles.tab1View}>
                  <Text style={styles.tab1Text}>Tab 3</Text>
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
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(currentUserAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
