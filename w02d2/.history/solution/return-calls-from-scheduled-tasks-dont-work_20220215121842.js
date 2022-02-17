
function myOutput(ex){
    console.log('here is my output:',ex);
}

const doLater = function(){
    let x = 5;
    x = x * x;
 //  return x; // this will not work
    myOutput(x);
}


console.log("monkeyfuzz",setTimeout(doLater,1000));


// this way of doing things... takes into consideration the fact that return values don't work.

// const fs = require('fs');
// fs.readFile('filename.txt','utf8',callback);


