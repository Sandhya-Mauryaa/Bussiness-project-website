document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        window.location.href = `${service}.html`;
    });
});
