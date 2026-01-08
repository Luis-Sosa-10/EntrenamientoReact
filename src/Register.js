import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {gql, useQuery, useMutation} from '@apollo/client';
import Globals from './Globals';
import { CREAR_USUARIO } from './constantes';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [addUsuario] = useMutation(CREAR_USUARIO);

  const handleRegister = async () => {
    // Aquí puedes agregar la lógica de registro
    if (name && email && password) {
      try {
        const {data} = await addUsuario({
          variables: {
            nombre: name, // El estado o valor que usas para el nombre
            correo: email, // El estado o valor que usas para el correo
            password: password, // El estado o valor que usas para la contraseña
          },
        });
        if (data) {
          Alert.alert(
            'Cuenta creada corectamente',
            'Porfavor inicia sesion con tu nuevo usuario:  ' + name,
            [{text: 'OK', onPress: () => navigation.goBack()}],
          );
        }
      } catch (error) {
        console.log(error.message);
        if (error.message == 'El Correo ya esta en uso.') {
          Alert.alert(
            'Este correo ya esta registrado',
            'Porfavor Inicia Sesion o registrate con un correo diferente ',
            [{text: 'OK', onPress: () => {}}],
          );
        } else {
          Alert.alert(
            'Error al registrar usuario',
            'Hubo un error al intentar registrar el usuario, por favor intentalo de nuevo mas tarde',
            [{text: 'OK', onPress: () => {}}],
          );
        }
      }
    } else {
      setErrorMessage('Por favor, completa todos los campos');
    }
  };
  Globals.VistaActual = 'Register';

  return (
    <View style={styles.container}>
      {/* Imagen del logo o ilustración */}
      <Image
        source={require('./images/login.png')} // Reemplaza con tu imagen
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          autoCapitalize="none" // No capitaliza la primera letra
          lsoautoCorrect={false}
        />

        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            navigation.navigate('Login');
            if (Globals.editarPersonaje != null) {
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
    width: '100%',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    width: '100%',
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

export default Register;
