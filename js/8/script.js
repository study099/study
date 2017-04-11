// Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

function pluck(arr, prop) {
    var result = [];

    for (var i = 0; i < arr.length; ++i){
    	result.push(arr[i][prop]);
	}

	return result;
}

console.log(pluck(characters, 'name')); // ['barney', 'fred']