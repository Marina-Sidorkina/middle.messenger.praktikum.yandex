import { Paths } from "../types";
import { getMainHtml } from "./getMainHtml";

export const renderApp = (
  element: HTMLElement | null,
  headerHtml: string,
  path: string | null
) => {
  if (!element || !path) {
    return;
  }

  const mainHtml = getMainHtml(path as Paths);
  element.innerHTML = headerHtml + mainHtml;
};
