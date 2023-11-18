const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const colorText = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  changeColors(hex);
});

function createHex(arr) {
  let hexValue = "#";

  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * arr.length);
    hexValue += arr[num];
  }

  return hexValue;
}

function changeColors(arr) {
  const randomHex = createHex(arr);

  body.style.backgroundColor = randomHex;
  colorText.textContent = randomHex;
  colorText.style.color = randomHex;
}
