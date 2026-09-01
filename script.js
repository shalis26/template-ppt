// ===============================
// DATA TEMPLATE PPT
// ===============================

const templates = [
    {
        nama: "Template Bisnis",
        kategori: "bisnis",
        harga: "Rp15.000"
    },
    {
        nama: "Template Kuliah",
        kategori: "kuliah",
        harga: "Rp10.000"
    },
    {
        nama: "Template Seminar",
        kategori: "seminar",
        harga: "Rp20.000"
    }
];


// ===============================
// PESAN SAAT DOWNLOAD
// ===============================

const tombolDownload = document.querySelectorAll(".card a");

tombolDownload.forEach(function(tombol) {

    tombol.addEventListener("click", function() {

        const namaTemplate =
            tombol.parentElement.querySelector("h3").textContent;

        alert(
            "Template " +
            namaTemplate +
            " sedang diunduh. Terima kasih!"
        );

    });

});


// ===============================
// TAHUN OTOMATIS DI FOOTER
// ===============================

const tahun = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        "© " + tahun + " PPTStore. All Rights Reserved.";
}
