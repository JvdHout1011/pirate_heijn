import * as React from "react";
import {fb, fs} from "../../config.js";
import {
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    Alert,
    Animated,
} from "react-native";
import {Ionicons} from "./../../node_modules/@expo/vector-icons";
import {styles, text, productView, image} from "./StylesPage";
import ListRow from "./Element/productCardSearch.js";

// Screen page layout with logic
export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: "Zoeken",
    };

    state = {
        text: "",
        products: [],
        open: null,
    };

    searchForItem = async () => {
        const searchTerm = this.state.text;
        const getSearchList = fs
            .collection("products")
            .where("article_name_lowercase", "==", searchTerm.toLowerCase());
        const searchForTagList = fs
            .collection("products")
            .where("tag", "==", searchTerm.toLowerCase());

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

        // Can't perform an empty search
        if (item === "" || item === null || item === undefined) {
            return Alert.alert(
                "Oeps!",
                "Je kunt geen lege zoekopdracht versturen.",
                [
                    {
                        text: "Oké",
                    },
                ],
            );

        }

        const products = await this.searchForItem();
        this.setState({
            text: "",
            products,
        });

        // When item can't be found
        if (!this.state.products.length) {
            await Alert.alert(
                "Oeps!",
                "Dit product is vandaag niet in de bonus. Probeer het maandag nog eens!",
                [
                    {
                        text: "Helaas...",
                    },
                ],
            );
        }
    };

    handleAdd = async () => {
        try {
            const res = await fetch("https://stijndv.com/S4D/api.json");
            const result = await res.json();
            this.setState({
                product: [...this.state.products, result.results[0]],
            });
        } catch (err) {
            alert(JSON.stringify(err));
        }
    };

    handleRemove = index => {
        const start = this.state.product.slice(0, index);
        const end = this.state.product.slice(index + 1);
        this.setState({
            product: start.concat(end),
        });
    };

    productPressHandler = async (item) => {
        if (this.state.open === item) {
            this.setState({
                open: null
            })
        } else {
            this.setState({
                open: item
            })
        }
    };

    render() {
        const {name, picture, email, price, description, item} = this.props;

        return (
            // Added fragment to put two Views next to each other
            <React.Fragment>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder=" Zoeken naar..."
                        placeholderTextColor="#838383"
                        onChangeText={text => this.setState({text})}
                        value={this.state.text}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            color="#00ade6"
                            onPress={this.buttonPressHandler}
                        >
                            <Ionicons name="ios-search" size={25} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.resultContainer}>
                    <Text style={text.h1}>Gevonden aanbiedingen</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => this.productPressHandler(item)}>
                                <View
                                    style={{
                                        alignContent: "center",
                                        alignItems: "center",
                                        marginBottom: 10,
                                    }}
                                >
                                    <View style={productView.boxSize}>
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: "row",
                                                flexWrap: "wrap",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <Image
                                                style={image.productSize}
                                                source={{
                                                    uri: "https://stijndv.com/images/PirateHeinWhite.png",
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                flex: 2,
                                                flexDirection: "column",
                                                alignContent: "flex-end",
                                            }}
                                        >
                                            <Text style={text.h3}>{item.article_name}</Text>
                                            <Text>{item.article_name}</Text>
                                            <Text style={productView.productPrice}>{price}</Text>

                                            <View
                                                style={{
                                                    alignItems: "flex-end",
                                                    flexDirection: "column-reverse",
                                                }}>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={productView.bonuskaartContainer}>
                                        <Image
                                            style={this.state.open === item ? productView.bonuskaartImageOpen : productView.bonuskaartImage}
                                            source={require('../../assets/bonuskaartImages/bonuskaartImage.png')}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </React.Fragment>
        );
    }
}
