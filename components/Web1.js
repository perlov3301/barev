import React from 'react';
import {
  View,
  WebView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
/**

 <ActivityIndicator size="large" color="#0000ff" animating/>
 */
 indicator11 = () =>
 (<ActivityIndicator size="large" color="#0000ff"
   hidesWhenStopped={true} />)
  ;
 const Web1 = ({ navigation })  => (

     <WebView style={styles.container}
         source={{uri: 'https://www.facebook.com/profile.php?id=100006731449382'}}
         renderLoading={this.indicator1}
         startInLoadingState={true}
         contentInset={{ top: -40 }}/>


 );
 Web1.navigationOptions = {
   title: 'Web1'
 };
 const styles = StyleSheet.create({
   container: {
     flex: 1
   }
 });
 export default Web1;
 // source={{uri: navigation.state.params.uri}}
