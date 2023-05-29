"use strict";
//arrays declare
let reviews = [1, 2, 3, 4.2, 5, 6];
// for loop 
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average is -->" + total / reviews.length);
let sports = ["golf", "cricket", "tennis", "swimming", "boom"];
for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
//simplified for loops
for (let i of sports) {
    console.log(i);
}
//conditionlas
for (let i of sports) {
    if (i == "boom") {
        console.log(`${i} is my fav`);
    }
    else {
        console.log(i);
    }
    console.log();
}
// growable arrays/dynamic arrays in TS are always like this
sports.push("nicegame");
sports.push("swimming");
for (let i of sports) {
    console.log(i);
}
