import Handlebars from "handlebars";
import Error from "./Error.hbs?raw";
import styles from "./Error.module.scss";

export const getErrorPage = (errorCode: number) => {
  const template = Handlebars.compile(Error);
  const isServerError = errorCode.toString().startsWith("5");

  return template({
    styles,
    isServerError,
    errorCode,
  });
};
