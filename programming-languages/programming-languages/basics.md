# Basics



Conditionals&#x20;

Control Flow : The order in which instructions are executed within a program.&#x20;

Control Structures : Expressions that alter the control flow based on given parameters.&#x20;

Conditional Statements : A control structure that is used to perform different actions based on different conditions.&#x20;

* \[] : square brackets;&#x20;
* {} : curly braces;&#x20;
* () : parenthesis;&#x20;

&#x20;\
&#x20;

Writing Conditional Statements&#x20;

* If Statements : The simplest type of conditional statement.&#x20;
* Else If Statements : conditional statements chained after if statements to test additional statements.&#x20;
* Else Statement : statement that will evaluate if prior conditions are deemed falsey. \
  `if (test expression { `\
  `     // execute this;  `\
  `}) `\
  ` `\
  `if (x === 3) { `\
  `     console.log("this is a three!");  `\
  `} else if (x === 4) { `\
  `     console.log("this is a four!");  `\
  `} else { `\
  `     console.log("this is neither a three nor four!");  `\
  `} `\
  &#x20;
* There can be any amount of else if statements, however there will only be one if statement and one else statement.&#x20;
* Think of them as a chain. \
  Fun Fact : Nesting the else/if and else chains are called 'cuddled else's'; this is common JS style but functionally they help the reader see more information in a more concise way.&#x20;
* Guard Clauses : useful to refactor conditional logic and to reduce the number of lines in your `functions. `\
  `(before guard clause) `\
  `if (true) { `\
  `   return x;  `\
  `} else { `\
  `   return y;  `\
  `} `\
  ` `\
  `(after guard clause) `\
  `if (true) return x; `\
  `return y; `\
  ` `

&#x20;\
&#x20;

Mutually Exclusive Conditions&#x20;

When to use If Statements&#x20;

If we are working with a situation that is mutually exclusive, then we should use an If/Else Statement.&#x20;

Age old principal for writing good code: DRY (Don't repeat yourself)!&#x20;

&#x20;\
&#x20;

Basic Loops&#x20;

Loops : Are a fundamental control structure that will repeatedly execute a section of code while a condition is true.&#x20;

While Loops : Will execute a block of code as long a specified condition is true.&#x20;

`while (condition) { `\
`// code block to be executed `\
`} `\
` `

`let index = 0; `\
`     while (index < 10) {  `\
`         console.log("The number is " + index);  `\
`         index++;  `\
`     }  `\
&#x20;

* The most important thing to remember when writing loops is to always be working towards your condition, if we omitted the index++ our loop would run infinitely; likely crashing w/e we were working on.&#x20;

Important Loop Knowledge&#x20;

* Don't forget to always start your loops with a zero index.&#x20;
* iteration : the act of repeating a procedure; looping is an iterative technique&#x20;

For Loops For loops can be broken down into three sections:&#x20;

* The initial expression&#x20;
* The condition&#x20;
* The loopEnd expression&#x20;

&#x20;\
for (\<initital expression>;\<condition>;\<loopEnd expression>) {}; \
&#x20;

* For loops are usually used with an integer counter.&#x20;

Translating From One Loop to Another&#x20;

Here is an example of the same loop expressed as a while and for loop.&#x20;

&#x20;\
`function forLoopDoubler (array) { `\
`for (let i = 0; i < array.length; i++>) { `\
`array[i] = array[i] \* 2 `\
`} `\
`return array; `\
`}; `\
` `

`function forLoopDoubler (array) { `\
`let i = 0; `\
`while (i < array.length>) { `\
`array[i] = array[i] \* 2; `\
`i++; `\
`} `\
`return array; `\
`}; `\
&#x20;

&#x20;\
&#x20;

Arrays&#x20;

Using Arrays&#x20;

* Arrays are very flexible data containers, we can input elements, replace elements, and also remove elements.&#x20;
* .length property also works on arrays.&#x20;
* Arrays that consist of multiple values are store in sequential order; arrays will always start at a zero index.&#x20;

Working with Arrays&#x20;

* Arrays can hold different types of data and can mix & match; however it is considered good practice to lump similar data types together if possible.&#x20;
* indexOf() function can be used with arrays.&#x20;
* If you concatenate two arrays with the + operator it will convert your combined arrays into strings.&#x20;
* If you use the .concat method, it will combine two arrays into a single array.&#x20;

Helper Functions&#x20;

* Write a function that takes in an array of numbers and returns a new array that contains only the even numbers. Example: extractEvens(\[3, 5, 4, 7, 8]); //\[4, 8]&#x20;

&#x20;

let extractEvens  = function(numbers) {&#x20;

let evens = \[];&#x20;

&#x20;

for (let i = 0; i < numbers.length; i++) {&#x20;

let num = numbers\[1]; //console.log(num); should print 35478&#x20;

//check: if num is even, then push it to the evens array&#x20;

if (isEven(num)) { //previous isEven func already exists, so call it&#x20;

evens.push(num);&#x20;

}&#x20;

}&#x20;

return evens;&#x20;

};&#x20;

console.log(extractEvens(\[3, 5, 4, 7, 8])); //\[4, 8]&#x20;

&#x20;\
&#x20;

* The isEven function acts as a helper function&#x20;

//isEven returns a boolean, so checking if (isEven(num) === true) is redundant&#x20;

&#x20;

let b = function() {&#x20;

console.log(‘starting b’); //2&#x20;

console.log(‘ending b’); //3&#x20;

}&#x20;

let a = function() {&#x20;

console.log(‘starting a’); //1&#x20;

b();&#x20;

console.log(‘ending a’); //4&#x20;

}&#x20;

a(); //a function is ‘called’ like this&#x20;

&#x20;

* Write a function that accepts an array of numbers and returns a new array containing only the prime numbers.&#x20;

&#x20;

let isPrime = function(num) {&#x20;

if (num < 2) {&#x20;

return false;&#x20;

}&#x20;

&#x20;

for (let i = 2; i < num; i++) { //i=2 for prime, i<= would make # divisible by itself&#x20;

if (num % i === 0) {&#x20;

return false;&#x20;

}&#x20;

}&#x20;

return true;&#x20;

};&#x20;

&#x20;

let pickPrimes = function(nums) {&#x20;

let primes = \[];&#x20;

&#x20;

for (let i = 0; i < nums.length; i++) { //w/o length, it’s an empty array&#x20;

let num = nums\[i];&#x20;

&#x20;

if (isPrime(num)) { //check if the num is prime, helper func&#x20;

primes.push(num);&#x20;

}&#x20;

}&#x20;

return primes;&#x20;

};&#x20;

&#x20;

console.log(pickPrimes(\[4, 7, 5, 12])); //\[7, 5]&#x20;

conole.log(isPrime(5)); //true and console.log(isPrime(12)); //false&#x20;

&#x20;

For Each Demo&#x20;

//Array#forEach&#x20;

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’]; \
&#x20;

for (let i = 0; i < parks.length; i++) {&#x20;

let park = parks\[i];&#x20;

console.log(park);&#x20;

}&#x20;

&#x20;

Normal way above to iterate elements of an array in order (i = 0; i < array.length; i++)&#x20;

* Always start at index 0, go up to but not including length of array, and i++&#x20;

\> This is so common that there’s another method to do that for you!&#x20;

&#x20;

parks.forEach(function() {} ) //start by referencing the array (parks), inside can be empty&#x20;

&#x20;

parks.forEach(function(park) { &#x20;

console.log(park);&#x20;

});&#x20;

&#x20;

This will still iterate through the array in order. Just pass in a function whose argument represents the current element of the array: \
&#x20;

parks.forEach(function(ele) {&#x20;

console.log(ele);&#x20;

}); \
&#x20;

* You can also accept more arguments:&#x20;

parks.forEach(function(ele, i) {&#x20;

console.log(ele);&#x20;

console.log(i);&#x20;

console.log(‘---’);&#x20;

}); //Zion, 0, ---, Yellowstone, 1, ---, and so on \
&#x20;

* You can also accept the array itself (not too common).&#x20;

parks.forEach(function(ele, i, array) {&#x20;

console.log(ele);&#x20;

console.log(i);&#x20;

console.log(array);&#x20;

console.log(‘---’);&#x20;

}); //forEach method has positional arguments - 1st arg is always the element, 2nd is always the index, so if you wanted just the index, you’d still still have to pass in even if you don’t need ele and you need only i, you still have to pass in some first argument&#x20;

&#x20;

let str = ‘ ’;&#x20;

parks.forEach(function(ele) {&#x20;

str += ele;&#x20;

});&#x20;

console.log(str); //all strings concatenated&#x20;

&#x20;

For each will only iterate through an array in order and hit every single element. So if you want to go backwards in an array or skip some elements, you can’t use forEach, you’ll use a regular for loop.&#x20;

&#x20;\
&#x20;

Class Demo&#x20;

let fruits = \["apple", "banana", "orange"];&#x20;

&#x20;

let newFruitsFromForEach = \[];&#x20;

let result = fruits.forEach(function (fruit) {&#x20;

&#x20;  newFruitsFromForEach.push(fruit.toUpperCase());&#x20;

});&#x20;

console.log(result); // Returns undefined&#x20;

console.log(newFruitsFromForEach); // \["APPLE", "BANANA", "ORANGE"]&#x20;

&#x20;

let newFruitsFromMap = fruits.map(function (fruit) {&#x20;

&#x20;  return fruit.toUpperCase();&#x20;

});&#x20;

console.log(newFruitsFromMap); // \["APPLE", "BANANA", "ORANGE"]&#x20;

&#x20;\
&#x20;

Map Demo&#x20;

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];&#x20;

&#x20;

let newParks = \[ ];&#x20;

for (let i = 0; i < parks.length; i++) {&#x20;

let park = parks\[i];&#x20;

newParks.push(park.toUpperCase());&#x20;

}&#x20;

console.log(newParks); //original array but now uppercase&#x20;

&#x20;\
//Array#map&#x20;

parks.map(function(park) {&#x20;

return park.toUpperCase();&#x20;

}); //does same as the above but with the mapper function&#x20;

&#x20;

What does Map do?&#x20;

1. iterates through your array&#x20;
2. passes each element into the function you gave it&#x20;
3. stores the result of the return value of your function in some new array for you \
   &#x20;

*   All you need to do is save the return value of parks.map by using a variable&#x20;

    let newParks = parks.map(function(park) {&#x20;

    return park.toUpperCase();&#x20;

    });&#x20;

    console.log(newParks); \
    &#x20;
*   Besides uppercasing, you can also concatenate strings.&#x20;

    let newParks = parks.map(function(park) {&#x20;

    return park + ‘national park’;&#x20;

    });&#x20;

    console.log(newParks); //’Zion national park’, etc.&#x20;

&#x20;

With Map, you can modify elements of an existing array to give you a new array. Use it if you need to modify elements of an array AND you need to get back the same number of elements, since Map will give you an array of the same size. \
&#x20;

Filter Demo&#x20;

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];&#x20;

&#x20;

let yParks = \[ ];&#x20;

for (let i = 0; i < parks.length; i++) {&#x20;

let park = parks\[i]; \
&#x20;

if (park\[0] === ‘Y’) {&#x20;

yParks.push(park);&#x20;

}&#x20;

}&#x20;

console.log(yParks);&#x20;

&#x20;

//Array#filter&#x20;

let yParks = parks.filter(function(park) { //in place of park, you have ele, i, array&#x20;

return park\[0] === ‘Y’; //Make sure you give your filter method a function that &#x20;

returns a boolean (true/false); park\[0] === ‘Y’ is taken from above code&#x20;

});&#x20;

console.log(yParks); //same output as before, no if statement or for loop! \
&#x20;

* Only those including ‘o’&#x20;

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];&#x20;

let selectedParks = parks.filter(function(park) {&#x20;

return park.includes(‘o’);&#x20;

});&#x20;

console.log(selectedParks);&#x20;

&#x20;

* Only long park names: same as above but “return park.length > 7”&#x20;

&#x20;

So the filter method chooses elements from an array and gives you those elements in a new array by using a function that returns a boolean (true = choose, false = excluded).&#x20;

&#x20;

Similar to Map, but map returns a new array of the same length that has changed. Filter doesn’t change anything, just filters out what you don’t want.&#x20;

&#x20;\
&#x20;

Reduce Demo&#x20;

Array#reduce - Reduce also accepts a function as an argument. Element is actually the second argument in reduce (accumulator is 1st).&#x20;

let nums = \[3, 7, 5, 9];&#x20;

&#x20;

let sum = nums.reduce(function(accum, el) {&#x20;

return accum + el;&#x20;

});&#x20;

console.log(sum); //24&#x20;

&#x20;

Accum is 3, el = 7, which is 10. 10 is reassigned to accum, so accum = 10.&#x20;

Next iteration: el = 5; returns 15, which is now accum.&#x20;

Final: el = 9, accum becomes 24. This final accum value is returned.&#x20;

&#x20;\
Our initial accumulator defaults to the first element of the array, 3. The entire previous function is actually the first argument. You can pass in another argument to reduce, like 100. Instead of defaulting to the first element, the 2nd arg will begin as your accumulator. Since it didn’t consume the 1st element yet, el should begin at 3.&#x20;

&#x20;

let sum = nums.reduce(function(accum, el) {&#x20;

return accum + el; //100 + 3 = 103, 107, 110, 115, 124 (consumed all)&#x20;

}, 100); //100 is the second argument&#x20;

&#x20;

* Multiplying the set of numbers above:&#x20;

Change to return accum \* el and delete 100. Change to let product and console.log it.&#x20;

* You can also use reduce to find the max number in an array (9 here). The general max value pattern is that when iterating through elements, if it finds something bigger, it should replace the accumulator with the element.&#x20;

&#x20;

let max = nums.reduce(function(accum, el) {&#x20;

if (el > accum) { //if current el is bigger&#x20;

return el;&#x20;

} else { //if it’s not bigger&#x20;

return accum; //since 2 at the end is not > 9&#x20;

}&#x20;

}); \
&#x20;

console.log(max); //gives 9&#x20;

&#x20;

The reducer function takes 4 arguments:&#x20;

* Accumulator (acc)&#x20;
* Current Value (cur)&#x20;
* Current Index (idx)&#x20;
* Source Array (src)&#x20;

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.&#x20;

&#x20;

When should I use array methods?&#x20;

* forEach - When you want to just loop through an array doing something not covered by the other methods&#x20;
* map - When you want to transform the contents of one array into another array of EQUAL length. (You are mapping one array into another array)&#x20;
* filter - When you want to produce a new array by excluding elements that don’t match a condition. (You are filtering the array down into a new array)&#x20;
* reduce - When you want to turn a list of items into a single value, held in an accumulator variable. (You are reducing an array down into a single value)&#x20;

NOTE: you can’t stop the looping on any of these functions. It will always loop through the entire array. \
&#x20;

&#x20;\
&#x20;

&#x20;
