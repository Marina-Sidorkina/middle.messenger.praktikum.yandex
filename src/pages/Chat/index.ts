import Handlebars from "handlebars";
import Chat from "./Chat.hbs?raw";
import styles from "./Chat.module.scss";

export const getChatPage = () => {
  const template = Handlebars.compile(Chat);

  return template({
    styles,
  });
};
