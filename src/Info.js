import React, { Component } from 'react';
import Globals from './Globals';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {ThemeContext} from './Tema/ThemeContext'; // Importa el contexto del tema

class Info extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
      {({ theme }) => (
      <View style={{ backgroundColor: Globals.theme.light.backgroundColor, paddingTop:20, paddingVertical: 50 }} >
      <View style={{ flexDirection: 'row' }} >
        <Image
          style={{ width: 100, height: 100, marginTop: 20 }}
          source={require('./images/logo.png')}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 30,
           color: Globals.theme.light.textColor
          }}
          >
            {Globals.Nombre}
          </Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 5,
            color: Globals.theme.light.textColor
          }}
          >
          {Globals.Correo}
          </Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 5,
           color: Globals.theme.light.textColor
          }}
          >
            {Globals.Telefono}
          </Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 5,
            color: Globals.theme.light.textColor
          }}
          >
            Ir a ejercicios
          </Text>
        </View>
      </View>
      </View>
      )}
      </ThemeContext.Consumer>
    );
  }
}
export default Info;