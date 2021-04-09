"use strict";
//inherits the User interface
var user1 = {
    name: "Jimmy",
    id: 200453,
    birthday: new Date("11-17-2000"),
};
var user2 = {
    name: "Jommy",
    id: 22001430,
    birthday: new Date("12-06-2001"),
    pet: "cat", //using optional parameter
};
var Thomas = {
    status: "admin",
    users: [user1, user2],
};
