import * as React from 'react';
import {fb, fs} from '../config.js';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export default class SearchBar extends React.Component {
    state = {text: ""};

    searchForItem = async () => {
        const searchTerm = this.state.text;
        const getSearchList = fs.collection("products").where("productName", "==", searchTerm);

        const querySnapshot = await getSearchList.get();
        console.log(querySnapshot);

        // querySnapshot is an array with documents which it got from the search query.
        // To see the data from this array you have to map the data using doc.data().
        // If you don't map you get documents, if you do map you get arrays with data.
        const products = querySnapshot.map(doc => doc.data());
        console.log("Your search found: " + products);
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
                        <Image style={styles.searchIcon} source={require('assets/searchIcon.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {

    },
    input: {

    },
    buttonContainer: {

    },
    button: {

    },
    searchIcon: {

    }
});