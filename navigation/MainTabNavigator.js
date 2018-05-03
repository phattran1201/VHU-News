import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThongBao from '../screens/ThongBao';
import BanTin from '../screens/BanTin';
import HoiDap from '../screens/HoiDap';
import GuiCauHoi from '../screens/GuiCauHoi';
import TruyenMH from './TruyenMH';
import TruyenTB from './TruyenTB';
import TruyenTT from './TruyenTT';
import TT from '../screens/TT';
import TB from '../screens/TB';
 import GetLink from '../screens/GetLink'; 
import TabTT from './TabTT';
export default TabNavigator(
  {'Cài Đặt': {
    screen: SettingsScreen,
  },
    'Trang chủ': {
      screen: HomeScreen,
    },
     'Tin Tức': {
      screen: TruyenTT,
    },
     'Thông Báo': {
      screen: TruyenTB,
    },
    'Bản Tin': {
      screen: BanTin,
    },
    
    'Thảo Luận': {
      screen: TruyenMH,
    },
   
   'Swiper': {
      screen: ThongBao,
    },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Trang chủ':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Thông Báo':
            iconName = Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications';
            break;
          case 'Bản Tin':
            iconName = Platform.OS === 'ios' ? `ios-paper${focused ? '' : '-outline'}` : 'md-paper';
            break;
          case 'Tin Tức':
          iconName = Platform.OS === 'ios' ? `ios-barcode${focused ? '' : '-outline'}`: 'md-barcode';
          break;
          case 'Cài Đặt':
          iconName = Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';
          break;
          case 'Swiper':
          iconName = Platform.OS === 'ios' ? `ios-swap${focused ? '' : '-outline'}` : 'md-swap';
          break;
          case 'Thảo Luận':
            iconName =
              Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: true,
  }
);
