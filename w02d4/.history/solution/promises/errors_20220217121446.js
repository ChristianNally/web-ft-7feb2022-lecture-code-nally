const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnRejectedPromise('one',1000)
  .catch((err) => {
    // throw err;
    console.log('different err:',err);
    return returnPromise('two',1000);
  })
  .then((data) => {
    console.log('data',data);
    return returnPromise('two',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('three',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('four',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('five',1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('six',1000);
  })
  .catch((err) => {
    // throw err;
    console.log('err:',err);
  });

  console.log('end of the main thread');
