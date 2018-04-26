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

export default TabNavigator(
  {
    'Trang chủ': {
      screen: HomeScreen,
    },
    'Thông Báo': {
      screen: ThongBao,
    },
    'Bản Tin': {
      screen: BanTin,
    },
    'Cài Đặt': {
      screen: SettingsScreen,
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
          case 'Cài Đặt':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
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
    animationEnabled: true,
    swipeEnabled: true,
  }
);
