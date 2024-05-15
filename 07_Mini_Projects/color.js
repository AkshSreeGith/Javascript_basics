console.log("Akshay");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const defaultBtn = document.querySelector(".default-btn");

console.log("Akshay");
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "brown") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

defaultBtn.addEventListener("click", function () {
  body.style.backgroundColor = "white";
});
