import React, { Component } from 'react';
import { Image } from 'react-native';
import { Fab,Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';
const cards = [
  {
    text: 'Đâu Phải Phát',
    name: 'Ngày hội máy tính',
    image: require('../assets/images/1.jpg'),
  },
  {
    text: 'An',
    name: 'Cậu bé rừng xanh',
    image: require('../assets/images/2.jpg'),
  },
  {
    text: 'Tuấn',
    name: 'Joker',
    image: require('../assets/images/4.jpg'),
  },
 
];

export default class DeckSwiperAdvancedExample extends Component {
 
  render() {
    return (
      <Container>
        <Header>    
        <Text style={{ marginTop:20, fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    
    textAlign: 'center',}}>Trượt ngay ảnh hoặc click nút trên để test</Text>
        </Header>  
       
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>by Đâu Phải Phát</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>            }
          />
         
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
        <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Trượt trái</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            
            <Text>Trượt phải</Text>
            <Icon name="arrow-forward" />
          </Button>
          </View>
      </Container>
     
        
    );
  }
}

// import React from "react";
// import { AppRegistry, View, StatusBar, ListView,Alert } from "react-native";
// import { NavigationActions,TabNavigator } from "react-navigation";
// import {
//   Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
// } from "native-base";



// var URL_API = 'http://192.168.56.1/PortalVHU_API/Category.php';
// var URL = 'http://192.168.56.1/PortalVHU_API/Sickness.php';
// export default class ThongBao extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
//       };
//     //   this.pushView = this.pushView.bind(this);
//     } 
 
//   fetchData() {   
//     return fetch(URL_API, {method: "POST", body: null})
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData)
//         })
//       })
//       .done()
//   }
//   componentDidMount() {    
//     this.fetchData();
//   }
// BanTin(property){
// return(  
//   <ListItem onPress={() => this.pushView(property.categoryId, property.categoryName)} >
//     <Thumbnail square size={80} source={{ uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png' }} />
//     <Body>
//     <Text>{property.categoryName}</Text>
//       <Text note>{property.categoryId}</Text>
//     </Body>
//     {/* <Button
//       transparent
//       onPress={() => this.props.navigation.navigate("NoiDung")}            >
//       <Icon name="menu" />
//     </Button> */}
//   </ListItem>
// )}
// //   pushView(id, name) {     
// //       fetch(URL, {
// //       method: "POST",
// //       body: JSON.stringify({categoryId: id})    })
// //       .then((response) => response.json())
// //       .then((responseData) => {
// //         this.props.navigator.push({ 
// //           name: 'sickness',
// //           component: require('./Sickness'),
// //           props: { title: name, sickness: responseData }
// //         });       
// //          })
// //       .done()
// //   };

//   render() {
//         return (
//       <Container>
//         <Header>
//           <Left>
//             <Button
//               transparent
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}            >
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Thông Báo</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content >

//           {/* <Spinner animating color='red' />
//           <Spinner color='green' />
//           <Spinner color='blue' /> */}
//           <ListView dataSource={this.state.dataSource}
//             renderRow={this.BanTin.bind(this)} />
            
//         </Content>
//       </Container>
//     );
//   }
// }