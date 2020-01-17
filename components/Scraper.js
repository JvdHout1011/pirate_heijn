import React, { Component } from 'react';
import { fb, fs } from '../config.js';
import { withNavigation } from 'react-navigation';
const cheerio = require('react-native-cheerio');

export default class Scraper extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loyaltyCardNumberScraped: false,
        loyaltyCardNumber: ''
    };

    render() {
        if (!this.state.loyaltyCardNumberScraped) {
            fetch('https://www.ah.nl/mijn/dashboard/loyalty', {
                // De pagina waar de fetch op wordt gedaan.
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
                }
            })
                .then(response => response.text())
                .then(html => {
                    const $ = cheerio.load(html); // Laad de HTML in.
                    var loyaltyCardNumber = $(
                        '#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td'
                    ).text(); // Selecteert het bonuskaartnummer uit de HTML.
                    this.setState({ loyaltyCardNumber: loyaltyCardNumber });
                    AsyncStorage.setItem('bonuskaart', this.state.loyaltyCardNumber);

                    console.log('Bonuskaartnummer: ' + this.state.loyaltyCardNumber);
                });

            this.setState({ loyaltyCardNumberScraped: true });
        } else if (this.state.loyaltyCardNumberScraped) {
            fetch('https://www.ah.nl/bonus', {
                // De pagina waar de fetch op wordt gedaan.
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
                }
            })
                .then(response => response.text())
                .then(html => {
                    const $ = cheerio.load(html); // Laad de HTML in.
                    var JSONString = $('body > script:nth-child(3)').html(); // Selecteert het stuk JSON uit de HTML.
                    JSONString = JSONString.replace('window.__INITIAL_STATE__= JSON.parse("', '').replace(
                        '")',
                        ''
                    ); // Vervangt de stukken die niet nodig zijn.
                    JSONString = JSONString.replace(/\\/g, ''); // Haalt de \ uit de JSON string.

                    callback(JSONString); // Zorgt ervoor dat de JSON string buiten de request om geparsed kan worden.
                });
        }

        const callback = JSONString => {
            var parsedJSON = JSON.parse(JSONString); // Parsed de JSON string.
            getData(parsedJSON); // Haalt de benodigde data uit de geparsede JSON.
        };

        const getData = async parsedJSON => {
            var array = []; // Maakt een array aan.
            var numberOfProducts = parsedJSON.bonus.lanes[0].items.length; // Bepaald het aantal producten.
            var personalOffers = 0; // Houdt het aantal persoonlijke aanbiedingen bij.

            // Telt hoeveel van het aantal producten persoonlijke aanbiedingen zijn.
            for (var i = 1; i < numberOfProducts; i++) {
                if (parsedJSON.bonus.lanes[0].items[i].type == 'BonusSegment') {
                    personalOffers++;
                }
            }

            for (var i = 1; i <= personalOffers; i++) {
                // Per product wordt er een array aangemaakt met de benodigde informatie.
                await fs
                    .collection('products')
                    .doc()
                    .set({
                        article_discount: parsedJSON.bonus.lanes[0].items[i].card.products[0].shield.text,
                        article_image: parsedJSON.bonus.lanes[0].items[i].card.products[0].images[1].url,
                        article_name: parsedJSON.bonus.lanes[0].items[i].title,
                        article_price: parsedJSON.bonus.lanes[0].items[i].card.products[0].price.now,
                        bonuskaart_number: this.state.loyaltyCardNumber,
                        weight_or_volume: parsedJSON.bonus.lanes[0].items[i].unitSize
                    });
            }

            // startSetProduct = async () => {
            //   for(i=0;i<array.length;i++){
            //     const setProductQuery = fs.collection("products").doc();
            //     const result = await setProductQuery.set({
            //       article_discount: array[i].discount,
            //       article_image: array[i].image,
            //       article_name: array[i].productTitle,
            //       article_price: array[i].newPrice,
            //       bonuskaart_number: array[i].discountCardNumber,
            //       weight_or_volume: array[i].productUnitSize
            //     })
            //   }
            // }

            // console.log(array)
        };
        return null;
    }
}
