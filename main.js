document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('.table-row');

    function handleAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const row = entry.target;
                row.classList.add('animate');
                observer.unobserve(row);
            }
        });
    }
    const observer = new IntersectionObserver(handleAnimation, {
        root: null,
        rootMargin: '0px',
        threshold: 0.01
    });

    rows.forEach(row => {
        observer.observe(row);
    });
});


