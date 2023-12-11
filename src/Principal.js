import React, {Component} from 'react';
import Globals from './Globals';
import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';

class Perfil extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#048c32',
            paddingTop: 20,
            paddingVertical: 50,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  marginTop: 30,
                  color: 'black',
                }}>
                Ejercicios realizados duran los entrenamientos
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          {Globals.Ejercicios.map(item => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                padding: 16,
              }}>
              <TouchableOpacity
              onPress={() => {this.props.navigation.navigate(item.Navegacion)}}
                style={{
                  backgroundColor: '#FFEE9F',
                  borderRadius: 8,
                  padding: 16,
                  elevation: 2, // Sombra en Android
                  shadowRadius: 4,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 8,
                    color: 'black'
                  }}>
                  {item.titulo}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    color: 'black'
                  }}>
                  {item.Entrenamiento}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black'
                  }}>
                  {item.descripcion}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFC66E',
    padding: 10,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    color: 'black',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
});
export default Perfil;
