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
 const WebList1 = ({ navigation })  => (

     <WebView style={styles.container}
         source={{uri: 'https://sentences-perlov3301.c9users.io/list'}}
         renderLoading={this.indicator1}
         startInLoadingState={true}
         contentInset={{ top: -0 }}/>


 );
 WebList1.navigationOptions = {
   title: 'WebList1'
 };
 const styles = StyleSheet.create({
   container: {
     flex: 1
   }
 });
 export default WebList1;
 // source={{uri: navigation.state.params.uri}}
