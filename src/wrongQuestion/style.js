const React = require("react-native");
const { Dimensions, Platform } = React;
import { Constants } from'expo';
import colors from "../appConfig/colors";

export default {
statusBar: {
  backgroundColor: colors.statusColor,
  height: Constants.statusBarHeight,
 },
container: {
   flex: 1,
   backgroundColor: 'rgb(248, 248, 248)',
   paddingHorizontal: 20,
   paddingBottom:35
 },
mainHeaderView:{
  height: 40,
  justifyContent: 'center',
  alignItems: 'center'
},
headerView: {
   height: 65,
   flexDirection:'row',
 },
arrowView: {
   width: 30,
   justifyContent:'center',
   alignItems:'center',
 },
 headerTextView: {
   flex: 1,
   alignItems:'center',
   justifyContent:'center',
 },
 headerText: {
   color:'rgb(72, 72, 72)',
   fontWeight:'500',
   fontSize: 18,
   fontFamily:'lato-bold'
 },
mainQuestionView:{
  backgroundColor:'#FFFFFF',
  borderRadius:15,
  borderStyle: 'dotted',
  borderColor: 'black',
  borderBottomWidth:1,
},
mainView:{
  flex:1.5,
  flexDirection : 'row'
},
viewQue:{
  flex:1,
  justifyContent:'center',
  alignItems:'flex-start'
},
TextQue:{
  color:'#B8B8B8',
  fontFamily:'lato-regular'
},
viewOops:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
textOops:{
  color:'red',
  fontSize:15,
  fontFamily:'lato-regular'
},
mainViewCoin:{
  flex:1,
  flexDirection : 'row'
},
subViewCoin:{
  flex:2.5,
  justifyContent:'center',
  alignItems:'flex-end'
},
view415:{
  flex:1,
  justifyContent:'center',
  alignItems:'flex-end',
},
text415:{
  color:'#B8B8B8',
  fontFamily:'lato-regular'
},
mainViewRadius:{
  flexDirection:'row',
  flex: 1
},
leftTopRadius:{
  backgroundColor:'rgb(248, 248, 248)',
  width: 20,
  height: 20,
  borderRadius: 10,
  left: -10, top:-10
},
mainViewRightRadius:{
  flex: 1,
  alignItems:'flex-end'
},
viewRightRadius:{
  backgroundColor:'rgb(248, 248, 248)',
  width: 20,
  height: 20,
  borderRadius: 10,
  right: -10,
  top: -10
},
mainViewBottomRadius:{
  flexDirection:'row',
  flex: 1
},
subbottomLeftRadiusView:{
  flex: 1,
  justifyContent:'flex-end'
},
bottomLeftRadiusView:{
  backgroundColor:'rgb(248, 248, 248)',
  width: 20,
  height: 20,
  borderRadius: 10,
  left: -10,
  bottom: -10
},
subbottomRightRadiusView:{
  flex: 1,
  justifyContent:'flex-end',
 alignItems:'flex-end'
},
bottomRightRadiusView:{
  backgroundColor:'rgb(248, 248, 248)',
  width: 20,
  height: 20,
  borderRadius: 10,
  right: -10,
  bottom: -10
},
mainViewQuestion:{
  flex:1,
  paddingHorizontal: 33
},
subViewQuestion:{
   flex: 1,
   marginTop:10,
   justifyContent: 'flex-end',
   bottom:35
},
question6Text:{
  fontSize: 10,
  marginBottom:5,
  color:'#A6A6A6',
  fontFamily:'lato-regular'
},
questionText:{
  fontSize: 14,
  marginTop: 5,
  fontFamily:'lato-bold'
},
mainViewList:{
  flex:1.1,
  elevation:0.5,
  backgroundColor:'#FCFAFA'
},
firstOptionView:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  marginBottom:2,
  backgroundColor:'#FFFFFF'
},
mainRadiusView:{
  flexDirection:'row',
  flex: 1
},
optionLeftRadius:{
   backgroundColor:'#FCFAFA',
   width: 20,
   height: 20,
   borderRadius: 10,
   left: -10,
   top:-10
},
mainRightOptionRadius:{
  flex: 1,
  alignItems:'flex-end'
},
rightOptionRadius:{
  backgroundColor:'#FCFAFA',
  width: 20,
  height: 20,
  borderRadius: 10,
  right: -10,
  top: -10
},

firstOptionText: {
  fontSize:14,
  marginBottom:20,
  fontFamily:'lato-regular'
},
secondOptionView:
{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#33EA62'
},
secondOptionText:{
  fontSize:14,
  fontFamily:'lato-regular'
},
thirdOptionView:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#F85E62'
},
thirdOptionText:{
  fontSize:14,
  fontFamily:'lato-regular'
},
forthOptionView:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#FFFFFF'
},
forthOptionText:{
  fontSize:14,
  fontFamily:'lato-regular'
},

}
