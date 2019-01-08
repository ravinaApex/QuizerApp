import React, {Component} from "react";
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

import { MaterialCommunityIcons } from '@expo/vector-icons';

const ArrayList = [{
    val1: images.profile_pic,
    val2: 'Patric George',
    val3: '@patricgeorge',
    val4: ' 1,20,657',
    val5: '#4',
  },
  {
    val1: images.profile_pic,
    val2: 'Rose Kelly',
    val3: '@imrose',
    val4: ' 1,13,255',
    val5: '#4',
  },
  {
    val1: images.profile_pic,
    val2: 'Leo Hemilton',
    val3: '@ileohere',
    val4: ' 1,09,267',
    val5: '#4',
  },
  {
    val1: images.profile_pic,
    val2: 'Opera Denmark',
    val3: '@denmark23',
    val4: ' 1,01,749',
    val5: '#4',
  },
  {
    val1: images.profile_pic,
    val2: 'Patric George',
    val3: '@patricgeorge',
    val4: ' 1,20,657',
    val5: '#4',
  }
];

export default class Menu extends Component {

  render(){
    var arrData = ArrayList.map((obj, i) => {
      return(
        <View key={{i}} style={styles.listView}>
          <View style={{ width: 50, }}>
            <Image source={obj.val1} style={styles.listImage}/>
          </View>
          <View style={{ flex: 5, }}>
            <Text style={styles.listUname}>{obj.val2}</Text>
            <Text style={styles.listEmail}>{obj.val3}</Text>
          </View>
          <View style={styles.listCoinView}>
            <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)' style={{ marginTop: 3 }}/>
            <Text style={styles.listValueText}>{obj.val4}</Text>
          </View>
          <View style={styles.listHashView}>
            <Text style={styles.listValueText}>{obj.val5}</Text>
          </View>
        </View>
      )
    });

    return(
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={{ flex: 1,}}>
          <View style={styles.headerTab}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.iconOpacity} onPress={() => this.props.navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} />
              </TouchableOpacity>
              <View style={styles.leaderView}><Text style={styles.leaderText}>Leaderboard</Text></View>
            </View>

            <View style={styles.profileTab}>
              <View style={{ flex: 1, }}>
                <View style={styles.image1View}>
                  <Image source={images.profile_pic} style={styles.profile1}/>
                  <View style={styles.roundImage1View}><Text style={styles.text2}>2</Text></View>
                </View>
                <View style={styles.detail1View}>
                  <View style={styles.emiliView}>
                    <Text style={styles.emiliText}>Emili Johnson</Text>
                    <Text style={styles.emiliEmail}>@imjohnson</Text>
                  </View>
                  <View style={styles.coin1View}>
                    <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)'/>
                    <Text style={styles.coin1Number}> 1,25,269</Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, }}>
                <View style={styles.image2View}>
                  <Image source={images.profile_pic} style={styles.profile2}/>
                  <View style={styles.roundImage2View}><Text style={styles.text1}>1</Text></View>
                </View>
                <View style={styles.detail2View}>
                  <View style={styles.elvisView}>
                    <Text style={styles.elvisText}>Elvis Taylor</Text>
                    <Text style={styles.elvisEmail}>@elvistaylor</Text>
                  </View>
                  <View style={styles.coin2View}>
                    <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)'/>
                    <Text style={styles.coin2Number}> 3,54,287</Text>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, }}>
                <View style={styles.image3View}>
                  <Image source={images.profile_pic} style={styles.profile3}/>
                  <View style={styles.roundImage3View}><Text style={styles.text3}>3</Text></View>
                </View>
                <View style={styles.detail3View}>
                  <View style={styles.pamView}>
                    <Text style={styles.pamText}>Pam Jackson</Text>
                    <Text style={styles.pamEmail}>@impamjack</Text>
                  </View>
                  <View style={styles.coin3View}>
                    <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)'/>
                    <Text style={styles.coin3Number}> 2,33,289</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listTab}>
            <ScrollView>
              <View style={{ marginTop: 25 }}>
                {arrData}
              </View>
            </ScrollView>
            <View style={styles.staticView}>
              <View style={styles.staticProfileView}>
                <Image source={images.profile_pic} style={styles.staticProfileImg}/>
              </View>
              <View style={styles.staticDetailView}>
                <Text style={styles.youText}>You</Text>
                <Text style={styles.youEmail}>@samantha_smith</Text>
              </View>
              <View style={styles.staticCoinView}>
                <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)' style={{ marginTop: Height/40 }}/>
                <Text style={styles.staticCoinNumber}> 2688</Text>
              </View>
              <View style={styles.hashView}>
                <Text style={styles.hashText}>#11257</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
