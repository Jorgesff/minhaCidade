import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Picker,
  Slider,
  Switch,
  Button,
  ScrollView,
  DatePickerAndroid
} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Form",
      fever: false,
      medico: false,
      end: "",
      begin: "",
    }
  }
  static navigationOptions = {
   tabBarLabel: 'Form'
  };
async handleBeginDate() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          begin: day+'/'+month+'/'+year
        })
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  async handleEndDate() {
      try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          minDate: new Date(this.state.begin),
          date: new Date()
        });

        if (action !== DatePickerAndroid.dismissedAction) {
          this.setState({
            end: day+'/'+month+'/'+year
          })
          // Selected year, month (0-11), day
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
    }
  render() {
    let hasDiagnostic = this.state.medico
    return (
      <ScrollView style= {styles.Grid_1}>
        <View style= {styles.Grid_title}>
          <Text style={styles.fontG}>Formulario de doenças</Text>
        </View>
        <View style= {styles.Grid_5}>
          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Idade: </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
              <TextInput
                style={styles.age}
                keyboardType='numeric'
              />
              <Text style={styles.fontS}>Anos</Text>
            </View>
          </View>

          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Data de inicio </Text>
            <Text style={styles.fontS} >{this.state.begin}</Text>
            <Button title="calendario" onPress={() => this.handleBeginDate()}/>
          </View>

          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Data de termino </Text>
            <Text style={styles.fontS}>{this.state.end}</Text>
            <Button title="calendario" onPress={() => this.handleEndDate()}/>
          </View>
          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Sente febre? </Text>
            <Switch
              onTintColor="rgb(38, 136, 92)"
              value={this.state.fever}
              onValueChange={(v) => {
                this.setState({
                  fever: v
                });
              }}
            />
          </View>

          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Sente nausea? </Text>
            <Switch
              onTintColor="rgb(38, 136, 92)"
              value={this.state.nausea}
              onValueChange={(v) => {
                this.setState({
                  nausea: v
                });
              }}
            />
          </View>

          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Sente tontura? </Text>
            <Switch
              onTintColor="rgb(38, 136, 92)"
              value={this.state.tontura}
              onValueChange={(v) => {
                this.setState({
                  tontura: v
                });
              }}
            />
          </View>

          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Possui manchas na pele? </Text>
            <Switch
              onTintColor="rgb(38, 136, 92)"
              value={this.state.manchas}
              onValueChange={(v) => {
                this.setState({
                  manchas: v
                });
              }}
            />
          </View>

          <View style={styles.Grid_inline}>
            <Text style={styles.fontS}>Ja foi diagnosticado por um medico? </Text>
            <Switch
              onTintColor="rgb(38, 136, 92)"
              value={this.state.medico}
              onValueChange={(v) => {
                this.setState({
                  medico: v
                });
              }}
            />
          </View>

          {hasDiagnostic ? (
            <TextInput placeholder="Qual sua doença?"/>
          ) :
            null
          }
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Grid_title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontG: {
      fontSize: 28
  },
  fontM: {
    fontSize: 20
  },
  fontS: {
    fontSize: 16
  },
  age: {
    width: 70,
    fontSize: 20
  },
  Grid_1: {
    flex: 1,
  },
  Grid_5: {
    flex: 5,

  },
  Grid_inline: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10
  },
  Grid_colunm: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 15
  }
});
