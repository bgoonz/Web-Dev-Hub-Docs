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
