const CracoAlias = require("craco-alias");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          configFile: false,
          presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: [
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            "react-hot-loader/babel",
          ],
        },
      },
      {
        test: /\.tsx?$/,
        loader: "craco-ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
