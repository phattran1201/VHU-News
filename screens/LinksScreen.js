import React from 'react';
import { ScrollView, StyleSheet,SegmentedControlIOS,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
// import SegmentControl from 'react-native-segment-controller';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  constructor() {
    super();

    this.state = {
      index: 0,
      content: ''
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(index) {
    this.setState({ content: `Segment ${index + 1} selected !!!`, index});
  }
  render() {
    return (
      
      <ScrollView style={styles.container}>

         {/* <SegmentControl
          values={['One', 'Two', 'Three', 'Four']}
          badges={[0, 5, 0, 2]}
          selectedIndex={this.state.index}
          height={30}
          onTabPress={this.handlePress}
          borderRadius={5}
          tabBadgeContainerStyle={{ backgroundColor: 'red'}}
        /> */}
 <Text style={styles.tab}>{this.state.content}</Text>
              {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}

      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
