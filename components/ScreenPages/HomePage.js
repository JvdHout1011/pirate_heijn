import * as React from 'react';
import { fb, fs } from '../../config.js';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  YellowBox,
  Vibration,
} from 'react-native';
import { Ionicons } from './../../node_modules/@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Barcode from './packages/react-native-barcode-builder/index.js';
import * as Haptics from 'expo-haptics';

// App navigation
import {
  styles,
  buttons,
  textInput,
  pageSetup,
  text,
  image,
  productView,
} from './StylesPage';
// import {image, productView} from "../../../../Desktop/s4d-minor/pirate_heijn/components/ScreenPages/StylesPage";

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
    open: null,
    modalVisible: false,
  };

  async componentDidMount () {
    await this.fetchAllItems()
  }

  fetchAllItems = async () => {
    const getAllProducts = fs.collection('products');
    let products = [];

    const querySnapshot = await getAllProducts.get();
    querySnapshot.forEach(doc => products.push(doc.data()));

    this.setState({
      products,
      // Als je eerst zoekt op products (bij SearchForItem), worden de products die niet bij die zoekterm passen
      // verwijderd. Als je vervolgens op iets anders zoekt, kan er dus niks gevonden worden. Om dit te voorkomen
      // gebruiken we allProducts waar alle producten onaangetast in blijven staan.
      allProducts: products
    });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleAdd = async () => {
    try {
      const res = await fetch('https://stijndv.com/S4D/api.json');
      const result = await res.json();
      this.setState({
        people: [...this.state.people, result.results[0]],
      });
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  handleRemove = index => {
    const start = this.state.people.slice(0, index);
    const end = this.state.people.slice(index + 1);
    this.setState({
      people: start.concat(end),
    });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Pirate Heijn',
      headerRight: () => (
        <TouchableOpacity
          style={buttons.navButton}
          onPress={navigation.getParam('goToSettings')}>
          <Image
            source={require('../../assets/icons/settings.png')}
            fadeDuration={0}
            style={buttons.buttonImage}
          />
          <Text style={buttons.buttonText}>Instellingen</Text>
        </TouchableOpacity>
      ),
    };
  };

  randomString = (length, chars) => {
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  startSetCookie = async () => {
    const rString = this.randomString(
      32,
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    );

    const cookieQuery = fs.collection('users').doc();
    console.log(rString);
    const updateQuery = await cookieQuery.set({
      bonuskaart_number: this.state.discountCardNumber,
      auth_cookie: rString,
    });
    this.setState({ auth_cookie: rString });
  };

  _goToSettings = () => {
    this.props.navigation.navigate('Settings');
  };

  UNSAFE_componentWillMount() {
    this.props.navigation.setParams({ goToSettings: this._goToSettings });
    this.startSetCookie();
  }

  searchForItem = async () => {
    const searchTerm = this.state.text.toLowerCase();
    const products = this.state.allProducts;

    if (!products.length) {
      return [];
    }

    // Filter loopt over een array heen, net als forEach, en die maakt een nieuwe array, in dit geval de foundProducts
    const foundProducts = products.filter(product => {
      const productName = product.article_name.toLowerCase();
      let tag;
      // Set de tag als die er is
      if (product.tag !== undefined && product.tag !== null) {
        tag = product.tag.toLowerCase();
      }

      if (productName === searchTerm) {
        return true;
      }

      if (tag === searchTerm) {
        return true;
      }

      // Als de searchterm ergens in de productname voorkomt, wordt hij ook toegevoegd aan de array foundProducts
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
      return Alert.alert('Oeps!', 'Je kunt geen lege zoekopdracht versturen.', [
        {
          text: 'Oké',
        },
      ]);
    }

    const products = await this.searchForItem();
    this.setState({
      text: '',
      products,
    });

    // When item can't be found
    if (!this.state.products.length) {
      await Alert.alert(
        'Oeps!',
        'Dit product is vandaag niet in de bonus. Probeer het maandag nog eens!',
        [
          {
            text: 'Helaas...',
          },
        ],
      );
    }
  };

  productPressHandler = async item => {
    if (this.state.open === item) {
      this.setState({
        open: null,
      });
    } else {
      this.setState({
        open: item,
      });
    }
  };

  render() {
    const { name, picture, email, price, description, item } = this.props;

    return (
      <React.Fragment>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            defaultValue="Fruit"
            placeholder=" Zoeken naar..."
            placeholderTextColor="#838383"
            selectionColor="#ff7900"
            clearButtonMode="always"
            enablesReturnKeyAutomatically="true"
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
              <Ionicons name="ios-search" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resultContainer}>
          <Text style={[text.h1, textInput.titleMargin]}>
            Voor jou in de bonus
          </Text>
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPressIn={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success,
                  );
                }}
                onPress={() => this.productPressHandler(item)}>
                <View
                  style={{
                    alignContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <View style={productView.boxSize}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}>
                      <Image
                        style={image.productSize}
                        source={{
                          uri: 'https://stijndv.com/images/PirateHeinWhite.png',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flex: 2,
                        flexDirection: 'column',
                        alignContent: 'flex-end',
                      }}>
                      <Text style={text.h3}>{item.article_name}</Text>
                      <Text>{item.article_name}</Text>
                      <Text style={productView.productPrice}>{price}</Text>

                      <View
                        style={{
                          alignItems: 'flex-end',
                          flexDirection: 'column-reverse',
                        }}></View>
                    </View>
                  </View>
                  <View style={productView.bonuskaartContainer}>
                    <View
                      style={[
                        this.state.open === item
                          ? [
                              productView.bonuskaartImageOpen,
                              productView.barcodeOpen,
                            ]
                          : [productView.bonuskaartImage, productView.barcode],
                      ]}>
                      <View
                        style={{
                          maxWidth: '100%',
                          flex: 1,
                          alignContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'white',
                          margin: 10,
                          borderRadius: 8,
                        }}>
                        <Barcode value="2620682025269" format="EAN13" flat />
                        <Text style={text.monospace}>2620682025269</Text>
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
