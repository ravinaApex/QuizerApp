const React = require("react-native");
const { Dimensions, Platform } = React;
import { Constants } from 'expo';
import colors from "../appConfig/colors";

export default {

  container: {
    flex: 1,
    // backgroundColor: colors.statusColor
  },

  statusBar: {
    backgroundColor: 'transparent',
    height: Constants.statusBarHeight,
  },

  mainView: {
    flex: 4.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50
  },

  profilePic: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },

  rankImgView: {
    height: 54,
    width: 54,
    borderRadius:27,
    position: 'absolute',
    bottom: 20,
    // backgroundColor: 'red',
    elevation: 20
  },

  rankImg: {
    height: 55,
    width: 55,
    borderRadius: 27,
    position: 'absolute',
  },

  congratsView: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  congratsText: {
    fontSize: 35,
    fontFamily: 'cursive',
  },

  coinView: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  wonText: {
    fontSize: 20,
    paddingTop: 8,
    fontFamily: 'lato-regular'
  },

  coinText: {
    fontSize: 20,
    paddingTop: 8,
    fontFamily: 'lato-bold'
  },

  buttonView: {
    flex: 2.5,
    paddingHorizontal: 40,
  },

  buttonView1: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 7
  },

  shareView: {
    height: 55,
    borderRadius: 30,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center'
  },

  shareText: {
    fontSize: 20,
    color: 'rgb(72, 36, 128)',
    fontFamily: 'lato-bold'
  },

  buttonView2: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 7
  },

  playView: {
    height: 55,
    borderRadius: 30,
    backgroundColor: 'rgb(82, 25, 246)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  playText: {
    fontSize: 20,
    color: colors.bgColor,
    fontFamily: 'lato-regular'
  },

}
