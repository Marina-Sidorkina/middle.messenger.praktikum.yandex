import Handlebars from "handlebars";
import Registration from "./Registration.hbs?raw";
import { REGISTRATION_SETTINGS } from "./constants";

import styles from "./Registration.module.scss";

export const getRegistrationPage = () => {
  const template = Handlebars.compile(Registration);

  return template({
    styles,
    settings: REGISTRATION_SETTINGS,
  });
};
