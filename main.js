// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//for each color clicked in palette, set the same color to the current color
const currColor = document.querySelector("#current-color");
const palette = document.querySelectorAll("#palette .color");
palette.forEach(eachColor => {
  eachColor.addEventListener("click", () => {
    currColor.style.background = eachColor.style.background;
  })
})

/* not sure how ".background" works.
not sure if it's a reserved keyword.
However, if I only write ".style",
it sets the attribute style, but nothing on it. */

//for each cell clicked, set the same color as of the current color
const cells = document.querySelectorAll(".cell");
cells.forEach((eachCell) => {
  eachCell.addEventListener('click', () => {
    eachCell.style.background = currColor.style.background
  })
})

//extra feature: restart button
const newDiv = document.createElement("div")
newDiv.setAttribute("align", "center");
newDiv.setAttribute("style", "font-size: 50px");
currColor.after(newDiv);

const restart = document.createElement("button");
restart.textContent = "Restart";
newDiv.append(restart);

restart.addEventListener("click", () => {
  for (const cell of cells) {
    cell.style.background = "";
  }
  currColor.style.background = "";
});