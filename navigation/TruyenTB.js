import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import TB from "../screens/TB";
import GetLink from "../screens/GetLink";

export default (DrawNav = StackNavigator(
  {
    TB: { screen: TB },
    GetLink: { screen: GetLink }
  },
  {
    initialRouteName: "TB",
    // headerMode: "none"
  }
));
