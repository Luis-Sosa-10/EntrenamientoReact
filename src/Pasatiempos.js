import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet, SafeAreaView} from 'react-native';
import Globals, { TextoClaro } from './Globals';
import {ThemeContext} from './Tema/ThemeContext'; // Importa el contexto del tema

class Pasatiempos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <SafeAreaView style={{flex: 1, backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF'}}>
            <SectionList
              sections={Globals.Pasatiempos}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: theme === 'dark' ? Globals.TemaTarjetaOscuro : Globals.TemaTarjetaClaro,
                    padding: 10,
                    marginVertical: 8,
                  }}>
                  <Text style={{fontSize: 24, color: theme === 'dark' ? Globals.TextoOscuro : TextoClaro}}>{item}</Text>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text
                  style={{
                    fontSize: 32,
                    backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF',
                    color: theme === 'dark' ? Globals.TextoOscuro : TextoClaro,
                  }}>
                  {title}
                </Text>
              )}
            />
          </SafeAreaView>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Pasatiempos;
