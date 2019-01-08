const React = require("react-native");
const { Dimensions, Platform } = React;
import { Constants } from 'expo';
import colors from "../appConfig/colors";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

export default {

  container: {
    flex: 1,
    // backgroundColor: colors.bgColor
  },

  statusBar: {
    backgroundColor: colors.statusColor,
    height: Constants.statusBarHeight,
  },

  headerTab: {
    flex: 4,
    backgroundColor: '#fff',
    elevation: 10,
  },

  headerView: {
    height: 60,
    flexDirection: 'row',
  },

  iconOpacity: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  leaderView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: Width/4,
  },

  leaderText: {
    fontSize: 20,
    fontFamily: 'lato-bold'
  },

  profileTab: {
    flex: 1,
    flexDirection: 'row'
  },

  image1View: {
    flex: 5.5,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  roundImage1View: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderRadius: 12,
    backgroundColor: 'rgb(27, 229, 153)',
    position: 'absolute',
    bottom: 7
  },

  profile1: {
    bottom: 20,
    height: 65,
    width: 65,
    borderRadius: 32,
  },

  text2: {
    color:'#fff',
    // fontWeight: 'bold',
    fontFamily: 'lato-bold',
    fontSize: 16,
  },

  detail1View: {
    flex: 4.5,
    alignItems: 'center',
  },

  emiliView: {
    flex: 2.5,
    justifyContent:'center',
    alignItems: 'center',
  },

  emiliText: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  emiliEmail: {
    fontSize: 12,
    color: 'rgb(172, 172, 172)',
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  coin1View: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  coin1Number: {
    fontSize: 12,
    fontFamily: 'lato-black',
  },

  image2View: {
    flex: 5.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  profile2: {
    bottom: 20,
    height: 80,
    width: 80,
    borderRadius: 40,
  },

  roundImage2View: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderRadius: 12,
    backgroundColor: 'rgb(231, 71, 128)',
    position: 'absolute',
    bottom: 7,
  },

  text1: {
    color:'#fff',
    fontFamily: 'lato-bold',
    fontSize: 16,
  },

  detail2View: {
    flex: 4.5,
    alignItems: 'center',
  },

  elvisView: {
    flex: 2.5,
    justifyContent:'center',
    alignItems: 'center',
  },

  elvisText: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  elvisEmail: {
    fontSize: 12,
    color: 'rgb(172, 172, 172)',
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  coin2View: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  coin2Number: {
    fontSize: 12,
    fontFamily: 'lato-black',
  },

  image3View: {
    flex: 5.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  profile3: {
    bottom: 20,
    height: 65,
    width: 65,
    borderRadius: 32,
  },

  roundImage3View: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderRadius: 12,
    backgroundColor: 'rgb(255, 152, 20)',
    position: 'absolute',
    bottom: 7,
  },

  text3: {
    color:'#fff',
    fontFamily: 'lato-bold',
    fontSize: 16,
  },

  detail3View: {
    flex: 4.5,
    alignItems: 'center',
  },

  pamView: {
    flex: 2.5,
    justifyContent:'center',
    alignItems: 'center',
  },

  pamText: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  pamEmail: {
    fontSize: 12,
    color: 'rgb(172, 172, 172)',
    marginTop: 3,
    fontFamily: 'lato-bold',
  },

  coin3View: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  coin3Number: {
    fontSize: 12,
    fontFamily: 'lato-black',
  },

  listTab: {
    flex: 6,
    backgroundColor: 'rgb(251, 250, 250)',
  },

  staticView: {
     bottom:0,
     height: Height/11,
     flexDirection: 'row',
     paddingHorizontal: 20,
     backgroundColor: 'rgb(0, 165, 236)',
   },

   staticProfileView: {
     width: 50,
     justifyContent: 'center',
   },

   staticProfileImg: {
     height: 45,
     width: 45,
     borderRadius: 22,
   },

   staticDetailView: {
     flex: 5,
     justifyContent: 'center',
   },

   youText: {
     marginLeft: 15,
     fontSize: 14,
     color:'#fff',
     fontFamily: 'lato-black',
   },

   youEmail: {
     marginLeft: 15,
     fontSize: 12,
     color:'rgb(145, 208, 245)',
     fontFamily: 'lato-bold',
   },

   staticCoinView: {
     flex: 3,
     flexDirection: 'row',
   },

   staticCoinNumber: {
     fontSize: 13,
     fontFamily: 'lato-black',
     color: '#fff',
     marginTop: Height/42,
   },

   hashView: {
     flex: 2,
     alignItems: 'flex-end',
   },

   hashText: {
     fontSize: 13,
     fontFamily: 'lato-black',
     color: '#fff',
     marginTop: Height/42,
   },

   listView: {
     height: 75,
     flexDirection: 'row',
     paddingHorizontal: 20,
   },

   listImage: {
     height: 45,
     width: 45,
     borderRadius: 22,
   },

   listUname: {
     marginLeft: 15,
     fontSize: 13,
     fontFamily: 'lato-bold',
     marginTop: 3,
   },

   listEmail: {
     marginLeft: 15,
     fontSize: 11,
     color:'rgb(172, 172, 172)',
     fontFamily: 'lato-bold',
     marginTop: 3,
   },

   listCoinView: {
     flex: 3,
     flexDirection: 'row',
   },

   listValueText: {
     fontSize: 13,
     fontFamily: 'lato-bold',
     marginTop: 3,
   },

   listHashView: {
     flex: 2,
     alignItems: 'flex-end',
   },

}
