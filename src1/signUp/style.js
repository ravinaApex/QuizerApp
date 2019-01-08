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

  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },

  headerView: {
    height: 65,
    flexDirection: 'row',
  },

  arrowView: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainView: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingLeft: 40,
    paddingRight: 40,
  },

  headerTextView: {
    flex: 1,
    justifyContent: 'center'
  },

  headerText: {
    fontSize: 21,
    marginLeft: 12,
    fontFamily: 'lato-bold',
  },

  profileView: {
    // flex: 3,
    height: Height/4,
    justifyContent: 'center'
  },

  profileOpacity: {
    height: 89,
    width: 89,
    borderRadius:45,
    backgroundColor: 'rgb(225, 225, 225)',
    borderColor: 'rgb(205, 205, 205)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePic: {
    width: 89,
    height: 89,
    borderRadius: 45
  },

  userView: {
    // flex:2,
    height: Height / 7.5,
    justifyContent: 'center',
  },

  userText: {
    fontSize: 16,
    color: 'rgb(177, 177, 177)',
    fontFamily: 'lato-bold',
  },

  userInput: {
    height: 40,
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 2 ,
    borderBottomColor: "rgb(239, 239, 239)"
  },

  emailView: {
    height: Height / 7.5,
    justifyContent: 'center',
    marginTop: 5,
  },

  emailText: {
    fontSize: 16,
    color: 'rgb(177, 177, 177)',
    fontFamily: 'lato-bold',
  },

  emailInput: {
    height: 40,
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 2 ,
    borderBottomColor: "rgb(239, 239, 239)"
  },

  pwdView: {
    height: Height / 7.5,
    justifyContent: 'center',
    marginTop: 10,
  },

  pwdText: {
    fontSize: 16,
    color: 'rgb(177, 177, 177)',
    fontFamily: 'lato-bold',
  },

  pwdInput: {
    height: 40,
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 2 ,
    borderBottomColor: "rgb(239, 239, 239)"
  },

  registerView: {
    height: Height / 4.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  registerOpacity: {
    flex: 1,
    height : 55,
    borderRadius : 30,
    backgroundColor: 'rgb(21, 224, 183)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    fontSize: 19,
    color: "#fff",
    fontFamily: 'lato-bold',
  },
}
