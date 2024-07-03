document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.realisation .btn');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Masque toutes les sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Affiche la section correspondante
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
