import { CLOSE_MODAL_IDS, MODALS, ROUTE_LINKS } from "../constants";
import { renderApp } from "./renderApp";

export const addListeners = (
  appElement: HTMLElement | null,
  headerHtml: string
) => {
  document.addEventListener("click", (evt) => {
    const target = evt.target as HTMLElement;
    evt.preventDefault();

    if (ROUTE_LINKS.includes(target.id)) {
      evt.preventDefault();
      const path = target.getAttribute("href");
      document.body.classList.remove("modal-open");
      renderApp(appElement, headerHtml, path, null);
    }

    if (Object.keys(MODALS).includes(target.id)) {
      const modal = MODALS[target.id];
      document.body.classList.add("modal-open");
      renderApp(appElement, headerHtml, window.location.pathname, modal);
    }

    if (CLOSE_MODAL_IDS.includes(target.id)) {
      const path = window.location.pathname;
      document.body.classList.remove("modal-open");
      renderApp(appElement, headerHtml, path, null);
    }
  });

  window.addEventListener("popstate", function (event) {
    const path = window.location.pathname;
    document.body.classList.remove("modal-open");
    renderApp(appElement, headerHtml, path, null);
  });
};
