const popup = document.getElementById("popup");
const form = document.getElementById("contactForm");
const closeBtn = document.getElementById("closeBtn");
const popupMessage = document.getElementById("popupMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    popupMessage.textContent = `Terimakasih ${name}, telah menghubungi kami`
    popup.style.display = "flex";
    form.reset();
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
    form.reset();
});
