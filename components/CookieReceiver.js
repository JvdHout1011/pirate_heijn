import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {Button} from 'react-native';
import Scraper from "./Scraper";

export default class CookieReceiver extends Component {
    state = {
        // cookies: {},
        webViewUrl: 'https://www.ah.nl/mijn/dashboard/loyalty',
        showWebView: true
    }

    constructor(props) {
        super(props);
        // this.webRef = React.createRef();
    }

    // sendData = (cookies) => {
    //     this.props.parentCallback(cookies);
    // }

    sendData = (data) => {
        this.props.parentCallback(data);
    }

    onNavigationStateChange = (webViewState) => {
        const {url} = webViewState;
        if (url.includes('http')) {
            this.setState({webViewUrl: url})
        }
    }

    // Splits,. orders and saves all cookies to the state
    // onMessage = (event) => {
    //     const {data} = event.nativeEvent;
    //     this.sendData("'" + data + "'")
    //     console.log(data);
    // }

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

    render() {
      // const jsCode = 'window.ReactNativeWebView.postMessage(document.cookie)'
      if (this.state.showWebView == true) {
        return (
            <React.Fragment>
                <WebView
                    // ref={ref => this.webRef = ref}
                    source={{uri: this.state.webViewUrl}}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onMessage={this.onMessage}
                    style={{flex: 1}}
                    // injectedJavaScript={jsCode}
                    javaScriptEnabled
                    domStorageEnabled
                    thirdPartyCookiesEnabled
                    sharedCookiesEnabled
                    onLoadStart={
                      () => {if (this.state.webViewUrl.includes('execution')) 
                              // {this.setState({showWebView: false})}
                              {this.sendData(true)}
                              console.log("send")
                            }
                    }
                />
            </React.Fragment>
        );
      } else {return(null)}
    }
}