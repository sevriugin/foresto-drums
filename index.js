const buttons = document.querySelectorAll(".drum");
console.log(buttons);

/**
 * Sound object with key - sound mapping.
 * There are two options to access the object property:
 *  Option 1 - dot notation: drums.w
 *  Option 2 - bracket notation: drums["w"] (like index for an array),
 *  The option 2 is more flexible because we can use a variable, like soundKey:
 *      const sound = drums[soundKey.toLowerCase()];
 *      Here we convert the soundKey to lowercase, because the keys in the drums object are lowercase and use the value to get a sound.
 * @type {{w: HTMLAudioElement, a: HTMLAudioElement, s: HTMLAudioElement, d: HTMLAudioElement, j: HTMLAudioElement, k: HTMLAudioElement, l: HTMLAudioElement}}
 */
const drums = {
    w: new Audio("/sounds/crash.mp3"),
    a: new Audio("/sounds/kick-bass.mp3"),
    s: new Audio("/sounds/snare.mp3"),
    d: new Audio("/sounds/tom-1.mp3"),
    j: new Audio("/sounds/tom-2.mp3"),
    k: new Audio("/sounds/tom-3.mp3"),
    l: new Audio("/sounds/tom-4.mp3"),
};

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
    const sound = drums[soundKey.toLowerCase()];
    /**
     * we need to check if the sound is defined, because we can't play a sound that is not defined.'
     */
    if (sound) {
        sound.play();
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


