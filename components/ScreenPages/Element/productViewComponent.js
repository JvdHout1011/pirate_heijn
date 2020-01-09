import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput,TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles, buttons, textInput, image, productView } from './StylesPage'
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

 }
    render() {
      return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center',  }}>
          <Text style={styles.text}>
            Search
            </Text>
            <TouchableOpacity
         style={buttons.button}
         onPress={() => this.props.navigation.navigate('Search')}
       >
         <Text style={buttons.buttonText}> Go to Search </Text>
          </TouchableOpacity>

          <View style={productView.boxSize}>
            <View style={{
        flex: 1,
                flexDirection: 'row',
        flexWrap:'wrap',
                justifyContent: 'space-between',
                alignItems: "flex-start"
        
      }}>
          <Image
           style={image.size}
           source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
              />
              </View>
              
              <View style={{
                    flex: 2,
                    flexDirection: 'column',
                    padding: 10,
                    alignContent: 'flex-end'
        
      }}>
          <Text>
                  Hier in komt alle infotmatie van het product!{'\n'}{'\n'} hee
                        
          </Text>
          <View style={{
        
                 alignItems: "flex-end",
        flexDirection:"column-reverse",
      }}>
          <Text style={productView.productPrice}>
            €5,-
          </Text>
          </View>
              </View>
            </View>
        </View>
        </ScrollView>
       
      );
    }

  
 


export default ProductScreen