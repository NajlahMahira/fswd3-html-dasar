//Tipe Konversi
console.log("~~Data Type Conversion~~")
let value1 = false;
value2 = String(value1);
console.log(value2, typeof value2);
console.log("10" / "5");
let value3 = ("10" / "5");
let str = "12345";
console.log("str bertipe ", typeof str, " dengan value : ", str);
let num = Number(str);
console.log("num bertipe ", typeof num);
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));
alert("Konversi Tipe Data \nvalue1 = " + value1 + " bertipe " + typeof value1 + " menjadi value2 = " + value2 + " bertipe " + typeof value2 + "\n('10'/'5') menghasilkan nilai " + value3 +"\nstr = '12345' bertipe " + typeof str + " menjadi bernilai " + num + " bertipe " + typeof num + "\nBoolean(1) dan Boolean('hello) sama-sama bernilai " + Boolean('hello') + " bertipe " + typeof Boolean('hello') + "\nBoolean(0) dan Boolean('') sama-sama bernilai " + Boolean('') + " bertipe " + typeof Boolean(''));