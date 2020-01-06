import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput,TouchableOpacity } from 'react-native';
import { styles, buttons, textInput } from './StylesPage'
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
            <TouchableOpacity
         style={buttons.button}
         onPress={() => this.props.navigation.navigate('Search')}
       >
         <Text style={buttons.buttonText}> Go to Search </Text>
       </TouchableOpacity>
         
        </View>
      );
    }
}
  
 


export default ProductScreen