const start = Date.now();

               // "Get Up",1500
function doAction(name, duration, nextAction){
  console.log(`Starting ${name}`);

  setTimeout( function(){
    console.log(`Ending ${name}`);
  }, duration ); 

}

// function sleepFor(sleepDuration) {
//   const nowObject = new Date();
// //  console.log("nowObject:",JSON.stringify(nowObject));
//   const now = nowObject.getTime();
//   while (new Date().getTime() < now + sleepDuration) {
//     /* do nothing */
//   }
// }

//
// Look
//
const look = function(){
  doAction("Look",500);
};


//
// Get Up
//
const getUp = function(){
  doAction("Get Up",1500);
};

//
// Walk
//
const walk = function(){
  doAction("Walk",5000);
};


//
// openTheDoor
//
const openTheDoor = function(){
  doAction("Open The Door",2500);
};


//
// walkThroughTheDoor
//
const walkThroughTheDoor = function(){
  doAction("Walk Through The Door",3500);
};


console.log("I am done being programmed.");


//
// The event loop cannot start until the main thread is finished.
//
