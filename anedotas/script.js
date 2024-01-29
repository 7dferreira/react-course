import { anedotas } from './anedotas.js';

const btn = document.querySelector('.joke-button');
const text = document.querySelector('.texto-anedota');

let currentJokeIndex

function getJoke() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * anedotas.length);
    } while (randomIndex === currentJokeIndex);

    currentJokeIndex = randomIndex;

    return anedotas[currentJokeIndex];
}

btn.addEventListener('click', e => {
	e.preventDefault();
	
    const newJoke = getJoke();

    text.innerHTML = newJoke;
});