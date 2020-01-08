const myHeading1 = document.querySelector('h1');

let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mysrc = myImage.getAttribute('src');
	if(mysrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src', 'images/ashok-chakra.png');
		myHeading1.textContent = "Ashok Chakra!";
	}
	else{
		myImage.setAttribute('src', 'images/firefox-icon.png');
		myHeading1.textContent = "FireFox";
	}
	
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Please enter your name!!');
	if(!myName || myName === null){
		setUserName();
	}
	else{
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Hello!!' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
}
else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hi !,' + storedName;
}

myButton.onclick = function(){
	setUserName();
}

