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
    height: 65,
    flexDirection: 'row',
    paddingHorizontal: 25,
  },

  headerIcon: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  editProfileView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  editProfileText: {
    fontSize: 20,
    fontFamily: 'lato-bold',
  },

  profileImgView: {
    flex: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImg: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },

  uNameView: {
    flex: 3.5,
    alignItems: 'center',
  },

  uNameText: {
    fontSize: 25,
    fontFamily: 'lato-bold',
    marginTop: 10,
  },

  uNameEmail: {
    fontSize: 15,
    color: 'rgb(164, 163, 163)',
    fontFamily: 'lato-bold',
  },

  tabView: {
    flex: 3,
    flexDirection: 'row',
  },

  opacity1View: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgb(255, 255, 255)',
    marginTop: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  gradient1: {
    alignItems: 'center',
  },

  quiz1Text: {
    color: 'rgb(143, 142, 142)',
    fontFamily: 'lato-bold',
  },

  quiz1Number: {
    fontSize: 20,
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  opacity2View: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
  },

  gradient2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quiz2Text: {
    color: 'rgb(143, 142, 142)',
    fontFamily: 'lato-bold',
  },

  quiz2Number: {
    fontSize: 20,
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  tab1View: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgColor,
  },

  tab1Text: {
    fontSize: 30,
  },

  tab2View: {
    flex: 7,
    backgroundColor: colors.bgColor,
  },

  changeWeekView: {
    flex: 2.2,
    paddingHorizontal: 40,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  changeWeekText: {
    flex:1,
    color:'rgb(150, 150, 150)',
    fontFamily: 'lato-bold',
  },

  NumberView: {
    fontFamily: 'lato-black',
    marginLeft: 10,
  },

  progressView: {
    flex: 2.2,
    paddingHorizontal: 40,
    justifyContent: 'flex-end',
  },

  progressText: {
    alignSelf: 'flex-start',
    color:'rgb(150, 150, 150)',
    fontFamily: 'lato-bold',
  },

  chartView: {
    flex: 6,
    paddingLeft: 30,
    paddingRight: 25,
    marginBottom: 10,
  },

  listView: {
    height: 65,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },

  listUnameView: {
    width: Width/8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateView: {
    width: Width/2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  listImage: {
    height: 45,
    width: 45,
    borderRadius: 22,
  },

  listUname: {
    fontSize: 13,
    fontFamily: 'lato-bold',
  },

  listEmail: {
    marginLeft: 15,
    fontSize: 11,
    color:'rgb(172, 172, 172)',
    fontFamily: 'lato-bold',
    marginTop: 3,
  },

  listCoinView: {
    width: Width/2.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  listValueText: {
    fontSize: 13,
    fontFamily: 'lato-bold',
    marginTop: 2,
  },

  listHashView: {
    flex: 2,
    alignItems: 'flex-end',
  },


}
