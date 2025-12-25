const logo = document.querySelector('.logo-text');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    logo.style.transform = `rotateX(${ -y }deg) rotateY(${ x }deg)`;
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
