const colors = ["white", "red", "green", "blue", "yellow"];

const boxes = Array.from(document.getElementsByClassName("box"));

boxes.forEach(function(box) {
  box.addEventListener("click", function(event) {
    this.classList.add(color);
  });

  box.addEventListener("dblclick", function(event) {
    this.classList.remove.apply(this.classList, colors);
  });
});

const reset = document
  .getElementById("reset")
  .addEventListener("click", function(event) {
    boxes.forEach(function(box) {
      box.classList.remove.apply(box.classList, colors);
    });
  });

const red = document
  .getElementById("red")
  .addEventListener("click", function() {
    color = "red";
  });

const green = document
  .getElementById("green")
  .addEventListener("click", function() {
    color = "green";
  });

const yellow = document
  .getElementById("yellow")
  .addEventListener("click", function() {
    color = "yellow";
  });

const blue = document
  .getElementById("blue")
  .addEventListener("click", function() {
    color = "blue";
  });

const white = document
  .getElementById("white")
  .addEventListener("click", function() {
    color = "white";
  });
