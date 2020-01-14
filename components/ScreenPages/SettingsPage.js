import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import {
	styles,
	buttons,
	textInput,
	pageSetup,
	productView,
	image,
	text,
} from "./StylesPage";
import { fb, fs } from "../../config.js";

// Screen page layout with logic
class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: "Instellingen",
	};
	render() {
		return (
			// 	<View style={pageSetup.Plasing}>

			// 		<View style={productView.boxSize}>

			//                 <View style={{
			//                     flex: 1,
			//                     flexDirection: 'row',
			//                     flexWrap: 'wrap',
			//                     justifyContent: 'space-between',
			//                     alignItems: "flex-start"

			//                 }}>
			//                     <Image
			//                         style={image.size}
			//                         source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
			//                     />
			//                 </View>

			//                 <View style={{
			//                     flex: 2,
			//                     flexDirection: 'column',
			//                     padding: 10,
			//                     alignContent: 'flex-end'

			//                 }}>
			//                     <Text>
			//                         Hier in komt alle infotmatie van het product!{'\n'}{'\n'} hee

			//   </Text>
			//                     <View style={{

			//                         alignItems: "flex-end",
			//                         flexDirection: "column-reverse",
			//                     }}>
			//                         <Text style={productView.productPrice}>
			//                             €5,-
			//   </Text>
			//                     </View>
			//                 </View>
			//             </View>
			//         </View>
			<View style={pageSetup.Plasing}>
				<Text style={text.alertText}>Deze pagina wordt niet gebruikt!</Text>
				<Text style={{ textAlign: 'center' }}>
					Hier valt niks te zoeken dit is namelijkeen dummie pagina.
					{'\n'}
					{'\n'}
					Deze app is bedoelt als prototype.
					</Text>
				
				<TouchableOpacity
					style={buttons.button}
					onPress={() => this.props.navigation.navigate("Home")}
				>
					<Text style={buttons.buttonText}> Terug naar Pirate Hein </Text>
				</TouchableOpacity>

				{/* <TouchableOpacity
					onPress={() => this.props.navigation.navigate("Product")}
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
							<Text style={text.h3}>Geen product beschikbaar</Text>
							<Text>Probeer iets anders te zoeken</Text>
							<View
								style={{
									alignItems: "flex-end",
									flexDirection: "column-reverse",
								}}
							>
								<Text style={productView.productPrice}>€ --</Text>
							</View>
						</View>
					</View>
				</TouchableOpacity> */}
			</View>
		);
	}
}

export default SettingsScreen;
