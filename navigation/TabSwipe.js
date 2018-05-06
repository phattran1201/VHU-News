import React, { Component } from "react";
import { StackNavigator } from "react-navigation";


import Swipe from "../screens/Swipe";

export default (DrawNav = StackNavigator(
  {
    
    Swipe: { screen: Swipe }
  },
  {
    initialRouteName: "Swipe",
    // headerMode: "screen"
  }
));
