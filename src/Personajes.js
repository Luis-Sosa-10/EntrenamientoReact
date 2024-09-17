import React, {Component, useEffect, useState} from 'react';
import Globals from './Globals';
import {gql, useQuery, useMutation} from '@apollo/client';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
const ELIMINARPERSONAJE = gql`
  mutation eliminar(
    $id: Int!
  ) {
    eliminarPersonaje(
      id: $id
    )
  }
`;
function Personajes() {
  const navigation = useNavigation();
  const [state, setState] = useState({
    Personajes: [],
    loaded: false,
    type: 'Continente',
  });
  const [clasificacion, setClasificacion] = useState('');
  const [franquicia, setFranquicia] = useState('');
  const [gdl, setGDL] = useState(0);
  const QUERY = [
    gql`
      query {
        data: TodosPersonajes {
          id
          Nombre
          Alias
          Clasificacion
          Franquicia
          Habilidad
        }
      }
    `,
    gql`
      query {
       data: Filtrar(Clasificacion: "${clasificacion}" , Franquicia: "${franquicia}") {
          id
          Nombre
          Alias
          Clasificacion
          Franquicia
          Habilidad
        }
      }
    `,
  ];
  const {data, refetch} = useQuery(QUERY[gdl]);
  const [eliminar] = useMutation(ELIMINARPERSONAJE);

  useEffect(() => {
    if (data) {
      setState(prevState => ({
        ...prevState,
        Personajes: data,
        loaded: true,
      }));
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      refetch(); // Forzar la recarga de los datos del servidor
    }, []),
  );

  function MostrarPersonajes() {
    return state.Personajes.data.map(item => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 16,
        }}>
        <View
          style={{
            backgroundColor: '#FFEE9F',
            borderRadius: 8,
            padding: 16,
            elevation: 2, // Sombra en Android
            shadowRadius: 4,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 10, // Ajusta la posición
              right: 0, // Ajusta la posición
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 10, // Asegúrate de que los botones estén por encima del contenido
            }}>
            <TouchableOpacity
              onPress={() => editarPersonaje(item)}
              style={{
                marginRight: 8,
                backgroundColor: '#4bb8ff', // Color de fondo del botón de editar
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
              source={require('./images/pencilEdit.png')}
              style={{
                width: 22,
                height: 22,
              }}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => eliminarPersonaje(item.id)}
              style={{
                marginRight: 8,
                backgroundColor: '#4bb8ff', // Color de fondo del botón de editar
                padding: 5,
                borderRadius: 5,
              }}>
              <Image
              source={require('./images/Trash.png')}
              style={{
                width: 22,
                height: 22,
              }}
            />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 8,
              color: 'black',
            }}>
            {item.Nombre}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
              color: 'black',
            }}>
            Alias: {item.Alias}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
              color: 'black',
            }}>
            Clasificacion: {item.Clasificacion}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
              color: 'black',
            }}>
            Franquicia: {item.Franquicia}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
              color: 'black',
            }}>
            Habilidad: {item.Habilidad}
          </Text>
        </View>
      </View>
    ));
  }

  const eliminarPersonaje = (id) => {
    console.log("id: ",id);
    eliminar({
      variables: {
        id,
      },
    })
      .then(response => {
        refetch();
      })
      .catch(error => {
        console.error('Error al agregar eliminar:', error);
      });
  };

  function editarPersonaje(item){
    Globals.editarPersonaje = item;
    navigation.navigate('addPersonaje');
  }

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#048c32',
          paddingTop: 20,
          paddingVertical: 10,
        }}>
        <View>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('GraphQLSeleccion');
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
                marginTop: 5,
                color: 'black',
              }}>
              Consumir servicios GraphQL
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 10,
                color: 'black',
              }}>
              Heroes y villanos
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            setClasificacion('Heroe'), setGDL(1), refetch();
          }}>
          <Text
            style={{
              width: 60,
              height: 40,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor: clasificacion == 'Heroe' ? '#FFC300' : '#048c32',
              textAlign: 'center',
              paddingTop: 8,
              marginLeft: 10,
              marginRight: 5,
            }}>
            Heroes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setClasificacion('Villano'), setGDL(1),  refetch();
          }}>
          <Text
            style={{
              width: 60,
              height: 40,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor:
                clasificacion == 'Villano' ? '#FFC300' : '#048c32',
              textAlign: 'center',
              paddingTop: 8,
              marginLeft: 10,
              marginRight: 5,
            }}>
            Villanos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFranquicia('Marvel'), setGDL(1), refetch();
          }}>
          <Text
            style={{
              width: 60,
              height: 40,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor: franquicia == 'Marvel' ? '#FFC300' : '#048c32',
              textAlign: 'center',
              paddingTop: 8,
              marginLeft: 10,
              marginRight: 5,
            }}>
            Marvel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFranquicia('DC'), setGDL(1), refetch();
          }}>
          <Text
            style={{
              width: 60,
              height: 40,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor: franquicia == 'DC' ? '#FFC300' : '#048c32',
              textAlign: 'center',
              paddingTop: 8,
              marginLeft: 10,
              marginRight: 5,
            }}>
            DC
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFranquicia(''), setClasificacion(''), setGDL(0), refetch();
          }}>
          <Text
            style={{
              width: 60,
              height: 40,
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
              color: 'black',
              borderColor: 'black',
              borderWidth: 2,
              backgroundColor: '#048c32',
              textAlign: 'center',
              paddingTop: 8,
              marginLeft: 10,
              marginRight: 10,
            }}>
            Todos
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1, marginTop: 15}}>
        {state.loaded ? (
          MostrarPersonajes(/*state.type*/)
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    </View>
  );
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
export default Personajes;
