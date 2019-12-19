import * as React from 'react';
import {fb, fs} from '../config.js';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export default class SearchBar extends React.Component {
    state = {text: ""};

    searchForItem = async () => {
        const searchTerm = this.state.text;
        const getSearchList = fs.collection("products").where("productName", "==", searchTerm);

        const querySnapshot = await getSearchList.get();

        const products = [];
        querySnapshot.forEach(doc => products.push(doc.data()));

        // Log all data
        console.log("Your search found: ", JSON.stringify(products));

        // Log product name only
        products.forEach(product => {
            console.log(product.productName);
        });
    };

    // Makes sure it links through to the searchForItem function when button is pressed, empties text input after
    buttonPressHandler = () => {
        const item = this.state.text;

        // Can't perform an empty search
        if (item === "" || item === null) {
            return
        }

        this.searchForItem();
        this.setState({
            text: ""
        });
    };

    render () {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Zoeken naar..."
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} color="#00ade6" onPress={this.buttonPressHandler}>
                        {/*<Text style={{color: '#FFFFFF', fontSize: 20, letterSpacing: 3}}>ZOEK</Text>*/}
                        <Image style={styles.searchIcon} source={require('../assets/searchIcon.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#eeeeee',
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#333333',
        color: '#eeeeee',
        padding: 5,
        paddingLeft: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        width: '85%',
        height: 40
    },
    buttonContainer: {
        width: '15%',
        height: 40,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcon: {
        width: 15,
        height: 15
    }
});