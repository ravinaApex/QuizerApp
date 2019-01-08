const React = require("react-native");
const { Dimensions, Platform } = React;
import { Constants } from 'expo';
import colors from "../appConfig/colors";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

export default {

  container: {
    flex: 1,
    backgroundColor: 'rgb(252, 250, 250)',

  },

  statusBar: {
    backgroundColor: colors.statusColor,
    height: Constants.statusBarHeight,
  },

  headerView: {
    height: 55,
    flexDirection: 'row',
    paddingHorizontal: 15
  },

  arrowView: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerTextView: {
    flex: 1,
    justifyContent: 'center',
  },

  headerText: {
    color: 'rgb(72, 72, 72)',
    // fontWeight: 'bold',
    marginLeft: Width/3.5,
    fontSize: 22,
    fontFamily: 'lato-bold'
  },

  logoView: {
    width: 30,
    justifyContent: 'center',
  },

  logoInView: {
    height: 7,
    justifyContent: 'center'
  },



  tab1: {
    flex: 3.9,
    flexDirection: 'row',
  },

  tab1_childView1: {
    flex: 5.4,
    paddingRight: 5,
  },

  gradientPurple: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent:'center',
    marginVertical: 5,
    borderRadius: 10
  },

  yourRankingView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent:'flex-end',
  },

  yourRankingText: {
    color: 'rgb(240, 240, 240)',
    paddingBottom: 8,
    fontSize: 13,
    fontFamily: 'lato-regular'
  },

  rankingNumView: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },

  rankingNumText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 22,
    marginTop: 3,
    fontFamily: 'lato-bold'
  },

  gradientGreen: {
    flex: 1,
    backgroundColor: 'plum',
    marginVertical: 5,
    borderRadius: 10,
  },

  coinsEarnedView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent:'flex-end',
  },

  coinsEarnedText: {
    color: 'rgb(240, 240, 240)',
    paddingBottom: 8,
    fontSize: 13,
    fontFamily: 'lato-regular'
  },

  coinsNumView: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },

  coinsNumText: {
    color: '#fff',
    // fontWeight: 'bold',
    marginTop: 3,
    fontSize: 22,
    fontFamily: 'lato-bold'
  },

  tab1_childView2: {
    flex: 4.6,
    paddingLeft: 5,
  },

  profileView: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 15,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2
  },

  yourProfileView: {
    flex: 2.5,
    justifyContent: 'center',
  },

  yourProfileText: {
    fontSize: 12,
    color: 'rgb(162, 162, 162)',
    fontFamily: 'lato-black'
  },

  profilePicView: {
    flex: 3,
    justifyContent: 'center',
  },

  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  unameView: {
    flex: 3,
    justifyContent: 'center',
  },

  nameText: {
    fontSize: 22,
    fontFamily: 'lato-bold'
  },

  surnameText: {
    fontSize: 22,
    fontFamily: 'lato-bold'
  },

  fullNameView: {
    flex: 1.5,
    justifyContent: 'center',
  },

  fullNameText: {
    fontSize: 14,
    color: 'rgb(160, 160, 160)',
    fontFamily: 'lato-bold'
  },

  tab2: {
    flex: 4.8,
    backgroundColor: colors.bgColor,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2
  },

  quizCateView: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 25,
  },

  quizCateText: {
    color: 'rgb(117, 117, 117)',
    fontFamily: 'lato-bold'
  },

  imagePart1: {
    flex: 4,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 20,
  },

  imageView1: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageDisplay: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },

  imageText: {
    fontSize: 13,
    // fontWeight: 'bold',
    fontFamily: 'lato-bold',
    marginTop: 10,
  },

  buttonOpacity: {
    flex: 1,
    backgroundColor: 'rgb(82,25,247)',
    borderRadius: 40,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: colors.bgColor,
    // fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'lato-bold'
  },
}
