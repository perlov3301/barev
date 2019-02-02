/**
  sudo npm install -g create-react-native-app
  create-react-native-app Myapp
  cd Myapp->npm start
  or ->npm run ios
*/
import React from 'react';
import { StyleSheet,
  Text, View,
  Image } from 'react-native';

export default class Home10 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Evgeny Barakhman</Text>
      <Image
        source={require('../assets/img/baev.jpg')} />
        <Text style={styles.text}>
        Директор академии Шинкиокушин-каратэ в
        Ришон ле Ционе

        </Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(100,125,100,.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',


  },
  text: {
    fontSize: 30,
    color: 'yellow'
  }
});
