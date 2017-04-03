function jediName(firstName, lastName)	 {
	return (lastName.slice (0,3) + firstName.slice(0,2));
	}
	console.log(jediName('Saule', 'Bohoney'));

function beyond(num){
	if (isFinite(num) === false){
		console.log("And beyond.");
	} else if (isFinite(num) === true && num > 0){
		console.log("To infinity.");
	} else if (isFinite(num) === true && num < 0){
		console.log("To negative infinity.");
	} else if (num==0){
		console.log("Staying home.");
	}
}

beyond(1.5);