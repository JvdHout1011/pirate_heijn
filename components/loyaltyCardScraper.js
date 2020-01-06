import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const cheerio = require('react-native-cheerio');

export default class loyaltyCardScraper extends Component {
  constructor() {
    super()
  }

  render() {
    fetch('https://www.ah.nl/mijn/dashboard/loyalty?execution=e2s1', { // De pagina waar de fetch op wordt gedaan.
      method: 'GET',
      // Om ervoor te zorgen dat de standaard credentials niet mee worden genomen wordt deze op 'omit' gezet.
      credentials: 'omit',
      headers: {
        // Neemt de cookies mee zodat de persoonlijke aanbiedingen ook beschikbaar zijn.
        'Cookie': '__cfduid=d03ee1ac1db8a75b4ee011df91af171711576093039; cookies-accepted=1.6; SSLB=0; i18next=nl_NL; ahold_presumed_member_no=28914322_CHK5PSU0lOUZez4Ge2%2FT8wdeQ%3D%3D; dtCookie=7$BEB3EB4D7F2CF8A60ED3EF0C98D45DB7; JSESSIONID=A230BABCA5C0220FAFCDED2F0F5FFD65.ahws_8; ah_token_presumed=5f841f17-976c-421e-9d36-7bb052b82846.9f0f63a9-312b-45d4-bb16-185c8c1e7f33; JSESSIONID_myahnl=0016858C8D9F377B5C9077B2DD075B6B.myahnl_6; ah_token=bea0e379-0b18-41d4-a7b4-3cc84efa0e8d.a52a3ed7-1d2f-4585-98ed-ddbdb7d122cf; TS01c61a60=01919b9b648706774ebb6bdbda278b73c7ed9a11dd191915dd53cec554852568dcc9620c3b32b3433b349294fb1cd93f3af8e747e5c440f8143e6db735db32770b55e06a7a1fc13552b7d546db566d3cdf8020466718a0f8686ddd01eec683efe66c257a27bf42fcbe1c1fce4af41f265ac946876f449897ee697c5b6d63740f5a61dd130cdf048a56e676fa8e27f4fe250b02408c6ba04c233d44562860eafcb01c83a7bd; TS01c61a60_30=012197b278b77ca7101ef2d947f88515c57db524398f623061dd616ab0b420d295f98c52406e0427ba8116008fd41ffe5e99242e21',
        'User-Agent': 'Bonuskaart scraper'
      }
    }).then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html) // Laad de HTML in.
        var loyaltyCardNumber = $('#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td').text(); // Selecteert het bonuskaartnummer uit de HTML.
        
        console.log("Bonuskaartnummer: " + loyaltyCardNumber)
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