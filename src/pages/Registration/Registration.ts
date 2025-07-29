import Handlebars from "handlebars";
import RegistrationHtml from "./Registration.hbs?raw";
import styles from "./Registration.module.scss";
import { REGISTRATION_SETTINGS } from "./constants";

export const getRegistrationPage = () => {
  const template = Handlebars.compile(RegistrationHtml);

  return template({
    styles,
    settings: REGISTRATION_SETTINGS,
  });
};
