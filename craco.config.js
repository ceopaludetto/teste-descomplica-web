const LodashWebpackPlugin = require("lodash-webpack-plugin");
const path = require("path");

module.exports = {
  babel: {
    plugins: ["optimize-clsx", "lodash", "graphql-tag"],
  },
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      "@": path.resolve("src"),
    },
    plugins: {
      add: [new LodashWebpackPlugin()],
    },
  },
};
