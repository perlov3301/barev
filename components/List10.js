import React, { Component } from 'react';
import { StyleSheet,ScrollView,
  Text, View, FlatList } from 'react-native';
import Item from './Item';

export default class List10 extends Component {
  static navigationOptions = { title: 'List10'};
  constructor() {
    super();
    this.state = {
      text: ' שלום אולם ',
      arrayt: [
        ' שלום אולם ',
        ' מה נשמע ',
        ' להתראות '
      ]

    }
  }
  render() {
    const { text } = this.state;
    const { arrayt } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <Item mytext={arrayt[0]}/>
        <Item mytext={arrayt[1]}/>
        <Item mytext={arrayt[2]}/>
        <Item mytext={arrayt[0]}/>
        <Item mytext={arrayt[1]}/>
        <Item mytext={arrayt[2]}/>
        <Item mytext={arrayt[0]}/>
        <Item mytext={arrayt[1]}/>
        <Item mytext={arrayt[2]}/>
        <Item mytext={arrayt[0]}/>
        <Item mytext={arrayt[1]}/>
        <Item mytext={arrayt[2]}/>
        <Item mytext={text}/>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgba(100,125,100,0.7)'
  },
  title: {
    fontSize: 26,
    color: 'yellow'
  },

});
