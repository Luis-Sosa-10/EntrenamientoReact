const { Text } = require("react-native");

module.exports = {
    Nombre: 'Luis Alberto Sosa Gonzalez',
    Correo: 'lsosa@campusmovil.com',
    Telefono: '7831466250',
    TemaClaro: '#048c32',
    TemaOscuro: '#025219',
    TextoClaro: 'black',
    TextoOscuro: '#E0E0E0',
    TemaTarjetaOscuro: '#B87333',
    TemaTarjetaClaro: '#FFC66E',
    Pasatiempos: [
        {
            title: 'Pasatiempos',
            data: ['Escuchar musica',
                'Jugar Basquetball',
                'Ver peliculas',
                'Ver videos',
            ],
        },
        {
            title: 'Libros favoritos',
            data: ['Bajo la misma estrella',
                'Buscando Alaska',
                'Lazarillo',
                'Rayuela',
            ],
        },
    ],
    Ejercicios: [
        {
            titulo: 'Personajes',
            Entrenamiento: 'Consumir servicios GrapQL',
            descripcion: 'Se obtendra informacion sobre paises de una API que funciona con GraphQL',
            Navegacion: 'Splash'
        },
        {
            titulo: 'Hooks',
            Entrenamiento: 'Hooks RN',
            descripcion: 'Ejercicio de Hooks en React Native',
            Navegacion: 'Hook'
        },
        {
            titulo: 'Calculadora',
            Entrenamiento: 'Componentes hijo RN',
            descripcion: 'Crear un componente donde se le establezcan propiedades las cuales se puedan utilizar para su funcionamiento o para regresar datos al momento de finalizar alguna acción',
            Navegacion: 'Calculadora'
        },
        {
            titulo: 'Peliculas',
            Entrenamiento: 'Consumir Rest Avanzado',
            descripcion: 'Se realizo la conexion hacia un API que retorna una lista de peliculas',
            Navegacion: 'Peliculas'
        },
        {
            titulo: 'Entorno',
            Entrenamiento: 'Trabajar Entornos React JS',
            descripcion: 'La aplicacion mostrara un texto dependiendo del entorno en el que inicie',
            Navegacion: 'Entorno'
        },
        {
            titulo: 'Formulario',
            Entrenamiento: 'Validacion de Formas (Formik)',
            descripcion: 'Realizacion de un formulario utilizando Formik',
            Navegacion: 'Formulario'
        },
        {
            titulo: 'Tema',
            Entrenamiento: 'AsyncStorage y Context',
            descripcion: 'Realiza un cambio de tema en la aplicacion',
            Navegacion: 'Tema'
        },
    ],
    ocultarTap: false,
    editarPersonaje: null,
    Usuario: null,
};