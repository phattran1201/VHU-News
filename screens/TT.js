import React, { Component } from "react";
import { View,Text, FlatList, Image, TouchableOpacity,Platform,focused } from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Container,Header,Left,Icon,Button,Body,Title,Right,Content
} from "native-base";
// import GetLink from './GetLink'; 


export default class TT extends React.Component {
    static navigationOptions = {
        header: null,
};
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
        return fetch("https://unlit-abbreviations.000webhostapp.com/getNews.php")
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
        const url = `https://unlit-abbreviations.000webhostapp.com/getNews.php`;
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
        return (
            <Container style={{ backgroundColor: "white" }}>
            <Header  style={{ backgroundColor: "#0099ff",marginTop: Platform.OS === 'android' ? 24 : null }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Title style= {{color:"white"}}>Tin Tức</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("HoiDap")} >
              <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'} />
            </Button>
          </Right>
        </Header>
                <FlatList
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{ borderBottomWidth: 0.2, borderBottomColor: '#E0E0E0', padding: 5 }}
                            onPress={() => {
                                navigate('GetLink', { link: item.LINK })
                            }}
                        >
                            <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
                                <View style={{ flexDirection: "column", flex: 2, paddingRight: 10, paddingLeft: 5 }}>
                                    <View style={{ flex: 1, marginTop: 5 }}>
                                        <Text style={{ fontWeight: '100', fontSize: 12, color: "#9E9E9E" }}>{item.TIME}</Text>
                                        <Text style={{ color: "black", fontWeight: 'bold', lineHeight: 20, fontSize: 15 }}>{item.TIEUDE}</Text>
                                        {/* <Text>{item.TOMTAT}</Text> */}
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                        <Text style={{ fontWeight: '100', fontSize: 12, color: "#9E9E9E" }}>{item.AUTHOR}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image source={{ uri: item.URL }} style={{ flex: 1, width: 125, height: 125 }} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
            </Container>
        );
    }
} 



// export default TabNavigator({
//     'Tin Tức - Hoạt Động': { screen: TT },
//     'Thông Báo': { screen: TB },
// });