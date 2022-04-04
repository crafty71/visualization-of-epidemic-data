const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
