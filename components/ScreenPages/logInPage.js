import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {Button} from 'react-native';
import Scraper from "../Scraper";

export default class LogInScreen extends Component {
    state = {
        webViewUrl: 'https://www.ah.nl/mijn/dashboard/loyalty',
        showWebView: true
    }

    constructor(props) {
        super(props);
    }

    sendData = (data) => {
        this.props.parentCallback(data);
    }

    onNavigationStateChange = (webViewState) => {
        const {url} = webViewState;
        if (url.includes('http')) {
            this.setState({webViewUrl: url})
        }
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

    render() {
      if (this.state.showWebView == true) {
        return (
            <React.Fragment>
                <WebView
                    source={{uri: this.state.webViewUrl}}
                    onNavigationStateChange={this.onNavigationStateChange}
                    onMessage={this.onMessage}
                    style={{flex: 1}}
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