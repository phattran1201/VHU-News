import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import HD from "../screens/HD";
import GetLink from "../screens/GetLink";

export default (DrawNav = StackNavigator(
  {
    HD: { screen: HD },
    GetLink: { screen: GetLink }
  },
  {
    initialRouteName: "HD",
    headerMode: "screen"
  }
));
