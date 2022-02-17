const start = Date.now();

               // "Look", 500,     getUp
function doAction(name, duration, nextAction){
  console.log(`Starting ${name}`);

  setTimeout( function(){
    console.log(`Ending ${name}`);
    if (nextAction) {
      nextAction();
    }
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
  doAction("Look",500, look);
};


//
// Get Up
//
const getUp = function(){
  doAction("Get Up",1500, walk);
};

//
// Walk
//
const walk = function(){
  doAction("Walk",5000,openTheDoor);
};


//
// openTheDoor
//
const openTheDoor = function(){
  doAction("Open The Door",2500,walkThroughTheDoor);
};


//
// walkThroughTheDoor
//
const walkThroughTheDoor = function(){
  doAction("Walk Through The Door",3500,null);
};


look();
getUp();

console.log("I am done being programmed.");


//
// The event loop cannot start until the main thread is finished.
//
