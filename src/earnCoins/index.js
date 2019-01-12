import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, StatusBar, TextInput, TouchableOpacity, ProgressBarAndroid, ImageBackground } from "react-native";
import { CircularProgress } from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import images from './../images';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentUserAction from "../actions/currentUserAction";

class EarnCoins extends Component {

  componentWillMount() {
    this.props.Actions.currentUserData();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FCFAFA' }}>
        <View style={styles.statusBar} />
        <View style={styles.container}>
          <View style={styles.mainHeaderView}>
            <View style={styles.headerView}>
              <TouchableOpacity style={styles.arrowView} onPress={() => this.props.navigation.goBack()}>
                <AntDesign name="arrowleft" size={20} color="rgb(72, 72, 72)" />
              </TouchableOpacity>
              <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Earn coins</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.mainCoinView}>
                  <View>
                    <MaterialCommunityIcons name="coins" size={16} color="#FEA339" />
                  </View>
                  <View>
                    <Text style={styles.text120657}> {this.props.currentUserData.coin}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.mainView}>
            <View style={styles.firstMainView}>
              <TouchableOpacity style={styles.mainFirstImageView}>
                <View style={styles.firstOuterImageView}>
                  <View style={styles.firstInnerImageView}>
                    <Image source={images.music_icon} style={styles.firstImage} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.firstMainTextView}>
                <Text style={styles.firstBigText}>Watch Video</Text>
                <View>
                  <Text style={styles.firstSmallText}>Watch full ad and get 50 coins in your account so quick</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.secondMainView}>
              <TouchableOpacity style={styles.mainSecondImageView}>
                <View style={styles.secondOuterImageView}>
                  <View style={styles.secondInnerImageView}>
                    <Image source={images.invite_icon} style={styles.secondImage} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondMainTextView}>
                <Text style={styles.secondBigText}>Invite Friend</Text>
                <View>
                  <Text style={styles.secondSmallText}>Invite your friends-relatives and get 100 coins on every friends app install.</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.thirdMainView}>
              <TouchableOpacity style={styles.mainThirdImageView}>
                <View style={styles.thirdOuterImageView}>
                  <View style={styles.thirdInnerImageView}>
                    <Image source={images.facebook_icon} style={styles.thirdImage} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.thirdMainTextView}>
                <Text style={styles.thirdBigText}>Connect Facebook</Text>
                <View>
                  <Text style={styles.thirdSmallText}>Connect your facebook account and get 50 coins instantly.</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.forthMainView}>
              <TouchableOpacity style={styles.mainForthImageView}>
                <View style={styles.forthOuterImageView}>
                  <View style={styles.forthInnerImageView}>
                    <Image source={images.star_icon} style={styles.forthImage} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.forthMainTextView}>
                <Text style={styles.forthBigText}>Rate us</Text>
                <View>
                  <Text style={styles.forthSmallText}>Rate us on playstore and get 250 coins instantly in your account. </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(EarnCoins);
