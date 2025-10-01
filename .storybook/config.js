import "babel-polyfill";

import { configure } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";

import "../src/assets/vendor/reset.css";
import "./storybook.css";
import "../src/styles/settings/fonts";
import "../src/styles/generic";

import translations from "../i18n/en-US.json";

import { setTranslations } from "../src/utils/i18n";

setDefaults({
  header: false
});

setTranslations(translations);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
