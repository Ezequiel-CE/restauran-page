import { createContent, createNav } from "./content";
import pizza from "./resource/pizza.jpg";
import burger from "./resource/burger.jpg";
import steak from "./resource/steak.jpg";
import chiken from "./resource/chiken-wings.jpg";
import icecream from "./resource/ice-cream.jpg";
import cake from "./resource/cake.jpg";

const createMenu = () => {
  createContent("div", "display-web", "#content");
  createContent("div", "section-menu", ".display-web");
  createContent("h1", "section-tittle", ".section-menu", "This is our menu");
  createContent("div", "menu-container", ".section-menu");
  //cartas
  createContent("div", "menu-car1", ".menu-container");
  createContent("h3", "menu-tittle", ".menu-car1", "Pizza");
  createContent("img", "menu-img", ".menu-car1", null, pizza);
  createContent("div", "menu-car2", ".menu-container");
  createContent("h3", "menu-tittle", ".menu-car2", "Hamburger");
  createContent("img", "menu-img", ".menu-car2", null, burger);
  createContent("div", "menu-car3", ".menu-container");
  createContent("h3", "menu-tittle", ".menu-car3", "Steak");
  createContent("img", "menu-img", ".menu-car3", null, steak);
  createContent("div", "menu-car4", ".menu-container");
  createContent("h3", "menu-tittle", ".menu-car4", "Chiken Wings");
  createContent("img", "menu-img", ".menu-car4", null, chiken);
  createContent("div", "menu-car5", ".menu-container");
  createContent("h3", "menu-tittle", ".menu-car5", "Ice cream");
  createContent("img", "menu-img", ".menu-car5", null, icecream);
  createContent("div", "menu-car6", ".menu-container");
  createContent("h3", "menu-tittle", ".menu-car6", "Cake with ice tea");
  createContent("img", "menu-img", ".menu-car6", null, cake);
};

export { createMenu };
