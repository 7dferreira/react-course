const btn1 = document.querySelector('.toggle-button');
const btn2 = document.querySelector('.toggle-hide');
const body = document.body;
const text = document.querySelector('.texto');
const darkMode = document.getElementById('dark-mode-text');

function saveConfig() {
    localStorage.setItem('darkMode', body.classList.contains('dark'));
    localStorage.setItem('textHidden', text.classList.contains('hide'));
}

btn1.addEventListener('click', e => {
    e.preventDefault();
    body.classList.toggle('dark');
    if(body.classList.contains('dark')) {
        btn1.innerHTML = 'Light';
        darkMode.style.display = 'block';
    } else {
        btn1.innerHTML = 'Dark';
        darkMode.style.display = 'none';
    }

    saveConfig();
});

btn2.addEventListener('click', e => {
    e.preventDefault();
    text.classList.toggle('hide');
    if(text.classList.contains('hide')) {
        btn2.innerHTML = 'Show Text';
    } else {
        btn2.innerHTML = 'Hide';
    }

    saveConfig();
});

window.addEventListener('load', () => {
    const darkModeSaved = localStorage.getItem('darkMode') === 'true';
    const textHiddenSaved = localStorage.getItem('textHidden') === 'true';

    if(darkModeSaved) {
        body.classList.add('dark');
        btn1.innerHTML = 'Light';
        darkMode.style.display = 'block';
    }

    if(textHiddenSaved) {
        text.classList.add('hide');
        btn2.innerHTML = 'Show Text';
    }
});

