import Handlebars from "handlebars";
import RegistrationHtml from "./Registration.hbs?raw";

export const getRegistrationPage = () => {
  const template = Handlebars.compile(RegistrationHtml);

  return template({});
};
