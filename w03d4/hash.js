const bcrypt = require('bcrypt');

const plaintextPassword = 'abcd';


// bcrypt.genSalt(10, function(err, salt) {
//   bcrypt.hash(plaintextPassword, salt, function(err, hash) {
//     console.log('hash:',hash);
//   });
// });

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt', salt);
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    console.log('hash', hash);
  });

const hash = '$2b$10$mCv8/gsIB0Gm3idnss6no.TdAPJjat2NGqHag5k5o/zdVSjdKrQtu';


bcrypt.compare('abcd', hash)
  .then((result) => {
    console.log('do the passwords match?', result);
  });

