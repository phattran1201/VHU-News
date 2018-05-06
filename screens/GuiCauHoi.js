import React, { Component } from "react";
import {
  AppRegistry,
  View,
  StatusBar,
  ListView,
  Alert,
  TextInput,
  Platform,
  focused,Linking
} from "react-native";
import { NavigationActions, TabNavigator } from "react-navigation";
import {
  Textarea,
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label,
  List,
  ListItem,
  Thumbnail,
  Spinner
} from "native-base";
import CommentHoiDap from "./CommentHoiDap";

var URL_API = "http://itcvhu.me/PortalVHU/GuiCauHoi.php";

export default class GuiCauHoi extends React.Component {
                 static navigationOptions = ({ navigation }) => ({ // headerLeft: <Icon
                   //     name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
                   //     style={{ paddingLeft: 20, color:'#fff'}}
                   //     onPress={() => navigation.navigate("DrawerOpen")}  />,
                   title: "ĐẶT CÂU HỎI",
                   headerRight: <Icon name={Platform.OS === "ios" ? `ios-help-circle${focused ? "" : "-outline"}` : "md-help-circle"} style={{ paddingRight: 20, color: "#fff" }}  onPress={() =>Linking.openURL("https://www.facebook.com/messages/t/thanh.phat.97")}/>,
                   headerTitleStyle: { textAlign: "center", flex: 1, fontWeight: "bold" },
                   headerStyle: { backgroundColor: "#0099ff", elevation: 0, shadowOpacity: 0 },
                   headerTintColor: "#fff" });
                 constructor(props) {
                   super(props);

                   this.GuiCauHoi = this.GuiCauHoi.bind(this);
                 }
                 GuiCauHoi(question) {
                   if (question == "") {
                     alert("Bạn lừa tui không nhập");
                   } else {
                     return fetch(URL_API, {
                       method: "POST",
                       body: JSON.stringify({ cauHoi: question })
                     })
                       .then(response => response.text())
                       .then(responseData => {
                          this.props.navigation.replace('HoiDap')
                        
                       })
                       .done();
                   }
                 }
                 render() {
                   return <Container>
                       <Content padder>
                         <Card>
                           <CardItem header bordered>
                             <Text>
                               Gửi câu hỏi đến chúng tôi
                             </Text>
                           </CardItem>

                           <CardItem footer bordered>
                             <Item>
                               <Input rounded bordered placeholder="Viết bình luận" multiline={true} onChangeText={question => this.setState(
                                     { question: question }
                                   )} />
                               <Icon active name={Platform.OS === "ios" ? `ios-send${focused ? "" : "-outline"}` : "md-send"} onPress={() => this.GuiCauHoi(this.state.question)} />
                             </Item>
                           </CardItem>
                         </Card>
                       </Content>
                     </Container>;
                 }
               }
