const cards = document.querySelectorAll(".month-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});