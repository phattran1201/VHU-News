import React, { Component } from 'react';
import { View, Text, WebView,Platform,focused } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Icon} from 'native-base';

export default class GetLink extends Component {
    static navigationOptions = {
        headerTintColor:'#fff',
        headerRight: (
          <Icon 
            onPress={() => alert('Đã lưu vào yêu thích !')}
            name ={ Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star-outline'}
            style ={{paddingRight: 20, color: '#fff'}}
          />
        ),
        headerStyle: {
            backgroundColor: '#0099ff'
        },
        headerMode: 'screen'
      };
    render() {
        const { navigate } = this.props.navigation;
        $url = this.props.navigation.state.params.link;
        return (
                       <WebView
                source={{ uri: $url }}
            />
   
        );
    }
}
