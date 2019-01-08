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
   backgroundColor: colors.bgColor,
   paddingHorizontal: 20,
   paddingBottom:35
 },
 mainHeaderView:{
    height: 65,
    justifyContent: 'center',
    alignItems: 'center'
   },
 headerView: {
   flex:1,
   flexDirection:'row',
   height: 65,
   flexDirection:'row',
 },
 arrowView: {
   flex:0.5,
   width: 30,
   justifyContent:'center',
 },
 headerTextView: {
   flex:2,
   justifyContent:'center',
 },
 headerText: {
   color:'rgb(72, 72, 72)',
   fontWeight:'500',
   fontSize: 18,
   fontFamily:'lato-bold'
 },
 text120657:{
   fontFamily:'lato-bold'
 },
 mainCoinView:{
   flex:1,
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center'
 },
 mainView:{
   flex:1,
   marginBottom:30
 },
 firstMainView:{
   flex:1,
   flexDirection:'row'
 },
 mainFirstImageView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
firstOuterImageView:{
  backgroundColor:'#FDB72E',
  padding:20,
  paddingLeft:12,
  paddingRight:12,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center'
},
firstInnerImageView:{
  justifyContent:'center',
  alignItems:'center'
},
firstImage:{
  height:35,
  width:50
},
firstMainTextView:{
  flex:2,
  justifyContent:'center',
  paddingHorizontal:10
},
firstBigText:{
  fontSize:16,
  bottom:7,
  fontFamily:'lato-bold'
},
firstSmallText:{
  fontSize:11,
  color:'#8F8F8F',
  fontFamily:'lato-regular'
},
secondMainView:{
  flex:1,
  flexDirection:'row'
},
mainSecondImageView:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
secondOuterImageView:{
  backgroundColor:'#7970FB',
  padding:18,
  paddingLeft:15,
  paddingRight:15,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center'
},
secondInnerImageView:{
  justifyContent:'center',
  alignItems:'center'
},
secondImage:{
  height:40,
  width:43
},
secondMainTextView:{
  flex:2,
  justifyContent:'center',
  paddingHorizontal:8
},
secondBigText:{
  fontSize:16,
  bottom:7,
  fontFamily:'lato-bold'
},
secondSmallText:{
  fontSize:11,
  color:'#8F8F8F',
  fontFamily:'lato-regular'
},
thirdMainView:{
  flex:1,
  flexDirection:'row'
},
mainThirdImageView:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
thirdOuterImageView:{
  backgroundColor:'#21CF47',
  padding:18,
  paddingLeft:18,
  paddingRight:18,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center'
},
thirdInnerImageView:{
  justifyContent:'center',
  alignItems:'center'
},
thirdImage:{
  height:40,
  width:40
},
thirdMainTextView:{
  flex:2,
  justifyContent:'center',
  paddingHorizontal:10
},
thirdBigText:{
  fontSize:16,
  bottom:7,
  fontFamily:'lato-bold'
},
thirdSmallText:{
  fontSize:11,
  color:'#8F8F8F',
  fontFamily:'lato-regular'
},
forthMainView:{
  flex:1,
  flexDirection:'row'
},
mainForthImageView:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
forthOuterImageView:{
  backgroundColor:'#FD454C',
  padding:20,
  paddingLeft:18,
  paddingRight:18,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center'
},
forthInnerImageView:{
  justifyContent:'center',
  alignItems:'center'
},
forthImage:{
  height:40,
  width:40
},
forthMainTextView:{
  flex:2,
  justifyContent:'center',
  paddingHorizontal:10
},
forthBigText:{
  fontSize:16,
  bottom:7,
  fontFamily:'lato-bold'
},
forthSmallText:{
  fontSize:11,
  color:'#8F8F8F',
  fontFamily:'lato-regular'
},

}
