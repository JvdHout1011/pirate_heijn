import * as React from "react";
import {
	Text,
	View,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";
import { fs } from "../../config.js";
import AsyncStorage from '@react-native-community/async-storage'
import { FlatList } from "react-native-gesture-handler";
import ListRow from "./views/ListRow-start";

// App navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { styles, buttons, textInput, pageSetup, text } from "./StylesPage";
import { buttons, pageSetup, text } from "./StylesPage";

// Screen page layout with logic
class HomeScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			discountCardNumber: 203033004404040,
			auth_cookie: '4N2s2aQWN7yRwc1en1G3j3uWCvr3ZOeY'
		}
	}
	
	static navigationOptions = ({ navigation }) => {
		return {
			title: "Home",
			headerRight: () => (
				<TouchableOpacity
					style={buttons.navButton}
					onPress={navigation.getParam("goToSettings")}
				>
					<Image
						source={require("../../assets/icons/settings.png")}
						fadeDuration={0}
						style={buttons.buttonImage}
					/>
					<Text style={buttons.buttonText}> Settings </Text>
				</TouchableOpacity>
			),
		};
	};
	randomString = (length, chars) => {
		var result = "";
		for (var i = length; i > 0; --i)
			result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	};
	

	//When component starts, set parameters for navigation and set the user cookie
	UNSAFE_componentWillMount() {
		this.props.navigation.setParams({ goToSettings: this._goToSettings });

		this.startSetCookie();
	}

	
	startSetCookie = async () => {
		const rString = this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

		const cookieQuery = fs.collection("users").doc();
		console.log(rString)
		const updateQuery = await cookieQuery.set({

			bonuskaart_number: this.state.discountCardNumber,
			auth_cookie: rString

		})		
//	AsyncStorage.setItem('auth_cookie', rString);
		this.setState({auth_cookie: rString})
	}
	
	_goToSettings = () => {
		this.props.navigation.navigate("Settings");
	};
	

	render() {
		return (
			<React.Fragment>
				<View style={pageSetup.Plasing}>
					<Text style={text.h1}>Populairste aanbiedingen</Text>
					<TouchableOpacity
						style={buttons.button}
						onPress={() => this.props.navigation.navigate("Search")}
					>
						<Image
							source={require("../../assets/icons/Search.png")}
							fadeDuration={0}
							style={buttons.buttonImage}
						/>
						<Text style={buttons.buttonText}> Zoek naar aanbiedingen </Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>
					<FlatList
						style={{ marginTop: 20 }}
						data={this.state.people}
						renderItem={({ item, index }) => (
							<ListRow
								{...item}
								index={index}
								onRemove={() => this.handleRemove(index)}
							/>
						)}
						keyExtractor={item => item.login.username}
						ListHeaderComponent={() => (
							<Button onPress={this.handleAdd} title="Add Product" />
						)}
					/>
				</View>
			</React.Fragment>
		);
	}
}

export default HomeScreen;
