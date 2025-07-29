import { Modals, Paths } from "../types";
import { getMainHtml } from "./getMainHtml";

export const renderApp = (
  element: HTMLElement | null,
  headerHtml: string,
  path: string | null,
  modal: Modals
) => {
  if (!element || !path) {
    return;
  }

  const mainHtml = getMainHtml(path as Paths, modal);
  window.history.pushState({}, "", path);
  element.innerHTML = headerHtml + mainHtml;
};
