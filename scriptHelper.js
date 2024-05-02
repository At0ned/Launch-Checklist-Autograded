// Write your helper functions here!

require('cross-fetch/polyfill');
/*Make an alert all fields are required

scriptHelper => validateInput()
Check valid info was passed in for each field > easily converted to the correct data type
-the pilot and co-pilot names should be strings
-fuel level and cargo mass should be numbers
-should take in string as a parameter and return "Empty", "Not a Number" or "is a Number" as valid.

use validateInput() to complete formSubmission()

formSubmission()
-takes a document as a parameter, and strings representing the pilot, co-pilot, fuel level, and cargo mass
-the document parameter for your HTML document, update the shuttle requirements.
-make the call for formSubmission at the right time in script.js.

Update shuttle requirements
-the div and id faultyitems should be updated if something is not ready for launch
-using template literals, update the li elements pilotStatus and copilotStatus to include their names

-If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible 
with an updated fuel status stating that there is not enough fuel for the journey. 
The text of the h2 element, launchStatus, should also change to “Shuttle not ready for launch” and the color should change to red.

-If the user submits a cargo mass that is too large (more than 10,000 kilograms), 
change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. 
The text of launchStatus should also change to “Shuttle not ready for launch” and the color should change to red.

-If the shuttle is ready to launch, change the text of launchStatus to green and display “Shuttle is ready for launch”.

*/

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";

    } else if (Number(testInput)) {
        return "Is a Number";
    }

 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
// grab the id faultyitems, get to the li id and update with something.innerHTML

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel)  === "Empty" || validateInput(cargoLevel)  === "Empty") {
        window.alert("All fields are required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Enter in a valid input.")
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Enter in a valid input.")
    } 

    let launchStatus = document.getElementById("launchStatus")

    let pilotStatus = document.getElementById("pilotStatus")
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
   
    let copilotStatus = document.getElementById("copilotStatus")
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (Number(fuelLevel) >= 10000 && Number(cargoLevel) < 10000) {
    
        launchStatus.innerHTML = `Shuttle is Ready for Launch`
        launchStatus.style.color =  "green";
        list.style.visibility = "visible";
    }
  

    if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
    
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus.style.color =  "red";
        list.style.visibility = "visible";
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        list.style.visibility = "visible";

    }
    
    if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`
    
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus.style.color =  "red";
        list.style.visibility = "visibile";
    } else {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`
        list.style.visibility = "visibile";
    }
        
 
 };
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;