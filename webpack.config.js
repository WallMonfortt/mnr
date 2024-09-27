module.exports = {
  entry: "./src/index.tsx", // this is the entry file for the application
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"], // these are the file extensions webpack will look for
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // this is the file extension webpack will look for
        exclude: /node_modules/, // this is the folder that webpack will ignore
        use: {
          loader: "ts-loader", // this is the loader that webpack will use to compile the typescript code
        },
      },
    ],
  },
};
