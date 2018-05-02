import React, { Component } from "react";
import { View,Text, FlatList, Image, TouchableOpacity,Platform } from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Container,Header,Left,Icon,Button,Body,Title,Right,Content
} from "native-base";
// import GetLink from './GetLink'; 


export default class TB extends React.Component {
  static navigationOptions = { header: null };
      constructor(props) {
        super(props);
        this.state = {
            mang: [],
            refreshing: false,
        }
    }
    componentDidMount() {
        this.setState({
            loading: true,
            refreshing: true,
        });
        return fetch("https://unlit-abbreviations.000webhostapp.com/getNotification.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson,
                    loading: false,
                    refreshing: false,
                });
            });
    }
    makeRemoteRequest = () => {
        const url = `https://unlit-abbreviations.000webhostapp.com/getNotification.php`;
        this.setState({ loading: true });
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    mang: responseJson,
                    loading: false,
                    refreshing: false,
                });
            })
    };

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
            this.makeRemoteRequest();
        })
    };
  render() {
    const { navigate } = this.props.navigation;

    return <Container style={{ backgroundColor: "white" }}>
    <Header  style={{ backgroundColor: "#0099ff" }}>
  <Left>
    <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
    <Icon name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
    </Button>
  </Left>
  <Body>
    <Title>Thông Báo</Title>
  </Body>
  <Right>
    <Button transparent onPress={() => this.props.navigation.navigate("HoiDap")} >
      <Icon name={ Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'} />
    </Button>
  </Right>
</Header>
        <Container style={{ backgroundColor: "white" }}>
          <FlatList data={this.state.mang} renderItem={({ item }) => <TouchableOpacity style={{ borderBottomWidth: 0.2, borderBottomColor: "#E0E0E0", padding: 5 }} onPress={() => {
                  navigate("GetLink", { link: item.LINK });
                }}>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
                  <View style={{ flex: 1, paddingLeft: 15 }}>
                    <Text style={{ fontSize: 50, color: "#0099ff" }}>
                      {item.NGAY}
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 17,
                        lineHeight: 17,
                        color: "#0099ff"
                      }}
                    >
                      {item.THANG}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "column", flex: 3, paddingRight: 5 }}>
                    <View style={{ flex: 1, marginTop: 5 }}>
                      <Text
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          lineHeight: 20,
                          fontSize: 15
                        }}
                      >
                        {item.TIEUDE}
                      </Text>
                      {/* <Text>{item.TOMTAT}</Text> */}
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                      <Text
                        style={{
                          fontWeight: "100",
                          fontSize: 12,
                          color: "#9E9E9E"
                        }}
                      >
                        {item.AUTHOR}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>} refreshing={this.state.refreshing} onRefresh={this.handleRefresh} 
              />
        </Container>
      </Container>;
  }
}