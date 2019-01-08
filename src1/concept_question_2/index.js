import React, {Component} from "react";
import {Dimensions, View, Text, StyleSheet, ScrollView, Button, Image, StatusBar, TextInput, TouchableOpacity,ProgressBarAndroid,ImageBackground } from "react-native";
import {CircularProgress} from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import images from './../images';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get("window").width

const App = () => {
  const percentage = 28
  return <View style={{opacity:0.7}}>
    <CircularProgress percentage={percentage} progressWidth ={22.5} size={53} donutColor='#3D14F4' fillColor='#DDDDDD' blankColor='white'>
      <View>
        <Text style={{fontSize:17,fontFamily:'lato-regular'}}>04</Text>
      </View>
    </CircularProgress>
  </View>
}

export default class ImgRandomQuiz extends Component {

 render(){
   return(
     <View style={{flex:1,backgroundColor:'#FCFAFA'}}>
      <View style={styles.statusBar} />
       <View style={styles.container}>
        <View style={styles.mainHeaderView}>
         <View style={styles.headerView}>
           <TouchableOpacity style={styles.arrowView}>
             <AntDesign name="arrowleft" size={20} color="rgb(72, 72, 72)"/>
           </TouchableOpacity>
           <View style={styles.headerTextView}>
             <Text style={styles.headerText}>Random Quiz</Text>
           </View>
         </View>
        </View>


    <View style={{flex:1}}>
      <View style={styles.mainView}>
        <ImageBackground style={{flex:1}} source={images.img_award}>
        <View style={{ flex:3, width: deviceWidth- 40}}>
         <View style={{flexDirection:'row', flex: 3}}>
           <View style={{flex: 1}}>
            <View style={styles.topLeftRadiusView}/>
             <View style={styles.queView}>
                <Text style={styles.queText}>Que 6/10</Text>
              </View>
           </View>
           <View style={styles.progressbarView}>
             <App/>
           </View>
           <View style={styles.mainRightRadiusView}>
              <View style={styles.rightRadiusView} />
                <View style={styles.mainCoinView}>
                  <View style={styles.coinView}>
                <MaterialCommunityIcons name="coins" size={16} color="#FEA339"/>
              </View>
              <View style={styles.view415}>
                <Text style={styles.text415}> 415</Text>
              </View>
            </View>
          </View>
        </View>
           <View style={styles.mainViewRadius}>
             <View style={styles.subViewLeftRadius}>
               <View style={styles.bottomLeftRadiusView}/>
             </View>
             <View style={styles.questionView}>
                <Text style={styles.textQuestion6}>Question 6</Text>
                <Text style={styles.textQuestion}> For which film did Leonardo DiCaprio win his frist Academy Award? </Text>
             </View>
             <View style={styles.mainBottomRightRadiusView}>
               <View style={styles.bottomRightRadiusView} />
              </View>
            </View>
          </View>
          </ImageBackground>
        </View>
        </View>

        <View style={styles.mainOptionView}>
          <TouchableOpacity style={styles.firstOptionView}>
            <View style={styles.mainViewBottomRadius}>
              <View style={{flex: 1}}>
              <View style={styles.bottomLeftView}/>
            </View>
              <View style={styles.mainViewBottomRightRadius}>
              <View style={styles.bottomRightRadius}>
            </View>
        </View>
        </View>
          <Text style={styles.firstOptionText}>Trumbo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondOptionView}>
          <Text style={styles.secondOptionText}>Steve Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.thirdOptionView}>
          <Text style={styles.thirdOptionText}>The Revenant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forthOptionView}>
          <Text style={styles.forthOptionText}>The Martian</Text>
        </TouchableOpacity>
        </View>
     </View>
    </View>

   );
 }
}
