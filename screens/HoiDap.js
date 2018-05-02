import React, {Component} from "react";
import { AppRegistry, View, StatusBar, ListView,Alert,Platform,RefreshControl } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";
// import ThemCauHoi from '../screens/ThemCauHoi';

// var URL = 'http://192.168.56.1/PortalVHU_API/Sickness.php';
var URL_API = 'http://192.168.56.1/PortalVHU_API/HoiDap.php';


export default class HoiDap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2}), 
        refreshing: false,
        };
        // this.pushView = this.pushView.bind(this);
    } 
   
    
    componentDidMount() {    
      this.setState({refreshing: true});
      return fetch(URL_API, {method: "POST", body: null})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          refreshing: false
        })
      })
    
  }

taoHang(property){
        return(  
    // 
    <List icon onPress={() => this.pushView()} >
        <ListItem >
            <Text>{property.hoidapContent}</Text>
        </ListItem>      
          </List>
        )}
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
//   themCauHoi(){
//       this.props.navigator.push({
//           name: 'themcauhoi',
//           component: require('./ThemCauHoi'),
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
            <Title>Thảo Luận</Title>
          </Body>
          <Right>
            <Button transparent  onPress={() => this.props.navigation.navigate('GuiCauHoi')} >
            <Icon name={ Platform.OS === 'ios' ? `ios-send${focused ? '' : '-outline'}` : 'md-send'} />
            </Button>
          </Right>
        </Header>
        <Content>
        
          <ListView dataSource={this.state.dataSource}
            renderRow={this.taoHang.bind(this)}
            refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.componentDidMount.bind(this)}
          />
        }/>
           
         
        </Content>
      </Container>
    );
  }
}