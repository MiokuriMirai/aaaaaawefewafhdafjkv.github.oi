document.addEventListener('mousemove', function(e) {
    const mask = document.getElementById('mask');
    const rect = mask.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mask.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 100px, black 150px)`;
});
