import { StyleSheet } from 'react-native';

const colors = {
    black: '#4A4A4A',
    orange: '#ff7900',
    grey: '#c6c6c6',
    blue: '#00A0E2'
};

const ListRow = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: -20
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
        backgroundColor: colors.black,
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
    }
});

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: -15
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
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    searchIcon: {
        width: 25,
        height: 25
    },
    resultContainer: {
        flex: 15,
        paddingTop: 20
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
    }
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
        marginTop: 0,
        marginBottom: 15
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
    }
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
    }
});

const image = StyleSheet.create({
    productSize: {
        width: 60,
        height: 60,
        alignItems: 'center',
        margin: 5,
        marginRight: 10,
        borderRadius: 5
    }
});

const text = StyleSheet.create({
    h1: {
        color: colors.orange,
        fontFamily: 'Euclid',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'left',
        paddingLeft: 25,
        marginBottom: -10
    },
    h2: {
        color: colors.orange,
        fontWeight: 'bold',
        paddingTop: '7%',
        paddingLeft: 25,
        fontSize: 23,
        textAlign: 'left',
        fontFamily: 'Euclid',
        marginBottom: 8
    },
    h3: {
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Euclid',
        paddingBottom: 5
    },
    p1: {
        fontSize: 16,
        fontWeight: 'normal',
        paddingLeft: 25,
        paddingRight: 10
    },
    p2: {
        color: colors.orange,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Euclid'
    },
    p3: {
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Euclid'
    },
    p4: {
        color: colors.grey,
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20
    },
    monospace: {
        fontFamily: 'IBM',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        letterSpacing: 5,
        marginTop: -10
    },
    alertText: {
        fontFamily: 'Euclid',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingBottom: '2%'
    },
    textAlignCenter: {
        textAlign: 'center',
        paddingLeft: 0
    }
});

const buttons = StyleSheet.create({
    button: {
        color: colors.black,
        backgroundColor: colors.black,
        borderRadius: 10,
        padding: 10,
        margin: 24,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    buttonText: {
        fontFamily: 'Euclid',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    buttonImage: {
        width: 20,
        height: 20,
        flex: 0,
        flexDirection: 'column'
    },
    navButton: {
        color: colors.black,
        alignItems: 'center',
        backgroundColor: colors.black,
        borderRadius: 10,
        padding: 7,
        marginRight: 15,
        display: 'flex',
        flexDirection: 'row'
    } 
});

const account = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20,
        textAlign: 'center'
    },
    textPlacement: {
        textAlign: 'center',
        padding: 20
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        color: '#838383',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        width: '85%',
        height: 40,
        marginTop: 20
    },
    inputPlacement: {
        flex: 1,
        alignItems: 'center'
    },
    extraMargin: {
        marginTop: 20
    },
    bonuskaartStyling: {
        backgroundColor: colors.black,
        padding: 20,
        margin: 20,
        borderRadius: 15
    }
});

export { styles, buttons, textInput, image, productView, pageSetup, text, account };
