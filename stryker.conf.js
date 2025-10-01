module.exports = function(config) {
  config.set({
    mutate: [
      "src/components/**/*.js",
      "!src/components/**/*.spec.js",
      "!src/components/**/*.stories.js",
      "!src/components/**/styles.js",
      "!src/components/**/*.snap.js"
    ],
    testRunner: "jest",
    reporter: ["clear-text", "progress", "html"],
    coverageAnalysis: "off",
    mutator: "javascript",
    logLevel: "debug"
  });
};
