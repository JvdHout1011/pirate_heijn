import React, { Component } from 'react';
import {
  WebView,
} from 'react-native';

class LoginScreen extends Component {
  state = {
    cookies    : {},
    webViewUrl : ''
  }

  onNavigationStateChange = ( webViewState) => {
    const { url } = webViewState;

    // when WebView.onMessage called, there is not-http(s) url
    if(url.includes('http')) {
      this.setState({ webViewUrl: url })
    }
  }

  _checkNeededCookies = () => {
    const { cookies, webViewUrl} = this.state;
    let ahTokenValue = ''
    let cookieName = 'ah_token'

    console.log(ahTokenValue) 
      if (cookies[cookieName]) {
        alert(cookieName+"'s value = " + cookies[cookieName]);
        ahTokenValue = cookies[cookieName]
        console.log(ahTokenValue)
      }else{
        console.log("token not found")
      }
  }

  _onMessage = (event) => {
    
    const { data } = event.nativeEvent;
    const cookies  = data.split(';'); // `csrftoken=...; rur=...; mid=...; somethingelse=...`
    
    cookies.forEach((cookie) => {
      
      const c = cookie.trim().split('=');

      const new_cookies = this.state.cookies;
      new_cookies[c[0]] = c[1];
      
      this.setState({ cookies: new_cookies });
      console.log( ">>>>", new_cookies )
    });
    
    this._checkNeededCookies();
  }

  render() {
    const jsCode = "window.postMessage(document.cookie)"
    // let jsCode = "window.postMessage(document.cookie= 'login=; expires=Bla bla bla')"; // if you need to write some cookies, not sure if it goes to shared cookies, most probably no :)

    return (
      <WebView
        source={{ uri: 'https://www.ah.nl/mijn/inloggen' }}
        onNavigationStateChange={this.onNavigationStateChange}
        onMessage={this._onMessage}
        injectedJavaScript={jsCode}
        style={{ flex: 1 }}
        />
    );
  }
}

export default LoginScreen;