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
class LogInScreen extends React.Component {
    static navigationOptions = {
      title: 'LogIn',
      
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
          <Text style={styles.title}>
            AH
            </Text>
          <Text style={styles.title}>
            User name
            </Text>
          <TextInput style={styles.input}
                    placeholder="User name..."/> 
          
          <Text style={styles.title}>
            Password
            </Text>
          <TextInput style={styles.input}
                    placeholder="Password..."/> 
          
          <Button
            title="Log-In"
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.button}
          />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  inputContainer: {

  },
  input: {
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      color: 'red',
      width: "80%",
  },
  buttonContainer: {

  },
  button: {
    color:'#00A0E2'

  },
  searchIcon: {

  },
    
  title: {
    color: '#ff7900',
    fontWeight: 'bold',
    fontSize: 30,
  },
  
});

     
export default LogInScreen