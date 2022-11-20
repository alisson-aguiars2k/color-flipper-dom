const colors = [
  "white",
  "black",
  "green",
  "blue",
  "red",
  "yellow",
  "pink",
  "purple",
  "brown",
  "orange",
  "indigo",
  "lime",
  "teal",
  "mustard",
];
// h2
const color = document.querySelector(".color");
// button
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // get random numbr between 0 - 13
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // Math.floor para arredondar o numero aleatório!
  return Math.floor(Math.random() * colors.length);
}
