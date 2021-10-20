# Jquery



### Selecting Elements with jQuery

JavaScript is most commonly used to get or modify the content or value of the HTML elements on the page, as well as to apply some effects like show, hide, animations etc. But, before you can perform any action you need to find or select the target HTML element.

Selecting the elements through a typical JavaScript approach could be very painful, but the jQuery works like a magic here. The ability of making the DOM elements selection simple and easy is one of the most powerful feature of the jQuery.

**Tip:** The jQuery supports almost all the [selectors](https://www.tutorialrepublic.com/css-tutorial/css-selectors.php) defined in the latest CSS3 specifications, as well as it has its own custom selectors. These custom selectors greatly enhance the capabilities selecting the HTML elements on a page.

In the following sections, you will see some of the common ways of selecting the elements on a page and do something with them using the jQuery.

### Selecting Elements by ID

You can use the ID selector to select a single element with the unique ID on the page.

For example, the following jQuery code will select and highlight an element having the ID attribute `id="mark"`, when the document is ready to be manipulated.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=id-selector)

```text
<script>
$(document).ready(function(){
    // Highlight element with id mark
    $("#mark").css("background", "yellow");
});
</script>
```

In the example above, the `$(document).ready()` is an event that is used to manipulate a page safely with the jQuery. Code included inside this event will only run once the page DOM is ready. We'll learn more about the events in next chapter.

### Selecting Elements by Class Name

The class selector can be used to select the elements with a specific class.

For example, the following jQuery code will select and highlight the elements having the class attribute `class="mark"`, when the document is ready.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=class-selector)

```text
<script>
$(document).ready(function(){
    // Highlight elements with class mark
    $(".mark").css("background", "yellow");
});
</script>
```

### Selecting Elements by Name

The element selector can be used to select elements based on the element name.

For example, the following jQuery code will select and highlight all the paragraph i.e. the [`<p>`](https://www.tutorialrepublic.com/html-reference/html-p-tag.php) elements of the document when it is ready.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=element-selector)

```text
<script>
$(document).ready(function(){
    // Highlight paragraph elements
    $("p").css("background", "yellow");
});
</script>
```

### Selecting Elements by Attribute

You can use the attribute selector to select an element by one of its HTML attributes, such as a link's `target` attribute or an input's `type` attribute, etc.

For example, the following jQuery code will select and highlight all the text inputs i.e. [`<input>`](https://www.tutorialrepublic.com/html-reference/html-input-tag.php) elements with the `type="text"`, when the document is ready.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=attribute-selector)

```text
<script>
$(document).ready(function(){
    // Highlight paragraph elements
    $('input[type="text"]').css("background", "yellow");
});
</script>
```

### Selecting Elements by Compound CSS Selector

You can also combine the CSS selectors to make your selection even more precise.

For instance, you can combine the class selector with an element selector to find the elements in a document that has certain type and class.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=compound-selector)

```text
<script>
$(document).ready(function(){
    // Highlight only paragraph elements with class mark
    $("p.mark").css("background", "yellow");
  
    // Highlight only span elements inside the element with ID mark
    $("#mark span").css("background", "yellow");
  
    // Highlight li elements inside the ul elements
    $("ul li").css("background", "red");
  
    // Highlight li elements only inside the ul element with id mark
    $("ul#mark li").css("background", "yellow");
  
    // Highlight li elements inside all the ul element with class mark
    $("ul.mark li").css("background", "green");
  
    // Highlight all anchor elements with target blank
    $('a[target="_blank"]').css("background", "yellow");
});
</script>
```

### jQuery Custom Selector

In addition to the [CSS defined selectors](https://www.tutorialrepublic.com/css-tutorial/css-selectors.php), jQuery provides its own custom selector to further enhancing the capabilities of selecting elements on a page.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=custom-selector)

```text
<script>
$(document).ready(function(){
    // Highlight table rows appearing at odd places
    $("tr:odd").css("background", "yellow");
  
    // Highlight table rows appearing at even places
    $("tr:even").css("background", "orange");
  
    // Highlight first paragraph element
    $("p:first").css("background", "red");
  
    // Highlight last paragraph element
    $("p:last").css("background", "green");
  
    // Highlight all input elements with type text inside a form
    $("form :text").css("background", "purple");
  
    // Highlight all input elements with type password inside a form
    $("form :password").css("background", "blue");
  
    // Highlight all input elements with type submit inside a form
    $("form :submit").css("background", "violet");
});
</script>
```

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=simple-jquery-powered-web-page)

```text
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>My First jQuery Powered Web Page</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.5.1.min.js"></script>
    <script>
        $(document).ready(function(){
            $("h1").css("color", "#0088ff");
        });
    </script>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

In the above example we've performed a simple jQuery operation by changing the color of the heading i.e. the [`<h1>`](https://www.tutorialrepublic.com/html-tutorial/html-headings.php) element using the jQuery element selector and `css()` method when the document is ready which is known as document ready event. We'll learn about jQuery selectors, events and methods in upcoming chapters.





## jQuery Events

In this tutorial you will learn how to handle events with jQuery.

### What are Events

Events are often triggered by the user's interaction with the web page, such as when a link or button is clicked, text is entered into an input box or textarea, selection is made in a select box, key is pressed on the keyboard, the mouse pointer is moved etc. In some cases, the Browser itself can trigger the events, such as the page load and unload events.

jQuery enhances the basic event-handling mechanisms by offering the events methods for most native browser events, some of these methods are `ready()`, `click()`, `keypress()`, `focus()`, `blur()`, `change()`, etc. For example, to execute some JavaScript code when the DOM is ready, you can use the jQuery `ready()` method, like this:

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-once-the-page-dom-is-ready)

```text
<script>
$(document).ready(function(){
    // Code to be executed
    alert("Hello World!");
});
</script>
```

**Note:** The `$(document).ready()` is an event that is used to manipulate a page safely with the jQuery. Code included inside this event will only run once the page DOM is ready i.e. when the document is ready to be manipulated.

In general, the events can be categorized into four main groups — [mouse events](https://www.tutorialrepublic.com/jquery-tutorial/jquery-events.php#mouse-events), [keyboard events](https://www.tutorialrepublic.com/jquery-tutorial/jquery-events.php#keyboard-events), [form events](https://www.tutorialrepublic.com/jquery-tutorial/jquery-events.php#form-events) and [document/window events](https://www.tutorialrepublic.com/jquery-tutorial/jquery-events.php#document-and-window-events). The following section will give you the brief overview of all these events as well as related jQuery methods one by one.

### Mouse Events <a id="mouse-events"></a>

A mouse event is fired when the user click some element, move the mouse pointer etc. Here're some commonly used jQuery methods to handle the mouse events.

### The `click()` Method

The jQuery `click()` method attach an event handler function to the selected elements for "click" event. The attached function is executed when the user clicks on that element. The following example will hide the [`<p>`](https://www.tutorialrepublic.com/html-reference/html-p-tag.php) elements on a page when they are clicked.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-click-event)

```text
<script>
$(document).ready(function(){
    $("p").click(function(){
        $(this).slideUp();
    });
});
</script>
```

**Note:** The `this` keyword inside the jQuery event handler function is a reference to the element where the event is currently being delivered.

### The `dblclick()` Method

The jQuery `dblclick()` method attach an event handler function to the selected elements for "dblclick" event. The attached function is executed when the user double-clicks on that element. The following example will hide the `<p>` elements when they are double-clicked.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-double-click-event)

```text
<script>
$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).slideUp();
    });
});
</script>
```

### The `hover()` Method

The jQuery `hover()` method attach one or two event handler functions to the selected elements that is executed when the mouse pointer enters and leaves the elements. The first function is executed when the user place the mouse pointer over an element, whereas the second function is executed when the user removes the mouse pointer from that element.

The following example will highlight `<p>` elements when you place the cursor on it, the highlighting will be removed when you remove the cursor.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-hover-event)

```text
<script>
$(document).ready(function(){
    $("p").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });
});
</script>
```

**Tip:** You can consider the `hover()` method is a combination of the jQuery `mouseenter()` and `mouseleave()` methods.

### The `mouseenter()` Method

The jQuery `mouseenter()` method attach an event handler function to the selected elements that is executed when the mouse enters an element. The following example will add the class highlight to the `<p>` element when you place the cursor on it.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-mouseenter-event)

```text
<script>
$(document).ready(function(){
    $("p").mouseenter(function(){
        $(this).addClass("highlight");
    });
});
</script>
```

### The `mouseleave()` Method

The jQuery `mouseleave()` method attach an event handler function to the selected elements that is executed when the mouse leaves an element. The following example will remove the class highlight from the `<p>` element when you remove the cursor from it.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-mouseleave-event)

```text
<script>
$(document).ready(function(){
    $("p").mouseleave(function(){
        $(this).removeClass("highlight");
    });
});
</script>
```

For more mouse event methods, please check out the [jQuery Events Reference »](https://www.tutorialrepublic.com/jquery-reference/jquery-event-methods.php)

### Keyboard Events <a id="keyboard-events"></a>

A keyboard event is fired when the user press or release a key on the keyboard. Here're some commonly used jQuery methods to handle the keyboard events.

### The `keypress()` Method

The jQuery `keypress()` method attach an event handler function to the selected elements \(typically form controls\) that is executed when the browser receives keyboard input from the user. The following example will display a message when the kypress event is fired and how many times it is fired when you press the key on the keyboard.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-keypress-event)

```text
<script>
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keypress(function(){
        $("span").text(i += 1);
        $("p").show().fadeOut();
    });
});
</script>
```

**Note:** The keypress event is similar to the keydown event, except that modifier and non-printing keys such as Shift, Esc, Backspace or Delete, Arrow keys etc. trigger keydown events but not keypress events.

### The `keydown()` Method

The jQuery `keydown()` method attach an event handler function to the selected elements \(typically form controls\) that is executed when the user first presses a key on the keyboard. The following example will display a message when the keydown event is fired and how many times it is fired when you press the key on the keyboard.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-keydown-event)

```text
<script>
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keydown(function(){
        $("span").text(i += 1);
        $("p").show().fadeOut();
    });
});
</script>
```

### The `keyup()` Method

The jQuery `keyup()` method attach an event handler function to the selected elements \(typically form controls\) that is executed when the user releases a key on the keyboard. The following example will display a message when the keyup event is fired and how many times it is fired when you press and release a key on the keyboard.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-keyup-event)

```text
<script>
$(document).ready(function(){
    var i = 0;
    $('input[type="text"]').keyup(function(){
        $("span").text(i += 1);
        $("p").show().fadeOut();
    });
});
</script>
```

**Tip:** The keyboard events can be attached to any element, but the event is only sent to the element that has the focus. That's why the keyboard events generally attached to the form controls such as text input box or textarea.

### Form Events <a id="form-events"></a>

A form event is fired when a form control receive or loses focus or when the user modify a form control value such as by typing text in a text input, select any option in a select box etc. Here're some commonly used jQuery methods to handle the form events.

### The `change()` Method

The jQuery `change()` method attach an event handler function to the [`<input>`](https://www.tutorialrepublic.com/html-reference/html-input-tag.php), [`<textarea>`](https://www.tutorialrepublic.com/html-reference/html-textarea-tag.php) and [`<select>`](https://www.tutorialrepublic.com/html-reference/html-select-tag.php) elements that is executed when its value changes. The following example will display an alert message when you select any option in dropdown select box.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-change-event)

```text
<script>
$(document).ready(function(){
    $("select").change(function(){
        var selectedOption = $(this).find(":selected").val();
        alert("You have selected - " + selectedOption);
    });
});
</script>
```

**Note:** For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the text input and textarea the event is fired after the element loses focus.

### The `focus()` Method

The jQuery `focus()` method attach an event handler function to the selected elements \(typically form controls and links\) that is executed when it gains focus. The following example will display a message when the text input receive focus.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-focus-event)

```text
<script>
$(document).ready(function(){
    $("input").focus(function(){
        $(this).next("span").show().fadeOut("slow");
    });
});
</script>
```

### The `blur()` Method

The jQuery `blur()` method attach an event handler function to the form elements such as `<input>`, `<textarea>`, `<select>` that is executed when it loses focus. The following example will display a message when the text input loses focus.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-blur-event)

```text
<script>
$(document).ready(function(){
    $("input").blur(function(){
        $(this).next("span").show().fadeOut("slow");
    });
});
</script>
```

### The `submit()` Method

The jQuery `submit()` method attach an event handler function to the [`<form>`](https://www.tutorialrepublic.com/html-reference/html-form-tag.php) elements that is executed when the user is attempting to submit a form. The following example will display a message depending on the value entered when you try to submit the form.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-submit-event)

```text
<script>
$(document).ready(function(){
    $("form").submit(function(event){
        var regex = /^[a-zA-Z]+$/;
        var currentValue = $("#firstName").val();
        if(regex.test(currentValue) == false){
            $("#result").html('<p class="error">Not valid!</p>').show().fadeOut(1000);
            // Preventing form submission
            event.preventDefault();
        }
    });
});
</script>
```

**Tip:** A form can be submitted either by clicking a submit button, or by pressing Enter when certain form elements have focus.

### Document/Window Events <a id="document-and-window-events"></a>

Events are also triggered in a situation when the page DOM \(Document Object Model\) is ready or when the user resize or scrolls the browser window, etc. Here're some commonly used jQuery methods to handle such kind of events.

### The `ready()` Method

The jQuery `ready()` method specify a function to execute when the DOM is fully loaded.

The following example will replace the paragraphs text as soon as the DOM hierarchy has been fully constructed and ready to be manipulated.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-ready-event)

```text
<script>
$(document).ready(function(){
    $("p").text("The DOM is now loaded and can be manipulated.");
});
</script>
```

### The `resize()` Method

The jQuery `resize()` method attach an event handler function to the window element that is executed when the size of the browser window changes.

The following example will display the current width and height of the browser window when you try to resize it by dragging its corners.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-resize-event)

```text
<script>
$(document).ready(function(){
    $(window).resize(function() {
        $(window).bind("resize", function(){ 
            $("p").text("Window width: " + $(window).width() + ", " + "Window height: " + $(window).height());
        });
    });
});
</script>
```

### The `scroll()` Method

The jQuery `scroll()` method attach an event handler function to the window or scrollable iframes and elements that is executed whenever the element's scroll position changes.

The following example will display a message when you scroll the browser window.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=execute-a-function-on-scroll-event)

```text
<script>
$(document).ready(function(){
    $(window).scroll(function() {
        $("p").show().fadeOut("slow");
    });
});
</script>
```



## jQuery Show and Hide Effects

In this tutorial you will learn how to show hide HTML elements using jQuery.

### jQuery `show()` and `hide()` Methods

You can show and hide HTML elements using the jQuery `show()` and `hide()` methods.

The `hide()` method simply sets the [inline style](https://www.tutorialrepublic.com/html-tutorial/html-styles.php#inline-styles) `display: none` for the selected elements. Conversely, the `show()` method restores the [display properties](https://www.tutorialrepublic.com/css-tutorial/css-display.php) of the matched set of elements to whatever they initially were—typically block, inline, or inline-block—before the inline style `display: none` was applied to them. Here's is an example.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=show-hide-effects)

```text
<script>
$(document).ready(function(){
    // Hide displayed paragraphs
    $(".hide-btn").click(function(){
        $("p").hide();
    });
    
    // Show hidden paragraphs
    $(".show-btn").click(function(){
        $("p").show();
    });
});
</script>
```

You can optionally specify the duration \(also referred as speed\) parameter for making the jQuery show hide effect animated over a specified period of time.

Durations can be specified either using one of the predefined string `'slow'` or `'fast'`, or in a number of milliseconds, for greater precision; higher values indicate slower animations.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=animated-show-hide-effects)

```text
<script>
$(document).ready(function(){
    // Hide displayed paragraphs with different speeds
    $(".hide-btn").click(function(){
        $("p.normal").hide();
        $("p.fast").hide("fast");
        $("p.slow").hide("slow");
        $("p.very-fast").hide(50);
        $("p.very-slow").hide(2000);
    });
    
    // Show hidden paragraphs with different speeds
    $(".show-btn").click(function(){
        $("p.normal").show();
        $("p.fast").show("fast");
        $("p.slow").show("slow");
        $("p.very-fast").show(50);
        $("p.very-slow").show(2000);
    });
});
</script>
```

**Note:** The speed or duration string `'fast'` indicates the durations of 200 milliseconds, while the string `'slow'` indicates the durations of 600 milliseconds.

You can also specify a [callback function](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) to be executed after the `show()` or `hide()` method completes. We'll learn more about the callback function in upcoming chapters.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=show-hide-effects-with-callback-function)

```text
<script>
$(document).ready(function(){
    // Display alert message after hiding paragraphs
    $(".hide-btn").click(function(){
        $("p").hide("slow", function(){
            // Code to be executed
            alert("The hide effect is completed.");
        });
    });
    
    // Display alert message after showing paragraphs
    $(".show-btn").click(function(){
        $("p").show("slow", function(){
            // Code to be executed
            alert("The show effect is completed.");
        });
    });
});
</script>
```

### jQuery `toggle()` Method

The jQuery `toggle()` method show or hide the elements in such a way that if the element is initially displayed, it will be hidden; if hidden, it will be displayed \(i.e. toggles the visibility\).

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=toggle-effect)

```text
<script>
$(document).ready(function(){
    // Toggles paragraphs display
    $(".toggle-btn").click(function(){
        $("p").toggle();
    });
});
</script>
```

Similarly, you can specify the duration parameter for the `toggle()` method to make it animated like the `show()` and `hide()` methods.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=animated-toggle-effect)

```text
<script>
$(document).ready(function(){
    // Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p.normal").toggle();
        $("p.fast").toggle("fast");
        $("p.slow").toggle("slow");
        $("p.very-fast").toggle(50);
        $("p.very-slow").toggle(2000);
    });
});
</script>
```

Similarly, you can also specify a [callback function](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) for the `toggle()` method.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=toggle-effect-with-callback-function)

```text
<script>
$(document).ready(function(){
    // Display alert message after toggling paragraphs
    $(".toggle-btn").click(function(){
        $("p").toggle(1000, function(){
            // Code to be executed
            alert("The toggle effect is completed.");
        });
    });
});
</script>
```



## jQuery Fading Effects

In this tutorial you will learn how to fade in and out elements using jQuery.

### jQuery `fadeIn()` and `fadeOut()` Methods

You can use the jQuery `fadeIn()` and `fadeOut()` methods to display or hide the HTML elements by gradually increasing or decreasing their opacity.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=fade-in-and-out-effects)

```text
<script>
$(document).ready(function(){
    // Fading out displayed paragraphs
    $(".out-btn").click(function(){
        $("p").fadeOut();
    });
    
    // Fading in hidden paragraphs
    $(".in-btn").click(function(){
        $("p").fadeIn();
    });
});
</script>
```

Like other jQuery effects methods, you can optionally specify the duration or speed parameter for the `fadeIn()` and `fadeOut()` methods to control how long the fading animation will run. Durations can be specified either using one of the predefined string `'slow'` or `'fast'`, or in a number of milliseconds; higher values indicate slower animations.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=set-the-duration-of-fade-in-and-out-effects)

```text
<script>
$(document).ready(function(){
    // Fading out displayed paragraphs with different speeds
    $(".out-btn").click(function(){
        $("p.normal").fadeOut();
        $("p.fast").fadeOut("fast");
        $("p.slow").fadeOut("slow");
        $("p.very-fast").fadeOut(50);
        $("p.very-slow").fadeOut(2000);
    });
    
    // Fading in hidden paragraphs with different speeds
    $(".in-btn").click(function(){
        $("p.normal").fadeIn();
        $("p.fast").fadeIn("fast");
        $("p.slow").fadeIn("slow");
        $("p.very-fast").fadeIn(50);
        $("p.very-slow").fadeIn(2000);
    });
});
</script>
```

**Note:** The effect of `fadeIn()`/`fadeOut()` method looks similar to `show()`/`hide()`, but unlike `show()`/`hide()` method the `fadeIn()`/`fadeOut()` method only animates the opacity of the target elements and does not animates their dimensions.

You can also specify a [callback function](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) to be executed after the `fadeIn()` or `fadeOut()` method completes. We'll learn more about the callback function in upcoming chapters.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=fade-in-and-out-effects-with-callback-function)

```text
<script>
$(document).ready(function(){
    // Display alert message after fading out paragraphs
    $(".out-btn").click(function(){
        $("p").fadeOut("slow", function(){
            // Code to be executed
            alert("The fade-out effect is completed.");
        });
    });
    
    // Display alert message after fading in paragraphs
    $(".in-btn").click(function(){
        $("p").fadeIn("slow", function(){
            // Code to be executed
            alert("The fade-in effect is completed.");
        });
    });
});
</script>
```

### jQuery `fadeToggle()` Method

The jQuery `fadeToggle()` method display or hide the selected elements by animating their opacity in such a way that if the element is initially displayed, it will be fade out; if hidden, it will be fade in \(i.e. toggles the fading effect\).

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=fade-toggle-effect)

```text
<script>
$(document).ready(function(){
    // Toggles paragraphs display with fading
    $(".toggle-btn").click(function(){
        $("p").fadeToggle();
    });
});
</script>
```

Similarly, you can specify the duration parameter for the `fadeToggle()` method like `fadeIn()`/`fadeOut()` method to control the duration or speed of the fade toggle animation.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=set-the-duration-of-fade-toggle-effect)

```text
<script>
$(document).ready(function(){
    // Fade Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p.normal").fadeToggle();
        $("p.fast").fadeToggle("fast");
        $("p.slow").fadeToggle("slow");
        $("p.very-fast").fadeToggle(50);
        $("p.very-slow").fadeToggle(2000);
    });
});
</script>
```

Similarly, you can also specify a [callback function](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) for the `fadeToggle()` method.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=fade-toggle-effect-with-callback-function)

```text
<script>
$(document).ready(function(){
    // Display alert message after fade toggling paragraphs
    $(".toggle-btn").click(function(){
        $("p").fadeToggle(1000, function(){
            // Code to be executed
            alert("The fade-toggle effect is completed.");
        });
    });
});
</script>
```

### jQuery `fadeTo()` Method

The jQuery `fadeTo()` method is similar to the `.fadeIn()` method, but unlike `.fadeIn()` the `fadeTo()` method lets you fade in the elements to a certain opacity level.$\(selector\).fadeTo\(speed, opacity, callback\);

The required opacity parameter specifies the final opacity of the target elements that can be a number between 0 and 1. The duration or speed parameter is also required for this method that specifies the duration of the fade to animation.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=fade-to-effect)

```text
<script>
$(document).ready(function(){
    // Fade to paragraphs with different opacity
    $(".to-btn").click(function(){
        $("p.none").fadeTo("fast", 0);
        $("p.partial").fadeTo("slow", 0.5);
        $("p.complete").fadeTo(2000, 1);
    });
});
</script>
```



## jQuery Sliding Effects

In this tutorial you will learn how to create slide motion effect using jQuery.

### jQuery `slideUp()` and `slideDown()` Methods

The jQuery `slideUp()` and `slideDown()` methods is used to hide or show the HTML elements by gradually decreasing or increasing their height \(i.e. by sliding them up or down\).

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=slide-up-and-down-effects)

```text
<script>
$(document).ready(function(){
    // Slide up displayed paragraphs
    $(".up-btn").click(function(){
        $("p").slideUp();
    });
    
    // Slide down hidden paragraphs
    $(".down-btn").click(function(){
        $("p").slideDown();
    });
});
</script>
```

Like other jQuery effects methods, you can optionally specify the duration or speed parameter for the `slideUp()` and `slideDown()` methods to control how long the slide animation will run. Durations can be specified either using one of the predefined string `'slow'` or `'fast'`, or in a number of milliseconds; higher values indicate slower animations.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=set-the-duration-of-slide-up-and-down-effects)

```text
<script>
$(document).ready(function(){
    // Sliding up displayed paragraphs with different speeds
    $(".up-btn").click(function(){
        $("p.normal").slideUp();
        $("p.fast").slideUp("fast");
        $("p.slow").slideUp("slow");
        $("p.very-fast").slideUp(50);
        $("p.very-slow").slideUp(2000);
    });
    
    // Sliding down hidden paragraphs with different speeds
    $(".down-btn").click(function(){
        $("p.normal").slideDown();
        $("p.fast").slideDown("fast");
        $("p.slow").slideDown("slow");
        $("p.very-fast").slideDown(50);
        $("p.very-slow").slideDown(2000);
    });
});
</script>
```

You can also specify a [callback function](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) to be executed after the `slideUp()` or `slideDown()` method completes. We'll learn more about the callback function in upcoming chapters.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=slide-up-and-down-effects-with-callback-function)

```text
<script>
$(document).ready(function(){
    // Display alert message after sliding up paragraphs
    $(".up-btn").click(function(){
        $("p").slideUp("slow", function(){
            // Code to be executed
            alert("The slide-up effect is completed.");
        });
    });
    
    // Display alert message after sliding down paragraphs
    $(".down-btn").click(function(){
        $("p").slideDown("slow", function(){
            // Code to be executed
            alert("The slide-down effect is completed.");
        });
    });
});
</script>
```

### jQuery `slideToggle()` Method

The jQuery `slideToggle()` method show or hide the selected elements by animating their height in such a way that if the element is initially displayed, it will be slide up; if hidden, it will be slide down i.e. toggles between the `slideUp()` and `slideDown()` methods.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=slide-toggle-effect)

```text
<script>
$(document).ready(function(){
    // Toggles paragraphs display with sliding
    $(".toggle-btn").click(function(){
        $("p").slideToggle();
    });
});
</script>
```

Similarly, you can specify the duration parameter for the `slideToggle()` method like `slideUp()` and `slideDown()` methods to control the speed of the slide toggle animation.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=set-the-duration-of-slide-toggle-effect)

```text
<script>
$(document).ready(function(){
    // Slide Toggles paragraphs with different speeds
    $(".toggle-btn").click(function(){
        $("p.normal").slideToggle();
        $("p.fast").slideToggle("fast");
        $("p.slow").slideToggle("slow");
        $("p.very-fast").slideToggle(50);
        $("p.very-slow").slideToggle(2000);
    });
});
</script>
```

Similarly, you can also specify a [callback function](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) for the `slideToggle()` method.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=slide-toggle-effect-with-callback-function)

```text
<script>
$(document).ready(function(){
    // Display alert message after slide toggling paragraphs
    $(".toggle-btn").click(function(){
        $("p").slideToggle(1000, function(){
            // Code to be executed
            alert("The slide-toggle effect is completed.");
        });
    });
});
</script>
```



## jQuery Animation Effects

In this tutorial you will learn how to animate CSS properties using jQuery.

### jQuery `animate()` Method

The jQuery `animate()` method is used to create custom animations. The `animate()` method is typically used to animate numeric CSS properties, for example, [`width`](https://www.tutorialrepublic.com/css-reference/css-width-property.php), [`height`](https://www.tutorialrepublic.com/css-reference/css-height-property.php), [`margin`](https://www.tutorialrepublic.com/css-reference/css-margin-property.php), [`padding`](https://www.tutorialrepublic.com/css-reference/css-padding-property.php), [`opacity`](https://www.tutorialrepublic.com/css-reference/css-opacity-property.php), [`top`](https://www.tutorialrepublic.com/css-reference/css-top-property.php), [`left`](https://www.tutorialrepublic.com/css-reference/css-left-property.php), etc. but the non-numeric properties such as [`color`](https://www.tutorialrepublic.com/css-reference/css-color-property.php) or [`background-color`](https://www.tutorialrepublic.com/css-reference/css-background-color-property.php) cannot be animated using the basic jQuery functionality.

**Note:** Not all CSS properties are animatable. In general, any CSS property that accepts values that are numbers, lengths, percentages, or colors is animatable. However, the color animation is not support by the core jQuery library. To manipulate and animate the color use the [jQuery color plugin](https://github.com/jquery/jquery-color).

### Syntax

The basic syntax of the jQuery `animate()` method can be given with:$\(selector\).animate\({ properties }, duration, callback\);

The parameters of the `animate()` method have the following meanings:

* The required properties parameter defines the [CSS properties](https://www.tutorialrepublic.com/css-reference/css3-properties.php) to be animated.
* The optional duration parameter specifies how long the animation will run. Durations can be specified either using one of the predefined string `'slow'` or `'fast'`, or in a number of milliseconds; higher values indicate slower animations.
* The optional [callback](https://www.tutorialrepublic.com/jquery-tutorial/jquery-callback.php) parameter is a function to call once the animation is complete.

Here's a simple example of the jQuery `animate()` method that animates an image from its original position to the right by 300 pixels on click of the button.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=animation)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("img").animate({
            left: 300
        });
    });
});
</script>
```

**Note:** All HTML elements have static position by default. Since the static element cannot be moved, so you must set the CSS [`position`](https://www.tutorialrepublic.com/css-reference/css-position-property.php) property for the element to `relative`, `fixed`, or `absolute` to manipulate or animate its position.

### Animate Multiple Properties At Once

You can also animate multiple properties of an element together at the same time using the `animate()` method. All the properties animated simultaneously without any delay.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=animate-multiple-css-properties)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
    });
});
</script>
```

**Note:** The [CSS properties](https://www.tutorialrepublic.com/css-reference/css3-properties.php) names must be camel-cased when using with the `animate()` method, e.g. if you want to animate the font size you need to write `'fontSize'` rather than `'`[`font-size`](https://www.tutorialrepublic.com/css-reference/css-font-size-property.php)`'`. Similarly, write `'marginLeft'` instead of `'`[`margin-left`](https://www.tutorialrepublic.com/css-reference/css-margin-left-property.php)`'`, `'borderWidth'` instead of `'`[`border-width`](https://www.tutorialrepublic.com/css-reference/css-border-width-property.php)`'`, and so on.

**Tip:** You must set the [`border-style`](https://www.tutorialrepublic.com/css-reference/css-border-style-property.php) property for the element before animating its [`border-width`](https://www.tutorialrepublic.com/css-reference/css-border-width-property.php) property. An element must have borders before you can animate the border width, because the default value of the `border-style` property is `none`.

### Animate Multiple Properties One by One or Queued Animations

You can also animate the multiple properties of an element one by one individually in a queue using the jQuery's chaining feature. We'll learn more about chaining in next chapter.

The following example demonstrates a jQuery queued or chained animation, where each animation will start once the previous animation on the element has completed.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=queued-animation)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $(".box")
            .animate({width: "300px"})
            .animate({height: "300px"})
            .animate({marginLeft: "150px"})
            .animate({borderWidth: "10px"})
            .animate({opacity: 0.5});
    });
});
</script>
```

### Animate Properties with Relative Values

You can also define the relative values for the animated properties. If a value is specified with a leading `+=` or `-=` prefix, then the target value is calculated by adding or subtracting the given number from the current value of the property.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=animate-css-property-with-relative-values)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $(".box").animate({            
            top: "+=50px",
            left: "+=50px",
            width: "+=50px",
            height: "+=50px"
        });
    });
});
</script>
```

### Animate Properties with Pre-defined Values

In addition to the numeric values, each property can take the strings `'show'`, `'hide'`, and `'toggle'`. It will be very helpful in a situation when you simply want to animate the property from its current value to the initial value and vice versa.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=animate-css-property-with-pre-defined-values)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $(".box").animate({
            width: 'toggle'
        });
    });
});
</script>
```



## jQuery Chaining

In this tutorial you will learn how chain multiple methods in jQuery.

### jQuery Method Chaining

The jQuery provides another robust feature called method chaining that allows us to perform multiple action on the same set of elements, all within a single line of code.

This is possible because most of the jQuery methods return a jQuery object that can be further used to call another method. Here's an example.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=method-chaining)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
    });
});  
</script>
```

The above example demonstrate the chaining of three `animate()` method. When a user click the trigger button, it expands the [`<p>`](https://www.tutorialrepublic.com/html-reference/html-p-tag.php) to 100% width. Once the [`width`](https://www.tutorialrepublic.com/css-reference/css-width-property.php) change is complete the [`font-size`](https://www.tutorialrepublic.com/css-reference/css-font-size-property.php) is start animating and after its completion, the [`border`](https://www.tutorialrepublic.com/css-reference/css-border-property.php) animation will begin.

**Tip:** The method chaining not only helps you to keep your jQuery code concise, but it also can improve your script's performance since browser doesn't have to find the same elements multiple times to do something with them.

You can also break a single line of code into multiple lines for greater readability. For example, the sequence of methods in the above example could also be written as:

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=breaking-method-chaining-code-in-multiple-lines)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p")
            .animate({width: "100%"})
            .animate({fontSize: "46px"})
            .animate({borderWidth: 30});
    });
});  
</script>
```

Some jQuery methods doesn't return the jQuery object. In general, [setters](https://www.tutorialrepublic.com/jquery-tutorial/jquery-getter-and-setter.php) i.e. methods that assign some value on a selection return a jQuery object, that allows you to continue calling jQuery methods on your selection. Whereas, [getters](https://www.tutorialrepublic.com/jquery-tutorial/jquery-getter-and-setter.php) return the requested value, so you can't continue to call jQuery methods on the value returned by the getter.

A typical example of this scenario is the `html()` method. If no parameters are passed to it, the HTML contents of the selected element is returned instead of a jQuery object.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=method-chaining-exceptions)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        // This will work
        $("h1").html("Hello World!").addClass("test");
        
        // This will NOT work
        $("p").html().addClass("test");
    });
});
</script>
```

## jQuery Callback

In this tutorial you will learn how define a callback function for the jQuery effect.

### jQuery Callback Functions

JavaScript statements are executed line by line. But, since jQuery effect takes some time to finish the next line code may execute while the previous effect is still running. To prevent this from happening jQuery provides a callback function for each effect method.

A callback function is a function that is executed once the effect is complete. The callback function is passed as an argument to the effect methods and they typically appear as the last argument of the method. For example, the basic syntax of the jQuery `slideToggle()` effect method with a callback function can be given with:$\(selector\).slideToggle\(duration, callback\);

Consider the following example in which we've placed the `slideToggle()` and `alert()` statements next to each other. If you try this code the alert will be displayed immediately once you click the trigger button without waiting for slide toggle effect to complete.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=method-without-callback)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").slideToggle("slow");
        alert("The slide toggle effect has completed.");
    });   
});
</script>
```

And, here's the modified version of the pevious example in which we've placed the `alert()` statement inside a callback function for the `slideToggle()` method. If you try this code the alert message will be displayed once the slide toggle effect has completed.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=method-with-callback)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").slideToggle("slow", function(){
            // Code to be executed once effect is complete
            alert("The slide toggle effect has completed.");
        });
    });   
});
</script>
```

Similarly, you can define the callback functions for the other jQuery effect methods, like `show()`, `hide()`, `fadeIn()`, `fadeOut()`, `animate()`, etc.

**Note:** If the effect method is applied to multiple elements, then the callback function is executed once for each selected element, not once for all.

**Example**

[Try this code »](https://www.tutorialrepublic.com/codelab.php?topic=jquery&file=callback-executed-multiple-times)

```text
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("h1, p").slideToggle("slow", function(){
            // Code to be executed once effect is complete
            alert("The slide toggle effect has completed.");
        });
    });   
});
</script>
```

If you try the above example code, it will display the same alert message two times once per [`<h1>`](https://www.tutorialrepublic.com/html-reference/html-headings-tag.php) and [`<p>`](https://www.tutorialrepublic.com/html-reference/html-p-tag.php) element, upon clicking the trigger button.

