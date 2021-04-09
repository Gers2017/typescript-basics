"use strict";
var names = ["Lore", "Kami", "Sato", "Loman"];
var list = document.querySelector("#names");
names.forEach(function (name) {
    var li = document.createElement("li");
    li.textContent = name;
    list === null || list === void 0 ? void 0 : list.append(li);
});
