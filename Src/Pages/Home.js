import React from 'react';
import {
  View,
  Text,
  Image
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
      <View style={{flex: 1}}>
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
          <Image
            source={require('../static/care.png')}
            style={{width: 200, height: 200}}
          />
        </View>
        <View style={{flex: 1, marginRight: 20, marginLeft:20, alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>
            Bem Vindo ao Minha Cidade
          </Text>
        </View>
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
  headerTitle: 'Minha Cidade',
  headerTintColor: 'rgb(198, 241, 219)',
  headerStyle: {
    backgroundColor:'rgb(27, 134, 112)'
  }

}
