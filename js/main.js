
function askQuestions()  {



	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;


	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	} else if (age >= 13) {

		console.log('User is a teenager');

	} else {

		console.log('User is a child');

	}


	// General Assembly greeting exercise

	if (firstName == 'General' && lastName != 'Assembly') {

		console.log('Greeting');
		prompt('Greetings General');
	} 

	if (firstName === 'General' && lastName === 'Assembly') {

		console.log('Go Away General');
		alert('Go Away General');

	} 
	 // End of General Assembly exercise

	}




// When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	// When the user clicks on h3
	$('h3').on('click', function() {

		// SlideToggle the next element
		$(this).next().slideToggle();

	});


});

