const container = document.querySelector("#container");

let slider = document.getElementById("gridSize");
let output = document.getElementById("size");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
  
}
slider.addEventListener("mouseup",()=>{
    createGrid(slider.value)
})

function createGrid(square) {
    container.innerHTML="";
  for (let row = 0; row < square; row++) {
    for (let column = 0; column < square; column++) {
      const box = document.createElement("div");
      box.classList.add("boxStyles");
      box.style.width= (600/square) + "px";
      box.style.height = (600/square) + "px";
      container.append(box);
    }
  }
}
createGrid(16);

