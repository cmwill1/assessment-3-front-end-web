console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("the form has been submitted successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("catPic").addEventListener("mouseover", function(){ alert("You are the best"); });
