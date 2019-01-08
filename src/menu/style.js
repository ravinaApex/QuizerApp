const React = require("react-native");
const { Dimensions, Platform } = React;
import { Constants } from 'expo';
import colors from "../appConfig/colors";

export default {

  container: {
    flex: 1,
    backgroundColor: colors.bgColor
  },

  statusBar: {
    backgroundColor: colors.statusColor,
    height: Constants.statusBarHeight,
  },

  mainView: {
    height: 65,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center'
  },

  logoutView: {
    flex: 1,
    alignItems: 'flex-end',
  },

  logoutText: {
    fontSize: 20,
    fontFamily: 'lato-bold'
  },

  fullprofileView: {
    flex: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },

  profileView: {
    width: 110,
    justifyContent: 'center',
  },

  profileImg: {
    height: 105,
    width: 105,
    borderRadius: 52
  },

  unameView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
  },

  unameText: {
    fontSize: 26,
    // fontWeight: 'bold',
    fontFamily: 'lato-bold'
  },

  emailText: {
    fontSize: 16,
    color: 'rgb(164, 164, 164)',
    marginTop: 8,
    fontFamily: 'lato-bold'
  },

  menuView: {
    flex: 1,
    paddingHorizontal: 45,
    marginTop: 70,
    marginBottom: 100,
  },

  opacityView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  listFont: {
    fontSize: 18,
    fontFamily: 'lato-bold'
  }

}
