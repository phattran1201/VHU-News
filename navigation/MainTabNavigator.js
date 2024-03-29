import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

// import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import CaiDat from '../screens/CaiDat';
// import ThongBao from '../screens/ThongBao';
import TinNoiBat from '../screens/TinNoiBat';
// import HoiDap from '../screens/HoiDap';
// import GuiCauHoi from '../screens/GuiCauHoi';
// import TruyenMH from './TruyenMH';
// import TruyenTB from './TruyenTB';
import TruyenTT from './TruyenTT';
// import TT from '../screens/TT';
// import TB from '../screens/TB';
//  import GetLink from '../screens/GetLink'; 
// import TruyenTNB from './TruyenTNB';
import SideBar from '../screens/SideBar';
// import Swipe from '../screens/Swipe';
import TruyenTNB from './TruyenTNB';
import TabSwipe from './TabSwipe';
import TruyenHD from './TruyenHD';
export default TabNavigator(
  {
  //   'Cài Đặt': {
  //   screen: CaiDat,
  // },
    // 'Trang chủ': {
    //   screen: HomeScreen,
    // },
    'Tin Nổi Bật': {
      screen: TruyenTNB,
    },
    
     'Tin Tức': {
      screen: TruyenTT,
    },
    //  'Thông Báo': {
    //   screen: TruyenTB,
    // },
  
    'Hoạt Động': {
      screen: TruyenHD,
    },
   
   'VHU 360': {
      screen: TabSwipe,
    },
    // 'SideBar': {
    //   screen: SideBar,
    // },
    
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
          case 'Tin Nổi Bật':
                  iconName = Platform.OS === 'ios' ? `ios-barcode${focused ? '' : '-outline'}`: 'md-barcode';
            break;
          case 'Tin Tức':
          iconName = Platform.OS === 'ios' ? `ios-paper${focused ? '' : '-outline'}` : 'md-paper';
          break;
          case 'Cài Đặt':
          iconName = Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';
          break;
          case 'VHU 360':
          iconName = Platform.OS === 'ios' ? `ios-ionitron${focused ? '' : '-outline'}` : 'md-ionitron';
          break;
          case 'Hoạt Động':
            iconName =
              Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people';
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
    swipeEnabled: false,
    tabBarOptions: {
      showIcon:true,
      showLabel:true,    
  },

  }
);
