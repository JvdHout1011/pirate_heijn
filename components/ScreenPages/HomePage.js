import * as React from 'react';
import { fb, fs } from '../../config.js';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  YellowBox,
  AsyncStorage,
  BackHandler
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Barcode from './packages/react-native-barcode-builder/index.js';
import * as Haptics from 'expo-haptics';

import { styles, buttons, textInput, text, image, productView } from './StylesPage';

console.disableYellowBox = true;

// Screen page layout with logic
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = ['Setting a timer'];
        YellowBox.ignoreWarnings(['Setting a timer']);
    }

    state = {
        discountCardNumber: 203033004404040,
        auth_cookie: '',
        people: [],
        text: '',
        products: [],
        allProducts: [],
        open: null
    };

    async componentDidMount() {
        await this.fetchAllItems();
    }

    fetchAllItems = async () => {
        const getAllProducts = fs.collection('products');
        let products = [];

        const querySnapshot = await getAllProducts.get();
        querySnapshot.forEach(doc => products.push(doc.data()));

        this.setState({
            products,
            // If you search for products (at SearchForItem), the products that don't fit the searchterm get deleted.
            // If you then search for something else, nothing will be found because they have been deleted. To prevent this,
            // we use allProducts, where all products stay permanently and unaffected by the searchterms.
            allProducts: products
        });
    };

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Pirate Heijn',
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity style={buttons.navButton} onPress={navigation.getParam('goToSettings')}>
                    <Image
                        source={require('../../assets/icons/account.png')}
                        fadeDuration={0}
                        style={buttons.buttonImage}
                    />
                </TouchableOpacity>
            )
        };
    };

    randomString = (length, chars) => {
        let result = '';
        for (let i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    };

    checkForExistingUser = async () => {
        AsyncStorage.getItem('auth_cookie').then(value => {
            if (value == '' || value.length == 0 || value == null || value == undefined) {
                this.startSetCookie();
            } else {
                const rString = value;
            }
        });
        const queryForExistingUser = await fs
            .collection('users')
            .where('auth_cookie', '==', rString)
            .get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    this.startSetCookie();
                } else {
                    this.setState({ auth_cookie: rString });
                    this.startSetCookie();
                }
            });
    };

    startSetCookie = async () => {
        const rString = this.randomString(
            32,
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        );

 
        const cookieQuery = fs.collection('users').doc();
        console.log(rString);
        const updateQuery = await cookieQuery.set({
            bonuskaart_number: this.state.discountCardNumber,
            auth_cookie: rString
        });
        this.setState({ auth_cookie: rString });
    };

    _goToSettings = () => {
        this.props.navigation.navigate('Settings');
    };

    UNSAFE_componentWillMount() {
        this.props.navigation.setParams({ goToSettings: this._goToSettings });
        this.checkForExistingUser();
        BackHandler.addEventListener('hardwareBackPress', function () {
            return true;
        });
    }

    searchForItem = async () => {
        const searchTerm = this.state.text.toLowerCase();
        const products = this.state.allProducts;

        if (!products.length) {
            return [];
        }

        // Filter loops over an array (just like forEach) and makes a new array.
        // In this case the new array is foundProducts.
        const foundProducts = products.filter(product => {
            const productName = product.article_name.toLowerCase();
            let tag;
            // Set tag if it's there
            if (product.tag !== undefined && product.tag !== null) {
                tag = product.tag.toLowerCase();
            }

            if (productName === searchTerm) {
                return true;
            }

            if (tag === searchTerm) {
                return true;
            }

            // If the searchterm occurs anywhere in the product name, the product gets added to the foundProducts array
            if (productName.includes(searchTerm)) {
                return true;
            }

            return false;
        });
        return foundProducts;
    };

    // Makes sure it links through to the searchForItem function when button is pressed, empties text input after
    buttonPressHandler = async () => {
        const item = this.state.text;

        // Can't perform an empty search
        if (item === '' || item === null || item === undefined) {
            this.setState({
                text: '',
                allProducts
            });
        }

        const products = await this.searchForItem();
        this.setState({
            text: '',
            products
        });

        // When item can't be found
        if (!this.state.products.length) {
            await Alert.alert(
                'Oeps!',
                'Dit product is vandaag niet in de bonus. Probeer het maandag nog eens!',
                [
                    {
                        text: 'Helaas...'
                    }
                ]
            );
        }
    };

    productPressHandler = async item => {
        if (this.state.open === item) {
            this.setState({
                open: null
            });
        } else {
            this.setState({
                open: item
            });
        }
    };

    render() {
        const { price, description, item } = this.props;

        return (
            <React.Fragment>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder=" Zoeken naar..."
                        placeholderTextColor="#838383"
                        selectionColor="#ff7900"
                        clearButtonMode="always"
                        returnKeyType="search"
                        onSubmitEditing={this.buttonPressHandler}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            color="#00ade6"
                            onPress={this.buttonPressHandler}>
                            <Image
                                source={require('../../assets/icons/searchIcon.png')}
                                fadeDuration={0}
                                style={styles.searchIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.resultContainer}>
                    <Text style={[text.h1, textInput.titleMargin]}>Voor jou in de bonus</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback
                                onPressOut={() => {
                                    Haptics.selectionAsync();
                                }}
                                onPress={() => this.productPressHandler(item)}>
                                <View
                                    style={{
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 10,
                                        marginHorizontal: 15
                                    }}>
                                    <View style={productView.boxSize}>
                                        <View
                                            style={{
                                                flex: 0,
                                                flexDirection: 'row',
                                                flexWrap: 'wrap',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start'
                                            }}>
                                            <Image
                                                style={image.productSize}
                                                source={{
                                                    uri: 'https://stijndv.com/images/PirateHein.png'
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                flex: 2,
                                                flexDirection: 'column',
                                                alignContent: 'flex-end'
                                            }}>
                                            <Text style={text.h3}>{item.article_name}</Text>
                                            <Text>{item.article_name}</Text>
                                            <Text style={productView.productPrice}>{price}</Text>

                                            <View
                                                style={{
                                                    alignItems: 'flex-end',
                                                    flexDirection: 'column-reverse'
                                                }}></View>
                                        </View>
                                    </View>
                                    <View style={productView.bonuskaartContainer}>
                                        <View
                                            style={[
                                                this.state.open === item
                                                    ? [
                                                          productView.bonuskaartImageOpen,
                                                          productView.barcodeOpen
                                                      ]
                                                    : [productView.bonuskaartImage, productView.barcode]
                                            ]}>
                                            <View
                                                style={{
                                                    maxWidth: '100%',
                                                    flex: 1,
                                                    alignContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'white',
                                                    margin: 10,
                                                    borderRadius: 8
                                                }}>
                                                <Barcode value={item.bonuskaart_number} format="EAN13" flat />
                                                <Text style={text.monospace}>{item.bonuskaart_number}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />
                </View>
            </React.Fragment>
        );
    }
}