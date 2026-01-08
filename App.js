/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/router.js';
import { ThemeContext } from './src/Tema/ThemeContext.js';
import Globals from './src/Globals.js';


export default class App extends React.Component {
  render() {
    return (
        <ThemeContext.Provider value={Globals.theme.light}>
          <Navigator/>
        </ThemeContext.Provider>
    );
  }
}
