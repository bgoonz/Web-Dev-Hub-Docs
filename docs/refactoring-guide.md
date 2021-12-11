# Refactoring Guide



## Refactoring

> ### Excerpt
>
> Design Patterns and Refactoring articles and guides. Design Patterns video tutorials for newbies. Simple descriptions and full source code examples in Java, C++, C#, PHP and Delphi.

***

Much of refactoring is devoted to correctly composing methods. In most cases, excessively long methods are the root of all evil. The vagaries of code inside these methods conceal the execution logic and make the method extremely hard to understand – and even harder to change. The refactoring techniques in this group streamline methods, remove code duplication, and pave the way for future improvements. Bloaters

***

Bloaters are code, methods and classes that have increased to such gargantuan proportions that they are hard to work with. Usually these smells do not crop up right away, rather they accumulate over time as the program evolves (and especially when nobody makes an effort to eradicate them). [Long Method](https://sourcemaking.com/refactoring/smells/long-method) A method contains too many lines of code. Generally, any method longer than ten lines should make you start asking questions. [Large Class](https://sourcemaking.com/refactoring/smells/large-class) A class contains many fields/methods/lines of code. [Primitive Obsession](https://sourcemaking.com/refactoring/smells/primitive-obsession)

* Use of primitives instead of small objects for simple tasks (such as currency, ranges, special strings for phone numbers, etc.)
* Use of constants for coding information (such as a constant `USER_ADMIN_ROLE = 1` for referring to users with administrator rights.)
* Use of string constants as field names for use in data arrays. [Long Parameter List](https://sourcemaking.com/refactoring/smells/long-parameter-list) More than three or four parameters for a method. [Data Clumps](https://sourcemaking.com/refactoring/smells/data-clumps) Sometimes different parts of the code contain identical groups of variables (such as parameters for connecting to a database). These clumps should be turned into their own classes.

## Long Method

#### Signs and Symptoms

A method contains too many lines of code. Generally, any method longer than ten lines should make you start asking questions. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/long-method-1.png?id=d94fbb3889bb52815774)

#### Reasons for the Problem

Like the Hotel California, something is always being added to a method but nothing is ever taken out. Since it is easier to write code than to read it, this "smell" remains unnoticed until the method turns into an ugly, oversized beast. Mentally, it is often harder to create a new method than to add to an existing one: "But it's just two lines, there's no use in creating a whole method just for that..." Which means that another line is added and then yet another, giving birth to a tangle of spaghetti code.

#### Treatment

As a rule of thumb, if you feel the need to comment on something inside a method, you should take this code and put it in a new method. Even a single line can and should be split off into a separate method, if it requires explanations. And if the method has a descriptive name, nobody will need to look at the code to see what it does. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/long-method-2.png?id=068ba3d94b5e902e34ae)

* To reduce the length of a method body, use [Extract Method](https://sourcemaking.com/refactoring/extract-method).
* If local variables and parameters interfere with extracting a method, use [Replace Temp with Query](https://sourcemaking.com/refactoring/replace-temp-with-query), [Introduce Parameter Object](https://sourcemaking.com/refactoring/introduce-parameter-object) or [Preserve Whole Object](https://sourcemaking.com/refactoring/preserve-whole-object).
* If none of the previous recipes help, try moving the entire method to a separate object via [Replace Method with Method Object](https://sourcemaking.com/refactoring/replace-method-with-method-object).
* Conditional operators and loops are a good clue that code can be moved to a separate method. For conditionals, use [Decompose Conditional](https://sourcemaking.com/refactoring/decompose-conditional). If loops are in the way, try [Extract Method](https://sourcemaking.com/refactoring/extract-method).

#### Payoff

* Among all types of object oriented code, classes with short methods live longest. The longer a method or function is, the harder it becomes to understand and maintain it.
* In addition, long methods offer the perfect hiding place for unwanted duplicate code. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/long-method-3.png?id=0a49b42833dfbab3f43b)

#### Performance

Does an increase in the number of methods hurt performance, as many people claim? In almost all cases the impact is so negligible that it's not even worth worrying about. Plus, now that you have clear and understandable code, you are more likely to find truly effective methods for restructuring code and getting real performance gains if the need ever arises.

## Large Class\#

#### Signs and Symptoms

A class contains many fields/methods/lines of code. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/large-class-1.png?id=4d1abaeb61a74f2ac6d7)

#### Reasons for the Problem

Classes usually start small. But over time, they get bloated as the program grows. As is the case with long methods as well, programmers usually find it mentally less taxing to place a new feature in an existing class than to create a new class for the feature.

#### Treatment

When a class is wearing too many (functional) hats, think about splitting it up: ![](https://sourcemaking.com/images/refactoring-illustrations/2x/large-class-2.png?id=69091c1a35bdfb7bb803)

* [Extract Class](https://sourcemaking.com/refactoring/extract-class) helps if part of the behavior of the large class can be spun off into a separate component.
* [Extract Subclass](https://sourcemaking.com/refactoring/extract-subclass) helps if part of the behavior of the large class can be implemented in different ways or is used in rare cases.
* [Extract Interface](https://sourcemaking.com/refactoring/extract-interface) helps if it is necessary to have a list of the operations and behaviors that the client can use.
* If a large class is responsible for the graphical interface, you may try to move some of its data and behavior to a separate domain object. In doing so, it may be necessary to store copies of some data in two places and keep the data consistent. [Duplicate Observed Data](https://sourcemaking.com/refactoring/duplicate-observed-data) offers a way to do this.

#### Payoff

* Refactoring of these classes spares developers from needing to remember a large number of attributes for a class.
* In many cases, splitting large classes into parts avoids duplication of code and functionality. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/large-class-3.png?id=a0855ce572b55489da49) Primitive Obsession

#### Signs and Symptoms

* Use of primitives instead of small objects for simple tasks (such as currency, ranges, special strings for phone numbers, etc.)
* Use of constants for coding information (such as a constant `USER_ADMIN_ROLE = 1` for referring to users with administrator rights.)
* Use of string constants as field names for use in data arrays. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/primitive-obsession-1.png?id=4b5e98e363f6cc0aeda2)

#### Reasons for the Problem

Like most other smells, primitive obsessions are born in moments of weakness. "Just a field for storing some data!" the programmer said. Creating a primitive field is so much easier than making a whole new class, right? And so it was done. Then another field was needed and added in the same way. Lo and behold, the class became huge and unwieldy. Primitives are often used to "simulate" types. So instead of a separate data type, you have a set of numbers or strings that form the list of allowable values for some entity. Easy-to-understand names are then given to these specific numbers and strings via constants, which is why they are spread wide and far. Another example of poor primitive use is field simulation. The class contains a large array of diverse data and string constants (which are specified in the class) are used as array indices for getting this data.

#### Treatment

* If you have a large variety of primitive fields, it may be possible to logically group some of them into their own class. Even better, move the behavior associated with this data into the class too. For this task, try [Replace Data Value with Object](https://sourcemaking.com/refactoring/replace-data-value-with-object). ![](https://sourcemaking.com/images/refactoring-illustrations/2x/primitive-obsession-2.png?id=41d845be4fd488fc8e69)
* If the values of primitive fields are used in method parameters, go with [Introduce Parameter Object](https://sourcemaking.com/refactoring/introduce-parameter-object) or [Preserve Whole Object](https://sourcemaking.com/refactoring/preserve-whole-object).
* When complicated data is coded in variables, use [Replace Type Code with Class](https://sourcemaking.com/refactoring/replace-type-code-with-class), [Replace Type Code with Subclasses](https://sourcemaking.com/refactoring/replace-type-code-with-subclasses) or [Replace Type Code with State/Strategy](https://sourcemaking.com/refactoring/replace-type-code-with-state-strategy).
* If there are arrays among the variables, use [Replace Array with Object](https://sourcemaking.com/refactoring/replace-array-with-object).

#### Payoff

* Code becomes more flexible thanks to use of objects instead of primitives.
* Better understandability and organization of code. Operations on particular data are in the same place, instead of being scattered. No more guessing about the reason for all these strange constants and why they are in an array.
* Easier finding of duplicate code. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/primitive-obsession-3.png?id=fbb0c8e186eaa10d9b09) Long Parameter List

#### Signs and Symptoms

More than three or four parameters for a method. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/long-parameter-list-1.png?id=f6edc90940c8f404ae12)

#### Reasons for the Problem

A long list of parameters might happen after several types of algorithms are merged in a single method. A long list may have been created to control which algorithm will be run and how. Long parameter lists may also be the byproduct of efforts to make classes more independent of each other. For example, the code for creating specific objects needed in a method was moved from the method to the code for calling the method, but the created objects are passed to the method as parameters. Thus the original class no longer knows about the relationships between objects, and dependency has decreased. But if several of these objects are created, each of them will require its own parameter, which means a longer parameter list. It is hard to understand such lists, which become contradictory and hard to use as they grow longer. Instead of a long list of parameters, a method can use the data of its own object. If the current object does not contain all necessary data, another object (which will get the necessary data) can be passed as a method parameter.

#### Treatment

* Check what values are passed to parameters. If some of the arguments are just results of method calls of another object, use [Replace Parameter with Method Call](https://sourcemaking.com/refactoring/replace-parameter-with-method-call). This object can be placed in the field of its own class or passed as a method parameter. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/long-parameter-list-2.png?id=3b36231d7acc7e4f9fc7)
* Instead of passing a group of data received from another object as parameters, pass the object itself to the method, by using [Preserve Whole Object](https://sourcemaking.com/refactoring/preserve-whole-object).
* If there are several unrelated data elements, sometimes you can merge them into a single parameter object via [Introduce Parameter Object](https://sourcemaking.com/refactoring/introduce-parameter-object).

#### Payoff

* More readable, shorter code.
* Refactoring may reveal previously unnoticed duplicate code.

#### When to Ignore

* Do not get rid of parameters if doing so would cause unwanted dependency between classes.

## Data Clumps\#

#### Signs and Symptoms

Sometimes different parts of the code contain identical groups of variables (such as parameters for connecting to a database). These clumps should be turned into their own classes. ![](https://sourcemaking.com/images/refactoring-illustrations/data-clumps-1.png?id=2e96e441c1a93d611141)

#### Reasons for the Problem

Often these data groups are due to poor program structure or "copypasta programming". If you want to make sure whether or not some data is a data clump, just delete one of the data values and see whether the other values still make sense. If this is not the case, this is a good sign that this group of variables should be combined into an object.

#### Treatment

* If repeating data comprises the fields of a class, use [Extract Class](https://sourcemaking.com/refactoring/extract-class) to move the fields to their own class.
* If the same data clumps are passed in the parameters of methods, use [Introduce Parameter Object](https://sourcemaking.com/refactoring/introduce-parameter-object) to set them off as a class.
* If some of the data is passed to other methods, think about passing the entire data object to the method instead of just individual fields. [Preserve Whole Object](https://sourcemaking.com/refactoring/preserve-whole-object) will help with this.
* Look at the code used by these fields. It may be a good idea to move this code to a data class.

#### Payoff

* Improves understanding and organization of code. Operations on particular data are now gathered in a single place, instead of haphazardly throughout the code.
* Reduces code size. ![](https://sourcemaking.com/images/refactoring-illustrations/data-clumps-3.png?id=a34365971c6d18f2ddd6)

#### When to Ignore

* Passing an entire object in the parameters of a method, instead of passing just its values (primitive types), may create an undesirable dependency between the two classes. Object-Orientation Abusers

***

***

All these smells are incomplete or incorrect application of object-oriented programming principles. [Switch Statements](https://sourcemaking.com/refactoring/smells/switch-statements) You have a complex `switch` operator or sequence of `if` statements. [Temporary Field](https://sourcemaking.com/refactoring/smells/temporary-field) Temporary fields get their values (and thus are needed by objects) only under certain circumstances. Outside of these circumstances, they are empty. [Refused Bequest](https://sourcemaking.com/refactoring/smells/refused-bequest) If a subclass uses only some of the methods and properties inherited from its parents, the hierarchy is off-kilter. The unneeded methods may simply go unused or be redefined and give off exceptions. [Alternative Classes with Different Interfaces](https://sourcemaking.com/refactoring/smells/alternative-classes-with-different-interfaces) Two classes perform identical functions but have different method names.

## Switch Statements

#### Signs and Symptoms

You have a complex `switch` operator or sequence of `if` statements. ![](https://sourcemaking.com/images/refactoring-illustrations/switch-statements-1.png?id=7bed925679187c2802ed)

#### Reasons for the Problem

Relatively rare use of `switch` and `case` operators is one of the hallmarks of object-oriented code. Often code for a single `switch` can be scattered in different places in the program. When a new condition is added, you have to find all the `switch` code and modify it. As a rule of thumb, when you see `switch` you should think of polymorphism.

#### Treatment

* To isolate `switch` and put it in the right class, you may need [Extract Method](https://sourcemaking.com/refactoring/extract-method) and then [Move Method](https://sourcemaking.com/refactoring/move-method).
* If a `switch` is based on type code, such as when the program's runtime mode is switched, use [Replace Type Code with Subclasses](https://sourcemaking.com/refactoring/replace-type-code-with-subclasses) or [Replace Type Code with State/Strategy](https://sourcemaking.com/refactoring/replace-type-code-with-state-strategy).
* After specifying the inheritance structure, use [Replace Conditional with Polymorphism](https://sourcemaking.com/refactoring/replace-conditional-with-polymorphism).
* If there are not too many conditions in the operator and they all call same method with different parameters, polymorphism will be superfluous. If this case, you can break that method into multiple smaller methods with [Replace Parameter with Explicit Methods](https://sourcemaking.com/refactoring/replace-parameter-with-explicit-methods) and change the `switch` accordingly.
* If one of the conditional options is `null`, use [Introduce Null Object](https://sourcemaking.com/refactoring/introduce-null-object).

#### Payoff

* Improved code organization. ![](https://sourcemaking.com/images/refactoring-illustrations/switch-statements-2.png?id=303b4d07bde38063def2)

#### When to Ignore

* When a `switch` operator performs simple actions, there is no reason to make code changes.
* Often `switch` operators are used by factory design patterns ([Factory Method](http://sourcemaking.com/design\_patterns/factory\_method) and [Abstract Factory](http://sourcemaking.com/design\_patterns/abstract\_factory)) to select a created class.

## Temporary Field

#### Signs and Symptoms

Temporary fields get their values (and thus are needed by objects) only under certain circumstances. Outside of these circumstances, they are empty. ![](https://sourcemaking.com/images/refactoring-illustrations/temporary-field-1.png?id=6043e9313bfd992ca190)

#### Reasons for the Problem

Oftentimes, temporary fields are created for use in an algorithm that requires a large amount of inputs. So instead of creating a large number of parameters in the method, the programmer decides to create fields for this data in the class. These fields are used only in the algorithm and go unused the rest of the time. This kind of code is tough to understand. You expect to see data in object fields but for some reason they are almost always empty.

#### Treatment

* Temporary fields and all code operating on them can be put in a separate class via [Extract Class](https://sourcemaking.com/refactoring/extract-class). In other words, you are creating a method object, achieving the same result as if you would perform [Replace Method with Method Object](https://sourcemaking.com/refactoring/replace-method-with-method-object). ![](https://sourcemaking.com/images/refactoring-illustrations/temporary-field-2.png?id=c5e3a7844f2ff53ef0da)
* [Introduce Null Object](https://sourcemaking.com/refactoring/introduce-null-object) and integrate it in place of the conditional code which was used to check the temporary field values for existence.

#### Payoff

* Better code clarity and organization. ![](https://sourcemaking.com/images/refactoring-illustrations/temporary-field-3.png?id=198b1e499f76fcac84d5)

## Refused Bequest\#

#### Signs and Symptoms

If a subclass uses only some of the methods and properties inherited from its parents, the hierarchy is off-kilter. The unneeded methods may simply go unused or be redefined and give off exceptions. ![](https://sourcemaking.com/images/refactoring-illustrations/refused-bequest-1.png?id=97fdab420a7a4ed8731b)

#### Reasons for the Problem

Someone was motivated to create inheritance between classes only by the desire to reuse the code in a superclass. But the superclass and subclass are completely different.

#### Treatment

* If inheritance makes no sense and the subclass really does have nothing in common with the superclass, eliminate inheritance in favor of [Replace Inheritance with Delegation](https://sourcemaking.com/refactoring/replace-inheritance-with-delegation). ![](https://sourcemaking.com/images/refactoring-illustrations/refused-bequest-2.png?id=d0ba4acbc690d754c957)
* If inheritance is appropriate, get rid of unneeded fields and methods in the subclass. Extract all fields and methods needed by the subclass from the parent class, put them in a new subclass, and set both classes to inherit from it ([Extract Superclass](https://sourcemaking.com/refactoring/extract-superclass)).

#### Payoff

* Improves code clarity and organization. You will no longer have to wonder why the `Dog` class is inherited from the `Chair` class (even though they both have 4 legs). ![](https://sourcemaking.com/images/refactoring-illustrations/refused-bequest-3.png?id=bb42ebd5e3dc48ae01b1) Alternative Classes with Different Interfaces

***

#### Signs and Symptoms

Two classes perform identical functions but have different method names. ![](https://sourcemaking.com/images/refactoring-illustrations/alternative-classes-with-different-interfaces-1.png?id=eaa33cf9fca11afd9df1)

#### Reasons for the Problem

The programmer who created one of the classes probably didn't know that a functionally equivalent class already existed.

#### Treatment

Try to put the interface of classes in terms of a common denominator:

* [Rename Method](https://sourcemaking.com/refactoring/rename-method)s to make them identical in all alternative classes.
* [Move Method](https://sourcemaking.com/refactoring/move-method), [Add Parameter](https://sourcemaking.com/refactoring/add-parameter) and [Parameterize Method](https://sourcemaking.com/refactoring/parameterize-method) to make the signature and implementation of methods the same.
* If only part of the functionality of the classes is duplicated, try using [Extract Superclass](https://sourcemaking.com/refactoring/extract-superclass). In this case, the existing classes will become subclasses.
* After you have determined which treatment method to use and implemented it, you may be able to delete one of the classes.

#### Payoff

* You get rid of unnecessary duplicated code, making the resulting code less bulky.
* Code becomes more readable and understandable (you no longer have to guess the reason for creation of a second class performing the exact same functions as the first one). ![](https://sourcemaking.com/images/refactoring-illustrations/alternative-classes-with-different-interfaces-2.png?id=661f3803e39044b7eb0e)

#### When to Ignore

* Sometimes merging classes is impossible or so difficult as to be pointless. One example is when the alternative classes are in different libraries that each have their own version of the class.c

## Change Preventers\#

***

***

These smells mean that if you need to change something in one place in your code, you have to make many changes in other places too. Program development becomes much more complicated and expensive as a result. [Divergent Change](https://sourcemaking.com/refactoring/smells/divergent-change) You find yourself having to change many unrelated methods when you make changes to a class. For example, when adding a new product type you have to change the methods for finding, displaying, and ordering products. [Shotgun Surgery](https://sourcemaking.com/refactoring/smells/shotgun-surgery) Making any modifications requires that you make many small changes to many different classes. [Parallel Inheritance Hierarchies](https://sourcemaking.com/refactoring/smells/parallel-inheritance-hierarchies) Whenever you create a subclass for a class, you find yourself needing to create a subclass for another class.

## Divergent Change\#

***

> _Divergent Change_ resembles [Shotgun Surgery](https://sourcemaking.com/refactoring/smells/shotgun-surgery) but is actually the opposite smell. _Divergent Change_ is when many changes are made to a single class. _Shotgun Surgery_ refers to when a single change is made to multiple classes simultaneously.

#### Signs and Symptoms

You find yourself having to change many unrelated methods when you make changes to a class. For example, when adding a new product type you have to change the methods for finding, displaying, and ordering products. ![](https://sourcemaking.com/images/refactoring-illustrations/divergent-change-1.png?id=b47440967463e441b644)

#### Reasons for the Problem

Often these divergent modifications are due to poor program structure or "copypasta programming".

#### Treatment

* Split up the behavior of the class via [Extract Class](https://sourcemaking.com/refactoring/extract-class).
* If different classes have the same behavior, you may want to combine the classes through inheritance ([Extract Superclass](https://sourcemaking.com/refactoring/extract-superclass) and [Extract Subclass](https://sourcemaking.com/refactoring/extract-subclass)).

#### Payoff

* Improves code organization.
* Reduces code duplication.
* Simplifies support.

## Shotgun Surgery

> _Shotgun Surgery_ resembles [Divergent Change](https://sourcemaking.com/refactoring/smells/divergent-change) but is actually the opposite smell. _Divergent Change_ is when many changes are made to a single class. _Shotgun Surgery_ refers to when a single change is made to multiple classes simultaneously.

#### Signs and Symptoms

Making any modifications requires that you make many small changes to many different classes. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/shotgun-surgery-1.png?id=90af2b9432b2b0cac629)

#### Reasons for the Problem

A single responsibility has been split up among a large number of classes. This can happen after overzealous application of [Divergent Change](https://sourcemaking.com/refactoring/smells/divergent-change).

#### Treatment

* Use [Move Method](https://sourcemaking.com/refactoring/move-method) and [Move Field](https://sourcemaking.com/refactoring/move-field) to move existing class behaviors into a single class. If there is no class appropriate for this, create a new one. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/shotgun-surgery-2.png?id=11c24bfb9d4d128f66df)
* If moving code to the same class leaves the original classes almost empty, try to get rid of these now-redundant classes via [Inline Class](https://sourcemaking.com/refactoring/inline-class).

#### Payoff

* Better organization.
* Less code duplication.
* Easier maintenance. ![](https://sourcemaking.com/images/refactoring-illustrations/2x/shotgun-surgery-3.png?id=3e5afded153002533149) Parallel Inheritance Hierarchies

#### Signs and Symptoms

Whenever you create a subclass for a class, you find yourself needing to create a subclass for another class. ![](https://sourcemaking.com/images/refactoring-illustrations/parallel-inheritance-hierarchies-1.png?id=6db459493612332d77db)

#### Reasons for the Problem

All was well as long as the hierarchy stayed small. But with new classes being added, making changes has become harder and harder.

#### Treatment

* You may de-duplicate parallel class hierarchies in two steps. First, make instances of one hierarchy refer to instances of another hierarchy. Then, remove the hierarchy in the referred class, by using [Move Method](https://sourcemaking.com/refactoring/move-method) and [Move Field](https://sourcemaking.com/refactoring/move-field).

#### Payoff

* Reduces code duplication.
* Can improve organization of code.

#### When to Ignore

* Sometimes having parallel class hierarchies is just a way to avoid even bigger mess with program architecture. If you find that your attempts to de-duplicate hierarchies produce even uglier code, just step out, revert all of your changes and get used to that code. Dispensables

A dispensable is something pointless and unneeded whose absence would make the code cleaner, more efficient and easier to understand. [Comments](https://sourcemaking.com/refactoring/smells/comments) A method is filled with explanatory comments. [Duplicate Code](https://sourcemaking.com/refactoring/smells/duplicate-code) Two code fragments look almost identical. [Lazy Class](https://sourcemaking.com/refactoring/smells/lazy-class) Understanding and maintaining classes always costs time and money. So if a class doesn't do enough to earn your attention, it should be deleted. [Data Class](https://sourcemaking.com/refactoring/smells/data-class) A data class refers to a class that contains only fields and crude methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes do not contain any additional functionality and cannot independently operate on the data that they own. [Dead Code](https://sourcemaking.com/refactoring/smells/dead-code) A variable, parameter, field, method or class is no longer used (usually because it is obsolete). [Speculative Generality](https://sourcemaking.com/refactoring/smells/speculative-generality) There is an unused class, method, field or parameter. Comments

#### Signs and Symptoms

A method is filled with explanatory comments. ![](https://sourcemaking.com/images/refactoring-illustrations/comments-1.png?id=afea1908cc4af78ca2ac)

#### Reasons for the Problem

Comments are usually created with the best of intentions, when the author realizes that his or her code is not intuitive or obvious. In such cases, comments are like a deodorant masking the smell of fishy code that could be improved.

> The best comment is a good name for a method or class. If you feel that a code fragment cannot be understood without comments, try to change the code structure in a way that makes comments unnecessary.

#### Treatment

* If a comment is intended to explain a complex expression, the expression should be split into understandable subexpressions using [Extract Variable](https://sourcemaking.com/refactoring/extract-variable).
* If a comment explains a section of code, this section can be turned into a separate method via [Extract Method](https://sourcemaking.com/refactoring/extract-method). The name of the new method can be taken from the comment text itself, most likely.
* If a method has already been extracted, but comments are still necessary to explain what the method does, give the method a self-explanatory name. Use [Rename Method](https://sourcemaking.com/refactoring/rename-method) for this.
* If you need to assert rules about a state that is necessary for the system to work, use [Introduce Assertion](https://sourcemaking.com/refactoring/introduce-assertion).

#### Payoff

* Code becomes more intuitive and obvious.

#### When to Ignore

Comments can sometimes be useful:

* When explaining why something is being implemented in a particular way.
* When explaining complex algorithms (when all other methods for simplifying the algorithm have been tried and come up short). Duplicate Code

***

#### Signs and Symptoms

Two code fragments look almost identical. ![](https://sourcemaking.com/images/refactoring-illustrations/duplicate-code-1.png?id=5880ed20a8567137aa7c)

#### Reasons for the Problem

Duplication usually occurs when multiple programmers are working on different parts of the same program at the same time. Since they are working on different tasks, they may be unaware their colleague has already written similar code that could be repurposed for their own needs. There is also more subtle duplication, when specific parts of code look different but actually perform the same job. This kind of duplication can be hard to find and fix. Sometimes duplication is purposeful. When rushing to meet deadlines and the existing code is "almost right" for the job, novice programmers may not be able to resist the temptation of copying and pasting the relevant code. And in some cases, the programmer is simply too lazy to de-clutter.

#### Treatment

* If the same code is found in two or more methods in the same class: use [Extract Method](https://sourcemaking.com/refactoring/extract-method) and place calls for the new method in both places. ![](https://sourcemaking.com/images/refactoring-illustrations/duplicate-code-2.png?id=18b7cdc27863114a46dc)
* If the same code is found in two subclasses of the same level:
  * Use [Extract Method](https://sourcemaking.com/refactoring/extract-method) for both classes, followed by [Pull Up Field](https://sourcemaking.com/refactoring/pull-up-field) for the fields used in the method that you are pulling up.
  * If the duplicate code is inside a constructor, use [Pull Up Constructor Body](https://sourcemaking.com/refactoring/pull-up-constructor-body).
  * If the duplicate code is similar but not completely identical, use [Form Template Method](https://sourcemaking.com/refactoring/form-template-method).
  * If two methods do the same thing but use different algorithms, select the best algorithm and apply [Substitute Algorithm](https://sourcemaking.com/refactoring/substitute-algorithm).
* If duplicate code is found in two different classes:
  * If the classes are not part of a hierarchy, use [Extract Superclass](https://sourcemaking.com/refactoring/extract-superclass) in order to create a single superclass for these classes that maintains all the previous functionality.
  * If it is difficult or impossible to create a superclass, use [Extract Class](https://sourcemaking.com/refactoring/extract-class) in one class and use the new component in the other.
* If a large number of conditional expressions are present and perform the same code (differing only in their conditions), merge these operators into a single condition using [Consolidate Conditional Expression](https://sourcemaking.com/refactoring/consolidate-conditional-expression) and use [Extract Method](https://sourcemaking.com/refactoring/extract-method) to place the condition in a separate method with an easy-to-understand name.
* If the same code is performed in all branches of a conditional expression: place the identical code outside of the condition tree by using [Consolidate Duplicate Conditional Fragments](https://sourcemaking.com/refactoring/consolidate-duplicate-conditional-fragments).

#### Payoff

* Merging duplicate code simplifies the structure of your code and makes it shorter.
* Simplification + shortness = code that is easier to simplify and cheaper to support.

#### When to Ignore

* In very rare cases, merging two identical fragments of code can make the code less intuitive and obvious. Lazy Class

#### Signs and Symptoms

Understanding and maintaining classes always costs time and money. So if a class doesn't do enough to earn your attention, it should be deleted. ![](https://sourcemaking.com/images/refactoring-illustrations/lazy-class-1.png?id=9880c1f70677fef969b7)

#### Reasons for the Problem

Perhaps a class was designed to be fully functional but after some of the refactoring it has become ridiculously small. Or perhaps it was designed to support future development work that never got done.

#### Treatment

* Components that are near-useless should be given the [Inline Class](https://sourcemaking.com/refactoring/inline-class) treatment. ![](https://sourcemaking.com/images/refactoring-illustrations/lazy-class-2.png?id=a7448b915b01665fbbbb)
* For subclasses with few functions, try [Collapse Hierarchy](https://sourcemaking.com/refactoring/collapse-hierarchy).

#### Payoff

* Reduced code size.
* Easier maintenance.

#### When to Ignore

* Sometimes a _Lazy Class_ is created in order to delineate intentions for future development, In this case, try to maintain a balance between clarity and simplicity in your code.

## Data Class

#### Signs and Symptoms

A data class refers to a class that contains only fields and crude methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes do not contain any additional functionality and cannot independently operate on the data that they own. ![](https://sourcemaking.com/images/refactoring-illustrations/data-class-1.png?id=0ce510ee86550a5458bb)

#### Reasons for the Problem

It's a normal thing when a newly created class contains only a few public fields (and maybe even a handful of getters/setters). But the true power of objects is that they can contain behavior types or operations on their data.

#### Treatment

* If a class contains public fields, use [Encapsulate Field](https://sourcemaking.com/refactoring/encapsulate-field) to hide them from direct access and require that access be performed via getters and setters only.
* Use [Encapsulate Collection](https://sourcemaking.com/refactoring/encapsulate-collection) for data stored in collections (such as arrays).
* Review the client code that is used by the class. In it, you may find functionality that would be better located in the data class itself. If this is the case, use [Move Method](https://sourcemaking.com/refactoring/move-method) and [Extract Method](https://sourcemaking.com/refactoring/extract-method) to migrate this functionality to the data class. ![](https://sourcemaking.com/images/refactoring-illustrations/data-class-2.png?id=df69a4c9941346b43f00)
* After the class has been filled with well thought-out methods, you may want to get rid of old methods for data access that give overly broad access to the class data. For this, [Remove Setting Method](https://sourcemaking.com/refactoring/remove-setting-method) and [Hide Method](https://sourcemaking.com/refactoring/hide-method) may be helpful.

#### Payoff

* Improves understanding and organization of code. Operations on particular data are now gathered in a single place, instead of haphazardly throughout the code.
* Helps you to spot duplication of client code.

Dead Code

***

***

#### Signs and Symptoms

A variable, parameter, field, method or class is no longer used (usually because it is obsolete).

![](https://sourcemaking.com/images/refactoring-illustrations/dead-code-1.png?id=9a838b80b5a91ae5deec)

#### Reasons for the Problem

When requirements for the software have changed or corrections have been made, nobody had time to clean up the old code.

Such code could also be found in complex conditionals, when one of the branches becomes unreachable (due to error or other circumstances).

#### Treatment

The quickest way to find dead code is to use a good [IDE](http://en.wikipedia.org/wiki/Integrated\_development\_environment).

* Delete unused code and unneeded files.

![](https://sourcemaking.com/images/refactoring-illustrations/dead-code-2.png?id=448a340204440d4889c2)

* In the case of an unnecessary class, [Inline Class](https://sourcemaking.com/refactoring/inline-class) or [Collapse Hierarchy](https://sourcemaking.com/refactoring/collapse-hierarchy) can be applied if a subclass or superclass is used.
* To remove unneeded parameters, use [Remove Parameter](https://sourcemaking.com/refactoring/remove-parameter).

#### Payoff

* Reduced code size.
* Simpler support.

## Speculative Generality

#### Signs and Symptoms

There is an unused class, method, field or parameter.

![](https://sourcemaking.com/images/refactoring-illustrations/speculative-generality-1.png?id=5d8792d55238156097db)

#### Reasons for the Problem

Sometimes code is created "just in case" to support anticipated future features that never get implemented. As a result, code becomes hard to understand and support.

#### Treatment

* For removing unused abstract classes, try [Collapse Hierarchy](https://sourcemaking.com/refactoring/collapse-hierarchy).

![](https://sourcemaking.com/images/refactoring-illustrations/speculative-generality-2.png?id=a22add8d75cc4112c043)

* Unnecessary delegation of functionality to another class can be eliminated via [Inline Class](https://sourcemaking.com/refactoring/inline-class).
* Unused methods? Use [Inline Method](https://sourcemaking.com/refactoring/inline-method) to get rid of them.
* Methods with unused parameters should be given a look with the help of [Remove Parameter](https://sourcemaking.com/refactoring/remove-parameter).
* Unused fields can be simply deleted.

#### Payoff

* Slimmer code.
* Easier support.

#### When to Ignore

* If you are working on a framework, it is eminently reasonable to create functionality not used in the framework itself, as long as the functionality is needed by the frameworks's users.
* Before deleting elements, make sure that they are not used in unit tests. This happens if tests need a way to get certain internal information from a class or perform special testing-related actions.
