import React, {Component} from 'react';
import {View, Text, SectionList, StyleSheet, SafeAreaView} from 'react-native';
import Globals from './Globals';
import {ThemeContext} from './Tema/ThemeContext'; // Importa el contexto del tema

class Pasatiempos extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    theme = this.context;
    return (
          <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <SectionList
              sections={Globals.Pasatiempos}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: theme.TarjetColor,
                    padding: 10,
                    marginVertical: 8,
                  }}>
                  <Text style={{fontSize: 24, color: theme.textColor}}>{item}</Text>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text
                  style={{
                    fontSize: 32,
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                  }}>
                  {title}
                </Text>
              )}
            />
          </SafeAreaView>
        )}
  }
  Pasatiempos.contextType = ThemeContext;
export default Pasatiempos;
