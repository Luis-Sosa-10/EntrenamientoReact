import React, {Component, useEffect, useState} from 'react';
import Globals from './Globals';
import {gql, useQuery} from '@apollo/client';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function GraphQL() {
  const navigation = useNavigation();
  const [state, setState] = useState({
    Data: [],
    loaded: false,
    type: 'Continente',
  });
  const [pais, setPais] = useState('');
  const [gdl, setGDL] = useState(0);
  const QUERY = [
    gql`
      query {
        continents {
          name
          code
        }
      }
    `,
    gql`
        query {
  continent(code: "${pais}") {
    name
    code
    countries {
      name
      capital
      currency
      languages {
        name
      }
    }
  }
}
      `,
      gql`
      query{
        Filtrar(Clasificacion: "Heroe" ) {
          Alias
        }
      }
      `,
  ];
  const {data} = useQuery(QUERY[gdl]);
  useEffect(() => {
    if (data) {
      setState(prevState => ({
        ...prevState,
        Data: data,
        loaded: true,
      }));
    }
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#048c32',
          paddingTop: 40,
          paddingVertical: 30,
        }}>
        <View>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              state.type == 'Continente'
                ? navigation.navigate('Principal')
                : setState({type: 'Continente'}),
                setPais(''),
                setGDL(0);
            }}>
            <Image
              source={require('./images/back.png')}
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
                color: 'black',
              }}>
              Consumir servicios GraphQL
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 20,
                color: 'black',
              }}>
             Continentes y Paises
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        {state.loaded ? (
          Seleccionar(state.type)
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    </View>
  );
  function Seleccionar(type) {
    switch (type) {
      case 'Continente':
        return Continentes();
        break;
      case 'Pais':
        return Paises();
        break;
    }
  }
  function Continentes() {
    return state.Data.continents.map(
      item => (
        console.log(item.code),
        (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 16,
            }}>
            <TouchableOpacity
              onPress={() => {
               /* setState({type: 'Pais'}),
                  setPais(item.code.toString()),
                  setGDL(1);*/
                  setGDL(1),
                  console.log(state.Data);
              }}
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
                  color: 'black',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 8,
                  color: 'black',
                }}>
                Codigo: {item.code}
              </Text>
            </TouchableOpacity>
          </View>
        )
      ),
    );
  }
  function Paises() {
    return state.Data.continent.countries.map(item => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 16,
        }}>
        <TouchableOpacity
          onPress={() => {
            setState({type: 'Pais', gdl});
          }}
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
              color: 'black',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
              color: 'black',
            }}>
            Capital: {item.capital}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginBottom: 8,
            }}>
            Tipo de Moneta {item.currency}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 8,
            }}>
           Lenguajes: 
          </Text>
          {item.languages.map(language => (
            <View key={language.name}>
              <Text
                style={{
                  fontSize: 14,
                  marginBottom: 8,
                  color: 'black',
                }}>
                {language.name}
              </Text>
            </View>
          ))}
        </TouchableOpacity>
      </View>
    ));
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
export default GraphQL;
