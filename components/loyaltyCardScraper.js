import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const cheerio = require('react-native-cheerio');

export default class LoyaltyCardScraper extends Component {
  constructor() {
    super()
  }

  render() {
    fetch('https://www.ah.nl/mijn/dashboard/loyalty', { // De pagina waar de fetch op wordt gedaan.
      method: 'GET',
      // Om ervoor te zorgen dat de standaard credentials niet mee worden genomen wordt deze op 'omit' gezet.
      credentials: 'omit',
      headers: {
        // Neemt de cookies mee zodat de persoonlijke aanbiedingen ook beschikbaar zijn.
        'Cookie': this.props.cookies,
        'User-Agent': 'Bonuskaart scraper'
      }
    }).then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html) // Laad de HTML in.
        var loyaltyCardNumber = $('#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td').text(); // Selecteert het bonuskaartnummer uit de HTML.
        
        console.log("Bonuskaartnummer: " + loyaltyCardNumber)
        console.log(this.props.cookies)
    })
    
    return (
      <View style={styles.container}>
        {/* <Text>Hello, world! [{testResult}]</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});