
//---------------Invite Guest for Dinner -------------------

let guestList: string[] = ["Quaid-e-Azam", "Imran Khan", "Raheel Sharif"]
console.log ("Old Guest List " + guestList)

for(let i= 0; i< guestList.length; i++){
    console.log("Dear" + guestList[i] + ",\n\n \t\t it is our Honor to invite you in our party. \n\n \t \t Thank You  ")}
  
let new_guest: string = "Sir Syed Ali Khan"
guestList[1]=new_guest;
console.log("New Guest List \n\t" + guestList + "\n");

for(let i= 0; i< guestList.length; i++){
  console.log("Dear" + guestList[i] + ",\n\n \t\t it is our Honor to invite you in our party. \n\n \t \t Thank You  ")}
let absent_Guest: string = "Imran Khan"
console.log ( `Due to some domistic problem Mr. ${absent_Guest} will be not participate our Dinner programe`);