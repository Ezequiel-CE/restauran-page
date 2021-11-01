import logo from "./resource/main-icon.png";
import mobile from "./resource/mobile-icon.png";
import location from "./resource/location-ico.png";

const createContent = function (
  component,
  clas = null,
  append,
  text = null,
  src = null
) {
  const el = document.createElement(component);

  if (clas !== null) {
    el.classList.add(clas);
  }
  if (text !== null) {
    el.textContent = text;
  }
  if (src !== null) {
    el.src = src;
  }

  const pare = document.querySelector(append);
  console.log(pare);
  pare.appendChild(el);
};

const createNav = () => {
  createContent("nav", "navbar", "#content");
  createContent("div", "container-logo", ".navbar");
  createContent("img", "nav-logo", ".container-logo", null, logo);
  createContent("p", "nav-tittle", ".container-logo", "Don Carlos");
  createContent("div", "container-btns", ".navbar");
  createContent("button", "nav-btn", ".container-btns", "Home");
  createContent("button", "nav-btn", ".container-btns", "Menu");
  createContent("button", "nav-btn", ".container-btns", "Info");
};

const createMainPage = () => {
  createContent("div", "display-web", "#content");
  createContent("header", "main-header", ".display-web");
  createContent("div", "tittle", ".main-header");
  createContent("h1", "main-tittle", ".tittle", "Don Carlos");
  createContent("img", "logo", ".tittle", null, logo);
  createContent(
    "h2",
    "main-sub",
    ".main-header",
    "Come on down for some delicious cuisine!",
    null
  );
  createContent("h3", "main-sub-sub", ".main-header", "Tasty and affordable!");
  createContent("div", "main-content", ".display-web");
  createContent("div", "section-2", ".main-content");
  createContent(
    "p",
    "sec2-text",
    ".section-2",
    "Welcome to the restaurant with the best meals in the country, we have everything, meat, pasta, fish and the best seasoning. Come to the place for the best attention and be part of this great family"
  );
  createContent("h2", "sec2-title", ".section-2", "Schedule");
  createContent("p", "sec2-schu", ".section-2", "Week: 6am - 6pm");
  createContent("p", "sec2-schu", ".section-2", "weekend: 8am - 10pm");
  createContent("div", "section-3", ".main-content");
  createContent("div", "location-box", ".section-3");
  createContent("img", null, ".location-box", null, location);

  createContent(
    "p",
    null,
    ".location-box",
    "1024 Oakwood Ave San Diego, CA 22434"
  );
  createContent("img", null, ".location-box", null, mobile);
  createContent("p", null, ".location-box", "(222)-888 5555");
};

export { createMainPage, createNav, createContent };
