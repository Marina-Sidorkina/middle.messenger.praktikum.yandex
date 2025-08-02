import { CLOSE_MODAL_IDS, MODALS, ROUTE_LINKS } from "../constants";
import { addAvatarListener } from "./addAvatarListener";
import { renderApp } from "./renderApp";

export const addListeners = (
  appElement: HTMLElement | null,
  headerHtml: string
) => {
  document.addEventListener("click", (evt) => {
    const target = evt.target;
    const isTargetElement = target instanceof HTMLElement;

    if (!isTargetElement) {
      return;
    }

    if (ROUTE_LINKS.includes(target.id)) {
      evt.preventDefault();
      const path = target.getAttribute("href");
      document.body.classList.remove("modal-open");
      renderApp(appElement, headerHtml, path, null);
    }

    if (Object.keys(MODALS).includes(target.id)) {
      evt.preventDefault();
      const modal = MODALS[target.id];
      document.body.classList.add("modal-open");
      renderApp(appElement, headerHtml, window.location.pathname, modal);
    }

    if (CLOSE_MODAL_IDS.includes(target.id)) {
      evt.preventDefault();
      const path = window.location.pathname;
      document.body.classList.remove("modal-open");
      renderApp(appElement, headerHtml, path, null);
    }

    if (target.id === "avatarInput") {
      addAvatarListener();
    }
  });

  window.addEventListener("popstate", function (event) {
    const path = window.location.pathname;
    document.body.classList.remove("modal-open");
    renderApp(appElement, headerHtml, path, null);
  });
};
