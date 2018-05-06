import React, { Component } from "react";
import { Image, Platform, focused, FlatList, Linking } from "react-native";
import {
  Fab,
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button
} from "native-base";

export default class VHU360 extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        name={
          Platform.OS === "ios"
            ? `ios-menu${focused ? "" : "-outline"}`
            : "md-menu"
        }
        style={{ paddingLeft: 20, color: "#fff" }}
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    title: "VHU 360",
    headerRight: (
      <Icon
        onPress={() => navigation.navigate({ routeName: "TB" })}
        name={
          Platform.OS === "ios"
            ? `ios-notifications${focused ? "" : "-outline"}`
            : "md-notifications"
        }
        style={{ paddingRight: 20, color: "#fff" }}
      />
    ),
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontWeight: "bold",
      fontStyle: "italic"
    },
    headerStyle: {
      backgroundColor: "#0099ff",
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  });

  constructor(props) {
    super(props);
    this.state = {
      mang: [],
      refreshing: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
      refreshing: true
    });
    return fetch("http://itcvhu.me/PortalVHU/getVHU360.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          mang: responseJson,
          loading: false,
          refreshing: false
        });
      });
  }
  makeRemoteRequest = () => {
    const url = `http://itcvhu.me/PortalVHU/getVHU360.php`;
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          mang: responseJson,
          loading: false,
          refreshing: false
        });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <View>
          <FlatList
            data={this.state.mang}
            renderItem={({ item }) => (
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image
                    style={{ height: 300, flex: 1 }}
                    source={{ uri: item.URL }}
                  />
                </CardItem>
                <CardItem>
                  <Icon
                    style={{ color: "white" }}
                    name={
                      Platform.OS === "ios"
                        ? `ios-share${focused ? "" : "-outline"}`
                        : "md-share"
                    }
                    style={{ color: "#ED4A6A" }}
                    onPress={() =>
                      Linking.openURL(
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                          item.LINK
                      )
                    }
                  />
                  {/* <Text note>{item.TIME}</Text> */}
                  <Text   onPress={() => {navigate('GetLink', { link: item.LINK,tieude: item.TIEUDE, linkdemo:'https://www.facebook.com/sharer/sharer.php?u=' })}}>{item.TIEUDE}</Text>
                </CardItem>
              </Card>
            )}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </View>
      </Container>
    );
  }
}
