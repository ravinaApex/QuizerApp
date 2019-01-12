import React, {Component} from "react";
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, AsyncStorage } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import * as firebase from 'firebase';
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentUserAction from "../actions/currentUserAction";

var rank1 = [], rank2 = [], rank3 = [], temp, rankData = [], arrList = [];

class Dashboard extends Component {

  constructor(props){
   super(props);
   this.state = {
     profile: null,
     coin: 0,
     ranking: 0,
     rank1: [],
     rank2: [],
     rank3: [],
   }
 }

  componentWillMount = () => {

    this.props.Actions.currentUserData();
    this.props.Actions.rankedUserData();
    this.props.Actions.rankedUserDataList();

  }

  componentWillReceiveProps(props){
    if(this.props.rankedUserData.length > 0)
    {
      rank1 = this.props.rankedUserData.filter((obj) => {
        return obj.ranking === 1;
      });
      this.setState({ rank1: rank1 });
      rank2 = this.props.rankedUserData.filter((obj) => {
        return obj.ranking === 2;
      });
      this.setState({ rank2: rank2 });
      rank3 = this.props.rankedUserData.filter((obj) => {
        return obj.ranking === 3;
      });
      this.setState({ rank3: rank3 });
    }
  }

  render(){
    var curentUser = 'white';
    arrList = this.props.rankedUserDataList;
    rankData = Object.keys(arrList).map(key => {
       return { ...arrList[key], id: key };
    }).sort((a, b) => (a.ranking - b.ranking));


    var arrData = rankData.map((obj, i) => {
      if(this.props.currentUserData.uname === obj.uname)
      {
        curentUser = 'rgb(230, 230, 230)';
      }
      else {
        curentUser = 'white';
      }
      return(
        <View key={i} style={[styles.listView, {justifyContent: 'center', alignItems: 'center', backgroundColor: curentUser}]}>
          <View style={{ width: 50, }}>
            <Image source={{ uri: obj.profile}} style={styles.listImage}/>
          </View>
          <View style={{ flex: 5, }}>
            <Text style={styles.listUname}>{obj.uname}</Text>
            <Text style={styles.listEmail}>{obj.uname}</Text>
          </View>
          <View style={styles.listCoinView}>
            <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)' style={{ marginTop: 3 }}/>
            <Text style={styles.listValueText}> {obj.coin}</Text>
          </View>
          <View style={styles.listHashView}>
            <Text style={styles.listValueText}>#{obj.ranking}</Text>
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
              {
                this.state.rank2.map((obj) => {
                  return(
                    <View style={{ flex: 1, }}>
                      <View style={styles.image1View}>
                        <Image source={{ uri: obj.profile }} style={styles.profile1}/>
                        <View style={styles.roundImage1View}><Text style={styles.text2}>{obj.ranking}</Text></View>
                      </View>
                      <View style={styles.detail1View}>
                        <View style={styles.emiliView}>
                          <Text style={styles.emiliText}>{obj.uname}</Text>
                          <Text style={styles.emiliEmail}>@imjohnson</Text>
                        </View>
                        <View style={styles.coin1View}>
                          <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)'/>
                          <Text style={styles.coin1Number}> {obj.coin}</Text>
                        </View>
                      </View>
                    </View>
                  )
                })
              }
              {
                this.state.rank1.map((obj) => {
                  return(
                    <View style={{ flex: 1, }}>
                      <View style={styles.image2View}>
                        <Image source={{ uri: obj.profile }} style={styles.profile2}/>
                        <View style={styles.roundImage2View}><Text style={styles.text1}>{obj.ranking}</Text></View>
                      </View>
                      <View style={styles.detail2View}>
                        <View style={styles.elvisView}>
                          <Text style={styles.elvisText}>{obj.uname}</Text>
                          <Text style={styles.elvisEmail}>@elvistaylor</Text>
                        </View>
                        <View style={styles.coin2View}>
                          <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)' />
                          <Text style={styles.coin2Number}> {obj.coin}</Text>
                        </View>
                      </View>
                    </View>
                  )
                })
              }
              {
                this.state.rank3.map((obj) => {
                  return(
                    <View style={{ flex: 1, }}>
                      <View style={styles.image3View}>
                        <Image source={{ uri: obj.profile }} style={styles.profile3}/>
                        <View style={styles.roundImage3View}><Text style={styles.text3}>{obj.ranking}</Text></View>
                      </View>
                      <View style={styles.detail3View}>
                        <View style={styles.pamView}>
                          <Text style={styles.pamText}>{obj.uname}</Text>
                          <Text style={styles.pamEmail}>@impamjack</Text>
                        </View>
                        <View style={styles.coin3View}>
                          <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)'/>
                          <Text style={styles.coin3Number}> {obj.coin}</Text>
                        </View>
                      </View>
                    </View>
                  )
                })
              }
            </View>
          </View>
          <View style={styles.listTab}>
            <ScrollView>
                {arrData}
            </ScrollView>
            <View style={styles.staticView}>
              <View style={styles.staticProfileView}>
                <Image source={{ uri: this.props.currentUserData.profile }} style={styles.staticProfileImg}/>
              </View>
              <View style={styles.staticDetailView}>
                <Text style={styles.youText}>You</Text>
                <Text style={styles.youEmail}>@samantha_smith</Text>
              </View>
              <View style={styles.staticCoinView}>
                <MaterialCommunityIcons name="coins" size={14} color='rgb(255, 164, 0)' style={{ marginTop: Height/40 }}/>
                <Text style={styles.staticCoinNumber}> {this.props.currentUserData.coin}</Text>
              </View>
              <View style={styles.hashView}>
                <Text style={styles.hashText}>#{this.props.currentUserData.ranking}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUserData: state.quiz.currentUserData,
    rankedUserData: state.quiz.rankedUserData,
    rankedUserDataList: state.quiz.rankedUserDataList,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(currentUserAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
