import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Button } from 'react-native';

class LoginScreen extends Component {
  state = {
    cookies: {},
    webViewUrl: ''
  }

  onNavigationStateChange = (webViewState) => {
    const { url } = webViewState;
    console.log("NavStateChange")
    // when WebView.onMessage called, there is not-http(s) url
    if (url.includes('http')) {
      this.setState({ webViewUrl: url })
    }
  }

  //   Checks for specified cookies from all saved cookies
    _checkNeededCookies = () => {
      const { cookies, webViewUrl } = this.state;
      let ahTokenValue = ''
      let cookieName = 'ah_token'
  
      console.log(ahTokenValue)
  
      if (cookies[cookieName]) {
        alert(cookieName + "'s value = " + cookies[cookieName]);
        ahTokenValue = cookies[cookieName]
        console.log(ahTokenValue)
      } else {
        console.log("token not found")
      }
    } 

  // Splits, orders and saves all cookies
  onMessage = (event) => {
    console.log("onMessage")
    console.log(event)
    const { data } = event.nativeEvent;
    const cookies = data.split(';');
    console.log(cookies)
    cookies.forEach((cookie) => {
      const c = cookie.trim().split('=');
      const new_cookies = this.state.cookies;
      new_cookies[c[0]] = c[1];

      this.setState({ cookies: new_cookies });
      console.log(">>>>", new_cookies)
    });

     this._checkNeededCookies();
  }

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
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('cookieMonster')}
        />
      </React.Fragment>
    );
  }
}

export default LoginScreen;
