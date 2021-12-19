# Solve common problems in your JavaScript code

## Solve common problems in your JavaScript code

The following links point to solutions to common problems you may encounter when writing JavaScript.

### [Common beginner's mistakes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#common\_beginners\_mistakes) <a href="#common_beginners_mistakes" id="common_beginners_mistakes"></a>

#### [Correct spelling and casing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#correct\_spelling\_and\_casing) <a href="#correct_spelling_and_casing" id="correct_spelling_and_casing"></a>

If your code doesn't work and/or the browser complains that something is undefined, check that you've spelt all your variable names, function names, etc. correctly.

Some common built-in browser functions that cause problems are:

| Correct                    | Wrong                     |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

#### [Semi-colon position](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#semi-colon\_position) <a href="#semi-colon_position" id="semi-colon_position"></a>

You need to make sure you don't place any semi-colons incorrectly. For example:

| Correct                     | Wrong                       |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

#### [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#functions) <a href="#functions" id="functions"></a>

There are a number of things that can go wrong with functions.

One of the most common errors is to declare the function, but not call it anywhere. For example:

```
function myFunction() {
  alert('This is my function.');
};
```

Copy to Clipboard

This code won't do anything unless you call it with the following statement:

```
myFunction();
```

Copy to Clipboard

**Function scope**

Remember that [functions have their own scope](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#function\_scope\_and\_conflicts) — you can't access a variable value set inside a function from outside the function, unless you declared the variable globally (i.e. not inside any functions), or [return the value](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Return\_values) from the function.

**Running code after a return statement**

Remember also that when you return from a function, the JavaScript interpreter exits the function — no code after the return statement will run.

In fact, some browsers (like Firefox) will give you an error message in the developer console if you have code after a return statement. Firefox gives you "unreachable code after return statement".

#### [Object notation versus normal assignment](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#object\_notation\_versus\_normal\_assignment) <a href="#object_notation_versus_normal_assignment" id="object_notation_versus_normal_assignment"></a>

When you assign something normally in JavaScript, you use a single equals sign, e.g.:

```
const myNumber = 0;
```

Copy to Clipboard

With [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects), however, you need to take care to use the correct syntax. The object must be surrounded by curly braces, member names must be separated from their values using colons, and members must be separated by commas. For example:

```
const myObject = {
  name: 'Chris',
  age: 38
}
```

Copy to Clipboard

### [Basic definitions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#basic\_definitions) <a href="#basic_definitions" id="basic_definitions"></a>

* [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/What\_is\_JavaScript#a\_high-level\_definition)
* [What is a variable?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables#what\_is\_a\_variable)
* [What are strings?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Strings)
* [What is an array?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Arrays#what\_is\_an\_array)
* [What is a loop?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Looping\_code)
* [What is a function?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions)
* [What is an event?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events)
* [What is an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#object\_basics)
* [What is JSON?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#no\_really\_what\_is\_json)
* [What is a web API?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side\_web\_APIs/Introduction#what\_are\_apis)
* [What is the DOM?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side\_web\_APIs/Manipulating\_documents#the\_document\_object\_model)

### [Basic use cases](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#basic\_use\_cases) <a href="#basic_use_cases" id="basic_use_cases"></a>

#### [General](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#general) <a href="#general" id="general"></a>

* [How do you add JavaScript to your page?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/What\_is\_JavaScript#how\_do\_you\_add\_javascript\_to\_your\_page)
* [How do you add comments to JavaScript code?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/What\_is\_JavaScript#comments)

#### [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#variables) <a href="#variables" id="variables"></a>

* [How do you declare a variable?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables#declaring\_a\_variable)
* [How do you initialize a variable with a value?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables#initializing\_a\_variable)
* [How do you update a variable's value?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables#updating\_a\_variable) (also see [Assignment operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Math#assignment\_operators))
* [What data types can values have in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables#variable\_types)
* [What does 'loosely typed' mean?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables#loose\_typing)

#### [Math](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#math) <a href="#math" id="math"></a>

* [What types of number do you have to deal with in web development?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Math#types\_of\_numbers)
* [How do you do basic math in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Math#arithmetic\_operators)
* [What is operator precedence, and how is it handled in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Math#operator\_precedence)
* [How do you increment and decrement values in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Math#increment\_and\_decrement\_operators)
* [How do you compare values in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Math#comparison\_operators) (e.g. to see which one is bigger, or to see if one value is equal to another).

#### [Strings](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#strings) <a href="#strings" id="strings"></a>

* [How do you create a string in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Strings#creating\_a\_string)
* [Do you have to use single quotes or double quotes?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Strings#single\_quotes\_versus\_double\_quotes)
* [How do you escape characters in strings?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Strings#escaping\_characters\_in\_a\_string)
* [How do you join strings together?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Strings#concatenating\_strings)
* [Can you join strings and numbers together?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Strings#numbers\_versus\_strings)
* [How do you find the length of a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Useful\_string\_methods#finding\_the\_length\_of\_a\_string)
* [How do you find what character is at a certain position in a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Useful\_string\_methods#retrieving\_a\_specific\_string\_character)
* [How do you find and extract a specific substring from a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Useful\_string\_methods#finding\_a\_substring\_inside\_a\_string\_and\_extracting\_it)
* [How do you change the case of a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Useful\_string\_methods#changing\_case)
* [How do you replace one specific substring with another?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Useful\_string\_methods#updating\_parts\_of\_a\_string)

#### [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#arrays) <a href="#arrays" id="arrays"></a>

* [How do you create an array?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Arrays#creating\_an\_array)
* [How do you access and modify the items in an array?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Arrays#accessing\_and\_modifying\_array\_items) (this includes multidimensional arrays)
* [How do you find the length of an array?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Arrays#finding\_the\_length\_of\_an\_array)
* [How do you add and remove array items?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Arrays#adding\_and\_removing\_array\_items)
* [How do you split a string into array items, or join array items into a string?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Arrays#converting\_between\_strings\_and\_arrays)

#### [Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#debugging\_javascript) <a href="#debugging_javascript" id="debugging_javascript"></a>

* [What are the basic types of error?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/What\_went\_wrong#types\_of\_error)
* [What are browser developer tools, and how do you access them?](https://developer.mozilla.org/en-US/docs/Learn/Common\_questions/What\_are\_browser\_developer\_tools)
* [How do you log a value to the JavaScript console?](https://developer.mozilla.org/en-US/docs/Learn/Tools\_and\_testing/Cross\_browser\_testing/JavaScript#the\_console\_api)
* [How do you use breakpoints and other JavaScript debugging features?](https://developer.mozilla.org/en-US/docs/Learn/Tools\_and\_testing/Cross\_browser\_testing/JavaScript#using\_the\_javascript\_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](https://developer.mozilla.org/en-US/docs/Learn/Tools\_and\_testing/Cross\_browser\_testing/JavaScript). Also, see [Other common errors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/What\_went\_wrong#other\_common\_errors) for a description of common errors.

#### [Making decisions in code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#making\_decisions\_in\_code) <a href="#making_decisions_in_code" id="making_decisions_in_code"></a>

* [How do you execute different blocks of code, depending on a variable's value or other condition?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/conditionals)
* [How do you use if ...else statements?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/conditionals#if\_...\_else\_statements)
* [How do you nest one decision block inside another?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/conditionals#nesting\_if\_...\_else)
* [How do you use AND, OR, and NOT operators in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/conditionals#logical\_operators\_and\_or\_and\_not)
* [How do you conveniently handle a large number of choices for one condition?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/conditionals#switch\_statements)
* [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/conditionals#ternary\_operator)

#### [Looping/iteration](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#loopingiteration) <a href="#loopingiteration" id="loopingiteration"></a>

* [How do you run the same bit of code over and over again?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Looping\_code)
* [How do you exit a loop before the end if a certain condition is met?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Looping\_code#exiting\_loops\_with\_break)
* [How do you skip to the next iteration of a loop if a certain condition is met?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Looping\_code#skipping\_iterations\_with\_continue)
* [How do you use while and do ... while loops?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Looping\_code#while\_and\_do\_...\_while)

### [Intermediate use cases](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#intermediate\_use\_cases) <a href="#intermediate_use_cases" id="intermediate_use_cases"></a>

#### [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#functions\_2) <a href="#functions_2" id="functions_2"></a>

* [How do you find functions in the browser?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#built-in\_browser\_functions)
* [What is the difference between a function and a method?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#functions\_versus\_methods)
* [How do you create your own functions?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Build\_your\_own\_function)
* [How do you run (call, or invoke) a function?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#invoking\_functions)
* [What is an anonymous function?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#anonymous\_functions)
* [How do you specify parameters (or arguments) when invoking a function?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#function\_parameters)
* [What is function scope?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Functions#function\_scope\_and\_conflicts)
* [What are return values, and how do you use them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Return\_values)

#### [Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#objects) <a href="#objects" id="objects"></a>

* [How do you create an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#object\_basics)
* [What is dot notation?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#dot\_notation)
* [What is bracket notation?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#bracket\_notation)
* [How do you get and set the methods and properties of an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#setting\_object\_members)
* [What is `this`, in the context of an object?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#what\_is\_this)
* [What is object-oriented programming?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented\_JS#object-oriented\_programming\_from\_10000\_meters)
* [What are constructors and instances, and how do you create them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented\_JS#constructors\_and\_object\_instances)
* [What different ways are there to create objects in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented\_JS#other\_ways\_to\_create\_object\_instances)

#### [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#json) <a href="#json" id="json"></a>

* [How do you structure JSON data, and read it from JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#json\_structure)
* [How can you load a JSON file into a page?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#loading\_our\_json)
* [How do you convert a JSON object to a text string, and back again?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#converting\_between\_objects\_and\_text)

#### [Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#events) <a href="#events" id="events"></a>

* [What are event handlers and how do you use them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#event\_handler\_properties)
* [What are inline event handlers?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#inline\_event\_handlers\_%e2%80%94\_don%27t\_use\_these)
* [What does the `addEventListener()` function do, and how do you use it?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#addeventlistener\(\)\_and\_removeeventlistener\(\))
* [Which mechanism should I use to add event code to my web pages?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#what\_mechanism\_should\_i\_use)
* [What are event objects, and how do you use them?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#event\_objects)
* [How do you prevent default event behavior?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#preventing\_default\_behavior)
* [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#event\_bubbling\_and\_capture)
* [What is event delegation, and how does it work?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building\_blocks/Events#event\_delegation)

#### [Object-oriented JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#object-oriented\_javascript) <a href="#object-oriented_javascript" id="object-oriented_javascript"></a>

* [What are object prototypes?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object\_prototypes)
* [What is the constructor property, and how can you use it?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object\_prototypes#the\_constructor\_property)
* [How do you add methods to the constructor?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object\_prototypes#modifying\_prototypes)
* [How do you create a new constructor that inherits its members from a parent constructor?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
* [When should you use inheritance in JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#object\_member\_summary)

#### [Web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Howto#web\_apis) <a href="#web_apis" id="web_apis"></a>

* [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side\_web\_APIs/Manipulating\_documents#active\_learning\_basic\_dom\_manipulation)

#### Found a problem with this page?
