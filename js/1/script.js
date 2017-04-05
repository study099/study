
function sequence(start = 0, step = 1){
	var flag = true;
	
	return  () => {
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