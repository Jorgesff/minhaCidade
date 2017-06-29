import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Picker,
  Slider,
  Switch,
} from 'react-native';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Form"
    }
  }
  static navigationOptions = {
   tabBarLabel: 'Form'
 };
  render() {
    return (
      <View style= {styles.Grid_1}>
        <View style= {styles.Grid_title}>
          <Text>Formulario de doenças</Text>
        </View>
        <View style= {styles.Grid_5}>
          <TextInput
            keyboardType='numeric'
            placeholder= 'Idade'
          />
          <View style={styles.Grid_inline}>
            <Text>Sente febre? </Text>
            <Switch
              onTintColor="rgb(38, 136, 92)"
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Grid_title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Grid_1: {
    flex: 1
  },
  Grid_5: {
    flex: 5
  },
  Grid_inline: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
