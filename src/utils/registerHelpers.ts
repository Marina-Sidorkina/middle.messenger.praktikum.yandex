import Handlebars from "handlebars";

export const registerHelpers = () => {
  Handlebars.registerHelper("ternary", (condition, a, b) =>
    condition ? a : b
  );
};
