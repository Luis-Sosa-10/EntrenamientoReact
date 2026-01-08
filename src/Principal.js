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
import {ThemeContext} from './Tema/ThemeContext'; // Importa el contexto del tema


class Perfil extends Component {
  componentWillUnmount() {
//    Globals.VistaActual = "Principal";
    }
  
  render() {
    Globals.ocultarTap = false
    return (
       <ThemeContext.Consumer>
            {({ theme }) => (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: Globals.theme.light.backgroundColor,
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
                  color: Globals.theme.light.textColor
                }}>
                Ejercicios realizados duran los entrenamientos
              </Text>
            </View>
          </View>
        </View>
        <ScrollView style={{flex: 1, backgroundColor: Globals.theme.light.backgroundColor}}>
          {Globals.Ejercicios.map(item => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                padding: 16,
              }}>
              <TouchableOpacity
              onPress={() => {   Globals.ocultarTap = true,this.props.navigation.navigate(item.Navegacion)}}
                style={{
                  backgroundColor: Globals.theme.light.TarjetColor,
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
                    color: Globals.theme.light.textColor
                  }}>
                  {item.titulo}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    color: Globals.theme.light.textColor
                  }}>
                  {item.Entrenamiento}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: Globals.theme.light.textColor
                  }}>
                  {item.descripcion}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      )}
      </ThemeContext.Consumer>
    );
  }
}
export default Perfil;
