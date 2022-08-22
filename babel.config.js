// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const paths = {
  assets: path.resolve(__dirname, "src", "assets"),
  config: path.resolve(__dirname, "src", "config"),
  context: path.resolve(__dirname, "src", "context"),
  interfaces: path.resolve(__dirname, "src", "interfaces"),
  modules: path.resolve(__dirname, "src", "modules"),
  routing: path.resolve(__dirname, "src", "routing"),
  services: path.resolve(__dirname, "src", "services"),
  shared: path.resolve(__dirname, "src", "shared"),
  src: path.resolve(__dirname, "src"),
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          root: ["./src"],
          alias: paths,
        },
      ],
      "react-native-reanimated/plugin",
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel", "transform-remove-console"],
      },
    },
  };
};
