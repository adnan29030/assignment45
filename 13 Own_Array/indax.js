//------------Favorite Transport ----------------
let favoriteTransport = ["Mehran", "Altu", "Mira", "Honda", "XLI"];
//------------list of Favorite Transport ----------------
console.log(`list of my favorite transpot are ` + favoriteTransport);
for (let i = 0; i < favoriteTransport.length; i++) {
    console.log(`I whould like to own a ${favoriteTransport[i]}`);
}
//------------out put / print--------------------
//------------For Each Method------------------
favoriteTransport.forEach(transport => {
    console.log("my favorite transport is " + (transport));
});
export {};
