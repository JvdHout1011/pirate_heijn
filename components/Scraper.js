import React, { Component } from 'react';

const cheerio = require('react-native-cheerio');

export default class Scraper extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    loyaltyCardNumberScraped: false,
    loyaltyCardNumber: ''
  }

  render(){
    if (this.state.loyaltyCardNumberScraped == false) {
      fetch('https://www.ah.nl/mijn/dashboard/loyalty', { // De pagina waar de fetch op wordt gedaan.
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
        }
      }).then((response) => response.text())
        .then((html) => {
          const $ = cheerio.load(html) // Laad de HTML in.
          var loyaltyCardNumber = $('#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td').text(); // Selecteert het bonuskaartnummer uit de HTML.
          this.setState({loyaltyCardNumber: loyaltyCardNumber})

          console.log("Bonuskaartnummer: " + this.state.loyaltyCardNumber)
      })

      this.setState({loyaltyCardNumberScraped: true})
    } else if (this.state.loyaltyCardNumberScraped == true) {
        fetch('https://www.ah.nl/bonus', { // De pagina waar de fetch op wordt gedaan.
          method: 'GET',
          credentials: 'same-origin',
          headers: {
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
    }

    const callback = JSONString => {
      var parsedJSON = JSON.parse(JSONString) // Parsed de JSON string.
      getData(parsedJSON) // Haalt de benodigde data uit de geparsede JSON.
    }

    const getData = parsedJSON => {
      var array = [] // Maakt een array aan.
      var numberOfProducts = parsedJSON.bonus.lanes[0].items.length // Bepaald het aantal producten.
      var personalOffers = 0 // Houdt het aantal persoonlijke aanbiedingen bij.

      // Telt hoeveel van het aantal producten persoonlijke aanbiedingen zijn.
      for (var i = 1; i < numberOfProducts; i++) {
        if(parsedJSON.bonus.lanes[0].items[i].type == "BonusSegment") {
          personalOffers++
        }
      }

      for (var i = 1; i <= personalOffers ; i++) { // Per product wordt er een array aangemaakt met de benodigde informatie.
          array.push({
            discountCardNumber: this.state.loyaltyCardNumber,
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