<script>
// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

    /* MOUSE GLOW */
    document.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });

    /* SCROLL REVEAL (Optimized) */
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // remove this line if you want repeat animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});
</script>
