import React, { Component } from 'react';
import Globals from './Globals';
import {
  View,
  Text,
  Image,
} from 'react-native';

class Info extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#048c32', paddingTop:20, paddingVertical: 50 }} >
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
            color: 'black'
          }}
          >
            {Globals.Nombre}
          </Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 5,
            color: 'black'
          }}
          >
          {Globals.Correo}
          </Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 5,
            color: 'black'
          }}
          >
            {Globals.Telefono}
          </Text>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 5,
            color: 'black'
          }}
          >
            Ir a ejercicios
          </Text>
        </View>
      </View>
      </View>
    );
  }
}
export default Info;