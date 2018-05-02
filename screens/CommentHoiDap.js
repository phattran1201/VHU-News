import React, {Component} from "react";
import { AppRegistry, View, StatusBar, ListView,Alert,Platform,WebView,TextInput,focused } from "react-native";
import { NavigationActions,TabNavigator } from "react-navigation";
import {
  Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
} from "native-base";
// import ThemCauHoi from '../screens/ThemCauHoi';

var CMT = 'http://192.168.56.1/PortalVHU_API/CommentHoiDap.php';
var POST = 'http://192.168.56.1/PortalVHU_API/PostComment.php';
// var URL_API = 'http://192.168.56.1/PortalVHU_API/HoiDap.php';



export default class CommentHoiDap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2}),
        comment: ''
        };
        this.pushView = this.pushView.bind(this);
        this._postComment = this._postComment.bind(this);
    } 
    fetchData(hoidapId) {   
    return fetch(CMT, {method: "POST", body: JSON.stringify({hoidapId: hoidapId})})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        })
      })
      .done()
  }
    componentDidMount() {    
    this.fetchData(this.props.navigation.state.params.hoidapId);
  }
  _postComment(cmt,id){
      if(cmt == ''){

      }else{
        fetch(POST, {method: "POST", body: JSON.stringify({newComment: cmt, hoidapId: id})})
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData),
            comment: ''
          })
        })
      }
  }
taoHang(property){
        return(  
    // 
    <List icon  >
        <ListItem >
            <Text>{property.content}</Text>
        </ListItem>      
          </List>
        )}
pushView(id, name, des) {     
     this.props.navigation.navigate('CommentNews',{newsId: id, newsName: name, newsDes: des})
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
            <Title style= {{color:"white"}}>Comment</Title>
          </Body>
          <Right>
            <Button transparent  onPress={() => this.props.navigation.navigate('GuiCauHoi')} >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-send${focused ? '' : '-outline'}` : 'md-send'} />
            </Button>
          </Right>
        </Header>
        <Content>
        <View>
        <WebView source={{ html: this.props.navigation.state.params.hoidapContent}}/>
        <Text></Text>
        </View>
          <View><ListView dataSource={this.state.dataSource}
            renderRow={this.taoHang.bind(this)} />
           </View>
           <View>
           <TextInput multiline = {true}
           onChangeText = {(text) => this.setState({comment: text})} value = {this.state.comment}/>
           <Button onPress = {()=>this._postComment(this.state.comment,this.props.navigation.state.params.hoidapId)}>
           <Text>Gửi</Text>           
           </Button>
           
           </View>
         
        </Content>
    
      </Container>
    );
  }
}