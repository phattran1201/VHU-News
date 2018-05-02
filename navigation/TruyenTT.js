import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import TT from "../screens/TT";
import GetLink from "../screens/GetLink";

export default (DrawNav = StackNavigator(
  {
    TT: { screen: TT },
    GetLink: { screen: GetLink }
  },
  {
    initialRouteName: "TT",
    // headerMode: "none"
  }
));
