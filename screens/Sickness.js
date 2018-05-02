import React from "react";
import { AppRegistry, View, StatusBar, ListView,Alert } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";



var URL_API = 'http://192.168.56.1/PortalVHU_API/Category.php';
var URL = 'http://192.168.56.1/PortalVHU_API/Sickness.php';
export default class ThongBao extends React.Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.passProps.Sickness)
      };
      this.pushView = this.pushView.bind(this);
    } 
 
  fetchData() {   
    return fetch(URL_API, {method: "POST", body: null})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        })
      })
      .done()
  }
  componentDidMount() {    
    this.fetchData();
  }
BanTin(property){
return(  
  <ListItem onPress={() => this.pushView()} >
    <Thumbnail square size={80} source={{ uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png' }} />
    <Body>
    <Text>{property.sickName}</Text>
      <Text note></Text>
    </Body>
    {/* <Button
      transparent
      onPress={() => this.props.navigation.navigate("NoiDung")}            >
      <Icon style= {{color:"white"}} name="menu" />
    </Button> */}
  </ListItem>
)}
  pushView(id, name) {     
      fetch(URL, {
      method: "POST",
      body: JSON.stringify({categoryId: id})    })
      .then((response) => response.json())
      .then((responseData) => {
        this.props.navigator.push({ 
          name: 'Sickness',
          component: require('./Sickness'),
          props: { title: name, Sickness: responseData }
        });       
         })
      .done()
  };

  render() {
        return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}            >
              <Icon style= {{color:"white"}} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Thông Báo</Title>
          </Body>
          <Right />
        </Header>
        <Content >

          {/* <Spinner animating color='red' />
          <Spinner color='green' />
          <Spinner color='blue' /> */}
          <ListView dataSource={this.state.dataSource}
            renderRow={this.BanTin.bind(this)} />
            
        </Content>
      </Container>
    );
  }
}