function openMateriDasar() {
    window.open(
        "https://drive.google.com/drive/folders/LINK_MATERI_DASAR",
        "_blank"
    );
}

function openMateriMenengah() {
    window.open(
        "https://drive.google.com/drive/folders/LINK_MATERI_MENENGAH",
        "_blank"
    );
}

function openMateriIntensif() {
    window.open(
        "https://drive.google.com/drive/folders/LINK_MATERI_INTENSIF",
        "_blank"
    );
}

function openFormmateri() {
    window.open(
        "https://forms.gle/m4AUwud2YiRUCXiM8",
        "_blank"
    );
}


function showAll() {
    document.querySelectorAll('.menu-card').forEach(card => {
        card.style.display = 'block';
    });
}

function showClass(className) {
    document.querySelectorAll('.menu-card').forEach(card => {
        if (card.classList.contains(className)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}




function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Tutup dropdown saat klik luar
document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".nav-right");
    if (!dropdown.contains(e.target)) {
        document.getElementById("dropdownMenu").style.display = "none";
    }
});





function openWhatsApp() {
    window.open(
        "https://wa.me/6285185409887",
        "_blank"
    );
}