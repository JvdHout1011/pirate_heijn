import * as firebase from 'firebase';
import '@firebase/firestore';

let config = {
    apiKey: 'AIzaSyBZklqnYeX6kTQSxclJIrnEFrXfz3nFvFQ',
    authDomain: 'supercoolgrootproject.firebaseapp.com',
    databaseURL: 'https://supercoolgrootproject.firebaseio.com',
    projectId: 'supercoolgrootproject',
    storageBucket: 'supercoolgrootproject.appspot.com',
    messagingSenderId: '891217153878',
    appId: '1:891217153878:web:d8d728cfd8b1e460f590f7',
    measurementId: 'G-Z91GJW39DN'
};

try {
    const firebaseApp = firebase.initializeApp(config);
} catch (err) {
    if (!err.message.includes('already exists')) {
        throw err;
    }
}

export const fb = firebase;
export const fs = firebase.firestore();
