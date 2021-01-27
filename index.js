const PATH_TO_BUNDLE = "<absolute path to bundle file>";
const PATH_TO_SOURCEMAP = "<absolute path to map file>";

const validate = require("sourcemap-validator"),
  fs = require("fs"),
  assert = require("assert"),
  min = fs.readFileSync(PATH_TO_BUNDLE, "utf-8"),
  map = fs.readFileSync(PATH_TO_SOURCEMAP, "utf-8");

assert.doesNotThrow(function () {
  validate(min, map);
}, "The sourcemap is not valid");

console.log("I made it here! The map is valid!");
