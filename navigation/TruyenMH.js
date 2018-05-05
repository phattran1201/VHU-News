import React, { Component } from "react";
import GuiCauHoi from "../screens/GuiCauHoi.js";
import HoiDap from "../screens/HoiDap.js";
import { StackNavigator } from "react-navigation";
import CommentHoiDap from "../screens/CommentHoiDap.js";

export default (DrawNav = StackNavigator(
  {
    GuiCauHoi: { screen: GuiCauHoi },
    HoiDap: { screen: HoiDap },
    CommentHoiDap: {screen: CommentHoiDap}
  },
  {
    initialRouteName: "HoiDap",
    headerMode: "screen"
  }
));
