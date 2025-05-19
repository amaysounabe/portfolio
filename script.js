document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let current = 0;

    function showProject(index) {
        projects.forEach((proj, i) => {
            proj.classList.toggle('active', i === index);
        });
    }

    leftArrow.addEventListener('click', () => {
        current = (current === 0) ? projects.length - 1 : current - 1;
        showProject(current);
    });

    rightArrow.addEventListener('click', () => {
        current = (current === projects.length - 1) ? 0 : current + 1;
        showProject(current);
    });

    // Affiche le premier projet au chargement
    showProject(current);
});