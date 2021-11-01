import { createMainPage, createNav } from "./content";
import { createMenu } from "./menu";
import "./style.css";

createNav();
createMainPage();

const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const display = document.querySelector(".display-web");
    display.innerHTML = "";

    if (e.target.textContent === "Menu") {
      createMenu();
    }
    if (e.target.textContent === "Home") {
      createMainPage();
    }
  });
});
