const start = Date.now();

function sleepFor(sleepDuration) {
  const nowObject = new Date();
//  console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}


//
// Look
//

console.log("Look");
sleepFor(500);

//
// Get Up
//

console.log("Get Up");
sleepFor(1500);

//
// Walk
//

console.log("Walk");
sleepFor(5000);

//
// openTheDoor
//

console.log("Open The Door");
sleepFor(2500);

//
// walkThroughTheDoor
//
sleepFor(3500);

console.log("Walk Through The Door");


console.log("I am done being programmed.");
