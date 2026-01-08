import React from 'react';
import {
  Image,
} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute ,useNavigationState} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Formulario from './Formulario';
import Peliculas from './Peliculas';
import Perfil from './Perfil';
import Principal from './Principal';
import Entorno from './Entorno';
import Calculadora from './Calculadora/Calculadora';
import Hook from './Hook/Hook';
import GraphQL from './GraphQL';
import Personajes from './Personajes';
import GraphQLSeleccion from './GraphQLSeleccion';
import addPersonaje from './addPersonaje';
import Login from './Login';
import Register from './Register';
import Splash from './Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Globals from './Globals';
import Tema from './Tema/Tema';
import StateTema from './Tema/StateTema';

const Tab = createBottomTabNavigator();
const PerfilViews = createNativeStackNavigator();
const MainViews = createNativeStackNavigator();
const EntrenamientoViews = createNativeStackNavigator();


function MainStack() {
  return (
    <MainViews.Navigator initialRouteName="Perfil" screenOptions={{ gestureEnabled: false ,animation: (Platform.OS === 'android'?'fade':undefined), presentation: (Platform.OS === 'android'?'modal':'card')}}>
      <MainViews.Screen name="Perfil" component={AppTabs} options={{ headerShown: false }} />
      <MainViews.Screen name="Principal" component={EntrenamientoStack} options={{ headerShown: false }} />
    </MainViews.Navigator>
  )
}
function PerfilStack() {
    return (
      <PerfilViews.Navigator initialRouteName="Perfil" screenOptions={{ gestureEnabled: false ,animation: (Platform.OS === 'android'?'fade':undefined), presentation: (Platform.OS === 'android'?'modal':'card')}}>
        <PerfilViews.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} /> 
      </PerfilViews.Navigator>
    )
  }
  function EntrenamientoStack() {
    return (
      <EntrenamientoViews.Navigator initialRouteName="Principal" screenOptions={{ gestureEnabled: false ,animation: (Platform.OS === 'android'?'fade':undefined), presentation: (Platform.OS === 'android'?'modal':'card')}}>
      <EntrenamientoViews.Screen name="Peliculas" component={Peliculas} options={{ headerShown: false }} />
      <EntrenamientoViews.Screen name="Formulario" component={Formulario} options={{ headerShown: false }} />  
      <EntrenamientoViews.Screen name="Principal" component={Principal} options={{ headerShown: false }} /> 
      <EntrenamientoViews.Screen name="Entorno" component={Entorno} options={{ headerShown: false }} />    
      <EntrenamientoViews.Screen name="Calculadora" component={Calculadora} options={{ headerShown: false }} />   
      <EntrenamientoViews.Screen name="Hook" component={Hook} options={{ headerShown: false }} />     
      <EntrenamientoViews.Screen name="GraphQL" component={GraphQL} options={{ headerShown: false }} />    
      <EntrenamientoViews.Screen name="Personajes" component={Personajes} options={{ headerShown: false }} />     
      <EntrenamientoViews.Screen name="GraphQLSeleccion" component={GraphQLSeleccion} options={{ headerShown: false }} />     
      <EntrenamientoViews.Screen name="addPersonaje" component={addPersonaje} options={{ headerShown: false }} />     
      <EntrenamientoViews.Screen name="Login" component={Login} options={{ headerShown: false }} />    
      <EntrenamientoViews.Screen name="Register" component={Register} options={{ headerShown: false }} />    
      <EntrenamientoViews.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> 
      <EntrenamientoViews.Screen name="Tema" component={Tema} options={{ headerShown: false }} />       
    </EntrenamientoViews.Navigator>
    )
  }
  function AppTabs() {
    return (
      <Tab.Navigator
        initialRouteName = {"PerfilTab"}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 80,
          },
          tabBarActiveBackgroundColor: '#CDFEF9',
        })}
       >
        <Tab.Screen
          name="PerfilTab"
          component={PerfilStack}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarLabelStyle: { fontSize: 20, color: 'black', fontWeight: 'bold' },
            tabBarItemStyle: {
              borderWidth: 1,
            },
            tabBarStyle: {
              height: 70,
              display: MostrarTap(route), // Usa la función que depende de la ruta
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./images/user-circle.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          })}
          listeners={({ route }) => ({
            tabPress: e => {
              tabBarViewsName(route)
            }
          })}
        />
        <Tab.Screen name="EntrenamientoTab"
          component={EntrenamientoStack}
          options={({ route }) => ({
            headerShown: false,
            tabBarLabel: "Entrenamientos",
            tabBarLabelStyle: { fontSize: 20, color: 'black', fontWeight: 'bold' },
            tabBarItemStyle: {
              borderWidth: 1,
            },
            tabBarStyle: {
              height: 70,
              display: MostrarTap(route), // Usa la función que depende de la ruta
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./images/school.png')}
                style={{
                  width: 40,
                  height: 30,
                }}
              />
            ),
          })}
          listeners={({ route }) => ({
            tabPress: e => {
              tabBarViewsName(route)
            }
          })}
        />
      </Tab.Navigator>
    );
  }
  function MostrarTap(route){
    if(Globals.ocultarTap){
return 'none'
    }else{
      'flex'
    }
  }
  function tabBarViewsName(route) {
    var navigateStack = route.name.replace('Tab', '');
    console.log("ruta: ",navigateStack);
  }
  export default function Navigator() {
    return (
      <NavigationContainer>
          <MainStack/>
      </NavigationContainer>
    )
  }