import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:1004486292577:web:534b083b92526c6cbae620",
    measurementId: "G-2H6B7D9VF5"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

  
// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 1095,
//     createdAt: 203848593
// });




// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Redux'
// });




// const onValueChange = database.ref().on('value', (snapshot)  => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error fetching the daters', e);
// });


// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
//     });

//   database.ref().set({
//     name: 'Leif Tukums',
//     age: 37,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Tampa',
//         country: 'USA'
//     }
//   }).then(()=> {
//     console.log('data is saved!');
//   }).catch((e) => {
//     console.log('This failed', e);
//   });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
    
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data was removed');
//     }).catch((e) => {
//         console.log('did not remove data');
//     });






