// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. 
// Пример:

// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:

// var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
// Это аналог array_map из PHP.
function square(x){
	return x * x;
}

var map = function (sqr, mas){
	var arr = [];

	for(var i = 0; i < mas.length; ++i){
		arr[i] = sqr(mas[i]);
	}
	
	return arr;
}

var arr = [1, 2, 3];
console.log(map(square, arr));
console.log(arr);