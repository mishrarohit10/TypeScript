//arrays declare
var reviews = [1, 2, 3, 4.2, 5, 6];
// for loop 
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average is -->" + total / reviews.length);
var sports = ["golf", "cricket", "tennis", "swimming", "boom"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
//simplified for loops
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var i = sports_1[_i];
    console.log(i);
}
//conditionlas
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var i = sports_2[_a];
    if (i == "boom") {
        console.log("".concat(i, " is my fav"));
    }
    else {
        console.log(i);
    }
    console.log();
}
// growable arrays/dynamic arrays in TS are always like this
sports.push("nicegame");
sports.push("swimming");
for (var _b = 0, sports_3 = sports; _b < sports_3.length; _b++) {
    var i = sports_3[_b];
    console.log(i);
}
