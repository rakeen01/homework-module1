/* ------- RANDOM CODES ------- */

// submit button is initially disabled upon loading of this page — see <body> in HTML
var code = ' ';            /* store generated codes and initialize to empty value */
var getCode = ' ';         /* store entered code */
var btnvalue;              /* for button boolean value */
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

/* Function to generate combination of characters */
function generateCode() {
    code = ' '; // reset each time we (re)generate

    // Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random() * str.length;     // random select a character index
        code += str.charAt(char);                  // accumulate the generated character into a string of 8
    }
    return code; // return the final accumulated string when loop ends
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

/* determine when to able or disable button */
function disableButton(btnvalue) {                                /* accept boolean parameter */
    document.getElementById("submit").disabled = btnvalue;        // able/disable button

    if (btnvalue == true) {                                       // if disabled
        // set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        // set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

/* listen to user input code */
var codebox = document.getElementById("codeentered");             /* get textbox */
codebox.addEventListener("input", evaluateCode);                  /* listen to code entered */

/* run function if detected user had entered a character in textbox */
function evaluateCode() {
    getCode = document.getElementById("codeentered").value;       // get character entered
    var charset1 = getCode.trim();                                // remove any hidden characters entered
    var charset2 = code.trim();                                   // remove any hidden characters generated

    // test if code entered matches the number of generated characters and equals the generated string
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);                                     // if match, enable button
    } else {
        disableButton(true);                                      // otherwise keep disabled
    }
}
