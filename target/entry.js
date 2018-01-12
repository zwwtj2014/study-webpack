require("vue");
require(["vue-router"]);

import { foo, something } from "./dep-one.js";

something();
foo();

var foovoo = document.querySelectorAll(".foo");
console.log(foovoo);

System.import("./dep-two.js").then(module => {
  let hello = module.hello;
  hello();
});
