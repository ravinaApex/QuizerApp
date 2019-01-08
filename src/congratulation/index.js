import React, {Component} from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimateLoadingButton from 'react-native-animate-loading-button';

export default class Congrats extends Component {

  conceptQue1() {
    this.loadingButton.showLoading(true);
    setTimeout(() => {
      this.loadingButton.showLoading(false);
      this.props.navigation.navigate('Home');
    }, 1000);
  }

  // componentWillUnmount(){
  //   console.log("componentWillUnmount");
  // }

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
                <Text style={styles.coinText}> {this.props.navigation.state.params.score} coins</Text>
              </View>
            </View>
          {/*</ImageBackground>*/}
        </View>


        <View style={styles.buttonView}>
          <View style={styles.buttonView1}>
            <TouchableOpacity style={[styles.shareView, {elevation: 250}]}><Text style={styles.shareText}>Share result</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonView2}>
            {/*<TouchableOpacity style={styles.playView} onPress={() => this.props.navigation.navigate('conceptQue1')}><Text style={styles.playText}>Play New Quiz</Text></TouchableOpacity>*/}
            <AnimateLoadingButton
              ref={c => (this.loadingButton = c)}
              width={300}
              height={50}
              title="Play New Quiz"
              titleFontSize={20}
              titleColor="rgb(255,255,255)"
              backgroundColor="rrgb(82, 25, 247)"
              borderRadius={30}
              onPress={this.conceptQue1.bind(this)}
            // onPress={this.props.navigation.navigate('conceptQue1')}
            />
          </View>
        </View>


      </View>
      </ImageBackground>
    )
  }
}
