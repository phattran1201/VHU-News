import React, {Component} from "react";
import { AppRegistry, View, StatusBar, ListView,Alert,Platform,focused } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";
// import ThemCauHoi from '../screens/ThemCauHoi';

var URL = 'http://192.168.56.1/PortalVHU_API/CommentHoiDap.php';
var URL_API = 'http://192.168.56.1/PortalVHU_API/HoiDap.php';


export default class HoiDap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
        };
        // this.pushView = this.pushView.bind(this);
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
taoHang(property){
        return(  
      <List icon  >
        <ListItem  onPress={() =>  this.pushView(property.hoidapId,property.hoidapContent)}>
            <Text>{property.hoidapContent}</Text>
        </ListItem>      
          </List>
        )}
pushView(id, content) {     
     this.props.navigation.navigate('CommentHoiDap',{hoidapId: id, hoidapContent: content})
  };
//   themCauHoi(){
//       this.props.navigator.push({
//           name: 'themcauhoi',
//           component: require('./ThemCauHoi'),
//       })
//   }

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
            <Title style= {{color:"white"}}>Thảo Luận</Title>
          </Body>
          <Right>
            <Button transparent  onPress={() => this.props.navigation.navigate('GuiCauHoi')} >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-send${focused ? '' : '-outline'}` : 'md-send'} />
            </Button>
          </Right>
        </Header>
        <Content>
        
          <ListView dataSource={this.state.dataSource}
            renderRow={this.taoHang.bind(this)} />
           
         
        </Content>
      </Container>
    );
  }
}