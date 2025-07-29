import Handlebars from "handlebars";
import Profile from "./Profile.hbs?raw";
import { PROFILE_SETTINGS } from "./constants";

import styles from "./Profile.module.scss";

export const getProfilePage = (path: string) => {
  const template = Handlebars.compile(Profile);
  const isPreview = path === "/profile";

  return template({
    styles,
    settings: PROFILE_SETTINGS,
    isPreview: isPreview,
  });
};
