import * as React from 'react';
import {fb, fs} from '../config.js';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList} from 'react-native';

export default class SearchBar extends React.Component {
    state = {
        text: "",
        products: [],
    };

    searchForItem = async () => {
        const searchTerm = this.state.text;
        const getSearchList = fs.collection("products").where("productName", "==", searchTerm);

        const querySnapshot = await getSearchList.get();

        const products = [];
        querySnapshot.forEach(doc => products.push(doc.data()));
        return products;
    };

    // Makes sure it links through to the searchForItem function when button is pressed, empties text input after
    buttonPressHandler = async () => {
        const item = this.state.text;

        // Can't perform an empty search
        if (item === "" || item === null) {
            return
        }

        const products = await this.searchForItem();
        this.setState({
            text: "",
            products
        });
    };

    render () {
        return (
            // Added fragment so you can put two Views next to each other
            <React.Fragment>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Zoeken naar..."
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} color="#00ade6" onPress={this.buttonPressHandler}>
                            <Image style={styles.searchIcon} source={require('../assets/searchIcon.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text>Results:</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item}) => <Text>{item.productName}</Text>}
                    />
                </View>
            </React.Fragment>
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