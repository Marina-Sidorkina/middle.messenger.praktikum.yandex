import { getAuthorizationPage } from "../pages/Authorization/Authorization";
import { getProfilePage } from "../pages/Profile/Profile";
import { getRegistrationPage } from "../pages/Registration/Registration";
import { Paths } from "../types";

export const getMainHtml = (path: Paths) => {
  switch (path) {
    case "/authorization":
      return getAuthorizationPage();
    case "/registration":
      return getRegistrationPage();
    case "/profile":
      return getProfilePage(path);
    case "/profile-editor":
      return getProfilePage(path);
    default:
      return getAuthorizationPage();
  }
};
