import { getAuthorizationPage } from "../pages/Authorization";
import { getErrorPage } from "../pages/Error";
import { getProfilePage } from "../pages/Profile";
import { getRegistrationPage } from "../pages/Registration";
import { Modals, Paths } from "../types";

export const getMainHtml = (path: Paths, modal: Modals) => {
  switch (path) {
    case "/authorization":
      return getAuthorizationPage();
    case "/registration":
      return getRegistrationPage();
    case "/profile":
      return getProfilePage(path, modal);
    case "/profile-editor":
      return getProfilePage(path, modal);
    case "/404":
      return getErrorPage(404);
    case "/500":
      return getErrorPage(500);
    default:
      return getAuthorizationPage();
  }
};
