import React, { Component } from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Globals from './Globals';

class Pasatiempos extends Component {
  render() {
    return (
    <SafeAreaView style={{flex: 1}}>
    <SectionList
      sections={Globals.Pasatiempos}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
     </SafeAreaView>
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
      color: 'black'
    },
    title: {
      fontSize: 24,
      color: 'black'
    },
  });
export default Pasatiempos;