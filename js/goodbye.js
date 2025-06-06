// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function()  {
    // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    // var byeSpeaker = 
    var byeSpeaker = {};
    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";
    // STEP 8: Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    byeSpeaker.speak = function speak(name) {
        var outputDiv = document.getElementById("console-output"); // id from index.html

        var p = document.createElement("p"); // names in p tag

        p.textContent = speakWord + " " + name; // format of goodbye and names

        outputDiv.appendChild(p); // gives positions for the names for goodbye to be printed out 
    };

    // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
    // 'byeSpeaker' on the global scope as well.
    window.byeSpeaker = byeSpeaker;


})();







