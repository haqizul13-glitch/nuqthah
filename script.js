// FAQ toggle
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "flex" ? "none" : "flex";
    });
}


// Modal
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}
function openRegister() {
    document.getElementById("registerModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("registerModal").style.display = "none";
}











function openMateri() {
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSenYmtXreOdpBF1AcWwIh1QBNbAWQPHW8Yk8eRyRyKpJ_lHlQ/viewform?usp=header",
        "_blank"
    );
}

function openForm() {
    window.open(
        "https://forms.gle/m4AUwud2YiRUCXiM8",
        "_blank"
    );
}


function openabsen() {
    window.open(
        "https://forms.gle/beGUK3Ko9Wg91S3c7",
        "_blank"
    );
}

function openWhatsApp() {
    window.open(
        "https://wa.me/6285185409887",
        "_blank"
    );
}





function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".nav-right");
    if (dropdown && !dropdown.contains(e.target)) {
        document.getElementById("dropdownMenu").style.display = "none";
    }
});







document.querySelectorAll('.kelas-card').forEach(card => {
    const link = card.querySelector('a');
    if (link) {
        card.addEventListener('click', () => {
            window.location.href = link.href;
        });
    }
});





document.addEventListener("DOMContentLoaded", () => {
    const eliteCard = document.getElementById("eliteCard");
    const unlockBtn = document.getElementById("unlockEliteBtn");

    // Cek status unlock
    const eliteUnlocked = localStorage.getItem("eliteUnlocked");

    if (eliteUnlocked === "true") {
        unlockEliteUI();
    }

    if (unlockBtn) {
        unlockBtn.addEventListener("click", () => {
            // simulasi pembayaran / form
            window.open(
                "https://forms.gle/m4AUwud2YiRUCXiM8",
                "_blank"
            );

            // SIMULASI UNLOCK (nanti bisa dipindah ke setelah bayar)
            localStorage.setItem("eliteUnlocked", "true");

            unlockEliteUI();
        });
    }

    function unlockEliteUI() {
        eliteCard.classList.remove("locked");
        eliteCard.classList.add("unlocked");

        eliteCard.querySelector(".lock-icon").remove();
        eliteCard.querySelector(".locked-btn").remove();

        const link = document.createElement("a");
        link.href = "materi.html";
        link.className = "kelas-btn";
        link.innerText = "Masuk Kelas Elite";

        eliteCard.appendChild(link);
    }
});
