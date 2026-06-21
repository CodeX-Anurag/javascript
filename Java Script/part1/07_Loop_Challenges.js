/*
1. Write a `while` loop that calculates the sum of all
numbers from 1 to 5 and stores the result in a variable
named `sum`.
*/
    
    let sum = 0;
    let i = 1;
    while (i <= 5) {
      sum += i;
      i++;
    }
    console.log(sum);

/*
2. Write a `while` loop that counts down from 5 to 1 and
stores the numbers in an array named `countdown`.
*/
    
    let countdown = [];
    let j = 5;
    while (j >= 1) {
      countdown.push(j);
      j--;
    }
    console.log(countdown);
    
/*
3. Write a `do while` loop that prompts a user to enter
their favorite tea type until they enter `"stop"`.
Store each tea type in an array named `teaCollection`.
*/

/*
    let teaCollection = [];
    let tea 
    do{
           tea =  prompt(`Enter your favourite tea ("stop"to finish)`)
           if (tea !== "Stop"){
              teaCollection.push(tea);
           }
    }while(tea !== "Stop");
        console.log(teaCollection);
      */
//  ! node js not support so go to browser and run then

/*
4. Write a `do while` loop that adds numbers from 1 to 3
and stores the result in a variable named `total`.
*/

  let total = [];
  let add = 0;
  let k = 1;
  do {
    add += k;
    k++;
    total.push(add);
  } while (k <= 3);
  console.log(total);

/*
5. Write a `for` loop that multiplies each element in the
array `[2, 4, 6]` by 2 and stores the results in a new
array named `multipliedNumbers`.
 */
 
 let multipliedNumbers = [];
 let arr = [2, 4, 6];
 
for (l = 0; l < arr.length; l++) {
  multipliedNumbers.push(arr[l] * 2);
  /* arr2 =arr[l]*2 ;
        multipliedNumber.push(arr2);
        */
}
console.log(multipliedNumbers);

/*
6. Write a `for` loop that lists all the cities in the
array `["Paris", "New York", "Tokyo", "London"]` and
stores each city in a new array named `cityList`.
*/

let cityList = [];
let arr_1 = ["Paris", "New York", "Tokyo", "London"];
let n = arr_1.length;

for (let m = 0; m < n; m++) {
  cityList.push(arr_1[m]);
}
console.log(cityList);


/*
1. Write a `for` loop that loops through the array
   ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai".
   Store all teas before "chai" in a new array named  `selectedTeas`.
   */
   
   let teas = ["green tea", "black tea", "chai", "oolong tea"];
   let selectedTeas = [];
   
   for (i = 0; i < teas.length; i++) {
     if (teas[i] === "chai") {
       break;
     }
     selectedTeas.push(teas[i]);
   }
   console.log(selectedTeas);


/*
2. Write a `for` loop that loops through the array
    ["London", "New York", "Paris", "Berlin"] and skips  "Paris"
    Store the other cities in a new array named `visitedCities`.
    */
    
    let cities = ["London", "New York", "Paris", "Berlin"];
    let visitedCities = [];
    
    for (j = 0; j < cities.length; j++) {
      if (cities[j] === "Paris") {
        continue;
      }
      visitedCities.push(cities[j]);
    }
    console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
  Store the numbers before `4` in an array named `smallNumbers`.
 */
    
    let array = [1, 2, 3, 4, 5];
    let smallNumbers = [];
    
    for (let num of array) {
      /* for...of point karta hai element ko one by one , and JavaScript automatically manages the iterator for us. We     don't need to write the iterator (i).*/
      if (num === 4) {
        break;
      }
    
      smallNumbers.push(num);
    }
     console.log(smallNumbers);

/*
4. Use a `for-of` loop to iterate through the array
  ["chai", "green tea", "herbal tea", "black tea"] and  skip `"herbal tea"`.
  Store the other teas in an array named `preferredTeas`.
  */

    let tea = ["chai", "green tea", "herbal tea", "black tea"];
    let preferredTeas = [];
    
    for (const manyteas of tea) {
      if (manyteas === "herbal tea") {
        continue;
      }
      preferredTeas.push(manyteas);
    }
    console.log(preferredTeas);
    
    
    
    
/*
5. Use a `for-in` loop to loop through an object containing city populations.

   Stop the loop when the population of "Berlin" is found and store all previous cities' newcity_populations in a
   new object named `cityPopulations`.
   
   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
 };  */
    
    let citiesPopulation = {
      London: 8900000,
      "New York": 8400000,
      Paris: 2200000,
      Berlin: 3500000,
    };
    
    let Newcity_Populations = {};
    
    for (let city in citiesPopulation) {
      if (city === "Berlin") {
        break;
      }
    
      Newcity_Populations[city] = citiesPopulation[city];
    }
    console.log(Newcity_Populations);
    
/*
6. Use a `for-in` loop to loop through an object containing city populations.
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/
    
    let worldCities = {
      Sydney: 5000000,
      Tokyo: 9000000,
      Berlin: 3500000,
      Paris: 2200000,
    };
    
    let largeCities = [];
    
    for (const city in worldCities) {
      if (worldCities[city] < 3000000) {
        //for  accesing the value
        continue;
      }
      largeCities[city] = worldCities[city];
    }
    console.log(largeCities);




/*
7. Write a `forEach` loop that iterates through the array
["earl grey", "green tea", "chai", "oolong tea"].

Stop the loop when "chai" is found, and store all
previous tea types in an array named `availableTeas`.
*/

    let arr_teas = ["earl grey", "green tea", "chai", "oolong tea"];
    let availableTeas = [];
    
    arr_teas.forEach(function (tea) {
      if (tea === "chai") {
        return;
      }
    
      availableTeas.push(tea);
    });
    console.log(availableTeas);
   
    


/*
8. Write a `forEach` loop that iterates through the array
["Berlin", "Tokyo", "Sydney", "Paris"].

Skip "Sydney" and store the other cities in a new
array named `traveledCities`.
*/

    let arr_cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
    let traveledCities = [];
    
    arr_cities.forEach(function (city) {
      if (city === "Sydney") {
        return;
      }
    
      traveledCities.push(city);
    });
    console.log(traveledCities);



/*
9. Write a `for` loop that iterates through the array  [2, 5, 7, 9]. 
   Skip the value `7` and multiply the rest by 2. Store
   the results in a new array named `doubledNumbers`.
   */
   
   let doubledNumbers = [];
   let num_arr = [2, 5, 7, 9];
   
   
   for (i = 0 ; i < num_arr.length ; i++){
       if (num_arr[i] === 7){
           continue ;
       }
       else{
        doubledNumbers.push(num_arr[i]*2)
       }
     }
   console.log(doubledNumbers);




/*
10. Use a `for-of` loop to iterate through the array   ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] 
   and stop when the length of the current tea name is  greater than 10. 
   Store the teas iterated over in an array named `shortTeas`.
   */
   
  let tea_arr = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];  
  let shortTeas = [];
   for (const tea of tea_arr) {
    if( tea.length > 10){
        break ;
    }
   shortTeas.push(tea);
  }
console.log(shortTeas);


