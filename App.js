import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { fb, fs } from './config.js';
// You can import from local files
import AssetExample from './components/AssetExample';
import LoginScreen from './components/cookieMonster';
import Scraper from './components/Scraper'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// app navigation 
import { createAppContainer, } from 'react-navigation';

const testQuery = fs.collection("users").doc("test4");
testQuery.set({
  a: "B",
  c: "D"
}); 

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {cookies: ''}
  }

  callbackFunction = (data) => {
    this.setState({cookies: data})
    
  }
    
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen parentCallback = {this.callbackFunction} />
        {/* {console.log(this.state.newCookies)} */}
        <Scraper cookies = {this.state.cookies} />

          {/* Change code in the editor and watch it change on your phone! Save to get a shareable url. */}
        
        {/* <loginScreen parentCallback = {this.callbackFunction} />
        <Text> {this.state.message} </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});