# JavaScript Programmer

A guide to commands in Python from what you know in JavaScript

#### Python Study Guide for a JavaScript Programmer <a href="#03e2" id="03e2"></a>

![](https://cdn-images-1.medium.com/max/800/1\*3V9VOfPk\_hrFdbEAd3j-QQ.png)

#### Related Articles: <a href="#f6d4" id="f6d4"></a>

#### Applications of Tutorial & Cheat Sheet Respectivley (At Bottom Of Tutorial): <a href="#5a5b" id="5a5b"></a>

#### Basics <a href="#b0f3" id="b0f3"></a>

* **PEP8** : Python Enhancement Proposals, style-guide for Python.
* `print` is the equivalent of `console.log`.

> ‘print() == console.log()’

#### `#` is used to make comments in your code. <a href="#117c" id="117c"></a>

```
def foo():    """    The foo function does many amazing things that you    should not question. Just accept that it exists and    use it with caution.    """    secretThing()
```

> _Python has a built in help function that let’s you see a description of the source code without having to navigate to it… “-SickNasty … Autor Unknown”_

#### Numbers <a href="#e708" id="e708"></a>

* Python has three types of numbers:

1. **Integer**
2. **Positive and Negative Counting Numbers.**

No Decimal Point

> Created by a literal non-decimal point number … **or** … with the _`int()`_ constructor.

```
print(3) # => 3 print(int(19)) # => 19 print(int()) # => 0
```

**3. Complex Numbers**

> Consist of a real part and imaginary part.

**Boolean is a subtype of integer in Python.🤷‍♂️**

> If you came from a background in JavaScript and learned to accept the premise(s) of the following meme…

![](https://cdn-images-1.medium.com/max/800/0\*eC4EvZcv6hhH88jX.png)

> Than I am sure you will find the means to suspend your disbelief.

```
print(2.24) # => 2.24 print(2.) # => 2.0 print(float()) # => 0.0 print(27e-5) # => 0.00027
```

#### KEEP IN MIND: <a href="#2c13" id="2c13"></a>

> **The `i` is switched to a `j` in programming.**

T\_his is because the letter i is common place as the de facto index for any and all enumerable entities so it just makes sense not to compete for name-\*\*space \*\*when there’s another 25 letters that don’t get used for every loop under the sun. My most medium apologies to Leonhard Euler.\_

```
print(7j) # => 7j print(5.1+7.7j)) # => 5.1+7.7j print(complex(3, 5)) # => 3+5j print(complex(17)) # => 17+0j print(complex()) # => 0j
```

* **Type Casting** : The process of converting one number to another.

```
# Using Floatprint(17)               # => 17print(float(17))        # => 17.0
```

```
# Using Intprint(17.0)             # => 17.0print(int(17.0))        # => 17
```

```
# Using Strprint(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

**The arithmetic operators are the same between JS and Python, with two additions:**

* _“\*\*” : Double asterisk for exponent._
* _“//” : Integer Division._
* **There are no spaces between math operations in Python.**
* **Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.**
* **There are no `++` and `--` in Python, the only shorthand operators are:**

![](https://cdn-images-1.medium.com/max/600/0\*Ez\_1PZ93N4FfvkRr.png)

#### Strings <a href="#f25c" id="f25c"></a>

* Python uses both single and double quotes.
* You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`
* Multiline strings use triple quotes.

```
print('''My instructions are very long so to make themmore readable in the code I am putting them onmore than one line. I can even include "quotes"of any kind because they won't get confused withthe end of the string!''')
```

**Use the `len()` function to get the length of a string.**

```
print(len(“Spaghetti”)) # => 9
```

#### **Python uses `zero-based indexing`** <a href="#3f9c" id="3f9c"></a>

**Python allows negative indexing (thank god!)**

```
print(“Spaghetti”[-1]) # => i 
```

```
print(“Spaghetti”[-4]) # => e
```

* Python let’s you use ranges

You can think of this as roughly equivalent to the slice method called on a JavaScript object or string… _(mind you that in JS … strings are wrapped in an object (under the hood)… upon which the string methods are actually called. As a immutable privative type **by textbook definition**, a string literal could not hope to invoke most of it’s methods without violating the state it was bound to on initialization if it were not for this bit of syntactic sugar.)_

```
print(“Spaghetti”[1:4]) # => pag print(“Spaghetti”[4:-1]) # => hett print(“Spaghetti”[4:4]) # => (empty string)
```

* The end range is exclusive just like `slice` in JS.

```
# Shortcut to get from the beginning of a string to a certain index.print("Spaghetti"[:4])  # => Spagprint("Spaghetti"[:-1])    # => Spaghett
```

```
# Shortcut to get from a certain index to the end of a string.print("Spaghetti"[1:])  # => paghettiprint("Spaghetti"[-4:])    # => etti
```

* The `index` string function is the equiv. of `indexOf()` in JS

```
print("Spaghetti".index("h"))    # => 4print("Spaghetti".index("t"))    # => 6
```

* The `count` function finds out how many times a substring appears in a string… pretty nifty for a hard coded feature of the language.

```
print("Spaghetti".count("h"))    # => 1print("Spaghetti".count("t"))    # => 2print("Spaghetti".count("s"))    # => 0print('''We choose to go to the moon in this decade and do the other things,not because they are easy, but because they are hard, because that goal willserve to organize and measure the best of our energies and skills, because thatchallenge is one that we are willing to accept, one we are unwilling topostpone, and one which we intend to win, and the others, too.'''.count('the '))                # => 4
```

* **You can use `+` to concatenate strings, just like in JS.**
* **You can also use “\*” to repeat strings or multiply strings.**
* **Use the `format()` function to use placeholders in a string to input values later on.**

```
first_name = "Billy"last_name = "Bob"print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

* _Shorthand way to use format function is:_\
  `print(f'Your name is {first_name} {last_name}')`

**Some useful string methods.**

* **Note that in JS `join` is used on an Array, in Python it is used on String.**

![](https://cdn-images-1.medium.com/max/800/0\*eE3E5H0AoqkhqK1z.png)

* There are also many handy testing methods.

![](https://cdn-images-1.medium.com/max/800/0\*Q0CMqFd4PozLDFPB.png)

#### Variables and Expressions <a href="#920e" id="920e"></a>

* **Duck-Typing** : Programming Style which avoids checking an object’s type to figure out what it can do.
* Duck Typing is the fundamental approach of Python.
* Assignment of a value automatically declares a variable.

```
a = 7b = 'Marbles'print(a)         # => 7print(b)         # => Marbles
```

* _**You can chain variable assignments to give multiple var names the same value.**_

**Use with caution as this is highly unreadable**

```
count = max = min = 0print(count)           # => 0print(max)             # => 0print(min)             # => 0
```

**The value and type of a variable can be re-assigned at any time.**

```
a = 17print(a)         # => 17a = 'seventeen'print(a)         # => seventeen
```

* _`NaN` does not exist in Python, but you can 'create' it like so:_\
  _**`print(float("nan"))`**_
* _Python replaces `null` with `none`._
* _**`none`****\*\*\*\*\*\*\*\*\*\*\*\* is an object** and can be directly assigned to a variable._

> Using none is a convenient way to check to see why an action may not be operating correctly in your program.

#### Boolean Data Type <a href="#6f4e" id="6f4e"></a>

* One of the biggest benefits of Python is that it reads more like English than JS does.

![](https://cdn-images-1.medium.com/max/800/0\*HQpndNhm1Z\_xSoHb.png)

```
# Logical ANDprint(True and True)    # => Trueprint(True and False)   # => Falseprint(False and False)  # => False
```

```
# Logical ORprint(True or True)     # => Trueprint(True or False)    # => Trueprint(False or False)   # => False
```

```
# Logical NOTprint(not True)             # => Falseprint(not False and True)   # => Trueprint(not True or False)    # => False
```

* By default, Python considers an object to be true UNLESS it is one of the following:
* Constant `None` or `False`
* Zero of any numeric type.
* Empty Sequence or Collection.
* `True` and `False` must be capitalized

#### Comparison Operators <a href="#586f" id="586f"></a>

* Python uses all the same equality operators as JS.
* In Python, equality operators are processed from left to right.
* Logical operators are processed in this order:

1. **NOT**
2. **AND**
3. **OR**

> Just like in JS, you can use `parentheses` to change the inherent order of operations.

> **Short Circuit** : Stopping a program when a `true` or `false` has been reached.

![](https://cdn-images-1.medium.com/max/800/0\*qHzGRLTOMTf30miT.png)

#### Identity vs Equality <a href="#4ed8" id="4ed8"></a>

```
print (2 == '2')    # => Falseprint (2 is '2')    # => False
```

```
print ("2" == '2')    # => Trueprint ("2" is '2')    # => True
```

```
# There is a distinction between the number types.print (2 == 2.0)    # => Trueprint (2 is 2.0)    # => False
```

* In the Python community it is better to use `is` and `is not` over `==` or `!=`

#### If Statements <a href="#a959" id="a959"></a>

```
if name == 'Monica':    print('Hi, Monica.')
```

```
if name == 'Monica':    print('Hi, Monica.')else:    print('Hello, stranger.')
```

```
if name == 'Monica':    print('Hi, Monica.')elif age < 12:    print('You are not Monica, kiddo.')elif age > 2000:   print('Unlike you, Monica is not an undead, immortal vampire.')elif age > 100:   print('You are not Monica, grannie.')
```

> Remember the order of `elif` statements matter.

#### While Statements <a href="#bc26" id="bc26"></a>

```
spam = 0while spam < 5:  print('Hello, world.')  spam = spam + 1
```

* `Break` statement also exists in Python.

```
spam = 0while True:  print('Hello, world.')  spam = spam + 1  if spam >= 5:    break
```

* As are `continue` statements

```
spam = 0while True:  print('Hello, world.')  spam = spam + 1  if spam < 5:    continue  break
```

#### Try/Except Statements <a href="#fb57" id="fb57"></a>

* Python equivalent to `try/catch`

```
a = 321try:    print(len(a))except:    print('Silently handle error here')
```

```
    # Optionally include a correction to the issue    a = str(a)    print(len(a)
```

```
a = '321'try:    print(len(a))except:    print('Silently handle error here')
```

```
    # Optionally include a correction to the issue    a = str(a)    print(len(a))
```

* You can name an error to give the output more specificity.

```
a = 100b = 0try:    c = a / bexcept ZeroDivisionError:    c = Noneprint(c)
```

* You can also use the `pass` commmand to by pass a certain error.

```
a = 100b = 0try:    print(a / b)except ZeroDivisionError:    pass
```

* The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:

```
a = 100# b = "5"try:    print(a / b)except ZeroDivisionError:    passexcept (TypeError, NameError):    print("ERROR!")
```

* You can use an `else` statement to end a chain of `except` statements.

```
# tuple of file namesfiles = ('one.txt', 'two.txt', 'three.txt')
```

```
# simple loopfor filename in files:    try:        # open the file in read mode        f = open(filename, 'r')    except OSError:        # handle the case where file does not exist or permission is denied        print('cannot open file', filename)    else:        # do stuff with the file object (f)        print(filename, 'opened successfully')        print('found', len(f.readlines()), 'lines')        f.close()
```

* `finally` is used at the end to clean up all actions under any circumstance.

```
def divide(x, y):    try:        result = x / y    except ZeroDivisionError:        print("Cannot divide by zero")    else:        print("Result is", result)    finally:        print("Finally...")
```

* Using duck typing to check to see if some value is able to use a certain method.

```
# Try a number - nothing will print outa = 321if hasattr(a, '__len__'):    print(len(a))
```

```
# Try a string - the length will print out (4 in this case)b = "5555"if hasattr(b, '__len__'):    print(len(b))
```

#### Pass <a href="#e485" id="e485"></a>

* Pass Keyword is required to write the JS equivalent of :

```
if (true) {}
```

```
while (true) {}
```

```
if True:  pass
```

```
while True:  pass
```

#### Functions <a href="#2623" id="2623"></a>

* **Function definition includes:**
* **The `def` keyword**
* **The name of the function**
* **A list of parameters enclosed in parentheses.**
* **A colon at the end of the line.**
* **One tab indentation for the code to run.**
* **You can use default parameters just like in JS**

```
def greeting(name, saying="Hello"):    print(saying, name)
```

```
greeting("Monica")# Hello Monica
```

```
greeting("Barry", "Hey")# Hey Barry
```

**Keep in mind, default parameters must always come after regular parameters.**

```
# THIS IS BAD CODE AND WILL NOT RUNdef increment(delta=1, value):    return delta + value
```

* _You can specify arguments by name without destructuring in Python._

```
def greeting(name, saying="Hello"):    print(saying, name)
```

```
# name has no default value, so just provide the value# saying has a default value, so use a keyword argumentgreeting("Monica", saying="Hi")
```

* The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

#### Notes <a href="#4564" id="4564"></a>

**Formatted Strings**

> Remember that in Python join() is called on a string with an array/list passed in as the argument.\
> Python has a very powerful formatting engine.\
> format() is also applied directly to strings.

```
shopping_list = [‘bread’,’milk’,’eggs’]print(‘,’.join(shopping_list))
```

#### Comma Thousands Separator <a href="#5fda" id="5fda"></a>

```
print(‘{:,}’.format(1234567890))‘1,234,567,890’
```

#### Date and Time <a href="#d948" id="d948"></a>

```
d = datetime.datetime(2020, 7, 4, 12, 15, 58)print(‘{:%Y-%m-%d %H:%M:%S}’.format(d))‘2020–07–04 12:15:58’
```

#### Percentage <a href="#37d5" id="37d5"></a>

```
points = 190total = 220print(‘Correct answers: {:.2%}’.format(points/total))Correct answers: 86.36%
```

#### Data Tables <a href="#92ea" id="92ea"></a>

```
width=8print(‘ decimal hex binary’)print(‘-’*27)for num in range(1,16):for base in ‘dXb’:print(‘{0:{width}{base}}’.format(num, base=base, width=width), end=’ ‘)print()Getting Input from the Command LinePython runs synchronously, all programs and processes will stop when listening for a user input.The input function shows a prompt to a user and waits for them to type ‘ENTER’.Scripts vs ProgramsProgramming Script : A set of code that runs in a linear fashion.The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI’s.
```

**Python can be used to display html, css, and JS.**\
_It is common to use Python as an API (Application Programming Interface)_

**Structured Data**

**Sequence : The most basic data structure in Python where the index determines the order.**

> List\
> Tuple\
> Range\
> Collections : Unordered data structures, hashable values.

**Dictionaries**\
**Sets**

**Iterable : Generic name for a sequence or collection; any object that can be iterated through.**

**Can be mutable or immutable.**\
**Built In Data Types**

#### Lists are the python equivalent of arrays. <a href="#71e2" id="71e2"></a>

```
empty_list = []departments = [‘HR’,’Development’,’Sales’,’Finance’,’IT’,’Customer Support’]
```

#### You can instantiate <a href="#97e6" id="97e6"></a>

```
specials = list()
```

**Test if a value is in a list.**

```
print(1 in [1, 2, 3]) #> Trueprint(4 in [1, 2, 3]) #> False# Tuples : Very similar to lists, but they are immutable
```

**Instantiated with parentheses**

```
time_blocks = (‘AM’,’PM’)
```

**Sometimes instantiated without**

```
colors = ‘red’,’blue’,’green’numbers = 1, 2, 3
```

**Tuple() built in can be used to convert other data into a tuple**

```
tuple(‘abc’) # returns (‘a’, ‘b’, ‘c’)tuple([1,2,3]) # returns (1, 2, 3)# Think of tuples as constant variables.
```

**Ranges : A list of numbers which can’t be changed; often used with for loops.**

**Declared using one to three parameters**.

> Start : opt. default 0, first # in sequence.\
> Stop : required next number past the last number in the sequence.\
> Step : opt. default 1, difference between each number in the sequence.

```
range(5) # [0, 1, 2, 3, 4]range(1,5) # [1, 2, 3, 4]range(0, 25, 5) # [0, 5, 10, 15, 20]range(0) # [ ]for let (i = 0; i < 5; i++)for let (i = 1; i < 5; i++)for let (i = 0; i < 25; i+=5)for let(i = 0; i = 0; i++)# Keep in mind that stop is not included in the range.
```

**Dictionaries : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.**

**Mutable.**

```
a = {‘one’:1, ‘two’:2, ‘three’:3}b = dict(one=1, two=2, three=3)c = dict([(‘two’, 2), (‘one’, 1), (‘three’, 3)])# a, b, and c are all equal
```

_**Declared with curly braces of the built in dict()**_

> _Benefit of dictionaries in Python is that it doesn’t matter how it is defined, if the keys and values are the same the dictionaries are considered equal._

**Use the in operator to see if a key exists in a dictionary.**

S**ets : Unordered collection of distinct objects; objects that need to be hashable.**

> _Always be unique, duplicate items are auto dropped from the set._

**Common Uses:**

> Removing Duplicates\
> Membership Testing\
> Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.

**Standard Set is mutable, Python has a immutable version called frozenset.**\
**Sets created by putting comma seperated values inside braces:**

```
school_bag = {‘book’,’paper’,’pencil’,’pencil’,’book’,’book’,’book’,’eraser’}print(school_bag)
```

**Also can use set constructor to automatically put it into a set.**

```
letters = set(‘abracadabra’)print(letters)#Built-In Functions#Functions using iterables
```

**filter(function, iterable) : creates new iterable of the same type which includes each item for which the function returns true.**

**map(function, iterable) : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.**

**sorted(iterable, key=None, reverse=False) : creates a new sorted list from the items in the iterable.**

**Output is always a list**

**key: opt function which coverts and item to a value to be compared.**

**reverse: optional boolean.**

**enumerate(iterable, start=0) : starts with a sequence and converts it to a series of tuples**

```
quarters = [‘First’, ‘Second’, ‘Third’, ‘Fourth’]print(enumerate(quarters))print(enumerate(quarters, start=1))
```

**(0, ‘First’), (1, ‘Second’), (2, ‘Third’), (3, ‘Fourth’)**

**(1, ‘First’), (2, ‘Second’), (3, ‘Third’), (4, ‘Fourth’)**

> zip(\*iterables) : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.\
> Functions that analyze iterable

**len(iterable) : returns the count of the number of items.**

**max(\*args, key=None) : returns the largest of two or more arguments.**

**max(iterable, key=None) : returns the largest item in the iterable.**

_key optional function which converts an item to a value to be compared._\
_min works the same way as max_

**sum(iterable) : used with a list of numbers to generate the total.**

_There is a faster way to concatenate an array of strings into one string, so do not use sum for that._

**any(iterable) : returns True if any items in the iterable are true.**

**all(iterable) : returns True is all items in the iterable are true.**

#### Working with dictionaries <a href="#92ad" id="92ad"></a>

**dir(dictionary) : returns the list of keys in the dictionary.**\
**Working with sets**

**Union : The pipe | operator or union(\*sets) function can be used to produce a new set which is a combination of all elements in the provided set.**

```
a = {1, 2, 3}b = {2, 4, 6}print(a | b) # => {1, 2, 3, 4, 6}
```

**Intersection : The & operator ca be used to produce a new set of only the elements that appear in all sets.**

```
a = {1, 2, 3}b = {2, 4, 6}print(a & b) # => {2}Difference : The — operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.
```

**Symmetric Difference : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.**

```
a = {1, 2, 3}b = {2, 4, 6}print(a — b) # => {1, 3}print(b — a) # => {4, 6}print(a ^ b) # => {1, 3, 4, 6}
```

#### **For Statements** **In python, there is only one for loop.** <a href="#ed03" id="ed03"></a>

Always Includes:

> 1\. The for keyword\
> 2\. A variable name\
> 3\. The ‘in’ keyword\
> 4\. An iterable of some kid\
> 5\. A colon\
> 6\. On the next line, an indented block of code called the for clause.

**You can use break and continue statements inside for loops as well.**

**You can use the range function as the iterable for the for loop.**

```
print(‘My name is’)for i in range(5):print(‘Carlita Cinco (‘ + str(i) + ‘)’)
```

```
total = 0for num in range(101):total += numprint(total)Looping over a list in Pythonfor c in [‘a’, ‘b’, ‘c’]:print(c)
```

```
lst = [0, 1, 2, 3]for i in lst:print(i)
```

_**Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list.**_

```
supplies = [‘pens’, ‘staplers’, ‘flame-throwers’, ‘binders’]for i in range(len(supplies)):print(‘Index ‘ + str(i) + ‘ in supplies is: ‘ + supplies[i])
```

**You can loop and destructure at the same time.**

```
l = 1, 2], [3, 4], [5, 6for a, b in l:print(a, ‘, ‘, b)
```

> Prints 1, 2

> Prints 3, 4

> Prints 5, 6

**You can use values() and keys() to loop over dictionaries.**

```
spam = {‘color’: ‘red’, ‘age’: 42}for v in spam.values():print(v)
```

_Prints red_

_Prints 42_

```
for k in spam.keys():print(k)
```

_Prints color_

_Prints age_

**For loops can also iterate over both keys and values.**

**Getting tuples**

```
for i in spam.items():print(i)
```

_Prints (‘color’, ‘red’)_

_Prints (‘age’, 42)_

_Destructuring to values_

```
for k, v in spam.items():print(‘Key: ‘ + k + ‘ Value: ‘ + str(v))
```

_Prints Key: age Value: 42_

_Prints Key: color Value: red_

**Looping over string**

```
for c in “abcdefg”:print(c)
```

**When you order arguments within a function or function call, the args need to occur in a particular order:**

_formal positional args._

\*args

_keyword args with default values_

\*\*kwargs

```
def example(arg_1, arg_2, *args, **kwargs):pass
```

```
def example2(arg_1, arg_2, *args, kw_1=”shark”, kw_2=”blowfish”, **kwargs):pass
```

#### **Importing in Python** <a href="#4451" id="4451"></a>

**Modules are similar to packages in Node.js**\
Come in different types:

Built-In,

Third-Party,

Custom.

**All loaded using import statements.**

#### **Terms** <a href="#7c4f" id="7c4f"></a>

> module : Python code in a separate file.\
> package : Path to a directory that contains modules.\
> [**init.py**](http://init.py) : Default file for a package.\
> submodule : Another file in a module’s folder.\
> function : Function in a module.

**A module can be any file but it is usually created by placing a special file init.py into a folder. pic**

_Try to avoid importing with wildcards in Python._

_Use multiple lines for clarity when importing._

```
from urllib.request import (HTTPDefaultErrorHandler as ErrorHandler,HTTPRedirectHandler as RedirectHandler,Request,pathname2url,url2pathname,urlopen,)
```

#### Watching Out for Python 2 <a href="#7040" id="7040"></a>

**Python 3 removed <> and only uses !=**

**format() was introduced with P3**

**All strings in P3 are unicode and encoded.**\
**md5 was removed.**

**ConfigParser was renamed to configparser**\
**sets were killed in favor of set() class.**

**print was a statement in P2, but is a function in P3.**

#### Topics revisited (in python syntax) <a href="#9427" id="9427"></a>

#### Cheat Sheet: <a href="#3beb" id="3beb"></a>

**If you found this guide helpful feel free to checkout my github/gists where I host similar content:**

[bgoonz’s gists · GitHub](https://gist.github.com/bgoonz)

Or Checkout my personal Resource Site:

#### Python Cheat Sheet: <a href="#2eba" id="2eba"></a>

#### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content: <a href="#56d3" id="56d3"></a>

#### Or Checkout my personal Resource Site: <a href="#a4a1" id="a4a1"></a>

#### Discover More: <a href="#5b19" id="5b19"></a>
