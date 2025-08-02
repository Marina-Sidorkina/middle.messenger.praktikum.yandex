import Handlebars from "handlebars";
import Profile from "./Profile.hbs?raw";
import { MODAL_SETTINGS, PROFILE_SETTINGS } from "./constants";

import styles from "./Profile.module.scss";
import { Modals } from "../../types";

export const getProfilePage = (path: string, modal: Modals) => {
  const template = Handlebars.compile(Profile);
  const isPreview = path === "/profile";
  const showPasswordModal = modal === "password";

  return template({
    styles,
    settings: PROFILE_SETTINGS,
    modalSettings: MODAL_SETTINGS,
    isPreview: isPreview,
    showPasswordModal,
  });
};
