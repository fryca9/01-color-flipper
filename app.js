const colors = [
  "yellowgreen",
  "royalblue",
  "mediumorchid",
  "mediumseagreen",
  "orangered",
  "#ffdf00",
  "#364ec8",
  "#8d88cc",
  "#90ee90",
  "#ff4500",
  "rgba(255, 223, 0, 0.8)",
  "rgba(54, 78, 200, 0.7)",
  "rgba(221, 136, 204, 0.9)",
  "rgba(144, 238, 144, 0.6)",
  "rgba(255, 69, 0, 0.8)",
  "hsla(42, 80%, 60%, 0.8)",
  "hsla(200, 50%, 40%, 0.7)",
  "hsla(310, 70%, 50%, 0.9)",
  "hsla(120, 40%, 70%, 0.6)",
  "hsla(15, 90%, 45%, 0.8)",
];

const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function changeColors(arr) {
  const randomElement = getRandomElement(arr);

  body.style.backgroundColor = randomElement;
  colorText.textContent = randomElement;
  colorText.style.color = randomElement;
}

btn.addEventListener("click", (e) => {
  changeColors(colors);
});
