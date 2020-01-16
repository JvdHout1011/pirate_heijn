import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import Scraper from '../Scraper';
import LogInWebView from '../LogInWebView';

export default class LogInScreen extends Component {
    constructor() {
        super()
        this.state = {
            isUserLoggedIn: false,
            goToNextPage: false
        }
    }
  static navigationOptions = {
    title: 'Veilig Inloggen',
    }

    callbackFunction = data => {
        this.setState({ isUserLoggedIn: data });
    };

  render() {
    console.log(this.state.isUserLoggedIn);
    if (this.state.isUserLoggedIn == false) {
      return (
        <View style={styles.container}>
          <View style={styles.logInWebView}>
            <LogInWebView parentCallback={this.callbackFunction} />
          </View>
        </View>
      );
    } else if (this.state.isUserLoggedIn == true) {
      return (
        <View style={styles.container}>
          <View style={styles.LogInWebView}>
            <Scraper />
            <WebView
              
              onLoadStart={() => this.props.navigation.navigate('Home')}
              onLoadEnd={() => this.props.navigation.navigate('Home')}
              onLoad={() => this.props.navigation.navigate('Home')}
              onMessage={() => this.props.navigation.navigate('Home')}
              onNavigationStateChange={() =>
                this.props.navigation.navigate('Home')
              }
              originWhitelist={['https://ah.nl*']}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  logInWebView: {
    flex: 1,
  },
  scraper: {
    flex: 0,
  },
});
