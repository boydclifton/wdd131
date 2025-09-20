


// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');
// const text = document.querySelector("text");

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');

// });


// const currentYear = document.querySelector("#currentyear");
// const today = new Date();
// currentYear.innerHTML = today.getFullYear();

// const lastModifiedDate = document.lastModified;
// lastModified.innerHTML = lastModifiedDate;

let firstName = "Antonio";
let lastName = "Francesca";

function fullName(first, last) {
	return `${firstName} ${lastName}`;
}

const fullName = function (first, last) {
	return `${first} ${last}`;
}

const fullname = (first, last) => `${first} ${last}`;

document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);