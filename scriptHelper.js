// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}"> `
    
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
        return
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Enter in a valid input.")
        return
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Enter in a valid input.")
        return
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
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let pick = planets[Math.floor(Math.random()*planets.length)]
   return pick
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;