import * as Components from "./src/components";
import Handlebars from "handlebars";
import { registerPartials } from "./src/utils/registerPartials";
import { DEFAULT_PATH, NAVIGATION_LINKS } from "./src/constants";
import { renderApp } from "./src/utils/renderApp";
import { addListeners } from "./src/utils/addListeners";
import { registerHelpers } from "./src/utils/registerHelpers";

document.addEventListener("DOMContentLoaded", () => {
  registerPartials();
  registerHelpers();

  const appElement = document.getElementById("app");
  const headerTemplate = Handlebars.compile(Components.Header);
  const headerHtml = headerTemplate({ links: NAVIGATION_LINKS });

  renderApp(appElement, headerHtml, DEFAULT_PATH, null);
  addListeners(appElement, headerHtml);
});
