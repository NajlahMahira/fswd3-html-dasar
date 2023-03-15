// Conditional If
console.log("~~Conditional If~~");
let response1 = prompt("1 + 1 =");
if (response1 == 2){
    alert("Correct!");
    console.log("1 + 1 = " + (response1 == 2));
}

// Conditional If-Else
console.log("~~Conditional If-Else~~");
let response2 = prompt("1 + 1 =");
if (response2 == 2){
    alert("Correct!");
    console.log("1 + 1 = " + (response2 == 2));
} else {
    alert ("wrong!");
    console.log("1 + 1 = " + false);
}

// Conditional Else-If
console.log("~~Conditional Else-If~~");
let response3 = prompt("1 + 1 =");
if (response3 == 2){
    alert("Correct!");
    console.log("1 + 1 = " + (response2 == 2));
} else if(response3 < 2) {
    alert ("Too low!");
    console.log("1 + 1 = " + false + " (Too low)");
} else if(response3 > 2) {
    alert ("Too High!");
    console.log("1 + 1 = " + false + " (Too High)");
}

// Conditional Switch
console.log("~~Conditional Switch~~");
let color = "blue";

switch (color) {
    case "blue":
        alert("I love blue");
        console.log("I love blue");
        break;
    case "white":
        alert("I love white");
        console.log("I love white");
        break;
    default:
        alert("I don't knoe what color it is!");
        console.log("I don't knoe what color it is!");
        break;
}