import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Boton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
    onPress={this.props.Accion}
          style={{
            width: 70,
            height: 70,
            backgroundColor: '#B8B7B7',
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            borderWidth: 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
            }}>
            {this.props.Valor}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Boton;
