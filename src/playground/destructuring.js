//Object destructuring

// const person = {
//     name: 'Leif',
//     age: 37,
//     location: {
//         city: 'Spring Hill',
//         temp: 99
//     }
// };

//  const { name, age } = person;

//  console.log(`My name is ${name} and i am ${age} years old`);

//  const { city = 'no-hometown', temp: temperature } = person.location
//  if(city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);

//  }

const book = {
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    publisher: {
        name: 'Harper'
    }
};
const { name: publisherName = 'self-published' } = book.publisher;

console.log(publisherName);


// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [ street, city, state = 'Unknown State'] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.65', '$2.75'];

const [beverage, , twoFitty, ] = item;

console.log(`A medium ${beverage} costs ${twoFitty}.`);