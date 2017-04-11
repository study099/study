// Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

function pluck(arr, prop) {
    var result = [];

    for (var i = 0; i < arr.length; ++i){
    	if(arr[i][prop] !== undefined){
    		result.push(arr[i][prop]);
    	}
    	else{
    		console.log("Property doesn't exist!");
    	}
	}

	return result;
}

console.log(pluck(characters, 'name')); // ['barney', 'fred']