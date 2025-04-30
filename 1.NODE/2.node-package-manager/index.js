const lodash = require("lodash");

const names = ["adams", "kiptalam", "ngeno"];

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
