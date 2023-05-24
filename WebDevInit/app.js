// JavaScript was designed to be easy to learn and allows certain mistakes to be made by the developer. 
// For example, JavaScript does not throw an error when you use a misspelled variable, 
// and instead creates a new global one. While having fewer errors is tempting when you start learning JavaScript, 
// it can lead to writing code that is harder for browsers to optimize and harder for you to debug.

// Switch to strict mode to get more useful errors when you make mistakes.

'use strict';

// To make the button do something when you select it, you need an event handler in your JavaScript file. 
// An event handler is a way to run a JavaScript function when an event happened on the page. 
// For the button, let's add an event handler for the click event; the event handler function runs when the click event occurs.

// In your JavaScript file, use document.querySelector to get the button reference.

const switcher = document.querySelector('.btn');

// Next, add the event handler for the click event. In the following code, you add a listener for the click event 
// and define an event handler function to be executed by the browser when the click event occurs.

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    // As a web developer, you can create hidden messages that won't appear on your webpage, 
    // but that you can read in the Developer Tools, in the Console tab. 
    // Using console messages is helpful for seeing the result of your code.
    console.log('current class name: ' + className);
});

// In the preceding code, you used the toggle method to modify the <body> element's class attribute. 
//This method automatically adds or removes the light-theme and dark-theme classes. 
//This code applies the dark styles instead of light styles on click, 
// and then light styles instead of dark if you click again.