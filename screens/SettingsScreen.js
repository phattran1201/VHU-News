import React from "react";
import { AppRegistry, Image, StatusBar,View,focused,WebBrowser } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Left,Separator,
  Header,Body,Right,Switch, CheckBox
} from "native-base";




export default class SettingsScreen extends React.Component {
  render() {
    return <Container>
        <Content>
          <Image source={{ uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png" }} style={{ height: 120, width: "100%" }
              // alignSelf: "stretch",
              // position: "absolute"
            } />
          <Image square style={{ height: 80, width: 150, position: "absolute", alignSelf: "center", top: 20 }} source={{ uri: "http://eoffice.vhu.edu.vn/App/assets/img/VHU_logo.png" }} />

          <List>
            <ListItem itemDivider>
              <Text style={{ color: "#09f" }}>Thông Báo</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="notifications" />
              </Left>
              <Body>
                <Text>Thông Báo</Text>
              </Body>
              <Right>
                <Switch value={true} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="pulse" />
              </Left>
              <Body>
                <Text>Rung</Text>
              </Body>
              <Right>
                <Switch value={true} />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ color: "#09f" }}>Liên hệ</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="people" />
              </Left>
              <Body>
                <Text>Câu lạc bộ ITC</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.facebook.com/messages/t/thanh.phat.97"
              )
            }>Người phát triển</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ color: "#09f" }}>Tổng Quan</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="information-circle" />
              </Left>
              <Body>
                <Text>Trợ giúp</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="lock" />
              </Left>
              <Body>
                <Text>Chính sách bảo mật</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bookmarks" />
              </Left>
              <Body>
                <Text>Điều khoản Dịch vụ</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="close" />
              </Left>
              <Body>
                <Text>Đang xuất</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>;
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
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /> */}