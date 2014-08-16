//What is the length of the "data" array (2 pts.)? =100
console.log('the length of my data is ' + data.length)

//What is the fourth element of the array *hint: remember how indexing for arrays beings (2 pts.) = Object {city: "Vancouver", pop: "161,791", age: "35.9", males: "78,884", females: "82,907"} 
console.log(data[3]) 

//Using the array "map" functionality, create a variable "city_names" that has the name of each city (4 pts.)
var city_names = data.map(function(d) {return d.city});
console.log(city_names)

//Using the array "map" functionality, create a variable "populations" that the population of each city (4 pts.)
var populations = data.map(function(d) {return d.pop});
console.log(populations)

//Sort the data variable by median age (4 pts.)

data.sort(function(a,b) {return Number(a.age) > Number(b.age)});

//Based on this, what are the cities with the youngest/oldest median ages? (2 pts.) = Seattle,Spokane,Tacoma,Vancouver,Bellevue e.t.c. though I'm not sure if this really works seems to be the same as the earlier cities..

console.log("The cities with the youngest median age is " + city_names)

//Write a function called "description" that takes in an object (one element from the data array) and constructs the following sentence (4 pts.):


//"The median age in " {city} " is " {median age}"

 var description = function (city) {
 
          return "The median age in " + city.city + " is " + city.age + " years "
}


//Pass one of the data elements to your function and view the results: The median age in  Bellingham is 31.3 

console.log(description (data[11]))

//Using the array filter functionality, create an array called "maleCities" that has the names of cities where there are more men than women (3 pts.)
var maleCities = data.filter(function(d) {return d.males>d.females});


//How many of the top 100 cities have more males than females? = 29
console.log(maleCities.length)
	