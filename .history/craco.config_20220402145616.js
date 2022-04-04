const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
};
