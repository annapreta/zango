const form = document.getElementById('contact-form');

function validaNome(fullName){
	const fullNameArray = fullName.split(' ');
	return fullNameArray.length >= 2;
}

form.addEventListener('submit', function(e){
	let isFormValid = false;
	e.preventDefault();

	const formName = document.getElementById('form-name');
	const formSubject = document.getElementById('form-subject');
	const formEmail = document.getElementById('form-email');
	const formMessage = document.getElementById('form-message');
	const successMessage = `${formName.value}, your message about ${formSubject.value} was sent successfully. We'll reach you as soon as possible through your e-mail, ${formEmail.value}. Thank you for calling Nzango!`;
	const errorMessage = `Hello, ${formName.value}! Please, use your full name.`;

	const successMessageContainer = document.querySelector('.success-message');
	successMessageContainer.innerHTML = successMessage;
	
	const errorMessageContainer = document.querySelector('.error-message');
	errorMessageContainer.innerHTML = errorMessage;

	isFormValid = validaNome(formName.value);
	if (isFormValid){
		successMessageContainer.style.display = 'block';
		errorMessageContainer.style.display = 'none';
		formName.value = '';
		formSubject.value = '';
		formEmail.value = '';
		formMessage.value = '';
	} else {
		
		errorMessageContainer.style.display = 'block';
		successMessageContainer.style.display = 'none';
	}
});
console.log(form);