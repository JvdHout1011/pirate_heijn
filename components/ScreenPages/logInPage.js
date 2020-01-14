import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class LogInScreen extends Component {
    constructor(props) {

        super(props)
        console.ignoredYellowBox =[ "Setting a timer"]
        YellowBox.ignoreWarnings([ "Setting a timer"])
    }

    state = {
        webViewUrl: 'https://www.ah.nl/mijn/dashboard/loyalty',
        showWebView: true
    }

    // Zorgt ervoor dat de state vanuit het child component veranderd kan worden.
    sendData = (data) => {
        this.props.parentCallback(data);
    }

    // Houdt bij welke url weergegeven wordt in de webview.
    onNavigationStateChange = (webViewState) => {
        const {url} = webViewState;
        if (url.includes('http')) {
            this.setState({webViewUrl: url})
        }
    }

    // Navigatie bar
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            title: 'Login bij AH',
            headerTintColor: 'white',
            headerLeft: null,
            headerRight: null,
            headerTitleStyle: {
                fontSize: 20,
            },
            headerStyle: {
                backgroundColor: '#00A0E2',
            },
        };
    };

    render() {
        if (this.state.showWebView == true) {
            return (
                <React.Fragment>
                    <WebView
                        source={{uri: this.state.webViewUrl}}
                        onNavigationStateChange={this.onNavigationStateChange}
                        style={{flex: 1}}
                        javaScriptEnabled
                        domStorageEnabled
                        thirdPartyCookiesEnabled
                        sharedCookiesEnabled
                        onLoadStart={() => {
                            if (this.state.webViewUrl.includes('execution')) {
                                // {this.setState({showWebView: false})}
                                // {this.sendData(true)}
                                console.log("send")
                            }
                        }}
                    />
                </React.Fragment>
            );
        } else {return(null)}
    }
}