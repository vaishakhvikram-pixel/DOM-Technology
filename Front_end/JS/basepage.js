
const hamburger = document.getElementById('hamburgerBtn');
    const navOptions = document.getElementById('navOptions');

    hamburger.addEventListener('click', () => {
        navOptions.classList.toggle('active');
        hamburger.textContent = navOptions.classList.contains('active') ? '✕' : '☰';
    });