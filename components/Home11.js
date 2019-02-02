/**
  sudo npm install -g create-react-native-app
  create-react-native-app Myapp
  cd Myapp->npm start
  or ->npm run ios
*/
import React from 'react';
import { Apploading, Asset, Font } from 'expo';
import { StyleSheet, Button,
  Text, View, StatusBar,
  Dimensions,Image,
  Platform,
TouchableHighlight} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
  // import fb from '../assets/img/baev.jpg';
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}
export default class Home10 extends React.Component {
  static navigationOptions = { title: 'Home11'};
  state = {
    isReady: false,
  };
  async _loadAssetsAsync() {
    const imageAssets = cacheImages(
      ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        require('../assets/img/baev.jpg'),]
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false}/>
          <Text style={[styles.title,{fontSize:26}]}>
           יווגני ברחמן
          </Text>
          <Text style={[styles.title,{fontSize:22,
            backgroundColor:'rgba(10,150,10,.1)'}]}>
            ראשון לציון היא עיר של ילדנו
          </Text>
          <Image style={styles.pic}
            source={require('../assets/img/baev.jpg')} />
          <Text style={styles.text}>
            מנהל של בית הספר לקרטה
          </Text>
          <View style={styles.row1}>
            <View style={styles.btview}>
              <Button style={styles.button}
                title="פורום"
                onPress={() =>  navigate('List') }/>
            </View>
            <TouchableHighlight style={styles.touch}
              onPress={() =>  navigate('WebList')}
              underlayColor="orange"
            >
              <Text style={{fontSize:25}}>פורום</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.touch}
              onPress={() =>  navigate('Web')}
              underlayColor="orange"
            >
            <View style={styles.tview}>
              <Text style={styles.tfb}>facebook</Text>
            </View>
            </TouchableHighlight>



          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(100,125,100,.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: Platform.select({
    ios: {
      backgroundColor: 'blue',
      color: 'white'
    },
    android: {


    },
  }),
  title: {
    // flex:1,
    textAlign: "center",

  },
  text: {
  //  flex: 1,
    fontSize: 30,
    color: 'yellow'
  },
  pic: {
     flex: 1,
     margin: 10,
     borderRadius: 10,
    width:Dimensions.get('window').width-3,
    // resizeMode: 'cover'
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  tview: {
    backgroundColor: 'blue',

  },
  tfb: {
    color: 'white',
    fontSize: 22
  },
  btview: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,

  },
  touch: {
    backgroundColor: "rgba(255,255,255,.8)"
  }

});
