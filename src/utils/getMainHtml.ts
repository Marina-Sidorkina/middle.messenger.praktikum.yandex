import { getAuthorizationPage } from "../pages/Authorization/Authorization";
import { getRegistrationPage } from "../pages/Registration/Registration";
import { Paths } from "../types";

export const getMainHtml = (path: Paths) => {
  switch (path) {
    case "/authorization":
      return getAuthorizationPage();
    case "/registration":
      return getRegistrationPage();
    default:
      return getAuthorizationPage();
  }
};
