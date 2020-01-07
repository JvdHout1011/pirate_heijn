import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class LoginScreen extends Component {
  state = {
    cookies: {},
    webViewUrl: ''
  }

  sendData = (koekjes) => {
    this.props.parentCallback(koekjes);
  }

  onNavigationStateChange = (webViewState) => {
    const { url } = webViewState;
    if (url.includes('http')) {
      this.setState({ webViewUrl: url })
    }
  }

  // Splits, orders and saves all cookies to the state
  onMessage = (event) => {
    console.log("onMessage")
    // console.log(event)
    const { data } = event.nativeEvent;
    
    const cookies = data.split(';');
    // console.log(cookies)
    cookies.forEach((cookie) => {
      const c = cookie.trim().split('=');
      const newCookies = this.state.cookies;
      newCookies[c[0]] = c[1];
      this.setState({ cookies: data });
      // console.log(newCookies)
      this.sendData("'" + data + "'")
    });
    console.log(data)
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