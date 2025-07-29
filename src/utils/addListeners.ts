import { ROUTE_LINKS } from "../constants";
import { renderApp } from "./renderApp";

export const addListeners = (
  appElement: HTMLElement | null,
  headerHtml: string
) => {
  const profileExitElement = document.getElementById("profileExitLink");

  document.addEventListener("click", (evt) => {
    const target = evt.target as HTMLElement;
    evt.preventDefault();

    console.log();

    if (ROUTE_LINKS.includes(target.id)) {
      evt.preventDefault();
      console.log("work");
      const path = target.getAttribute("href");
      renderApp(appElement, headerHtml, path);
    }
  });

  window.addEventListener("popstate", function (event) {
    const path = window.location.pathname;
    renderApp(appElement, headerHtml, path);
  });
};
