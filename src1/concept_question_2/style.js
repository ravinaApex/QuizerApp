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
   paddingBottom:35,
 },
mainHeaderView:{
   height: 55,
   justifyContent: 'center',
   alignItems: 'center'
 },
 headerView: {
   flex:3,
   flexDirection:'row',
 },
 arrowView: {
   flex:1,
   width: 30,
   justifyContent:'center',
 },
 headerTextView: {
   flex: 2,
   alignItems:'flex-start',
   justifyContent:'center',
 },
 headerText: {
   color:'rgb(72, 72, 72)',
   fontWeight:'500',
   fontSize: 18,
   fontFamily:'lato-bold'
 },
viewStyle:{
  flex:1.5,
  backgroundColor:'#FFFFFF',
  borderRadius:15,
  borderStyle: 'dashed',
  borderColor: 'black',
  borderBottomWidth:1,
},
mainView:{
  flex:1,
  marginTop:20,
},
topLeftRadiusView:{
  backgroundColor:'rgb(248, 248, 248)',
  width: 20,
  height: 20,
  borderRadius: 10,
  left: -10,
  top:-10
},
queView:{
  flex:1,
  alignItems:'flex-start',
  flexDirection : 'row'
},
queText:{
  flex:2,
  color:'#B8B8B8',
  paddingLeft:15,
  fontFamily:'lato-regular'
},
progressbarView:{
  flex:1,
  alignItems:'center',
  position: 'relative',
  top:-27
},
mainRightRadiusView:{
  flex: 1,
  alignItems:'flex-end'
},
rightRadiusView:{
  backgroundColor:'rgb(248, 248, 248)',
  width: 20,
  height: 20,
  borderRadius: 10,
  right: -10,
  top: -10
},
  mainCoinView:{
    flex:1,
    flexDirection : 'row'
  },
coinView:{
    flex:3,
    alignItems:'flex-end'
},
view415:{
  flex:3
},
text415:{
  color:'#B8B8B8',
  fontFamily:'lato-regular'
},
mainViewRadius:{
   flexDirection:'row',
   flex: 3,
   borderStyle: 'solid',
   borderBottomWidth:1,
 },
 subViewLeftRadius:{
    flex: 2,
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
questionView:{
  paddingHorizontal:33,
  justifyContent: 'flex-end',
  bottom:20
},
textQuestion6:{
  fontSize: 10,
  color: 'white',
  fontFamily:'lato-regular'
 },
 textQuestion:{
   fontSize: 14,
   color: 'white',
   marginTop: 5,
   fontFamily:'lato-bold'
},
mainBottomRightRadiusView:{
  flex: 2,
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
  mainOptionView:{
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
mainViewBottomRadius:{
    flexDirection:'row',
     flex: 1
   },
bottomLeftView:{
     backgroundColor:'#FCFAFA',
     width: 20,
     height: 20,
      borderRadius: 10,
       left: -10,
        top:-10
      },
mainViewBottomRightRadius:{
    flex: 1,
     alignItems:'flex-end'
   },
bottomRightRadius:{
    backgroundColor:'#FCFAFA',
    width: 20,
    height: 20,
    borderRadius: 10,
    right: -10,
    top: -10
     },
firstOptionText:{
  fontSize:14,
  marginBottom:24,
  fontFamily:'lato-regular'
},
secondOptionView:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  marginBottom:2,
  backgroundColor:'#FFFFFF'
},
secondOptionText:{
  fontSize:14,
  fontFamily:'lato-regular'
},
thirdOptionView:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  marginBottom:2,
  backgroundColor:'#FFFFFF'
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
