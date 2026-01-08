import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from './ThemeContext'; // Importa el contexto del tema
import Globals from '../Globals';
import {useNavigation} from '@react-navigation/native';

const Tema = ({children}) => {
  const {theme, setTheme, saveTheme} = useContext(ThemeContext);
const navigation = useNavigation();
  Globals.ocultarTap = true;

  const ThemeSwitch = () => {
    return (
      <View style={[ styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
        <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>
          Tema actual: {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
          value={theme === 'dark'}
          onValueChange={() => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            //saveTheme(newTheme);
          }}
        />
      </View>
    );
  };

  return (
     <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: theme === 'dark' ? Globals.TemaOscuro : Globals.TemaClaro,
              paddingTop: 40,
              paddingVertical: 30,
            }}>
            <View>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => {
                  navigation.navigate('Principal'), Globals.ocultarTap = false
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
                    color: theme === 'dark' ? Globals.TextoOscuro : Globals.TextoClaro
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
                    color: theme === 'dark' ? Globals.TextoOscuro : Globals.TextoClaro
                  }}>
                  Persistencia de datos
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginLeft: 15,
                    marginTop: 20,
                   color: theme === 'dark' ? Globals.TextoOscuro : Globals.TextoClaro
                  }}>
                    Tema de la aplicación
                </Text>
              </View>
            </View>
          </View>
        <ThemeSwitch />
        </View>
  );
};
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
export default Tema; // Exporta el componente Tema
