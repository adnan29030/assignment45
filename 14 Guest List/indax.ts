
//-------------Maka a Guest List ----------------------

import { log } from "console"

let guestList: string [] = ["Quaid Azam Muhammad Ali Jinha", "Sir Liaqat ALi Khan", "Anwar Maqsood", "Sir Zia Khan"]

//---------------Invite Guest for Dinner -------------------

console.log(" \n There is my Honorable Guest List is as under \n \t \n" +"\t" + guestList ); 

for (let i=0; i < guestList.length; i++){
    console.log("\n it is my honor that you are Mr" +guestList[i]+" invite to come my party for dinner ");
}