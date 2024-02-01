const colors = require("./src/styles/settings/colors.css");

module.exports = {
  plugins: [
    require("postcss-simple-vars")({ variables: colors }),
    require("cssnano"),
    require("postcss-nested"),
    require("postcss-preset-env"),
  ],
};
