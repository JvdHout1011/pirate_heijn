import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {WebView} from 'react-native-webview';

import Scraper from "../Scraper";
import LogInWebView from "../LogInWebView";

export default class LogInScreen extends Component {
    constructor() {
        super()
        this.state = {isUserLoggedIn: false,
            goToNextPage: false}
    }

    callbackFunction = (data) => {
        this.setState({isUserLoggedIn: data})
    }

    render() {
        console.log(this.state.isUserLoggedIn)
        if (this.state.isUserLoggedIn == false){
            return (
                <View style={styles.container}>
                    <View style={styles.logInWebView}><LogInWebView parentCallback={this.callbackFunction}/></View>
                </View>
        )} else if (this.state.isUserLoggedIn == true){
            return (
                <View style={styles.container}>
                    <View style={styles.LogInWebView}>
                        <Scraper/>
                        <WebView onLoadStart= {() => this.props.navigation.navigate('Home')} />
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 25, // Constants kon niet gevonden worden, persoon die dit heeft gedaan moet er even nog een keer naar kijken.
        backgroundColor: '#ecf0f1'
    },
    logInWebView: {
        flex: 1
    },
    scraper: {
        flex: 0
    }
});  