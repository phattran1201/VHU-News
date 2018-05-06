import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import CaiDat from "../screens/CaiDat";
import VHU360 from "../screens/VHU360";
import GetLink from "../screens/GetLink";
export default (DrawNav = StackNavigator(
  {
    
    VHU360: { screen: VHU360 },
    CaiDat: { screen: CaiDat },
    GetLink: { screen: GetLink }
  },
  {
    initialRouteName: "VHU360",
    headerMode: "screen"
  }
));
