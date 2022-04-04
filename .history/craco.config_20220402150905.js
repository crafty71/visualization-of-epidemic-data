const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    alias: {
      "@": resolve("src"),
    },
  },
};
