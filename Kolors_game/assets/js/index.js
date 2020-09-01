
// ==============================================================
// helper functions
  // - arrow functions must be at top
// ==============================================================
// choose random square to be the winning color
const pickColor = () => {
  // get random number between 0-5, inclusive
  const random = Math.floor(Math.random() * colors.length);
  // return colors[ran]
  return colors[random];
}

const generateRandomColor = () => {
  //  pirck r, g, b colors between 0-255
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// generate for n times
const generateRandomColors = (num) => {
  let output = [];
  for (var i = 0; i < num; i++) {
    output.push(generateRandomColor());
  }
  return output;
}

// set all colors to winning color
const changeColors = (color) => {
  squares.forEach((squares) => {
    squares.style.backgroundColor = color;
  });
}

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
      if (colors[i]){
        squares[i].style.backgroundColor = colors[i];
      } else {
        // squares[i].style.display = "none"; // hide the squares
        squares[i].style.backgroundColor = "black";
      }
    }
    title.style.backgroundColor = "steelblue";
    message.textContent = "";
}

// ==============================================================
// Init Variables
// ==============================================================
// state
let numSquares = 6;
let colors = generateRandomColors(numSquares);
// choose winning colors
let pickedColor = pickColor();

// select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");

// ==============================================================
// Main
// ==============================================================
function main () {
  // update color display
  colorDisplay.textContent = pickedColor;

  // refactored to one line
  resetButton.addEventListener("click", reset);

  // Mode modeButtons - refactoring of code
  modeButtons.forEach((button) => {
    button.addEventListener("click", function(){
      // set selected to one selected
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy"){
        numSquares = 3;
      } else {
        numSquares= 6;
      }
      reset();
    })
  });

  // set up squares
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    // add click listeners
    squares[i].addEventListener("click", function(){
      // get clicked square colors
      const clickedColor = this.style.backgroundColor;
      // console.log(clickedColor);
      // compare color to picked color
      if (clickedColor === pickedColor){
        message.textContent = "Correct!";
        changeColors(pickedColor);
        title.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "black";
        message.textContent = "Nope!";
      }
    })
  };

}




// Reset Colors button
// resetButton.addEventListener("click", function(){
//   // colors = generateRandomColors(numSquares);
//   // pickedColor = pickColor();
//   // colorDisplay.textContent = pickedColor;
//   // title.style.backgroundColor = "black";
//   // message.textContent = "";
//   // for (var i = 0; i < colors.length; i++) {
//   //   squares[i].style.backgroundColor = colors[i];
//   // }
//   // refactored
//   reset();
// });



// // easy button
// easyButton.addEventListener("click", function(){
//   this.classList.add("selected");
//   hardButton.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   title.style.backgroundColor = "black";
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       // squares[i].style.display = "none"; // hide the squares
//       squares[i].style.backgroundColor = "black";
//     }
//   }
// });
//
// // hard button
// hardButton.addEventListener("click", function(){
//   this.classList.add("selected");
//   easyButton.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   title.style.backgroundColor = "black";
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     // squares[i].style.display = "block"; //bring back the squares
//   }
// });


main();


// any final stuff to run
