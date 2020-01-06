import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import {fb, fs} from '../../config.js';

// App navigation
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
import AssetExample from '../AssetExample';

// or any pure javascript modules available in npm
import { Card,  } from 'react-native-paper';


// Sreen page layout with logic
class ProductScreen extends React.Component {
    static navigationOptions = {
      title: 'Products',
      
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>
            Search
            </Text>
          <Button
            title="Go to Search"
            onPress={() => this.props.navigation.navigate('Search')}
            style={styles.button}
          />
        </View>
      );
    }
}
  
  
const styles = StyleSheet.create({
  text: {
    color: '#ff7900',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    color:'#00A0E2'

  },
  
});


export default ProductScreen