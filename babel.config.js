module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        rootPathPrefix: "",
        rootPathSuffix: "src",
      },
    ],
    "react-native-reanimated/plugin",
    [
      "babel-plugin-styled-components",
      {
        fileName: true,
      },
    ],
    [
      "module-resolver",
      {
        root: ["./src"],
      },
    ],
  ],
};
