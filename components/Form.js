import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet, TextInput
} from 'react-native';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {text: '', name: ''};
    this.submit = this.submit.bind(this);
  }
  submit() {
    this.props.onNewText(this.state.name,this.state.text);
    this.setState({text: ''});
    fetch('http://sentences-perlov3301.c9users.io/add11', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
          name: this.state.name,
          sentence: this.state.text,
        }),
    });
  }
  render() {
    return (
      <View>
        <TextInput style={styles.txtInput}
         placeholder="כתוב כאן את השם או כנוי שלך"
         onChangeText={(a1) => this.setState({name: a1})}
         value={this.state.name}
         />
        <View style={styles.container}>
          <Text style={styles.button}
          onPress={this.submit}> הוסף </Text>
          <TextInput style={styles.txtInput}
           placeholder="כתוב את הדעה שלך..."
           onChangeText={(a1) => this.setState({text: a1})}
           value={this.state.text}
           />

        </View>
      </View>

    );
  }
}
// ColorForm.propTypes = {
//   onNewColor: React.PropTypes.func.isRequired
// };
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    height: 70,
    paddingTop: 20
  },
  txtInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'snow'
  },
  button: {
   backgroundColor: 'darkblue',
   margin: 1,
   padding: 10,
   alignItems: 'center',
   color: 'white',
   borderRadius: 5,
   justifyContent: 'center',
   fontSize: 22

  }


});
