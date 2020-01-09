import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { fb, fs } from '../config.js';

export default class LoginScreen extends Component {
  state = {
    cookies: {},
    webViewUrl: ''
  }

  sendData = (koekjes) => {
    if(this.state.webViewUrl === "https://www.ah.nl/mijn/dashboard/"){
    this.props.parentCallback(koekjes);
  } else {
    return
  }
  }

  onNavigationStateChange = (webViewState) => {
    const { url } = webViewState;
    if (url.includes('http')) {
      this.setState({ webViewUrl: url })
      
    }
  }

  // Splits, orders and saves all cookies to the state
  onMessage = (event) => {
    if(this.state.webViewUrl === "https://www.ah.nl/mijn/dashboard/"){
    const { data } = event.nativeEvent;
    this.sendData("'" + data + "'")
    console.log(data)
  } else {
    return
  }
  }
  
  // The Navigation bar
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
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
    const jsCode = "window.ReactNativeWebView.postMessage(document.cookie)"
    // This will grab the cookies in the WebView.

    return (
      <React.Fragment>
        <WebView
          source={{ uri: 'https://www.ah.nl/mijn/inloggen' }}
          onNavigationStateChange={this.onNavigationStateChange}
          onMessage={this.onMessage}
          injectedJavaScript={jsCode}
          style={{ flex: 1 }}
          javaScriptEnabled
          domStorageEnabled
          thirdPartyCookiesEnabled
          sharedCookiesEnabled
        />
      </React.Fragment>
    );
  }
}