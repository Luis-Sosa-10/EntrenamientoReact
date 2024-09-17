import React, { Component } from 'react';
import Info from './Info'
import Pasatiempos from './Pasatiempos'
import {
  View,
} from 'react-native';
import Globals from './Globals';
Globals.ocultarTap = false;
class Perfil extends Component {

  componentDidMount(){
    Globals.VistaActual = "Perfil";
  }

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