import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Globals from './Globals';

class GraphQLSeleccion extends Component {
  componentDidMount() {
    Globals.VistaActual = 'GraphQLSeleccion';
  }

  render() {
    Globals.VistaActual = 'GraphQLSeleccion';
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => { Globals.ocultarTap = false,
              this.props.navigation.navigate('Principal');
            }}>
            <Image
              source={require('./images/back.png')}
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
              }}>
              Regresar
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Personajes')}>
          <Text style={styles.buttonText}>Ver lista de Personajes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('addPersonaje')}>
          <Text style={styles.buttonText}>Añadir Personaje</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#FFEE9F',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10, // Espacio entre los botones
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#048c32',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GraphQLSeleccion;
