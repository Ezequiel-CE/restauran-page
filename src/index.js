import { createMainPage, createNav } from "./content";
import { createMenu } from "./menu";
import { createInfo } from "./info";

import "./style.css";

createNav();
createMainPage();

const navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const display = document.querySelector(".display-web");

    document.getElementById("content").removeChild(display);

    if (e.target.textContent === "Menu") {
      createMenu();
    }
    if (e.target.textContent === "Home") {
      createMainPage();
    }
    if (e.target.textContent === "Info") {
      createInfo();
    }
  });
});
