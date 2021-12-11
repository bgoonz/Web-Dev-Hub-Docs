# Basics

Conditionals

Control Flow : The order in which instructions are executed within a program.

Control Structures : Expressions that alter the control flow based on given parameters.

Conditional Statements : A control structure that is used to perform different actions based on different conditions.

* \[] : square brackets;
* {} : curly braces;
* () : parenthesis;

\\

Writing Conditional Statements

* If Statements : The simplest type of conditional statement.
* Else If Statements : conditional statements chained after if statements to test additional statements.
* Else Statement : statement that will evaluate if prior conditions are deemed falsey.\
  `if (test expression {`\
  `// execute this;`\
  `})`\
  \
  `if (x === 3) {`\
  `console.log("this is a three!");`\
  `} else if (x === 4) {`\
  `console.log("this is a four!");`\
  `} else {`\
  `console.log("this is neither a three nor four!");`\
  `}`\\
* There can be any amount of else if statements, however there will only be one if statement and one else statement.
* Think of them as a chain.\
  Fun Fact : Nesting the else/if and else chains are called 'cuddled else's'; this is common JS style but functionally they help the reader see more information in a more concise way.
* Guard Clauses : useful to refactor conditional logic and to reduce the number of lines in your `functions.`\
  `(before guard clause)`\
  `if (true) {`\
  `return x;`\
  `} else {`\
  `return y;`\
  `}`\
  \
  `(after guard clause)`\
  `if (true) return x;`\
  `return y;`\\

\\

Mutually Exclusive Conditions

When to use If Statements

If we are working with a situation that is mutually exclusive, then we should use an If/Else Statement.

Age old principal for writing good code: DRY (Don't repeat yourself)!

\\

Basic Loops

Loops : Are a fundamental control structure that will repeatedly execute a section of code while a condition is true.

While Loops : Will execute a block of code as long a specified condition is true.

`while (condition) {`\
`// code block to be executed`\
`}`\\

`let index = 0;`\
`while (index < 10) {`\
`console.log("The number is " + index);`\
`index++;`\
`}`\\

* The most important thing to remember when writing loops is to always be working towards your condition, if we omitted the index++ our loop would run infinitely; likely crashing w/e we were working on.

Important Loop Knowledge

* Don't forget to always start your loops with a zero index.
* iteration : the act of repeating a procedure; looping is an iterative technique

For Loops For loops can be broken down into three sections:

* The initial expression
* The condition
* The loopEnd expression

\
for (\<initital expression>;\<condition>;\<loopEnd expression>) {};\\

* For loops are usually used with an integer counter.

Translating From One Loop to Another

Here is an example of the same loop expressed as a while and for loop.

\
`function forLoopDoubler (array) {`\
`for (let i = 0; i < array.length; i++>) {`\
`array[i] = array[i] \* 2`\
`}`\
`return array;`\
`};`\\

`function forLoopDoubler (array) {`\
`let i = 0;`\
`while (i < array.length>) {`\
`array[i] = array[i] \* 2;`\
`i++;`\
`}`\
`return array;`\
`};`\\

\\

Arrays

Using Arrays

* Arrays are very flexible data containers, we can input elements, replace elements, and also remove elements.
* .length property also works on arrays.
* Arrays that consist of multiple values are store in sequential order; arrays will always start at a zero index.

Working with Arrays

* Arrays can hold different types of data and can mix & match; however it is considered good practice to lump similar data types together if possible.
* indexOf() function can be used with arrays.
* If you concatenate two arrays with the + operator it will convert your combined arrays into strings.
* If you use the .concat method, it will combine two arrays into a single array.

Helper Functions

* Write a function that takes in an array of numbers and returns a new array that contains only the even numbers. Example: extractEvens(\[3, 5, 4, 7, 8]); //\[4, 8]

let extractEvens = function(numbers) {

let evens = \[];

for (let i = 0; i < numbers.length; i++) {

let num = numbers\[1]; //console.log(num); should print 35478

//check: if num is even, then push it to the evens array

if (isEven(num)) { //previous isEven func already exists, so call it

evens.push(num);

}

}

return evens;

};

console.log(extractEvens(\[3, 5, 4, 7, 8])); //\[4, 8]

\\

* The isEven function acts as a helper function

//isEven returns a boolean, so checking if (isEven(num) === true) is redundant

let b = function() {

console.log(‘starting b’); //2

console.log(‘ending b’); //3

}

let a = function() {

console.log(‘starting a’); //1

b();

console.log(‘ending a’); //4

}

a(); //a function is ‘called’ like this

* Write a function that accepts an array of numbers and returns a new array containing only the prime numbers.

let isPrime = function(num) {

if (num < 2) {

return false;

}

for (let i = 2; i < num; i++) { //i=2 for prime, i<= would make # divisible by itself

if (num % i === 0) {

return false;

}

}

return true;

};

let pickPrimes = function(nums) {

let primes = \[];

for (let i = 0; i < nums.length; i++) { //w/o length, it’s an empty array

let num = nums\[i];

if (isPrime(num)) { //check if the num is prime, helper func

primes.push(num);

}

}

return primes;

};

console.log(pickPrimes(\[4, 7, 5, 12])); //\[7, 5]

conole.log(isPrime(5)); //true and console.log(isPrime(12)); //false

For Each Demo

//Array#forEach

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];\\

for (let i = 0; i < parks.length; i++) {

let park = parks\[i];

console.log(park);

}

Normal way above to iterate elements of an array in order (i = 0; i < array.length; i++)

* Always start at index 0, go up to but not including length of array, and i++

\> This is so common that there’s another method to do that for you!

parks.forEach(function() {} ) //start by referencing the array (parks), inside can be empty

parks.forEach(function(park) {

console.log(park);

});

This will still iterate through the array in order. Just pass in a function whose argument represents the current element of the array:\\

parks.forEach(function(ele) {

console.log(ele);

});\\

* You can also accept more arguments:

parks.forEach(function(ele, i) {

console.log(ele);

console.log(i);

console.log(‘---’);

}); //Zion, 0, ---, Yellowstone, 1, ---, and so on\\

* You can also accept the array itself (not too common).

parks.forEach(function(ele, i, array) {

console.log(ele);

console.log(i);

console.log(array);

console.log(‘---’);

}); //forEach method has positional arguments - 1st arg is always the element, 2nd is always the index, so if you wanted just the index, you’d still still have to pass in even if you don’t need ele and you need only i, you still have to pass in some first argument

let str = ‘ ’;

parks.forEach(function(ele) {

str += ele;

});

console.log(str); //all strings concatenated

For each will only iterate through an array in order and hit every single element. So if you want to go backwards in an array or skip some elements, you can’t use forEach, you’ll use a regular for loop.

\\

Class Demo

let fruits = \["apple", "banana", "orange"];

let newFruitsFromForEach = \[];

let result = fruits.forEach(function (fruit) {

newFruitsFromForEach.push(fruit.toUpperCase());

});

console.log(result); // Returns undefined

console.log(newFruitsFromForEach); // \["APPLE", "BANANA", "ORANGE"]

let newFruitsFromMap = fruits.map(function (fruit) {

return fruit.toUpperCase();

});

console.log(newFruitsFromMap); // \["APPLE", "BANANA", "ORANGE"]

\\

Map Demo

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];

let newParks = \[ ];

for (let i = 0; i < parks.length; i++) {

let park = parks\[i];

newParks.push(park.toUpperCase());

}

console.log(newParks); //original array but now uppercase

\
//Array#map

parks.map(function(park) {

return park.toUpperCase();

}); //does same as the above but with the mapper function

What does Map do?

1. iterates through your array
2. passes each element into the function you gave it
3. stores the result of the return value of your function in some new array for you\\

*   All you need to do is save the return value of parks.map by using a variable

    let newParks = parks.map(function(park) {

    return park.toUpperCase();

    });

    console.log(newParks);\\
*   Besides uppercasing, you can also concatenate strings.

    let newParks = parks.map(function(park) {

    return park + ‘national park’;

    });

    console.log(newParks); //’Zion national park’, etc.

With Map, you can modify elements of an existing array to give you a new array. Use it if you need to modify elements of an array AND you need to get back the same number of elements, since Map will give you an array of the same size.\\

Filter Demo

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];

let yParks = \[ ];

for (let i = 0; i < parks.length; i++) {

let park = parks\[i];\\

if (park\[0] === ‘Y’) {

yParks.push(park);

}

}

console.log(yParks);

//Array#filter

let yParks = parks.filter(function(park) { //in place of park, you have ele, i, array

return park\[0] === ‘Y’; //Make sure you give your filter method a function that

returns a boolean (true/false); park\[0] === ‘Y’ is taken from above code

});

console.log(yParks); //same output as before, no if statement or for loop!\\

* Only those including ‘o’

let parks = \[‘Zion’, ‘Yellowstone’, ‘Acadia’, ‘Yosemite’];

let selectedParks = parks.filter(function(park) {

return park.includes(‘o’);

});

console.log(selectedParks);

* Only long park names: same as above but “return park.length > 7”

So the filter method chooses elements from an array and gives you those elements in a new array by using a function that returns a boolean (true = choose, false = excluded).

Similar to Map, but map returns a new array of the same length that has changed. Filter doesn’t change anything, just filters out what you don’t want.

\\

Reduce Demo

Array#reduce - Reduce also accepts a function as an argument. Element is actually the second argument in reduce (accumulator is 1st).

let nums = \[3, 7, 5, 9];

let sum = nums.reduce(function(accum, el) {

return accum + el;

});

console.log(sum); //24

Accum is 3, el = 7, which is 10. 10 is reassigned to accum, so accum = 10.

Next iteration: el = 5; returns 15, which is now accum.

Final: el = 9, accum becomes 24. This final accum value is returned.

\
Our initial accumulator defaults to the first element of the array, 3. The entire previous function is actually the first argument. You can pass in another argument to reduce, like 100. Instead of defaulting to the first element, the 2nd arg will begin as your accumulator. Since it didn’t consume the 1st element yet, el should begin at 3.

let sum = nums.reduce(function(accum, el) {

return accum + el; //100 + 3 = 103, 107, 110, 115, 124 (consumed all)

}, 100); //100 is the second argument

* Multiplying the set of numbers above:

Change to return accum \* el and delete 100. Change to let product and console.log it.

* You can also use reduce to find the max number in an array (9 here). The general max value pattern is that when iterating through elements, if it finds something bigger, it should replace the accumulator with the element.

let max = nums.reduce(function(accum, el) {

if (el > accum) { //if current el is bigger

return el;

} else { //if it’s not bigger

return accum; //since 2 at the end is not > 9

}

});\\

console.log(max); //gives 9

The reducer function takes 4 arguments:

* Accumulator (acc)
* Current Value (cur)
* Current Index (idx)
* Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

When should I use array methods?

* forEach - When you want to just loop through an array doing something not covered by the other methods
* map - When you want to transform the contents of one array into another array of EQUAL length. (You are mapping one array into another array)
* filter - When you want to produce a new array by excluding elements that don’t match a condition. (You are filtering the array down into a new array)
* reduce - When you want to turn a list of items into a single value, held in an accumulator variable. (You are reducing an array down into a single value)

NOTE: you can’t stop the looping on any of these functions. It will always loop through the entire array.\\

\\
