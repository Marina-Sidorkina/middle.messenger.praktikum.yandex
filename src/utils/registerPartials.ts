import * as Components from "../components";
import Handlebars from "handlebars";

export const registerPartials = () => {
  Handlebars.registerPartial("Header", Components.Header);
  Handlebars.registerPartial("Link", Components.Link);
  Handlebars.registerPartial("Input", Components.Input);
  Handlebars.registerPartial("Button", Components.Button);
  Handlebars.registerPartial("Dialog", Components.Dialog);
  Handlebars.registerPartial("PhotoImage", Components.PhotoImage);
  Handlebars.registerPartial("UploadImage", Components.UploadImage);
  Handlebars.registerPartial("ExitImage", Components.ExitImage);
  Handlebars.registerPartial("CloseFilledImage", Components.CloseFilledImage);
  Handlebars.registerPartial("CloseImage", Components.CloseImage);
  Handlebars.registerPartial("ProfileImage", Components.ProfileImage);
};
