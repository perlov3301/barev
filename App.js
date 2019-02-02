/**
sudo npm install -g create-react-native-app
  create-react-native-app Myapp
  cd Myapp->npm start
  or yarn start for open myapp in expo
  or ->npm run ios
  or yarn  run ios
     yarn run android
  yarn test
  yarn run eject
  Removes this tool and copies build dependencies,
  configuration files
    and scripts into the app directory. If you do this,
    you can’t go back!
  1.Install expo cli globally npm install -g exp
  2.Run exp build:android or
     exp build:ios inside the project
  3.Choose some expo options
  4.https://exp.host/@aperlov/barev1

  package.json & app.json:
react-native 	react    expo   	sdkVersion in app.json
0.55.x 	     16.3.1 	 27.x.x 	     "27.0.0"
  npm install --save react-navigation
*/
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Home10 from './components/Home11';
import Web1 from './components/Web1';
import WebList1 from './components/WebList1';
import List10 from "./components/List12";

const RootStack = createStackNavigator({
  Home: { screen: Home10 },
  Web: { screen: Web1 },
  WebList: { screen: WebList1 },
  List: { screen: List10 }
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
