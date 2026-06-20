/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

 let teaFlavors = ["green tea", "black tea", "oolong tea"];
  const firstTea = teaFlavors[0];
 console.log(" Accessing the first element :" ,firstTea);
 console.log(" Accessing the all the elements :" ,teaFlavors);
  

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

 let cities = ["London", "Tokyo", "Paris", "New York"];
  const favoriteCity = cities[2];
 console.log("\nAccessing the third element :",favoriteCity);
 console.log("Accessing the all the  element :",cities);


/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
 let teaTypes = ["herbel tea", "white tea", "masala chai"];
  teaTypes[1] = ["jasmine tea"];
 console.log("\nChanging the second element of the array to :",teaTypes);
/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
 
 let citiesVisited = ["Mumbai", "Sydney"];
  citiesVisited.push("Berlin");
 console.log(citiesVisited);
 console.log("Length :",citiesVisited.length);
 
/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
 
 let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
 console.log("\nBefore removing :",teaOrders);
  const lastOrder = teaOrders.pop(); // = const lastOrder = teaOrders.pop(3);  because stack follow Lifo rule 
 

 console.log("Removing the last element :", lastOrder);
 console.log("After removing :",teaOrders);

 
/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
 
 let popularTeas = ["green tea", "oolong tea", "chai"];
 let softCopyTeas = popularTeas;
  popularTeas.pop();
 console.log("\n",softCopyTeas);
 console.log(popularTeas);

 /*Because both variables point to the same array in memory.

                           topCities ──┐
                                       │
                                       ▼
                                 ["Berlin", "Singapore", "New York"]
                                       ▲
                                       │
                           softCopyCities ─┘

 When topCities.pop() removes "New York", the array itself changes, so both variables see the change.   */ 
 


 /* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

 let topCities = ["Berlin", "Singapore", "New York"];
 let hardCopyCities = [...topCities];  //The spread operator (...) creates a new copy of the array.
 
 topCities.pop();
 
 console.log("\n",topCities);
 console.log(hardCopyCities);
    /*                                    
                                  topCities      ──► ["Berlin", "Singapore"]
                                  hardCopyCities ──► ["Berlin", "Singapore", "New York"]
                     Because hardCopyCities is a separate copy. Changes made to topCities do not affect it */




/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

 let europeanCities = ["Paris", "Rome"];
 let asianCities = ["Tokyo", "Bangkok"];
 let Mergecities = [europeanCities + asianCities] ;
 let worldCities = europeanCities.concat(asianCities);   // best way 
 
 console.log("\n",worldCities);
 console.log(Mergecities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

 let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
 
 let menuLength = teaMenu.length;
 console.log("\nength of the array :", menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

 let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
 
 let isLondonInList = cityBucketList.includes("London");
 console.log("Is london is in array :",isLondonInList);