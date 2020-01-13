import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {Button} from 'react-native';
import Scraper from "./Scraper";

export default class CookieReceiver extends Component {
    state = {
        cookies: {},
        webViewUrl: '',
    }

    constructor(props) {
        super(props);

        this.webRef = React.createRef();
    }

    sendData = (cookies) => {
        this.props.parentCallback(cookies);
    }

    onNavigationStateChange = (webViewState) => {
        const {url} = webViewState;
        if (url.includes('http')) {
            this.setState({webViewUrl: url})
        }
    }

    // Splits, orders and saves all cookies to the state
    onMessage = (event) => {
        console.log(this.state.webViewUrl)

        // if(this.state.webViewUrl == "https://www.ah.nl/mijn/dashboard"){
        const {data} = event.nativeEvent;
        this.sendData("'" + data + "'")
        console.log(data);
        // } else {
        //   return;
        // }
    }

    // The Navigation bar
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

    fetchCookies = () => {
        // This will grab the cookies in the WebView.
        const jsToInject = 'window.ReactNativeWebView.postMessage(document.cookie)';
        this.webRef.injectJavaScript(jsToInject);
    };

    render() {
        return (
            <React.Fragment>
                <WebView
                    ref={ref => this.webRef = ref}
                    source={{uri: 'https://www.ah.nl/mijn/inloggen'}}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onMessage={this.onMessage}
                    // injectedJavaScript={jsCode}
                    style={{flex: 1}}
                    javaScriptEnabled
                    domStorageEnabled
                    // thirdPartyCookiesEnabled
                    // sharedCookiesEnabled
                    renderLoading={this.renderLoading}
                    startInLoadingState
                />
                <Button
                    title="Terug naar Pirate Heijn"
                    onPress={this.fetchCookies}
                />
            </React.Fragment>
        );
    }
}