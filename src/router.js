import React from 'react';
import {
  Image,
} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Formulario from './Formulario';
import Peliculas from './Peliculas';
import Perfil from './Perfil';
import Principal from './Principal';
import Entorno from './Entorno';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    </EntrenamientoViews.Navigator>
    )
  }
  function AppTabs() {
    return (
      <Tab.Navigator
        initialRouteName = {"PerfilTab"}
        screenOptions={{
          tabBarStyle: {
            height: 80,
          },
          tabBarActiveBackgroundColor: '#CDFEF9',
        }}
       >
        <Tab.Screen
          name="PerfilTab"
          component={PerfilStack}
          options={{
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarLabelStyle: {fontSize: 20, color: 'black', fontWeight: 'bold',},
            tabBarItemStyle: {
              borderWidth: 1,
            },
            tabBarIcon: ({  focused }) => (
              <Image
                source={require('./images/user-circle.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
          
        />
        <Tab.Screen name="EntrenamientoTab"
          component={EntrenamientoStack}
          options={{
            headerShown: false,
            tabBarLabel: "Entrenamientos",
            tabBarLabelStyle: {fontSize: 20, color: 'black', fontWeight: 'bold'},
            tabBarItemStyle: {
              borderWidth: 1,
            },
            tabBarIcon: ({  focused }) => (
              <Image
                source={require('./images/school.png')}
                style={{
                  width: 40,
                  height: 30,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  export default function Navigator() {
    return (
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    )
  }