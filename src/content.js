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

const createMainPage = () => {
  createContent("header", "main-header", "#content");
  createContent("div", "tittle", ".main-header");
  createContent("h1", "main-tittle", ".tittle", "Don Carlos");
  createContent(
    "img",
    "logo",
    ".tittle",
    null,
    "../src/resource/main-icon.png"
  );
  createContent(
    "h2",
    "main-sub",
    ".main-header",
    "Come on down for some delicious cuisine!",
    null
  );
  createContent("h3", "main-sub-sub", ".main-header", "Tasty and affordable!");
  createContent("div", "main-content", "#content");
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
  createContent(
    "img",
    null,
    ".location-box",
    null,
    "../src/resource/location-ico.png"
  );

  createContent(
    "p",
    null,
    ".location-box",
    "1024 Oakwood Ave San Diego, CA 22434"
  );
  createContent(
    "img",
    null,
    ".location-box",
    null,
    "../src/resource/mobile-icon.png"
  );
  createContent("p", null, ".location-box", "(222)-888 5555");
};

createMainPage();

export { createMainPage };
