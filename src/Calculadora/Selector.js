import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Operacion: 'Suma',
      Resultado: '',
      showOperacionList: false,
      Operaciones: [
        {Operacion: 'Suma'},
        {Operacion: 'Resta'},
        {Operacion: 'Multiplicacion'},
        {Operacion: 'Division'},
      ],
    };
  }
  render() {
    return this.selector();
  }
  selector() {
    return (
      <View
        style={{
          marginTop: 0,
          width: 190,
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
          borderWidth: 3,
        }}>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              showOperacionList: this.state.showOperacionList ? false : true,
            })
          }
          style={{
            borderWidth: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderColor: '#a0a1a3',
            borderRadius: 4,
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{
              fontSize: 20,
              fontFamily: 'AvenirNext-DemiBold',
              marginVertical: 5,
              width: '80%',
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'right',
            }}>
            {this.state.Operacion}
          </Text>
        </TouchableOpacity>
        {this.state.showOperacionList ? (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#a0a1a3',
              borderRadius: 4,
            }}>
            {this.OperacionList()}
          </View>
        ) : null}
      </View>
    );
  }
  OperacionList() {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 3,
          elevation: 8,
          borderRadius: 4,
        }}>
        <ScrollView horizontal={true} scrollEnabled={false}>
          <FlatList
            data={this.state.Operaciones}
            renderItem={({item, index}) => this.renderOperaciones(item, index)}
            keyExtractor={item => item.id}
            nestedScrollEnabled
          />
        </ScrollView>
      </View>
    );
  }
  renderOperaciones(item) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => [
            this.setState({
              showOperacionList: false,
              Operacion: item.Operacion,
            }),this.props.Accion(item.Operacion)
          ]}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 0,
            marginHorizontal: 0,
            marginLeft: 10,
            width: '100%',
          }}>
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              marginRight: 5,
            }}
          />
          <Text
            allowFontScaling={false}
            style={{
              marginVertical: 10,
              fontSize: 13,
              fontWeight: '700',
            }}>
            {item.Operacion}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Selector;
