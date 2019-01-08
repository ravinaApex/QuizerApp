import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class Home extends Component {
    state = {
      uname: '',
      profile: null,
    }

  componentWillMount(){
    
    var userId = firebase.auth().currentUser.uid;
    let userMobilePath = "/Users/" + userId;

    firebase.database().ref(userMobilePath).on('value', (snapshot) => {

      if (snapshot.val()) {
        this.setState({
          uname: snapshot.val().uname,
          profile: snapshot.val().profile,
        })
      }


    });
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.statusBar} />
          <View style={styles.headerView}>
            <View style={styles.logoView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                <MaterialIcons name="sort" size={27} />
              </TouchableOpacity>
            </View>
            <View style={styles.headerTextView}>
              <Text style={styles.headerText}>Quizer</Text>
            </View>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 15}}>
            <View style={styles.tab1}>
              <View style={styles.tab1_childView1}>

              <LinearGradient
                colors={['rgb(89, 189, 241)', 'rgb(113, 32, 219)', ]}
                start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
                locations={[0.1,1]}
                style={styles.gradientPurple}>
                  <View style={styles.yourRankingView}><Text style={styles.yourRankingText}>Y O U R   R A N K I N G</Text></View>
                  <View style={styles.rankingNumView}>
                    <Feather name="hash" size={20} color="#fff" style={{marginTop: 7}}/>
                    <Text style={styles.rankingNumText}> 11,257</Text>
                  </View>
              </LinearGradient>


              <LinearGradient
                colors={['rgb(89, 189, 241)', 'rgb(19, 216, 97)', ]}
                start={{ x: 0.1, y: 0 }} end={{ x: 1, y: 1 }}
                locations={[0.07,1]}
                style={styles.gradientGreen}>
                  <View style={styles.coinsEarnedView}><Text style={styles.coinsEarnedText}>C O I N S   E A R N E D</Text></View>
                  <View style={styles.coinsNumView}>
                    <MaterialCommunityIcons name="coins" size={20} color="#fff" style={{marginTop: 6}}/>
                    <Text style={styles.coinsNumText}>  2688</Text>
                  </View>
                </LinearGradient>
              </View>

              <View style={styles.tab1_childView2}>
                <View style={styles.profileView}>
                  <View style={styles.yourProfileView}>
                    <Text style={styles.yourProfileText}>Y O U R   P R O F I L E</Text>
                  </View>
                  <View style={styles.profilePicView}>
                      <Image source={{uri : this.state.profile}} style={styles.profilePic} />
                  </View>
                  <View style={styles.unameView}>
                    <Text style={styles.nameText}>{this.state.uname}</Text>
                    <Text style={styles.surnameText}>Smith</Text>
                  </View>
                  <View style={styles.fullNameView}>
                    <Text style={styles.fullNameText}>@samantha_smith</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.tab2}>
              <View style={styles.quizCateView}><Text style={styles.quizCateText}>Q U I Z   C A T E G O R I E S</Text></View>
              <View style={styles.imagePart1}>
                <View style={styles.imageView1}>
                  <Image source={images.sports} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Sports</Text>
                </View>
                <View style={styles.imageView1}>
                  <Image source={images.physics} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Physics</Text>
                </View>
                <View style={styles.imageView1}>
                  <Image source={images.movies} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Movies</Text>
                </View>
                <View style={styles.imageView1}>
                  <Image source={images.politics} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Politcs</Text>
                </View>
              </View>

              <View style={styles.imagePart1}>
                <View style={styles.imageView1}>
                  <Image source={images.history} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>History</Text>
                </View>
                <View style={styles.imageView1}>
                  <Image source={images.maths} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Maths</Text>
                </View>
                <View style={styles.imageView1}>
                  <Image source={images.logo} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Logo</Text>
                </View>
                <View style={styles.imageView1}>
                  <Image source={images.technology} style={styles.imageDisplay} />
                  <Text style={styles.imageText}>Technology</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1.2, }}>
              <TouchableOpacity style={styles.buttonOpacity} onPress={() => this.props.navigation.navigate('conceptQue1', { qno: 0, percentage: 0, count: 0 })}>
                <Text style={styles.buttonText}>Start Random Quiz</Text>
              </TouchableOpacity>
            </View>
          </View>

      </View>

    );
  }
}
