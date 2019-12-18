import * as React from 'react';
import {fb, fs} from '../config.js';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export default class SearchBar extends React.Component {
    state = {text: ""};

    searchForItem = () => {
        const searchTerm = this.state.text; // No idea if this is correct.
        const getSearchList = fs.collection("products").where("productName", "==", searchTerm);

        getSearchList.get().then(/* Do something */);
    };

    // Makes sure it links through to the searchForItem function when button is pressed, empties text input after
    buttonPressHandler = () => {
        const item = this.state.text;

        // Can't perform an empty search
        if (item === "" || item === null) {
            return
        }

        this.props.searchForItem();
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