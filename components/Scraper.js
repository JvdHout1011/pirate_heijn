import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const cheerio = require('react-native-cheerio');

export default class Scraper extends Component {
  constructor() {
    super()
  }

  render(){
    var loyaltyCardNumber

    fetch('https://www.ah.nl/mijn/dashboard/loyalty', { // De pagina waar de fetch op wordt gedaan.
      method: 'GET',
      // Om ervoor te zorgen dat de standaard credentials niet mee worden genomen wordt deze op 'omit' gezet.
      credentials: 'same-origin',
      headers: {
        // Neemt de cookies mee zodat de persoonlijke aanbiedingen ook beschikbaar zijn.
        // 'Cookie': 'ah_token=6f76a82f-96d5-4570-b36a-3bd5d5781c96.3d56d5e8-5c2a-411f-91ed-4998757d46c7; ah_token_presumed=32653317-1dce-48b7-9385-7154763607b3.233b66a7-96de-4590-909a-85d92eaaee33; JSESSIONID_myahnl=79850265AAFEF8FF151B0B3A9FA935B7.myahnl_4',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
      }
    }).then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html) // Laad de HTML in.
        loyaltyCardNumber = $('#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td').text(); // Selecteert het bonuskaartnummer uit de HTML.
        
        console.log("Bonuskaartnummer: " + loyaltyCardNumber)
    })

    fetch('https://www.ah.nl/bonus', { // De pagina waar de fetch op wordt gedaan.
      method: 'GET',
      // Om ervoor te zorgen dat de standaard credentials niet mee worden genomen wordt deze op 'omit' gezet.
      credentials: 'same-origin',
      headers: {
        // Neemt de cookies mee zodat de persoonlijke aanbiedingen ook beschikbaar zijn.
        // 'Cookie': this.props.cookies,
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
      var personalOffers = 0 // Houdt het aantal persoonlijke aanbiedingen bij.

      // Telt hoeveel van het aantal producten persoonlijke aanbiedingen zijn.
      for(var i = 1; i < numberOfProducts; i++){
        if(parsedJSON.bonus.lanes[0].items[i].type == "BonusSegment") {
          personalOffers++
        }
      }

      for(var i = 1; i <= personalOffers ; i++) { // Per product wordt er een array aangemaakt met de benodigde informatie.
          array.push({
            discountCardNumber: loyaltyCardNumber,
            productTitle: parsedJSON.bonus.lanes[0].items[i].title,
            productTitleLowerCase: parsedJSON.bonus.lanes[0].items[i].title.toLowerCase(),
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

    return(null)
  }
}