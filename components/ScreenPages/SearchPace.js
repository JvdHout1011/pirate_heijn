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
                    style={styles.input}
                    placeholder="Search ..."

                    
                />
          <Button
            title="Search"
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
    text: {
      color: '#ff7900',
      fontWeight: 'bold',
      fontSize: 30,
    }, 
});  
export default SearchScreen