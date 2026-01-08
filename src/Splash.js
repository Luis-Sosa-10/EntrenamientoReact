import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Globals from './Globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from './Tema/ThemeContext'; // Importa el contexto del tema

class Splash extends Component {
  componentDidMount() {
    // Simulamos una carga de recursos durante 2 segundos
    setTimeout(() => {
      this.loadData();
    }, 1000); // 2 segundos de espera
  }

  async loadData() {
    try {
      const Usuario = await AsyncStorage.getItem('Usuario');
      console.log('Usuario: ', Usuario);
      if (Usuario !== null) {
        // Convertir el JSON de nuevo a objeto
        //const Usuario = JSON.parse(Usuario);
        const Obj = JSON.parse(Usuario);
        Globals.Usuario = Obj;
        console.log('C: ', Globals.Usuario);
      } else {
        Globals.Usuario = null;
      }
      if (Globals.Usuario != null) {
        console.log('Seleccion');
        this.props.navigation.replace('GraphQLSeleccion');
      } else {
        console.log('Navegando al Login');
        this.props.navigation.replace('Login');
      }
    } catch (error) {
      console.error('Error recuperando objeto del caché:', error);
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme === 'dark' ? Globals.TemaTarjetaOscuro : Globals.TemaTarjetaClaro,
            }}>
            <Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: theme === 'dark' ? Globals.TextoOscuro : Globals.TextoClaro}}>
              Entrenamiento GraphQL
            </Text>
            <ActivityIndicator
              size="large"
              color={theme === 'dark' ? Globals.TemaOscuro : Globals.TemaClaro}
            />
          </View>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Splash;
