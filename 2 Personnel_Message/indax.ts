#!/usr/bin/env node

// Question No2 : 2.	Personal Message: 

// Store a person’s name in a variable,

let personName : string = " ";

personName = prompt("what is your name?") || " ";

if(personName !== null && personName !== " "){
    alert(`Hello ${personName}, Whould you like to learn some phyton today?`)
}

else{
    alert("you have to fill your name")

}


//----------------Result Display at Browser --------------------------