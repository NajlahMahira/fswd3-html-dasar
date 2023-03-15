// Loop For
console.log("~~Loop for~~");
for(let i=0; i<5; i++){
    console.log(`Iterasi ke ${i}`);
}

// Loop Do-While
console.log("~~Loop Do-While~~");
let i = 0;
do {
    console.log(`Iterasi ke ${i}`);
    i+=1;
} while(i < 5);

// Loop While
console.log("~~Loop While~~");
let y = 0;
while(y < 5) {
    console.log(`Iterasi ke ${y}`);
    y++;
}

// Loop Break
console.log("~~Loop Break~~");
for(let x = 0; x < 5; x++){
    if(x==3){
        break;
    }
    console.log(`Iterasi ke ${x}`);
}

// Loop Continue
console.log("~~Loop Continue~~");
for(let z = 0; z < 5; z++){
    if(z==3){
        continue;
    }
    console.log(`Iterasi ke ${z}`);
}
