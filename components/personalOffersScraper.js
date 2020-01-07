import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const cheerio = require('react-native-cheerio');

export default class personalOffersScraper extends Component {
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
        'Cookie': 'ga=GA1.2.1403202154.1505910969; rxVisitor=153615677345063U6KJ4A74A2PD0R1JMNCQ73RHE56MV3; cookies-accepted=1.8; SSLB=1; __cfduid=dbba409289968ca941f6e484722183f201576229332; _gcl_au=1.1.1152664975.1576229335; Pastease.passive.activated.nKhwRH8veU46n3G=0; Pastease.passive.chance.nKhwRH8veU46n3G=1; __gads=ID=7412e205aa69cd37:T=1576238539:S=ALNI_MYViFoT_chTrqv2zfz24uDYN-5Zew; _gac_UA-89331604-2=1.1576840673.CjwKCAiAHvBRACEiwAbViuU0WOxbjKIn974kAivIZRQvqWp_591E-hwcypbMNF36VmnmND0nCwPRoCsfMQAvD_BwE; _gac_UA-89331604-40=1.1576840674.CjwKCAiA_HvBRACEiwAbViuU0WOxbjKIn974kAivIZRQvqWp_591E-hwcypbMNF36VmnmND0nCwPRoCsfMQAvD_BwE; _gid=GA1.2.108405934.1578304793; cookie-consent={%22date%22:%226-1-2020%22%2C%22version%22:%222.0%22%2C%22gtmContainerVersion%22:%22532%22%2C%22consent%22:%22yes%22%2C%22social%22:%222.0%22%2C%22ad%22:%222.0%22}; i18next=nl_NL; ah_token=ab038d7e-9d25-4b30-8b52-3792075f085c.869bbee1-0501-4c23-b18f-eae9c4fc197a; ah_token_presumed=b094c894-df2f-4268-9604-2f9a07d145b6.a80f0560-d15e-4b66-b460-20eb6000863a; JSESSIONID=7C47D93AF19FD860A7DC748D9C9DE7D4.ahws_8; uuid=23397210-1896-49D6-AF68-62DA1FAB8CE5; ahold_presumed_member_no=28884414_CHKVIcQVK0JICQwMOqL1mQFuw%3D%3D; JSESSIONID_myahnl=5C427B75B5FBADC95007E95C9AD7F4FB.myahnl_4; SSID=CADTlR0cACgAAACTAHVcXXBCAJMAdVwTAAAAAAAAAAAArkIUXgBUmiEEAAEUWwAArkIUXgEASwUAAQ9rAACuQhReAQAUAwAACAMAAC4EAACDBAAAkAUAAIsFAABmBQAAvwUAAL4FAAC9BQAA; SSSC=4.G6662231855129063517.19|1057.23316:1355.27407; SSRT=80wUXgADAA; _gat_initialTracker=1; _gat_mainTracker=1; dtSa=-; SSPV=xW0AAAAAABsANQAAAAAAAAAAABMAAAAAAAAAAAAA; TS01c61a60=01919b9b64db74679ef9634ae037ab28e375c65148d38b2e66d2635b2b05facb275531be638fca036163da04292755db384bd45e28872c8a49f303858d979b4d79bfa5421a6dd35f834948dd343c2986ea995968740e3abbdabf5695ae84636a891aebda12ca9862587c9ca8fea223a080af8df67cf6e5fa280000dc1b56380dacfbaaa504004d987eeeffe5ee18e654cd7b08803aef408e848bfc28785dbecbfe152a15ff19751b7fc9aeccbeb7263e02da530c1de0895ffe3164ff08a0dfd45b9dd32744bafd68ed855567507e490877252ae854ac1561912e5e9b67cac508aa50a2646a62b8209edec22da58c7c586f194ad3ad; dtPC=3$388729381_580h-vDWULKEKXBPYMHOXPLCSKVGQMYTQAWCVK; rxvt=1578390543856|1578385083528; dtLatC=1; dtCookie=3$2KU3ATGU9DSF2GP831BGSVKATNI5IRNJ|4d9542759f321531|1|25f248ef09bec944|1',
        'User-Agent': 'Persoonlijke aanbiedingen scraper'
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
      var numberOfProducts = parsedJSON.bonus.lanes[0].items[0].title[8] // Bepaald het aantal producten.
      // var numberOfProducts = parsedJSON.bonus.lanes[0].items.length
      // var counter = 0

      // for(var i = 1; i < numberOfProducts; i++){
      //   if(parsedJSON.bonus.lanes[0].items[i].label.text == "Persoonlijke Bonus") {
      //     counter++
      //     console.log(counter)
      //   } 
      //   if(counter == 6) {
      //     continue
      //   }
      // }

      for(var i = 1; i <= numberOfProducts ; i++) { // Per product wordt er een array aangemaakt met de benodigde informatie.
          array.push({
            productTitle: parsedJSON.bonus.lanes[0].items[i].title,
            discount: parsedJSON.bonus.lanes[0].items[i].card.products[0].shield.text,
            originalPrice: parsedJSON.bonus.lanes[0].items[i].card.products[0].price.was,
            newPrice: parsedJSON.bonus.lanes[0].items[i].card.products[0].price.now,
            productUnitSize: parsedJSON.bonus.lanes[0].items[i].unitSize,
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