"use strict";

const tabNombres = [200, 450, -25, 3000, -650, 130, 425, -24];

const tabFilter = tabNombres.filter((x) => x > 100);
console.log(tabFilter);

const tabMap = tabNombres.map(x => x > 100 ? "❤":"💨");
console.log(tabMap);
