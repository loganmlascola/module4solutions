// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function() {
    // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    // var helloSpeaker =
    var helloSpeaker = {};
    // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    var speakWord = "Hello";
    // STEP 4: Rewrite the 'speak' function such that it is attached to the
    // helloSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    helloSpeaker.speak = function speak(name) {
        var outputDiv = document.getElementById("console-output"); // id from index.html
        
        var p = document.createElement("p"); // element in p tag

        p.textContent = speakWord + " " + name;

        outputDiv.appendChild(p);
    };
    // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
    // 'helloSpeaker' on the global scope as well.
    // See Lecture 52, part 2
    // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
    window.helloSpeaker = helloSpeaker;

})();









