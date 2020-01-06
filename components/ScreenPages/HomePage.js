import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
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
class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Home',
        headerRight: () => (
          <TouchableOpacity
         style={styles.button}
         onPress={navigation.getParam('goToSettings')}
       >
         <Text style={styles.buttonText}> Settings </Text>
       </TouchableOpacity>
         
        ),
      };
    };
  
  //ik weet niet wat hier gebeurt?
    componentWillMount() {
      this.props.navigation.setParams({ goToSettings: this._goToSettings });
    }
  
    _goToSettings  = () => {
      this.props.navigation.navigate('Settings');
  };
  
    render() {
      return (
        <View style={{  alignItems: 'center', justifyContent: 'center' }}>
         
          <Text style={styles.text}>
            Products
            </Text>
          <Button
            title="Go to Products"
            onPress={() => this.props.navigation.navigate('Product')}
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',

  },

  button: {
    color: '#00A0E2',
    alignItems: 'center',
    backgroundColor: '#00A0E2',
    borderRadius: 5,
    padding: 10

  },
  settingsButton: {
    color: '#ff7900'
 
  },
});


export default HomeScreen