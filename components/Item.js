import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const Item = ({myname, mysentence}) => (
  <TouchableHighlight style={styles.button}
  onPress={() => {}}
   underlayColor="orange">
    <View style={styles.row} dir="rtl" >
      <Text style={styles.text}>"{mysentence}"</Text>
      <Text>{myname}: </Text>

    </View>

  </TouchableHighlight>
);
const styles=StyleSheet.create({
  button: {
    margin: 3,
    padding: 3,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'stretch',


  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  text: {
    fontSize: 22,
    color: 'yellow',
    margin: 3}
});
export default Item;
