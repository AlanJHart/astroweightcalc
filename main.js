var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
var planet = planets;

var planetMass = planet;
var weight;

const button = document.querySelector('button');
// button.addEventListener("calculate-button", calculateWeight(userWeight, planet));

 for(var i = 0, l = planets.length; i < planets.length; i++) {
   var planetName = document.createElement("option");
   document.getElementById("planets").appendChild(planetName).textContent 
   = planets[i][0];
}

var planetWeight = planets[planets.indexOf(planetName)];

function handleClickEvent() {
    var userWeight = document.getElementById("user-weight").value;
    var planet = document.getElementById("planets").value;
    var planetName = planet;

    var planetMass = 1;
    for(index in planets) {
        if (planets[index][0] == planetName)  {
        planetMass = planets[index][1];
        }
    }

    var result = planetMass * userWeight;
    let newWeight = document.createTextNode("If you were on " + planetName + ", you would weigh " + result + "lbs!");
    document.getElementById("output").appendChild(newWeight);
};

button.addEventListener("click", () => {
    if (output.hasChildNodes()) {
      output.removeChild(output.childNodes[0]);
    }
    handleClickEvent();
});

 function calculateWeight(userWeight, planetName) {
    // 2. Write the code to return the correct weight
    // var planetMass = 1;
    // for(index in planets) {
    //     console.log(index);
    //     console.log(planets[index][0]);
    //     console.log(planetName);
    //     if (planets[index][0] == planetName)  {
    //     planetMass = planets[index][1];
    //     console.log(planetMass);
    //     }
    // }
    return result;
 }
var result = calculateWeight(weight, planetName);

  
  