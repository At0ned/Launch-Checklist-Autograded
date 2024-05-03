// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {
    let pilot = document.querySelector("input[name=pilotName]")
    let copilot = document.querySelector("input[name=copilotName]")
    let fuelLevel = document.querySelector("input[name=fuelLevel]")
    let cargoLevel = document.querySelector("input[name=cargoMass]")
    let list = document.getElementById("faultyItems");
   

    let submitButton = document.getElementById("formSubmit")
    submitButton.addEventListener('click', function() {
    event.preventDefault()
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
   
    })
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(listedPlanets)
       console.log(pickPlanet(listedPlanets))
       addDestinationInfo(document, listedPlanets.name, listedPlanets.diameter, listedPlanets.star, listedPlanets.distance, listedPlanets.moons, listedPlanets.imageUrl)
    })
    
 });