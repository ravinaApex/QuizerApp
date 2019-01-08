const React = require("react-native");
const { Dimensions, Platform } = React;
import { Constants } from 'expo';
import colors from "../appConfig/colors";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;



export default {
  statusBar: {
    backgroundColor: colors.statusColor,
    height: Constants.statusBarHeight,
  },

  mainView: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 40,
  },

  newUserView: {
    height: 65,
    paddingHorizontal: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.bgColor
  },

  newUserText: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'rgb(114,114,114)',
    fontFamily: 'lato-bold',
  },

  logoView: {
    // flex:1.5,
    height: Height / 4.9,
    justifyContent:'center',
    backgroundColor: colors.bgColor
  },

  logoText: {
    height: 75,
    width: 210
  },

  welcomeView: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: colors.bgColor
  },

  welcomeText: {
    fontSize: 20,
    fontFamily: 'lato-bold',
  },

  greenLine: {
    height:6,
    width: 65,
    marginTop:18,
    borderRadius: 30,
    backgroundColor: 'rgb(17,222,178)'
  },

  userView: {
    flex:1,
    justifyContent: 'center',
  },

  userText: {
    fontSize: 15,
    color: 'rgb(170, 170, 170)',
    fontFamily: 'lato-bold'
  },

  userInput: {
    height: 40,
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 2 ,
    borderBottomColor: "rgb(239, 239, 239)"
  },

  pwdText: {
    fontSize: 15,
    color: 'rgb(170, 170, 170)',
    fontFamily: 'lato-bold',
    marginTop: 15,
  },

  pwdInView: {
    flexDirection: 'row',
    borderBottomWidth: 2 ,
    borderBottomColor: "rgb(239, 239, 239)"
  },

  pwdInput: {
    height: 40,
    fontSize: 20,
    fontWeight: '400',
  },

  forgotView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  forgotText: {
    fontSize: 16,
    color: 'rgb(119, 119, 119)',
    fontFamily: 'lato-bold',
  },

  signInView: {
    // flex:1,
    height: Height / 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  signInOpacity: {
    flex: 1,
    height : 55,
    borderRadius : 30,
    backgroundColor: 'rgb(82, 25, 247)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: 'lato-bold',
  },
  spinnerTextStyle: {
    color: '#FFF'
  }
}
