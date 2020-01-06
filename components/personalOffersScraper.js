import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const cheerio = require('react-native-cheerio');

export default class PersonalOffersScraper extends Component {
  constructor() {
    super()
  }

  render() {
    fetch('https://www.ah.nl/bonus', { // De pagina waar de fetch op wordt gedaan.
      method: 'GET',
      // Om ervoor te zorgen dat de standaard credentials niet mee worden genomen wordt deze op 'omit' gezet.
      credentials: 'omit',
      headers: {
        // Neemt de cookies mee zodat de persoonlijke aanbiedingen ook beschikbaar zijn.
        'Cookie': this.props.cookies,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
      }
    }).then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html) // Laad de HTML in.
        var JSONString = $('body > script:nth-child(3)').html() // Selecteert het stuk JSON uit de HTML.
        JSONString = JSONString.replace('window.__INITIAL_STATE__= JSON.parse("', '').replace('")', '');; // Vervangt de stukken die niet nodig zijn.
        JSONString = JSONString.replace(/\\/g, ''); // Haalt de \ uit de JSON string.

        callback(JSONString) // Zorgt ervoor dat de JSON string buiten de request om geparsed kan worden.
      })

    const callback = JSONString => {
      var parsedJSON = JSON.parse(JSONString) // Parsed de JSON string.
      getData(parsedJSON) // Haalt de benodigde data uit de geparsede JSON.
    }

    const getData = parsedJSON => {
      var array = [] // Maakt een array aan.
      var numberOfProducts = parsedJSON.bonus.lanes[0].items.length // Bepaald het aantal producten.

      for (var i = 1; i < numberOfProducts; i++) { // Per product wordt er een array aangemaakt met de benodigde informatie.
        array.push({
          productTitle: parsedJSON.bonus.lanes[0].items[i].title,
          discount: parsedJSON.bonus.lanes[0].items[i].card.products[0].shield.text,
          originalPrice: parsedJSON.bonus.lanes[0].items[i].card.products[0].price.was,
          newPrice: parsedJSON.bonus.lanes[0].items[i].card.products[0].price.now,
          productUnitSize: parsedJSON.bonus.lanes[0].items[i].card.products[0].text.value,
          image: parsedJSON.bonus.lanes[0].items[i].card.products[0].images[1].url,
          startDate: parsedJSON.bonus.lanes[0].items[i].card.products[0].discount.startDate,
          endDate: parsedJSON.bonus.lanes[0].items[i].card.products[0].discount.endDate
        })
      }

      console.log(array)
    }

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