
function sequence(start, step){
	var flag = true;
	if(start === undefined)
		start = 0;
	if(step === undefined)
		step = 1;
	return function (){
		if(flag){
			flag = false;
			return start;
		}
		return start += step;
	}
}

var inc = sequence(2);
console.log(inc());
console.log(inc());
console.log(inc());

var inc2 = sequence(10, 3);
console.log(inc2 ());
console.log(inc2 ());
console.log(inc2 ());