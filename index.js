const buttons = document.querySelectorAll(".drum");
console.log(buttons);

/**
 * We need for loop to get a button from a button array, and we can use 3 options here:
 * (1) `for` loop with index
 * (2) `for` loop with `of` keyword
 * (3) `forEach` array function, that getting function that will be called for each array element
 *
 * // Option 1
 * for (let i = 0; i < buttons.length; i++) {
 *   buttons[i].addEventListener("click", function () {
 *     alert("clicked");
 *   })
 * }
 * // Option 2
 * for (const button of buttons) {
 *      button.addEventListener("click", (e) => {
 *          console.log("Clicked");
 *      })
 * }
 * // Option 3
 * buttons.forEach(button => {
 *   button.addEventListener("click", (e) => {
 *      console.log("Clicked 2");
 *   })
 * })
 */


/**
 * Play sound function.
 * @param soundKey Key of the sound that we want to play.
 */
function playSound(soundKey) {
    switch (soundKey) {
        case "w":
            const crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            const kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            const snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            const tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            const tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            const tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            const tom4 = new Audio("/sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(soundKey);
    }

}

/**
 * Setting up event listeners for all buttons. We are using Option 1 here.
 */
const numberOfButtons = buttons.length;
for (let i = 0; i < numberOfButtons; i++) {
    buttons[i].addEventListener("click", function () {
        const innerHtml = this.innerText;
        playSound(innerHtml);
    })

}
/**
 * Setting up event listeners for all keyboard keys.
 */
document.addEventListener("keypress", function (event) {
    playSound(event.key);
});


