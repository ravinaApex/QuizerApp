import React, {Component} from "react";
import { View, Text, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { LinearGradient } from 'expo';
import { AntDesign } from '@expo/vector-icons';
import LineChart from "react-native-responsive-linechart";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const data = [10, 20, 18, 40, 38, 60, 70];
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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



export default class EditProfile extends Component {

  state = {
    tab1: 'false',
    tab2: 'true',
    tab3: 'false',
  };

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

    let { tab1, tab2, tab3 } = this.state;

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
            <Image source={images.profile_pic} style={styles.profileImg} />
          </View>
          <View style={styles.uNameView}>
            <Text style={styles.uNameText}>Samantha Smith</Text>
            <Text style={styles.uNameEmail}>@samantha_smith</Text>
          </View>
        </View>
        <View style={{ flex: 1.1, }}>
          <View style={styles.tabView}>

          {tab1 == 'true'
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

          {tab2 == 'true'
            ? <TouchableOpacity onPress={this.tab2} style={styles.opacity1View}>
                <LinearGradient
                   colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)', ]}
                   style={styles.gradient1}>
                   <Text style={styles.quiz1Text}>Ranking</Text>
                   <Text style={styles.quiz1Number}>#11,527</Text>
                 </LinearGradient>
               </TouchableOpacity>
            : <TouchableOpacity onPress={this.tab2} style={styles.opacity2View}>
               <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.03)', ]}
                  style={styles.gradient2}>
                  <Text style={styles.quiz2Text}>Ranking</Text>
                  <Text style={styles.quiz2Number}>#11,527</Text>
                </LinearGradient>
              </TouchableOpacity>
          }

          {tab3 == 'true'
            ? <TouchableOpacity onPress={this.tab3} style={styles.opacity1View}>
                <LinearGradient
                   colors={['rgb(255, 255, 255)', 'rgb(255, 255, 255)', ]}
                   style={styles.gradient1}>
                   <Text style={styles.quiz1Text}>Coins</Text>
                   <Text style={styles.quiz1Number}>2688</Text>
                 </LinearGradient>
               </TouchableOpacity>
            : <TouchableOpacity onPress={this.tab3} style={styles.opacity2View}>
               <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.03)', ]}
                  style={styles.gradient2}>
                  <Text style={styles.quiz2Text}>Coins</Text>
                  <Text style={styles.quiz2Number}>2688</Text>
                </LinearGradient>
              </TouchableOpacity>
          }
          </View>

          {tab1 === 'true'
            ? <View style={styles.tab1View}>
                <Text style={styles.tab1Text}>Tab 1</Text>
              </View>
            : null
          }

          {tab2 === 'true'
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

            {tab3 === 'true'
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
