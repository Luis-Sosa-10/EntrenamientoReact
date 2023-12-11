import React, { Component } from 'react';
import Info from './Info'
import Pasatiempos from './Pasatiempos'
import {
  View,
} from 'react-native';

class Perfil extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
          <Info />
          <Pasatiempos />
      </View>
    );
  }
}
export default Perfil;