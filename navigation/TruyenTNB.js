import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import TinNoiBat from "../screens/TinNoiBat";
import GetLink from "../screens/GetLink";

export default (DrawNav = StackNavigator(
  {
    TinNoiBat: { screen: TinNoiBat },
    GetLink: { screen: GetLink }
  },
  {
    initialRouteName: "TinNoiBat",
    headerMode: "screen"
  }
));
