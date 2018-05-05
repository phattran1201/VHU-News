import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import SideBar from "../screens/SideBar";

import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
import CaiDat from '../screens/CaiDat';
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

const RootStackNavigator = StackNavigator(
  {
    // Main: {
    //   screen: MainTabNavigator,
    // }, 
    'Tin Tức': {
      screen: TruyenTT,
    },  
    'Cài Đặt': {
      screen: CaiDat,
    },
      'Trang chủ': {
        screen: HomeScreen,
      },
      
       'Thông Báo': {
        screen: TruyenTB,
      },
      'Bản Tin': {
        screen: BanTin,
      },
      
      // 'Thảo Luận': {
      //   screen: TruyenMH,
      // },
     
     'Swiper': {
        screen: ThongBao,
      },
      'Hỏi Đáp': {
        screen: TruyenMH,
      },
  },
  {
    navigationOptions: () => ({
      header:null
     
    }),
  }
);

const TrangChuRouter = DrawerNavigator(
  {
    TrangChu: { screen: RootStackNavigator },
   
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <TrangChuRouter />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
