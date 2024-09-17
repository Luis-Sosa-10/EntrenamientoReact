/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

  const AppMain = () =>{
    return(<ApolloProvider client={ client}>
        <App/>
    </ApolloProvider>);
  }
AppRegistry.registerComponent(appName, () => AppMain);
