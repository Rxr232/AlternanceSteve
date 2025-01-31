// Sélection des éléments de navigation et du bouton "back-to-top"
const navLinks = document.querySelectorAll('nav ul li a');
const backToTopButton = document.querySelector('.back-to-top');

// Fonction pour le défilement fluide
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fonction pour revenir en haut de la page
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
