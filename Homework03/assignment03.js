
/*  Author: John White
 *     Userid: jmw75
 *     githubID: jmw-75
 *     Date: September 25, 2022
 */

// Function will show and hide the hint using a hint button.  Hint button text will change on click
function showHint() {
    const hintElement = document.getElementById("hint");
    const hintButton = document.getElementById("hintButton");

    // figure out how to use style.display for the button change
    // ref: https://www.w3schools.com/jsref/prop_style_display.asp and
    // ref: https://stackoverflow.com/questions/20499920/how-to-toggle-the-innerhtml-of-element-on-click#:~:text=How%20do%20I%20toggle%20an%20element%27s%20innerHTML%20on,%7D%29%20%28%29%3B%20http%3A%2F%2Fjsfiddle.net%2FZ2UBs%2F1%2F%20javascript%20html%20innerhtml%20onclicklistener%20Share
    if (hintElement.style.display === "none") {
        hintElement.style.display = "block";
        hintButton.innerHTML = "Hide Hint";
   } else {
        hintElement.style.display = "none";
        hintButton.innerHTML = "Display Hint"
   }
}