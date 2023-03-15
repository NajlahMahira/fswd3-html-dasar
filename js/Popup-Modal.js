        // POP UP alert
        console.log("~~POP UP alert~~");
        let waktuSekarang = new Date();
        let waktuString = waktuSekarang.toLocaleString();
        alert("Selamat datang di POP UP Modal Javascript");
        alert("Sekarang tanggal: " + new Date());
        console.log("Selamat datang di POP UP Modal Javascript");
        console.log("Waktu saat ini: " + waktuString);

        // POP UP Box
        console.log("~~POP UP Box~~");
        function popupBox() {
            alert("Ini adalah pesan dalam kotak pop-up!");
            console.log("Ini adalah pesan dalam kotak pop-up!");
        }

        /* Call The POP UP Box Function */
        popupBox();

        // POP UP Promp
        console.log("~~POP UP Promp~~");
        let response1 = prompt("Apakah Kamu Mau Berbuka Puasa Bersama Akhir Pekan Ini?");
        alert("Jawabannya Adalah " + response1);
        console.log("Apakah Kamu Mau Berbuka Puasa Bersama Akhir Pekan Ini?" + "Jawabannya Adalah " + response1);

        // POP UP Confirm
        console.log("~~POP UP Confirm~~");
        let response2 = confirm("Apakah Kamu Mau Bermain Bola Sore Ini?");
        alert("Jawabannya Adalah " + response2);
        console.log("Apakah Kamu Mau Berbuka Puasa Bersama Akhir Pekan Ini?" + "Jawabannya Adalah " + response2);