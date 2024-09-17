import React, {Component, useState, useEffect} from 'react';
import Globals from '../Globals';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Hook() {
  const navigation = useNavigation();
  useEffect(() => {
    // Este código se ejecuta cuando el componente se monta
  }, []); 
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#048c32',
          paddingTop: 10,
          paddingVertical: 50,
        }}>
        <View>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>( Globals.ocultarTap = false, navigation.navigate('Principal'))}>
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
              Hooks en React Native
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        {HookEstado()}
        {HookEfecto()}
      </ScrollView>
    </View>
  );
}

function HookEstado() {
  const [Contador, setContador] = useState(0);
  return (
    <View
      style={{
        backgroundColor: '#FFEE9F',
        paddingTop: 10,
        paddingVertical: 20,
        borderWidth: 3,
      }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        Hook de Estado
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        useState
      </Text>
      <TouchableOpacity
        onPress={() => setContador(Contador + 1)}
        style={{
          backgroundColor: '#69ADFF',
          width: 280,
          height: 40,
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            textAlign: 'center',
          }}>
          Presiona para aumentar el contador
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        Contador: {Contador}
      </Text>
      <TouchableOpacity
        onPress={() => setContador(0)}
        style={{
          marginTop: 10,
          backgroundColor: '#69ADFF',
          width: 160,
          height: 40,
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            textAlign: 'center',
          }}>
          Reiniciar Contador
        </Text>
      </TouchableOpacity>
    </View>
  );
}
function HookEfecto() {
  const [Montado, setMontado] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#FFEE9F',
        paddingTop: 10,
        paddingVertical: 20,
        borderWidth: 3,
      }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        Hook de Efecto
      </Text>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        useEffect
      </Text>
      <TouchableOpacity
        onPress={() => setMontado(Montado ? false : true)}
        style={{
          backgroundColor: '#69ADFF',
          width: 280,
          height: 40,
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            textAlign: 'center',
          }}>
        {Montado ? "Desmontar" : "Montar Componente"}
        </Text>
      </TouchableOpacity>
      {Montado ?  <ComponenteEfecto /> : null}
    </View>
  );
}
function ComponenteEfecto() {
  const [Texto, setTexto] = useState("Nuevo componente Montado");
  useEffect(() => {
    setTimeout(() => {
     setTexto("useEffect Ejecutado");
    }, 2000); 
  });
  return (
    <View
      style={{
        backgroundColor: '#FE615A',
        width: 300,
        height: 60,
        alignSelf: 'center',
        marginTop: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 15,
          marginTop: 10,
          color: 'black',
          textAlign: 'center',
        }}>
{Texto}
      </Text>
    </View>
  );
}
export default Hook;
