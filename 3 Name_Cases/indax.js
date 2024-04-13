#!/usr/bin/env node
"use strict";
// -------------- Question No 3--------------------
// --------------- make variable -------------------
let personName = " ";
// ----------------- input from viewer -------------
personName = prompt("what is your name") || " ";
let lowercase = personName.toLowerCase();
let uppercase = personName.toLocaleUpperCase();
let titlecase = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
//-------------------apply if condition ---------------
if (personName !== null && personName !== " ") {
    alert(`Hello ${personName}, here are your name in:
    UpperCase:${lowercase}
    TitleCase:${uppercase}
    LowerCase:${titlecase} `);
}
//---------------viewr not input -------------------
else {
    alert("please fill your name !");
}
//------------------ out put Display on browser------------------ 
