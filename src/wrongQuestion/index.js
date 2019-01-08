import React, {Component} from "react";
import {Dimensions, View, Text, StyleSheet, ScrollView, Button, Image, StatusBar, TextInput, TouchableOpacity,ProgressBarAndroid,ImageBackground } from "react-native";
import {CircularProgress} from 'react-native-svg-circular-progress'
import styles from "./style";
import colors from "../appConfig/colors";
import { AntDesign } from '@expo/vector-icons';
import images from './../images';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Font } from 'expo';
const deviceWidth = Dimensions.get("window").width

const App = () => {
  const percentage = 28
  return <View style={{opacity:0.7}}>
    <CircularProgress percentage={percentage} progressWidth ={22.5} size={53} donutColor='#3D14F4' fillColor='#DDDDDD' blankColor='white'>
      <View>
        <Text style={{fontSize:17}}>04</Text>
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
            <View style={styles.viewQue}>
              <Text style={styles.TextQue}>Que 6/10</Text>
            </View>
        <View style={styles.viewOops}>
          <Text style={styles.textOops}>Oops :(</Text>
        </View>
          <View style={styles.mainViewCoin}>
            <View style={styles.subViewCoin}>
              <MaterialCommunityIcons name="coins" size={16} color="#FEA339"/>
            </View>
          <View style={styles.view415}>
            <Text style={styles.text415}>415</Text>
          </View>
        </View>
      </View>

          <View style={styles.mainQuestionView}>
            <View style={{ height:115, width: deviceWidth- 40}}>
              <View style={styles.mainViewRadius}>
                <View style={{flex: 1}}>
                  <View style={styles.leftTopRadius}/>
            </View>
            <View style={styles.mainViewRightRadius}>
              <View style={styles.viewRightRadius}>
            </View>
          </View>
        </View>
      <View style={styles.mainViewBottomRadius}>
        <View style={styles.subbottomLeftRadiusView}>
          <View style={styles.bottomLeftRadiusView}/>
            </View>
              <View style={styles.subbottomRightRadiusView}>
                <View style={styles.bottomRightRadiusView}>
            </View>
      </View>
    </View>
  </View>
        <View style={styles.mainViewQuestion}>
          <View style={styles.subViewQuestion}>
            <Text style={styles.question6Text}>Question 6</Text>
              <Text style={styles.questionText}>Presently,who is the caption of the indian's Women's T20 international team?  </Text>
          </View>
        </View>
    </View>
  </View>

        <View style={styles.mainViewList}>
          <TouchableOpacity style={styles.firstOptionView}>
            <View style={styles.mainRadiusView}>
              <View style={{flex: 1}}>
                <View style={styles.optionLeftRadius}/>
            </View>
            <View style={styles.mainRightOptionRadius}>
              <View style={styles.rightOptionRadius}>
            </View>
        </View>
      </View>
          <Text style={styles.firstOptionText}>Mitali Raj</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondOptionView}>
          <Text style={styles.secondOptionText}>Harmanpreet Kaur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.thirdOptionView}>
          <Text style={styles.thirdOptionText}>Veda Krishnamurthy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forthOptionView}>
          <Text style={styles.forthOptionText}>Smriti Mandhan</Text>
        </TouchableOpacity>
      </View>
     </View>
  </View>

   );
 }
}
