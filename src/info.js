import { createContent } from "./content";
import chef from "./resource/chef.jpg";

const createInfo = () => {
  createContent("div", "display-web", "#content");
  createContent("div", "section-menu", ".display-web");

  createContent("h1", "menu-head", ".section-menu", "Hey ,This is Me");
  createContent("img", "info-img", ".section-menu", null, chef);
  createContent(
    "p",
    "info-text",
    ".section-menu",
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
  voluptas tempore. Ullam voluptas natus alias inventore tempore
  voluptatibus in nemo. Et vitae ipsam possimus. Aperiam ex blanditiis
  veritatis placeat molestiae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Esse fugiat assumenda ullam sed labore molestiae
  praesentium corrupti commodi odit sequi voluptatum maxime repellendus
  omnis minima, est quas quis unde. Ullam.`
  );
};

export { createInfo };
