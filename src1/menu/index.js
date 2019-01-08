import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from './../images';
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Menu extends Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <AntDesign name="close" size={25}  />
          </TouchableOpacity>
          <View style={styles.logoutView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1,  }}>
          <View style={styles.fullprofileView}>
            <View style={styles.profileView}>
              <Image source={images.profile_pic} style={styles.profileImg}/>
            </View>
            <View style={styles.unameView}>
              <Text style={styles.unameText}>Samantha{"\n"}Smith </Text>
              <Text style={styles.emailText}>@samantha_smith </Text>
            </View>
          </View>
          <View style={{ flex: 8,}}>
            <View style={styles.menuView}>
                <TouchableOpacity style={styles.opacityView} onPress={() => this.props.navigation.navigate('Home')}>
                  <View style={{ width: 50, }}>
                    <Entypo name="controller-play" size={25} color='rgb(19, 217, 102)' />
                  </View>
                  <Text style={styles.listFont}>Play Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityView} onPress={() => this.props.navigation.navigate('Dashboard')}>
                  <View style={{ width: 50, }}>
                    <MaterialIcons name="equalizer" size={22} color='rgb(71, 189, 236)' />
                  </View>
                  <Text style={styles.listFont}>Leaderboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityView}>
                  <View style={{ width: 50, }}>
                    <MaterialIcons name="notifications-active" size={22} color='rgb(255, 62, 88)' />
                  </View>
                  <Text style={styles.listFont}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityView} onPress={() => this.props.navigation.navigate('EditProfile')}>
                  <View style={{ width: 50, }}>
                    <MaterialIcons name="settings" size={22} color='rgb(176, 0, 255)' />
                  </View>
                  <Text style={styles.listFont}>Edit Profile</Text>
              </TouchableOpacity>
                <TouchableOpacity style={styles.opacityView} onPress={() => this.props.navigation.navigate('EarnCoin')}>
                  <View style={{ width: 50, }}>
                    <MaterialCommunityIcons name="coins" size={22} color='rgb(255, 164, 0)' />
                  </View>
                  <Text style={styles.listFont}>Earn Coins</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    )
  }
}
