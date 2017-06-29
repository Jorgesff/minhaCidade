import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Form from './Form';
import History from './History';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    }
  }
  static navigationOptions = {
   tabBarLabel: 'Home'
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

export const HomeNavigator = TabNavigator(
  {
  Home: { screen: Home },
  Form: { screen: Form },
  History: { screen: History }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'rgb(27, 134, 112)',
        margin: 0
      },
      indicatorStyle: {
        backgroundColor: 'rgb(33, 184, 20)',
        height: 4
      }

    }
  }
);
HomeNavigator.navigationOptions = {
  title: "MinhaCidade",
  headerTintColor: 'rgb(198, 241, 219)',
  headerStyle: {
    backgroundColor:'rgb(27, 134, 112)'
  }
}
