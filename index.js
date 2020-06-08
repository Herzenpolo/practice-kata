// Kyu 8 Messi Goals

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;



// kyu 8 trouble shooting 

function getPlanetName(id){
    let name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

  // kyu 7 greeting 

  var greet = function(name) {
    return `Hello ${name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()}!`
    };

// testing the length of an array against a function kyu 7

function one(arr, fun){
  // create a new array then test the length, if length > 1 then false
  return arr.filter(fun).length == 1;
  }

  // Kyu 7 Complete Series

  function completeSeries(arr) {
    // write your code here
    let max = arr.reduce((a,b) => Math.max(a,b)) 
    let min = arr.reduce((a,b) => Math.min(a,b))
    
    let arr2 = arr.filter((a,b) => arr.indexOf(a) === b)
  
  
  if(arr2.length === arr.length) {
    let arr3 = []
    for (let i = 0; i <= max; i++) {
    arr3.push(i)
  }
    return arr3
  } else {
   return [0]
  }
  
  }