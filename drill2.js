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

function decode(word){
	if (word.substring(0,1) == 'a'){
		return(word.substring(1,2));
	} else if (word.substring(0,1) == 'b'){
		return(word.substring(2,3));
	} else if (word.substring(0,1) == 'c'){
		return(word.substring(3,4));
	} else if (word.substring(0,1) == 'd'){
		return(word.substring(4,5));
	} else return(' ');
}


beyond(1.5);
decode('craft');
decode('block');
decode('argon');
decode('meter');
decode('bells');
decode('brown');
decode('croon');
decode('droop');
