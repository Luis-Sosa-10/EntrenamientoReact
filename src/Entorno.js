import React, {Component} from 'react';
import {REACT_APP_DEV_MODE, REACT_APP_PROD_MODE} from '@env';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class Entorno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Peliculas: [],
      loaded: false,
    };
  }
  render() {
    const url =
        process.env.NODE_ENV === 'development'
            ? REACT_APP_DEV_MODE
            : REACT_APP_PROD_MODE;

    return (
      
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <View>
            <TouchableOpacity
             style={{alignItems: 'center'}}
             onPress={() => {this.props.navigation.navigate('Principal')}}
             >
              <Image
                source={require('./images/back.png')}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Regresar
              </Text>
            </TouchableOpacity>
          </View>
        <Text style={{fontSize: 25, marginTop: 30}}>{url}</Text>
      </View>
    );
  }
}
export default Entorno;
