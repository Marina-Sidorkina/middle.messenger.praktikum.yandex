import * as Components from "../components";
import Handlebars from "handlebars";

export const registerPartials = () => {
  Handlebars.registerPartial("Header", Components.Header);
  Handlebars.registerPartial("Link", Components.Link);
  Handlebars.registerPartial("Input", Components.Input);
  Handlebars.registerPartial("Button", Components.Button);
  Handlebars.registerPartial("Dialog", Components.Dialog);
};
