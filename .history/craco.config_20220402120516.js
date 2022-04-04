const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    extensions: [".ts", ".js", ".tsx", ".json"],
    alias: {
      "@": resolve("src"),
    },
  },
};
