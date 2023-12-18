// Access element using id
const mainContainer = document.getElementById("main-container");
const headElement = document.getElementById("head-element");
const headContent = document.getElementById("head-content");
const bodyElement = document.getElementById("body-element");
const leftElement = document.getElementById("left-element");
const rightElement = document.getElementById("right-element");
const bottomElement = document.getElementById("bottom-element");
const bottomContent = document.getElementById("bottom-content");

bodyElement.style.justifyContent = "center"; // center content for buttons

// use this to purge children
//
// while (list.hasChildNodes()) {
//   list.removeChild(list.firstChild);
// }
// use this to purge children

function clearChildren() {
    while (leftElement.hasChildNodes()) {
        leftElement.removeChild(leftElement.firstChild);
    }

    while (rightElement.hasChildNodes()) {
        rightElement.removeChild(leftElement.firstChild);
    }
}

// create elements for appending content
const startButton = document.createElement("button");
const highScoreButton = document.createElement("button");

function createStartPage() {
    // cleans up the start page
    clearChildren();

    // hide left element
    rightElement.style.display = "none";
    // center content for buttons
    bodyElement.style.justifyContent = "center";

    // attach elements
    // ===============
    leftElement.appendChild(startButton);
    leftElement.appendChild(highScoreButton);

    // decorate with flex
    // ==================

    // center content for buttons
    bodyElement.style.justifyContent = "center";
    leftElement.style.display = "flex";
    leftElement.style.flexDirection = "column";

    // decorate in general
    // ===================
    mainContainer.style.height = "57vh";
    mainContainer.style.width = "75vw";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.margin = "auto";

    headContent.style.textAlign = "center";
    headContent.textContent = "Quiz Show!";

    bottomContent.style.textAlign = "center";
    bottomContent.textContent = "made by BEARS!";

    startButton.style.height = "5vh";
    startButton.style.width = "25vw";
    startButton.style.margin = "3rem";
    startButton.style.backgroundColor = "white";
    startButton.textContent = "push to start or something";

    highScoreButton.style.height = "5vh";
    highScoreButton.style.width = "25vw";
    highScoreButton.style.margin = "3rem";
    highScoreButton.style.backgroundColor = "white";
    highScoreButton.textContent = "high scores here";
}


const answerButton1 = document.createElement("button");
const answerButton2 = document.createElement("button");
const answerButton3 = document.createElement("button");
const answerButton4 = document.createElement("button");
const resultElement = document.createElement("div");
const timerElement = document.createElement("div");

timerElement.setAttribute("id", "timer-element");
resultElement.setAttribute("id", "result-element");

function createQuestionPage() {
// cleans up the question page
clearChildren();

// hide bottom content
bottomContent.style.display = "none";

mainContainer.style.height = "57vh";
mainContainer.style.width = "75vw";
mainContainer.style.justifyContent = "center";
mainContainer.style.margin = "auto";

headContent.style.textAlign = "center";
headContent.textContent = "Questions go here";

leftElement.style.display = "flex";
leftElement.style.flexDirection = "column";

rightElement.style.display = "flex";
rightElement.style.flexDirection = "column";
rightElement.appendChild(resultElement);
resultElement.textContent = "right or wrong";
resultElement.style.textAlign = "center";
resultElement.style.backgroundColor = "white";

// timer elements
rightElement.appendChild(timerElement)
timerElement.textContent = "timer goes here";
timerElement.style.textAlign = "center";
timerElement.style.backgroundColor = "white";

// high score button and other buttons
rightElement.appendChild(highScoreButton);
highScoreButton.textContent = "high score here";

leftElement.appendChild(answerButton4);
leftElement.appendChild(answerButton3);
leftElement.appendChild(answerButton2);
leftElement.appendChild(answerButton1);

// name all buttons by default
// call function that does this with question answers
for (var i = 0; i < leftElement.children.length; i++) {
  var temp = leftElement.children;
  temp[i].textContent = "answer button " + (i + 1);
}

bodyElement.style.justifyContent = "space-evenly";
rightElement.style.alignItems = "center";
rightElement.style.width = "10vw";
leftElement.style.justifyContent = "space-evenly";
leftElement.style.width = "25vw";
highScoreButton.style.height = "5vh";
highScoreButton.style.width = "10vw";
highScoreButton.style.backgroundColor = "white";
resultElement.style.height = "5vh";
resultElement.style.width = "10vw";
timerElement.style.height = "5vh";
timerElement.style.width = "10vw";

}

createStartPage();
createQuestionPage();