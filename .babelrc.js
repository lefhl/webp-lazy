module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "11"
        },
        useBuiltIns: "entry"
      }
    ]
  ],
  plugins: [
    "@babel/transform-async-to-generator",
    "@babel/transform-arrow-functions",
    "@babel/transform-modules-commonjs"
  ],
  env: {
    development: {},
    test: {},
    production: {}
  }
};
