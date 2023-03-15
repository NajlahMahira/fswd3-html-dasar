//salam pembuka
    const nama = 'user';
	alert (`Welcome To Jankenpon ${nama}`);
	console.log (`Welcome To Jankenpon ${nama}`);

// Meminta input dari user
var userChoice = prompt("Pilih: gunting, batu, atau kertas?");

// Menggunakan Math.random() untuk memilih pilihan komputer secara acak
var computerChoice = Math.random();

// Mengubah bilangan acak menjadi pilihan komputer
if (computerChoice < 0.33) {
    computerChoice = "gunting";
} else if (computerChoice < 0.67) {
    computerChoice = "batu";
} else {
    computerChoice = "kertas";
}

// Menampilkan pilihan komputer
alert("Komputer memilih: " + computerChoice);

// Menggunakan switch case untuk mengecek hasil permainan
switch (userChoice) {
    case "gunting":
        if (computerChoice === "gunting") {
            alert("Hasil: Seri!");
        } else if (computerChoice === "batu") {
            alert("Hasil: Kamu kalah!");
        } else {
            alert("Hasil: Kamu menang!");
        }
        break;
    case "batu":
        if (computerChoice === "gunting") {
            alert("Hasil: Kamu menang!");
        } else if (computerChoice === "batu") {
            alert("Hasil: Seri!");
        } else {
            alert("Hasil: Kamu kalah!");
        }
        break;
    case "kertas":
        if (computerChoice === "gunting") {
            alert("Hasil: Kamu kalah!");
        } else if (computerChoice === "batu") {
            alert("Hasil: Kamu menang!");
        } else {
            alert("Hasil: Seri!");
        }
        break;
    default:
        alert("Pilihanmu tidak valid! Coba lagi.");
        break;
}
