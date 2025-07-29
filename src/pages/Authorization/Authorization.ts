import Handlebars from "handlebars";
import Authorization from "./Authorization.hbs?raw";
import styles from "./Authorization.module.scss";
import { AUTHORIZAZTION_SETTINGS } from "./constants";

export const getAuthorizationPage = () => {
  const template = Handlebars.compile(Authorization);

  return template({
    styles,
    settings: AUTHORIZAZTION_SETTINGS,
  });
};
