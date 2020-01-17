import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import LogInWebView from '../LogInWebView';
import scraper from '../Scraper';

export default class LogInScreen extends Component {
    constructor() {
        super();
        // this.state = {
        //     isLoggedIn: false
        // }
    }

    static navigationOptions = {
        title: 'Inloggen'
    };

    // callbackFunction = isLoggedIn => {
    //     var wasLoggedIn = this.state.isLoggedIn
    //     console.log(this.state.isLoggedIn)
    //     // console.log(wasLoggedIn)
    //     if (isLoggedIn) {
    //         scraper()
    //     }
    //     this.setState({isLoggedIn: isLoggedIn});
    // };

    render() {
        // if (this.state.isLoggedIn == false) {
        return (
            <View style={styles.container}>
                <View style={styles.logInWebView}>
                    <LogInWebView parentCallback={this.callbackFunction} />
                </View>
            </View>
        );
        // } else if (this.state.isLoggedIn == true) {
        //     return (null);
        // };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    logInWebView: {
        flex: 1
    },
    scraper: {
        flex: 0
    }
});
