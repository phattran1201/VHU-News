import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import BanTin from '../screens/BanTin';

import Swipe from "../screens/Swipe";

export default (DrawNav = StackNavigator(
  {
    BanTin: { screen: BanTin },
    Swipe: { screen: Swipe }
  },
  {
    initialRouteName: "BanTin",
    // headerMode: "screen"
  }
));
