// Select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const square = document.querySelector("#square");

// Set initial state of menu

let showMenu = false;

class SquareModel {
  constructor() {
    this.whichSide = "top";
  }
  update(side) {
    this.whichSide = side;
  }
}

class SquareController {
  constructor(model) {
    this.model = model;
  }
  handleInput(key) {
    this.key = key;
    switch (this.key) {
      case "w":
        this.model.update("top");
        console.log(this.key);
        break;
      case "s":
        this.model.update("bottom");
        console.log(this.key);
        break;
      case "d":
        this.model.update("right");
        console.log(this.key);
        break;
      case "a":
        this.model.update("left");
        console.log(this.key);
        break;
    }
  }
}

class SquareView {
  constructor(model, controller) {
    this.model = model;
    this.controller = controller;
  }
  draw() {
    switch (this.model.whichSide) {
      case "top":
        square.style.borderTop = "5px solid red";
        break;
      case "bottom":
        square.style.borderBottom = "5px solid red";
        break;
      case "right":
        square.style.borderRight = "5px solid red";
        break;
      case "left":
        square.style.borderLeft = "5px solid red";
        break;
    }
  }
}

let squareModel = new SquareModel();
let squareController = new SquareController(squareModel);
let squareView = new SquareView(squareModel, squareController);
console.log(squareModel.whichSide);
document.addEventListener("keydown", getKey);
menuBtn.addEventListener("click", toggleMenu);

function getKey(e) {
  squareController.handleInput(e.key);
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}
