$( "data.js" ).load( "assignment2/index.html", function() {
  alert( "Load was performed." );
});

//What is the length of the "data" array (2 pts.)? 
data.length

//What is the fourth element of the array *hint: remember how indexing for arrays beings (2 pts.)
console.log(data[3])

//Using the array "map" functionality, create a variable "city_names" that has the name of each city (4 pts.)
var city_names = city.map();

//Using the array "map" functionality, create a variable "populations" that the population of each city (4 pts.)
var populations = city.map();

//Sort the data variable by median age (4 pts.)

function median(age) {
 
    age.sort( function(a,b) {return a - b;} );
 
    var half = Math.floor(values.length/2);
 
    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

data.sort();

//Based on this, what are the cities with the youngest/oldest median ages? (2 pts.)

 

//Write a function called "description" that takes in an object (one element from the data array) and constructs the following sentence (4 pts.):


//"The median age in " {city} " is " {median age}"

 

//Pass one of the data elements to your function and view the results

 

//Using the array filter functionality, create an array called "maleCities" that has the names of cities where there are more men than women (3 pts.)

 

//How many of the top 100 cities have more males than females?