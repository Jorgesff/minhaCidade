import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "History"
    }
  }
  static navigationOptions = {
   tabBarLabel: 'History'
 };
  render() {
    return (
      <View>
        <Text>
          Ola tela {this.state.title}
        </Text>
      </View>
    );
  }
}
