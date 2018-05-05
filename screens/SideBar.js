import React from "react";
import { AppRegistry, Image, StatusBar,View,focused,Platform } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Left,Header
} from "native-base";
// import TrangChu from "../TrangChu/TrangChu";
// const routes = ["Trang Chủ", "Trang Cá Nhân", "Tin Tức"];
import MainTabNavigator from '../navigation/MainTabNavigator';

export default class SideBar extends React.Component {
  render() {
    // const {navigator} = this.props.navigation;
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 150,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              marginTop:24,
              height: 80,
              width: 150,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "http://eoffice.vhu.edu.vn/App/assets/img/VHU_logo.png"
            }}
          />
          
          <List style={{  marginTop: 160,alignItems: 'flex-start'}}>
            <Button   transparent  onPress={() =>  this.props.navigation.navigate('Tin Tức')} >
              <Icon style={{color: '#09f' }}   name = {Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'} />
              <Text style={{color: '#09f' }} >Trang của bạn</Text>
                </Button>
          <Button  transparent   >
            <Icon style={{color: '#09f' }}  name = {Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'} />
            <Text style={{color: '#09f' }}>Thông tin cá nhân</Text>
          </Button>
          <Button  transparent    onPress={() => this.props.navigation.navigate('Thông Báo')}>
            <Icon style={{color: '#09f' }}  name = {Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications'} />
            <Text style={{color: '#09f' }} >Thông Báo</Text>
          </Button>
          <Button  transparent    onPress={() => this.props.navigation.navigate('Hỏi Đáp')}>
            <Icon style={{color: '#09f' }}   name = {Platform.OS === 'ios' ? `ios-help-circle${focused ? '' : '-outline'}` : 'md-help-circle'}/>
            <Text style={{color: '#09f' }} >Hỏi Đáp</Text>
          </Button>
          <Button  transparent  >
            <Icon style={{color: '#09f' }} name = {Platform.OS === 'ios' ? `ios-paper${focused ? '' : '-outline'}` : 'md-paper'} />
            <Text style={{color: '#09f' }}>Hướng dẫn sử dụng</Text>
          </Button>
          <Button  transparent  onPress={() => this.props.navigation.navigate('Cài Đặt')} >
            <Icon style={{color: '#09f' }}  name = {Platform.OS === 'ios' ? `ios-build${focused ? '' : '-outline'}` : 'md-build'} />
            <Text style={{color: '#09f' }}>Cài đặt</Text>
          </Button>
          <Button  transparent  >
            <Icon style={{color: '#09f' }} name = {Platform.OS === 'ios' ? `ios-exit${focused ? '' : '-outline'}` : 'md-exit'}  />
            <Text style={{color: '#09f' }}>Đăng xuất</Text>
          </Button>
          </List>
        </Content>
      </Container>
    );
  }
}
{/* <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={ data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}                >
                  <Text style={{color: '#09f' }}>{data}</Text>
                </ListItem>
              );
            }}
          /> */}

         