import React, {Component} from "react";
import { AppRegistry, View, StatusBar, ListView,Alert,TextInput,Platform } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Textarea,Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";


// var URL = 'http://192.168.56.1/PortalVHU_API/Sickness.php';
var URL_API = 'http://192.168.56.1/PortalVHU_API/GuiCauHoi.php';

export default class GuiCauHoi extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = {
        // dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
        // };
        // this.pushView = this.pushView.bind(this);
            this.GuiCauHoi = this.GuiCauHoi.bind(this);
        } 
    GuiCauHoi(question) {   
    return fetch(URL_API, {method: "POST", body: JSON.stringify({cauHoi: question})})
      .then(response => response.text())
      .then(responseData => {
        console.log(responseData),
     this.props.navigation.goBack()
      })
      .done()
  }
  
//     componentDidMount() {    
//     this.fetchData();
//   }
// taoHang(property){
//         return(  
//     // 
//     <List icon onPress={() => this.pushView()} >
//         <ListItem >
//             <Text>{property.hoidapContent}</Text>
//         </ListItem>      
//           </List>
//         )}
// pushView(id, name) {     
//       fetch(URL, {
//       method: "POST",
//       body: JSON.stringify({categoryId: id})    })
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.props.navigator.push({ 
//           name: 'Sickness',
//           component: require('./Sickness'),
//           props: { title: name, Sickness: responseData }
//         });       
//          })
//       .done()
//   };
//   GuiCauHoi(){
//       this.props.navigator.push({
//           name: 'Guicauhoi',
//           component: require('./GuiCauHoi')
//       })
//   }

  render() {
    return (
      <Container>
       <Header  style={{ backgroundColor: "#0099ff" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
            <Icon name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Title>Đặt câu hỏi</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.GuiCauHoi(this.state.question) }>
              <Icon name='send' />
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