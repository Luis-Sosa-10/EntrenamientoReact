import React, { useContext, useState, useEffect, Children } from 'react';                     
import { View, Text, Switch, StyleSheet } from 'react-native';                                  
import AsyncStorage from '@react-native-async-storage/async-storage'                
import { ThemeContext } from './ThemeContext'; // Importa el contexto del tema



const StateTema = ({children}) => {

    const [theme, setTheme] = useState('light'); // Estado para el tema almacenado

    //Obtener un objeto de asyncStorage
    useEffect(() => {
        const getTheme = async () => {
            console.log("Obteniendo tema...");
            try {
                const storedTheme = await AsyncStorage.getItem('theme');
                if (storedTheme) {
                    setTheme(storedTheme); // Establece el tema desde AsyncStorage
                }
            } catch (error) {
                console.error("Error al obtener el tema:", error);
            }
        };
        getTheme();//
    }, []);
    
const saveTheme = async (newTheme) => {
    try {
        await AsyncStorage.setItem('theme', newTheme); // Guarda el tema en AsyncStorage
        setTheme(newTheme); // Actualiza el estado del tema
    } catch (error) {
        console.error("Error al guardar el tema:", error);
    }   
}

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}               
export default StateTema; // Exporta el componente Tema                  