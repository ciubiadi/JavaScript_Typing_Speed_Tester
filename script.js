const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0];

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {

    if(time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {

    let currentTIme = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTIme;
    timer[3]++;

    //converting the minutes, seconds, miliseconds
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Match the text entered with the provided text on the page:
function spellCheck() {

    let textTyped = testArea.value;
    let originTextMatch = originText.substring(0, textTyped.length);

    if(textTyped == originText)
    {

        testWrapper.style.borderColor = "green";

    } else if (textTyped == originTextMatch) {
        testWrapper.style.borderColor = "yellow";
    } else
        testWrapper.style.borderColor = "red";

    console.log(textTyped);

}

// Start the timer:
function start() {

    let textEnterLength = testArea.value.length;
    
    if(textEnterLength == 0) {
 
         setInterval(runTimer, 10);
 
    }
 
    console.log(textEnterLength);
 
 }

// Reset everything:
function reset() {

    console.log("Reset button was pressed");

}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener('keypress', start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);