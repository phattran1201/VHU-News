import React, {Component} from "react";
import { AppRegistry, View, StatusBar, ListView,Alert,TextInput,Platform,focused } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Textarea,Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";


var URL_API = 'http://itcvhu.me/PortalVHU/GuiCauHoi.php';

export default class GuiCauHoi extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // headerLeft: <Icon 
    //     name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
    //     style={{ paddingLeft: 20, color:'#fff'}} 
    //     onPress={() => navigation.navigate("DrawerOpen")}  />,
    title: 'ĐẶT CÂU HỎI',
    headerRight: <Icon  
   name={ Platform.OS === 'ios' ? `ios-help${focused ? '' : '-outline'}` : 'md-help'} 
        style={{ paddingRight: 20, color:'#fff' }}
        />,
    headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',   
        fontStyle: 'italic',
    
    },
    headerStyle: {
        backgroundColor: '#0099ff',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTintColor: '#fff',
})
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
       {/* <Header  style={{ backgroundColor: "#0099ff",marginTop: Platform.OS === 'android' ? 24 : null }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Title style= {{color:"white"}}>Đặt câu hỏi</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.GuiCauHoi(this.state.question)} >
              <Icon style= {{color:"white"}} name='send' />
            </Button>
          </Right>
        </Header> */}
        <Content>
        <Text>Gửi câu hỏi đến chúng tôi</Text>
        <Text></Text>
          <TextInput multiline={true} 
          onChangeText = {(question) => this.setState({question: question})}/>
         <Button transparent onPress={() => this.GuiCauHoi(this.state.question)} >
              <Icon style= {{color:"white"}} name='send' />
            </Button>
        </Content>
      </Container>
    );
  }
}