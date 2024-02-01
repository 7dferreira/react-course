import { clientes } from './clientes.js';

const clientList = document.getElementById('clienteLista');
const leftBtn = document.getElementById('leftArrow');
const rightBtn = document.getElementById('rightArrow');

let currentIndex = 0

window.addEventListener('load', () => {
    clientInformation();

    leftBtn.addEventListener('click', () => navigateClients(-1));
    rightBtn.addEventListener('click', () => navigateClients(1));
   
})

function clientInformation() {
    const currentClient = clientes[currentIndex];

    if (currentClient) {
        const clientHTML = `
            <h1>${currentClient.name}</h1>
            <h2>${currentClient.location}</h2>
            <p>${currentClient.text}</p>
        `;
        clientList.innerHTML = clientHTML;
    } 
}

function navigateClients(direction) {
    currentIndex += direction;
    //console.log(currentIndex);
    if(currentIndex < 0) {
        currentIndex = clientes.length -1;
    } else if(currentIndex >= clientes.length)
        currentIndex = 0;
    
    clientInformation();
}
