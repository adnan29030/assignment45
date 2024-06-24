#!/usr/bin/env node

// -------------- Question No 3--------------------

// --------------- Store A Person's Name in a Variable -------------------
let personName : string =" ";

// ----------------- When input from viewer -------------

personName = prompt("what is your name")|| " ";


let lowercase : string = personName.toLowerCase();
let uppercase : string = personName.toLocaleUpperCase();
let titlecase : string = personName.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")

//-------------------Person’s Name in Lowercase, Uppercase, & Titlecase. ---------------

if(personName !== null && personName !== " "){
    alert(`Hello ${personName}, here are your name in:
    UpperCase:${lowercase}
    TitleCase:${uppercase}
    LowerCase:${titlecase} `)
}

//---------------When viewr not input -------------------

else{
    alert("please fill your name !")

}


//------------------ out put Display on browser------------------ 
