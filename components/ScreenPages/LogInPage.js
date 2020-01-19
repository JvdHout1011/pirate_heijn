import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import LogInWebView from '../LogInWebView';
import scraper from '../Scraper';

export default class LogInScreen extends Component {
    static navigationOptions = {
        title: 'Inloggen'
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logInWebView}>
                    <LogInWebView parentCallback={this.callbackFunction} />
                </View>
            </View>
        );
    };
};

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
