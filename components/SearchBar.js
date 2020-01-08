import * as React from 'react';
import {fb, fs} from '../config.js';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class SearchBar extends React.Component {
    state = {
        text: "",
        products: [],
    };

    searchForItem = async () => {
        const searchTerm = this.state.text;
        const getSearchList = fs.collection("products").where("article_name", "==", searchTerm/*.toLowerCase()*/);
        const searchForTagList = fs.collection("products").where("tag", "==", searchTerm/*.toLowerCase()*/);

        let products = [];

        // Add items based on item title
        const querySnapshot = await getSearchList.get();
        querySnapshot.forEach(doc => products.push(doc.data()));

        // Add items based on tag
        const querySnapshotTags = await searchForTagList.get();
        querySnapshotTags.forEach(doc => products.push(doc.data()));

        // There might be duplicates in the products array, so make it unique
        products = [...new Set(products)];

        return products;
    };

    // Makes sure it links through to the searchForItem function when button is pressed, empties text input after
    buttonPressHandler = async () => {
        const item = this.state.text;

        const products = await this.searchForItem();
        this.setState({
            text: "",
            products
        });

        // Can't perform an empty search
        if (item === "" || item === null) {
            return
        }

        // When item can't be found
        if (!this.state.products.length) {
            Alert.alert(
                'Oeps!',
                'Dit product is vandaag niet in de bonus. Probeer het maandag nog eens!',
                [
                    {
                        text: 'Helaas...',
                        onPress: () => console.log('Alert button pressed'),
                    },
                ],
            );
        }
    };

    render () {
        return (
            // Added fragment to put two Views next to each other
            <React.Fragment>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Zoeken naar..."
                        placeholderTextColor="#838383"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} color="#00ade6" onPress={this.buttonPressHandler}>
                            <Ionicons name="ios-search" size={25} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.resultContainer}>
                    <Text style={styles.resultTitleText}>Voor jou in de bonus</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item}) => <Text style={styles.resultText}>{item.article_name}</Text>}
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
        backgroundColor: '#eee',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        color: '#838383',
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
        backgroundColor: '#00ade6',
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
    },
    resultContainer: {
        flex: 15,
        padding: 20,
        backgroundColor: '#eee'
    },
    resultTitleText: {
        color: '#ff7900',
        fontWeight: "bold",
        fontSize: 24,
        letterSpacing: 2,
        textTransform: "uppercase",
        marginBottom: 10
    },
    resultText: {
        color: '#333333',
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10
    }
});