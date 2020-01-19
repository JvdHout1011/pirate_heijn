import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import scraper from './Scraper';

class LogInScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        webViewUrl: 'https://www.ah.nl/mijn/dashboard/loyalty',
        showWebView: true,
        isLoggedIn: false
    };

    // Makes sure the state can be changed from the child component.
    // sendData = isLoggedIn => {
    //     this.props.parentCallback(isLoggedIn);
    // };

    scrapeItems = () => {
        AsyncStorage.getItem('auth_cookie').then(value => {
            if (
              value == '' ||
              value.length == 0 ||
              value == null ||
              value == undefined
            ) {scraper()
                } else {
                    AsyncStorage.clear()
                    scraper()
                }
        })
    }
            
   

    // Keeps track of which url is shown in the webview.
    onNavigationStateChange = webViewState => {
        const { url } = webViewState;
        if (url.includes('http')) {
            this.setState({ webViewUrl: url });
        }
    };

    // Navigation bar
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Login bij AH',
            headerTintColor: 'white',
            headerLeft: null,
            headerRight: null,
            headerTitleStyle: {
                fontSize: 20
            },
            headerStyle: {
                backgroundColor: '#00A0E2'
            }
        };
    };

    render() {
        if (this.state.showWebView == true) {
            return (
                <React.Fragment>
                    <WebView
                        source={{ uri: this.state.webViewUrl }}
                        onNavigationStateChange={this.onNavigationStateChange}
                        style={{ flex: 1 }}
                        javaScriptEnabled
                        domStorageEnabled
                        thirdPartyCookiesEnabled
                        sharedCookiesEnabled
                        onLoadStart={async () => {
                            if (this.state.webViewUrl.includes('execution')) {
                                this.setState({ showWebView: false });
                                this.scrapeItems();
                                this.props.navigation.navigate('Home');
                            }
                        }}
                    />
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}

export default withNavigation(LogInScreen);