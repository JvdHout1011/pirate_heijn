import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import firebase from '../config.js';

// App navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
import AssetExample from './AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// Sreen page layout with logic
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('cookieMonster')}
        />
      </View>
    );
  }
}

export default HomeScreen;
