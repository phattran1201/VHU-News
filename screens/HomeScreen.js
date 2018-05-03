import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  H1,
  H2,
  Header,Button,Linking 
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";



class Mail extends React.Component {
  _handlePress = () => {
    console.log("Thông tin nhập " + this.props.href);
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Button title={this.props.title} onPress={this._handlePress} />
    );
  }
}


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> */}
        <View style={styles.welcomeContainer}>
          <Image
            source={
              // __DEV__
              //   // ? require('../assets/images/robot-dev.png')
              //   // : require('../assets/images/robot-prod.png')
              //   ? require('../assets/images/logo.png')
              require("../assets/images/logo.png")
            }
            style={styles.welcomeImage}
          />
        </View>

        <View>
          <Text style={styles.getXinChao}>CỔNG THÔNG TIN SINH VIÊN</Text>
          <Text style={styles.getXinChao}>Đại Học Văn Hiến</Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.facebook.com/messages/t/thanh.phat.97"
              )
            }
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText}>Liên hệ mình khi cho ý kiến</Text>
          </TouchableOpacity>
          <Image
            style={styles.itc}
            source={require("../assets/images/icon.png")}
          />
        </View>
        <View style={styles.button}>
        <Mail href="https://google.com" title="Go to Google" />
        <Mail href="mailto://itcvhu@gmail.com" title="Email Expo" />
      </View>
        {/* </ScrollView> */}

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Thiết kế và Phát triển bởi</Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>Đâu Phải Phát</MonoText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {
    flex: 1,
   marginTop: 10,
  },
  getXinChao: {
    fontSize: 20,
    color: "#0099ff",
    lineHeight: 24,
    textAlign: "center",
    marginHorizontal: 50
  },

  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: "10%",
    marginBottom: 20
  },
  itc: {
    width: 100,
    height: 100,
    resizeMode: "contain",

    alignItems: "center"
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },

  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
