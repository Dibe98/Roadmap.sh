const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Funzione per applicare il tema e l'icona in base al tema
function applyTheme(theme) {
    if (theme === 'light') {
        html.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        html.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Controlla se il tema è già salvato nel Local Storage
let savedTheme = localStorage.getItem('theme');

// Se non è salvato, imposta il dark mode come predefinito
if (!savedTheme) {
    savedTheme = 'dark';
    localStorage.setItem('theme', 'dark');
}

// Applica il tema salvato
applyTheme(savedTheme);

// Aggiungi evento al bottone per alternare il tema
themeToggleBtn.addEventListener('click', function () {
    let currentTheme = localStorage.getItem('theme');

    // Alterna tra light e dark e cambia l'icona
    if (currentTheme === 'dark') {
        html.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});
