/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {
  ApolloProvider,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";


// Enlace HTTP para consultas y mutaciones
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // Asegúrate de incluir '/graphql'
});

// Enlace WebSocket para suscripciones
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/graphql",
    connectionParams: {
      // Agrega autenticación si es necesario
      // headers: { Authorization: `Bearer ${token}` }
    },
    on: {
      //connected: () => console.log("✅ Conexión WebSocket establecida"),
     // closed: () => console.log("❌ WebSocket cerrado"),
     // error: (error) => console.log("🚨 Error en WebSocket:", error),
    },
  })
);

// Usa split para enrutar las operaciones entre HTTP y WebSocket
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);



// Crear el cliente Apollo
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

//Solo consultas sin subscripciones
/*const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
*/

// Envuelve tu aplicación en ApolloProvider
const AppMain = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppMain);