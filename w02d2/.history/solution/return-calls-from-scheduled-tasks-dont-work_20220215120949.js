
function myOutput(ex){
    console.log(ex);
}

const doLater = function(){
    let x = 5;
    x = x * x;
   return x; // this will not work
    // myOutput(x);
}

console.log("monkeyfuzz",setTimeout(doLater,1000));
