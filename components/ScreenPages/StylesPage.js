import * as React from "react";
import { StyleSheet } from "react-native";

// ah blauw= #00A0E2
// ah bonus oranje= '#ff7900'

const styles = StyleSheet.create({
	inputContainer: {
		margin: 20,
		flexDirection: "column",
		alignContent: "center",
		alignItems: "center",
	},
	input: {
		minWidth: "95%", 
		borderColor: "gray",
		borderRadius: 10,
		borderWidth: 1,
		padding: 10,
	},
	buttonContainer: {},
	button: {},
	searchIcon: {},

	// Search Box
	inputContainer: {
		flex: 1,
		padding: 20,
		// backgroundColor: "#eeeeee",
		flexDirection: "row",
	},
	input: {
		backgroundColor: "#eee",
		borderColor: "#e0e0e0",
		borderWidth: 1,
		color: "#838383",
		padding: 5,
		paddingLeft: 10,
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		width: "85%",
		height: 40,
	},
	buttonContainer: {
		width: "15%",
		height: 40,
		backgroundColor: "#00ade6",
		alignItems: "center",
		justifyContent: "space-evenly",
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
	},
	searchIcon: {
		width: 15,
		height: 15,
	},
	resultContainer: {
		flex: 15,
		padding: 20,
		// backgroundColor: "#eee",
	},
	resultTitleText: {
		color: "#ff7900",
		fontWeight: "bold",
		fontSize: 24,
		letterSpacing: 2,
		textTransform: "uppercase",
		marginBottom: 10,
	},
	resultText: {
		color: "#333333",
		fontSize: 16,
		marginBottom: 5,
		marginLeft: 10,
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

const pageSetup = StyleSheet.create({
	Plasing: {
		flex: 0,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		textAlign: "center",
		margin: 24,
	},
	input: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		color: "red",
		width: "80%",
	},
});

const productView = StyleSheet.create({
	boxSize: {
		//flex: 1,
		flexDirection: "row",
		width: 300,
		height: 150,
		padding: 10,
		backgroundColor: "#DDDDDD",
		borderRadius: 10,

		// justifyContent: 'space-between',
		// alignContent: 'flex-start'
	},
	productDescriptionText: {
		// padding: 10,
	},
	productPrice: {
		color: "red",
		fontWeight: "bold",
		fontSize: 30,
	},
});

const image = StyleSheet.create({
	size: {
		width: 80,
		height: 80,
		// alignItems: 'flex-end'
	},
});


const text = StyleSheet.create({
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
		fontFamily: "Euclid",
		color: "red",
		fontWeight: "bold",
		fontSize: 30,
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
		borderRadius: 10,
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
	buttonImage: {
		width: 20,
		height: 20,
		flex: 0,
		flexDirection: "column",
	},

	navButton: {
		color: "#00A0E2",
		alignItems: "center",
		backgroundColor: "#00A0E2",
		borderRadius: 10,
		padding: 7,
		marginRight: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
});

export { styles, buttons, textInput, image, productView, pageSetup, text };
