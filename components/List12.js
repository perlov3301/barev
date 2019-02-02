import React, { Component } from 'react';
import { StyleSheet,
  AsyncStorage,
  Text, View, FlatList } from 'react-native';
import Item from './Item';
import Form   from './Form';

export default class List10 extends Component {
  static navigationOptions = { title: 'component List11' };
  constructor() {
    super();
    this.state = {
      text: 'אמירות ודעות',
      fetching: false,
      arrayt: [
        {name: "", sentence:''}

      ]

    }
    this.renderme = this.renderme.bind(this);
    this.renderme1 = this.renderme1.bind(this);
    this.renderme2 = this.renderme2.bind(this);
    this.newText = this.newText.bind(this);
  }
  componentDidMount()
    {
      this.setState({ fetching: true });
     fetch('https://sentences-perlov3301.c9users.io')
       .then(response => {
           // console.log('json:', response.json());
           return response.json();
         })
       .then(myjson => {
           console.log('obj:', myjson);
           return myjson.people;
         })
       .then(myarray => this.setState({arrayt: myarray}))
       .catch(err => { console.log('error last a1:', err.toString()); })
       ;
      AsyncStorage.getItem(
        '@MyForumStore:Texts',
        (err, data) => {
          if (err) {
            console.error('error loading texts', err);
          } else {
            const a1= JSON.parse(data);
            // this.setState({ arrayt: a1 });
          }
        }
      );
    }
indicator1 = () => this.state.loading ?
    (<ActivityIndicator size="large" color="#0000ff" animating/>)
    : null
     ;
indicator11 = () =>
     (<ActivityIndicator size="large" color="#0000ff" animating/>)
      ;
saveText(text) {
  AsyncStorage.setItem();
}
  renderme = (text1) => (
            <View style={styles.plus}>
                < Item  mytext={text1}  />
            </View>
       );
   renderme2 = (a1, a2) => (
             <View style={styles.plus}>
                 < Item  myname={a1} mysentence={a2}  />
             </View>
        );
  renderme1 = (text1) => ( <Text >{text1}</Text> );
  newText(aname, atext) {
      console.log('newText=' + atext);
      const a1 = [
        ...this.state.arrayt,
        {name: aname, sentence: atext}
      ];
      this.setState({
        arrayt: a1
      });
      // this.saveColors(a1);
    }
  render() {
    const { text } = this.state;
    const { arrayt } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        < FlatList
            data={this.state.arrayt}
            keyExtractor={(obj, i) => i.toString()}
            renderItem={({item}) => this.renderme2(item.name, item.sentence)}
            ListFooterComponent={this.indicator1}
            ListHeaderComponent={
                <Form onNewText={this.newText} />}

        />
      </View>
    );
  }
}
// const List10.defaultProps = {onSelectedText: f=>f};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'rgba(100,125,100,0.7)'
  },
  title: {
    textDecorationLine: "underline",
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 26,
    color: 'yellow'
  },

});
/**
ListHeaderComponent={
  <ItemForm onNewText={this.newText}
    navigation={this.props.navigation}/>
}
{text:'שלום אולם'},
{text: 'מה נשמע'},
{text: 'להתראות'}
*/
