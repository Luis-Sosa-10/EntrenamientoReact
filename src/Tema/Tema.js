import React, {Component} from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from './ThemeContext';
import Globals from '../Globals';

class Tema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: Globals.theme.light,
    };
  }
  componentDidMount() {
    const theme = this.context;
    Globals.ocultarTap = true;
  }

  ThemeSwitch() {
    let theme = this.context;
    return (
      <View
        style={[
          styles.container,
          theme.Tema === 'dark' ? styles.darkContainer : styles.lightContainer,
        ]}>
        <Text
          style={[
            styles.text,
           theme.Tema === 'dark' ? styles.darkText : styles.lightText,
          ]}>
          Tema actual: {theme.Tema}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
          value={theme.Tema == 'dark'}
          onValueChange={() => {
          theme.Tema === 'dark'
            ? theme = Globals.theme.light
            : theme = Globals.theme.dark;
          }}
        />
      </View>
    );
  }

  render() {
        console.log('Tema actual en Tema.js: ',theme);
    return(
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: theme.backgroundColor,
          paddingTop: 40,
          paddingVertical: 30,
        }}>
        <View>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              this.props.navigation.navigate('Principal'), Globals.ocultarTap = false
            }}>
            <Image
              source={require('../images/back.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                color: theme.textColor,
              }}>
              Regresar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 10,
                color: theme.textColor,
              }}>
              Persistencia de datos
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 20,
                color: theme.textColor,
              }}>
              Tema de la aplicación
            </Text>
          </View>
        </View>
      </View>
      {this.ThemeSwitch()}
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});
Tema.contextType = ThemeContext;
export default Tema; // Exporta el componente Tema
