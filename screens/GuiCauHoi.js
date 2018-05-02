import React, {Component} from "react";
import { AppRegistry, View, StatusBar, ListView,Alert,TextInput,Platform,focused } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Textarea,Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";


var URL_API = 'http://192.168.56.1/PortalVHU_API/GuiCauHoi.php';

export default class GuiCauHoi extends React.Component {
    
    constructor(props) {
        super(props);
              
            this.GuiCauHoi = this.GuiCauHoi.bind(this);
        } 
    GuiCauHoi(question) {         
      if (question == ''){
        alert("Bạn lừa tui không nhập");
      }else{
    return fetch(URL_API, {method: "POST", body: JSON.stringify({cauHoi: question})})
      .then(response => response.text())
      .then(responseData => {
        console.log(responseData),
     this.props.navigation.goBack()
      })
      .done()
  }
}

  render() {
    return (
      <Container>
       <Header  style={{ backgroundColor: "#0099ff",marginTop: Platform.OS === 'android' ? 24 : null }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Title style= {{color:"white"}}>Đặt câu hỏi</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.GuiCauHoi(this.state.question) }>
              <Icon style= {{color:"white"}} name='send' />
            </Button>
          </Right>
        </Header>
        <Content>
        <Text>Gửi câu hỏi đến chúng tôi</Text>
        <Text></Text>
          <TextInput multiline={true} 
          onChangeText = {(question) => this.setState({question: question})}/>
         
        </Content>
      </Container>
    );
  }
}