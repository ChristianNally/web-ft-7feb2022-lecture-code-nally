const start = Date.now();

               // "Look",500
function doAction(name, duration){
  console.log(`Starting ${name}`);

  setTimeout( function(){
    console.log(`Ending ${name}`);
  }, duration ); 

}

//
// Look
//

doAction("Look",500);


//
// Get Up
//

doAction("Get Up",1500);


//
// Walk
//

doAction("Walk",5000);


//
// openTheDoor
//

doAction("Open The Door",2500);


//
// walkThroughTheDoor
//
doAction("Walk Through The Door",3500);


console.log("I am done being programmed.");
