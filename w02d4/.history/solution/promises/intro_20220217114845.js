const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 4444);


console.log('pending promise:',promise);

// // Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 7 seconds later:',promise);
// },7000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('data:', data);
  }); // <--- that is just a function call. no magic there!
//   .then(() => {
//     console.log('it is alive!');
//   });

console.log('end of the main thread');
