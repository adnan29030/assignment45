//-------------- 1. Method  Loop -----------------
let names = ["Farhan", "Noman", "Moiz", "Maryam"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// --------------- 2. Method ForEach-----------------
names.forEach(List => {
    console.log(List);
});
// --------------- 3. Method For Of Loop --------------
for (let friendName of names) {
    console.log(friendName);
}
export {};
