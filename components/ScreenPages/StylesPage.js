import { StyleSheet } from 'react-native';

const colors = {
	blue: '#00A0E2',
	orange: '#ff7900',
	grey: '#c6c6c6'
};

const ListRow = StyleSheet.create({
	row: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		alignItems: 'center',
		height: 70
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10
	},
	name: {
		fontSize: 18,
		fontWeight: '500'
	},
	email: {
		fontSize: 14
	},
});

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
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
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  resultContainer: {
    flex: 15,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  resultTitleText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10
  },
  resultText: {
    color: '#333333',
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10
  },
});

const textInput = StyleSheet.create({
	input: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		color: 'red',
		width: '80%'
	},
	titleMargin: {
		marginTop: -15,
        marginBottom: 15,
	}
});

const pageSetup = StyleSheet.create({
	Placing: {
		flex: 0,
		paddingTop: 30,
		textAlign: 'center'
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		color: 'red',
		width: '80%'
	},
});

const productView = StyleSheet.create({
	boxSize: {
		flex: 0,
		flexDirection: 'row',
		width: '100%',
		padding: 10,
		backgroundColor: '#FFF3E8',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		justifyContent: 'space-between',
		alignContent: 'flex-start'
  	},
  	productPrice: {
		color: colors.orange,
		fontWeight: 'bold',
		fontSize: 30,
		fontFamily: 'Euclid'
  	},
  	bonuskaartContainer: {
		flex: 1,
		backgroundColor: '#00ade6',
		width: '100%',
		borderStyle: 'solid',
		borderWidth: 5,
		borderColor: '#00ade6',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15
  	},
  	bonuskaartImage: {
		flex: 1,
		height: 0,
		opacity: 0
  	},
	bonuskaartImageOpen: {
		flex: 1,
		height: '100%'
  	},
	barcode: {
  		opacity: 0,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15
	},
	barcodeOpen: {
		opacity: 1
	},
});

const image = StyleSheet.create({
	productSize: {
		width: 80,
		height: 80,
		alignItems: 'center'
	},
});

const text = StyleSheet.create({
  h1: {
    color: colors.orange,
    fontFamily: 'Euclid',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 25,
    marginBottom: -10,
  },
  h2: {
    color: colors.orange,
    fontWeight: 'bold',
    paddingTop: '7%',
    paddingLeft: 25,
    fontSize: 23,
    textAlign: 'left',
    fontFamily: 'Euclid',
    marginBottom: 8,
  },
  h3: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Euclid',
    paddingBottom: 5,
  },
  p1: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingLeft: 25,
    paddingRight: 10,
  },
  p2: {
    color: colors.orange,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Euclid',
  },
  p3: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Euclid',
  },
  p4: {
    color: colors.grey,
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  monospace: {
    fontFamily: 'IBM',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 5,
    marginTop: -10,
  },
  alertText: {
    fontFamily: 'Euclid',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: '2%',
  },
});

const buttons = StyleSheet.create({
  button: {
    color: colors.blue,
    backgroundColor: colors.blue,
    borderRadius: 10,
    padding: 10,
    margin: 24,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'Euclid',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 20,
    height: 20,
    flex: 0,
    flexDirection: 'column',
  },
  navButton: {
    color: colors.blue,
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 10,
    padding: 7,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
  },
});

const account = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
        textAlign: "center"
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    opacity: {
        backgroundColor: "green",
        height: 40,
        width: "100%",
        marginTop: 20
    },
    input: {
        textAlign: "center",
        margin: 10
    },
    text: {
        textAlign: "center",

    },
    opacitPlaceholder: {
        textAlign: "center",
        fontSize: 16,
        color: "white",
        lineHeight: 40
    }
});

export {
	styles,
	buttons,
	textInput,
	image,
	productView,
	pageSetup,
	text,
    account,
	ListRow
};
