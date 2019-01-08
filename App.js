/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, YellowBox } from 'react-native'
import Setup from "./src/setup";
import { Font } from 'expo';

type Props = {};

console.disableYellowBox = true;

 export default class App extends Component<Props> {
   constructor(props){
     super(props);
     this.state = {
       isFontLoaded : false,
     }
   }
   async componentDidMount(){
     await Font.loadAsync({
        'lato-black': require('./assets/fonts/Lato-Black.ttf'),
        'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
        'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
        'cursive': require('./assets/fonts/Amore-Mio-Personal-Use.ttf'),
        'bubble-regular': require('./assets/fonts/BubblegumSans-Regular.ttf'),
      });
      this.setState({
        isFontLoaded:true
      })
   }

   render() {
     return (
       <View style={{flex:1}}>
       {this.state.isFontLoaded ? <Setup /> : null}
       </View>
     );
   }
 }
