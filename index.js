let mousedown = false;
const container = document.querySelector("#container");

//slider
let slider = document.getElementById("gridSize");
let output = document.getElementById("size");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + " x " + this.value;
};
slider.addEventListener("mouseup", () => {
  createGrid(slider.value);
});

//hold to color
container.addEventListener("mousedown", () => {
    mousedown = true;
});
//release to not color
container.addEventListener("mouseup", () => {
    mousedown = false;
});

function onColor(e) {
    if (!mousedown){
        return
    }
    e.target.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
}


//box creation
function createGrid(square) {
  container.innerHTML = "";
  for (let row = 0; row < square; row++) {
    for (let column = 0; column < square; column++) {
      const box = document.createElement("div");
      box.classList.add("boxStyles");
      box.style.width = 600 / square + "px";
      box.style.height = 600 / square + "px";
      box.onmouseover = onColor;
      container.append(box);
    }
  }
}
createGrid(16);
