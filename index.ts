import * as Components from "./src/components";
import Handlebars from "handlebars";
import { registerPartials } from "./src/utils/registerPartials";
import { DEFAULT_PATH, NAVIGATION_LINKS } from "./src/constants";
import { renderApp } from "./src/utils/renderApp";

document.addEventListener("DOMContentLoaded", () => {
  registerPartials();

  const appElement = document.getElementById("app");
  const headerTemplate = Handlebars.compile(Components.Header);
  const headerHtml = headerTemplate({ links: NAVIGATION_LINKS });

  renderApp(appElement, headerHtml, DEFAULT_PATH);

  document.addEventListener("click", (evt) => {
    const target = evt.target as HTMLElement;
    evt.preventDefault();

    if (target.classList.contains("navLink")) {
      evt.preventDefault();
      const path = target.getAttribute("href");
      renderApp(appElement, headerHtml, path);
    }

    if (target.id === "registrationLink" || target.id === "authorizationLink") {
      evt.preventDefault();
      const path = target.getAttribute("href");
      renderApp(appElement, headerHtml, path);
    }
  });

  window.addEventListener("popstate", function (event) {
    const path = window.location.pathname;
    renderApp(appElement, headerHtml, path);
  });
});
