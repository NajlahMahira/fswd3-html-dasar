// Aritmethic Operator
console.log("~~Operator Aritmethic~~");
let i = 17;
let j = 3;
console.log("i = 100 , j = 25")
console.log("Penjumlahan : " + i + j);
console.log("Pengurangan : " + i - j);
console.log("Perkalian : " + i * j);
console.log("Pembagian : " + i / j);
console.log("Perpangkatan : " + i ** j);
console.log("Sisa Bagi : " + i % j);
alert("Aritmethic Operator \ni = " + i + " dan j = " + j + "\ni + j = " + (i+j) + "\ni - j = " + (i-j) + "\ni * j = " + (i*j) + "\ni / j = " + (i/j) + "\ni ** j = " + (i**j) + "\ni % j = " + (i%j));

// Assignment Operator
console.log("~~Assignment Operator~~");
let n = 2;
console.log(n);
n += 5;
console.log(n);
n -= 3;
console.log(n);
n *= 2;
console.log(n);
n /= 2;
console.log(n);
n **= 3;
console.log(n);
n %= 3;
console.log(n);
n = 2;
alert("Assignment Operator \nn = " + n + "\nn += 5 hasilnya " + (n+=5) + "\nn -= 3 hasilnya " + (n-=3) + "\nn *= 2 hasilnya " + (n*=2) + "\nn /= 2 hasilnya " + (n/=2) + "\nn **= 3 = " + (n**=3) + "\nn %= 3 = " + (n%=3));

// Comparison Operator
console.log("~~Comparison Operator~~");
let a = 4;
let b = 5;
let c = 5;

console.log(a == b);
console.log(a < b);
console.log(a <= b);
console.log(b <= c);
console.log(a > b);
console.log(a >= b);
console.log(b >= c);
console.log(a !== b);
alert("Comparison Operator \n" + "a == b, hasilnya " + false + "\n" + "a < b, hasilnya " + true + "\n" + "a <= b, hasilnya " + true + "\n" + "b <= c, hasilnya " + true + "\n" + "a > b, hasilnya " + false + "\n" + "a >= b, hasilnya " + false + "\n" + "b >= c, hasilnya " + true + "\n" + "a !== b, hasilnya " + true);

// Logical Operator
console.log("~~Logical Operator~~");
let l = true;
let m = false;
console.log(l && m);
console.log(l || m);
console.log(!l);
alert("Logical Operator \nl = " + l + " dan m = " + m + "\n(nl && m) hasilnya " + (l&&m) + "\n(l || m) hasilnya " + (l||m) + "\n(!l) hasilnya " + (!l));

// Bitwise Operator
console.log("~~Bitwise Operator~~");
let x = 00111100;
let y = 00001101;
console.log(x  & y);
console.log(x  | y);
console.log(x  ^ y);
console.log(~x);
alert("Bitwise Operator \nx = " + x + " dan y = " + y + "\n(x & y) hasilnya " + (x&y) + "\n(x | y) hasilnya " + (x|y) + "\n(x ^ y) hasilnya " + (x^y) + "\n(~x) hasilnya " + (~x));

// Ternary Operator
console.log("~~Ternary Operator~~")
let p = 1;
let q = 1;
console.log(p == q ? "yes" : "no");
alert("Ternary Operator \n p = " + p + " dan q = " + q + "\nuntuk (p == q ? 'yes' : 'no') hasilnya adalah " + (p==q ? "yes":"no"))
