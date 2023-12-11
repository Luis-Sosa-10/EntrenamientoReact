import React, {Component} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {
  TextInput,
  View,
  Button,
  Text,
  ErrorMessage,
  TouchableOpacity,
  Image,
} from 'react-native';

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Peliculas: [],
      loaded: false,
    };
  }

  async getMoviesFromApiAsync() {
    fetch('https://reactnative.dev/movies.json')
      .then(res => res.json())
      .then(ress => this.setState({Peliculas: ress.movies, loaded: true}))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 10}}>
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
          <Text
            style={{
              fontSize: 30,
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Bienvenido a la Cartelera de Peliculas
          </Text>
          <TouchableOpacity
            onPress={() => this.getMoviesFromApiAsync()}
            style={{
              marginTop: 20,
              backgroundColor: '#00B403',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              alignItems: 'center',
              height: 50,
              width: 350,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Mostrar Peliculas
            </Text>
          </TouchableOpacity>
        </View>
        {this.Cabezera()}
        {this.Peliculas()}
        {this.state.loaded ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => this.setState({Peliculas: [], loaded: false})}
              style={{
                marginTop: 20,
                backgroundColor: '#00B4F2',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                alignItems: 'center',
                height: 50,
                width: 350,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Limpiar
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
  Cabezera() {
    return this.state.loaded ? (
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'left',
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 30,
            }}>
            ID
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'left',
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Titulo
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'left',
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
              marginRight: 10,
            }}>
            Año de estreno
          </Text>
        </View>
      </View>
    ) : null;
  }
  Peliculas() {
    return (
      <View>
        {this.state.Peliculas.map((item, index) => (
          <View key={index} style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 30,
                }}>
                {item.id}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                {item.title}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginRight: 10,
                  marginLeft: 40,
                }}>
                {item.releaseYear}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
export default Peliculas;
