/**** VARIABLE SCOPE: PRACTICE ****/

/*
    Practice managing variable visibility and preventing 
    scope-related reference errors.
*/

/** EXERCISE 1: THE GLOBAL BEACON **/

// TODO: Declare a global constant on the line below named
const STATION_ID = "Tycho";
// 'STATION_ID' and set it to "Tycho".

function broadcastBeacon() {
	console.log(`Broadcasting from: ${STATION_ID}`);// TODO: Inside this function, log `Broadcasting from: ${STATION_ID}`.
}

// TODO: Run the program to verify the scope is valid.
broadcastBeacon();

/** EXERCISE 2: ISOLATING RADIATION **/

function reactorRoom() {
	let radiationLevel = "CRITICAL";
	console.log(`Inside reactor room: ${radiationLevel}`);
}

reactorRoom();

/*
    TODO: Uncomment the line below and run the script. 
    Observe the error, then comment it out again to fix the program.
*/// This would cause an error because radiationLevel is declared inside reactorRoom()
// and cannot be accessed outside of that function.
// console.log("Bridge check: " + radiationLevel);

/** EXERCISE 3: LOOP SHADOWS **/

let sensorSectors = ["A", "B", "C"];

for (let i = 0; i < sensorSectors.length; i++) {
	let sectorMessage = `Scanning Sector ${sensorSectors[i]}`;
	console.log(sectorMessage);
}

/*
    TODO: Why will the line below crash the program? 
    Answer in a comment, then make sure the code remains commented out.
*/// This would crash because sectorMessage is declared with let inside the for loop,
// so it only exists inside that block.
// console.log(sectorMessage);

/** EXERCISE 4: SCOPE MIXER **/

let totalWaterReserves = 500; // Global variable (Metric Tons)

function consumeWater(amountNeeded) {
	let standardLossFactor = 1.05;

	// TODO: Create a variable, finalDeduction, to store
	// the calculation of the amount needed multiplied by
	// the standard loss factor
	let finalDeduction = amountNeeded * standardLossFactor;

	// TODO: Modify the global variable totalWaterReserves by
	// subtracting the final deduction
	totalWaterReserves = totalWaterReserves - finalDeduction;
}

consumeWater(100);

// TODO: Print a sentence that verifies the new value of totalWaterReserves using a template literal
console.log(`Total water resverves remaining: ${totalWaterReserves}`);
