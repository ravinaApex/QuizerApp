import React from "react";
import { createStackNavigator, DrawerNavigator, TabNavigator, NavigationActions } from "react-navigation";

import SignIn from "./signIn/";
import SignUp from "./signUp/";
import Home from "./home/";
import Congrats from "./congratulation/";
import Menu from "./menu/";
import Dashboard from "./dashboard/";
import EditProfile from "./editProfile/";
import conceptQue1 from "./concept_question_1/";
import conceptQue2 from "./concept_question_2/";
import EarnCoin from "./earnCoins/";
import WrongQuestion from "./wrongQuestion/";
import AppConfig from "./appConfig/insertQuestion";

const routeConfiguration = {
  SignIn : {screen : SignIn},
  SignUp : {screen : SignUp},
  Home : {screen : Home},
  Congrats : {screen : Congrats},
  Menu : {screen : Menu},
  Dashboard : {screen : Dashboard},
  EditProfile : {screen : EditProfile},
  conceptQue1 : {screen : conceptQue1},
  conceptQue2 : {screen : conceptQue2},
  EarnCoin : {screen : EarnCoin},
  WrongQuestion : {screen : WrongQuestion},
  AppConfig : {screen : AppConfig},
}

const stackNavigatorConfiguration = {
  headerMode: 'none',
  gesusersEnabled: false,
  initialRouteName : 'SignIn',
}
export const AppScreen = createStackNavigator(routeConfiguration, stackNavigatorConfiguration)
