import * as React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	//ah blauw= #00A0E2
	//ah bonus oranje= '#ff7900'

	title: {
		color: "#ff7900",
		fontWeight: "bold",
		fontSize: 30,
	},
	h1: {
		color: "#ff7900",
		fontWeight: "bold",
		fontSize: 30,
		textAlign: "center",
		margin: 14,
		fontFamily: "Euclid",
	},

	h2: {
		color: "#ff7900",
		fontWeight: "bold",
		paddingTop: "5%",
		paddingBottom: "2%",
		fontSize: 23,
		textAlign: "center",
		fontFamily: "Euclid",
	},

	alertText: {
		color: "red",
		fontWeight: "bold",
		fontSize: 30,
	},
});

const textInput = StyleSheet.create({
	inputContainer: {},
	input: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		color: "red",
		width: "80%",
	},
});

const buttons = StyleSheet.create({
	// this ia a Button

	//  <TouchableOpacity
	//     style={buttons.button}
	//     onPress={() => this.props.navigation.navigate('Home')} // place the navigation link here
	//   >
	//     <Text style={buttons.buttonText}> Go to Home </Text>
	//   </TouchableOpacity>

	button: {
		color: "#00A0E2",
		alignItems: "center",
		backgroundColor: "#00A0E2",
		borderRadius: 5,
		padding: 10,
		margin: 24,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	buttonText: {
		fontFamily: "Euclid",
		color: "#fff",
		fontWeight: "bold",
	},
});

export { styles, buttons, textInput };
