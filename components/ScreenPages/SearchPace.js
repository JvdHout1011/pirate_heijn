import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
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
class SearchScreen extends React.Component {
    static navigationOptions = {
      title: 'Search',
      
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>
          Search
            </Text>
              <TextInput
                    style={textInput.input}
                    placeholder="Search ..."
      
          />
            <TouchableOpacity
         style={buttons.button}
         onPress={() => this.props.navigation.navigate('Home')}
       >
         <Text style={buttons.buttonText}> Search </Text>
       </TouchableOpacity>
          
        </View>
      );
    }
}
 
export default SearchScreen