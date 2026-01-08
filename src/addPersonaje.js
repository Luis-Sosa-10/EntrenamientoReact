import React, {Component, useState, } from 'react';
import {gql, useQuery, useMutation} from '@apollo/client';
import { CREAR_PERSONAJE } from './constantes';
import { EDITAR_PERSONAJE } from './constantes';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Globals from './Globals';
const _window = Dimensions.get('window');
const ClasificacionValores = [{value: 'Heroe', color: 'yellow'}, {value: 'Villano', color: 'black'}];
const FranquiciaValores = [{value: 'Marvel', color: 'red'}, {value: 'DC', color: 'blue'}];
function Formulario() {
  const navigation = useNavigation();
  const id = Globals.editarPersonaje != null ? Globals.editarPersonaje.id : 0 ;
  const [nombre, setNombre] = useState(Globals.editarPersonaje != null ? Globals.editarPersonaje.Nombre : '');
  const [alias, setAlias] = useState(Globals.editarPersonaje != null ? Globals.editarPersonaje.Alias : '');
  const [clasificacion, setClasificacion] = useState(Globals.editarPersonaje != null ? Globals.editarPersonaje.Clasificacion : '');
  const [franquicia, setFranquicia] = useState(Globals.editarPersonaje != null ? Globals.editarPersonaje.Franquicia : '')
  const [habilidad, setHabilidad] = useState(Globals.editarPersonaje != null ? Globals.editarPersonaje.Habilidad : '');
  const [selector1, setSelector1] = useState(false);
  const [selector2, setSelector2] = useState(false);
  const estados = [
    setNombre,
    setAlias,
    setClasificacion,
    setFranquicia,
    setHabilidad,
  ];
  const [agregarPersonaje] = useMutation(CREAR_PERSONAJE);
  const [editarPersonaje] = useMutation(EDITAR_PERSONAJE);

  // Función para manejar el cambio en los campos de texto
  handleChange = (name, value) => {
    const cambiar = estados[name];
    cambiar(value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
if(Globals.editarPersonaje != null){
  editarPersonaje({
    variables: {
      id,
      nombre,
      alias,
      clasificacion,
      franquicia,
      habilidad,
    },
  })
    .then(response => {
      Alert.alert(
        'Se ha editado correctamente',
        'Se edito el personaje ' + nombre,
        [{text: 'OK', onPress: () => navigation.goBack()}],
      );
    })
    .catch(error => {
      console.error('Error al editar personaje:', error);
    });
}else{
  const id = Globals.Usuario.id;
  agregarPersonaje({
    variables: {
      nombre,
      alias,
      clasificacion,
      franquicia,
      habilidad,
      idUsuario: id,
    },
  })
    .then(response => {
      Alert.alert(
        'Se ha añadido correctamente',
        'Se añadio correctamente el personaje ' + nombre,
        [{text: 'OK', onPress: () => navigation.goBack()}],
      );
    })
    .catch(error => {
      console.error('Error al agregar personaje:', error);
    });
}
  };

  Clean = () => {
    estados.forEach(funcion => {
      var limpiar = funcion;
      limpiar('');
    });
  };

  renderClasificacion = item => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => [setSelector1(false), setClasificacion(item.value)]}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 0,
            marginHorizontal: 0,
            marginLeft: 10,
            width: '100%',
            paddingRight: _window.width,
          }}>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 10,
               backgroundColor: item.color,
              marginRight: 5,
              borderColor: 'black',
              borderWidth: 1
            }}
          />
          <Text
            allowFontScaling={false}
            style={{
              marginVertical: 10,
              fontSize: 14,
              fontWeight: '700',
            }}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderFranquicia = item => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => [setSelector2(false), setFranquicia(item.value)]}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 0,
            marginHorizontal: 0,
            marginLeft: 10,
            width: '100%',
            paddingRight: _window.width,
          }}>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 10,
               backgroundColor: item.color,
              marginRight: 5,
              borderColor: 'black',
              borderWidth: 1
            }}
          />
          <Text
            allowFontScaling={false}
            style={{
              marginVertical: 10,
              fontSize: 14,
              fontWeight: '700',
            }}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate(Globals.editarPersonaje != null ? 'Personajes' : 'GraphQLSeleccion');
            if(Globals.editarPersonaje != null){
              Globals.editarPersonaje = null;
            }
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={text => this.handleChange(0, text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alias:</Text>
        <TextInput
          style={styles.input}
          value={alias}
          onChangeText={text => this.handleChange(1, text)}
        />
      </View>

      <View style={[styles.inputContainer, { position: 'relative', zIndex: 15 }]}>
        <Text style={styles.label}>Clasificación:</Text>
        <TouchableOpacity
          onPress={() => setSelector1(true)}
          style={styles.input}
          onChangeText={text => this.handleChange(2, text)}>
          <Text style={styles.label}>{clasificacion}</Text>
        </TouchableOpacity>
        {selector1 ? (
          <View
            style={{
              position: 'absolute', // Hace que el selector flote sobre los demás componentes
              top: 50, // Ajusta esta distancia según sea necesario para posicionarlo
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 8,
              borderRadius: 4,
              zIndex: 1,
              backgroundColor: '#FFFFFF',
              overflow: 'visible', 
            }}>
            <ScrollView horizontal={true} scrollEnabled={false}>
              <FlatList
                data={ClasificacionValores}
                renderItem={({item, index}) => renderClasificacion(item, index)}
                keyExtractor={item => item.id}
                nestedScrollEnabled
              />
            </ScrollView>
          </View>
        ) : null}
      </View>

      <View style={[styles.inputContainer, { position: 'relative', zIndex: 10 }]}>
        <Text style={styles.label}>Franquicia:</Text>
        <TouchableOpacity
          onPress={() => setSelector2(true)}
          style={styles.input}
         >
          <Text style={styles.label}>{franquicia}</Text>
        </TouchableOpacity>
        {selector2 ? (
          <View
            style={{
              position: 'absolute', // Hace que el selector flote sobre los demás componentes
              top: 50, // Ajusta esta distancia según sea necesario para posicionarlo
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              shadowRadius: 3,
              elevation: 8,
              borderRadius: 4,
              zIndex: 1,
              backgroundColor: '#FFFFFF',
              overflow: 'visible', 
            }}>
            <ScrollView horizontal={true} scrollEnabled={false}>
              <FlatList
                data={FranquiciaValores}
                renderItem={({item, index}) => renderFranquicia(item, index)}
                keyExtractor={item => item.id}
                nestedScrollEnabled
              />
            </ScrollView>
          </View>
        ) : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Habilidad:</Text>
        <TextInput
          style={styles.input}
          value={habilidad}
          onChangeText={text => this.handleChange(4, text)}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center', // Centra horizontalmente
          backgroundColor: '#FFEE9F',
        }}>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>
           {Globals.editarPersonaje != null ? 'Editar Personaje': 'Añadir Personaje' }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Clean()}>
          <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>
            Limpiar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFEE9F',
    paddingTop: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10, // Espacio entre los botones
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#048c32',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  selector: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Formulario;
