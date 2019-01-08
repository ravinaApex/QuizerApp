import React, {Component} from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Congrats extends Component {

  render(){
    return(
      <ImageBackground source={images.congrats} style={{flex: 1}}>
      <View style={[styles.container,]}>
        <View style={{ flex: 7.5}}>
          {/*<ImageBackground source={images.congrats} style={{flex: 1}}>*/}
            <View style={styles.statusBar} />
            <View style={styles.mainView}>
              <Image source={images.profile_pic} style={styles.profilePic} />
              <View style={styles.rankImgView}>
                <Image source={images.medal} style={styles.rankImg} />
              </View>
            </View>
            <View style={{ flex: 3.3, }}>
              <View style={styles.congratsView}><Text style={styles.congratsText}>Congratulations</Text></View>
              <View style={styles.coinView}>
                <Text style={styles.wonText}>{"You've won  "}</Text>
                  <MaterialCommunityIcons name="coins" size={23} color="rgb(225, 151, 23)" style={{paddingTop: 8}}/>
                <Text style={styles.coinText}> 850 coins</Text>
              </View>
            </View>
          {/*</ImageBackground>*/}
        </View>


        <View style={styles.buttonView}>
          <View style={styles.buttonView1}>
            <TouchableOpacity style={[styles.shareView, {elevation: 250}]}><Text style={styles.shareText}>Share result</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonView2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('conceptQue1')} style={styles.playView}><Text style={styles.playText}>Play New Quiz</Text></TouchableOpacity>
          </View>
        </View>


      </View>
      </ImageBackground>
    )
  }
}
