document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card, .mini-project-card');

    projectCards.forEach(card => {
        const isOngoing = card.classList.contains('ongoing');
        if (isOngoing) {
            const statusElement = document.createElement('div');
            statusElement.classList.add('project-status');
            statusElement.textContent = 'Ongoing';
            card.querySelector('.project-image').appendChild(statusElement);
        }
    });
});

