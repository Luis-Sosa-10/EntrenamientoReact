import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import Globals from './Globals';
import {gql, useLazyQuery, useSubscription} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme } from '@react-navigation/native';
import {ThemeContext} from './Tema/ThemeContext'; // Importa el contexto del tema

//import  OBTENER_USUARIO  from './constantes';
const OBTENER_USUARIO = gql`
query Login($Correo: String!) {
  Login(Correo: $Correo) {
    id
    Nombre
    Correo
    Password
  }
}
`;
const ACTIVAR_SUBSCRIPCION = gql`
subscription personajeAdded($idUsuario: ID!) {
  personajeAdded(idUsuario: $idUsuario) {
    idUsuario
  }
}
`;
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
    const {theme, setTheme, saveTheme} = useContext(ThemeContext);
  const [obtenerUsuario, {carga, error, data}] = useLazyQuery(OBTENER_USUARIO, {
    onCompleted: data => {
      // Esta función se llamará cuando la consulta se complete con éxito
      console.log(data);
      if (data && data.Login) {
        if (password == data.Login.Password) {
          Globals.Usuario=data.Login;
          navigation.navigate('GraphQLSeleccion');
          saveData();
        } else {
          setErrorMessage('Contraseña incorrecta');
        }
      } else {
        setErrorMessage('Este usuario no existe');
      }
      setLoading(false);
    },
    onError: error => {
      setLoading(false);
      console.error('Error al obtener el usuario:', error);
      setErrorMessage('Ocurrió un error al iniciar sesión');
    },
  });

  const handleLogin = () => {
    setLoading(true);
    obtenerUsuario({
      variables: {
        Correo: username, // Pasa los parámetros necesarios
      },
    });
  };

  saveData = async () => {
    try {
      const { __typename, ...dataSinTypename } = Globals.Usuario;
      console.log("A: ",dataSinTypename);
      await AsyncStorage.setItem('Usuario', JSON.stringify(dataSinTypename));
    } catch (error) {
      console.error('Error guardando datos en caché:', error);
    }
  };

  Globals.VistaActual = 'Login';

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {/* Imagen del logo o ilustración */}
        <Image
          source={require('./images/login.png')} // Reemplaza con tu imagen
          style={styles.logo}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none" // No capitaliza la primera letra
            autoCorrect={false}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none" // No capitaliza la primera letra
            autoCorrect={false}
          />
        </View>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        {loading ? (
          <ActivityIndicator color={'red'}></ActivityIndicator>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            Globals.ocultarTap = false;
            navigation.navigate('Principal');
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEE9F',
  },
  logo: {
    width: 100, // Ancho de la imagen
    height: 100, // Alto de la imagen
    marginBottom: 20, // Espacio entre la imagen y los inputs
  },
  inputContainer: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'left',
    width: '100%', // Para que las etiquetas tengan el mismo ancho que el contenedor de inputs
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15, // Espacio entre el input y la siguiente etiqueta
    borderWidth: 1,
    borderColor: '#CCC',
    width: '100%',
    color: 'black'
  },
  button: {
    backgroundColor: '#048c32',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;
