import React from "react";
import { AppRegistry, Image, StatusBar,View,focused } from "react-native";
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


export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
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
          {/* <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={ data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /> */}
          <List style={{ marginTop: 150,alignItems: 'flex-start' }}>
            <Button  style={{width: "100%"}} transparent  onPress={() => alert('Trang của bạn !') } >
              <Icon  name='md-home' />
              <Text>Trang của bạn</Text>
                </Button>
          <Button style={{width: "100%"}} transparent   onPress={() => alert('Thông tin cá nhân!')}>
            <Icon  name='md-person' />
            <Text>Thông tin cá nhân</Text>
          </Button>
          <Button style={{width: "100%"}} transparent   onPress={() => alert('Tin Tức !')}>
            <Icon  name='md-paper' />
            <Text>Tin Tức</Text>
          </Button>
          <Button style={{width: "100%"}} transparent  >
            <Icon  name='md-cash' />
            <Text>Hướng dẫn sử dụng</Text>
          </Button>
          <Button style={{width: "100%"}} transparent  >
            <Icon  name='md-build' />
            <Text>Cài đặt</Text>
          </Button>
          <Button style={{width: "100%"}} transparent  >
            <Icon  name='md-cloudy-night' />
            <Text>Đăng xuất</Text>
          </Button>
          </List>
        </Content>
      </Container>
    );
  }
}
