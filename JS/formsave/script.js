const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');


myForm.addEventListener('submit', e => {
	e.preventDefault();

	let formulario = new FormData(myForm);
	let formObject = {};
    let name = formulario.get('nome');
    let email = formulario.get('email');
    let message = formulario.get('mensagem');

    if (name === '' || email === '' || message === '') {
        msg.style.display = 'block'
		msg.classList.add('error');
		msg.textContent = 'Please enter all fields';
    
		setTimeout(() => {
            msg.style.display = 'none';
        }, 3000);
	} else {
		console.log('success');
    


    for (const [key, value] of formulario.entries()) {
        formObject[key] = value;
    }

    console.log(JSON.stringify(formObject));

    myForm.reset();

    }
});