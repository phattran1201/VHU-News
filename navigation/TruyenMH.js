import React, { Component } from "react";
import GuiCauHoi from "../screens/GuiCauHoi.js";
import HoiDap from "../screens/HoiDap.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
  {
    GuiCauHoi: { screen: GuiCauHoi },
    HoiDap: { screen: HoiDap }
  },
  {
    initialRouteName: "HoiDap",
    headerMode: "none"
  }
));
