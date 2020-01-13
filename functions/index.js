const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const firestore = require("../node_modules/@firebase/firestore");

let config = {
	apiKey: "AIzaSyBZklqnYeX6kTQSxclJIrnEFrXfz3nFvFQ",
	authDomain: "supercoolgrootproject.firebaseapp.com",
	databaseURL: "https://supercoolgrootproject.firebaseio.com",
	projectId: "supercoolgrootproject",
	storageBucket: "supercoolgrootproject.appspot.com",
	messagingSenderId: "891217153878",
	appId: "1:891217153878:web:d8d728cfd8b1e460f590f7",
	measurementId: "G-Z91GJW39DN",
};
admin.initializeApp(functions.config().firebase);

let fs = admin.firestore();

try {
	const firebaseApp = admin.initializeApp(config);
} catch (err) {
	if (!err.message.includes("already exists")) {
		throw err;
	}
}

const jada = async () => {
    console.log("start van functie");
    const array = [];
    const test = fs.collection("products");
    const result = await test.get();
    console.log("data ophalen");
    result.then(result => {
        const documents = result.docs;
        documents.forEach(doc => {
            array.push(doc.data());
           console.log(doc.data());
         })   
        return array;
})
}
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.productsFunction = functions.https.onRequest((request, response) => {
 response.send("I told you.");
 jada();
 console.log("query succesfull")
});
