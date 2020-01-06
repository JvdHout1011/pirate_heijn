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
        'Cookie': '__cfduid=d03ee1ac1db8a75b4ee011df91af171711576093039; cookies-accepted=1.6; SSLB=0; i18next=nl_NL; ahold_presumed_member_no=28914322_CHK5PSU0lOUZez4Ge2%2FT8wdeQ%3D%3D; dtCookie=7$BEB3EB4D7F2CF8A60ED3EF0C98D45DB7; JSESSIONID=A230BABCA5C0220FAFCDED2F0F5FFD65.ahws_8; JSESSIONID_myahnl=30D5609FDE97CCC34DFB0D6ADD3FEF33.myahnl_6; TS01c61a60_30=012197b27818331d4105e1f5fc1fb74f5c60485a5d8f623061dd616ab0b420d295f98c5240eee767d6148606b9ddf61b54ee7a746d; ah_token_presumed=5f841f17-976c-421e-9d36-7bb052b82846.9f0f63a9-312b-45d4-bb16-185c8c1e7f33; TS01c61a60=01919b9b646c807dd04da9fa52dbccde81b4056e1b7a3d91601cbdd89bd55c6903a3dbd852aa1381ecf3a1ca0dc5e9e690a9356a33c7d2332e28a6f82dd4c6a27d50209f14b3a44a12aad6e6fa46d941bdd0fd4a2200fbe2a48214e6f220489fc12856465dc2966372f6ff04b4e604185ab9bf309889da05e586bf5999b8d7d7aaf23efe28cb073985ad7f4a8e2f4b11b7105f088b94f63d92ae5c18bb9c25352194c248c1',
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