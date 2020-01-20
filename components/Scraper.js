import { fs } from '../config.js';
import { AsyncStorage } from 'react-native';

const cheerio = require('react-native-cheerio');

var loyaltyCardNumberScraped = false;
var loyaltyCardNumber = '';

export default async function scraper() {
    const callback = async JSONString => {
        var parsedJSON = JSON.parse(JSONString); // Parse the JSON string.
        await getData(parsedJSON); // Gets needed data from the parsed JSON.
    };

    const getData = async parsedJSON => {
        var numberOfProducts = parsedJSON.bonus.lanes[0].items.length; // Determines the amount of products.
        var personalOffers = 0; // Keeps track of the amount of personal offers.

        // Counts how many of the amount of products are personal offers.
        for (var i = 1; i < numberOfProducts; i++) {
            if (parsedJSON.bonus.lanes[0].items[i].type == 'BonusSegment') {
                personalOffers++;
            };
        };
        
        console.log('>> personalOffers:', personalOffers);
        for (var i = 1; i <= personalOffers; i++) {
            // An array with the required information is created for each product.
            console.log('>> trying to store offer', i);
            await fs
                .collection('products')
                .doc()
                .set({
                    article_discount: parsedJSON.bonus.lanes[0].items[i].card.products[0].shield.text,
                    article_image: parsedJSON.bonus.lanes[0].items[i].card.products[0].images[1].url,
                    article_name: parsedJSON.bonus.lanes[0].items[i].title,
                    article_price: parsedJSON.bonus.lanes[0].items[i].card.products[0].price.now,
                    bonuskaart_number: loyaltyCardNumber,
                    weight_or_volume: parsedJSON.bonus.lanes[0].items[i].unitSize
                });
            console.log('>> stored offer', parsedJSON.bonus.lanes[0].items[i].title);
        };
    };

    console.log('>> scraper start', loyaltyCardNumberScraped, loyaltyCardNumber);
    try {
        // Scrape the loyalty page using fetch.
        let response = await fetch('https://www.ah.nl/mijn/dashboard/loyalty', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
            }
        });

        let html = await response.text();
        let $ = cheerio.load(html); // Loads the HTML.

        loyaltyCardNumber = $(
            '#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td'
        ).text(); // Selects the bonuskaart number from the HTML.
        await AsyncStorage.setItem('bonuskaart', loyaltyCardNumber)
        console.log(
            '>> got bonusnr:',
            loyaltyCardNumber,
            '::',
            $('#form1 > fieldset:nth-child(9) > div > table > tbody > tr:nth-child(6) > td').text()
        );

        loyaltyCardNumberScraped = true;

        console.log('dit wordt uitgevoerd');

        // Scrape the bonus page using fetch.
        response = await fetch('https://www.ah.nl/bonus', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15'
            }
        });

        html = await response.text();
        $ = cheerio.load(html); // Loads the HTML.

        var JSONString = $('body > script:nth-child(3)').html(); // Selects the JSON from the HTML.
        JSONString = JSONString.replace('window.__INITIAL_STATE__= JSON.parse("', '').replace('")', ''); // Replaces unnecessary parts.
        JSONString = JSONString.replace(/\\/g, ''); // Removes the \ from the JSON string.
        console.log('>> got offers.');

        await callback(JSONString); // Makes sure the JSON string can be parsed outside the JSON string.
    } catch (err) {
        console.error('ERROR in scarper:', err);
        throw err;
    };
};