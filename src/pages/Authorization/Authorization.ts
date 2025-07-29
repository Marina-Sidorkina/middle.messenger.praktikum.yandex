import Handlebars from "handlebars";
import AuthorizationHtml from "./Authorization.hbs?raw";
import styles from "./Authorization.module.scss";
import { AUTHORIZAZTION_SETTINGS } from "./constants";

export const getAuthorizationPage = () => {
  const template = Handlebars.compile(AuthorizationHtml);

  return template({
    styles,
    settings: AUTHORIZAZTION_SETTINGS,
  });
};
